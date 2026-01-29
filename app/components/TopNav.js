const NAV_ITEMS = [
  { href: "/", label: "AI工具" },
  { href: "/ai-prompts", label: "AI提示词" },
  { href: "/ai-tutorials", label: "AI教程" },
  { href: "/news", label: "AI资讯" }
];

export default function TopNav({ current = "" }) {
  return (
    <header className="top-nav" role="banner">
      <div className="top-nav-inner">
        <a className="top-nav-logo" href="/" aria-label="AI导航首页">
          <span aria-hidden="true">
            <img src="/icon.svg" alt="" loading="lazy" decoding="async" />
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
