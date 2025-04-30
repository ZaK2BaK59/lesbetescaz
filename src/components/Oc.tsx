"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mockMessages = [
  {
    id: 1,
    user: "Neylo",
    avatar: "/avatars/1.png",
    message: "Salut tout le monde 👋",
  },
  {
    id: 2,
    user: "Choco",
    avatar: "/avatars/2.png",
    message: "Cette machine elle va payer j'le sens !",
  },
  {
    id: 3,
    user: "ZeRo",
    avatar: "/avatars/3.png",
    message: "Allez Maxwin c'est maintenant 🍀",
  },
];

export default function Oc() {
  const [messages, setMessages] = useState<typeof mockMessages>([]);
  const [theme, setTheme] = useState("dark");
  const [bgColor, setBgColor] = useState("#1e2638");
  const [font, setFont] = useState("sans");

  useEffect(() => {
    setMessages(mockMessages);
    const interval = setInterval(() => {
      const id = Math.random();
      const randomMsg = {
        id,
        user: "Viewer" + Math.floor(Math.random() * 999),
        avatar: "/avatars/4.png",
        message: "Wow, beau spin ! 😍",
      };
      setMessages((prev) => [...prev.slice(-9), randomMsg]);
    }, 6000);
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
          <label className="text-white mr-2">Fond :</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-10 h-10 bg-transparent border-none cursor-pointer"
          />
        </div>
        <div>
  <label className="text-white mr-2">
    <input
      type="checkbox"
      checked={bgColor === "transparent"}
      onChange={(e) =>
        setBgColor(e.target.checked ? "transparent" : "#1e2638")
      }
      className="mr-1"
    />
    Fond transparent
  </label>
</div>

      </div>

      

      <div className="space-y-2 max-w-xl mx-auto">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 p-3 rounded-lg border border-white/10"
            style={{ backgroundColor: bgColor }}
          >
            <Image
              src={msg.avatar}
              alt={msg.user}
              width={36}
              height={36}
              className="rounded-full border border-white"
            />
            <div className={`text-sm ${fontClass}`}>
              <strong>{msg.user}</strong> : {themeLabel} {msg.message}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
