import { newsItems } from "../data/newsItems";
import { topNews } from "../data/topNews";
import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export const metadata = {
  title: "AI 资讯 - 最新 AI 工具动态与热门文章 | AI 工具导航",
  description: "精选近期热门 AI 工具与动态，聚合高搜索热度的长尾主题内容。快速掌握 AI 行业趋势，了解最新 AI 工具推荐。",
  keywords: [
    "AI 资讯",
    "AI 新闻",
    "AI 工具动态",
    "AI 行业趋势",
    "热门 AI 工具",
    "AI 工具推荐",
    "AI 最新消息"
  ],
  alternates: {
    canonical: `${siteUrl}/news`
  },
  openGraph: {
    title: "AI 资讯 - 最新 AI 工具动态与热门文章",
    description: "精选近期热门 AI 工具与动态，快速掌握 AI 行业趋势。",
    url: `${siteUrl}/news`,
    type: "website",
    siteName: "AI 工具导航"
  },
  twitter: {
    card: "summary",
    title: "AI 资讯 - 最新 AI 工具动态",
    description: "精选近期热门 AI 工具与动态，快速掌握 AI 行业趋势。"
  }
};


export default function NewsPage() {
  return (
    <div className="page" id="top">
      <TopNav current="/news" />

      <div className="content content--wide">
        <main className="content-main" role="main">
          <div className="content-primary">
            <section className="news-list" aria-label="资讯列表">
              {newsItems.map((news) => (
                <article key={news.id} className="news-item">
                  <h2 className="news-item-title">
                    <a href={`/news/${news.slug}`} title={news.title}>
                      {news.title}
                    </a>
                  </h2>
                  <div className="news-item-content">
                    <p>{news.summary}</p>
                  </div>
                  <div className="news-item-meta">
                    <time dateTime={news.date}>{news.date}</time>
                  </div>
                </article>
              ))}
            </section>
          </div>

          <aside className="content-aside" aria-label="最新资讯">
            <section className="briefs">
              <h2>最新资讯</h2>
              <ol className="briefs-list">
                {topNews.map((news, index) => (
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
