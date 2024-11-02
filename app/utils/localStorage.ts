const RECENTLY_PLAYED_KEY = 'recentlyPlayed';
const MAX_RECENT_GAMES = 6;

export function getRecentlyPlayed(): string[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(RECENTLY_PLAYED_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

export function addToRecentlyPlayed(gameId: string): void {
  if (typeof window === 'undefined') return;

  try {
    const recentGames = getRecentlyPlayed();
    // Remove the game if it's already in the list
    const filteredGames = recentGames.filter((id: string) => id !== gameId);
    // Add the game to the beginning of the array
    const updatedGames = [gameId, ...filteredGames].slice(0, MAX_RECENT_GAMES);

    window.localStorage.setItem(RECENTLY_PLAYED_KEY, JSON.stringify(updatedGames));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
}
