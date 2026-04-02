"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    title: "มุมหน้าร้าน",
    subtitle: "Front Zone",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    title: "โซนนั่งชิล",
    subtitle: "Chill Seating",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    title: "บรรยากาศช่วงค่ำ",
    subtitle: "Night Vibe",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    title: "มุมถ่ายรูป",
    subtitle: "Photo Spot",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    title: "โซนเครื่องดื่ม",
    subtitle: "Drink Bar",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    title: "โต๊ะสำหรับกลุ่มเพื่อน",
    subtitle: "Friends Table",
  },
  {
    id: 7,
    src: "/images/gallery-7.jpg",
    title: "แสงและบรรยากาศ",
    subtitle: "Lighting Mood",
  },
  {
    id: 8,
    src: "/images/gallery-8.jpg",
    title: "โซนดนตรีสด",
    subtitle: "Live Music",
  },
];

export default function GalleryContent() {
  const [activeImage, setActiveImage] = useState<null | {
    src: string;
    title: string;
    subtitle: string;
  }>(null);

  return (
    <main className="bg-black text-white">
      {/* hero */}
      <section className="border-b border-white/10 px-4 pb-12 pt-20 sm:px-6 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
            Gallery
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            บรรยากาศร้าน VIBES HOUSE
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-white/70 md:text-base">
            รวมภาพบรรยากาศร้าน มุมถ่ายรูป และ vibe จริงของ VIBES HOUSE
            สำหรับคนที่อยากดูฟีลร้านก่อนมานั่งชิล
          </p>
        </div>
      </section>

      {/* gallery grid */}
      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-300/[0.05] hover:shadow-[0_0_25px_rgba(250,204,21,0.12)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                    <p className="text-sm font-semibold text-white md:text-base">
                      {image.title}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-yellow-300/90 md:text-xs">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-0 top-[-52px] rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
            >
              ปิด
            </button>

            <div
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="border-t border-white/10 px-4 py-4 md:px-6">
                <p className="text-lg font-bold text-white">
                  {activeImage.title}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-yellow-300/90">
                  {activeImage.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}