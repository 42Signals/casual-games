import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { GameCard } from "~/components/GameCard";
import { games } from "~/data/games";
import { BannerAd } from "~/components/BannerAd";
import { useLanguage } from "~/contexts/LanguageContext";

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
    { property: "og:image", content: "https://casualgames.studio/images/logo.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://casualgames.studio/images/logo.jpeg" },
    { rel: "canonical", href: canonicalUrl },
    { name: "language", content: language || "en" },
  ];
};

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
      </div>
    </div>
  );
}
