"use client";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ContactContent() {
  const phone = "099-999-9999";

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-4 pb-10 pt-14 sm:px-6 md:pb-14 md:pt-18">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-300">
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            ติดต่อ VIBES HOUSE
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
            สอบถามเส้นทาง เวลาเปิดร้าน และข้อมูลการติดต่อของร้านได้ที่นี่
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-6 xl:grid-cols-[1.12fr_0.88fr]">
            {/* Left - Map */}
            <div className="flex h-full min-h-[820px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_rgba(0,0,0,0.45)] xl:min-h-0">
              <div className="border-b border-white/10 px-5 py-5 md:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                  MAP
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight md:text-[42px]">
                  แผนที่ร้าน
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                  ดูตำแหน่งร้านเพื่อใช้ประกอบการเดินทางมายัง VIBES HOUSE
                </p>
              </div>

              <div className="relative flex-1 overflow-hidden bg-black">
                <iframe
                  title="VIBES HOUSE Map"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=th&q=13.2818,100.9226&z=16&ie=UTF8&iwloc=B&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />
              </div>
            </div>

            {/* Right - Info */}
            <div className="grid h-full gap-5">
              {/* Phone Card */}
              <div className="rounded-[28px] border border-yellow-400/20 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
                  เบอร์โทร
                </p>

                <h2 className="mt-3 text-[40px] font-black tracking-tight md:text-[52px]">
                  {phone}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/65 md:text-[15px]">
                  โทรสอบถามเส้นทาง จองโต๊ะ หรือสอบถามโปรโมชั่นของร้านได้โดยตรง
                </p>
              </div>

              {/* Hours Card */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
                  เวลาเปิดร้าน
                </p>

                <h3 className="mt-3 text-[28px] font-black tracking-tight md:text-[34px]">
                  เปิดทุกวัน 18:00 - 00:00 น.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 md:text-[15px]">
                  เหมาะสำหรับนัดเพื่อนหลังเลิกงาน มานั่งชิลช่วงเย็น
                  และฟังดนตรีสดในตอนค่ำ
                </p>
              </div>

              {/* Address Card */}
              <div className="rounded-[28px] border border-yellow-400/20 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
                  ที่ตั้งร้าน
                </p>

                <h3 className="mt-3 text-[28px] font-black tracking-tight md:text-[34px]">
                  Vibe House @Bangsaen
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70 md:text-[15px]">
                  146 1, Tambon Saen Suk, Amphoe Mueang Chon Buri,
                  Chang Wat Chon Buri 20130, Thailand
                </p>
              </div>

              {/* Social Card */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
                  ช่องทางติดตาม
                </p>

                <h3 className="mt-3 text-[28px] font-black tracking-tight md:text-[34px]">
                  Follow VIBES HOUSE
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 md:text-[15px]">
                  ติดตามข่าวสาร โปรโมชั่น และบรรยากาศร้านได้ผ่านโซเชียลของเรา
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <FaFacebookF size={16} />
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="https://tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <FaTiktok size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}