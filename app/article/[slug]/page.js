export const dynamic = "force-static";

import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";

const articles = [
  {
    slug: "ai-writing-tools-for-beginners",
    title: "AI 写作工具怎么选？新手常用的 7 个真实场景",
    summary: "从灵感、结构、润色到发布，覆盖新手最常见的写作需求。",
    sections: [
      { heading: "适合谁", content: "适合需要快速产出文案、周报、邮件与内容脚本的用户。" },
      { heading: "常见场景", content: "灵感起草、标题生成、段落润色、改写与语气调整。" },
      { heading: "选择建议", content: "优先选择支持中文场景、模板完善且可导出多格式的工具。" }
    ]
  },
  {
    slug: "ai-image-prompt-guide",
    title: "AI 绘画入门：文生图提示词基础与进阶",
    summary: "掌握关键词结构与提示词写法，让生成效果更稳定。",
    sections: [
      { heading: "提示词结构", content: "主体 + 风格 + 光线 + 构图 + 细节描述。" },
      { heading: "常用风格", content: "写实、插画、赛博、极简、复古等常见风格组合。" },
      { heading: "进阶技巧", content: "利用负面提示词控制噪点与畸形元素。" }
    ]
  },
  {
    slug: "ai-video-generator-comparison",
    title: "AI 视频生成工具对比：成本与效果指南",
    summary: "对比不同视频生成工具的成本与效果差异。",
    sections: [
      { heading: "对比维度", content: "清晰度、时长、稳定性、生成速度与价格。" },
      { heading: "选择建议", content: "短视频优先速度与成本，广告用途优先画质与一致性。" }
    ]
  },
  {
    slug: "ai-ppt-generator",
    title: "AI PPT 一键生成：流程、模板与避坑",
    summary: "快速生成演示稿的流程与模板选择建议。",
    sections: [
      { heading: "使用流程", content: "输入主题 → 选择模板 → 调整结构 → 导出。" },
      { heading: "避坑提示", content: "避免堆砌文字，保证标题层级清晰。" }
    ]
  },
  {
    slug: "ai-office-productivity",
    title: "AI 办公效率提升清单：会议纪要到日报",
    summary: "覆盖会议、文档与数据整理的高频办公需求。",
    sections: [
      { heading: "会议场景", content: "录音转写、要点提炼、行动项整理。" },
      { heading: "日报周报", content: "模板生成、数据摘要、自动归类。" }
    ]
  },
  {
    slug: "ai-coding-assistant",
    title: "AI 编程助手实践：如何提升开发效率",
    summary: "从代码补全到测试生成，提升开发效率。",
    sections: [
      { heading: "核心用途", content: "代码补全、注释生成、单元测试辅助。" },
      { heading: "使用建议", content: "先写需求，再让 AI 生成草案，最后人工校验。" }
    ]
  },
  {
    slug: "ai-voice-generator",
    title: "AI 音频与配音工具推荐：适用场景解析",
    summary: "覆盖配音、旁白与音色克隆的使用场景。",
    sections: [
      { heading: "适用场景", content: "短视频配音、课程旁白、营销解说。" },
      { heading: "注意事项", content: "确保版权合规与音色授权。" }
    ]
  }
];

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }) {
  const slug = params?.slug || "";
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="page" id="top">
        <TopNav current="/news" />
        <main className="content content--wide" role="main">
          <section className="tool-detail tool-detail--inline">
            <div className="tool-detail-hero">
              <div className="tool-detail-info">
                <h1>未找到文章</h1>
                <p>请返回首页查看其他内容。</p>
                <a className="tool-detail-btn" href="/">
                  返回首页
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="page" id="top">
      <TopNav current="/news" />
      <main className="content content--wide" role="main">
        <article className="tool-detail tool-detail--inline">
          <header className="tool-detail-hero">
            <div className="tool-detail-info">
              <h1>{article.title}</h1>
              <p>{article.summary}</p>
            </div>
          </header>
          <section className="tool-detail-article">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
