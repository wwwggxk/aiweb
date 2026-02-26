'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';

function formatCount(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return String(n);
}

function getRelatedPrompts(current, allPrompts, limit = 8) {
  if (!current || !allPrompts?.length) return [];
  const currentTags = new Set(Array.isArray(current.tags) ? current.tags : []);
  const id = String(current.id);
  return allPrompts
    .filter((p) => String(p.id) !== id && Array.isArray(p.tags) && p.tags.some((t) => currentTags.has(t)))
    .slice(0, limit);
}

function getHotPrompts(current, allPrompts, limit = 8) {
  if (!allPrompts?.length) return [];
  const id = String(current?.id);
  return [...allPrompts]
    .filter((p) => String(p.id) !== id)
    .sort((a, b) => (b.usageCount ?? 0) - (a.usageCount ?? 0))
    .slice(0, limit);
}

export default function DetailView({ prompt, allPrompts = [] }) {
  const [copied, setCopied] = useState(false);
  const [copiedCn, setCopiedCn] = useState(false);

  const copyToClipboard = useCallback(async (text, onSuccess) => {
    if (!text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      onSuccess?.();
    } catch (e) {
      console.warn('Copy failed:', e);
    }
  }, []);

  const copyContent = useCallback(async () => {
    if (!prompt) return;
    const text = prompt.content || prompt.prompt || '';
    await copyToClipboard(text, () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [prompt, copyToClipboard]);

  const copyContentCn = useCallback(async () => {
    if (!prompt?.content_cn) return;
    await copyToClipboard(prompt.content_cn, () => {
      setCopiedCn(true);
      setTimeout(() => setCopiedCn(false), 2000);
    });
  }, [prompt, copyToClipboard]);

  if (!prompt) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <p>未找到该提示词</p>
          <Link href="/prompts" className="detail-back-link">返回首页</Link>
        </div>
      </div>
    );
  }

  const tags = Array.isArray(prompt.tags) ? prompt.tags : [];
  const usage = prompt.usageCount ?? prompt.usage ?? 0;
  const title = prompt.title || '未命名';
  const related = getRelatedPrompts(prompt, allPrompts);
  const hot = getHotPrompts(prompt, allPrompts);

  return (
    <div className="detail-page">
      <div className="detail-main-wrap">
        <article className="detail-main">
          <div className="detail-title-wrapper">
            <h1 className="detail-title">{title}</h1>
            <div className="detail-meta">
              {tags.map((t) => (
                <span key={t} className="detail-tag">{t}</span>
              ))}
              {usage > 0 && (
                <span className="detail-usage" title="使用量">
                  <span className="detail-usage-icon" aria-hidden>🔥</span>
                  {formatCount(usage)}
                </span>
              )}
            </div>
          </div>

          <p className="detail-seo-intro">
            <strong>AI 提示词详情</strong>：本页提供该 Prompt 模板的完整内容，适合在找「ChatGPT 提示词怎么写」「免费 AI 提示词模板」的用户。可一键复制后用于 ChatGPT、Claude、文心一言等大语言模型，免费使用。右侧可查看<strong>相关 AI 提示词</strong>与<strong>热门提示词</strong>推荐。
          </p>

          {prompt.description && (
            <div className="detail-info-block">
              <span className="detail-info-icon" aria-hidden>▲</span>
              <p className="detail-info-text">{prompt.description}</p>
            </div>
          )}

          {prompt.content_cn && (
            <section className="detail-content-section detail-content-section-cn" aria-labelledby="detail-content-cn-heading">
              <div className="detail-content-head">
                <h2 id="detail-content-cn-heading" className="detail-content-title">
                  提示词（中文）
                </h2>
                <button
                  type="button"
                  className={`detail-btn-copy ${copiedCn ? 'detail-btn-copy-done' : ''}`}
                  onClick={copyContentCn}
                  aria-label={copiedCn ? '已复制' : '复制中文内容'}
                >
                  <span className="detail-btn-copy-icon" aria-hidden>
                    {copiedCn ? '✓' : '⎘'}
                  </span>
                  {copiedCn ? '已复制' : '复制'}
                </button>
              </div>
              <pre className="detail-content-body detail-content-body-cn">
                {prompt.content_cn}
              </pre>
            </section>
          )}

          <section className="detail-content-section detail-content-section-en" aria-labelledby="detail-content-heading">
            <div className="detail-content-head">
              <h2 id="detail-content-heading" className="detail-content-title">
                Prompt 内容（可复制到 ChatGPT 使用）
              </h2>
              <button
                type="button"
                className={`detail-btn-copy detail-btn-copy-secondary ${copied ? 'detail-btn-copy-done' : ''}`}
                onClick={copyContent}
                aria-label={copied ? '已复制' : '复制内容'}
              >
                <span className="detail-btn-copy-icon" aria-hidden>
                  {copied ? '✓' : '⎘'}
                </span>
                {copied ? '已复制' : '复制'}
              </button>
            </div>
            <pre className="detail-content-body">
              {prompt.content || prompt.prompt || '—'}
            </pre>
          </section>
        </article>

        <aside className="detail-sidebar" aria-label="相关与热门提示词">
          {related.length > 0 && (
            <section className="detail-sidebar-block">
              <h3 className="detail-sidebar-title">相关 AI 提示词</h3>
              <p className="detail-sidebar-desc">同分类下的其他 Prompt 模板</p>
              <ul className="detail-sidebar-list">
                {related.map((p) => (
                  <li key={p.id}>
                    <Link href={`/prompts/${p.id}`} className="detail-sidebar-link">
                      {p.title || '未命名'}
                      {(p.usageCount ?? p.usage) > 0 && (
                        <span className="detail-sidebar-usage">{formatCount(p.usageCount ?? p.usage)}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {hot.length > 0 && (
            <section className="detail-sidebar-block">
              <h3 className="detail-sidebar-title">热门提示词</h3>
              <p className="detail-sidebar-desc">使用量较高的 ChatGPT Prompt 推荐</p>
              <ul className="detail-sidebar-list">
                {hot.map((p) => (
                  <li key={p.id}>
                    <Link href={`/prompts/${p.id}`} className="detail-sidebar-link">
                      {p.title || '未命名'}
                      {(p.usageCount ?? p.usage) > 0 && (
                        <span className="detail-sidebar-usage">{formatCount(p.usageCount ?? p.usage)}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
