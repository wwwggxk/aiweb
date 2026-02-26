export const dynamic = "force-static";

import { newsItems } from "../../data/newsItems";
import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";

function formatCount(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + "w";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export function generateStaticParams() {
  return newsItems.map((item) => ({ id: item.slug }));
}

export async function generateMetadata({ params }) {
  const slug = params?.id || "";
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: "未找到资讯 - AI 工具导航",
      description: "该资讯不存在，请返回资讯列表查看其他内容。"
    };
  }

  const fullTitle = `${news.title} | AI 资讯 - AI 工具导航`;
  return {
    title: fullTitle,
    description: news.summary,
    keywords: ["AI 资讯", "AI 新闻", "AI 行业动态", news.title],
    alternates: {
      canonical: `${siteUrl}/news/${news.slug}`
    },
    openGraph: {
      title: fullTitle,
      description: news.summary,
      url: `${siteUrl}/news/${news.slug}`,
      type: "article",
      siteName: "AI 工具导航"
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: news.summary
    }
  };
}

export default function NewsDetailPage({ params }) {
  const slug = params?.id || "";
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="page" id="top">
        <TopNav current="/news" />
        <div className="content content--wide">
          <main className="content-main" role="main">
            <div className="content-primary">
              <div className="news-detail-empty">
                <h1>未找到资讯</h1>
                <p>请返回资讯列表查看其他内容。</p>
                <a href="/news" className="news-detail-back">返回资讯列表</a>
              </div>
            </div>
          </main>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = newsItems.filter((item) => item.id !== news.id).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    description: news.summary,
    url: `${siteUrl}/news/${news.slug}`,
    datePublished: news.date,
    dateModified: news.date,
    author: {
      "@type": "Organization",
      name: "AI 工具导航"
    },
    publisher: {
      "@type": "Organization",
      name: "AI 工具导航",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`
      }
    }
  };

  return (
    <div className="page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNav current="/news" />

      <div className="content content--wide">
        <main className="content-main" role="main">
          <div className="content-primary">
            <article className="news-detail">
              <header className="news-detail-header">
                <h1 className="news-detail-title">{news.title}</h1>
                <div className="news-detail-meta">
                  <time dateTime={news.date}>{news.date}</time>
                  {news.views > 0 && (
                    <span className="news-detail-views">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {formatCount(news.views)} 次阅读
                    </span>
                  )}
                </div>
              </header>

              <p className="news-detail-summary">{news.summary}</p>

              <div className="news-detail-body">
                {news.sections.map((section) => (
                  <section key={section.heading} className="news-detail-section">
                    <h2>{section.heading}</h2>
                    <p>{section.content}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>

          <aside className="content-aside" aria-label="相关资讯">
            <section className="briefs">
              <h2>相关资讯</h2>
              <ol className="briefs-list">
                {related.map((item, index) => (
                  <li key={`${item.slug}-${index}`}>
                    <a href={`/news/${item.slug}`} title={item.title}>
                      <h3 className="briefs-title">{item.title}</h3>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
