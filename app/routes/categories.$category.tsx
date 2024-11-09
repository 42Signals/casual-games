import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BannerAd } from "~/components/BannerAd";
import { GameCard } from "~/components/GameCard";
import { games } from "~/data/games";
import { useLanguage } from "~/contexts/LanguageContext";
import type { Game } from "~/data/games";
import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = ({ location }) => {
  const canonicalUrl = `https://casualgames.studio${location.pathname}`;
  const { language } = useLanguage();
  return [
    { title: "Casual Games - Play Free Online Casual Games" },
    { name: "description", content: "Play the best free online casual games. Discover match 3, action, puzzle, racing, sports, shooting, card, board, RPG and strategy games. New games added daily!" },
    { name: "keywords", content: "casual, online, free, puzzle, action, racing, match 3, arcade, sports, shooting, card, board, RPG, strategy" },
    { property: "og:title", content: "Casual Games - Play Free Online Casual Games" },
    { property: "og:description", content: "Play the best free online casual games. Discover match 3, action, puzzle, racing, sports, shooting, card, board, RPG and strategy games. New games added daily!" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { rel: "canonical", href: canonicalUrl },
    { name: "language", content: language || "en" },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const category = params.category;
  const filteredGames = games.filter((game) =>
    game.category.toLowerCase() === category?.toLowerCase()
  );

  return json({ games: filteredGames, category });
};

export default function CategoryPage() {
  const { games, category } = useLoaderData<typeof loader>();
  const { t } = useLanguage();

  if (games.length === 0) {
    return (
      <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-900 p-4 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-md">
          {/* Fun 404 Animation */}
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 animate-bounce-fall flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                {/* Main Body */}
                <rect x="12" y="20" width="40" height="24" className="fill-gray-800 dark:fill-gray-200" />
                {/* Left Grip */}
                <rect x="8" y="24" width="4" height="16" className="fill-gray-800 dark:fill-gray-200" />
                {/* Right Grip */}
                <rect x="52" y="24" width="4" height="16" className="fill-gray-800 dark:fill-gray-200" />
                {/* D-Pad */}
                <rect x="16" y="28" width="4" height="8" className="fill-gray-600 dark:fill-gray-400" />
                <rect x="24" y="28" width="4" height="8" className="fill-gray-600 dark:fill-gray-400" />
                <rect x="20" y="24" width="4" height="16" className="fill-gray-600 dark:fill-gray-400" />
                {/* Buttons */}
                <rect x="40" y="28" width="4" height="4" className="fill-indigo-500" />
                <rect x="44" y="32" width="4" height="4" className="fill-red-500" />
                <rect x="36" y="32" width="4" height="4" className="fill-green-500" />
                <rect x="40" y="36" width="4" height="4" className="fill-yellow-500" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t("oops_game_over")}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("no_games_in_category_fun")
              .replace("{category}", category.toLowerCase())}
          </p>

          <div className="space-y-2 text-left text-gray-500 dark:text-gray-400">
            <p className="text-sm">
              {t("no_games_tips")}
            </p>
            <ul className="text-sm list-disc list-inside">
              <li>{t("check_other_categories")}</li>
              <li>{t("try_popular_games")}</li>
              <li>{t("check_new_games")}</li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <a
              href="/popular"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {t("popular_games")}
            </a>
            <a
              href="/new"
              className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              {t("new_games")}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {category.charAt(0).toUpperCase() + category.slice(1)} {t("games_category")}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t("explore_category").replace("{0}", games.length.toString()).replace("{1}", category.toLowerCase())}
          </p>
        </div>

        <BannerAd />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {games.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
