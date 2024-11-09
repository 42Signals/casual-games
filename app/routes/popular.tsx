import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { GameCard } from "~/components/GameCard";
import { games } from "~/data/games";
import { useLanguage } from "~/contexts/LanguageContext";
import { BannerAd } from "~/components/BannerAd";

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
