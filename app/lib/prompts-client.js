/**
 * 获取 prompt 列表：请求 /api/prompts，失败则使用本地 initialPrompts.json
 */
export async function fetchPrompts() {
  try {
    const res = await fetch('/api/prompts', { method: 'GET' });
    if (res.ok) {
      const data = await res.json();
      return Array.isArray(data) ? data : data.prompts || data.list || [];
    }
  } catch (e) {
    console.warn('API /api/prompts 不可用，使用本地数据:', e.message);
  }
  // 如果 API 失败，返回空数组，由服务端 getPrompts 处理
  return [];
}

/**
 * 刷新列表
 */
export async function refreshPrompts() {
  const res = await fetch('/api/prompts', { method: 'POST' });
  if (!res.ok) throw new Error('刷新失败');
  const data = await res.json();
  return Array.isArray(data) ? data : data.prompts || data.list || [];
}
