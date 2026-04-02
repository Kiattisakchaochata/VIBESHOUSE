import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import MenuContent from "@/components/menu/MenuContent";

export const metadata: Metadata = {
  title: "เมนู",
  description: "เมนูอาหาร เครื่องดื่ม และเบียร์สดของ VIBES HOUSE",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `เมนู | ${SITE.name}`,
    description: "เมนูอาหาร เครื่องดื่ม และเบียร์สดของ VIBES HOUSE",
    url: `${SITE.url}/menu`,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function MenuPage() {
  return <MenuContent />;
}