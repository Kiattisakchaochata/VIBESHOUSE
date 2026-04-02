import { features } from "@/data/home";

export default function FeatureSection() {
  return (
    <section className="bg-[#111111] px-6 pb-20 pt-10 md:px-10 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            ทำไมสายชิลต้องมาที่ VIBES HOUSE
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-white/70 sm:text-base">
            ร้านนั่งชิลสำหรับวัยรุ่น บรรยากาศดี ดนตรีสดทุกคืน
            และมีมุมที่เหมาะทั้งสำหรับนัดเพื่อนและนั่งเพลินๆ
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}