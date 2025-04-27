// src/components/cards/CasinoCard.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCasinoPopup } from "@/contexts/CasinoPopupContext"; // 🟣 On importe proprement

type CardSize = "large" | "medium" | "small";

type CasinoCardProps = {
  logoSrc: string;
  bonusList: string[];
  infoId?: string; // 🟣 on utilise infoId au lieu de infoUrl
  joinUrl: string;
  label?: string;
  bgClass?: string; // ex: 'bg-gradient-to-r from-violet-700 to-purple-900'
  size?: CardSize;
};

const sizeClass: Record<CardSize, string> = {
  large: "lg:col-span-4 md:col-span-2",
  medium: "lg:col-span-2 sm:col-span-2",
  small: "col-span-1",
};

export default function CasinoCard({
  logoSrc,
  bonusList,
  infoId,
  joinUrl,
  label,
  bgClass = "bg-gradient-to-r from-violet-700 to-purple-900",
  size = "medium", // 🟢 Valeur par défaut
}: CasinoCardProps) {
  const { openCasinoPopup } = useCasinoPopup(); // 🟣 Hook du contexte

  return (
    <div
      className={cn(
        "relative rounded-2xl p-5 text-white shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]",
        "backdrop-blur-sm border border-white/10",
        bgClass,
        sizeClass[size]
      )}
    >
      {/* Badge EXCLUSIF en haut à droite */}
      {label && (
        <div className="absolute top-3 right-3 bg-white text-purple-700 text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm uppercase tracking-wide shadow-sm z-20">
          {label}
        </div>
      )}

      {/* Logo + nom du casino avec fond subtil */}
      <div className="flex items-center gap-3 mb-4 p-2 bg-white/20 backdrop-blur-sm rounded-md w-auto max-w-xs">
        <div className="w-12 h-12 relative">
          <Image
            src={logoSrc}
            alt="Casino logo"
            fill
            className="w-12 h-12 relative rounded-l-md"
          />
        </div>
        <span className="text-xl font-semibold text-white uppercase tracking-wide">
          Casino
        </span>
      </div>

      {/* Infos bonus avec typographie améliorée */}
      <div className="mb-6 space-y-1">
        {bonusList.map((bonus, i) => (
          <div key={i} className="text-3xl font-extrabold leading-tight text-center">
            {bonus}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex gap-2">
        {/* 🟣 Nouveau bouton "En savoir plus" qui ouvre le popup */}
        <button
  onClick={() => {
    if (infoId) {
      openCasinoPopup(infoId);
    }
  }}
  className="flex-1 text-sm text-white bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-md text-center font-medium backdrop-blur-sm"
>
  En savoir plus
</button>



        {/* Bouton rejoindre */}
        <Link
          href={joinUrl}
          target="_blank"
          className="flex-1 text-sm text-black bg-white hover:bg-gray-100 transition px-4 py-2 rounded-md text-center font-semibold"
        >
          Rejoindre
        </Link>
      </div>
    </div>
  );
}
