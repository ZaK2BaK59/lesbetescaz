"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


function getMonday() {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // lundi
    return new Date(today.setDate(diff)).toLocaleDateString("fr-FR");
  }
  
  function getSunday() {
    const monday = new Date(getMonday());
    return new Date(monday.setDate(monday.getDate() + 6)).toLocaleDateString("fr-FR");
  }
  
const mockData = {
  day: [
    { name: "Neylo", amount: 45, avatar: "/avatars/1.png" },
    { name: "Choco", amount: 30, avatar: "/avatars/2.png" },
    { name: "ZeRo", amount: 22, avatar: "/avatars/3.png" },
    { name: "Mina", amount: 18, avatar: "/avatars/4.png" },
    { name: "Ghost", amount: 10, avatar: "/avatars/5.png" },
  ],
  week: [
    { name: "ZeRo", amount: 120, avatar: "/avatars/3.png" },
    { name: "Neylo", amount: 105, avatar: "/avatars/1.png" },
    { name: "Ghost", amount: 72, avatar: "/avatars/5.png" },
    { name: "Mina", amount: 65, avatar: "/avatars/4.png" },
    { name: "Flow", amount: 55, avatar: "/avatars/2.png" },
  ],
  month: [
    { name: "Ghost", amount: 340, avatar: "/avatars/5.png" },
    { name: "Neylo", amount: 300, avatar: "/avatars/1.png" },
    { name: "Mina", amount: 245, avatar: "/avatars/4.png" },
    { name: "Choco", amount: 210, avatar: "/avatars/2.png" },
    { name: "ZeRo", amount: 190, avatar: "/avatars/3.png" },
  ],
};

export default function Donateur() {
  const [period, setPeriod] = useState<"day" | "week" | "month">("day");
  const [topDonators, setTopDonators] = useState(mockData.day);

  useEffect(() => {
    setTopDonators(mockData[period]);
  }, [period]);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">🏆 Meilleurs Donateurs</h1>
<p className="text-gray-400 mb-6">
  {
    period === "day"
      ? `Aujourd’hui – ${new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`
      : period === "week"
      ? `Semaine du ${getMonday()} – ${getSunday()}`
      : `Mois de ${new Date().toLocaleDateString("fr-FR", {
          month: "long",
          year: "numeric",
        })}`
  }
</p>


      {/* Filtres */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPeriod("day")}
          className={`px-4 py-2 rounded ${
            period === "day" ? "bg-purple-600" : "bg-[#1e2638]"
          }`}
        >
          Aujourd’hui
        </button>
        <button
          onClick={() => setPeriod("week")}
          className={`px-4 py-2 rounded ${
            period === "week" ? "bg-purple-600" : "bg-[#1e2638]"
          }`}
        >
          Cette semaine
        </button>
        <button
          onClick={() => setPeriod("month")}
          className={`px-4 py-2 rounded ${
            period === "month" ? "bg-purple-600" : "bg-[#1e2638]"
          }`}
        >
          Ce mois-ci
        </button>
      </div>

      {/* Liste des donateurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topDonators.map((donator, index) => (
          <motion.div
            key={donator.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1e2638] rounded-xl p-4 flex items-center gap-4 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-2xl font-bold text-purple-400 w-6">
              #{index + 1}
            </div>
            <Image
  src={donator.avatar}
  alt={donator.name}
  width={48}
  height={48}
  className="rounded-full border-2 border-purple-600"
/>

            <div className="flex-1">
              <div className="text-lg font-semibold">{donator.name}</div>
              <div className="text-sm text-gray-400">{donator.amount} 💸</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
