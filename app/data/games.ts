export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
  plays: number;
  description: string;
  featured: boolean;
  releaseDate: string;
  tags: string[];
  is_new: boolean;
  iframeHtml: string;
}

export const games: Game[] = [
  {
    id: "space-adventure",
    title: "Space Adventure",
    thumbnail: "https://picsum.photos/seed/game1/400/300",
    category: "Action",
    rating: 4.5,
    plays: 150000,
    description: "Embark on an epic journey through the cosmos in this action-packed space shooter.",
    featured: true,
    releaseDate: "2024-01-15",
    tags: ["Sci-fi", "Shooter", "Multiplayer"],
    is_new: true,
    iframeHtml: `<iframe src="https://www.crazygames.com/embed/basket-blitz" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>`,
  },
  {
    id: "puzzle-master",
    title: "Puzzle Master",
    thumbnail: "https://picsum.photos/seed/game2/400/300",
    category: "Puzzle",
    rating: 4.8,
    plays: 200000,
    description: "Challenge your mind with intricate puzzles and brain-teasers.",
    featured: true,
    releaseDate: "2024-02-01",
    tags: ["Logic", "Educational", "Single-player"],
    is_new: true,
    iframeHtml: `<iframe
      src="https://games.com/embed/puzzle-master"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      title="Puzzle Master">
    </iframe>`,
  },
  {
    id: "racing-pro",
    title: "Racing Pro",
    thumbnail: "https://picsum.photos/seed/game3/400/300",
    category: "Racing",
    rating: 4.2,
    plays: 180000,
    description: "Experience high-speed thrills in this realistic racing simulator.",
    featured: true,
    releaseDate: "2024-01-20",
    tags: ["Sports", "Multiplayer", "Simulation"],
    is_new: false,
    iframeHtml: `<iframe
      src="ttps://www.crazygames.com/embed/basket-blitz"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      title="Racing Pro">
    </iframe>`,
  },
  {
    id: "strategy-empire",
    title: "Strategy Empire",
    thumbnail: "https://picsum.photos/seed/game4/400/300",
    category: "Strategy",
    rating: 4.7,
    plays: 120000,
    description: "Build your empire and conquer territories in this epic strategy game.",
    featured: true,
    releaseDate: "2024-02-10",
    tags: ["Strategy", "Multiplayer", "Educational"],
    is_new: true,
    iframeHtml: `<iframe
      src="https://games.com/embed/strategy-empire"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      title="Strategy Empire">
    </iframe>`,
  },
  {
    id: "zombie-survival",
    title: "Zombie Survival",
    thumbnail: "https://picsum.photos/seed/game5/400/300",
    category: "Action",
    rating: 4.3,
    plays: 90000,
    description: "Survive the zombie apocalypse in this intense action game.",
    featured: false,
    releaseDate: "2024-02-15",
    tags: ["Action", "Shooter", "Single-player"],
    is_new: false,
    iframeHtml: `<iframe
      src="https://games.com/embed/zombie-survival"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      title="Zombie Survival">
    </iframe>`,
  },
  {
    id: "match-3-mania",
    title: "Match 3 Mania",
    thumbnail: "https://picsum.photos/seed/game6/400/300",
    category: "Puzzle",
    rating: 4.6,
    plays: 250000,
    description: "Match colorful gems in this addictive puzzle game.",
    featured: false,
    releaseDate: "2024-01-25",
    tags: ["Puzzle", "Educational", "Single-player"],
    is_new: false,
    iframeHtml: `<iframe
      src="https://games.com/embed/match-3-mania"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      title="Match 3 Mania">
    </iframe>`,
  },
];

export const categories = [
  "Action",
  "Adventure",
  "Arcade",
  "Puzzle",
  "Racing",
  "Sports",
  "Strategy",
  "RPG",
  "Shooting",
  "Simulation",
  "Card",
  "Board",
] as const;

export type Category = typeof categories[number];
