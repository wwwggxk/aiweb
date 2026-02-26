 "use client";

import { useEffect, useMemo, useRef, useState } from "react";
import sections from "./sections";
import AsidePanels from "./components/AsidePanels";
import { topArticles } from "./data/topArticles";
import TopNav from "./components/TopNav";
import SiteFooter from "./components/SiteFooter";

const navIconMap = {
  hot: "fire",
  smart: "image",
  smart2: "chat",
  smart4: "pen",
  smart9: "image",
  smart7: "layout",
  smart8: "layout",
  smart6: "pen",
  smart10: "video",
  smart5: "layout",
  study: "chart",
  gadget: "office",
  translate: "chat",
  program: "code",
  institution: "chart",
  smart12: "music",
  aitools: "layout",
  smart11: "fire"
};

const navItems = sections.map((section) => ({
  id: section.id,
  label: section.title,
  icon: navIconMap[section.id] || "chat"
}));

function NavIcon({ name }) {
  const icons = {
    fire: "M12 2c2.3 3 2.8 5.4 1.6 7.2-1.2 1.8-3.2 2.5-4.8 3.7-1.7 1.3-2.6 3.2-2.2 5.1.5 2.5 2.8 4 5.4 4 3.6 0 6-2.4 6-5.7 0-3-1.6-5.8-4.1-7.7-.8-.6-1.5-1.7-1.9-2.6z",
    chat: "M4 5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z",
    pen: "M4 20l4.5-1 9.6-9.6a2 2 0 0 0 0-2.8l-1.7-1.7a2 2 0 0 0-2.8 0L4.9 14.5 4 20z",
    image: "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm3 9l2.6-3.2a1 1 0 0 1 1.6 0L15 15l2.5-3.1a1 1 0 0 1 1.6 0L21 14v3H3v-2l4-1z",
    video: "M3 6h13a2 2 0 0 1 2 2v1l4-2v10l-4-2v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
    music: "M9 18a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm9-12v10a3 3 0 1 1-2-2.8V8.2l-7 1.6V16a3 3 0 1 1-2-2.8V6.5L18 4z",
    layout: "M4 5h7v7H4V5zm9 0h7v4h-7V5zm0 6h7v8h-7v-8zm-9 3h7v5H4v-5z",
    code: "M8 7l-4 5 4 5M16 7l4 5-4 5M13 5l-2 14",
    chart: "M4 19h16M7 16v-6M12 16V8M17 16v-10",
    office: "M4 4h10l6 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 0v4h6"
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icons[name] || icons.chat} fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function getInitials(name) {
  if (!name) return "AI";
  const match = name.match(/[A-Za-z]/g);
  if (match && match.length >= 2) {
    return `${match[0]}${match[1]}`.toUpperCase();
  }
  return name.slice(0, 2);
}

function getPopularity(item, index) {
  if (typeof item.popularity === "number") {
    return Math.max(0, Math.min(5, item.popularity));
  }
  const score = 5 - Math.floor(index / 4);
  return Math.max(0, Math.min(5, score));
}

function getToolKey(name) {
  return String(name || "").replace(/\s+/g, "");
}

function getPricingTag(item) {
  const text = `${item.name || ""} ${item.desc || ""}`.toLowerCase();
  const explicit = typeof item.pricing === "string" ? item.pricing : "";
  if (explicit) return explicit;
  if (text.includes("限免") || text.includes("限时免费")) return "限免";
  if (text.includes("免费额度") || text.includes("试用") || text.includes("额度")) return "免费额度";
  if (text.includes("免费") || text.includes("开源")) return "免费";
  if (
    text.includes("付费") ||
    text.includes("订阅") ||
    text.includes("会员") ||
    text.includes("pro") ||
    text.includes("premium")
  ) {
    return "付费";
  }
  return "免费额度";
}

function getTagClass(tag) {
  switch (tag) {
    case "免费":
      return "free";
    case "付费":
      return "paid";
    case "免费额度":
      return "quota";
    case "限免":
      return "limited";
    default:
      return "quota";
  }
}

export default function Home() {
  const [activeId, setActiveId] = useState(undefined);
  const heroCanvasRef = useRef(null);
  const searchInputRef = useRef(null);
  const heroText = "发现最适合你的 AI 工具";
  const [typedText, setTypedText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const popularItems = sections
    .flatMap((section, sectionIndex) =>
      section.items.map((item, itemIndex) => ({
        ...item,
        popularity: getPopularity(item, itemIndex),
        sectionId: section.id,
        sectionTitle: section.title,
        order: sectionIndex * 100 + itemIndex,
        toolKey: getToolKey(item.name)
      }))
    )
    .sort((a, b) => b.popularity - a.popularity || a.order - b.order)
    .slice(0, 8);


  const filteredSections = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return sections;
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          const text = `${item.name || ""} ${item.desc || ""}`.toLowerCase();
          return text.includes(keyword);
        })
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  useEffect(() => {
    const scrollToHash = (hash) => {
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ block: "start", behavior: "auto" });
      }
    };

    const updateActive = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveId(hash);
      scrollToHash(hash);
    };

    requestAnimationFrame(updateActive);
    window.addEventListener("hashchange", updateActive);

    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(`section-${section.id}`))
      .filter(Boolean);
    if (headings.length === 0) return undefined;

    const topNavHeight = 32;
    const buffer = 16;
    const triggerLine = topNavHeight + buffer;

    let rafId = 0;
    const updateActiveOnScroll = () => {
      rafId = 0;
      let currentId = headings[0].id.replace("section-", "");
      for (const heading of headings) {
        const top = heading.getBoundingClientRect().top;
        if (top <= triggerLine) {
          currentId = heading.id.replace("section-", "");
        } else {
          break;
        }
      }
      setActiveId(currentId);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateActiveOnScroll);
      }
    };

    updateActiveOnScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setTypedText(heroText);
      return undefined;
    }
    let index = 0;
    let timerId;
    const tick = () => {
      index += 1;
      setTypedText(heroText.slice(0, index));
      if (index < heroText.length) {
        timerId = window.setTimeout(tick, 80);
      }
    };
    timerId = window.setTimeout(tick, 80);
    return () => window.clearTimeout(timerId);
  }, [heroText]);

  useEffect(() => {
    if (isSearchOpen) {
      requestAnimationFrame(() => {
        searchInputRef.current?.focus();
      });
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = 0;
    const dpr = window.devicePixelRatio || 1;

    const initParticles = () => {
      const count = Math.min(120, Math.max(40, Math.floor((width * height) / 12000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.6
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : canvas.clientWidth;
      height = parent ? parent.clientHeight : 260;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const drawBackground = () => {
      ctx.clearRect(0, 0, width, height);
      const glow = ctx.createRadialGradient(width * 0.7, height * 0.25, 0, width * 0.7, height * 0.25, width * 0.9);
      glow.addColorStop(0, "rgba(255, 138, 61, 0.16)");
      glow.addColorStop(0.6, "rgba(90, 155, 255, 0.10)");
      glow.addColorStop(1, "rgba(90, 155, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = () => {
      drawBackground();
      const maxDist = 110;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(90, 155, 255, ${alpha * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.fillStyle = "rgba(15, 23, 42, 0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="page" id="top">
      <TopNav current="/" />
      <aside className="sidebar sidebar-card">
          <nav aria-label="分类导航">
            <ul className="sidebar-nav" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={item.id === activeId ? "active" : ""}
                    aria-current={item.id === activeId ? "true" : undefined}
                    onClick={() => {
                      setActiveId(item.id);
                      const target = document.getElementById(item.id);
                      if (target) {
                        target.scrollIntoView({ block: "start", behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="nav-icon">
                      <NavIcon name={item.icon} />
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <a className="ghost sidebar-action" href="mailto:wwwggxk@gmail.com">
            提交推荐
          </a>
      </aside>

      <main className="content" role="main">
        <main className="content-main">
          <div className="content-primary">
            <header className="hero hero-content">
              <div className="hero-visual" aria-hidden="true">
                <canvas ref={heroCanvasRef} className="hero-canvas" />
              </div>
              <div className="hero-copy">
                <div className="hero-title">
                  <h1 className="sr-only">{heroText}</h1>
                  {!isSearchOpen ? (
                    <button
                      type="button"
                      className="hero-typing"
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="点击输入关键字搜索"
                    >
                      <span className="typing-text" aria-hidden="true">{typedText}</span>
                      <span className="typing-cursor" aria-hidden="true" />
                    </button>
                  ) : (
                    <form
                      className="hero-search"
                      role="search"
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <label className="sr-only" htmlFor="hero-search-input">
                        输入关键字搜索
                      </label>
                      <input
                        id="hero-search-input"
                        ref={searchInputRef}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onBlur={() => {
                          if (!query.trim()) {
                            setIsSearchOpen(false);
                          }
                        }}
                        placeholder="输入关键字搜索工具..."
                        aria-label="输入关键字搜索工具"
                      />
                    </form>
                  )}
                </div>
              </div>
            </header>

            <section id="catalog" className="catalog" aria-label="工具分类">
            {filteredSections.length === 0 ? (
              <div className="empty-state">未找到匹配的工具，请换个关键词试试。</div>
            ) : null}
            {filteredSections.map((section) => (
              <article className="section-card" key={section.id} id={section.id} aria-labelledby={`section-${section.id}`}>
                <h2 id={`section-${section.id}`}>{section.title}</h2>
                {section.description ? <p>{section.description}</p> : null}
                <ul className="tool-grid" role="list">
                  {section.items.map((item, index) => {
                    const popularity = getPopularity(item, index);
                    const toolKey = getToolKey(item.name);
                    return (
                    <li key={item.name}>
                      <a
                        className="tool-card"
                        href={`/tools/${encodeURIComponent(toolKey)}`}
                        aria-label={`查看 ${item.name}`}
                      >
                        <div className="tool-avatar" aria-hidden="true">
                          {item.icon ? (
                            <img src={item.icon} alt={`${item.name} - ${item.desc}`} loading="lazy" decoding="async" width="48" height="48" />
                          ) : (
                            getInitials(item.name)
                          )}
                        </div>
                        <div>
                          <h3 className="tool-title">{item.name}</h3>
                          <p>{item.desc}</p>
                        </div>
                        <div className="tool-meta">
                          {popularity > 0 ? (
                            <span className="tool-pop" aria-label={`热门指数 ${popularity}/5`}>
                              <span className="tool-pop-label">热度</span>
                              <span className="tool-pop-flames" aria-hidden="true">
                                {[1, 2, 3, 4, 5].map((level) => (
                                  <span
                                    key={level}
                                    className={level <= popularity ? "flame active" : "flame"}
                                  >
                                    🔥
                                  </span>
                                ))}
                              </span>
                            </span>
                          ) : null}
                          {(() => {
                            const tag = getPricingTag(item);
                            return <span className={`tool-tag tool-tag--${getTagClass(tag)}`}>{tag}</span>;
                          })()}
                        </div>
                      </a>
                    </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </section>
          </div>
          <AsidePanels popularItems={popularItems} topArticles={topArticles} />
        </main>

          <SiteFooter />
      </main>
    </div>
  );
}
