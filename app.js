const axes = {
  risk: {
    left: "稳产派",
    right: "野生派",
    low: "你更喜欢数量、时间、补偿规则提前说清。",
    high: "你能把产量波动看成自然生长的一部分。",
  },
  engage: {
    left: "放养派",
    right: "巡田派",
    low: "你希望农场主专业托管，自己少操心。",
    high: "你喜欢看成长记录、参与采摘或农事体验。",
  },
  proof: {
    left: "情怀派",
    right: "证据派",
    low: "你愿意基于关系、故事和农户口碑建立信任。",
    high: "你需要照片、视频、批次、检测或售后规则来确认。",
  },
  value: {
    left: "实惠派",
    right: "共益派",
    low: "你会认真比较价格、斤数、配送和性价比。",
    high: "你看重助农、生态、亲子教育和乡村连接。",
  },
};

const questions = [
  {
    kicker: "第 1 亩田",
    text: "如果你认养一棵果树，最让你心动的是哪种交付？",
    options: [
      {
        title: "提前写清楚：保底多少斤，到点发货",
        desc: "自然归自然，承诺归承诺，我要的是稳。",
        score: { risk: -2, proof: 1 },
      },
      {
        title: "按真实收成来，多了惊喜，少了也能理解",
        desc: "我认养的是一段生长关系，不是冷冰冰的库存。",
        score: { risk: 2, value: 1 },
      },
      {
        title: "给我区间和补偿规则，我愿意共担一点",
        desc: "可以波动，但边界要清楚。",
        score: { risk: 1, proof: 2 },
      },
      {
        title: "最好直接做成果蔬卡，按月稳定配送",
        desc: "我想吃得放心，也想省心。",
        score: { risk: -1, engage: -2, value: -1 },
      },
    ],
  },
  {
    kicker: "第 2 亩田",
    text: "认养之后，你最想收到哪种更新？",
    options: [
      {
        title: "每周照片视频，最好有时间戳",
        desc: "我不是不信，我只是想看清楚。",
        score: { proof: 2, engage: 1 },
      },
      {
        title: "关键节点告诉我就行，开花、套袋、采收",
        desc: "别刷屏，重要时刻别落下我。",
        score: { proof: 1, engage: -1 },
      },
      {
        title: "直播、采摘日、农事活动都安排上",
        desc: "我想把认养过成一种周末生活。",
        score: { engage: 2, value: 1 },
      },
      {
        title: "少打扰，到货好吃就可以",
        desc: "我的农民人格主打托管。",
        score: { engage: -2, risk: -1 },
      },
    ],
  },
  {
    kicker: "直觉选图",
    type: "visual",
    text: "不看文字，凭第一眼：你最想走进哪一张认养场景？",
    options: [
      {
        title: "贴着编号牌的果树",
        desc: "一棵树，一个名分，像给自己认了个会结果的亲戚。",
        visual: "fruit-tree",
        score: { engage: 1, proof: 1, risk: 1 },
      },
      {
        title: "码得整整齐齐的果蔬箱",
        desc: "整齐、准时、可预期，看着就让人血压变平。",
        visual: "produce-box",
        score: { risk: -2, engage: -1, value: -1 },
      },
      {
        title: "一家人拎篮子去采摘",
        desc: "我不是来买菜的，我是来制造朋友圈素材的。",
        visual: "picnic",
        score: { engage: 2, value: 2 },
      },
      {
        title: "带溯源码和检测章的包装",
        desc: "浪漫可以有，但请先把证据链递给我。",
        visual: "trace",
        score: { proof: 2, risk: -1 },
      },
    ],
  },
  {
    kicker: "听感选择",
    type: "sound",
    text: "听 4 段声音，别想太多：哪一段更像你愿意停留的农场？",
    options: [
      {
        title: "阳光与棕榈树",
        desc: "点击试听约 20 秒，听完再凭第一感觉选择。",
        visual: "sunny",
        score: { engage: 2, value: 1 },
      },
      {
        title: "二人の時間",
        desc: "点击试听约 20 秒，听完再凭第一感觉选择。",
        visual: "comfort",
        score: { engage: -1, risk: 1, value: 1 },
      },
      {
        title: "時の風",
        desc: "点击试听约 20 秒，听完再凭第一感觉选择。",
        visual: "nature",
        score: { engage: 1, value: 2 },
      },
      {
        title: "Polaris",
        desc: "点击试听约 20 秒，听完再凭第一感觉选择。",
        visual: "active",
        score: { engage: 2, risk: 1 },
      },
    ],
  },
  {
    kicker: "第 3 亩田",
    text: "看到认养价格比普通购买贵一点，你会怎么想？",
    options: [
      {
        title: "贵可以，但要说明贵在哪里",
        desc: "检测、溯源、采摘、售后，每一项都要讲得明白。",
        score: { proof: 2, value: -1 },
      },
      {
        title: "如果能帮到农户，我愿意多付一点",
        desc: "钱花出去，也希望种到具体的人身上。",
        score: { value: 2 },
      },
      {
        title: "我会换算斤价、配送和损耗",
        desc: "情怀归情怀，账本也要清楚。",
        score: { value: -2, risk: -1 },
      },
      {
        title: "体验有趣就行，我买的是期待感",
        desc: "像养成系游戏，过程本身就值一点钱。",
        score: { engage: 1, risk: 2 },
      },
    ],
  },
  {
    kicker: "第 4 亩田",
    text: "页面说“品质很好”，你最需要哪种证据才会相信？",
    options: [
      {
        title: "明确等级标准和坏果赔付规则",
        desc: "好不好吃可以主观，坏不坏果不能玄学。",
        score: { risk: -2, proof: 2 },
      },
      {
        title: "检测报告、批次编号、溯源记录",
        desc: "请把“放心吃”翻译成可核实材料。",
        score: { proof: 2, risk: -1 },
      },
      {
        title: "真实用户评价和复购反馈",
        desc: "官方说一百句，不如老买家一句“确实香”。",
        score: { proof: 1, value: -1 },
      },
      {
        title: "从生长到采收的连续记录",
        desc: "我想看它怎么长成现在这个样子。",
        score: { engage: 2, proof: 1 },
      },
    ],
  },
  {
    kicker: "第 5 亩田",
    text: "你最像哪种“云上农活”玩家？",
    options: [
      {
        title: "每天看一眼，叶子黄了我都想问问",
        desc: "我的关注像浇水，不能断。",
        score: { engage: 2, proof: 1 },
      },
      {
        title: "给我一份月报，别让我操太多心",
        desc: "我喜欢有秩序的轻参与。",
        score: { engage: -1, proof: 1 },
      },
      {
        title: "我想带家人去地里看看",
        desc: "认养最好能变成亲子和自然教育。",
        score: { engage: 2, value: 2 },
      },
      {
        title: "我只负责吃，专业的事交给专业的人",
        desc: "农场主打理，我负责认真夸。",
        score: { engage: -2, value: -1 },
      },
    ],
  },
  {
    kicker: "再选一图",
    type: "visual",
    text: "如果认养页面只能保留一张图，你觉得哪张最能让你下单？",
    options: [
      {
        title: "一张清清楚楚的产量说明表",
        desc: "好看不重要，我要知道最后怎么交付。",
        visual: "ledger",
        score: { risk: -2, proof: 2, value: -1 },
      },
      {
        title: "农户在地里笑着介绍作物",
        desc: "人对了，菜都显得更有灵魂。",
        visual: "farmer",
        score: { value: 2, proof: -1 },
      },
      {
        title: "作物从发芽到成熟的九宫格",
        desc: "养成系玩家的电子榨菜，越看越上头。",
        visual: "growth",
        score: { engage: 2, proof: 1 },
      },
      {
        title: "坏果补偿和售后流程图",
        desc: "这不是冷冰冰，这是我的购物安全毯。",
        visual: "shield",
        score: { proof: 2, risk: -2 },
      },
    ],
  },
  {
    kicker: "第 6 亩田",
    text: "如果天气影响了这一季收成，你最在意平台怎么处理品质问题？",
    options: [
      {
        title: "只发符合品质标准的，不够就补同等好货",
        desc: "可以少点戏剧性，但不能少点基本体面。",
        score: { risk: -2, proof: 1, value: -1 },
      },
      {
        title: "公开分级：哪些优果、哪些次果、怎么补偿",
        desc: "我能接受自然波动，但别把波动装进盲盒里。",
        score: { proof: 2, risk: 1 },
      },
      {
        title: "真实说明口感和外观变化，我愿意一起承担",
        desc: "只要不是以次充好，真实农业我可以理解。",
        score: { risk: 2, proof: 1, value: 1 },
      },
      {
        title: "宁可晚发，也要等到成熟度和口感达标",
        desc: "我可以等，但等来的必须是认真长好的。",
        score: { engage: 1, proof: 1, risk: -1 },
      },
    ],
  },
  {
    kicker: "第 7 亩田",
    text: "你最喜欢的认养身份感是什么？",
    options: [
      {
        title: "这棵树有我的名字和编号",
        desc: "专属感会让我更想持续关注。",
        score: { engage: 1, proof: 1 },
      },
      {
        title: "我支持的是某位农户和一个村庄",
        desc: "我想知道这笔钱帮到了谁。",
        score: { value: 2, proof: 1 },
      },
      {
        title: "我加入了一个懂吃、懂产地的小圈子",
        desc: "认养也是一种生活方式标签。",
        score: { engage: 1, value: 1 },
      },
      {
        title: "身份感无所谓，好吃、准时、划算最重要",
        desc: "我的人格很朴素，胃和钱包说了算。",
        score: { value: -2, risk: -1 },
      },
    ],
  },
  {
    kicker: "第 8 亩田",
    text: "朋友转来一个认养项目，你第一反应更像哪一种？",
    options: [
      {
        title: "先翻交付规则、售后、差评区",
        desc: "我不是不心动，我只是心动前要先尽调。",
        score: { proof: 2, risk: -2 },
      },
      {
        title: "先看成长记录和农场日常",
        desc: "如果过程有意思，我会默默开始代入。",
        score: { engage: 2, risk: 1 },
      },
      {
        title: "先看农户是谁、产地在哪里",
        desc: "东西要好，背后的人和地方也要让我有感觉。",
        score: { value: 2, proof: 1 },
      },
      {
        title: "先心算价格、斤数、配送频率",
        desc: "田园生活很好，但我的计算器也不是摆设。",
        score: { value: -2, risk: -1 },
      },
    ],
  },
  {
    kicker: "收官一题",
    text: "一句话形容你的认养消费观？",
    options: [
      {
        title: "先把不确定性关进笼子里，再谈浪漫",
        desc: "规则、保障、履约，是我的安全感。",
        score: { risk: -2, proof: 2 },
      },
      {
        title: "好吃是底线，看着它长大是加分项",
        desc: "产品和过程，我都要。",
        score: { engage: 1, proof: 1 },
      },
      {
        title: "我愿意和土地一起开盲盒",
        desc: "只要真实，波动也有故事。",
        score: { risk: 2, value: 1 },
      },
      {
        title: "我是在买菜，也是在投一票",
        desc: "为更好的农业、乡村和生活方式投票。",
        score: { value: 2 },
      },
    ],
  },
];

