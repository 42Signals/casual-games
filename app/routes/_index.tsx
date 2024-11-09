import { useEffect, useState } from "react";
import { BannerAd } from "~/components/BannerAd";
import { RecentGameCard } from "~/components/RecentGameCard";
import { GameCard } from "~/components/GameCard";
import { useLanguage } from "~/contexts/LanguageContext";
import { games } from "~/data/games";
import type { Game } from "~/data/games";
import { getRecentlyPlayed } from "~/utils/localStorage";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ShareButtons } from "~/components/ShareButtons";

export async function loader() {
  const featuredGames = games.filter((game) => game.featured)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  return json({ featuredGames });
}

export default function Index() {
  const { featuredGames } = useLoaderData<typeof loader>();
  const [recentlyPlayed, setRecentlyPlayed] = useState<Game[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const recentGameIds = getRecentlyPlayed();
    const recentGames = recentGameIds
      .map((id: string) => games.find(game => game.id === id))
      .filter((game: Game | undefined): game is Game => game !== undefined);
    setRecentlyPlayed(recentGames);
  }, []);

  return (
    <div className="p-6">
      {/* <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t("popular_games")}
        </h1>
        <ShareButtons
          title="Casual Games - Play Free Online Games"
          description="Play the best free online casual games. New games added daily!"
        />
      </div> */}

      {recentlyPlayed.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              {t("recently_played")}
            </h2>
            <ShareButtons
            title="Casual Games - Play Free Online Games"
              description="Play the best free online casual games. New games added daily!"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {recentlyPlayed.map((game) => (
              <RecentGameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          {t("featured_games")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
