"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "เกี่ยวกับร้าน", href: "/about" },
  { label: "เมนู", href: "/menu" },
  { label: "บรรยากาศร้าน", href: "/gallery" },
  { label: "บทความ", href: "/blog" },
  { label: "ติดต่อ", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-yellow-300 transition duration-200 hover:opacity-90"
        >
          VIBES HOUSE
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1.5 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  "after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-yellow-300 after:transition-all after:duration-200",
                  isActive
                    ? "bg-white/[0.06] text-white after:w-6"
                    : "text-white/70 hover:bg-white/[0.05] hover:text-white hover:after:w-4 active:scale-95",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0999999999"
            className="hidden items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300 px-5 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-200 active:scale-95 md:inline-flex"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
              ✆
            </span>
            โทรเลย
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.06] active:scale-95 md:hidden"
            aria-label="toggle menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/[0.07] text-white"
                      : "text-white/75 hover:bg-white/[0.05] hover:text-white active:scale-[0.98]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="tel:0999999999"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-200 active:scale-95"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-yellow-300">
                ✆
              </span>
              โทรเลย
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}