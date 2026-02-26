import { getPrompts } from '@/app/lib/get-prompts';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const prompts = await getPrompts();
    return Response.json(prompts);
  } catch (err) {
    console.error('Failed to fetch prompts:', err.message);
    return Response.json(
      { error: '获取提示词列表失败', details: err.message },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const prompts = await getPrompts();
    return Response.json(prompts);
  } catch (err) {
    console.error('Failed to refresh prompts:', err.message);
    return Response.json(
      { error: '刷新失败', details: err.message },
      { status: 500 }
    );
  }
}
