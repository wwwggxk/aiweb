'use client';

import { useState, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';

const PAGE_SIZE = 5;
const MAX_PAGES = 2;
const SWIPE_THRESHOLD = 50;

function getHotPrompts(prompts, limit = PAGE_SIZE * MAX_PAGES) {
  if (!Array.isArray(prompts) || !prompts.length) return [];
  return [...prompts]
    .filter((p) => (p.usageCount ?? p.usage ?? 0) > 0)
    .sort((a, b) => (b.usageCount ?? b.usage ?? 0) - (a.usageCount ?? a.usage ?? 0))
    .slice(0, limit);
}

export default function HotListCard({ prompts = [] }) {
  const [page, setPage] = useState(0);
  const touchStartX = useRef(0);

  const hotList = useMemo(() => getHotPrompts(prompts), [prompts]);
  const totalPages = Math.min(MAX_PAGES, Math.ceil(hotList.length / PAGE_SIZE));
  const pageItems = hotList.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const goPrev = useCallback(() => {
    setPage((p) => (p <= 0 ? p : p - 1));
  }, []);
  const goNext = useCallback(() => {
    setPage((p) => (p >= totalPages - 1 ? p : p + 1));
  }, [totalPages]);

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback(
    (e) => {
      const endX = e.changedTouches[0].clientX;
      const delta = touchStartX.current - endX;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      if (delta > 0) goNext();
      else goPrev();
    },
    [goPrev, goNext]
  );

  if (pageItems.length === 0) return null;

  return (
    <section
      className="hot-list-card"
      aria-label="热门榜单"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <header className="hot-list-header">
        <h2 className="hot-list-title">
          <span className="hot-list-icon" aria-hidden>🔥</span>
          热门榜单
        </h2>
        {totalPages > 1 && (
          <div className="hot-list-nav" role="group" aria-label="翻页">
            <button
              type="button"
              className="hot-list-arrow hot-list-arrow-prev"
              onClick={goPrev}
              disabled={page <= 0}
              aria-label="上一页"
            >
              ‹
            </button>
            <button
              type="button"
              className="hot-list-arrow hot-list-arrow-next"
              onClick={goNext}
              disabled={page >= totalPages - 1}
              aria-label="下一页"
            >
              ›
            </button>
          </div>
        )}
      </header>
      <ol className="hot-list-ol" start={page * PAGE_SIZE + 1}>
        {pageItems.map((p, i) => {
          const rank = page * PAGE_SIZE + i + 1;
          const isTop3 = rank <= 3;
          return (
            <li key={p.id}>
              <Link href={`/prompts/${p.slug || p.id}`} className="hot-list-link">
                <span className={`hot-list-num ${isTop3 ? 'hot-list-num-top' : ''}`}>{rank}</span>
                <span className="hot-list-label">{p.title || '未命名'}</span>
              </Link>
            </li>
          );
        })}
      </ol>
      {totalPages > 1 && (
        <div className="hot-list-dots" role="tablist" aria-label="切换榜单页">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={page === i}
              aria-label={`第 ${i + 1} 页`}
              className={`hot-list-dot ${page === i ? 'hot-list-dot-active' : ''}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
