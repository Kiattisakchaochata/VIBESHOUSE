import Image from "next/image";

type Props = {
  nameTh: string;
  nameEn: string;
  price: number;
  image: string;
};

export default function MenuCard({
  nameTh,
  nameEn,
  price,
  image,
}: Props) {
  return (
    <div className="group rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden hover:border-yellow-300/40 transition-all duration-300">

      {/* รูป (ลดความสูงลง) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={nameTh}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="p-2.5">

        <p className="text-[14px] font-semibold text-white leading-tight">
          {nameTh}
        </p>

        <p className="mt-1 text-[11px] text-white/50">
          {nameEn}
        </p>

        <p className="mt-2 text-[13px] font-bold text-yellow-300">
          ฿{price}
        </p>

      </div>
    </div>
  );
}