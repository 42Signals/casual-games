import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { games } from "~/data/games";
import { addToRecentlyPlayed } from "~/utils/localStorage";
import { useLanguage } from "~/contexts/LanguageContext";

export const loader: LoaderFunction = async ({ params }) => {
  const game = games.find((g) => g.id === params.gameId);
  if (!game) {
    throw new Response("Game not found", { status: 404 });
  }
  return json({ game });
};

export default function GamePage() {
  const { game } = useLoaderData<typeof loader>();
  const { t, language } = useLanguage();

  useEffect(() => {
    addToRecentlyPlayed(game.id);
  }, [game.id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Game Iframe Section */}
      <div className="mb-8">
        <div
          className="aspect-video w-full rounded-xl bg-gray-900 shadow-2xl ring-1 ring-white/10 dark:ring-white/20"
          dangerouslySetInnerHTML={{ __html: game.iframeHtml }}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Game Instructions Section */}
        <section className="rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-transform hover:scale-[1.01]">
          <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            {t("how_to_play")}
          </h2>
          <div className="prose prose-sm dark:prose-invert">
            <ul className="list-none space-y-3">
              {[
                t("move_keys"),
                t("jump_key"),
                t("mouse_click"),
                t("pause_key")
              ].map((instruction) => (
                <li key={instruction} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-3 text-indigo-500 dark:text-indigo-400">→</span>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Game Details Section */}
        <section className="rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-transform hover:scale-[1.01]">
          <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            {t("game_details")}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{t("category")}</h3>
              <p className="mt-1 text-gray-900 dark:text-gray-100">{game.category}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{t("description")}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">{game.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{t("release_date")}</h3>
              <p className="mt-1 text-gray-900 dark:text-gray-100">
                {new Date(game.releaseDate).toLocaleDateString(language === 'zh' ? 'zh-CN' : language)}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{t("rating")}</h3>
              <div className="mt-1 flex items-center">
                <span className="text-yellow-500 dark:text-yellow-400 text-xl">★</span>
                <span className="ml-2 text-gray-900 dark:text-gray-100 font-medium">{game.rating}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{t("total_plays")}</h3>
              <p className="mt-1 text-gray-900 dark:text-gray-100 font-medium">{game.plays.toLocaleString()}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{t("tags")}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {game.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 text-sm text-indigo-600 dark:text-indigo-400 font-medium ring-1 ring-indigo-100 dark:ring-indigo-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
