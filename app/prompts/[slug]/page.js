import { getPrompts } from '@/app/lib/get-prompts';
import DetailView from '@/app/components/prompts/DetailView';
import TopNav from '@/app/components/TopNav';
import SiteFooter from '@/app/components/SiteFooter';

export const dynamic = 'force-static';

const SITE_NAME = 'AI 工具导航';
const SEO_KEYWORDS =
  'AI 提示词, ChatGPT Prompt, 大模型提示词模板, 免费 AI 提示词, Claude 提示词, ChatGPT 提示词怎么写, 免费 AI 提示词模板, Claude 提示词大全, 大模型 Prompt 怎么用, 文心一言提示词, 通用提示词模板';

export async function generateStaticParams() {
  const prompts = await getPrompts();
  return prompts.map((prompt) => ({
    slug: prompt.slug || String(prompt.id),
  }));
}

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  if (!slug) {
    return {
      title: `提示词详情`,
      description: `浏览与复制 AI 提示词、ChatGPT Prompt 模板，免费使用。`,
      keywords: SEO_KEYWORDS,
    };
  }
  const list = await getPrompts();
  const prompt = list.find((p) => (p.slug || String(p.id)) === slug);
  if (!prompt) {
    return {
      title: `未找到`,
      description: `该提示词不存在。可返回首页浏览更多 AI 提示词与 ChatGPT Prompt 模板。`,
      keywords: SEO_KEYWORDS,
    };
  }
  const title = prompt.title || '未命名';
  const desc =
    prompt.description ||
    `AI 提示词「${title}」的完整内容，可一键复制到 ChatGPT、Claude、文心一言等使用。适合在找 ChatGPT 提示词怎么写、免费 AI 提示词模板 的用户。`;
  const fullTitle = `${title} - AI 提示词详情`;
  const longTail = 'ChatGPT 提示词怎么写, 免费 AI 提示词模板, Claude 提示词大全';
  const keywords = [SEO_KEYWORDS, title, longTail, ...(Array.isArray(prompt.tags) ? prompt.tags : [])].join(', ');
  return {
    title: fullTitle,
    description: desc,
    keywords,
    openGraph: {
      title: fullTitle,
      description: desc,
      type: 'article',
    },
  };
}

export default async function PromptDetailPage({ params }) {
  const slug = params?.slug;
  const list = await getPrompts();
  const prompt = list.find((p) => (p.slug || String(p.id)) === slug) ?? null;
  const sidebarList = list.map((p) => ({
    id: p.id,
    slug: p.slug || String(p.id),
    title: p.title,
    usageCount: p.usageCount,
    usage: p.usage,
    tags: p.tags,
  }));

  return (
    <>
      <TopNav current="/prompts" />
      {prompt && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              name: prompt.title || '未命名',
              description: prompt.description || '',
              keywords: [
                ...(Array.isArray(prompt.tags) ? prompt.tags : []),
                'AI 提示词',
                'ChatGPT Prompt',
                '免费 AI 提示词模板',
              ].join(', '),
            }),
          }}
        />
      )}
      <DetailView prompt={prompt} allPrompts={sidebarList} />
      <SiteFooter />
    </>
  );
}
