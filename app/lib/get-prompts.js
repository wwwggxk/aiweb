import path from 'path';
import fs from 'fs';

/**
 * 从本地 initialPrompts.json 加载 prompt 列表
 */
function loadFallbackPrompts() {
  const fallbackPath = path.join(process.cwd(), 'app', 'data', 'prompts', 'initialPrompts.json');
  try {
    const raw = fs.readFileSync(fallbackPath, 'utf8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : data.prompts || data.list || [];
  } catch (e) {
    console.warn('Fallback prompts not found or invalid:', e.message);
  }
  return getBuiltinPrompts();
}

function getBuiltinPrompts() {
  return [
    {
      id: '2',
      title: '写作助理',
      description: '优化句子、文章的语法、清晰度和简洁度，提高可读性。',
      content:
        'As a writing improvement assistant, your task is to improve the spelling, grammar, clarity, concision, and overall readability of the text provided. Please begin by editing the following text: [文章内容]',
      usageCount: 88000,
      tags: ['写作辅助'],
      link: '',
    },
    {
      id: '1',
      title: '英语翻译/修改',
      description: '将其他语言翻译成英文，或改进你提供的英文句子。',
      content:
        'I want you to act as an English translator, spelling corrector and improver. My first sentence is "要翻译或修改的内容"',
      usageCount: 21000,
      tags: ['语言/翻译'],
      link: '',
    },
  ];
}

export async function getPrompts() {
  return loadFallbackPrompts();
}

export { loadFallbackPrompts, getBuiltinPrompts };
