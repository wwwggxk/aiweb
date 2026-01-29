import sections from "../sections";
import { topArticles } from "../data/topArticles";
import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";


function getPopularity(item, index) {
  if (typeof item.popularity === "number") {
    return Math.max(0, Math.min(5, item.popularity));
  }
  const score = 5 - Math.floor(index / 4);
  return Math.max(0, Math.min(5, score));
}

const briefs = sections
  .flatMap((section, sectionIndex) =>
    section.items.map((item, itemIndex) => ({
      ...item,
      order: sectionIndex * 100 + itemIndex,
      popularity: getPopularity(item, itemIndex)
    }))
  )
  .sort((a, b) => b.popularity - a.popularity || a.order - b.order)
  .slice(0, 12);

export default function NewsPage() {
  return (
    <div className="page" id="top">
      <TopNav current="/news" />

      <main className="content content--wide" role="main">
        <section className="briefs" aria-label="资讯速览">
          <h2>资讯速览</h2>
          <p>精选近期热门工具与动态，快速掌握趋势。</p>
          <ol className="briefs-list">
            {briefs.map((item, index) => (
              <li key={`${item.name}-brief-${index}`}>
                <a href={`/tools/${encodeURIComponent(item.name.replace(/\s+/g, ""))}`} title={item.name}>
                  <h3 className="briefs-title">{item.name}</h3>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="popular" aria-label="热门文章">
          <h2>热门文章</h2>
          <p>聚合高搜索热度的长尾主题内容。</p>
          <ol className="popular-list">
            {topArticles.map((article, index) => (
              <li key={`${article.title}-${index}`}>
                <a href={article.url} title={article.title}>
                  <h3 className="popular-title">{article.title}</h3>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
