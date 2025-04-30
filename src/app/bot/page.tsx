'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";
import MenuBot from "@/components/MenuBot";


export default function BotPage() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePinSubmit = () => {
    if (pin === "0910") {
      setIsAuthenticated(true);
    } else {
      alert("❌ Mauvais code PIN !");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1117] text-white p-4">
        <div className="bg-[#151b2a] p-8 rounded-lg shadow-lg space-y-4 text-center w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4">🔒 Accès protégé</h1>
          <input
            type="password"
            placeholder="Entrez le code PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full p-3 rounded bg-[#1e2638] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Button onClick={handlePinSubmit} className="w-full bg-purple-600 hover:bg-purple-500">
            Valider
          </Button>
        </div>
      </div>
    );
  }

  // ✅ Accès autorisé ➔ Affichage de la page Bot
  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🤖 Gestion du Bot</h1>

      {/* Ici tu mettras tout le contenu de gestion du bot plus tard */}
      <div className="bg-[#151b2a] p-8 rounded-lg shadow-lg">
        <p className="text-lg">Bienvenue sur la page de gestion de ton Bot DLive 🎉</p>
        <p className="text-sm text-gray-400 mt-2">Sélectionne une option dans le menu.</p>
      </div>
      <br></br>
      <MenuBot />
    </div>
  );
}
