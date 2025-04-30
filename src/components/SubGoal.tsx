"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ThemeType =
  | "default"
  | "kawaii"
  | "dark"
  | "love"
  | "gold"
  | "casino"
  | "gaming"
  | "cyber";

  export default function SubGoal() {
    const [goal, setGoal] = useState(200);
    const [current, setCurrent] = useState(123);
    const [label, setLabel] = useState("Objectif de Subs");
    const [endDate, setEndDate] = useState("2025-06-01");
    const [color, setColor] = useState("#bfa567");
    const [style, setStyle] = useState<"bar" | "rounded">("rounded");
    const [font, setFont] = useState("sans");
    const [theme, setTheme] = useState<ThemeType>("default");
  
    const percent = Math.min((current / goal) * 100, 100);
  
    const fontClass = {
      sans: "font-sans",
      mono: "font-mono",
      fancy: "font-extrabold italic",
      pixel: "tracking-widest uppercase",
      cute: "font-bold text-pink-300 animate-pulse",
    }[font];
  
    const themeStyles: Record<ThemeType, string> = {
      default: "bg-[#2a3345] text-white",
      kawaii: "bg-pink-100 text-pink-800 border-2 border-pink-400 shadow-inner",
      dark: "bg-black text-red-500 border border-red-500",
      love: "bg-red-100 text-red-700 border border-red-400",
      gold: "bg-yellow-100 text-yellow-900 border border-yellow-500 animate-pulse",
      casino: "bg-green-900 text-yellow-300 border border-yellow-400 shadow-md",
      gaming: "bg-blue-950 text-green-300 border border-green-400 shadow-inner",
      cyber: "bg-[#0f172a] text-cyan-400 border border-cyan-600 shadow-lg",
    };
  
    const shapeStyle = {
      bar: "",
      rounded: "rounded-full",
    }[style];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in-up"> Sub Goal</h1>

      {/* Prévisualisation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-6 p-4 rounded-xl shadow-lg transition-all duration-500 ${themeStyles[theme]}`}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`mb-2 text-xl ${fontClass}`}
        >
          {theme === "love" ? "❤️ " : ""}
          {label}
          {theme === "kawaii" ? " 🌸" : ""}
          {theme === "casino" ? " 🎰" : ""}
          {theme === "gaming" ? " 🎮" : ""}
          {theme === "cyber" ? " 🧬" : ""}
        </motion.p>

        <div className={`w-full bg-gray-700 h-8 overflow-hidden transition-all ${shapeStyle}`}>
          <motion.div
            className={`h-8 text-xs font-bold text-white text-center leading-8 transition-all duration-500 ease-in-out ${fontClass}`}
            style={{
              width: `${percent}%`,
              backgroundColor: color,
            }}
            whileHover={{ scale: 1.03 }}
          >
            {current} / {goal}
          </motion.div>
        </div>

        <p className="text-sm mt-2 text-gray-400">Objectif jusqu’au {endDate}</p>
      </motion.div>

      {/* Formulaire */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-xl space-y-4">
        <div>
          <label className="block mb-1">Titre / Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Objectif total</label>
            <input
              type="number"
              min={1}
              value={goal}
              onChange={(e) => setGoal(parseInt(e.target.value))}
              className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1">Progression actuelle</label>
            <input
              type="number"
              min={0}
              value={current}
              onChange={(e) => setCurrent(parseInt(e.target.value))}
              className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">Date de fin</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-1">Couleur de la barre</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-10 bg-transparent border-none cursor-pointer"
          />
        </div>
        <div>
          <label className="block mb-1">Style de forme</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as "bar" | "rounded")}

            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          >
            <option value="bar">Barre simple</option>
            <option value="rounded">Arrondie</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Police &apos;écriture</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          >
            <option value="sans">Classique</option>
            <option value="mono">Monospace</option>
            <option value="fancy">Stylé</option>
            <option value="pixel">Pixel</option>
            <option value="cute">Kawaii</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Thème visuel</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as ThemeType)}

            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          >
            <option value="default">Classique</option>
            <option value="kawaii">🌸 Kawaii</option>
            <option value="dark">🔥 Dark</option>
            <option value="love">❤️ Love</option>
            <option value="gold">✨ Gold</option>
            <option value="casino">🎰 Casino</option>
            <option value="gaming">🎮 Gaming</option>
            <option value="cyber">🧬 Cyber</option>
          </select>
        </div>
      </div>
    </div>
  );
}
