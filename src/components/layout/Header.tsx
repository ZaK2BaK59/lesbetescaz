// src/components/layout/Header.tsx
import Link from "next/link";
import LogoCarousel from "../LogoCarousel";

export default function Header() {
  return (
    <header className="relative w-full max-w-7xl mx-auto h-[400px] mt-6">
      {/* Contenu du header avec fond dégradé subtil */}
      <div className="rounded-2xl p-5 absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-900 opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center py-12">
        {/* Titre et sous-titre */}
        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Bienvenue chez  LesBetesCaz
        </h1>
        <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Le duo le plus chaud du stream casino 🔥
        </p>
        <Link href="https://dlive.tv/LesBetesCaz">
  <div className="text-xl py-2 px-8 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full hover:opacity-90 transition-all">
    Découvrir nos lives
  </div>
</Link>

      </div>
      <section>
        <LogoCarousel />
      </section>
    </header>
  );
}