const typeProfiles = [
  {
    id: "steady",
    title: "保底收成公务员",
    code: "稳证实",
    emoji: "📦",
    avatar: { hat: "cap", tool: "clipboard", crop: "box", mood: "calm" },
    match: (s) => s.risk <= -4 && s.proof >= 3,
    subtitle: "你不是没有田园梦，你只是希望梦里有合同、有保底、有售后，最好再盖个章。",
    story:
      "你的认养人格主打一个“浪漫可以，先走流程”。别人看到果树想到田园诗，你看到果树先想问：保底几斤、坏果怎么算、客服几点下班。你不是冷漠，你只是把成年人最后的安全感寄存在交付规则里。",
    strategies: [
      "优先选择固定斤数、固定批次或带保底交付的认养。",
      "商品页要重点看售后规则、补偿机制和历史履约评价。",
      "如果选择果树或地块认养，建议挑有区间预测和风险说明的项目。",
    ],
  },
  {
    id: "cloud",
    title: "电子巡田总监",
    code: "巡证养",
    emoji: "📹",
    avatar: { hat: "straw", tool: "phone", crop: "sprout", mood: "excited" },
    match: (s) => s.engage >= 4 && s.proof >= 3,
    subtitle: "你的快乐不只在收货那天，而在每一次看到它又长高了一毫米。",
    story:
      "你对认养的核心期待是“看得见的陪伴”。别人刷短视频，你刷叶片近况；别人追剧，你追花期。农场主三天不更新，你就开始脑补小苗是不是加班太累。没有动态更新的项目，对你来说很快会退化成普通预售。",
    strategies: [
      "优先选择有成长档案、直播记录、采摘日或农事活动的项目。",
      "关注更新频率是否稳定，内容是否带时间、地块或批次信息。",
      "结果波动可以接受，但平台需要及时解释原因。",
    ],
  },
  {
    id: "wild",
    title: "丰收盲盒赌神",
    code: "野巡趣",
    emoji: "🎲",
    avatar: { hat: "bandana", tool: "dice", crop: "fruit", mood: "wink" },
    match: (s) => s.risk >= 5 && s.engage >= 1,
    subtitle: "你愿意把一部分确定性交给天气，把刺激感留给明年开箱。",
    story:
      "你把认养看成一场带泥土味的开盲盒。别人问“万一少了怎么办”，你说“这才叫真实农业”。你不是不在乎收成，你只是享受那种打开箱子前的命运感。适合你的项目要真实、好玩、别把未知包装成糊弄。",
    strategies: [
      "适合果树、茶园、稻田等季节性强、收获感明确的认养。",
      "选择会公开自然风险、产量预测和采收故事的项目。",
      "避开完全没有过程内容的固定礼包，那会削弱你的体验感。",
    ],
  },
  {
    id: "family",
    title: "亲子采摘村支书",
    code: "巡共玩",
    emoji: "🧺",
    avatar: { hat: "sunhat", tool: "basket", crop: "strawberry", mood: "happy" },
    match: (s) => s.engage >= 4 && s.value >= 4,
    subtitle: "你认养的不只是农产品，更是周末活动、亲子作业和朋友圈九宫格。",
    story:
      "你看重体验、教育和关系感。一次好的认养，对你来说应当同时完成三件事：孩子认识自然，大人暂时远离工位，朋友圈看起来非常会生活。产品要好吃，记忆也要能带走，最好还能顺便交一份自然教育作业。",
    strategies: [
      "优先选择带采摘、研学、亲子活动或农场开放日的套餐。",
      "商品页要看活动频次、到访交通、儿童友好度和现场服务。",
      "产品本身要稳定，但体验设计会决定你是否复购。",
    ],
  },
  {
    id: "impact",
    title: "乡村共益投资人",
    code: "共证善",
    emoji: "🌾",
    avatar: { hat: "leaf", tool: "heart", crop: "rice", mood: "warm" },
    match: (s) => s.value >= 5,
    subtitle: "你买的不只是果蔬，也是给理想农业投的一张小小赞成票。",
    story:
      "你的消费观里有一点“人间值得”。你买水果时心里住着一个小型乡村振兴办公室：农户是谁、钱到哪、项目能不能持续，你都想知道。你愿意为好农业多付一点，但不接受只讲情怀不讲账本。",
    strategies: [
      "优先选择有农户故事、产地介绍、公益或乡村共建说明的项目。",
      "关注平台是否公开资金去向、合作主体和长期运营机制。",
      "如果商品页只讲情怀不讲规则，仍要谨慎。",
    ],
  },
  {
    id: "detective",
    title: "溯源侦探所所长",
    code: "证品查",
    emoji: "🔎",
    avatar: { hat: "detective", tool: "glass", crop: "egg", mood: "sharp" },
    match: (s) => s.proof >= 6,
    subtitle: "你不是难搞，你只是会把“真实农场”四个字拆开验一遍。",
    story:
      "你对认养最敏感的是信息真实性。别人看详情页看图，你看详情页像在审材料：批次编号在哪里，检测报告有没有，溯源能不能点，坏果谁负责。你不是难搞，你只是对“纯天然”“放心吃”这类词天生免疫。",
    strategies: [
      "优先选择有检测、溯源、批次编号、第三方认证的产品。",
      "适合高品质水果、禽蛋、粮油等强调安全与来源的认养。",
      "对过度包装的田园故事保持警觉，重点看可验证材料。",
    ],
  },
  {
    id: "easy",
    title: "放养系甩手田主",
    code: "放稳惠",
    emoji: "🥬",
    avatar: { hat: "beanie", tool: "cup", crop: "greens", mood: "chill" },
    match: (s) => s.engage <= -4,
    subtitle: "你支持认养，但不想把自己活成农产品项目经理。",
    story:
      "你的核心诉求是：农场主负责种，我负责吃，大家都在自己的岗位上闪闪发光。你支持认养，但拒绝每天像甲方一样追进度。对你来说，最美的田园生活就是门铃响起，菜到了，且不用开会。",
    strategies: [
      "优先选择月度配送、固定组合、家庭菜篮子等省心产品。",
      "关注配送范围、保鲜方式、售后效率和替换规则。",
      "不必选择互动很重的产品，轻量更新就够了。",
    ],
  },
  {
    id: "balanced",
    title: "精打细算田园策展人",
    code: "衡养选",
    emoji: "🧭",
    avatar: { hat: "beret", tool: "map", crop: "mixed", mood: "smart" },
    match: () => true,
    subtitle: "你既要一点田园故事，也要一份靠谱交付，浪漫和算盘同时在线。",
    story:
      "你的认养人格很会过日子：可以被故事打动，但不会被故事冲昏头脑；愿意尝试新鲜事，也会顺手算一下斤价。你属于“心里有诗，手机里有计算器”的人，适合从信息清楚、体验适中的项目开始。",
    strategies: [
      "第一单可以选择固定交付加过程更新的组合型项目。",
      "比较商品时同时看规则、内容更新、用户评价和体验权益。",
      "复购时再升级到果树、茶园、稻田等更有陪伴感的项目。",
    ],
  },
];

