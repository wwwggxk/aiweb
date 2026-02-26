export const dynamic = "force-static";

import { newsItems } from "../../data/newsItems";
import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";

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

  const related = newsItems.filter((item) => item.id !== news.id);

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
