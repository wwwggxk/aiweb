const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export const metadata = {
  title: "AI 文章 - AI 工具使用指南与实战教程 | AI 工具导航",
  description: "精选 AI 工具使用教程与实战经验，覆盖写作、绘画、视频、办公、编程等场景，助你高效上手 AI 工具。",
  keywords: [
    "AI 文章", "AI 教程", "AI 工具使用指南", "ChatGPT 教程",
    "AI 绘画教程", "AI 写作教程", "AI 编程助手"
  ],
  alternates: { canonical: `${siteUrl}/articles` },
  openGraph: {
    title: "AI 文章 - AI 工具使用指南与实战教程",
    description: "精选 AI 工具使用教程与实战经验，助你高效上手 AI 工具。",
    url: `${siteUrl}/articles`,
    type: "website",
    siteName: "AI 工具导航"
  }
};

export default function ArticlesLayout({ children }) {
  return children;
}