const xhsShopLink = "https://xhslink.com/m/4THhdrVKqcC";
const mugwortMiniProgramLink = "#小程序://禾作计划/端午有机艾草艾挂/MUa1cj25BvXbRmk";

const products = [
  {
    name: "当季蔬菜盒子",
    emoji: "🥬",
    desc: "固定斤数交付，品种随季节变化，可能是 3 种、5 种或 6 种以上当季蔬菜组合。",
    fulfillment: "固定重量 + 浮动品种",
    logic: "适合想省心吃到当季菜，但不想每天云巡田的人。",
    tags: ["蔬菜箱", "固定交付", "品种惊喜"],
    link: xhsShopLink,
    weights: { risk: -2, engage: -2, proof: 1, value: -1 },
  },
  {
    name: "水蜜桃果树认养",
    emoji: "🍑",
    desc: "从开花、坐果到成熟采摘，天然带一点产量和口感波动，是认养水果里的经典养成系。",
    fulfillment: "季节采收 + 产量区间",
    logic: "适合愿意和天气一起开盲盒、又想看到成长过程的人。",
    tags: ["水蜜桃", "果树认养", "成长档案"],
    link: xhsShopLink,
    weights: { risk: 2, engage: 2, proof: 1, value: 1 },
  },
  {
    name: "樱桃/杨梅/甜瓜季节鲜果",
    emoji: "🍒",
    desc: "短季水果更讲究成熟窗口，适合做成限时认养、采摘或产地直发的季节型产品。",
    fulfillment: "短季窗口 + 鲜果直发",
    logic: "适合喜欢新鲜感、仪式感和季节限定的人。",
    tags: ["樱桃", "杨梅", "甜瓜"],
    link: xhsShopLink,
    weights: { risk: 1, engage: 1, proof: 1, value: 0 },
  },
  {
    name: "白甜糯玉米认养",
    emoji: "🌽",
    desc: "应季玉米有清晰采收期，交付规则相对容易说清，适合作为认养新手第一单。",
    fulfillment: "应季采收 + 明确份数",
    logic: "适合想尝试认养，但还不想承担太多不确定性的人。",
    tags: ["白甜糯玉米", "应季交付", "新手友好"],
    link: xhsShopLink,
    weights: { risk: -1, engage: 0, proof: 1, value: -1 },
  },
  {
    name: "端午有机艾草艾挂",
    emoji: "🌿",
    desc: "节令型农产品，把端午文化、香气体验和产地有机种植结合起来，适合做节日轻认养。",
    fulfillment: "节令交付 + 文化体验",
    logic: "适合看重仪式感、生活方式和送礼场景的人。",
    tags: ["端午", "有机艾草", "节令礼"],
    link: mugwortMiniProgramLink,
    weights: { risk: -1, engage: 1, proof: 1, value: 2 },
  },
  {
    name: "溯源安心鸡蛋",
    emoji: "🥚",
    desc: "高频刚需、批次清楚、交付稳定，是最适合证据派建立信任的认养品类之一。",
    fulfillment: "定期配送 + 批次溯源",
    logic: "适合看重食品安全、来源透明和稳定复购的人。",
    tags: ["鸡蛋", "批次溯源", "稳定复购"],
    link: xhsShopLink,
    weights: { risk: -2, engage: -1, proof: 2, value: -1 },
  },
  {
    name: "小米/红米粮食认养",
    emoji: "🌾",
    desc: "粮食类产品更适合讲产地、种植方式和年度收成，强调长期稳定与助农价值。",
    fulfillment: "年度收获 + 粮食交付",
    logic: "适合共益型人格，把日常主食和乡村支持连接起来。",
    tags: ["小米", "红米", "助农共益"],
    link: xhsShopLink,
    weights: { risk: -1, engage: 0, proof: 1, value: 2 },
  },
  {
    name: "一亩咖啡园认养",
    emoji: "☕",
    desc: "认养咖啡园，最终交付手冲咖啡或咖啡豆，既有产地故事，也有很强的生活方式属性。",
    fulfillment: "咖啡园认养 + 咖啡豆/手冲交付",
    logic: "适合愿意为产地故事、风味探索和新消费体验买单的人。",
    tags: ["咖啡豆", "手冲咖啡", "生活方式"],
    link: xhsShopLink,
    weights: { risk: 1, engage: 2, proof: 1, value: 1 },
  },
  {
    name: "羔羊一年认养",
    emoji: "🐑",
    desc: "长周期认养，周期约一年，最终交付约 24 斤羔羊肉，天然需要更强的规则、信任和履约说明。",
    fulfillment: "一年周期 + 约 24 斤羔羊肉",
    logic: "适合能接受长等待，但非常需要规则托底和过程透明的人。",
    tags: ["认养羊", "长周期", "肉类交付"],
    link: xhsShopLink,
    weights: { risk: -1, engage: 1, proof: 2, value: 1 },
  },
  {
    name: "精品水果保底礼盒",
    emoji: "🎁",
    desc: "把水果认养包装成明确斤数、明确等级、坏果补偿的礼盒，更适合谨慎型尝鲜。",
    fulfillment: "保底斤数 + 品质分级",
    logic: "适合既想尝试平台水果，又希望结果别太刺激的人。",
    tags: ["保底交付", "坏果补偿", "礼盒"],
    link: xhsShopLink,
    weights: { risk: -2, engage: -1, proof: 2, value: 0 },
  },
];

