"use client";

import '../styles/globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Clock, BarChart3, RefreshCw, Gamepad2 } from "lucide-react";

export default function ProgrammeVIP() {
  const ranks = [
    { name: "Gold I", locked: true },
    { name: "Gold II", locked: true },
    { name: "Gold III", locked: true },
    { name: "Gold IV", locked: true },
    { name: "Gold V", locked: true },
    { name: "Diamond I", locked: true },
    { name: "Diamond II", locked: true },
    { name: "Diamond III", locked: true },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white mb-4">Programme VIP</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Atteins des rangs exclusifs, gagne plus de Dinero et débloque des avantages uniques en participant activement !
        </p>
      </section>

      {/* RANKS SLIDER */}
<section className="px-8 max-w-7xl mx-auto py-8">
  <div className="flex flex-wrap justify-start gap-6 overflow-hidden">
    {ranks.map((rank, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="relative w-[140px] sm:w-[200px] h-36 bg-[#151b2a] rounded-xl shadow-md flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-lg font-bold text-purple-400">{rank.name}</h2>
        <p className="text-gray-400 text-xs mt-2">{rank.locked ? "🔒 Bloqué" : "Débloqué"}</p>
      </motion.div>
    ))}
  </div>
</section>



<section className="py-16 px-8 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">Avantages des Rangs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[ 
      {
        title: "Heures de visionnage requises", 
        description: "Regarde des streams et monte en niveau. Plus tu regardes, plus tu progresses !"
      },
      {
        title: "Bonus sur Dinero Shop", 
        description: "Obtiens des bonus sur chaque achat avec un pourcentage en fonction de ton rang VIP."
      },
      {
        title: "Accès à des Jeux Exclusifs", 
        description: "Les rangs les plus élevés te donnent accès à des jeux exclusifs pour encore plus de fun."
      },
      {
        title: "Roulette spéciale VIP", 
        description: "Participe à une roulette VIP et gagne des récompenses exclusives en plus !"
      }
    ].map((adv, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="bg-[#151b2a] p-6 rounded-lg shadow-md flex flex-col justify-between text-white"
      >
        <h3 className="text-xl font-semibold mb-4 text-purple-400">{adv.title}</h3>
        <p className="text-gray-400">{adv.description}</p>
      </motion.div>
    ))}
  </div>
</section>




      {/* COMMENT AMÉLIORER */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Comment progresser dans le Programme VIP ?</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[{
            icon: <Clock size={48} className="text-purple-400" />,
            title: "Regarde nos streams",
            description: "Chaque minute de visionnage t'aide à progresser dans ton programme VIP. Sois actif pour grimper plus vite !",
          }, {
            icon: <BarChart3 size={48} className="text-purple-400" />,
            title: "Suis ta progression",
            description: "Une barre de progression te montre à combien de % tu es pour atteindre ton prochain rang VIP.",
          }, {
            icon: <RefreshCw size={48} className="text-purple-400" />,
            title: "Utilise la Lucky Wheel",
            description: "Accède à des roues spéciales VIP pour tenter ta chance et remporter encore plus de Dinero chaque jour.",
          }, {
            icon: <Gamepad2 size={48} className="text-purple-400" />,
            title: "Joue sur le site",
            description: "Gagne des points en participant à nos mini-jeux Plinko, Mines et HiLo très bientôt disponibles.",
          }].map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-[#151b2a] p-8 rounded-lg flex items-center gap-6 shadow-md"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {sec.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">{sec.title}</h3>
                <p className="text-gray-400 text-sm">{sec.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
