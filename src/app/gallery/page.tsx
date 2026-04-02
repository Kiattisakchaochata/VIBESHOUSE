import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "บรรยากาศร้าน",
  description: "รวมภาพบรรยากาศร้าน VIBES HOUSE และมุมถ่ายรูปในร้าน",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `บรรยากาศร้าน | ${SITE.name}`,
    description: "รวมภาพบรรยากาศร้าน VIBES HOUSE และมุมถ่ายรูปในร้าน",
    url: `${SITE.url}/gallery`,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}