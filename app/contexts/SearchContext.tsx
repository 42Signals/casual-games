import { createContext, useContext, useState } from "react";
import { games, type Game } from "~/data/games";

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: Game[];
  isSearching: boolean;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Search logic
  const searchResults = searchTerm.trim()
    ? games.filter((game) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          game.title.toLowerCase().includes(searchLower) ||
          game.description.toLowerCase().includes(searchLower) ||
          game.category.toLowerCase().includes(searchLower) ||
          game.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      })
    : [];

  const value = {
    searchTerm,
    setSearchTerm: (term: string) => {
      setSearchTerm(term);
      setIsSearching(term.trim() !== "");
    },
    searchResults,
    isSearching,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
