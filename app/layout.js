import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI 工具导航 - 发现最适合你的 AI 工具",
    template: "%s · AI 工具导航"
  },
  description: "覆盖主流 AI 工具的纯静态导航站点，按场景分类直达官网。",
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
    "AI 编程"
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
    title: "AI 工具导航",
    description: "覆盖主流 AI 工具的纯静态导航站点，按场景分类直达官网。"
  },
  twitter: {
    card: "summary",
    title: "AI 工具导航",
    description: "覆盖主流 AI 工具的纯静态导航站点，按场景分类直达官网。"
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
        description: "覆盖主流 AI 工具的纯静态导航站点，按场景分类直达官网。",
        inLanguage: "zh-CN"
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3CQQCMKWWT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3CQQCMKWWT');
`
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
