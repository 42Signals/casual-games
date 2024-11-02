import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { GameCard } from "~/components/GameCard";
import { RecentGameCard } from "~/components/RecentGameCard";
import { games } from "~/data/games";
import { getRecentlyPlayed } from "~/utils/localStorage";
import type { Game } from "~/data/games";
import { BannerAd } from "~/components/BannerAd";
import { useLanguage } from "~/contexts/LanguageContext";

export async function loader() {
  const newGames = games.filter((game) => game.is_new);
  return json({ ngames: newGames });
}

export default function NewGames() {
  const { ngames } = useLoaderData<typeof loader>();
  const [recentlyPlayed, setRecentlyPlayed] = useState<Game[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const recentGameIds = getRecentlyPlayed();
    // Map IDs to actual game objects and filter out any games that might have been deleted
    const recentGames = recentGameIds
      .map((id: string) => games.find(game => game.id === id))
      .filter((game: Game | undefined): game is Game => game !== undefined);
    setRecentlyPlayed(recentGames);
  }, []);

  return (
    <div className="p-6">
      {recentlyPlayed.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            {t("recently_played")}
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {recentlyPlayed.map((game) => (
              <RecentGameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      <BannerAd />

      <section>
        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          {t("new_games_title")}
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ngames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
