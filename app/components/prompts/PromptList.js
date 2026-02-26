'use client';

import { useState, useMemo } from 'react';
import PromptCard from './PromptCard';
import HotListCard from './HotListCard';

const TAG_FOLD_THRESHOLD = 14;

function formatCount(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return String(n);
}

function getAllTags(prompts) {
  const set = new Set();
  prompts.forEach((p) => {
    (Array.isArray(p.tags) ? p.tags : []).forEach((t) => set.add(String(t).trim()));
  });
  return Array.from(set).filter(Boolean).sort((a, b) => a.localeCompare(b));
}

export default function PromptList({ prompts, searchKeyword = '' }) {
  const [selectedTag, setSelectedTag] = useState('');
  const [tagsExpanded, setTagsExpanded] = useState(false);

  const tags = useMemo(() => getAllTags(prompts), [prompts]);
  const tagsVisible =
    tagsExpanded || tags.length <= TAG_FOLD_THRESHOLD
      ? tags
      : tags.slice(0, TAG_FOLD_THRESHOLD);
  const hasMoreTags = tags.length > TAG_FOLD_THRESHOLD;

  const filtered = useMemo(() => {
    let list = prompts;
    const kw = searchKeyword.trim().toLowerCase();
    if (kw) {
      list = list.filter(
        (p) =>
          p.title?.toLowerCase().includes(kw) ||
          p.description?.toLowerCase().includes(kw) ||
          (Array.isArray(p.tags) && p.tags.some((t) => String(t).toLowerCase().includes(kw)))
      );
    }
    if (selectedTag) {
      list = list.filter(
        (p) => Array.isArray(p.tags) && p.tags.some((t) => String(t) === selectedTag)
      );
    }
    return list;
  }, [prompts, searchKeyword, selectedTag]);

  return (
    <div className="prompt-list">
      <div className="tags-bar" role="group" aria-label="按标签筛选">
        <button
          type="button"
          className={`tag-chip ${selectedTag === '' ? 'active' : ''}`}
          onClick={() => setSelectedTag('')}
        >
          全部
        </button>
        {tagsVisible.map((t) => (
          <button
            key={t}
            type="button"
            className={`tag-chip ${selectedTag === t ? 'active' : ''}`}
            onClick={() => setSelectedTag(selectedTag === t ? '' : t)}
          >
            {t}
          </button>
        ))}
        {hasMoreTags && (
          <button
            type="button"
            className="tag-chip tag-chip-more"
            onClick={() => setTagsExpanded((e) => !e)}
            aria-expanded={tagsExpanded}
          >
            {tagsExpanded ? '收起' : `更多 (${tags.length - TAG_FOLD_THRESHOLD})`}
          </button>
        )}
      </div>
      <p className="count-line" aria-live="polite">
        共 <strong>{filtered.length}</strong> 条提示词
        {prompts.length !== filtered.length && (
          <span className="count-line-total"> / 全部 {prompts.length} 条</span>
        )}
      </p>
      <ul className="cards grid-cards">
        <li className="grid-card-item-hot">
          <HotListCard prompts={prompts} />
        </li>
        {filtered.map((p) => (
          <li key={p.slug || p.id}>
            <PromptCard prompt={p} formatCount={formatCount} />
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <div className="empty" role="status">
          <p className="empty-title">暂无匹配的提示词</p>
          <p className="empty-hint">试试更换关键词或选择其他标签</p>
        </div>
      )}
    </div>
  );
}
