export const dynamic = "force-static";

import sections from "./sections";
import { getPrompts } from "./lib/get-prompts";
import { newsItems } from "./data/newsItems";
import { articleItems } from "./data/articleItems";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

function getToolKey(name) {
  return String(name || "").replace(/\s+/g, "");
}

export default async function sitemap() {
  const allTools = sections.flatMap((section) =>
    section.items.map((item) => ({
      key: getToolKey(item.name),
      name: item.name
    }))
  );

  const prompts = await getPrompts();

  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${siteUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${siteUrl}/download`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];

  const articlePages = articleItems.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: article.date ? new Date(article.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const articlesListPage = {
    url: `${siteUrl}/articles`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9
  };

  const toolPages = allTools.map((tool) => ({
    url: `${siteUrl}/tools/${tool.key}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7
  }));

  const promptPages = prompts.slice(0, 100).map((prompt) => ({
    url: `${siteUrl}/prompts/${prompt.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6
  }));

  const newsPages = newsItems.map((news) => ({
    url: `${siteUrl}/news/${news.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8
  }));

  return [...staticPages, articlesListPage, ...articlePages, ...newsPages, ...toolPages, ...promptPages];
}
