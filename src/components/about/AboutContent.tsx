"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const galleryImages = [
  "/images/about-1.jpg",
  "/images/about-2.jpg",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
];

export default function AboutContent() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const cards = useMemo(
    () => [
      {
        title: "บรรยากาศชิลจริง",
        description:
          "ร้านออกแบบให้โปร่ง นั่งสบาย เหมาะทั้งมากับเพื่อนและมานั่งพักหลังเลิกงาน",
      },
      {
        title: "ดนตรีสดทุกคืน",
        description:
          "เพิ่ม vibe ให้ทุกค่ำคืนมีชีวิตชีวา ฟังได้เพลินๆ และสนุกได้ในคืนพิเศษ",
      },
      {
        title: "เครื่องดื่มเย็น สด พร้อมเสิร์ฟ",
        description:
          "ไม่ว่าจะมาเพื่อชิล มาคุยงาน หรือมาสังสรรค์ ที่นี่ก็พร้อมตอบโจทย์",
      },
    ],
    []
  );

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/about-cover.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-24 text-center sm:px-6 md:pb-20 md:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-yellow-300 sm:text-xs"
          >
            About VIBES HOUSE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-6 max-w-5xl"
          >
            <span className="block text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
              ร้านนั่งชิลบางแสน
            </span>

            <span className="mt-3 block text-[clamp(2rem,4.2vw,4rem)] font-semibold leading-[1.16] tracking-[-0.03em] text-white/95">
              บรรยากาศดี ดนตรีสด
            </span>

            <span className="mt-3 block text-[clamp(1.8rem,3.6vw,3.3rem)] font-medium leading-[1.22] tracking-[-0.02em] text-white/82">
              และเครื่องดื่มเย็นๆ ในที่เดียว
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/68 md:text-lg md:leading-9"
          >
            VIBES HOUSE คือพื้นที่สำหรับสายชิลที่อยากมานั่งพักผ่อน
            ใช้เวลากับเพื่อน และสัมผัสบรรยากาศสนุกแบบสบายๆ
            ในคืนที่ไม่ธรรมดา
          </motion.p>
        </div>
      </section>

      {/* STORY + GALLERY */}
      <section className="border-b border-white/10 bg-[#0c0c0c] px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300 md:text-sm">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-black leading-[1.2] tracking-[-0.02em] sm:text-4xl md:text-5xl">
              เรื่องราวของ VIBES HOUSE
            </h2>

            <div className="mt-5 h-[3px] w-20 rounded-full bg-yellow-300/80" />

            <p className="mt-7 text-base leading-9 text-white/75 md:text-lg md:leading-9">
              VIBES HOUSE ถูกสร้างขึ้นเพื่อเป็นพื้นที่สำหรับคนที่อยากมานั่งพักผ่อน
              หลังเลิกงาน หรือใช้เวลาร่วมกับเพื่อนในบรรยากาศสบายๆ
              พร้อมดนตรีสดทุกคืนและเครื่องดื่มที่คัดสรรมาอย่างดี
            </p>

            <p className="mt-5 text-base leading-9 text-white/62 md:text-lg md:leading-9">
              ไม่ว่าคุณจะอยากมาฟังเพลง มานั่งคุยยาวๆ หรือมาหามุมถ่ายรูปสวยๆ
              ที่นี่คือหนึ่งในร้านที่ตอบโจทย์ความเป็นบางแสนสายชิลได้ครบ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left"
              >
                <div className="relative h-48 overflow-hidden sm:h-52 md:h-56">
                  <img
                    src={image}
                    alt={`บรรยากาศร้าน ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/0" />
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="border-b border-white/10 px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
          >
            <div className="relative h-[320px] md:h-[460px]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/about-cover.jpg"
              >
                <source src="/videos/about-vibes.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/35" />

              <div className="absolute inset-0 flex items-end">
                <div className="max-w-3xl px-6 pb-8 md:px-10 md:pb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300 md:text-sm">
                    vibe จริงของร้าน
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-[1.2] tracking-[-0.02em] md:text-5xl">
                    ทุกคืนมีเรื่องราวของมันเอง
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
                    ทั้งแสง สี เพลง ผู้คน และบรรยากาศในร้าน
                    คือสิ่งที่ทำให้ VIBES HOUSE ไม่ใช่แค่ร้านนั่งดื่ม
                    แต่เป็นที่ที่คนอยากกลับมาอีก
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-white/10 bg-[#0d0d0d] px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300 md:text-sm">
              จุดเด่นของร้าน
            </p>
            <h2 className="mt-4 text-3xl font-black leading-[1.2] tracking-[-0.02em] md:text-5xl">
              สิ่งที่ทำให้ VIBES HOUSE ไม่เหมือนเดิมๆ
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-8 text-white/70 md:text-base">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-6 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-12 text-center md:px-10"
        >
          <h2 className="text-3xl font-black leading-[1.2] tracking-[-0.02em] md:text-5xl">
            แล้วคุณจะหลงรักบรรยากาศที่นี่
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            แวะมาสัมผัส vibe จริงของ VIBES HOUSE ด้วยตัวคุณเอง
            แล้วคุณจะเข้าใจว่าทำไมหลายคนถึงเลือกที่นี่เป็นร้านประจำ
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex rounded-full border border-yellow-300/30 bg-yellow-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-yellow-200"
            >
              ดูแผนที่ร้าน
            </a>
            <a
              href="/gallery"
              className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              ดูบรรยากาศร้าน
            </a>
          </div>
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 px-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-5xl">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -right-2 -top-12 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            >
              ปิด
            </button>

            <img
              src={activeImage}
              alt="ภาพขยาย"
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}