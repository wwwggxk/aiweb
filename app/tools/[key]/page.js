import sections from "../../sections";
import AsidePanels from "../../components/AsidePanels";
import { topArticles } from "../../data/topArticles";
import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";

function getToolKey(name) {
  return String(name || "").replace(/\s+/g, "");
}

function getInitials(name) {
  if (!name) return "AI";
  return name.slice(0, 2);
}

function getPopularity(item, index) {
  if (typeof item.popularity === "number") {
    return Math.max(0, Math.min(5, item.popularity));
  }
  const score = 5 - Math.floor(index / 4);
  return Math.max(0, Math.min(5, score));
}

const allTools = sections.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    key: getToolKey(item.name),
    sectionTitle: section.title
  }))
);

const toolMap = new Map(allTools.map((item) => [item.key, item]));
const popularItems = sections
  .flatMap((section, sectionIndex) =>
    section.items.map((item, itemIndex) => ({
      ...item,
      sectionId: section.id,
      sectionTitle: section.title,
      order: sectionIndex * 100 + itemIndex,
      popularity: getPopularity(item, itemIndex),
      toolKey: getToolKey(item.name)
    }))
  )
  .sort((a, b) => b.popularity - a.popularity || a.order - b.order)
  .slice(0, 8);

export const dynamic = "force-static";

export function generateStaticParams() {
  return allTools.map((item) => ({
    key: item.key
  }));
}

export default function ToolDetailPage({ params }) {
  const rawKey = params?.key ? decodeURIComponent(params.key) : "";
  const tool = toolMap.get(rawKey);

  const mainContent = !tool ? (
    <section className="tool-detail tool-detail--inline">
      <div className="tool-detail-hero">
        <div className="tool-detail-info">
          <h1>未找到该工具</h1>
          <p>请返回首页重新选择。</p>
          <a className="tool-detail-btn" href="/">
            返回首页
          </a>
        </div>
      </div>
    </section>
  ) : (
    <section className="tool-detail tool-detail--inline">
      <div className="tool-detail-hero">
        <div className="tool-detail-thumb" aria-hidden="true">
          {tool.icon ? (
            <img src={tool.icon} alt="" loading="lazy" decoding="async" />
          ) : (
            <span>{getInitials(tool.name)}</span>
          )}
        </div>
        <div className="tool-detail-info">
          <h1>{tool.name}</h1>
          <p>{tool.desc}</p>
          <div className="tool-detail-actions">
            <a className="tool-detail-btn" href={tool.url} target="_blank" rel="noreferrer">
              访问使用
            </a>
            <span className="tool-detail-tag">{tool.sectionTitle}</span>
          </div>
        </div>
      </div>

      <article className="tool-detail-article">
        <h2>{tool.name} 是什么</h2>
        <p>{tool.desc}</p>

        <h2>适合人群</h2>
        <p>面向需要高效完成任务的创作者、运营与产品团队，以及希望快速落地 AI 能力的普通用户。</p>

        <h2>使用建议</h2>
        <p>建议先从官网示例或模板开始上手，明确需求后再逐步拓展功能场景。</p>
      </article>
    </section>
  );

  return (
    <div className="page" id="top">
      <TopNav current="/" />
      <div className="content content--wide">
        <main className="content-main">
          <div className="content-primary">{mainContent}</div>
          <AsidePanels popularItems={popularItems} topArticles={topArticles} />
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
