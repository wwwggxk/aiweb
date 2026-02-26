import { getPrompts } from '@/app/lib/get-prompts';
import PromptsClient from './PromptsClient';
import TopNav from '@/app/components/TopNav';
import SiteFooter from '@/app/components/SiteFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://00011000.com";

export const metadata = {
  title: "AI 提示词 - ChatGPT Prompt 模板大全",
  description: "精选 AI 提示词、ChatGPT Prompt 模板，覆盖写作、翻译、编程、设计等场景。免费使用，一键复制到 ChatGPT、Claude、文心一言等大语言模型。",
  keywords: [
    "AI 提示词",
    "ChatGPT Prompt",
    "大模型提示词模板",
    "免费 AI 提示词",
    "Claude 提示词",
    "ChatGPT 提示词怎么写",
    "免费 AI 提示词模板",
    "Claude 提示词大全",
    "大模型 Prompt 怎么用",
    "文心一言提示词",
    "通用提示词模板",
    "AI 写作提示词",
    "AI 编程提示词"
  ],
  alternates: {
    canonical: `${siteUrl}/prompts`
  },
  openGraph: {
    title: "AI 提示词 - ChatGPT Prompt 模板大全",
    description: "精选 AI 提示词、ChatGPT Prompt 模板，覆盖写作、翻译、编程、设计等场景。免费使用，一键复制。",
    url: `${siteUrl}/prompts`,
    type: "website",
    siteName: "AI 工具导航"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 提示词 - ChatGPT Prompt 模板大全",
    description: "精选 AI 提示词、ChatGPT Prompt 模板，免费使用，一键复制。"
  }
};

export default async function PromptsPage() {
  const prompts = await getPrompts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI 提示词",
    description: "精选 AI 提示词、ChatGPT Prompt 模板，覆盖写作、翻译、编程、设计等场景",
    url: `${siteUrl}/prompts`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: prompts.length,
      itemListElement: prompts.slice(0, 10).map((prompt, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: prompt.title,
          description: prompt.description,
          url: `${siteUrl}/prompts/${prompt.id}`
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNav current="/prompts" />
      <PromptsClient initialPrompts={prompts} />
      <SiteFooter />
    </>
  );
}
