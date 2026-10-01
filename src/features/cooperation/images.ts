export type SceneImageKey = "hero" | "social" | "youthSocial" | "interest" | "lab" | "service" | "brand" | "date" | "life" | "happyLife" | "cta"
  | "brandCoffee" | "brandGift" | "brandInteraction" | "brandTravel"
  | "stageMeet" | "stageKnow" | "stageLove" | "stageLife"
  | "spreadScene" | "spreadCapture" | "spreadShare" | "spreadMedia";

/** Replace a file in public/images/cooperation, then adjust its focal point here. */
export const sceneImages: Record<SceneImageKey, {
  src: string; alt: string; width: number; height: number; position: string;
}> = {
  hero: { src: "/images/cooperation/hero-yinchuan.webp", alt: "秋日银杏、暖灯建筑与河流交织的城市夜景艺术图", width: 941, height: 1672, position: "50% 72%" },
  social: { src: "/images/cooperation/scene-social.19ed533bf676.webp", alt: "青年朋友在秋日城市暖灯下自然交流的场景示意", width: 960, height: 640, position: "50% 50%" },
  youthSocial: { src: "/images/cooperation/scene-youth-social.3fe625c973f7.webp", alt: "青年朋友在暖灯城楼前的夜间市集中喝咖啡、自然交流的场景示意", width: 960, height: 640, position: "50% 50%" },
  interest: { src: "/images/cooperation/scene-interest.23efbd935423.webp", alt: "年轻人在咖啡桌前通过共同兴趣认识彼此的场景示意", width: 960, height: 640, position: "50% 50%" },
  lab: { src: "/images/cooperation/scene-destiny-lab.e2595a0c3b4c.webp", alt: "青年通过手机互动与双向确认走向真实见面的场景示意", width: 960, height: 640, position: "50% 50%" },
  service: { src: "/images/cooperation/scene-service.fb69544e6f76.webp", alt: "青年在温暖的咨询空间交流，婚恋服务人员提供专业支持的场景示意", width: 960, height: 640, position: "50% 50%" },
  brand: { src: "/images/cooperation/scene-brand.2c919c9580b9.webp", alt: "青年体验咨询、旅行、汽车与珠宝的四格品牌场景示意", width: 960, height: 640, position: "50% 50%" },
  date: { src: "/images/cooperation/scene-understanding.1943d8c1e4b3.webp", alt: "两位青年在秋日市集中喝咖啡、分享明信片，逐渐相知的场景示意", width: 960, height: 640, position: "50% 50%" },
  life: { src: "/images/cooperation/scene-love.e6e7c12da5fa.webp", alt: "一对青年在城市暖灯下赠送礼物、相视微笑的相恋场景示意", width: 960, height: 640, position: "50% 50%" },
  happyLife: { src: "/images/cooperation/scene-happy-life.1fe4ed5bab30.webp", alt: "一对青年在新家挑选材料、一起规划家居的幸福生活场景示意", width: 960, height: 640, position: "50% 50%" },
  cta: { src: "/images/cooperation/cta-yinchuan.webp", alt: "暖灯沿河亮起的秋日城市夜景艺术图", width: 941, height: 1672, position: "50% 76%" },
  brandCoffee: { src: "/images/cooperation/scene-youth-social.3fe625c973f7.webp", alt: "两位青年手持咖啡，在秋日城市暖灯下自然聊天的场景示意", width: 960, height: 640, position: "50% 50%" },
  brandGift: { src: "/images/cooperation/scene-love.e6e7c12da5fa.webp", alt: "两位青年赠送小礼物、轻松交流的场景示意", width: 960, height: 640, position: "50% 50%" },
  brandInteraction: { src: "/images/cooperation/scene-interest.23efbd935423.webp", alt: "两位青年在咖啡桌前共同参与手作互动的场景示意", width: 960, height: 640, position: "50% 50%" },
  brandTravel: { src: "/images/cooperation/scene-happy-life.dcd180b8cd6b.webp", alt: "两位青年带着相机和咖啡，在汽车旁准备共同出行的场景示意", width: 960, height: 640, position: "50% 50%" },
  stageMeet: { src: "/images/cooperation/scene-social.19ed533bf676.webp", alt: "青年朋友在秋日活动现场自然交流、认识彼此的场景示意", width: 960, height: 640, position: "50% 50%" },
  stageKnow: { src: "/images/cooperation/scene-understanding.1943d8c1e4b3.webp", alt: "两位青年在城市活动中分享咖啡与明信片、逐渐熟悉的场景示意", width: 960, height: 640, position: "50% 50%" },
  stageLove: { src: "/images/cooperation/scene-date.e00bf61fc087.webp", alt: "一对青年在秋日城市共同漫步、分享出行经历的场景示意", width: 960, height: 640, position: "50% 50%" },
  stageLife: { src: "/images/cooperation/scene-happy-life.1fe4ed5bab30.webp", alt: "两位青年一起挑选家居材料、规划共同生活的场景示意", width: 960, height: 640, position: "50% 50%" },
  spreadScene: { src: "/images/cooperation/scene-youth-social.3fe625c973f7.webp", alt: "青年朋友在秋夜市集里喝咖啡、体验活动并自然交流的场景示意", width: 960, height: 640, position: "50% 50%" },
  spreadCapture: { src: "/images/cooperation/spread-capture.ba1177a71a0d.webp", alt: "秋夜市集里，参与者用手机记录朋友互动的场景示意", width: 960, height: 640, position: "50% 50%" },
  spreadShare: { src: "/images/cooperation/spread-share.e7117eebe373.webp", alt: "穿米白针织衫的年轻女性在活动现场用手机分享朋友合影的场景示意", width: 960, height: 640, position: "45% 50%" },
  spreadMedia: { src: "/images/cooperation/spread-capture.ba1177a71a0d.webp", alt: "手机记录秋夜青年互动的场景示意，用于展示传播内容形式", width: 960, height: 640, position: "50% 50%" },
};
