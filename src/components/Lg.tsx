"use client";

import { useState } from "react";

export default function Lg() {
  const [keyword, setKeyword] = useState("!giveaway");
  const [botMessage, setBotMessage] = useState("🎁 Un giveaway est lancé ! Tapez !giveaway dans le chat pour participer !");
  const [duration, setDuration] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const startGiveaway = () => {
    if (!keyword || !botMessage || duration < 5) {
      alert("Tous les champs doivent être remplis correctement.");
      return;
    }
    setIsRunning(true);
    console.log("✅ Giveaway lancé !");
    console.log("🗝️ Mot-clé:", keyword);
    console.log("🕒 Durée:", duration, "secondes");
    console.log("🤖 Message du bot:", botMessage);

    // Simule l'arrêt automatique du giveaway après la durée
    setTimeout(() => {
      setIsRunning(false);
      alert("⏰ Giveaway terminé !");
    }, duration * 1000);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎉 Lancer un Giveaway</h1>

      <div className="space-y-4 bg-[#2a3345] p-6 rounded-xl shadow-lg max-w-xl">
        <div>
          <label className="block mb-1">Mot-clé à taper dans le chat</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            placeholder="Ex: !giveaway"
          />
        </div>

        <div>
          <label className="block mb-1">Message envoyé par le bot</label>
          <textarea
            value={botMessage}
            onChange={(e) => setBotMessage(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600 text-sm"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1">Durée (en secondes)</label>
          <input
            type="number"
            min={5}
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          />
        </div>

        <button
          disabled={isRunning}
          onClick={startGiveaway}
          className={`w-full py-2 rounded font-bold transition ${
            isRunning ? "bg-gray-500 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isRunning ? "⏳ Giveaway en cours..." : "🚀 Lancer le Giveaway"}
        </button>
      </div>

      {isRunning && (
        <div className="mt-6 text-green-400 text-sm">
          ✅ Le giveaway est lancé. Les participants doivent taper <span className="font-mono">{keyword}</span> dans le chat.
        </div>
      )}
    </div>
  );
}
