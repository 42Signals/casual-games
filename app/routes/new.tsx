import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GameCard } from "~/components/GameCard";
import { games } from "~/data/games";
import { BannerAd } from "~/components/BannerAd";
import { useLanguage } from "~/contexts/LanguageContext";

export async function loader() {
  const newGames = games.filter((game) => game.is_new);
  return json({ ngames: newGames });
}

export default function NewGames() {
  const { ngames } = useLoaderData<typeof loader>();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("new_games_title")}
          </h1>
        </div>
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {ngames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <BannerAd />
      </div>
    </div>
  );
}
