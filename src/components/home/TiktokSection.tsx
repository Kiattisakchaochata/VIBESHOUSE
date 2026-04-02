import { tiktokVideos } from "@/data/tiktokVideos";

export default function TiktokSection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
            TikTok Review
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            รีวิวร้านจาก TikTok
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-white/70 md:text-base">
            รวมวิดีโอรีวิวบรรยากาศร้าน อาหาร เครื่องดื่ม และประสบการณ์จริงจากลูกค้า
            ที่มาเช็กอินที่ VIBES HOUSE
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-8">
          {tiktokVideos.map((video) => (
            <div key={video.id} className="w-full max-w-[260px] text-center">
              <div className="aspect-[9/16] w-full overflow-hidden rounded-[24px] bg-black">
                <iframe
                  src={video.embedUrl}
                  className="h-full w-full border-0"
                  allow="encrypted-media;"
                  allowFullScreen
                  loading="lazy"
                  title={video.title}
                />
              </div>

              <p className="mt-4 line-clamp-2 text-sm text-white/80">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}