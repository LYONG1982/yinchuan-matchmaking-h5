import type { Metadata, Viewport } from "next";
import { H5LandingPage } from "@/features/cooperation/h5-landing-page";

// A complete public narrative: no request data, session or database is needed.
// Static rendering also keeps content readable without the app's streaming JS.
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "第二届万人相亲大会｜招商合作" },
  description: "爱在凤城 · 缘定金秋。10月16日—10月18日，宁夏银川文化城。与我们一起，参与一段关系的开始。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#421313",
};

export default function CooperationPage() {
  return <H5LandingPage />;
}
