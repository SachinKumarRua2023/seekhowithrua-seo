export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/*.json$",
          "/search?",
          "?*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://seekhowithrua.com/sitemap.xml",
    host: "https://seekhowithrua.com",
  };
}

