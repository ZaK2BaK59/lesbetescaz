"use client";

import { useState, useEffect } from "react";

// Exemple simulé de données (sera remplacé plus tard par un fetch vers backend)
const exampleCommands = {
  "!hello": { response: "Salut @{user} 👋", cooldown: 5 },
  "!discord": { response: "Voici le lien Discord : https://discord.gg/abc", cooldown: 10 },
};

export default function Commandes() {
  const [commands, setCommands] = useState({});
  const [newCommand, setNewCommand] = useState({ name: "", response: "", cooldown: 5 });

  // Simule le chargement initial
  useEffect(() => {
    setCommands(exampleCommands); // plus tard : fetch('/api/commands/lesbetescaz')
  }, []);

  const handleAddCommand = () => {
    if (!newCommand.name.startsWith("!")) {
      alert("La commande doit commencer par !");
      return;
    }

    setCommands((prev) => ({
      ...prev,
      [newCommand.name]: {
        response: newCommand.response,
        cooldown: parseInt(newCommand.cooldown),
      },
    }));

    // Reset formulaire
    setNewCommand({ name: "", response: "", cooldown: 5 });
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">📜 Gestion des Commandes</h1>

      {/* Liste des commandes */}
      <div className="mb-8 space-y-2">
        {Object.entries(commands).map(([name, data]) => (
          <div key={name} className="bg-[#2a3345] p-4 rounded-lg shadow-sm">
            <p><strong>{name}</strong></p>
            <p className="text-sm text-gray-300">💬 {data.response}</p>
            <p className="text-sm text-gray-400">⏱ Cooldown : {data.cooldown}s</p>
          </div>
        ))}
      </div>

      {/* Ajout de commande */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">➕ Ajouter une commande</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Nom de la commande (ex: !hello)"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={newCommand.name}
            onChange={(e) => setNewCommand({ ...newCommand, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Réponse du bot"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={newCommand.response}
            onChange={(e) => setNewCommand({ ...newCommand, response: e.target.value })}
          />
          <input
            type="number"
            min="0"
            placeholder="Cooldown (secondes)"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={newCommand.cooldown}
            onChange={(e) => setNewCommand({ ...newCommand, cooldown: e.target.value })}
          />
          <button
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
            onClick={handleAddCommand}
          >
            Ajouter la commande
          </button>
        </div>
      </div>
    </div>
  );
}
