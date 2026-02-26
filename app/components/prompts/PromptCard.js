'use client';

import Link from 'next/link';

function parseTitle(title) {
  if (!title || typeof title !== 'string') return { main: '未命名', badge: null };
  const match = title.match(/^(.+?)[（(](降权|限流|已下线)[）)]$/);
  if (match) return { main: match[1].trim(), badge: match[2] };
  return { main: title, badge: null };
}

export default function PromptCard({ prompt, formatCount }) {
  const tags = Array.isArray(prompt.tags) ? prompt.tags : [];
  const usage = prompt.usageCount ?? prompt.usage ?? 0;
  const { main: titleMain, badge } = parseTitle(prompt.title);

  return (
    <Link
      href={`/prompts/${prompt.slug || prompt.id}`}
      className="prompt-card-link"
      aria-label={`查看 ${titleMain} 详情`}
    >
      <article className="prompt-card">
        <header className="card-header">
          <div className="card-title-wrap">
            <h3 className="card-title">{titleMain}</h3>
            {badge && <span className="card-badge">{badge}</span>}
          </div>
          {usage > 0 && (
            <span className="usage" title="使用量">
              <span className="usage-icon" aria-hidden>🔥</span>
              {formatCount(usage)}
            </span>
          )}
        </header>
        {prompt.description && <p className="card-desc">{prompt.description}</p>}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="card-more">查看详情 →</span>
      </article>
    </Link>
  );
}
