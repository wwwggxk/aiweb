import { newsItems } from "../data/newsItems";
import { topNews } from "../data/topNews";
import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export const metadata = {
  title: "AI 资讯 - 最新 AI 工具动态与行业趋势 | AI 工具导航",
  description: "精选 AI 行业资讯，覆盖大模型更新、工具发布、开源生态与政策法规。快速掌握 AI 领域最新动态。",
  keywords: [
    "AI 资讯", "AI 新闻", "AI 工具动态", "AI 行业趋势",
    "ChatGPT 更新", "大模型新闻", "AI 最新消息"
  ],
  alternates: {
    canonical: `${siteUrl}/news`
  },
  openGraph: {
    title: "AI 资讯 - 最新 AI 工具动态与行业趋势",
    description: "精选 AI 行业资讯，快速掌握 AI 领域最新动态。",
    url: `${siteUrl}/news`,
    type: "website",
    siteName: "AI 工具导航"
  },
  twitter: {
    card: "summary",
    title: "AI 资讯 - 最新 AI 工具动态",
    description: "精选 AI 行业资讯，快速掌握 AI 领域最新动态。"
  }
};

function formatCount(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + "w";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

function timeAgo(dateStr) {
  const now = new Date("2026-02-26");
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "今天";
  if (diff === 1) return "昨天";
  if (diff <= 7) return `${diff}天前`;
  if (diff <= 30) return `${Math.floor(diff / 7)}周前`;
  if (diff <= 365) return `${Math.floor(diff / 30)}个月前`;
  return dateStr;
}

export default function NewsPage() {
  return (
    <div className="page" id="top">
      <TopNav current="/news" />

      <div className="content content--wide">
        <main className="content-main" role="main">
          <div className="content-primary">
            <section className="news-list" aria-label="资讯列表">
              {newsItems.map((news) => (
                <article key={news.id} className="news-card">
                  <div className="news-card-body">
                    <h2 className="news-card-title">
                      <a href={`/news/${news.slug}`} title={news.title}>
                        {news.title}
                      </a>
                    </h2>
                    <p className="news-card-summary">{news.summary}</p>
                    <div className="news-card-meta">
                      <time dateTime={news.date}>{timeAgo(news.date)}</time>
                      <span className="news-card-dot">·</span>
                      <span>AI工具编辑部</span>
                      {news.views > 0 && (
                        <>
                          <span className="news-card-dot">·</span>
                          <span className="news-card-views">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            {formatCount(news.views)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  {news.cover && (
                    <a href={`/news/${news.slug}`} className="news-card-cover" aria-hidden="true">
                      <img
                        src={news.cover}
                        alt=""
                        width={200}
                        height={130}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  )}
                </article>
              ))}
            </section>
          </div>

          <aside className="content-aside" aria-label="最新资讯">
            <section className="briefs">
              <h2>最新资讯</h2>
              <ol className="briefs-list">
                {topNews.slice(0, 7).map((news, index) => (
                  <li key={`${news.title}-${index}`}>
                    <a href={news.url} title={news.title}>
                      <h3 className="briefs-title">{news.title}</h3>
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
