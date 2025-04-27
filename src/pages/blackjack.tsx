'use client';

import '../styles/globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';

export default function TableauBlackjack() {
  // Données du tableau (extraites et traduites du PDF)
  const colonnes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "As"];
  
  const lignes = [
    { main: "5-8", actions: ["Tirer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "9", actions: ["Tirer", "Doubler", "Doubler", "Doubler", "Doubler", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "10", actions: ["Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Tirer", "Tirer"] },
    { main: "11", actions: ["Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Tirer"] },
    { main: "12", actions: ["Tirer", "Tirer", "Rester", "Rester", "Rester", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "13-16", actions: ["Rester", "Rester", "Rester", "Rester", "Rester", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "17+", actions: ["Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester"] },
    { main: "A,2 / A,3", actions: ["Tirer", "Tirer", "Tirer", "Doubler", "Doubler", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "A,4 / A,5", actions: ["Tirer", "Tirer", "Doubler", "Doubler", "Doubler", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "A,6", actions: ["Tirer", "Doubler", "Doubler", "Doubler", "Doubler", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "A,7", actions: ["Rester", "Doubler", "Doubler", "Doubler", "Doubler", "Rester", "Rester", "Tirer", "Tirer", "Tirer"] },
    { main: "A,8 / A,9", actions: ["Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester"] },
    { main: "2,2 / 3,3", actions: ["Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "4,4", actions: ["Tirer", "Tirer", "Tirer", "Séparer", "Séparer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "5,5", actions: ["Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Doubler", "Tirer", "Tirer"] },
    { main: "6,6", actions: ["Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Tirer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "7,7", actions: ["Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Tirer", "Tirer", "Tirer", "Tirer"] },
    { main: "8,8", actions: ["Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer"] },
    { main: "9,9", actions: ["Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Rester", "Séparer", "Séparer", "Rester", "Rester"] },
    { main: "10,10", actions: ["Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester", "Rester"] },
    { main: "A,A", actions: ["Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer", "Séparer"] },
  ];

  // Fonction pour colorier selon l'action
  const getColor = (action: string) => {
    switch (action) {
      case "Tirer": return "text-yellow-400";
      case "Rester": return "text-green-400";
      case "Doubler": return "text-purple-400";
      case "Séparer": return "text-blue-400";
      case "Abandonner": return "text-red-400";
      default: return "text-white";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white mb-2">Tableau Stratégie Blackjack</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Utilise ce tableau pour maximiser tes chances de battre le croupier selon ta main et la carte visible du croupier.
        </p>
      </section>

      {/* TABLEAU */}
      <main className="flex-1 p-8 w-full">
  <div className="overflow-x-auto w-full rounded-lg">
    <motion.table
      className="min-w-[1200px] table-auto mx-auto border-collapse shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <thead className="bg-[#151b2a]">
        <tr>
          <th className="border border-gray-700 p-4 text-white">Main du joueur</th>
          {colonnes.map((col, index) => (
            <th key={index} className="border border-gray-700 p-4 text-white">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lignes.map((ligne, i) => (
          <tr key={i} className="hover:bg-[#1f2937] transition">
            <td className="border border-gray-700 p-4 font-bold">{ligne.main}</td>
            {ligne.actions.map((action, j) => (
              <td key={j} className={`border border-gray-700 p-4 font-semibold ${getColor(action)}`}>
                {action}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </motion.table>
  </div>
</main>


      {/* FOOTER */}
      <Footer />

    </div>
  );
}
