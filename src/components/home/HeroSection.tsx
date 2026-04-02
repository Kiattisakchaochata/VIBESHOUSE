export default function HeroSection() {
  const cards = [
    {
      title: "MAP AND BRANCHES",
      subtitle: "แผนที่และสาขา",
      image: "/images/hero-card-1.jpg",
      href: "/contact",
    },
    {
      title: "BEER KITS",
      subtitle: "ชุดวัตถุดิบ และส่วนผสม",
      image: "/images/hero-card-2.jpg",
      href: "/menu",
    },
    {
      title: "ACADEMY",
      subtitle: "ศูนย์เรียนรู้การทำเบียร์",
      image: "/images/hero-card-3.jpg",
      href: "/about",
    },
  ];

  return (
    <section className="border-b border-white/10 bg-[#ffffff]">
      <div className="relative">
        <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:h-[430px]">
          <img
            src="/images/hero-main.jpg"
            alt="VIBES HOUSE hero"
            className="h-full w-full object-cover"
          />
          {/* ลดความมืดของภาพบน */}
          <div className="absolute inset-0 bg-white/5" />
        </div>

        <div className="relative mx-auto -mt-16 max-w-7xl px-4 pb-8 sm:-mt-20 sm:px-6 md:-mt-24 lg:-mt-28">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#141414] transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative h-[230px] sm:h-[260px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  {/* ลดความมืดของการ์ด */}
                  <div className="absolute inset-0 bg-black/18" />

                  {/* ช่วยให้ตัวหนังสืออ่านง่ายโดยไม่ต้องทำภาพมืด */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                    <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-white/95 sm:text-lg">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}