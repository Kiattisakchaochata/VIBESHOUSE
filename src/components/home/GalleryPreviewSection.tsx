"use client";

import { motion } from "framer-motion";
import { galleryImages } from "@/data/home";

export default function GalleryPreviewSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 pb-20 pt-10 md:px-10 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              บรรยากาศจริงของ VIBES HOUSE
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              รวมภาพมุมต่างๆ ของร้าน บรรยากาศจริง ฟีลจริง
              สำหรับสายชิลที่อยากเห็น vibe ก่อนมานั่ง
            </p>
          </div>

          <a
            href="/gallery"
            className="hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white md:inline-flex"
          >
            ดูทั้งหมด
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <motion.a
              key={image}
              href="/gallery"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-[240px] overflow-hidden sm:h-[280px] md:h-[320px]">
                <img
                  src={image}
                  alt={`บรรยากาศร้าน ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/0" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <a
            href="/gallery"
            className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white"
          >
            ดูทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}