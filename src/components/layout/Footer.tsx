import Link from "next/link";
import { restaurantInfo } from "@/data/home";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      {/* main container */}
      <div className="mx-auto max-w-7xl px-6 pr-2 pt-12 pb-6 sm:px-8 sm:pr-4 md:px-10 md:pr-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_0.9fr]">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-black text-yellow-300">
              {restaurantInfo.name}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-8 text-white/65 sm:text-base">
              {restaurantInfo.description}
            </p>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-lg font-bold text-white">ข้อมูลร้าน</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70 sm:text-base">
              <li>{restaurantInfo.address}</li>
              <li>{restaurantInfo.openHours}</li>
              <li>{restaurantInfo.phone}</li>
            </ul>
          </div>

          {/* Right */}
          <div className="md:pl-6">
            <h4 className="text-lg font-bold text-white">เมนูทางลัด</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm sm:text-base">
              <Link href="/menu" className="transition hover:text-yellow-300">
                เมนู
              </Link>
              <Link href="/gallery" className="transition hover:text-yellow-300">
                บรรยากาศร้าน
              </Link>
              <Link href="/contact" className="transition hover:text-yellow-300">
                ติดต่อร้าน
              </Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-8 border-t border-white/10 pt-4 text-sm text-white/40">
          © {new Date().getFullYear()} VIBES HOUSE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}