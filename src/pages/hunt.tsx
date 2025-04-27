// src/app/tableau-hunt/page.tsx

"use client";

import "../styles/globals.css"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TableauHunt() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col justify-center items-center text-center p-8">
        <motion.h1 
          className="text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎰 Tableau Hunt en maintenance
        </motion.h1>

        <motion.p 
          className="text-gray-400 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nous travaillons sur la création du meilleur tableau de Hunt possible
          pour maximiser vos bonus openings. Merci de votre patience ! 🚀
        </motion.p>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
