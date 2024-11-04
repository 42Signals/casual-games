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
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  alternativeText: string;
  structured_data?: {
    "@context": "https://schema.org";
    "@type": "VideoGame";
    name: string;
    description: string;
    genre: string;
    gameRating: string;
    numberOfPlayers: string;
    datePublished: string;
  };
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
    metaTitle: "Space Adventure - Epic Space Shooter Game | Casual Games",
    metaDescription: "Embark on an epic journey through the cosmos in this action-packed space shooter. Play for free now!",
    slug: "space-adventure",
    alternativeText: "Space Adventure game featuring a spaceship in deep space",
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
    iframeHtml: `<iframe id="if-fg-frame-" title="Blocksss" src="//html5.gamedistribution.com/24b45f0d68f84e3fba4c9215384a5b13/?gd_sdk_referrer_url=https%3A%2F%2Fwww.contezero.com%2Fgames%2Fpuzzle%2Fblocksss%2Fplay%3Afull" width="100%" height="100%" frameborder="0" scrolling="none" allowfullscreen=""></iframe>`,
    metaTitle: "Puzzle Master - Intricate Puzzles and Brain-teasers | Casual Games",
    metaDescription: "Challenge your mind with intricate puzzles and brain-teasers. Play for free now!",
    slug: "puzzle-master",
    alternativeText: "Puzzle Master game featuring a puzzle board",
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
    metaTitle: "Racing Pro - High-speed Thrills in Realistic Racing Simulator | Casual Games",
    metaDescription: "Experience high-speed thrills in this realistic racing simulator. Play for free now!",
    slug: "racing-pro",
    alternativeText: "Racing Pro game featuring a race car",
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
    iframeHtml: `<iframe referrer-policy="no-referrer" allow="accelerometer; gyroscope;" data-allowed-origins="[&quot;https://app-263298.games.s3.yandex.net&quot;,&quot;https://playhop.com&quot;]" data-origin-src="https://app-263298.games.s3.yandex.net/263298/jro50mbzovsoj3i8olpvn8a2eyk0jane/index.html?sdk=%2Fsdk%2F_%2Fv2.8d94ac668f87220c58fb.js#origin=https%3A%2F%2Fplayhop.com&amp;app-id=263298&amp;device-type=desktop" id="game-frame" name="1730566527632583-7661974934431949651-rrbkroepgrismhua-BAL" src="https://app-263298.games.s3.yandex.net/263298/jro50mbzovsoj3i8olpvn8a2eyk0jane/index.html?sdk=%2Fsdk%2F_%2Fv2.8d94ac668f87220c58fb.js#origin=https%3A%2F%2Fplayhop.com&amp;app-id=263298&amp;device-type=desktop" width="100%" height="100%" frameborder="0" scrolling="none" allowfullscreen></iframe>`,
    metaTitle: "Strategy Empire - Build Your Empire and Conquer Territories | Casual Games",
    metaDescription: "Build your empire and conquer territories in this epic strategy game. Play for free now!",
    slug: "strategy-empire",
    alternativeText: "Strategy Empire game featuring a map of the world",
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
    metaTitle: "Zombie Survival - Survive the Zombie Apocalypse | Casual Games",
    metaDescription: "Survive the zombie apocalypse in this intense action game. Play for free now!",
    slug: "zombie-survival",
    alternativeText: "Zombie Survival game featuring a zombie apocalypse",
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
    iframeHtml: `<iframe id="if-fg-frame-" title="Nuts And Bolts Screw Puzzle" src="//html5.gamedistribution.com/5116a63fee654a77b8aa0d4769439a2c/?gd_sdk_referrer_url=https%3A%2F%2Fwww.contezero.com%2Fgames%2Fpuzzle%2Fnuts-and-bolts-screw-puzzle%2Fplay%3Afull" width="100%" height="100%" frameborder="0" scrolling="none" allowfullscreen></iframe>`,
    metaTitle: "Match 3 Mania - Match Colorful Gems in Addictive Puzzle Game | Casual Games",
    metaDescription: "Match colorful gems in this addictive puzzle game. Play for free now!",
    slug: "match-3-mania",
    alternativeText: "Match 3 Mania game featuring colorful gems",
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
