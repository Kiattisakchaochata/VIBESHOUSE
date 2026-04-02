import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "บทความ",
  description: "ข่าวสาร โปรโมชัน และบทความของ VIBES HOUSE",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `บทความ | ${SITE.name}`,
    description: "ข่าวสาร โปรโมชัน และบทความของ VIBES HOUSE",
    url: `${SITE.url}/blog`,
    type: "article",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}