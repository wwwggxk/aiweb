"use client";

import { useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/* ── GA4 事件发送工具函数 ── */
function gtag() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...arguments);
  }
}

/* ── 页面浏览追踪（SPA 路由变化） ── */
export function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href
    });
  }, [pathname, searchParams]);

  return null;
}

/* ── 通用事件追踪 Hook ── */
export function useTrackEvent() {
  return useCallback((eventName, params = {}) => {
    gtag("event", eventName, params);
  }, []);
}

/* ── 预定义事件追踪函数 ── */

// 工具卡片点击
export function trackToolClick(toolName, category) {
  gtag("event", "tool_click", {
    tool_name: toolName,
    tool_category: category,
    event_category: "engagement"
  });
}

// 外链点击（访问工具官网）
export function trackOutboundLink(url, toolName) {
  gtag("event", "click", {
    event_category: "outbound",
    event_label: toolName || url,
    transport_type: "beacon",
    outbound_url: url
  });
}

// 文章阅读
export function trackArticleView(title, slug, category) {
  gtag("event", "article_view", {
    article_title: title,
    article_slug: slug,
    article_category: category,
    event_category: "content"
  });
}

// 资讯阅读
export function trackNewsView(title, slug) {
  gtag("event", "news_view", {
    news_title: title,
    news_slug: slug,
    event_category: "content"
  });
}

// 提示词复制
export function trackPromptCopy(promptId, promptTitle) {
  gtag("event", "prompt_copy", {
    prompt_id: promptId,
    prompt_title: promptTitle,
    event_category: "engagement"
  });
}

// 点赞
export function trackLike(contentType, contentId) {
  gtag("event", "like", {
    content_type: contentType,
    content_id: contentId,
    event_category: "engagement"
  });
}

// 搜索
export function trackSearch(query, resultCount) {
  gtag("event", "search", {
    search_term: query,
    results_count: resultCount
  });
}

// 分类筛选
export function trackCategoryFilter(category, page) {
  gtag("event", "category_filter", {
    category_name: category,
    filter_page: page,
    event_category: "navigation"
  });
}

// 滚动深度（用于长文章）
export function trackScrollDepth(depth, contentType, contentId) {
  gtag("event", "scroll_depth", {
    depth_percentage: depth,
    content_type: contentType,
    content_id: contentId,
    event_category: "engagement"
  });
}
