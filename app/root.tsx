import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "@remix-run/react";
import { Sidebar } from "./components/Sidebar";
import { useState, useEffect } from "react";
import { SearchProvider, useSearch } from "./contexts/SearchContext";
import { GameCard } from "./components/GameCard";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

import "./tailwind.css";

export const links: LinksFunction = () => [];

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

function SearchResults() {
  const { searchResults, isSearching, searchTerm } = useSearch();
  const { t } = useLanguage();

  if (!isSearching) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {t("search_results")} "{searchTerm}"
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {t("found_games").replace("{0}", searchResults.length.toString())}
          </p>
        </div>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {searchResults.map((game) => (
              <Link
                key={game.id}
                to={`/games/${game.id}`}
                prefetch="intent"
                className="block transition-transform hover:scale-105"
              >
                <GameCard game={game} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            {t("no_results")}
          </div>
        )}
      </div>
    </div>
  );
}

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { setSearchTerm, isSearching } = useSearch();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <html
      lang={language}
      dir="ltr"
      className={theme}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-5521936089463799"></meta>
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: `
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-RWEPYVZY69"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RWEPYVZY69');
          </script>
        ` }} />
        <script dangerouslySetInnerHTML={{ __html: `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5521936089463799"
            crossorigin="anonymous"></script>
        ` }} />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900">
        <header className="fixed left-0 right-0 top-0 z-30 h-16 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 shadow-md">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="mx-auto flex h-full max-w-8xl items-center justify-between px-4 relative">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="mr-2 rounded-lg p-2 text-white/90 hover:bg-black/10 transition-all duration-300 lg:hidden"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
              <a href="/" className="flex items-center gap-3 group">
                <span className="text-3xl group-hover:-rotate-12 transition-transform duration-300">🎮</span>
                <span className="text-xl font-bold text-white/90 sm:text-2xl">
                  <h1>Casual
                    <span className="text-teal-100"> Games </span>
                  </h1>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block sm:w-32 md:w-64 lg:w-96">
                <input
                  type="search"
                  placeholder={t("search_games")}
                  onChange={handleSearch}
                  className="w-full rounded-full bg-black/10 px-4 py-2 pl-10 text-sm text-white placeholder-white/60 outline-none hover:bg-black/20 focus:bg-black/20 transition-all duration-300"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
                  🔍
                </span>
              </div>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-black/10 text-white/90 rounded-lg px-1.5 py-2 text-sm outline-none hover:bg-black/20 transition-all duration-300"
              >
                <option value="en">🇺🇸 English</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="es">🇪🇸 Español</option>
                <option value="zh">🇨🇳 中文</option>
                <option value="ja">🇯🇵 日本語</option>
              </select>

              <button
                onClick={toggleTheme}
                className="rounded-lg p-2 text-white/90 hover:bg-black/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="rounded-lg p-2 text-white hover:bg-white/10 sm:hidden"
              >
                <span className="text-xl">🔍</span>
              </button>
            </div>
          </div>
        </header>

        {isSearchOpen && (
          <div className="fixed inset-0 z-50 bg-gray-900/70 px-4 pt-20 sm:hidden">
            <div className="relative mx-auto max-w-md">
              <input
                type="search"
                placeholder="Search games..."
                onChange={handleSearch}
                autoFocus
                className="w-full rounded-lg bg-white px-4 py-3 pl-10 text-gray-900 placeholder-gray-500 shadow-lg outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute -right-2 -top-14 rounded-full bg-white/10 p-2 text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="relative flex min-h-screen pt-16">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="w-full flex-1 lg:pl-64">
            {isSearching ? <SearchResults /> : <Outlet />}
          </main>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SearchProvider>
          <Layout />
        </SearchProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}


