export const dynamic = "force-static";

import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

const articles = [
  {
    slug: "ai-writing-tools-for-beginners",
    title: "AI 写作工具怎么选？新手常用的 7 个真实场景",
    summary: "从灵感、结构、润色到发布，覆盖新手最常见的写作需求。",
    sections: [
      {
        heading: "适合谁",
        content:
          "适合需要快速产出文案、周报、邮件与内容脚本的用户，尤其是运营、市场、产品与自媒体创作者。"
      },
      {
        heading: "常见场景",
        content:
          "灵感起草、标题生成、段落润色、改写与语气调整、短文摘要与长文扩写。"
      },
      {
        heading: "选择建议",
        content:
          "优先选择支持中文场景、模板完善且可导出多格式的工具，并关注是否支持行业词库与品牌风格。"
      },
      {
        heading: "上手流程",
        content:
          "输入主题 → 选择体裁 → 设定目标受众 → 生成初稿 → 结构化编辑 → 细节润色与校对。"
      },
      {
        heading: "避坑提醒",
        content:
          "避免直接复制原文，注意事实核对与品牌一致性；涉及专业领域请二次审核。"
      }
    ]
  },
  {
    slug: "ai-image-prompt-guide",
    title: "AI 绘画入门：文生图提示词基础与进阶",
    summary: "掌握关键词结构与提示词写法，让生成效果更稳定。",
    sections: [
      {
        heading: "提示词结构",
        content: "主体 + 风格 + 光线 + 构图 + 细节描述，是最稳定的组合方式。"
      },
      {
        heading: "常用风格",
        content: "写实、插画、赛博、极简、复古等常见风格可混合组合。"
      },
      {
        heading: "进阶技巧",
        content: "利用负面提示词控制噪点与畸形元素，并设置统一镜头参数。"
      },
      {
        heading: "模板示例",
        content: "主体（人物/场景）+ 风格（插画/写实）+ 光线（柔光/逆光）+ 构图（近景/广角）。"
      },
      {
        heading: "稳定输出",
        content: "固定随机种子与参考图，确保系列作品风格一致。"
      }
    ]
  },
  {
    slug: "ai-video-generator-comparison",
    title: "AI 视频生成工具对比：成本与效果指南",
    summary: "对比不同视频生成工具的成本与效果差异。",
    sections: [
      {
        heading: "对比维度",
        content: "清晰度、时长、稳定性、生成速度与价格是核心维度。"
      },
      {
        heading: "选择建议",
        content: "短视频优先速度与成本，广告用途优先画质与一致性。"
      },
      {
        heading: "注意事项",
        content: "关注版权合规与素材来源，避免使用受限素材生成商业内容。"
      }
    ]
  },
  {
    slug: "ai-ppt-generator",
    title: "AI PPT 一键生成：流程、模板与避坑",
    summary: "快速生成演示稿的流程与模板选择建议。",
    sections: [
      {
        heading: "使用流程",
        content: "输入主题 → 选择模板 → 调整结构 → 一键排版 → 导出。"
      },
      {
        heading: "避坑提示",
        content: "避免堆砌文字，保证标题层级清晰；图表与数据要留足留白。"
      },
      {
        heading: "模板选择",
        content: "对外汇报优先商务简洁风格，对内分享可选择信息密度更高的模板。"
      }
    ]
  },
  {
    slug: "ai-office-productivity",
    title: "AI 办公效率提升清单：会议纪要到日报",
    summary: "覆盖会议、文档与数据整理的高频办公需求。",
    sections: [
      {
        heading: "会议场景",
        content: "录音转写、要点提炼、行动项整理，适合跨部门协作。"
      },
      {
        heading: "日报周报",
        content: "模板生成、数据摘要、自动归类，可快速形成标准化输出。"
      },
      {
        heading: "文档协作",
        content: "基于团队知识库做摘要与对齐，减少信息重复与沟通成本。"
      }
    ]
  },
  {
    slug: "ai-coding-assistant",
    title: "AI 编程助手实践：如何提升开发效率",
    summary: "从代码补全到测试生成，提升开发效率。",
    sections: [
      {
        heading: "核心用途",
        content: "代码补全、注释生成、单元测试辅助，是最常见的高频能力。"
      },
      {
        heading: "使用建议",
        content: "先写需求，再让 AI 生成草案，最后人工校验并补充边界条件。"
      },
      {
        heading: "团队实践",
        content: "通过约束代码规范与提示模板，可提升团队统一性与可维护性。"
      }
    ]
  },
  {
    slug: "ai-voice-generator",
    title: "AI 音频与配音工具推荐：适用场景解析",
    summary: "覆盖配音、旁白与音色克隆的使用场景。",
    sections: [
      {
        heading: "适用场景",
        content: "短视频配音、课程旁白、营销解说，提升音频产出效率。"
      },
      {
        heading: "音色选择",
        content: "根据品牌调性选择音色，注意语速与情绪一致性。"
      },
      {
        heading: "注意事项",
        content: "确保版权合规与音色授权，避免涉及肖像或侵权风险。"
      }
    ]
  }
];

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
