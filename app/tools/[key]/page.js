import sections from "../../sections";
import AsidePanels from "../../components/AsidePanels";
import { topArticles } from "../../data/topArticles";
import { toolDetails } from "../../data/toolDetails";
import { categoryTemplates } from "../../data/categoryTemplates";
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

function getPricingTag(item) {
  const text = `${item.name || ""} ${item.desc || ""}`.toLowerCase();
  const explicit = typeof item.pricing === "string" ? item.pricing : "";
  if (explicit) return explicit;
  if (text.includes("限免") || text.includes("限时免费")) return "限免";
  if (text.includes("免费额度") || text.includes("试用") || text.includes("额度")) return "免费额度";
  if (text.includes("免费") || text.includes("开源")) return "免费";
  if (text.includes("付费") || text.includes("订阅") || text.includes("会员") || text.includes("pro") || text.includes("premium")) return "付费";
  return "免费额度";
}

function getTagClass(tag) {
  switch (tag) {
    case "免费": return "free";
    case "付费": return "paid";
    case "免费额度": return "quota";
    case "限免": return "limited";
    default: return "quota";
  }
}

const allTools = sections.flatMap((section) =>
  section.items.map((item, index) => ({
    ...item,
    key: getToolKey(item.name),
    sectionTitle: section.title,
    popularity: getPopularity(item, index)
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

/* 根据工具名和分类获取详情 */
function getToolContent(tool) {
  // 优先使用自定义详情
  const custom = toolDetails[tool.name];
  if (custom) return { type: "custom", data: custom };

  // 兜底使用分类模板
  const tpl = categoryTemplates[tool.sectionTitle];
  if (tpl) return { type: "template", data: tpl };

  return { type: "fallback" };
}

/* ──── 自定义详情内容（热门工具） ──── */
function CustomDetailArticle({ tool, detail }) {
  return (
    <article className="tool-detail-article tool-detail-article--rich">
      {/* 痛点引入 */}
      <div className="tool-detail-painpoint">
        <p>{detail.painPoint}</p>
      </div>

      {/* 一句话定义 */}
      <div className="tool-detail-definition">
        <h2>一句话了解 {tool.name}</h2>
        <p>{detail.definition}</p>
      </div>

      {/* 核心功能 (FAB) */}
      <div className="tool-detail-features">
        <h2>核心功能</h2>
        <div className="tool-detail-feature-list">
          {detail.features.map((f, i) => (
            <div key={i} className="tool-detail-feature-item">
              <h3>
                <span className="tool-detail-feature-num">{i + 1}</span>
                {f.title}
              </h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 适用人群 */}
      <div className="tool-detail-audience">
        <h2>谁适合用 {tool.name}</h2>
        <ul>
          {detail.audience.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* 优缺点 */}
      <div className="tool-detail-proscons">
        <div className="tool-detail-pros">
          <h3>✅ 优点</h3>
          <ul>
            {detail.pros.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="tool-detail-cons">
          <h3>⚠️ 注意事项</h3>
          <ul>
            {detail.cons.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 快速上手 */}
      <div className="tool-detail-quickstart">
        <h2>🚀 现在就试试</h2>
        <p>{detail.quickStart}</p>
        <a className="tool-detail-btn tool-detail-btn--action" href={tool.url} target="_blank" rel="noreferrer">
          访问 {tool.name}
        </a>
      </div>
    </article>
  );
}

/* ──── 分类模板内容 ──── */
function TemplateDetailArticle({ tool, tpl }) {
  return (
    <article className="tool-detail-article tool-detail-article--rich">
      {/* 痛点引入 */}
      <div className="tool-detail-painpoint">
        <p>{tpl.painPoint(tool.name)}</p>
      </div>

      {/* 一句话定义 */}
      <div className="tool-detail-definition">
        <h2>{tool.name} 是什么</h2>
        <p>{tool.desc}</p>
      </div>

      {/* 适用人群 */}
      <div className="tool-detail-audience">
        <h2>谁适合用</h2>
        <ul>
          {tpl.audience.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* 使用建议 */}
      <div className="tool-detail-quickstart">
        <h2>💡 使用建议</h2>
        <p>{tpl.tips}</p>
        <a className="tool-detail-btn tool-detail-btn--action" href={tool.url} target="_blank" rel="noreferrer">
          访问 {tool.name}
        </a>
      </div>
    </article>
  );
}

/* ──── 兜底内容 ──── */
function FallbackDetailArticle({ tool }) {
  return (
    <article className="tool-detail-article">
      <h2>{tool.name} 是什么</h2>
      <p>{tool.desc}</p>

      <h2>适合人群</h2>
      <p>面向需要高效完成任务的创作者、运营与产品团队，以及希望快速落地 AI 能力的普通用户。</p>

      <h2>使用建议</h2>
      <p>建议先从官网示例或模板开始上手，明确需求后再逐步拓展功能场景。</p>
    </article>
  );
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
            <img src={tool.icon} alt={`${tool.name} 图标`} loading="lazy" decoding="async" width="64" height="64" />
          ) : (
            <span>{getInitials(tool.name)}</span>
          )}
        </div>
        <div className="tool-detail-info">
          <div className="tool-detail-title-row">
            <h1>{tool.name}<span className="tool-detail-cat">{tool.sectionTitle}</span></h1>
            <div className="tool-detail-title-meta">
              {tool.popularity > 0 && (
                <span className="tool-detail-pop" aria-label={`热度 ${tool.popularity}/5`}>
                  <span className="tool-detail-pop-label">热度</span>
                  <span className="tool-detail-pop-flames" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <span key={level} className={level <= tool.popularity ? "flame active" : "flame"}>
                        🔥
                      </span>
                    ))}
                  </span>
                </span>
              )}
              {(() => {
                const tag = getPricingTag(tool);
                return <span className={`tool-detail-pricing tool-detail-pricing--${getTagClass(tag)}`}>{tag}</span>;
              })()}
            </div>
          </div>
          <p>{tool.desc}</p>
          <div className="tool-detail-actions">
            <a className="tool-detail-btn" href={tool.url} target="_blank" rel="noreferrer">
              访问使用
            </a>
          </div>
        </div>
      </div>

      {(() => {
        const content = getToolContent(tool);
        if (content.type === "custom") {
          return <CustomDetailArticle tool={tool} detail={content.data} />;
        }
        if (content.type === "template") {
          return <TemplateDetailArticle tool={tool} tpl={content.data} />;
        }
        return <FallbackDetailArticle tool={tool} />;
      })()}
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
