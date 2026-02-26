import { topArticles as defaultArticles } from "../data/topArticles";
import { topNews as defaultNews } from "../data/topNews";

export default function AsidePanels({
  popularItems = [],
  topArticles = defaultArticles,
  topNews = defaultNews
}) {
  return (
    <aside className="content-aside" aria-label="榜单与资讯">
      <section className="trending" aria-label="趋势榜单">
        <h2>趋势榜单</h2>
        <p>大家都在用什么？看看本周最受关注的 AI 工具。</p>
        <ol className="trending-list">
          {popularItems.slice(0, 7).map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <a href={`/tools/${encodeURIComponent(item.toolKey)}`}>
                <span className="trending-rank">{String(index + 1).padStart(2, "0")}</span>
                <span className="trending-info">
                  <strong>{item.name}</strong>
                  <span className="trending-category">{item.sectionTitle}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>
      <section className="briefs" aria-label="资讯速递">
        <h2>资讯速览</h2>
        <p>AI 圈又出了什么新动向？30 秒刷完今日要闻。</p>
        <ol className="briefs-list">
          {topNews.slice(0, 7).map((item, index) => (
            <li key={`${item.title}-${index}`}>
              <a href={item.url} title={item.title}>
                <h3 className="briefs-title">{item.title}</h3>
              </a>
            </li>
          ))}
        </ol>
      </section>
      <section className="popular" aria-label="热门文章">
        <h2>热门文章</h2>
        <p>编辑部精选的 AI 实战干货，看完就能用。</p>
        <ol className="popular-list">
          {topArticles.slice(0, 7).map((article, index) => (
            <li key={`${article.title}-${index}`}>
              <a href={article.url} title={article.title}>
                <h3 className="popular-title">{article.title}</h3>
              </a>
            </li>
          ))}
        </ol>
      </section>
    </aside>
  );
}
