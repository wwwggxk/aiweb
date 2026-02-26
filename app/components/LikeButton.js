"use client";

import { useState } from "react";
import { trackLike } from "./Analytics";

export default function LikeButton({ contentType = "article", contentId = "" }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="like-button-wrapper">
      <button
        className={`like-button ${hovered ? "like-button--expanded" : ""} ${liked ? "like-button--liked" : ""}`}
        onClick={() => {
          const next = !liked;
          setLiked(next);
          if (next) trackLike(contentType, contentId);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={liked ? "取消点赞" : "点赞"}
      >
        <span className="like-button-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
        </span>
        <span className="like-button-text">很有帮助</span>
      </button>
    </div>
  );
}
