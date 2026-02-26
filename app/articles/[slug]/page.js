export const dynamic = "force-static";

import { articleItems } from "../../data/articleItems";
import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";
import LikeButton from "../../components/LikeButton";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

const articles = articleItems;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const slug = params?.slug || "";
  const article = articles.find((item) => item.slug === slug);
  
  if (!article) {
    return {
      title: "未找到文章",
      description: "该文章不存在，请返回首页查看其他内容。"
    };
  }

  const fullTitle = `${article.title}`;
  const keywords = [
    article.title,
    "AI 工具",
    "AI 使用指南",
    "AI 教程",
    ...article.sections.map(s => s.heading)
  ].join(", ");

  return {
    title: fullTitle,
    description: article.summary,
    keywords,
    alternates: {
      canonical: `${siteUrl}/articles/${slug}`
    },
    openGraph: {
      title: fullTitle,
      description: article.summary,
      url: `${siteUrl}/articles/${slug}`,
      type: "article",
      siteName: "AI 工具导航"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: article.summary
    }
  };
}

export default function ArticlePage({ params }) {
  const slug = params?.slug || "";
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="page" id="top">
        <TopNav current="/articles" />
        <main className="content content--wide" role="main">
          <section className="tool-detail tool-detail--inline">
            <div className="tool-detail-hero">
              <div className="tool-detail-info">
                <h1>未找到文章</h1>
                <p>请返回文章列表查看其他内容。</p>
                <a className="tool-detail-btn" href="/articles">
                  返回文章列表
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    url: `${siteUrl}/articles/${article.slug}`,
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
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
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/article/${article.slug}`
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首页",
          item: siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI 资讯",
          item: `${siteUrl}/news`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${siteUrl}/articles/${article.slug}`
        }
      ]
    }
  };

  return (
    <div className="page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNav current="/articles" />
      <div className="content content--wide">
        <main className="content-main" role="main">
          <div className="content-primary">
            <article className="news-detail">
              <header className="news-detail-header">
                <h1 className="news-detail-title">{article.title}</h1>
                <div className="news-detail-meta">
                  {article.author && <span>{article.author}</span>}
                  {article.date && <time dateTime={article.date}>{article.date}</time>}
                </div>
              </header>
              <p className="news-detail-summary">{article.summary}</p>
              <div className="news-detail-body">
                {article.sections.map((section) => (
                  <section key={section.heading} className="news-detail-section">
                    <h2>{section.heading}</h2>
                    <p>{section.content}</p>
                  </section>
                ))}
              </div>
              <LikeButton />
            </article>
          </div>
          <aside className="content-aside" aria-label="相关文章">
            <section className="rank-panel">
              <h2 className="rank-panel-title">相关文章</h2>
              <ol className="rank-list">
                {articles.filter(a => a.slug !== article.slug).map((a, index) => (
                  <li key={a.slug}>
                    <a href={`/articles/${a.slug}`} className="rank-link">
                      <span className={`rank-num ${index < 3 ? "rank-num-top" : ""}`}>{index + 1}</span>
                      <span className="rank-label">{a.title}</span>
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
