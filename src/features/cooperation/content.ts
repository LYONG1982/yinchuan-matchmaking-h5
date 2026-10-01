import type { SceneImageKey } from "./images";

export const eventInfo = {
  name: "第二届万人相亲大会",
  tagline: "爱在凤城 · 缘定金秋",
  definition: "银川大型城市青年婚恋交友与社交体验活动",
  date: "10月16日—10月18日",
  venue: "宁夏银川文化城",
  organizer: "同舟（宁夏）文化科技有限公司",
};

export const contacts = [
  { name: "贾先生", phone: "18095479599" },
  { name: "邢先生", phone: "18609511123" },
];

export type ActivityFeature = { id: string; title: string; core: string[]; body: string; image: SceneImageKey };
export const activityFeatures: ActivityFeature[] = [
  { id: "social", title: "青年交友", core: ["认识新朋友，", "拓展真实社交圈。"], body: "让年轻人在自然的城市活动场景中认识彼此，而不是参加一场充满压力的传统相亲。", image: "youthSocial" },
  { id: "interest", title: "兴趣互动", core: ["先一起做点有意思的事，", "再慢慢认识彼此。"], body: "咖啡、音乐、游戏、文创、运动与生活方式体验，让陌生人的第一次交流更加自然。", image: "interest" },
  { id: "lab", title: "缘分实验室", core: ["用数字化方式，", "让“遇见谁”多一点可能。"], body: "现场扫码参与互动、缘分发现与双向确认，让手机里的互动最终回到真实见面。", image: "lab" },
  { id: "service", title: "婚恋服务", core: ["从一次相遇，", "到真正认识一个人。"], body: "通过专业婚恋服务、红娘服务及情感咨询，为有进一步需求的人提供后续服务。", image: "service" },
  { id: "brand", title: "品牌体验", core: ["让品牌自然进入", "年轻人的社交生活。"], body: "品牌不是简单摆一个展位，而是成为一次约会、一次互动、一次礼物或一次体验的一部分。", image: "brand" },
];

export type BrandValue = { id: string; title: string; paragraphs: string[]; tags?: string[]; steps?: string[] };

export const brandExperienceContent = {
  title: ["从「看到品牌」", "变成「体验品牌」"],
  intro: ["不是把 Logo 放进活动，", "而是让品牌自然进入年轻人的真实社交场景。"],
  closingLead: "品牌不再只是被看见，",
  closingItems: ["被使用", "被体验", "被记住"],
};

export type BrandExperienceStory = {
  id: string;
  title: string;
  description: string[];
  categories: string[];
  image: SceneImageKey;
};

export const brandExperienceStories: BrandExperienceStory[] = [
  { id: "coffee", title: "一杯咖啡", description: ["让陌生的两个人，", "有了第一次聊天的开始。"], categories: ["餐饮", "咖啡", "饮品"], image: "brandCoffee" },
  { id: "gift", title: "一份礼物", description: ["让品牌成为一次", "值得记住的心意。"], categories: ["珠宝", "美妆", "文创", "礼赠"], image: "brandGift" },
  { id: "interaction", title: "一次互动", description: ["让年轻人真正参与，", "而不只是路过。"], categories: ["汽车", "数码", "运动", "兴趣"], image: "brandInteraction" },
  { id: "travel", title: "一段旅程", description: ["一次相遇，", "也可能成为一段旅程的开始。"], categories: ["汽车", "旅行", "文旅"], image: "brandTravel" },
];

export const relationshipAudienceContent = {
  title: ["不只是年轻人，", "更是正在发生", "关系变化的人"],
  intro: ["从单身、初识、相恋到共同生活，", "不同关系阶段，", "也在产生不同的生活需求和消费场景。"],
  closingTitle: ["从一个人的心动，", "到两个人的生活。"],
  closingBody: "关系的变化，也意味着新的生活需求正在发生。",
  closingNote: "品牌，可以出现在这些真实发生的时刻里。",
};

export type RelationshipAudienceStage = {
  id: string;
  title: string;
  description: string[];
  categories: string[];
  value: string;
  image: SceneImageKey;
  choiceShift?: boolean;
};

export const relationshipAudienceStages: RelationshipAudienceStage[] = [
  { id: "meet", title: "相遇", description: ["一个人，", "准备认识另一个人。"], categories: ["社交", "餐饮", "兴趣", "娱乐"], value: "成为一次相遇的开始", image: "stageMeet" },
  { id: "know", title: "相知", description: ["两个人，", "开始创造共同经历。"], categories: ["餐饮", "礼物", "摄影", "旅行"], value: "成为第一段共同记忆", image: "stageKnow" },
  { id: "love", title: "相恋", description: ["消费开始从"], categories: ["汽车", "珠宝", "摄影", "旅行", "生活方式"], value: "进入两个人的共同选择", image: "stageLove", choiceShift: true },
  { id: "life", title: "幸福生活", description: ["从一段关系，", "到一种新的生活方式。"], categories: ["婚庆", "家居", "汽车", "珠宝", "旅行", "文旅"], value: "参与人生的重要时刻", image: "stageLife" },
];

