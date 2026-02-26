'use client';

import { useState } from 'react';
import PromptList from '@/app/components/prompts/PromptList';

export default function PromptsClient({ initialPrompts = [] }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="app">
      <div className="top-search-bar">
        <input
          type="search"
          placeholder="搜索标题、描述或标签…"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="top-search-input"
          autoComplete="off"
          aria-label="搜索标题、描述或标签"
        />
      </div>
      <PromptList
        prompts={initialPrompts}
        searchKeyword={searchKeyword}
        onSearchKeywordChange={setSearchKeyword}
      />
    </div>
  );
}
