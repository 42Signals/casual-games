import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GameCard } from "~/components/GameCard";
import { games } from "~/data/games";
import type { Game } from "~/types/game";
import { useLanguage } from "~/contexts/LanguageContext";
import { BannerAd } from "~/components/BannerAd";

export async function loader() {
  const popularGames = games.filter((game) => game.featured);
  return json({ games: popularGames });
}

export default function PopularGames() {
  const { games } = useLoaderData<typeof loader>();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("popular_games")}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t("most_played")}
          </p>
        </div>
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <BannerAd />
      </div>
    </div>
  );
}
