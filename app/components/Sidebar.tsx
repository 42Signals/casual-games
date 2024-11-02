import { Link, useLocation } from "@remix-run/react";
import { categories } from "~/data/games";
import { getCategoryIcon } from "~/utils/categoryIcons";
import { useLanguage } from "~/contexts/LanguageContext";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { t } = useLanguage();
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-16 z-50 w-64 transform overflow-y-auto bg-gray-900 p-4 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-6">
          <div className="space-y-2">
            <Link
              to="/new"
              onClick={onClose}
              className={`group flex items-center gap-3 rounded-lg p-2.5 transition-all duration-200 ${
                location.pathname === "/new"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="relative flex h-6 w-6 items-center justify-center">
                <svg
                  className="h-5 w-5 transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
              </span>
              <span className="font-medium transition-transform duration-200 group-hover:translate-x-1">{t("new_games")}</span>
            </Link>

            <Link
              to="/popular"
              onClick={onClose}
              className={`group flex items-center gap-3 rounded-lg p-2.5 transition-all duration-200 ${
                location.pathname === "/popular"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <svg
                className="h-5 w-5 transform transition-all duration-200 group-hover:scale-110 group-active:scale-95"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                />
              </svg>
              <span className="font-medium transition-transform duration-200 group-hover:translate-x-1">{t("popular_games_sidebar")}</span>
            </Link>
          </div>

          <div>
            <button
              onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
              className="group mb-2 flex w-full items-center justify-between px-2 text-sm font-semibold uppercase text-gray-400 hover:text-gray-300"
            >
              <span className="transition-transform duration-200 group-hover:translate-x-1">{t("categories")}</span>
              <svg
                className={`h-4 w-4 transform transition-all duration-200 group-hover:scale-110 ${
                  isCategoriesExpanded ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            <ul
              className={`space-y-1 overflow-hidden transition-all duration-300 ${
                isCategoriesExpanded ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              {categories.map((category) => {
                const isActive = location.pathname === `/categories/${category.toLowerCase()}`;
                return (
                  <li key={category}>
                    <Link
                      to={`/categories/${category.toLowerCase()}`}
                      onClick={onClose}
                      className={`group flex items-center gap-3 rounded-lg p-2.5 pl-4 transition-all duration-200 ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <span className="text-xl transition-transform duration-200 group-hover:scale-110">{getCategoryIcon(category)}</span>
                      <span className="font-medium transition-transform duration-200 group-hover:translate-x-1">{t(`category_${category}`)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
