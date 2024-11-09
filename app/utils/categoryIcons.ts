export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    "Match 3": "🍭",
    Action: "🎮",
    Adventure: "🗺️",
    Arcade: "👾",
    Puzzle: "🧩",
    Racing: "🏎️",
    Sports: "⚽",
    Strategy: "♟️",
    RPG: "⚔️",
    Shooting: "🎯",
    Simulation: "🎛️",
    Card: "🃏",
    Board: "🎲",
  };
  return icons[category] || "🎮";
}

