import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "เกี่ยวกับร้าน",
  description:
    "รู้จัก VIBES HOUSE ร้านนั่งชิลบางแสน บรรยากาศดี ดนตรีสด และเครื่องดื่มเย็นๆ เหมาะสำหรับนั่งชิลกับเพื่อน",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `เกี่ยวกับร้าน | ${SITE.name}`,
    description:
      "รู้จัก VIBES HOUSE ร้านนั่งชิลบางแสน บรรยากาศดี ดนตรีสด และเครื่องดื่มเย็นๆ เหมาะสำหรับนั่งชิลกับเพื่อน",
    url: `${SITE.url}/about`,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}