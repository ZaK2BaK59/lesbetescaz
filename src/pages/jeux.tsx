'use client';

import '../styles/globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Jeux() {
  const jeux = [
    {
      nom: "Plinko",
      description: "Lâche une bille sur un mur de clous et vise les multiplicateurs les plus élevés !",
      image: "/images/plinko.png", // Placeholder, change quand tu auras des vraies images
    },
    {
      nom: "Mines",
      description: "Retourne les cases sans tomber sur une bombe pour multiplier tes gains Dinero !",
      image: "/images/mines.png",
    },
    {
      nom: "HiLo",
      description: "Devine si la prochaine carte sera plus haute ou plus basse et enchaîne les gains !",
      image: "/images/hilo.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white mb-4">Jeux</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Découvrez bientôt nos jeux exclusifs pour gagner des Dinero et grimper dans les classements !
        </p>
      </section>

      {/* JEUX */}
      <main className="flex-1 p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {jeux.map((jeu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-[#151b2a] p-6 rounded-lg shadow-lg flex flex-col items-center text-center group overflow-hidden"
          >
            {/* Image */}
            <div className="w-32 h-32 mb-4 relative opacity-50 grayscale group-hover:opacity-75 group-hover:grayscale-0 transition-all">
              <Image
                src={jeu.image}
                alt={jeu.nom}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Titre */}
            <h2 className="text-2xl font-bold text-purple-400 mb-2">{jeu.nom}</h2>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">{jeu.description}</p>

            {/* Bientôt disponible */}
            <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded">
              Bientôt dispo
            </div>

            {/* Overlay sombre pour effet désactivé */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg pointer-events-none"></div>
          </motion.div>
        ))}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
