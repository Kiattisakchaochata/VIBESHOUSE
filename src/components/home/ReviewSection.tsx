"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/home";

export default function ReviewSection() {
  return (
    <section className="bg-[#111111] px-6 pb-20 pt-10 md:px-10 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
            คนที่มาแล้วรู้สึกยังไง
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            เสียงจากลูกค้าที่มาสัมผัสบรรยากาศจริงของร้าน
            เพื่อให้เห็นภาพว่าที่นี่เหมาะกับการนัดเพื่อนและมานั่งชิลแค่ไหน
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="text-sm tracking-[0.2em] text-yellow-300">
                ★★★★★
              </div>

              <p className="mt-5 text-sm leading-8 text-white/75 md:text-base">
                “{review.text}”
              </p>

              <div className="mt-6 h-px w-full bg-white/10" />

              <p className="mt-5 text-sm font-semibold text-white/90">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}