"use client";

import { useEffect, useState } from "react";

const defaultButtons = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  label: `Bouton ${i + 1}`,
  image: "",
  sound: "",
  key: "",
}));

export default function Sd() {
  const [buttons, setButtons] = useState(defaultButtons);

  // Gestion du bind clavier
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const match = buttons.find((b) => b.key === e.key);
      if (match && match.sound) {
        const audio = new Audio(match.sound);
        audio.play();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [buttons]);

  const updateButton = (id, field, value) => {
    setButtons((prev) =>
      prev.map((btn) => (btn.id === id ? { ...btn, [field]: value } : btn))
    );
  };

  const handleFileUpload = (e, id, field) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateButton(id, field, url);
    }
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎛️ StreamDeck Gratuit</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {buttons.map((btn) => (
          <div
            key={btn.id}
            className="bg-[#2a3345] p-4 rounded-xl shadow-lg flex flex-col items-center"
          >
            {btn.image && (
              <img
                src={btn.image}
                alt={btn.label}
                className="w-16 h-16 object-cover rounded mb-2"
              />
            )}
            <p className="text-center text-sm mb-2">{btn.label}</p>
            <input
              type="text"
              placeholder="Label"
              value={btn.label}
              onChange={(e) => updateButton(btn.id, "label", e.target.value)}
              className="w-full mb-1 p-1 rounded bg-[#1e2638] border border-gray-600 text-sm"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, btn.id, "image")}
              className="text-xs mb-1"
            />
            <input
              type="file"
              accept="audio/mp3,audio/wav"
              onChange={(e) => handleFileUpload(e, btn.id, "sound")}
              className="text-xs mb-1"
            />
            <input
              type="text"
              placeholder="Touche (ex: a)"
              value={btn.key}
              onChange={(e) => updateButton(btn.id, "key", e.target.value)}
              className="w-full p-1 rounded bg-[#1e2638] border border-gray-600 text-xs"
            />
            <button
              onClick={() => {
                if (btn.sound) {
                  const audio = new Audio(btn.sound);
                  audio.play();
                }
              }}
              className="mt-2 px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 rounded"
            >
              ▶️ Jouer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
