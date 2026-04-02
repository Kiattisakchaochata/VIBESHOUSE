import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "ติดต่อร้าน",
  description: "ข้อมูลติดต่อ แผนที่ เบอร์โทร และช่องทางโซเชียลของ VIBES HOUSE",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `ติดต่อร้าน | ${SITE.name}`,
    description: "ข้อมูลติดต่อ แผนที่ เบอร์โทร และช่องทางโซเชียลของ VIBES HOUSE",
    url: `${SITE.url}/contact`,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}