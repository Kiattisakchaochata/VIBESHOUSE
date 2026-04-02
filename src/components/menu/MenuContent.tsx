"use client";

import { useMemo, useState } from "react";
import MenuCard from "@/components/menu/MenuCard";
import MenuCategoryTabs from "@/components/menu/MenuCategoryTabs";
import { menuCategories, menuItems } from "@/data/menu";

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("pizza");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-black text-white">
      <MenuCategoryTabs
        categories={menuCategories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <section className="px-4 py-6 md:px-6 md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}