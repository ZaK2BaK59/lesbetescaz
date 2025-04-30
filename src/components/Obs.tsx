"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const mockCalls = [
  {
    id: 1,
    user: "Neylo",
    avatar: "/avatars/1.png",
    call: "Tente la Sweet Bonanza frero !",
  },
  {
    id: 2,
    user: "Choco",
    avatar: "/avatars/2.png",
    call: "Fais une Pragmatic sérieuse !",
  },
  {
    id: 3,
    user: "ZeRo",
    avatar: "/avatars/3.png",
    call: "Essaie Money Train 3 !",
  },
];

export default function Obs() {
  const [calls, setCalls] = useState<typeof mockCalls>([]);
  const [theme, setTheme] = useState("dark");
  const [bgColor, setBgColor] = useState("#1e2638");
  const [font, setFont] = useState("sans");

  useEffect(() => {
    setCalls(mockCalls);
    const interval = setInterval(() => {
      const id = Math.random();
      const randomUser = {
        id,
        user: "Viewer" + Math.floor(Math.random() * 1000),
        avatar: "/avatars/4.png",
        call: "Essaye Book of Dead !",
      };
      setCalls((prev) => [...prev.slice(-9), randomUser]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

 

  const themeLabel = {
    love: "❤️ ",
    kawaii: "🌸 ",
    casino: "🎰 ",
    gaming: "🎮 ",
    cyber: "🧬 ",
  }[theme] || "";

  const fontClass = {
    sans: "font-sans",
    fancy: "font-extrabold italic",
    pixel: "tracking-widest uppercase",
    mono: "font-mono",
    cute: "font-bold text-pink-300 animate-pulse",
  }[font] || "font-sans";

  return (
    <div className="w-full min-h-screen p-4 bg-transparent">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div>
          <label className="text-white mr-2">Thème :</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-[#1e2638] text-white border border-gray-600 rounded p-2"
          >
            <option value="dark">Dark</option>
            <option value="kawaii">🌸 Kawaii</option>
            <option value="love">❤️ Love</option>
            <option value="casino">🎰 Casino</option>
            <option value="gaming">🎮 Gaming</option>
            <option value="cyber">🧬 Cyber</option>
          </select>
        </div>
        <div>
          <label className="text-white mr-2">Police :</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="bg-[#1e2638] text-white border border-gray-600 rounded p-2"
          >
            <option value="sans">Classique</option>
            <option value="fancy">Stylé</option>
            <option value="pixel">Pixel</option>
            <option value="mono">Monospace</option>
            <option value="cute">Kawaii</option>
          </select>
        </div>
        <div>
          <label className="text-white mr-2">Couleur de fond :</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-10 h-10 bg-transparent border-none cursor-pointer"
          />
        </div>
      </div>

      {/* Marquee style call display */}
      <div className="overflow-hidden whitespace-nowrap rounded-xl border border-purple-600" style={{ backgroundColor: bgColor }}>
        <div className="inline-flex animate-marquee space-x-8 py-2 px-4">
          {calls.map((call) => (
            <motion.div
              key={call.id}
              className={`flex items-center gap-2 px-4 py-1 rounded ${fontClass} bg-white/10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={call.avatar}
                alt={call.user}
                width={32}
                height={32}
                className="rounded-full border border-white"
              />
              <span className="text-sm">
                {themeLabel}
                <strong>{call.user}</strong>: {call.call}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
