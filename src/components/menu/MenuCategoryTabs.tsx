"use client";

type Category = {
  id: string;
  labelTh: string;
  labelEn: string;
};

export default function MenuCategoryTabs({
  categories,
  activeCategory,
  onChange,
}: {
  categories: Category[];
  activeCategory: string;
  onChange: (id: string) => void;
}) {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-3 py-2">
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

          <div className="flex w-max min-w-full justify-start md:justify-center">
            <div className="flex items-center gap-2">

              {categories.map((cat) => {
                const active = cat.id === activeCategory;

                return (
                  <button
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`group shrink-0 rounded-lg border px-3 py-2 transition-all duration-300 ${
                      active
                        ? "border-yellow-300/30 bg-yellow-300/[0.06]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <div className="text-center min-w-[72px]">

                      <p
                        className={`text-[13px] font-semibold ${
                          active
                            ? "text-yellow-300"
                            : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {cat.labelTh}
                      </p>

                      <p
                        className={`mt-1 text-[10px] ${
                          active
                            ? "text-yellow-200/70"
                            : "text-white/40"
                        }`}
                      >
                        {cat.labelEn}
                      </p>

                      <div
                        className={`mx-auto mt-1.5 h-[2px] rounded-full transition-all ${
                          active
                            ? "w-5 bg-yellow-300"
                            : "w-0 group-hover:w-4 group-hover:bg-white/30"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}