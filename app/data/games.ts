export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
  is_new: boolean;
  featured: boolean;
  description: string;
  releaseDate: string;
  source: string;
  tags: string[];
  iframeHtml: string;
  how_to_play: string;
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
  videos?: {
    title: string;
    url: string;
    thumbnail?: string;
  }[];
}

export const games: Game[] = [
  {
    id: "worldguessr",
    title: "WorldGuessr",
    thumbnail: "https://images.crazygames.com/worldguessr_16x9/20241018082520/worldguessr_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    category: "Puzzle",
    rating: 8.5,
    is_new: true,
    featured: true,
    description: `
    Discover the ultimate geography challenge with **Worldguessr** – the free, adventure-filled quiz game that lets you explore the world from your screen!
    Each round, you’ll land in a random global location, armed with only the clues around you to figure out where you are.
    From bustling cities to quiet country roads, each setting becomes an immersive puzzle waiting to be solved.
    Sharpen your geography skills, dive into thrilling Street View adventures, and see how well you know our planet!
    `,
    releaseDate: "2024-10",
    source: "https://www.crazygames.com/game/worldguessr",
    tags: ["Casual", "Mobile", "3D", "Quiz", "With Friends", "Trivia", "Multiplayer"],

    iframeHtml: `<iframe
      referrerpolicy="no-referrer"
      src="https://www.crazygames.com/embed/worldguessr"
      style="width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen
      allow="gamepad *;"
      title="WorldGuessr Free GeoGuessr">
    </iframe>`,
    how_to_play: `
    <ol>
      <li><strong>1. Start Exploring:</strong> Each game drops you at a random location on Google Maps. Look around and move through the area to gather clues about where you are.</li>

      <li><strong>2. Find Clues:</strong> Use anything that can hint at your location – landmarks, street signs, coastlines, building styles, or even language on signs.</li>

      <li><strong>3. Choose Maps:</strong> Explore hundreds of community-created maps based on regions or themes, from big cities to remote areas.</li>

      <li><strong>4. Play Your Way:</strong> Play solo at your own pace or jump into multiplayer mode to compete with friends or players worldwide.</li>

      <li><strong>5. Get a Hint (If Needed):</strong> Stuck? Use a hint to find out the general area, like the continent, to help guide your guess.</li>

      <li><strong>6. Make Your Guess:</strong> Once you're confident, make your guess. Worldguessr will show how close (or far) you were from the correct spot, helping you improve your geography skills with each game!</li>
    </ol>
    <br />
    <p>Enjoy the adventure as you uncover new places and refine your knowledge of the world!</p>
    `,
    metaTitle: "WorldGuessr Free GeoGuessr Online | Casual Games",
    slug: "worldguessr",
    alternativeText: "WorldGuessr Free GeoGuessr Online | Casual Games",
    videos: [
      {
        title: "WorldGuessr Gameplay Tutorial",
        url: "https://www.youtube.com/embed/abc123",
        thumbnail: "https://img.youtube.com/vi/abc123/maxresdefault.jpg"
      },
      {
        title: "Pro Tips & Tricks",
        url: "https://www.youtube.com/embed/xyz789",
        thumbnail: "https://img.youtube.com/vi/xyz789/maxresdefault.jpg"
      }
    ]
  },
  {
    id: "basket-blitz",
    title: "Basket Blitz 2",
    thumbnail: "https://images.crazygames.com/basket-blitz_16x9/20241031102002/basket-blitz_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    category: "Sports",
    rating: 8.6,
    is_new: true,
    featured: true,
    description: `
    Basket Blitz 2 takes your love for basketball to a whole new level!
    Step into the action and feel the thrill as you flick your shots with pinpoint precision, aiming to swish every single one.
    Easy to pick up but challenging to master, this game demands lightning reflexes and flawless accuracy.
    Think you’ve got what it takes to be the ultimate shooter? Jump in and prove your skills in this pulse-pounding basketball showdown!
    `,
    releaseDate: "2024-10",
    source: "https://www.crazygames.com/game/basket-blitz",
    tags: ["Sports", "Mobile", "3D", "Basketball", "Minigames", "Mouse", "Arcade"],
    iframeHtml: `<iframe
      referrerpolicy="no-referrer"
      src="https://www.crazygames.com/embed/basket-blitz"
      style="width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen
      allow="gamepad *;"
      title="Basket Blitz 2">
    </iframe>`,
    how_to_play: `
    <ol>
      <li><strong>1. Swipe to Shoot:</strong> Flick the basketball toward the hoop by swiping up.</li>
      <li><strong>2. Aim for Swishes:</strong> Try to make the ball go through the hoop without touching the rim to achieve a “Swish.” Each Swish resets the timer and adds more time.</li>
      <li><strong>3. Build Combos:</strong> Make consecutive Swishes to trigger combos and boost your score.</li>
      <li><strong>4. Keep the Streak Going:</strong> As time ticks down, focus on accurate shots to keep your streak and score climbing.</li>
      <li><strong>5. Watch for the Blue Glow:</strong> A neon blue glow will appear around the ball for each Swish. Aim for as many as possible to rack up points!</li>
    </ol>
    <br />
    <p>Get ready to swipe, score, and see how long you can keep the streak alive!</p>
    `,
    metaTitle: "Basket Blitz 2 - Free Basketball Game Online | Casual Games",
    slug: "basket-blitz",
    alternativeText: "Basket Blitz 2 - Free Basketball Game Online | Casual Games",
  },
  {
    id: "heroes-of-match-3",
    title: "Heroes of Match 3",
    thumbnail: "https://images.crazygames.com/heroes-of-match-3_16x9/20241029084547/heroes-of-match-3_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    category: "Match 3",
    rating: 8.3,
    is_new: true,
    featured: true,
    description: `
    Heroes of Match 3 is a thrilling match-3 puzzle game that combines strategic thinking with fast-paced action.
    In this game, you'll need to match three or more identical tiles to clear the board and progress through the levels.
    But be careful, as the board is constantly changing and new tiles are added as you progress, making it more challenging to achieve a perfect match.
    `,
    releaseDate: "2024-10",
    source: "https://www.crazygames.com/game/heroes-of-match-3",
    tags: ["Puzzle", "Mobile", "Battle", "Color", "2D", "Match 3", "Mouse", "Collect", "Mission"],
    iframeHtml: `<iframe
      referrerpolicy="no-referrer"
      src="https://www.crazygames.com/embed/heroes-of-match-3"
      style="width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen
      allow="gamepad *;"
      title="Heroes of Match 3">
    </iframe>`,
    how_to_play: `
    <ol>
      <li><strong>Match Tiles:</strong> Use your mouse to click and drag tiles to match three or more identical tiles.</li>
    </ol>
    <br />
    <p>Get ready to match tiles and prove your strategic skills!</p>
    `,
    metaTitle: "Heroes of Match 3 - Free Match 3 Game Online | Casual Games",
    slug: "heroes-of-match-3",
    alternativeText: "Heroes of Match 3 - Free Match 3 Game Online | Casual Games",
  },
  {
    id: "autogun-heroes-izk",
    title: "Autogun Heroes",
    thumbnail: "https://images.crazygames.com/autogun-heroes-izk_16x9/20241105014541/autogun-heroes-izk_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    category: "Action",
    rating: 8.8,
    is_new: true,
    featured: true,
    description: `
    Autogun Heroes is an action-packed shooting game where you battle waves of enemies with automatic weapons.
    Upgrade your arsenal, unlock new heroes, and fight your way through increasingly challenging levels.
    Test your reflexes and strategic thinking in this intense shooter experience!
    `,
    releaseDate: "2024-10",
    source: "https://www.crazygames.com/game/autogun-heroes",
    tags: ["Action", "Shooting", "2D", "Arcade", "Mouse", "Upgrade", "Battle"],
    iframeHtml: `<iframe
      referrerpolicy="no-referrer"
      src="https://www.crazygames.com/embed/autogun-heroes"
      style="width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen
      allow="gamepad *;"
      title="Autogun Heroes">
    </iframe>`,
    how_to_play: `
    <ol>
      <li><strong>Mouse Movement:</strong> Move your cursor to aim at enemies</li>
    </ol>
    <br />
    <p>Survive waves of enemies and become the ultimate Autogun Hero!</p>
    `,
    metaTitle: "Autogun Heroes - Free Action Shooter Game Online | Casual Games",
    slug: "autogun-heroes",
    alternativeText: "Autogun Heroes - Free Action Shooter Game Online | Casual Games",
  },
];

export const categories = [
  "Match 3",
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
