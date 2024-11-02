import { Link } from "@remix-run/react";
import type { Game } from "~/data/games";
import { useLanguage } from "~/contexts/LanguageContext";

export function GameCard({ game }: { game: Game }) {
  const { t } = useLanguage();

  return (
    <Link
      to={`/games/${game.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:shadow-indigo-500/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {game.is_new && (
          <div className="absolute left-3 top-3 animate-pulse">
            <span className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              {t("new_tag")}
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white/90 dark:bg-gray-900/90 px-6 py-2 text-sm font-bold text-purple-600 dark:text-purple-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
            {t("play_now")} ▶
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            {game.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-semibold text-purple-700 dark:text-purple-300">
            {game.category}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-lg text-yellow-400">★</span>
            <span className="font-bold text-gray-700 dark:text-gray-200">{game.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {game.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
