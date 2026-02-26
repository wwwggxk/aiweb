"use client";

import { useState, useMemo } from "react";
import { articleItems } from "../data/articleItems";
import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";

function formatCount(n) {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  return String(n);
}

function timeAgo(dateStr) {
  const now = new Date("2026-02-26");
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "今天";
  if (diff <= 30) return `${diff}天前`;
  if (diff <= 365) return `${Math.floor(diff / 30)}个月前`;
  return dateStr;
}

const categories = [
  { key: "all", label: "全部", icon: "grid" },
  { key: "精华", label: "精华", icon: "diamond" },
  { key: "效率", label: "效率", icon: "zap" },
  { key: "营销", label: "营销", icon: "megaphone" },
  { key: "写作", label: "写作", icon: "pen" },
  { key: "绘画", label: "绘画", icon: "image" },
  { key: "视频", label: "视频", icon: "video" },
  { key: "办公", label: "办公", icon: "folder" },
  { key: "编程", label: "编程", icon: "code" },
  { key: "音频", label: "音频", icon: "music" },
];

function CatIcon({ name }) {
  const icons = {
    grid: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    diamond: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z"/>
      </svg>
    ),
    pen: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    image: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
      </svg>
    ),
    video: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    folder: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    code: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    music: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    zap: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    megaphone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

const byViews = [...articleItems].sort((a, b) => b.views - a.views).slice(0, 7);
const byLikes = [...articleItems].sort((a, b) => b.likes - a.likes).slice(0, 7);

export default function ArticlesPage() {
  const [activeCat, setActiveCat] = useState("all");

  const filtered = useMemo(() => {
    if (activeCat === "all") return articleItems;
    if (activeCat === "精华") return [...articleItems].sort((a, b) => b.likes - a.likes).slice(0, 5);
    return articleItems.filter((a) => a.category === activeCat);
  }, [activeCat]);

  return (
    <div className="page" id="top">
      <TopNav current="/articles" />

      <div className="content content--wide">
        <div className="articles-layout">
          {/* 左侧分类导航 */}
          <aside className="cat-sidebar" aria-label="文章分类">
            <nav>
              <ul className="cat-sidebar-nav" role="list">
                {categories.map((cat) => (
                  <li key={cat.key}>
                    <button
                      type="button"
                      className={activeCat === cat.key ? "active" : ""}
                      aria-current={activeCat === cat.key ? "true" : undefined}
                      onClick={() => setActiveCat(cat.key)}
                    >
                      <span className="cat-icon">
                        <CatIcon name={cat.icon} />
                      </span>
                      <span>{cat.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* 中间文章列表 */}
          <main className="articles-main" role="main">
            <section className="article-list" aria-label="文章列表">
              {filtered.map((article) => (
                <article key={article.slug} className="article-card">
                  <h2 className="article-card-title">
                    <a href={`/articles/${article.slug}`}>{article.title}</a>
                  </h2>
                  <p className="article-card-summary">{article.summary}</p>
                  <div className="article-card-footer">
                    <span className="article-card-author">{article.author}</span>
                    <time className="article-card-date" dateTime={article.date}>
                      {timeAgo(article.date)}
                    </time>
                    {article.likes > 0 && (
                      <span className="article-card-stat" title="点赞">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                        {article.likes}
                      </span>
                    )}
                    <span className="article-card-stat" title="阅读">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {formatCount(article.views)}
                    </span>
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <div className="article-empty">
                  <p>该分类暂无文章</p>
                </div>
              )}
            </section>
          </main>

          {/* 右侧排行榜 */}
          <aside className="content-aside" aria-label="排行榜">
            <section className="rank-panel">
              <h2 className="rank-panel-title">阅读排行</h2>
              <ol className="rank-list">
                {byViews.map((article, index) => (
                  <li key={article.slug}>
                    <a href={`/articles/${article.slug}`} className="rank-link">
                      <span className={`rank-num ${index < 3 ? "rank-num-top" : ""}`}>{index + 1}</span>
                      <span className="rank-label">{article.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rank-panel">
              <h2 className="rank-panel-title">推荐排行</h2>
              <ol className="rank-list">
                {byLikes.map((article, index) => (
                  <li key={article.slug}>
                    <a href={`/articles/${article.slug}`} className="rank-link">
                      <span className={`rank-num ${index < 3 ? "rank-num-top" : ""}`}>{index + 1}</span>
                      <span className="rank-label">{article.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
