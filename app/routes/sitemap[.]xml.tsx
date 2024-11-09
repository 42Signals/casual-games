import { games, categories } from "~/data/games";

export const loader = async () => {
  const baseUrl = "https://casualgames.studio";

  // Static pages
  const staticPages = [
    "",  // home page
    "/new",
    "/popular",
  ];

  // Generate sitemap entries
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(page => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>daily</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `).join("")}

      ${categories.map(category => `
        <url>
          <loc>${baseUrl}/categories/${category.toLowerCase()}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join("")}

      ${games.map(game => `
        <url>
          <loc>${baseUrl}/games/${game.id}</loc>
          <lastmod>${new Date(game.releaseDate).toISOString().split('T')[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${game.featured ? "0.9" : "0.6"}</priority>
        </url>
      `).join("")}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(sitemap)),
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
};