export const spreadStoryContent = {
  title: ["一次参与，", "不止一次被看见"],
  intro: "品牌从活动现场进入年轻人的真实社交场景，再随着照片、短视频与分享持续传播。",
  closingTitle: ["品牌获得的，", "不只是一次现场曝光。"],
  closingBody: "而是一次可以持续传播的真实体验。",
};

export type SpreadStageData = {
  id: string;
  title: string;
  core: string[];
  body: string;
  tags: string[];
  image: SceneImageKey;
};

export const spreadStages: SpreadStageData[] = [
  { id: "scene", title: "活动现场", core: ["品牌进入真实的", "社交场景"], body: "年轻人在现场体验、互动、相遇，品牌自然成为场景的一部分。", tags: ["现场体验"], image: "spreadScene" },
  { id: "capture", title: "内容产生", core: ["真实体验，", "变成值得记录的内容"], body: "摄影、达人、用户随手记录，形成照片、短视频和现场故事。", tags: ["照片", "短视频"], image: "spreadCapture" },
  { id: "share", title: "用户分享", core: ["参与者成为传播者"], body: "一次现场体验开始进入个人社交关系链。", tags: ["朋友圈", "小红书", "抖音", "视频号"], image: "spreadShare" },
  { id: "media", title: "持续扩散", core: ["从现场人流，", "到场外更多人的看见"], body: "用户内容可进一步延伸至达人内容、官方传播与媒体报道机会。", tags: ["官方传播", "媒体报道", "持续曝光"], image: "spreadMedia" },
];

export const brandValues: BrandValue[] = [
  { id: "encounter", title: "一次面对年轻人的\n真实线下接触", paragraphs: ["大量青年因为交友、兴趣和互动来到活动现场。", "品牌面对的不只是“路过的人”，而是一群愿意停下来、体验、交流和参与的人。"] },
  { id: "experience", title: brandExperienceContent.title.join("\n"), paragraphs: [...brandExperienceContent.intro] },
  { id: "audience", title: relationshipAudienceContent.title.join("\n"), paragraphs: [...relationshipAudienceContent.intro] },
  { id: "spread", title: spreadStoryContent.title.join("\n"), paragraphs: [spreadStoryContent.intro] },
];

export type RelationshipScene = { id: string; title: string; subtitle: string[]; categories: string[]; image: SceneImageKey };
export const relationshipScenes: RelationshipScene[] = [
  { id: "meet", title: "相遇", subtitle: ["第一次见面之前"], categories: ["兴趣社团", "餐饮", "咖啡", "文创", "生活方式品牌"], image: "social" },
  { id: "know", title: "相识", subtitle: ["从陌生人，", "到坐下来聊一会儿"], categories: ["咖啡约会", "餐饮", "摄影", "互动体验", "礼物"], image: "interest" },
  { id: "understand", title: "相知", subtitle: ["从一次见面，", "到更多共同经历"], categories: ["婚恋服务", "情感咨询", "旅行", "汽车", "珠宝"], image: "date" },
  { id: "love", title: "相恋", subtitle: ["两个人开始真正走到一起"], categories: ["汽车", "珠宝", "摄影", "旅行", "生活方式品牌"], image: "life" },
  { id: "life", title: "幸福生活", subtitle: ["从关系开始，", "到新的生活方式"], categories: ["婚庆", "婚纱摄影", "珠宝", "家居", "汽车", "旅行", "文旅"], image: "happyLife" },
];

export type PartnerCategoryData = { title: string; categories: string[]; description: string };
export const partnerCategories: PartnerCategoryData[] = [
  { title: "婚恋服务", categories: ["婚恋机构", "红娘服务", "情感咨询"], description: "从认识开始，为关系提供更专业的服务。" },
  { title: "青年社交", categories: ["兴趣社团", "运动", "音乐", "摄影", "阅读", "宠物"], description: "用共同兴趣创造自然交流。" },
  { title: "约会生活", categories: ["餐饮", "咖啡", "甜品", "汽车", "礼品", "文旅"], description: "进入年轻人的真实约会场景。" },
  { title: "幸福生活", categories: ["珠宝", "摄影", "婚庆", "旅行", "品质生活"], description: "从相遇延伸到未来生活。" },
  { title: "城市合作伙伴", categories: ["媒体", "企业", "机构", "社群", "渠道"], description: "一起扩大城市青年社交生态。" },
];

export type CooperationMode = { title: string; intro: string; description: string; items: string[] };
export const cooperationModes: CooperationMode[] = [
  { title: "品牌合作", intro: "进入活动整体传播体系。", description: "适合希望获得品牌曝光、内容传播与活动关联的合作伙伴。", items: [] },
  { title: "场景共创", intro: "一起设计年轻人愿意参与的真实体验。", description: "例如：", items: ["咖啡约会", "摄影互动", "汽车体验", "旅行互动", "品牌任务"] },
  { title: "现场体验", intro: "让用户真实体验品牌产品与服务。", description: "包括：", items: ["产品展示", "互动体验", "咨询", "试用", "用户触达"] },
  { title: "资源合作", intro: "用双方资源共同放大活动影响力。", description: "包括：", items: ["奖品", "服务", "媒体", "社群", "渠道", "内容资源"] },
];
