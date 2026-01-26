const sections = [
  {
    "id": "hot",
    "title": "热门推荐",
    "description": "热门推荐相关工具与资源。",
    "items": [
      {
        "name": "DeepSeek",
        "desc": "人人都在用的AI神器，代码设计文案数学题张口就来，复杂问题秒出方案",
        "url": "https://www.deepseek.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/02/nav-ai-deepseek.jpg"
      },
      {
        "name": "Midjourney",
        "desc": "目前最强的AI绘画工具",
        "url": "https://www.midjourney.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Midjourney.png"
      },
      {
        "name": "ChatGPT",
        "desc": "地表最强AI聊天机器人",
        "url": "https://chat.openai.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-ChatGPT.png"
      },
      {
        "name": "Stable Diffusion",
        "desc": "最强开源AI绘画工具",
        "url": "https://www.uisdc.com/stable-diffusion",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-sd.jpg"
      },
      {
        "name": "HuggingFace",
        "desc": "下载开源的SD模型",
        "url": "https://huggingface.co/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-HuggingFace.png"
      },
      {
        "name": "堆友AI创作神器",
        "desc": "推荐！Alibaba Design出品，AIGC行业大咖力荐的免费AI绘画神器和分享社区",
        "url": "https://d.design/ai?from=ysaidh",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/hao-nav-duiyou.jpg"
      },
      {
        "name": "Flowith",
        "desc": "推荐！超好用的 AI创作工作台，汇集无限智能体/个人知识库/AI大模型的无限画布",
        "url": "https://flowith.net/blank",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/09/nav-ai-flowith.webp"
      },
      {
        "name": "稿定AI",
        "desc": "免费AI文生图，AI灵感绘图/扩图/AI抠图/AI消除/图片转AI绘画",
        "url": "https://www.gaoding.com/utms/f49c32c06c9d6bfd1dff303734666cfc",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/05/nav-ai-gaoding.png"
      },
      {
        "name": "AI星踪岛",
        "desc": "推荐！专业全面的AI人工智能学习平台，你关注的AI知识，都在这里",
        "url": "https://aixzd.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/11/hao-nav-aixzd-tx.webp"
      },
      {
        "name": "AiPPT",
        "desc": "一句话60秒一键生成PPT！AI免费生成PPT，超2000万用户的选择",
        "url": "https://www.aippt.cn/?utm_type=Navweb&utm_source=ys-rmtj&utm_page=aippt&utm_plan=ppt&utm_unit=AIPPT&utm_keyword=40478794",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/07/hao-nav-aippt-20250723.webp"
      },
      {
        "name": "Krea AI",
        "desc": "强悍的AI图像实时生成神器，颠覆传统工作流",
        "url": "https://www.uisdc.com/krea-ai",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-krea.jpg"
      },
      {
        "name": "TinWow",
        "desc": "推荐！集合PDF、视频、图像、写作的在线综合AI工具箱",
        "url": "https://tinywow.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-tinywow.jpg"
      }
    ]
  },
  {
    "id": "smart",
    "title": "AI绘画",
    "description": "AI绘画相关工具与资源。",
    "items": [
      {
        "name": "Nano Banana",
        "desc": "最具人气的谷歌AI生图神器，史上最会画画的聪明香蕉，3秒生成刷屏视觉盛宴",
        "url": "https://aistudio.google.com/prompts/new_chat",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/09/hao-nav-nanobanana.webp"
      },
      {
        "name": "Flux.1",
        "desc": "AI 绘画新标杆，超强开源文生图模型",
        "url": "https://www.uisdc.com/flux-1",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/08/nav-ai-FLUX.1.jpg"
      },
      {
        "name": "Midjourney",
        "desc": "目前最强的AI绘画工具",
        "url": "https://www.midjourney.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Midjourney.png"
      },
      {
        "name": "Stable Diffusion",
        "desc": "最强开源AI绘画工具",
        "url": "https://www.uisdc.com/stable-diffusion",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-stable.png"
      },
      {
        "name": "Civitai",
        "desc": "AI艺术共享平台！海量SD开源模型",
        "url": "https://civitai.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Civitai.png"
      },
      {
        "name": "AI绘画专题",
        "desc": "推荐！为您精选AI绘画有关的神器和介绍",
        "url": "https://www.uisdc.com/tag/ai%E7%BB%98%E7%94%BB",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/hao-nav-aizt.png"
      },
      {
        "name": "NijiJourney",
        "desc": "MJ出品！面向二次元风格，内容细致拿捏专业到位",
        "url": "https://nijijourney.com/zh/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-NijiJourney.png"
      },
      {
        "name": "Dreamlike.art",
        "desc": "效果惊人！内置5种模型的AI图像生成器",
        "url": "https://www.uisdc.com/dreamlike-art",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Dreamlike.png"
      },
      {
        "name": "NightCafe",
        "desc": "用AI生成惊艳的艺术品",
        "url": "https://creator.nightcafe.studio/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-NightCafe.png"
      },
      {
        "name": "DALL·E2",
        "desc": "OpenAI出品的绘画工具",
        "url": "https://openai.com/research/dall-e",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-DALLE2.png"
      },
      {
        "name": "Hugging Face",
        "desc": "下载开源的SD模型",
        "url": "https://huggingface.co/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-HuggingFace.png"
      },
      {
        "name": "Tiamat",
        "desc": "国内自研的AI作画系统！内测中",
        "url": "https://www.tiamat.world/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Tiamat.png"
      },
      {
        "name": "Dreamup",
        "desc": "知名站点Deviantart发布的AI绘画工具",
        "url": "https://www.dreamup.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Dreamup.png"
      },
      {
        "name": "Lexica",
        "desc": "AI图像生成+SD提示词",
        "url": "https://lexica.art/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Lexica.png"
      },
      {
        "name": "Scribble Diffusion",
        "desc": "有趣！将鼠绘草图变成精美照片",
        "url": "https://scribblediffusion.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-ScribbleDiffusion.png"
      },
      {
        "name": "Leonardo",
        "desc": "AI绘图社区！训练自己的游戏资产模型",
        "url": "https://leonardo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Leonardo.png"
      },
      {
        "name": "DreamStudio",
        "desc": "SD兄弟产品！AI 图像生成器",
        "url": "https://www.uisdc.com/dreamstudio",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-DreamStudio.png"
      },
      {
        "name": "liblib哩布哩布",
        "desc": "超多优质模型，国内领先的AI创作平台",
        "url": "https://www.liblib.art/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-lib.jpg"
      },
      {
        "name": "eSheep",
        "desc": "推荐！国内知名的开源AI模型社区",
        "url": "https://www.esheep.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-esheep.jpg"
      },
      {
        "name": "Fooocus",
        "desc": "操作简单！免费生成高质量的图像",
        "url": "https://www.uisdc.com/fooocus-2-0",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-Fooocus.jpg"
      },
      {
        "name": "Adobe Firefly",
        "desc": "Adobe旗下的创意生成模型，数字创意行业新宠",
        "url": "https://firefly.adobe.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-firefly.png"
      },
      {
        "name": "CanvaAi",
        "desc": "Canva的免费AI绘画工具",
        "url": "https://www.canva.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-canva.png"
      },
      {
        "name": "无界AI",
        "desc": "人人都是艺术家！一站式AI创作交流分享",
        "url": "https://www.wujieai.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-wujie.png"
      },
      {
        "name": "Bing Image Creator",
        "desc": "基于Dalle的AI绘画工具，Edge的侧边栏可直接使用",
        "url": "https://cn.bing.com/create",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-bing.png"
      },
      {
        "name": "illostration",
        "desc": "推荐！几秒内创建不同风格插图",
        "url": "https://www.illostration.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-illostration.png"
      },
      {
        "name": "Visualelectric",
        "desc": "更适合设计创作的AI绘画工具",
        "url": "https://visualelectric.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/12/nav-ai-Visualelectric.jpg"
      },
      {
        "name": "AISEO ART",
        "desc": "AISEO Art 的AI算法按照分类进行过细致的训练",
        "url": "https://art.aiseo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-AISEOART.png"
      },
      {
        "name": "Imagine with Meta",
        "desc": "Meta 推出的免费AI绘画工具",
        "url": "https://imagine.meta.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/12/nav-ai-Meta.jpg"
      },
      {
        "name": "TryEmoji",
        "desc": "将emoji表情变成3D元素",
        "url": "https://www.tryemoji.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/12/nav-ai-TryEmoji.jpg"
      },
      {
        "name": "Artbreeder",
        "desc": "在线AI图像合成创意工具",
        "url": "https://www.artbreeder.com/browse",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Artbreeder.png"
      }
    ]
  },
  {
    "id": "smart2",
    "title": "AI聊天",
    "description": "AI聊天相关工具与资源。",
    "items": [
      {
        "name": "DeepSeek",
        "desc": "代码文案数学题张口就来，复杂问题秒变人话！",
        "url": "https://www.deepseek.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/02/nav-ai-deepseek.jpg"
      },
      {
        "name": "ChatGPT",
        "desc": "地表最强AI聊天机器人",
        "url": "https://chat.openai.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-ChatGPT.png"
      },
      {
        "name": "Anthropic",
        "desc": "Anthropic发布的与ChatGPT竞争的聊天机器人",
        "url": "https://www.anthropic.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Anthropi.png"
      },
      {
        "name": "文心一言",
        "desc": "百度全新知识增强大语言模型！国产聊天机器人",
        "url": "https://yiyan.baidu.com/?utm_source=uisdc",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-wxyy.png"
      },
      {
        "name": "OpenCat",
        "desc": "在苹果手表上用ChatGPT",
        "url": "https://apps.apple.com/us/app/opencat/id6445999201",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-OpenCat.png"
      },
      {
        "name": "NewBing",
        "desc": "Bing版ChatGPT聊天机器人，微软新搜索引擎",
        "url": "https://www.bing.com/new",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-newbing.png"
      },
      {
        "name": "通义千问",
        "desc": "阿里巴巴的AI对话机器人",
        "url": "https://www.tongyi.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-tongyi.png"
      },
      {
        "name": "Kimi.ai",
        "desc": "适用学生生活多种场景，快速协助处理各种任务",
        "url": "https://kimi.moonshot.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/04/nav-ai-kimi.jpg"
      },
      {
        "name": "YOU",
        "desc": "人工智能搜索聊天机器人",
        "url": "https://you.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-YOU.png"
      },
      {
        "name": "Google Bard",
        "desc": "媲美ChatGPT，最新的谷歌AI对话模型",
        "url": "https://bard.google.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-bard.png"
      },
      {
        "name": "AgentGPT",
        "desc": "革命性的AI平台！具有UI界面的Auto-GPT",
        "url": "https://agentgpt.reworkd.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-agentgpt.png"
      },
      {
        "name": "ColossalChat",
        "desc": "免费开源的AI聊天机器人",
        "url": "https://chat.colossalai.org/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-colossalai.png"
      }
    ]
  },
  {
    "id": "smart4",
    "title": "AI提示词",
    "description": "AI提示词相关工具与资源。",
    "items": [
      {
        "name": "Midlibrary",
        "desc": "风格多样！实用超2000+MJ提示词资源",
        "url": "https://midlibrary.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-Midlibrary.jpg"
      },
      {
        "name": "Promptalot",
        "desc": "推荐！超好用的MJ提示词辅助插件",
        "url": "https://promptalot.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-promptalot.jpg"
      },
      {
        "name": "Prompt Hunt",
        "desc": "按主题分类的SD提示词",
        "url": "https://www.prompthunt.com/explore",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-AI-PromptHunt.png"
      },
      {
        "name": "PromptBase",
        "desc": "AI提示词交易网站",
        "url": "https://promptbase.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-PromptBase.png"
      },
      {
        "name": "MJ Prompt Tool",
        "desc": "MJ提示词创造助手",
        "url": "https://prompt.noonshot.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Noonshot.png"
      },
      {
        "name": "Learning Prompt",
        "desc": "ChatGPT提示词中文指南",
        "url": "https://learningprompt.wiki/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Learning.png"
      },
      {
        "name": "PromptHero",
        "desc": "推荐！最受欢迎的AI提示词网站",
        "url": "https://prompthero.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-PromptHero.png"
      },
      {
        "name": "PromptoMania",
        "desc": "MJ和SD提示词生成器",
        "url": "https://promptomania.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-PromptoMania.png"
      },
      {
        "name": "ClickPrompt",
        "desc": "一款专为 Prompt 编写者设计的工具",
        "url": "https://www.clickprompt.org/zh-CN/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-ClickPrompt.png"
      },
      {
        "name": "LIB.KALOS.ART",
        "desc": "艺术风格流派参考库",
        "url": "https://lib.kalos.art/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-LIB.png"
      },
      {
        "name": "Visual Prompt Builder",
        "desc": "涨姿势系列！设计/绘画风格参考",
        "url": "https://tools.saxifrage.xyz/prompt",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Visual.png"
      },
      {
        "name": "PublicPrompts",
        "desc": "AI绘画模型+风格参考",
        "url": "https://publicprompts.art/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-PublicPrompts.png"
      },
      {
        "name": "CLIP Interrogator",
        "desc": "反向学习！从图片反推AI关键词",
        "url": "https://replicate.com/pharmapsychotic/clip-interrogator",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-CLIP.png"
      },
      {
        "name": "Ordinary Prompts",
        "desc": "有趣ChatGPT提示词",
        "url": "https://www.ordinarypeopleprompts.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Ordinary.png"
      },
      {
        "name": "Catjourney",
        "desc": "超多实用的 MJ Style Tuner风格库",
        "url": "https://catjourney.life/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-catjourney.jpg"
      },
      {
        "name": "Flowgpt",
        "desc": "推荐！专注于分享聊天指令的社区网站",
        "url": "https://flowgpt.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/01/nav-ai-flowgpt.jpg"
      },
      {
        "name": "Openart",
        "desc": "实用！SD艺术创作提示词",
        "url": "https://openart.ai/home",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/01/nav-ai-openart.jpg"
      },
      {
        "name": "Content at scale",
        "desc": "收录最佳的ChatGPT prompt提示词",
        "url": "https://contentatscale.ai/ai-prompt-library/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/01/nav-ai-contentatscale.jpg"
      }
    ]
  },
  {
    "id": "smart9",
    "title": "AI图像处理",
    "description": "AI图像处理相关工具与资源。",
    "items": [
      {
        "name": "Booltool",
        "desc": "多合一AI图像处理网站，快速进行编辑修整",
        "url": "https://booltool.boolv.tech/home",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Booltool.png"
      },
      {
        "name": "Arc Lab",
        "desc": "腾讯出品的图片处理工具",
        "url": "https://arc.tencent.com/zh/ai-demos/faceRestoration",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-arc.png"
      },
      {
        "name": "PicWish",
        "desc": "推荐！专业的AI抠图修图，支持格式转化",
        "url": "https://picwish.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-PicWish.png"
      },
      {
        "name": "WaifuLabs",
        "desc": "一键生成动漫二次元头像",
        "url": "https://waifulabs.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Waifulabs.png"
      },
      {
        "name": "Change Style AI",
        "desc": "人工智能多风格肖像生成器！能够AI生成30种照片",
        "url": "https://changestyleai.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Change.png"
      },
      {
        "name": "Upscayl",
        "desc": "模糊图片秒变超清！开源免费 AI 图片无损放大工具",
        "url": "https://www.upscayl.org/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-upscayl.png"
      },
      {
        "name": "Palette",
        "desc": "用AI为黑白照片着色",
        "url": "https://palette.fm/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-Palette.png"
      },
      {
        "name": "Restorephoto",
        "desc": "效果惊艳的AI修复面容模糊的照片",
        "url": "https://www.restorephotos.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-restorephotos.png"
      },
      {
        "name": "美图AI开放平台",
        "desc": "美图推出的AI人脸图像处理平台",
        "url": "https://ai.meitu.com/index/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-meitu.png"
      },
      {
        "name": "MagicStudio",
        "desc": "图片处理必备效率神器！为你的图片提供神奇魔法",
        "url": "https://magicstudio.com/zh",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-magicstudio.png"
      },
      {
        "name": "CG Faces",
        "desc": "免费的 AI 人像生成图片素材网站",
        "url": "https://cgfaces.com/en",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-CGFaces.png"
      },
      {
        "name": "Designify",
        "desc": "免费在线抠图，识别内容，提供适合的合成设计",
        "url": "https://www.designify.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/12/nav-ai-designify.jpg"
      },
      {
        "name": "美图云修",
        "desc": "商业级AI影像处理工具",
        "url": "https://yunxiu.meitu.com/home/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-mtyx.png"
      },
      {
        "name": "Hama",
        "desc": "使用轻松！一键无痕抹除画面内容",
        "url": "https://www.hama.app/zh",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-hama.png"
      },
      {
        "name": "BgSub",
        "desc": "超实用！消除或替换图像背景的AI工具",
        "url": "https://bgsub.cn/webapp/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-bgsub.png"
      },
      {
        "name": "Vectorizer",
        "desc": "免费使用！一键将位图转为矢量图",
        "url": "https://vectorizer.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-vectorizer.png"
      },
      {
        "name": "清图",
        "desc": "在线修复！国产的 AI 图像处理工具",
        "url": "https://qingtu.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-qingneng.jpg"
      },
      {
        "name": "jpgHD",
        "desc": "一键修复，让您的老照片变新照片",
        "url": "https://jpghd.com/zh",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-jpghd.png"
      },
      {
        "name": "Pixian AI",
        "desc": "好评率超高！超好用的AI抠图工具",
        "url": "https://pixian.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-pixian.jpg"
      },
      {
        "name": "Tracejourney",
        "desc": "拯救MJ渣画质！图片一键转矢量",
        "url": "https://www.tracejourney.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-tracejourney.jpg"
      },
      {
        "name": "Clipdrop",
        "desc": "超多功能！全能的AI处理图像工具箱",
        "url": "https://clipdrop.co/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-clipdrop.jpg"
      },
      {
        "name": "Toolkit",
        "desc": "多功能的AI图片处理工具箱",
        "url": "https://boolpic.fun/background-remover",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-Toolkit.jpg"
      },
      {
        "name": "InsightFaceSwap",
        "desc": "比Midjourney更丝滑的AI换脸工具",
        "url": "https://insightface.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-insightface.jpg"
      },
      {
        "name": "Inpaint-web",
        "desc": "生成效果飞快！超智能的AI涂抹工具",
        "url": "https://inpaintweb.lxfater.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-Inpaint.jpg"
      }
    ]
  },
  {
    "id": "smart7",
    "title": "UI设计",
    "description": "UI设计相关工具与资源。",
    "items": [
      {
        "name": "Pixso AI生成设计稿",
        "desc": "一句话生成UI设计稿，加速灵感落地和产品上线",
        "url": "https://ai.pixso.cn/?utm_source=referrals&utm_content=uisdcainav&_channel_track_key=roPXWQlK",
        "icon": "https://image.uisdc.com/wp-content/uploads/2026/01/hao-nav-Pixso.webp"
      },
      {
        "name": "Creatie.ai",
        "desc": "一键即出UI作品，绝美界面惊艳全场",
        "url": "https://creatie.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-creatie.jpg"
      },
      {
        "name": "Galileo AI",
        "desc": "AI生成可编辑的UI界面",
        "url": "https://www.usegalileo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-GalileoAI.png"
      },
      {
        "name": "Uizard",
        "desc": "设计界 ChatGPT！利用AI生成多屏的UI界面",
        "url": "https://uizard.io/autodesigner/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Uizard.png"
      },
      {
        "name": "Superflow",
        "desc": "AI辅助高效网站协作设计",
        "url": "https://www.usesuperflow.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Superflow.png"
      },
      {
        "name": "Noya",
        "desc": "让线框图变成高保真设计",
        "url": "https://www.noya.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Noya.png"
      },
      {
        "name": "Digram",
        "desc": "让Figma更好用的AI神器",
        "url": "https://diagram.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Digram.png"
      },
      {
        "name": "Appicons AI",
        "desc": "AI生成精致的App图标",
        "url": "https://appicons.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Appicons.png"
      },
      {
        "name": "Dora AI",
        "desc": "一句话生成可交互&编辑的网站AI神器",
        "url": "https://www.dora.run/ai",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-doraai.jpg"
      },
      {
        "name": "Makereal Tldraw",
        "desc": "使用！通过草图生成可交互的UI界面和代码",
        "url": "https://github.com/tldraw/make-real",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-Makereal-Tldraw.jpg"
      },
      {
        "name": "UI Sketcher",
        "desc": "VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面",
        "url": "https://github.com/pAIrprogio/vscode-ui-sketcher",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-UISketcher.jpg"
      },
      {
        "name": "QoQo",
        "desc": "推荐！AI快速创建用户旅程地图",
        "url": "https://qoqo.ai/index.html",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/01/nav-ai-qoqo.jpg"
      }
    ]
  },
  {
    "id": "smart8",
    "title": "平面设计",
    "description": "平面设计相关工具与资源。",
    "items": [
      {
        "name": "PLUG AI",
        "desc": "AI辅助包装设计！并对包装方案生成分析评估",
        "url": "https://hp.package-ai.jp/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-package.png"
      },
      {
        "name": "Huemint",
        "desc": "推荐！用AI自定义和谐配色",
        "url": "https://huemint.com/brand-intersection/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Huemint.png"
      },
      {
        "name": "Looka",
        "desc": "AI辅助logo和品牌设计",
        "url": "https://looka.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Looka.png"
      },
      {
        "name": "标小智",
        "desc": "超过500万用户的AI智能logo设计神器",
        "url": "https://www.logosc.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-bxz.png"
      },
      {
        "name": "Daft Art",
        "desc": "AI专辑封面图片生成器",
        "url": "https://www.daftart.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-DaftArt.png"
      },
      {
        "name": "Palette",
        "desc": "生成整套UI调色板",
        "url": "https://palette.tone-row.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-ToneRow.png"
      },
      {
        "name": "字体家AI神笔",
        "desc": "造字神器！ 仅需8个汉字即可生成一套6K+中文字库",
        "url": "https://ai.zitijia.com/?referer=81657",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/hao-nav-zitijia.png"
      },
      {
        "name": "Vectorize",
        "desc": "超好用！快速将位图转换为矢量图",
        "url": "https://vectorizer.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-vectorizer.png"
      },
      {
        "name": "Microsoft Designer",
        "desc": "微软推出的AI平面设计工具，实现快速完成设计加工",
        "url": "https://designer.microsoft.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-microsoftdesign.png"
      },
      {
        "name": "BrandMark",
        "desc": "最先进的人工智能Logo设计工具",
        "url": "https://brandmark.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-brandmark.png"
      },
      {
        "name": "AIcolors",
        "desc": "推荐！根据文本生成调色板，提供配色案例参考",
        "url": "https://aicolors.co/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-aicolors.png"
      },
      {
        "name": "Getimg",
        "desc": "多功能AI图片编辑工具，让文字变成吸睛的视觉图像",
        "url": "https://getimg.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-getimg.png"
      },
      {
        "name": "ImgCreator",
        "desc": "超赞的多合一AI设计工具，超强的背景生成、海报生成能力",
        "url": "https://imgcreator.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-imgcreator.png"
      },
      {
        "name": "AIDesign",
        "desc": "10秒创建Logo！腾讯出品的AI Logo神器",
        "url": "https://ailogo.qq.com/guide/brandname",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-AIDesign.jpg"
      },
      {
        "name": "ImageCreator",
        "desc": "推荐！PS中免费使用的SD神级插件",
        "url": "https://imagecreator.alkaidvision.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-Imagecreator.jpg"
      },
      {
        "name": "Recraft",
        "desc": "推荐！便捷的AI生成矢量图像生成工具",
        "url": "https://app.recraft.ai/community",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-recraft.jpg"
      },
      {
        "name": "Alpaca",
        "desc": "个性化的AI工具包，可接入Ps的SD绘画插件",
        "url": "https://www.alpacaml.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-alpacaml.jpg"
      },
      {
        "name": "Flair AI",
        "desc": "你的私人AI设计师！一键生成精美产品照片",
        "url": "https://flair.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-flair.jpg"
      }
    ]
  },
  {
    "id": "smart6",
    "title": "AI智能写作",
    "description": "AI智能写作相关工具与资源。",
    "items": [
      {
        "name": "字语未来",
        "desc": "用AI创造更有价值的信息，定义新一代智能办公平台",
        "url": "https://getgetai.com/workstation?from=youshe",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-getgetai.png"
      },
      {
        "name": "Notion AI",
        "desc": "AI写作神器！比你想得更多！写得更快",
        "url": "https://www.notion.so/product/ai",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-notion.jpg"
      },
      {
        "name": "火山写作",
        "desc": "字节的AI英语写作工具，高效提升英文表达",
        "url": "https://www.writingo.net/home",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-writingo.png"
      },
      {
        "name": "Writesonic",
        "desc": "写作+搜索+绘画三位一体",
        "url": "https://writesonic.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-writesonic.png"
      },
      {
        "name": "Jasper AI",
        "desc": "适合企业的Ai营销写手",
        "url": "https://www.jasper.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-jasper-1.png"
      },
      {
        "name": "秘塔AI搜索",
        "desc": "实用的AI搜索引擎，无广告直达结果",
        "url": "https://metaso.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-mita.jpg"
      },
      {
        "name": "秘塔写作猫",
        "desc": "基于GPT的中文写作工具",
        "url": "https://www.xiezuocat.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-xiezuocat.png"
      },
      {
        "name": "毕业宝AI论文降重",
        "desc": "论文降重神器！学生党必用的AI改写降重和降AIGC工具",
        "url": "https://sourl.cn/SYitzC",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/04/nav-ai-biye.jpg"
      },
      {
        "name": "Copy AI",
        "desc": "AI社交营销文案写作助手",
        "url": "https://www.copy.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Copyai.png"
      },
      {
        "name": "editGPT",
        "desc": "让ChatGPT修改英语文章",
        "url": "https://www.editgpt.app/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-editgpt.png"
      },
      {
        "name": "据意查句",
        "desc": "清华出品！AI 神器让你的文案立马变高级",
        "url": "https://wantquotes.net/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2022/11/nav-wantquotes.png"
      },
      {
        "name": "MagicPen",
        "desc": "在线AI英语写作助手",
        "url": "https://magickpen.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-magickpen.png"
      },
      {
        "name": "Novelist AI",
        "desc": "AI辅助你创建自己的小说",
        "url": "https://novelistai.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Novelistai.png"
      },
      {
        "name": "jenni",
        "desc": "面向作家的AI协作助手",
        "url": "https://jenni.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-jenni.png"
      },
      {
        "name": "Effidit写作助手",
        "desc": "腾讯AI Lab开发的AI写作助手，轻松高效完成写作",
        "url": "https://effidit.qq.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-effidit.png"
      },
      {
        "name": "Bearly",
        "desc": "英文阅读写作效率提高10倍",
        "url": "https://bearly.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-bearly.png"
      },
      {
        "name": "爱改写",
        "desc": "科研工作者的AI文字生产力工具",
        "url": "https://www.aigaixie.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-aigaixie.png"
      },
      {
        "name": "QuillBot",
        "desc": "AI助力英文写作优化，与你一起创建最佳释义",
        "url": "https://quillbot.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-quillbot.png"
      },
      {
        "name": "新华妙笔",
        "desc": "新华社媒体出品！AI公文写作学习平台",
        "url": "https://miaobi.xinhuaskl.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-xhs-mt.jpg"
      },
      {
        "name": "悉语",
        "desc": "一键生成营销文案！电商场景悉数覆盖",
        "url": "https://chuangyi.taobao.com/pages/aiCopy",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-chuangyi.png"
      },
      {
        "name": "Paperpal",
        "desc": "学术写作新世代，面向科研人员的AI写作工具",
        "url": "https://www.editage.cn/paperpal",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-paperpal.jpg"
      },
      {
        "name": "NovelAI",
        "desc": "书写诱人故事，高质量文学创作AI工具",
        "url": "https://novelai.net/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-NovelAI.jpg"
      },
      {
        "name": "爱创作",
        "desc": "一键生成文章、营销文本、配图与短视频等多类型内容",
        "url": "https://ai.zaker.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-aichuangzuo.jpg"
      },
      {
        "name": "Grammarly.",
        "desc": "写作建议！提供个性化的 AI 写作辅助",
        "url": "https://www.grammarly.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/03/nav-ai-grammarly.jpg"
      }
    ]
  },
  {
    "id": "smart10",
    "title": "AI音视频",
    "description": "AI音视频相关工具与资源。",
    "items": [
      {
        "name": "Sora",
        "desc": "碾压级更新！颠覆性的文生视频大模型",
        "url": "https://openai.com/sora",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-ChatGPT.png"
      },
      {
        "name": "Akool",
        "desc": "推荐！重新定义视频制作流程，用AI轻松生成个性化内容",
        "url": "https://akool.com/zh-cn",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/07/hao-nav-Akool.webp"
      },
      {
        "name": "Runway",
        "desc": "最强的AI视频内容生成工具",
        "url": "https://www.uisdc.com/runway",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Runway.png"
      },
      {
        "name": "网易天音",
        "desc": "网易出品！一站式AI编曲渲染导出，零基础写歌",
        "url": "https://tianyin.163.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-tianyin.png"
      },
      {
        "name": "Wonder Studio",
        "desc": "真人表演自动转换为CG",
        "url": "https://wonderdynamics.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Wonder.png"
      },
      {
        "name": "Heygen",
        "desc": "超简单!3分钟制作产品宣传视频",
        "url": "https://www.heygen.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-heygen.jpg"
      },
      {
        "name": "TTSMAKER",
        "desc": "推荐！免费的在线文本转语音神器",
        "url": "https://ttsmaker.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-ttsmake.jpg"
      },
      {
        "name": "BibiGPT",
        "desc": "一键总结B站音视频内容",
        "url": "https://b.jimmylv.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-BibiGPT.png"
      },
      {
        "name": "BeatBot",
        "desc": "Splash的AI音乐生成器",
        "url": "https://beatbot.fm/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-beatbot.png"
      },
      {
        "name": "Stable Audio",
        "desc": "Stability Al最新推出的音乐生成工具",
        "url": "https://www.stableaudio.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/12/nav-ai-stableaudio.jpg"
      },
      {
        "name": "Speaking AI",
        "desc": "一键克隆！效果真实的文本转语音神器",
        "url": "https://speaking.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-speaking.jpg"
      },
      {
        "name": "Genmo",
        "desc": "更具创造性！使用文本指令编辑图像和视频",
        "url": "https://www.genmo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-genmo.png"
      },
      {
        "name": "Mubert",
        "desc": "1分钟内生成AI背景音乐",
        "url": "https://mubert.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-mubert.png"
      },
      {
        "name": "剪映专业版",
        "desc": "强大的国产剪辑工具！支持AI智能生成字幕和配音",
        "url": "https://www.capcut.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2020/07/sdcnav-ulikecam.png"
      },
      {
        "name": "Play",
        "desc": "根据文本生成多种逼真的语音",
        "url": "https://play.ht/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-play.png"
      },
      {
        "name": "SplashMusic",
        "desc": "超酷！输入文本提示创建歌曲神器",
        "url": "https://pro.splashmusic.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-splashmusic.jpg"
      },
      {
        "name": "Soundraw",
        "desc": "用AI制作免费的音乐",
        "url": "https://soundraw.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Soundraw.png"
      },
      {
        "name": "Fliki",
        "desc": "高效帮用户创建视频，具有文本转语音功能",
        "url": "https://fliki.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-fliki.png"
      },
      {
        "name": "uberduck",
        "desc": "开源的AI语音生成平台",
        "url": "https://uberduck.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-uberduck.png"
      },
      {
        "name": "腾讯智影",
        "desc": "腾讯出品！功能超多的一站式云端智能视频创作工具",
        "url": "https://zenvideo.qq.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-zenvideo.png"
      },
      {
        "name": "Unscreen",
        "desc": "推荐！智能AI去除视频背景在线神器",
        "url": "https://www.unscreen.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-unscreen.png"
      },
      {
        "name": "Audo Studio",
        "desc": "听起来很棒！AI一键清除音频背景杂音",
        "url": "https://audo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-audo.png"
      },
      {
        "name": "Clipchamp",
        "desc": "将文本转为视频旁白！几分钟即可创建导出视频",
        "url": "https://clipchamp.com/zh-hans/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-clipchamp.png"
      },
      {
        "name": "Rask",
        "desc": "领先的AI视频本地化和配音工具",
        "url": "https://zh.rask.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/11/nav-ai-rask.jpg"
      }
    ]
  },
  {
    "id": "smart5",
    "title": "3D设计",
    "description": "3D设计相关工具与资源。",
    "items": [
      {
        "name": "Text to Skybox",
        "desc": "推荐！AI生成360°无缝环境贴图",
        "url": "https://skybox.blockadelabs.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Skybox.png"
      },
      {
        "name": "Poly",
        "desc": "根据文本生成3D材质",
        "url": "https://withpoly.com/browse/textures",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-poly.png"
      },
      {
        "name": "Ponzu",
        "desc": "AI生成3D无缝贴图纹理",
        "url": "https://www.ponzu.gg/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Ponzu.png"
      },
      {
        "name": "Sloyd",
        "desc": "快速生成3D游戏资产",
        "url": "https://www.sloyd.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Sloyd.png"
      },
      {
        "name": "Plasmo",
        "desc": "将草图转为3D模型",
        "url": "https://www.plasmo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Plasmo.png"
      },
      {
        "name": "Cascadeur",
        "desc": "AI辅助制作3D关键帧动画",
        "url": "https://cascadeur.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Cascadeur.png"
      },
      {
        "name": "Luma Labs",
        "desc": "推荐！将视频转为游戏资产",
        "url": "https://lumalabs.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Luma.png"
      },
      {
        "name": "KAEDIM",
        "desc": "帮你迅速生成3D模型及纹理",
        "url": "https://www.kaedim3d.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-KAEDIM.png"
      },
      {
        "name": "Plask",
        "desc": "AI捕捉运动！帮你制作流畅的3D动画",
        "url": "https://plask.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Plask.png"
      },
      {
        "name": "DreamFusion",
        "desc": "谷歌推出的文本转3D模型",
        "url": "https://dreamfusion3d.github.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-DreamFusion.png"
      },
      {
        "name": "GET3D",
        "desc": "Nvidia的2D转3D模型",
        "url": "https://nv-tlabs.github.io/GET3D/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-GET3D.png"
      },
      {
        "name": "3DFY AI",
        "desc": "AI创建大规模高质量的3D资产",
        "url": "https://3dfy.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-3DFY.png"
      }
    ]
  },
  {
    "id": "study",
    "title": "AI学习",
    "description": "AI学习相关工具与资源。",
    "items": [
      {
        "name": "AIGC创意视觉提升班",
        "desc": "全方位提升！5周打破壁垒高薪就业",
        "url": "https://www.uisdc.com/ai-course",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-jiye.png"
      },
      {
        "name": "Udacity AI学院",
        "desc": "推荐！Udacity推出的School of AI，从入门到高级",
        "url": "https://www.udacity.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-udacity.png"
      },
      {
        "name": "kaggle",
        "desc": "热门！机器学习和数据科学社区平台",
        "url": "https://www.kaggle.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-kaggle.png"
      },
      {
        "name": "ML For Beginners",
        "desc": "Microsoft提供关于机器学习的课程",
        "url": "https://microsoft.github.io/ML-For-Beginners/#/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-mlforbeginners.png"
      },
      {
        "name": "Deeplearning",
        "desc": "深度学习和人工智能学习平台",
        "url": "https://www.deeplearning.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-deeplearning.png"
      },
      {
        "name": "Coursera",
        "desc": "知名MOOC平台，众多人工智能和机器学习课程",
        "url": "https://www.coursera.org/collections/best-machine-learning-ai",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Coursera.png"
      },
      {
        "name": "Fast AI",
        "desc": "免费开源的深度学习和AI学习网站",
        "url": "https://www.fast.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-fastai.png"
      },
      {
        "name": "Google AI",
        "desc": "推荐！Google AI学习平台",
        "url": "https://ai.google/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-google.png"
      },
      {
        "name": "神经网络入门",
        "desc": "Brilliant推出的深入研究神经网络课程",
        "url": "https://brilliant.org/courses/intro-neural-networks/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-brilliant.png"
      },
      {
        "name": "阿里云AI学习路线",
        "desc": "阿里云推出的人工智能学习路线",
        "url": "https://developer.aliyun.com/learning/roadmap/ai",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-aliyun.png"
      },
      {
        "name": "Elements of AI",
        "desc": "免费！大规模的开放式在线课程",
        "url": "https://www.elementsofai.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-elementsofai.png"
      },
      {
        "name": "AI大课堂",
        "desc": "推荐！科大讯飞推出的AI大学堂",
        "url": "https://www.aidaxue.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-aidaxue.png"
      }
    ]
  },
  {
    "id": "gadget",
    "title": "AI办公",
    "description": "AI办公相关工具与资源。",
    "items": [
      {
        "name": "Microsoft 365 Copilot",
        "desc": "暂未开放！内置GPT-4的微软Office",
        "url": "https://blogs.microsoft.com/blog/2023/03/16/introducing-microsoft-365-copilot-your-copilot-for-work/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Copilot.png"
      },
      {
        "name": "Tome",
        "desc": "先进的AI智能PPT制作工具",
        "url": "https://tome.app/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Tome.png"
      },
      {
        "name": "Glimmer Ai",
        "desc": "热门！基于GPT-3和DALL·E2的AI PPT知名工具",
        "url": "https://glimmerai.tech/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-glimmerai.png"
      },
      {
        "name": "PandaGPT",
        "desc": "上传文档！即可用对话的方式让 AI 总结文档重点",
        "url": "https://www.pandagpt.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-pandagpt.png"
      },
      {
        "name": "WordAi",
        "desc": "10倍速AI内容输出！创建读者喜爱的优质内容",
        "url": "https://wordai.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-wordai.png"
      },
      {
        "name": "Timely",
        "desc": "一款AI时间管理工具！可以帮助你更有效地管理时间",
        "url": "https://timelyapp.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-timelyapp.png"
      },
      {
        "name": "酷表ChatExcel",
        "desc": "北大团队研发的通过聊天来操作表格的AI工具",
        "url": "https://chatexcel.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-kubiao.png"
      },
      {
        "name": "Prezo",
        "desc": "AI助力PPT演示文稿，让创作更简单",
        "url": "https://prezo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/12/nav-logo-Prezo.jpg"
      },
      {
        "name": "Taskade",
        "desc": "高颜值AI大纲和思维导图生成，统一您的工作流程",
        "url": "https://www.taskade.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Taskade.png"
      },
      {
        "name": "Rossum.ai",
        "desc": "深受企业信赖，强大易用的AI智能文档处理平台",
        "url": "https://rossum.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-rossum.png"
      },
      {
        "name": "Otter AI",
        "desc": "写笔记和总结会议的速度提高 30 倍",
        "url": "https://otter.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-otter.png"
      },
      {
        "name": "Zapier AI",
        "desc": "赞！Zapier推出的AI自动化集成功能",
        "url": "https://zapier.com/ai",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-zapier.png"
      }
    ]
  },
  {
    "id": "translate",
    "title": "AI翻译",
    "description": "AI翻译相关工具与资源。",
    "items": [
      {
        "name": "Deepl翻译器",
        "desc": "集合深度学习、神经网络算等先进技术的新一代AI翻译神器",
        "url": "https://www.deepl.com/translator",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-deeplfanyi.png"
      },
      {
        "name": "必应翻译",
        "desc": "内置微软自研的翻译词库，对流行词以及生僻词精准进行翻译",
        "url": "https://cn.bing.com/translator/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-bingfanyi.png"
      },
      {
        "name": "TranSmart",
        "desc": "腾讯AI Lab研发的AI辅助翻译产品，满足用户快速翻译的需求",
        "url": "https://transmart.qq.com/zh-CN/index",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-transmartfanyi.png"
      },
      {
        "name": "有道翻译",
        "desc": "网易旗下深受用户喜欢的口碑型学习工具产品",
        "url": "https://fanyi.youdao.com/index.html#/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-ydfanyi.png"
      },
      {
        "name": "阿里翻译",
        "desc": "阿里巴巴达摩院推出的多领域多语种的在线机器翻译",
        "url": "https://translate.alibaba.com",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-alifanyi.png"
      },
      {
        "name": "火山翻译",
        "desc": "推荐！字节旗下支持超过100种语种的免费在线翻译",
        "url": "https://translate.volcengine.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-hsfanyi.png"
      },
      {
        "name": "Google翻译",
        "desc": "Google免费提供上100种语言智能即时翻译工具",
        "url": "https://translate.google.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-googlefanyi.png"
      },
      {
        "name": "讯飞智能翻译",
        "desc": "科大讯飞推出的人工智能翻译平台",
        "url": "https://fanyi.xfyun.cn/console/trans/text",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-xunfeifanyi.png"
      },
      {
        "name": "百度翻译",
        "desc": "提供即时免费200+语言翻译服务",
        "url": "https://fanyi.baidu.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-baidufanyi.png"
      },
      {
        "name": "彩云小译",
        "desc": "推荐！兼具“你边说，我边译”的字字幕翻译功能",
        "url": "https://fanyi.caiyunapp.com/#/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-cyfanyi.png"
      },
      {
        "name": "搜狗翻译",
        "desc": "支持中、英、法、日等50多种语言之间的互译功能",
        "url": "https://fanyi.sogou.com/text",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-sougoufanyi.png"
      },
      {
        "name": "金山快译",
        "desc": "金山旗下多场景的翻译服务",
        "url": "https://kuaiyi.wps.cn/txt-translate",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-jinshanfanyi.png"
      }
    ]
  },
  {
    "id": "program",
    "title": "AI编程开发",
    "description": "AI编程开发相关工具与资源。",
    "items": [
      {
        "name": "GitHub Copilot",
        "desc": "热门！GitHub AI编程工具",
        "url": "https://github.com/features/copilot",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-GitHubCopilot.png"
      },
      {
        "name": "Cursor",
        "desc": "基于GPT的代码生成工具",
        "url": "https://www.cursor.so/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Cursor.png"
      },
      {
        "name": "Codeium",
        "desc": "超过40种语言的免费代码加速工具",
        "url": "https://codeium.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-codeium.png"
      },
      {
        "name": "CodiumAI",
        "desc": "超实用的技术编程句子补全工具",
        "url": "https://www.codium.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-CodiumAI.png"
      },
      {
        "name": "JamGPT",
        "desc": "AI Debug调试助手，快速找到解决方案",
        "url": "https://jam.dev/jamgpt",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-JamGPT.png"
      },
      {
        "name": "Hocoos",
        "desc": "推荐！无代码AI智能在线快速创建网站",
        "url": "https://hocoos.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Hocoos.png"
      },
      {
        "name": "AskCodi",
        "desc": "AskCodi上可以帮助你完成任何编码工作",
        "url": "https://www.askcodi.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-askcodi.png"
      },
      {
        "name": "Fronty",
        "desc": "支持图像到 HTML CSS 转换器",
        "url": "https://fronty.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Fronty.png"
      },
      {
        "name": "Mutable AI",
        "desc": "一款更全面的 GitHub Copilot 替代品",
        "url": "https://mutable.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Mutable.png"
      },
      {
        "name": "Warp",
        "desc": "内置AI命令搜索！21世纪的终端工具",
        "url": "https://www.warp.dev/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Warp.png"
      },
      {
        "name": "Fig",
        "desc": "内置AI终端命令自动补全，新一代命令行工具",
        "url": "https://fig.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-Fig.png"
      },
      {
        "name": "MarsX",
        "desc": "使用无代码和零编码技能开始构建微应用程序",
        "url": "https://www.marsx.dev/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-MarsX.png"
      },
      {
        "name": "Theculturedao",
        "desc": "技术优势！快速打造 AI的迪士尼漫画、游戏、电影和 Gepetto",
        "url": "https://www.theculturedao.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-theculturedao.jpg"
      },
      {
        "name": "Ludo AI",
        "desc": "推荐！快速帮助游戏开发者进行创造过程",
        "url": "https://ludo.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-ludo.jpg"
      },
      {
        "name": "AI Dungeon",
        "desc": "拥有更流畅的体验，更快的模型，堪比免费版本的Steam平台",
        "url": "https://play.aidungeon.io/main/home",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-aidungeon.jpg"
      },
      {
        "name": "Charisma",
        "desc": "轻松连接到 Unreal Engine、Unity、移动设备和 metaverses",
        "url": "https://charisma.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-charisma.jpg"
      },
      {
        "name": "Hidden Door",
        "desc": "热门！小说作品生成在线社交角色扮演游戏",
        "url": "https://www.hiddendoor.co/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-hiddendoor.jpg"
      },
      {
        "name": "Latitude",
        "desc": "Latitude将成为人们访问人工智能驱动体验的唯一场所",
        "url": "https://latitude.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/06/nav-ai-latitude.jpg"
      }
    ]
  },
  {
    "id": "institution",
    "title": "AI研究机构",
    "description": "AI研究机构相关工具与资源。",
    "items": [
      {
        "name": "中科院",
        "desc": "国家最高学术机构",
        "url": "http://www.ia.cas.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-zky.png"
      },
      {
        "name": "北大人工智能研究院",
        "desc": "中国最早开展人工智能研究的大学，国家重点实验室之一",
        "url": "http://www.ai.pku.edu.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-beida.png"
      },
      {
        "name": "清华人工智能研究院",
        "desc": "清华大学成立的研究机构",
        "url": "https://ml.cs.tsinghua.edu.cn/thuai/#/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-qinghua.png"
      },
      {
        "name": "复旦人工智能研究院",
        "desc": "人工智能创新与产业研究院",
        "url": "https://ai3.fudan.edu.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-fudan.png"
      },
      {
        "name": "交大人工智能研究院",
        "desc": "教育部重点实验室建设项目",
        "url": "https://ai.sjtu.edu.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-jiaoda.png"
      },
      {
        "name": "北京通用人工智能研究院",
        "desc": "科技部支持的非营利性新型研发机构",
        "url": "https://www.mybigai.ac.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-tong.png"
      },
      {
        "name": "腾讯AI实验室",
        "desc": "共同打造产学研用一体的AI生态",
        "url": "https://ai.tencent.com/ailab/zh/index",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-tengxun.png"
      },
      {
        "name": "达摩院",
        "desc": "阿里巴巴旗下研究院",
        "url": "https://damo.alibaba.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-damo.png"
      },
      {
        "name": "北京智源人工智能研究院",
        "desc": "系统型创新驱动的研究院",
        "url": "https://www.baai.ac.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-baai.png"
      },
      {
        "name": "360智脑",
        "desc": "研发业界领先技术",
        "url": "https://ai.360.cn/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-360.png"
      },
      {
        "name": "网易伏羲",
        "desc": "网易机器人aPaaS和PaaS平台",
        "url": "https://fuxi.163.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-fuxi.png"
      },
      {
        "name": "HiAI",
        "desc": "华为人工智能技术开放平台",
        "url": "https://developer.huawei.com/consumer/cn/hiai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/05/nav-ai-huawei.png"
      }
    ]
  },
  {
    "id": "smart12",
    "title": "AIGC达人",
    "description": "AIGC达人相关工具与资源。",
    "items": [
      {
        "name": "Simon的白日梦",
        "desc": "AI/建筑/艺术跨领域研究者，互联网科技博主",
        "url": "https://weibo.com/u/1948301550",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Simon.png"
      },
      {
        "name": "Simon_阿文",
        "desc": "微博知名AI研究大V，专注AI神器推荐",
        "url": "https://weibo.com/u/1757693565",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-awen.png"
      },
      {
        "name": "言川Artie",
        "desc": "AI设计神器推荐官！优设十大AI作者",
        "url": "https://www.uisdc.com/u/702947/publish/all",
        "icon": "https://image.uisdc.com/wp-content/uploads/2025/07/hao-nav-Artie.webp"
      },
      {
        "name": "木遥",
        "desc": "微博上勤于分享AIGC知识的大V",
        "url": "https://weibo.com/u/1644684112",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-muyao.png"
      },
      {
        "name": "宝玉xp",
        "desc": "AIGC达人，前微软Asp.Net最有价值专家",
        "url": "https://weibo.com/u/1727858283",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-xp.png"
      },
      {
        "name": "海辛Hyacinth",
        "desc": "AIGC 爱好者，实验电影导演",
        "url": "https://weibo.com/u/1309158107",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Hyacinth.png"
      },
      {
        "name": "互联网的那点事",
        "desc": "微博知名大V！AIGC观察家",
        "url": "https://weibo.com/u/1627825392",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-hlwnxs.jpg"
      },
      {
        "name": "Barret李靖",
        "desc": "来自阿里巴巴的AIGC探索者",
        "url": "https://weibo.com/u/1812166904",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-lj.jpg"
      },
      {
        "name": "量子位",
        "desc": "关注人工智能&前沿科技",
        "url": "https://weibo.com/u/6105753431",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-lzw.jpg"
      },
      {
        "name": "刘群",
        "desc": "中国科学院计算技术研究所研究员，机器翻译领域专家",
        "url": "https://weibo.com/u/1917491813",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-lqmt.jpg"
      },
      {
        "name": "陈怡然-杜克大学",
        "desc": "杜克大学电子与计算机工程系教授，计算进化智能中心主任",
        "url": "https://weibo.com/2199733231",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-dkcyr.jpg"
      },
      {
        "name": "拉面daybreak",
        "desc": "AIGC探索者，插画师、玩具设计师",
        "url": "https://weibo.com/u/1646432771",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/07/nav-ai-daybreak.jpg"
      }
    ]
  },
  {
    "id": "aitools",
    "title": "AI工具合集",
    "description": "AI工具合集相关工具与资源。",
    "items": [
      {
        "name": "Powerfulai",
        "desc": "每天更新，全球最大的人工智能工具目录",
        "url": "https://www.powerfulai.tools/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/05/nav-ai-powerfulai.jpg"
      },
      {
        "name": "Stackradar.co",
        "desc": "互联网上最好的技术工具的精选",
        "url": "https://www.stackradar.co/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/05/nav-ai-stackradar.jpg"
      },
      {
        "name": "Toolfolio",
        "desc": "超实用！国外热门工具集合站",
        "url": "https://toolfolio.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/05/hao-nav-toolfolio.jpg"
      },
      {
        "name": "Toolscout",
        "desc": "每天更新，最快最新的人工智能工具",
        "url": "https://toolscout.ai/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/05/nav-ai-toolscout.jpg"
      },
      {
        "name": "Saasaitools",
        "desc": "推荐！随时了解每日 AI 新闻和工具",
        "url": "https://saasaitools.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-saasaitools.png"
      },
      {
        "name": "Topai",
        "desc": "发现最好的新型 AI 工具",
        "url": "https://topai.tools/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2024/05/nav-ai-topai.jpg"
      }
    ]
  },
  {
    "id": "smart11",
    "title": "探索更多",
    "description": "探索更多相关工具与资源。",
    "items": [
      {
        "name": "OpenGPT",
        "desc": "海量的 ChatGPT 应用！能在几秒钟创建自己的小工具",
        "url": "https://open-gpt.app/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-OpenGPT.png"
      },
      {
        "name": "Synthesia",
        "desc": "鹅妹嘤！创建你自己的AI头像和声音",
        "url": "https://www.synthesia.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Synthesia.png"
      },
      {
        "name": "Github Copilot",
        "desc": "Github的AI代码生成工具",
        "url": "https://github.com/features/copilot",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-github.png"
      },
      {
        "name": "Tabnine",
        "desc": "AI代码编写助手",
        "url": "https://www.tabnine.com/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-tabnine.png"
      },
      {
        "name": "AI帮个忙",
        "desc": "20个实用多功能AI小帮手",
        "url": "https://aibang.run/?refId=uisdc",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-help.png"
      },
      {
        "name": "Media",
        "desc": "AI智能优化您的媒体文件！便携式多功能在线AI工具",
        "url": "https://www.media.io/",
        "icon": "https://image.uisdc.com/wp-content/uploads/2023/03/nav-ai-Media.png"
      }
    ]
  }
];
export default sections;
