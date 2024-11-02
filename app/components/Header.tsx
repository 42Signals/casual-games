import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          GameVault
        </Link>
      </div>
    </header>
  );
}
