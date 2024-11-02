import { Link } from "@remix-run/react";
import type { Game } from "~/data/games";
import { useLanguage } from "~/contexts/LanguageContext";

export function RecentGameCard({ game }: { game: Game }) {
  const { t } = useLanguage();

  return (
    <Link
      to={`/games/${game.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Title Bar - Lower z-index */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-3">
          <h4 className="text-base font-bold text-white">{game.title}</h4>
        </div>

        {/* Play Again Overlay - Higher z-index */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-lg bg-white dark:bg-gray-900 px-4 py-2 text-base font-bold text-blue-600 dark:text-blue-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
            {t("play_again")}
          </span>
        </div>
      </div>
    </Link>
  );
}
