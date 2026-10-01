# 第二届万人相亲大会｜招商合作 H5

爱在凤城 · 缘定金秋。10月16日—10月18日，宁夏银川文化城。

**在线浏览：https://lyong1982.github.io/yinchuan-matchmaking-h5/**

手机、平板和电脑浏览器均可直接访问。电脑页面居中显示430px手机宽度，手机自动适应屏幕。招商联系方式和直接拨号按钮位于页面底部。

## 开发与发布

本仓库为独立静态H5：Next.js、React、TypeScript、CSS Modules。无需账号、数据库或常驻Node服务器。

```sh
npm ci
npm run dev
```

本地开发访问 `http://localhost:3000/yinchuan-matchmaking-h5/`。

```sh
npm run build
```

构建生成 `out/`。GitHub Actions在main分支推送后自动构建并发布GitHub Pages；仅发布out目录。仓库子路径由 `next.config.mjs` 中的 `basePath` 统一配置，图片组件使用同一前缀。更改仓库名或域名部署路径后需要重新构建。

## 内容维护

- 招商文案：`src/features/cooperation/content.ts`
- 图片槽位及替代文字：`src/features/cooperation/images.ts`
- 图片资源：`public/images/cooperation/`
- 页面组件及样式：`src/features/cooperation/`
- 当前素材指纹：`public/release.json`

图片为活动视觉示意，包含用户提供素材与AI场景图，不是已发生的活动或媒体报道证明。“传播示意”由HTML明确标识。替换图片时使用新文件名并同步目标槽位的尺寸、alt和焦点。

已实现原生滚动、减少动态效果、无JavaScript完整正文和电话链接、图片懒加载与iPhone安全区。仓库仅含公开招商前端，不含活动业务系统、后台、数据库、环境变量或用户资料。

## 回退

撤销对应main提交并重新运行Pages工作流即可恢复上一版；无需操作任何业务数据。
