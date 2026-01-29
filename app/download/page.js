import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";

export const dynamic = "force-static";

export default function DownloadPage() {
  return (
    <div className="page" id="top">
      <TopNav current="/download" />

      <main className="content content--wide" role="main">
        <section className="download-hero" aria-labelledby="download-title">
          <h1 id="download-title">AI-Tools</h1>
          <p>提供浏览器插件与桌面版下载，适配不同使用场景。</p>
        </section>

        <section className="download-section" aria-labelledby="download-extension">
          <h2 id="download-extension">Chrome 插件</h2>
          <p>一键收藏与快速打开工具，提高使用效率。</p>
          <a className="download-btn" href="#" aria-disabled="true">
            获取 Chrome 插件（即将上线）
          </a>
        </section>

        <section className="download-section" aria-labelledby="download-desktop">
          <h2 id="download-desktop">桌面工具</h2>
          <p>支持 Windows 与 macOS，离线使用更流畅。</p>
          <div className="download-grid">
            <a className="download-card" href="#" aria-disabled="true">
              <strong>Windows 版 AI-Tools</strong>
              <span>适用于 Windows 10/11</span>
            </a>
            <a className="download-card" href="#" aria-disabled="true">
              <strong>macOS 版 AI-Tools</strong>
              <span>适用于 macOS 12 及以上</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
