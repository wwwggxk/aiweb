export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"]
      },
      {
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        userAgent: "ClaudeBot",
        allow: "/"
      },
      {
        userAgent: "Bytespider",
        allow: "/"
      },
      {
        userAgent: "Googlebot",
        allow: "/"
      },
      {
        userAgent: "Bingbot",
        allow: "/"
      },
      {
        userAgent: "Baiduspider",
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
