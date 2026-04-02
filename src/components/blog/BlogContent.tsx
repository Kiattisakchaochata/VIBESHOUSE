"use client";

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "5 เหตุผลที่ VIBES HOUSE เป็นร้านนั่งชิลที่ต้องมาลอง",
    excerpt:
      "รวมเหตุผลว่าทำไมสายชิล สายดนตรีสด และสาย hangout ถึงชอบบรรยากาศของ VIBES HOUSE",
    image: "/images/blog-1.jpg",
    category: "แนะนำร้าน",
    date: "10 Aug 2026",
  },
  {
    id: 2,
    title: "รวมมุมถ่ายรูปในร้าน ที่สายคอนเทนต์ห้ามพลาด",
    excerpt:
      "ใครชอบถ่ายรูปหรือทำคอนเทนต์ ต้องไม่พลาดมุมสวย ๆ และแสงดี ๆ ภายในร้าน",
    image: "/images/blog-2.jpg",
    category: "บรรยากาศร้าน",
    date: "12 Aug 2026",
  },
  {
    id: 3,
    title: "เมนูแนะนำสำหรับนั่งชิลกับเพื่อนในคืนพิเศษ",
    excerpt:
      "รวมเมนูอาหาร เครื่องดื่ม และของทานเล่นที่เหมาะกับการสั่งมาแชร์กับแก๊งเพื่อน",
    image: "/images/blog-3.jpg",
    category: "เมนูแนะนำ",
    date: "15 Aug 2026",
  },
  {
    id: 4,
    title: "ร้านนั่งชิลบางแสน เลือกยังไงให้ได้ทั้งบรรยากาศและความคุ้ม",
    excerpt:
      "แนะนำวิธีเลือกร้านนั่งชิลให้ตอบโจทย์ทั้งเรื่องฟีลร้าน เพลง อาหาร และความสะดวก",
    image: "/images/blog-4.jpg",
    category: "SEO Article",
    date: "18 Aug 2026",
  },
  {
    id: 5,
    title: "โปรโมชันประจำเดือนของ VIBES HOUSE",
    excerpt:
      "อัปเดตโปรโมชันใหม่ของร้าน ทั้งเมนูพิเศษและดีลสำหรับสายชิลที่อยากได้ความคุ้ม",
    image: "/images/blog-5.jpg",
    category: "โปรโมชัน",
    date: "20 Aug 2026",
  },
  {
    id: 6,
    title: "ดนตรีสดช่วยเปลี่ยนบรรยากาศการนั่งชิลได้ยังไง",
    excerpt:
      "พาไปดูว่าทำไมดนตรีสดถึงเป็นหนึ่งในเสน่ห์สำคัญที่ทำให้ร้านนั่งชิลมีชีวิตชีวามากขึ้น",
    image: "/images/blog-6.jpg",
    category: "ดนตรีสด",
    date: "22 Aug 2026",
  },
];

export default function BlogContent() {
  return (
    <main className="bg-black text-white">
      {/* hero */}
      <section className="border-b border-white/10 px-4 pb-12 pt-20 sm:px-6 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
            Blog & News
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            ข่าวสารและบทความของ VIBES HOUSE
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-white/70 md:text-base">
            รวมข่าวสาร โปรโมชัน และบทความที่เกี่ยวกับร้าน
            เพื่อให้ลูกค้าได้อัปเดตความเคลื่อนไหวและค้นพบเรื่องน่าสนใจของ VIBES HOUSE
          </p>
        </div>
      </section>

      {/* featured */}
      <section className="border-b border-white/10 px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* card 1 */}
            <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 66vw"
                  priority
                  className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-yellow-300/20 bg-yellow-300 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-black shadow-lg">
                  {blogPosts[0].category}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    {blogPosts[0].date}
                  </p>

                  <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white md:text-3xl">
                    {blogPosts[0].title}
                  </h2>
                </div>
              </div>

              <div className="p-5 pt-4 md:p-6 md:pt-5">
                <p className="text-sm leading-8 text-white/70 md:text-base">
                  {blogPosts[0].excerpt}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex rounded-full border border-yellow-300/30 bg-yellow-300 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-yellow-200"
                >
                  อ่านต่อ
                </button>
              </div>
            </article>

            {/* cards 2-3 */}
            <div className="grid gap-5">
              {blogPosts.slice(1, 3).map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_24px_rgba(250,204,21,0.12)]"
                >
                  <div className="grid h-full md:grid-cols-[220px_1fr]">
                    <div className="relative min-h-[220px] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 767px) 100vw, 220px"
                        className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute left-3 top-3 rounded-full border border-yellow-300/20 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-300 backdrop-blur-sm">
                        {post.category}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-5 md:p-6">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                          {post.date}
                        </p>

                        <h3 className="mt-3 text-xl font-bold leading-snug text-white md:text-[22px]">
                          {post.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/65">
                          {post.excerpt}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="mt-5 inline-flex text-sm font-semibold text-yellow-300 transition hover:text-yellow-200"
                      >
                        อ่านต่อ →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* blog grid */}
      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Latest Posts
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-4xl">
                บทความล่าสุด
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.slice(3).map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(250,204,21,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
                    <span className="text-yellow-300">{post.category}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/40">{post.date}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {post.excerpt}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex text-sm font-semibold text-yellow-300 transition hover:text-yellow-200"
                  >
                    อ่านต่อ →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}