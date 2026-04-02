import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import ReviewSection from "@/components/home/ReviewSection";

export const metadata: Metadata = {
  title: "ร้านนั่งชิลบางแสน",
  description:
    "ร้านนั่งชิลบางแสน บรรยากาศดี ดนตรีสด เบียร์สด เหมาะสำหรับนั่งชิลกับเพื่อนที่ VIBES HOUSE",
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <FeatureSection />
      <GalleryPreviewSection />
      <ReviewSection />
    </main>
  );
}