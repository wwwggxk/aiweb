"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "AI工具" },
  { href: "/ai-prompts", label: "AI提示词" },
  { href: "/ai-tutorials", label: "AI教程" },
  { href: "/news", label: "AI资讯" }
];

export default function TopNav({ current = "" }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        setIsScrolled(window.scrollY > 28);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className={`top-nav${isScrolled ? " top-nav--scrolled" : ""}`} role="banner">
      <div className="top-nav-inner">
        <a className="top-nav-logo" href="/" aria-label="AI导航首页">
          <span aria-hidden="true">
            <svg className="top-nav-logo-svg" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
              <rect x="8" y="8" width="112" height="112" fill="#0F172A" />
              <rect x="12" y="12" width="104" height="104" fill="#FF8A3D" />
              <rect x="16" y="16" width="96" height="96" fill="#FFFFFF" />
              <rect x="20" y="20" width="88" height="88" fill="#FFF7ED" />
              <rect x="36" y="40" width="8" height="8" fill="#111827" />
              <rect x="44" y="40" width="8" height="8" fill="#111827" />
              <rect x="52" y="40" width="8" height="8" fill="#111827" />
              <rect x="60" y="40" width="8" height="8" fill="#111827" />
              <rect x="36" y="48" width="8" height="8" fill="#111827" />
              <rect x="60" y="48" width="8" height="8" fill="#111827" />
              <rect x="36" y="56" width="8" height="8" fill="#111827" />
              <rect x="60" y="56" width="8" height="8" fill="#111827" />
              <rect x="36" y="64" width="8" height="8" fill="#111827" />
              <rect x="60" y="64" width="8" height="8" fill="#111827" />
              <rect x="36" y="72" width="8" height="8" fill="#111827" />
              <rect x="44" y="72" width="8" height="8" fill="#111827" />
              <rect x="52" y="72" width="8" height="8" fill="#111827" />
              <rect x="60" y="72" width="8" height="8" fill="#111827" />
              <rect x="84" y="40" width="8" height="8" fill="#111827" />
              <rect x="84" y="48" width="8" height="8" fill="#111827" />
              <rect x="84" y="56" width="8" height="8" fill="#111827" />
              <rect x="84" y="64" width="8" height="8" fill="#111827" />
              <rect x="84" y="72" width="8" height="8" fill="#111827" />
              <rect x="84" y="80" width="8" height="8" fill="#111827" />
            </svg>
          </span>
        </a>
        <nav className="top-nav-links" aria-label="站点导航">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} aria-current={current === item.href ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="top-nav-cta"
          href="/download"
          aria-current={current === "/download" ? "page" : undefined}
        >
          下载 AI-Tools
        </a>
      </div>
    </header>
  );
}
