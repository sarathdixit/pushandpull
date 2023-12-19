export default function sitemap(req, res) {
  // Define your site's pages and metadata
  const pages = [
    {
      loc: "https://www.pushandpullbxm.com/",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 1.0,
    },
    {
      loc: "https://www.pushandpullbxm.com/contact",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/about",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/influencer-marketing",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/creative",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/website",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/content-marketing",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/paid-media",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/social-media-optimisation",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
    {
      loc: "https://www.pushandpullbxm.com/services/search-engine-optimisation",
      lastmod: "2023-12-18T11:28:15+00:00",
      priority: 0.8,
    },
  ];

  // Generate the XML sitemap content
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${pages
      .map(
        (page) => `
        <url>
            <loc>${page.loc}</loc>
            <lastmod>${page.lastmod}</lastmod>
            <priority>${page.priority}</priority>
        </url>
    `
      )
      .join("")}
</urlset>`;

  // Set the content type and send the sitemap
  res.setHeader("Content-Type", "application/xml");
  res.write(sitemapXml);
  res.end();
}
