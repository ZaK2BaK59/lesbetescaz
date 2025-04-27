'use client';

import '../styles/globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import { motion } from 'framer-motion'; // Animation smooth d'apparition

export default function Progression() {
  const userData = {
    username: 'LesBetesCaz#001',
    avatar: '/images/avatar.png',
    level: 7,
    streamHours: 23,
    messagesSent: 450,
    siteMinutes: 780,
    dineroPlayed: 4200,
    dineroSpent: 1800,
  };

  const streamProgress = Math.min((userData.streamHours / 50) * 100, 100);
  const messagesProgress = Math.min((userData.messagesSent / 1000) * 100, 100);
  const siteProgress = Math.min((userData.siteMinutes / 1500) * 100, 100);
  const dineroPlayedProgress = Math.min((userData.dineroPlayed / 10000) * 100, 100);
  const dineroSpentProgress = Math.min((userData.dineroSpent / 5000) * 100, 100);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white mb-2">Progression</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Suis ta montée en niveau en jouant, en participant aux streams et en utilisant tes Dinero !
        </p>
      </section>

      {/* PROFIL */}
      <section className="flex flex-col items-center bg-[#151b2a] rounded-lg shadow-lg p-10 max-w-3xl mx-auto my-10">
        <div className="relative w-28 h-28 mb-4">
          <Image
            src={userData.avatar}
            alt="Avatar utilisateur"
            width={112}
            height={112}
            className="rounded-full object-cover border-4 border-purple-400"
            unoptimized
          />
        </div>
        <h2 className="text-2xl font-bold">{userData.username}</h2>
        <p className="text-purple-400 mt-2 text-lg">Niveau {userData.level}</p>
      </section>

      {/* STATISTIQUES */}
      <main className="flex-1 p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Carte Stream Watching */}
        <motion.div 
          className="bg-[#151b2a] rounded-lg p-8 shadow-lg min-h-[220px]" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Visionnage Stream</h3>
          <p className="text-gray-400 mb-4">{userData.streamHours} heures regardées</p>
          <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden mb-2">
            <div className="bg-purple-500 h-full transition-all" style={{ width: `${streamProgress}%` }}></div>
          </div>
          <p className="text-sm text-right text-gray-400">{streamProgress.toFixed(0)}%</p>
        </motion.div>

        {/* Carte Messages envoyés */}
        <motion.div 
          className="bg-[#151b2a] rounded-lg p-8 shadow-lg min-h-[220px]" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Messages envoyés</h3>
          <p className="text-gray-400 mb-4">{userData.messagesSent} messages envoyés</p>
          <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden mb-2">
            <div className="bg-purple-400 h-full transition-all" style={{ width: `${messagesProgress}%` }}></div>
          </div>
          <p className="text-sm text-right text-gray-400">{messagesProgress.toFixed(0)}%</p>
        </motion.div>

        {/* Carte Temps sur Site */}
        <motion.div 
          className="bg-[#151b2a] rounded-lg p-8 shadow-lg min-h-[220px]" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Temps passé sur le site</h3>
          <p className="text-gray-400 mb-4">{Math.floor(userData.siteMinutes / 60)}h {userData.siteMinutes % 60}m passés</p>
          <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden mb-2">
            <div className="bg-green-500 h-full transition-all" style={{ width: `${siteProgress}%` }}></div>
          </div>
          <p className="text-sm text-right text-gray-400">{siteProgress.toFixed(0)}%</p>
        </motion.div>

        {/* Carte Dinero Joués */}
        <motion.div 
          className="bg-[#151b2a] rounded-lg p-8 shadow-lg min-h-[220px]" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Dinero joués</h3>
          <p className="text-gray-400 mb-4">{userData.dineroPlayed} Dinero utilisés</p>
          <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden mb-2">
            <div className="bg-yellow-400 h-full transition-all" style={{ width: `${dineroPlayedProgress}%` }}></div>
          </div>
          <p className="text-sm text-right text-gray-400">{dineroPlayedProgress.toFixed(0)}%</p>
        </motion.div>

        {/* Carte Dinero Dépensés (grande carte sur 2 colonnes) */}
        <motion.div 
          className="bg-[#151b2a] rounded-lg p-8 shadow-lg min-h-[220px] col-span-1 md:col-span-2" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Dinero dépensés en boutique</h3>
          <p className="text-gray-400 mb-4">{userData.dineroSpent} Dinero dépensés</p>
          <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden mb-2">
            <div className="bg-orange-400 h-full transition-all" style={{ width: `${dineroSpentProgress}%` }}></div>
          </div>
          <p className="text-sm text-right text-gray-400">{dineroSpentProgress.toFixed(0)}%</p>
        </motion.div>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