let current = 0;
let answers = [];
let selectedAvatarGender = "male";

const intro = document.querySelector("#intro");
const genderGate = document.querySelector("#genderGate");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const types = document.querySelector("#types");
const startBtn = document.querySelector("#startBtn");
const previewBtn = document.querySelector("#previewBtn");
const closeTypesBtn = document.querySelector("#closeTypesBtn");
const backIntroBtn = document.querySelector("#backIntroBtn");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");
const againBtn = document.querySelector("#againBtn");
const genderButtons = document.querySelectorAll("[data-gender]");
const currentIndex = document.querySelector("#currentIndex");
const totalCount = document.querySelector("#totalCount");
const progressFill = document.querySelector("#progressFill");
const questionKicker = document.querySelector("#questionKicker");
const questionText = document.querySelector("#questionText");
const optionsGrid = document.querySelector("#optionsGrid");
const shareQr = document.querySelector("#shareQr");
const shareQrHint = document.querySelector("#shareQrHint");

function showOnly(section) {
  [intro, genderGate, quiz, result, types].forEach((item) => {
    item.hidden = item !== section;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupShareQr() {
  if (!shareQr || !shareQrHint) return;

  const isLocalFile = window.location.protocol === "file:";
  const shareUrl = window.location.href.split("#")[0];

  if (isLocalFile) {
    shareQr.src =
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
          <rect width="120" height="120" rx="12" fill="#fffdf7"/>
          <rect x="18" y="18" width="28" height="28" rx="4" fill="#2f6b4f"/>
          <rect x="74" y="18" width="28" height="28" rx="4" fill="#2f6b4f"/>
          <rect x="18" y="74" width="28" height="28" rx="4" fill="#2f6b4f"/>
          <path d="M58 22h8v8h-8zM58 38h8v8h-8zM74 58h8v8h-8zM90 58h8v8h-8zM58 74h8v8h-8zM74 74h8v8h-8zM90 82h8v8h-8zM58 98h8v8h-8zM82 98h20v8H82zM34 58h28v8H34zM18 58h8v8h-8z" fill="#4a3828"/>
          <circle cx="32" cy="32" r="7" fill="#fffdf7"/>
          <circle cx="88" cy="32" r="7" fill="#fffdf7"/>
          <circle cx="32" cy="88" r="7" fill="#fffdf7"/>
        </svg>
      `);
    shareQrHint.textContent = "当前是本地预览；部署到线上后，这里会自动变成可扫码打开的测试链接。";
    return;
  }

  const qrApi = "https://api.qrserver.com/v1/create-qr-code/";
  shareQr.src = `${qrApi}?size=220x220&margin=10&data=${encodeURIComponent(shareUrl)}`;
  shareQrHint.textContent = "手机扫一扫，邀请朋友测测 TA 的认养人格。";
}

const sceneSvg = {
  "fruit-tree": `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#dff2ee"/><path d="M0 108 C60 76 112 92 168 76 C222 58 270 72 320 48 L320 160 L0 160Z" fill="#95c66f"/>
      <path d="M0 124 C68 110 118 126 174 108 C234 90 278 102 320 84 L320 160 L0 160Z" fill="#5fa460"/>
      <rect x="148" y="62" width="18" height="74" rx="8" fill="#8d5a35"/>
      <circle cx="142" cy="62" r="34" fill="#4d8a5c"/><circle cx="174" cy="62" r="38" fill="#65a95f"/><circle cx="156" cy="36" r="30" fill="#78b86a"/>
      <circle cx="134" cy="56" r="8" fill="#d85c49"/><circle cx="176" cy="48" r="9" fill="#f0c45f"/><circle cx="162" cy="80" r="8" fill="#d85c49"/>
      <rect x="202" y="48" width="38" height="50" rx="4" fill="#fffdf7" stroke="#4a3828" stroke-width="4"/><path d="M221 48 L221 32" stroke="#4a3828" stroke-width="4"/>
      <rect x="36" y="126" width="56" height="20" rx="8" fill="#fffdf7" opacity=".85"/><circle cx="52" cy="120" r="8" fill="#f0c45f"/><circle cx="72" cy="118" r="8" fill="#d85c49"/>
    </svg>`,
  "produce-box": `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#f7f4e9"/><path d="M0 112 L320 76 L320 160 L0 160Z" fill="#d9ead0"/>
      <rect x="54" y="76" width="212" height="58" rx="12" fill="#b77b45"/><path d="M68 90 H252 M90 76 V134 M230 76 V134" stroke="#7a4c2a" stroke-width="5" opacity=".5"/>
      <circle cx="92" cy="72" r="16" fill="#d85c49"/><circle cx="124" cy="66" r="18" fill="#f0c45f"/><circle cx="160" cy="70" r="17" fill="#5fa460"/><circle cx="196" cy="67" r="17" fill="#d85c49"/><circle cx="228" cy="72" r="16" fill="#f0c45f"/>
      <path d="M88 54 Q102 38 116 54 M154 52 Q168 34 184 52 M218 54 Q232 38 246 54" fill="none" stroke="#4d8a5c" stroke-width="6" stroke-linecap="round"/>
      <rect x="112" y="116" width="96" height="22" rx="11" fill="#fffdf7" opacity=".9"/>
    </svg>`,
  picnic: `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#dff2ee"/><path d="M0 106 C62 88 86 98 132 78 C194 52 250 70 320 42 L320 160 L0 160Z" fill="#8fc66b"/>
      <rect x="0" y="118" width="320" height="42" fill="#67a95e"/>
      <path d="M46 96 C60 74 92 74 104 96" fill="#4d8a5c"/><rect x="72" y="96" width="8" height="34" fill="#805235"/>
      <circle cx="150" cy="84" r="18" fill="#ffd8b1"/><circle cx="194" cy="88" r="18" fill="#ffd8b1"/>
      <path d="M132 112 Q150 96 168 112 L174 144 H126Z" fill="#f0c45f"/><path d="M176 114 Q194 98 214 114 L222 146 H170Z" fill="#d85c49"/>
      <path d="M224 128 Q246 94 268 128" fill="none" stroke="#8d5a35" stroke-width="7"/><rect x="218" y="124" width="58" height="26" rx="8" fill="#b77b45"/>
      <circle cx="235" cy="119" r="7" fill="#d85c49"/><circle cx="252" cy="118" r="7" fill="#f0c45f"/>
    </svg>`,
  trace: `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#f6f8ee"/><rect x="56" y="42" width="134" height="86" rx="14" fill="#fffdf7" stroke="#4a3828" stroke-width="5"/>
      <path d="M76 68 H142 M76 88 H154 M76 108 H124" stroke="#c9d8c0" stroke-width="8" stroke-linecap="round"/>
      <rect x="206" y="50" width="60" height="60" rx="8" fill="#fffdf7" stroke="#2f6b4f" stroke-width="6"/>
      <path d="M218 62 H230 V74 H218Z M242 62 H254 V74 H242Z M218 86 H230 V98 H218Z M242 86 H254 V98 H242Z" fill="#2f6b4f"/>
      <circle cx="92" cy="42" r="18" fill="#d85c49"/><circle cx="118" cy="36" r="16" fill="#f0c45f"/><path d="M216 126 C230 112 252 112 266 126" fill="none" stroke="#4d8a5c" stroke-width="7" stroke-linecap="round"/>
    </svg>`,
  ledger: `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#f8f3e7"/><rect x="54" y="30" width="212" height="104" rx="14" fill="#fffdf7" stroke="#4a3828" stroke-width="5"/>
      <path d="M78 60 H242 M78 86 H242 M78 112 H242 M132 44 V128 M190 44 V128" stroke="#d8dfd0" stroke-width="5"/>
      <path d="M92 104 L126 82 L160 92 L196 62 L232 76" fill="none" stroke="#d85c49" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="232" cy="76" r="8" fill="#f0c45f"/>
    </svg>`,
  farmer: `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#dff2ee"/><path d="M0 110 L320 74 L320 160 L0 160Z" fill="#75b765"/>
      <rect x="36" y="118" width="84" height="20" rx="10" fill="#fffdf7" opacity=".75"/><path d="M38 98 C74 88 110 88 146 98" stroke="#4d8a5c" stroke-width="9" stroke-linecap="round"/>
      <circle cx="206" cy="62" r="24" fill="#ffd8b1"/><path d="M174 96 Q206 70 238 96 L250 146 H162Z" fill="#f0c45f"/>
      <path d="M168 50 H244" stroke="#8d5a35" stroke-width="12" stroke-linecap="round"/><path d="M186 42 Q206 20 228 42" fill="#f0d373"/>
      <rect x="246" y="80" width="44" height="52" rx="8" fill="#fffdf7" stroke="#4a3828" stroke-width="4"/><path d="M258 98 H278 M258 114 H272" stroke="#4d8a5c" stroke-width="5" stroke-linecap="round"/>
    </svg>`,
  growth: `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#f7f4e9"/><g transform="translate(34 28)">
      <rect width="70" height="46" rx="10" fill="#fffdf7"/><rect x="92" width="70" height="46" rx="10" fill="#fffdf7"/><rect x="184" width="70" height="46" rx="10" fill="#fffdf7"/>
      <rect y="66" width="70" height="46" rx="10" fill="#fffdf7"/><rect x="92" y="66" width="70" height="46" rx="10" fill="#fffdf7"/><rect x="184" y="66" width="70" height="46" rx="10" fill="#fffdf7"/>
      <path d="M34 38 V20 M34 26 Q22 16 14 28 M34 26 Q48 14 58 28" stroke="#4d8a5c" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M126 36 V16 M126 22 Q110 8 100 24 M126 22 Q144 6 154 24" stroke="#4d8a5c" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="219" cy="22" r="12" fill="#d85c49"/><path d="M219 34 V18 M210 17 Q219 5 228 17" stroke="#4d8a5c" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M16 96 H54 M108 96 H146 M200 96 H238" stroke="#c9d8c0" stroke-width="7" stroke-linecap="round"/>
      </g></svg>`,
  shield: `
    <svg class="scene-svg" viewBox="0 0 320 160" aria-hidden="true">
      <rect width="320" height="160" fill="#f8f3e7"/><path d="M160 28 L232 54 C226 102 204 130 160 146 C116 130 94 102 88 54Z" fill="#fffdf7" stroke="#4a3828" stroke-width="5"/>
      <path d="M130 82 L152 104 L198 62" fill="none" stroke="#4d8a5c" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="88" cy="112" r="18" fill="#d85c49"/><circle cx="232" cy="110" r="18" fill="#f0c45f"/>
      <path d="M56 54 H98 M222 54 H264" stroke="#c9d8c0" stroke-width="8" stroke-linecap="round"/>
    </svg>`,
};

const soundFiles = {
  sunny: "./assets/audio/bgm-a-sunny.mp3",
  comfort: "./assets/audio/bgm-b-comfort.mp3",
  nature: "./assets/audio/bgm-c-nature.mp3",
  active: "./assets/audio/bgm-d-active.mp3",
};

let activeAudio;

function playSound(kind) {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }

  activeAudio = new Audio(soundFiles[kind]);
  activeAudio.volume = 0.9;
  activeAudio.play();
}

function optionVisual(option, questionType) {
  if (!option.visual) return "";
  if (questionType === "sound") {
    return `
      <div class="option-visual option-visual-sound option-visual-${option.visual}">
        <span class="sound-wave"></span>
        <span class="sound-play" onclick="event.stopPropagation(); playSound('${option.visual}')">试听 20 秒</span>
      </div>
    `;
  }
  return `
    <div class="option-visual option-visual-photo option-visual-${option.visual}">
      <span class="photo-thumb"></span>
    </div>
  `;
}

function renderQuestion() {
  const question = questions[current];
  currentIndex.textContent = String(current + 1);
  totalCount.textContent = String(questions.length);
  progressFill.style.width = `${(current / questions.length) * 100}%`;
  questionKicker.textContent = question.kicker;
  questionText.textContent = question.text;
  backBtn.disabled = current === 0;
  backBtn.style.opacity = current === 0 ? "0.45" : "1";
  optionsGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = `option-card ${question.type ? `option-card-${question.type}` : ""}`;
    button.type = "button";
    if (answers[current] === index) button.classList.add("selected");
    button.innerHTML = `
      ${optionVisual(option, question.type)}
      <strong>${option.title}</strong>
      <span>${option.desc}</span>
    `;
    button.addEventListener("click", () => selectOption(index));
    optionsGrid.appendChild(button);
  });
}

function selectOption(index) {
  answers[current] = index;
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    progressFill.style.width = "100%";
    renderResult();
  }
}

function calculateScores() {
  const score = { risk: 0, engage: 0, proof: 0, value: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    Object.entries(option.score).forEach(([key, value]) => {
      score[key] += value;
    });
  });
  return score;
}

function pickType(score) {
  return typeProfiles.find((profile) => profile.match(score));
}

function axisPercent(value) {
  const min = -12;
  const max = 12;
  const clamped = Math.max(min, Math.min(max, value));
  return Math.round(((clamped - min) / (max - min)) * 100);
}

function renderAvatar(profile, compact = false) {
  return `
    <div class="character-avatar avatar-gender-${selectedAvatarGender} character-${profile.id} ${compact ? "character-compact" : ""}" aria-label="${profile.title}">
      <span class="character-portrait"></span>
    </div>
  `;
}

function renderAxis(score) {
  const axisList = document.querySelector("#axisList");
  axisList.innerHTML = "";

  Object.entries(axes).forEach(([key, axis]) => {
    const value = score[key];
    const item = document.createElement("div");
    item.className = "axis-item";
    item.innerHTML = `
      <div class="axis-row">
        <span>${axis.left}</span>
        <span>${axis.right}</span>
      </div>
      <div class="axis-track"><div class="axis-fill" style="width: ${axisPercent(value)}%"></div></div>
      <p>${value >= 0 ? axis.high : axis.low}</p>
    `;
    axisList.appendChild(item);
  });
}

function productMatch(score, product) {
  const keys = Object.keys(product.weights);
  const distance = keys.reduce((sum, key) => sum + Math.abs(score[key] - product.weights[key] * 3), 0);
  return Math.max(62, Math.round(100 - distance * 3.2));
}

function renderProducts(score) {
  const productGrid = document.querySelector("#productGrid");
  productGrid.innerHTML = "";

  products
    .map((product) => ({ ...product, matchScore: productMatch(score, product) }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3)
    .forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-visual">
          <span>${product.emoji}</span>
          <span class="match-score">${product.matchScore}% 匹配</span>
        </div>
        <div class="product-body">
          <h4>${product.name}</h4>
          <p>${product.desc}</p>
          <div class="product-meta">
            <span>${product.fulfillment}</span>
            <span>${product.logic}</span>
          </div>
          <div class="tags">${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
        <a class="product-cta" href="${product.link}" target="_blank" rel="noreferrer">查看平台同类产品</a>
      `;
      productGrid.appendChild(card);
    });
}

function renderResult() {
  const score = calculateScores();
  const profile = pickType(score);

  document.querySelector("#resultTitle").textContent = `${profile.emoji} ${profile.title}`;
  document.querySelector("#resultSubtitle").textContent = profile.subtitle;
  document.querySelector("#typeStamp").textContent = "人格卡片";
  document.querySelector("#resultAvatar").innerHTML = renderAvatar(profile);
  document.querySelector("#resultStory").textContent = profile.story;
  document.querySelector("#strategyList").innerHTML = profile.strategies.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#salesHint").textContent =
    "商品页可以根据这个结果自动调整排序：先展示最匹配的认养产品，再突出该人格最在意的交付规则、成长更新、助农故事或性价比信息。";

  renderAxis(score);
  renderProducts(score);
  showOnly(result);
}

function renderTypes() {
  const typesGrid = document.querySelector("#typesGrid");
  typesGrid.innerHTML = "";
  typeProfiles.forEach((profile) => {
    const card = document.createElement("article");
    card.className = "type-card";
    card.innerHTML = `
      ${renderAvatar(profile, true)}
      <h4>${profile.emoji} ${profile.title}</h4>
      <p><strong>${profile.code}</strong></p>
      <p>${profile.subtitle}</p>
    `;
    typesGrid.appendChild(card);
  });
}

function resetQuiz() {
  current = 0;
  answers = [];
  renderQuestion();
  showOnly(quiz);
}

startBtn.addEventListener("click", () => showOnly(genderGate));
againBtn.addEventListener("click", () => showOnly(genderGate));
restartBtn.addEventListener("click", resetQuiz);
backIntroBtn.addEventListener("click", () => showOnly(intro));
genderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedAvatarGender = button.dataset.gender;
    resetQuiz();
  });
});
previewBtn.addEventListener("click", () => {
  renderTypes();
  showOnly(types);
});
closeTypesBtn.addEventListener("click", () => {
  if (answers.length > 0) {
    showOnly(quiz);
  } else {
    showOnly(intro);
  }
});
backBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
});

setupShareQr();
