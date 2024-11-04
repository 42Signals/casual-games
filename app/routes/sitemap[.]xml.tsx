import { games } from "~/data/games";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  const baseUrl = "https://yourdomain.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${games.map((game) => `
        <url>
          <loc>${baseUrl}/games/${game.slug}</loc>
          <lastmod>${game.releaseDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(sitemap)),
    },
  });
};
