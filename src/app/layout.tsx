import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "第二届万人相亲大会｜招商合作",
  description: "爱在凤城 · 缘定金秋。10月16日—10月18日，宁夏银川文化城。",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><a className="skip-link" href="#main-content">跳到主要内容</a>{children}</body></html>;
}
