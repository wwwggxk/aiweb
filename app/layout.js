import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import { AnalyticsPageView } from "./components/Analytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";
const GA_ID = "G-3CQQCMKWWT";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI 工具导航 - 发现最适合你的 AI 工具",
    template: "%s · AI 工具导航"
  },
  description: "AI 工具导航 - 发现最适合你的 AI 工具。覆盖主流 AI 工具，包括 ChatGPT、Midjourney、DeepSeek 等，按场景分类直达官网。提供 AI 提示词、AI 资讯和 AI 教程。",
  icons: {
    icon: "/icon.svg"
  },
  keywords: [
    "AI 工具导航",
    "AI 工具",
    "AIGC",
    "AI 绘画",
    "AI 写作",
    "AI 视频",
    "AI 音频",
    "AI 办公",
    "AI 编程",
    "ChatGPT",
    "Midjourney",
    "DeepSeek",
    "AI 提示词",
    "AI 资讯",
    "AI 教程",
    "免费 AI 工具"
  ],
  authors: [{ name: "AI 工具导航" }],
  creator: "AI 工具导航",
  publisher: "AI 工具导航",
  applicationName: "AI 工具导航",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "AI 工具导航",
    title: "AI 工具导航 - 发现最适合你的 AI 工具",
    description: "覆盖主流 AI 工具，包括 ChatGPT、Midjourney、DeepSeek 等，按场景分类直达官网。提供 AI 提示词、AI 资讯和 AI 教程。",
    images: [`${siteUrl}/icon.svg`]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 工具导航 - 发现最适合你的 AI 工具",
    description: "覆盖主流 AI 工具，包括 ChatGPT、Midjourney、DeepSeek 等，按场景分类直达官网。"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f6f9"
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "AI 工具导航",
        url: siteUrl,
        description: "AI 工具导航 - 发现最适合你的 AI 工具。覆盖主流 AI 工具，包括 ChatGPT、Midjourney、DeepSeek 等，按场景分类直达官网。",
        inLanguage: "zh-CN",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        name: "AI 工具导航",
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`
      }
    ]
  };
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', {
  page_path: window.location.pathname,
  send_page_view: true,
  cookie_flags: 'SameSite=None;Secure',
  custom_map: {
    dimension1: 'tool_name',
    dimension2: 'article_category',
    dimension3: 'content_type'
  }
});
`
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={null}>
          <AnalyticsPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
