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
  const [editCommand, setEditCommand] = useState({ name: "", response: "", cooldown: 5 });
  
  // Utilisateur actuel
  const username = "nicoliquot";  // Nom d'utilisateur à utiliser

  // Charger les commandes depuis le backend au démarrage
  useEffect(() => {
    const fetchCommands = async () => {
      const response = await fetch(`http://localhost:5000/commands/${username.toLowerCase()}`);
      const data = await response.json();
      setCommands(data);
    };
    fetchCommands();
  }, []);
  

  // Ajouter une commande
  const handleAddCommand = async () => {
    if (!newCommand.name.startsWith("!")) {
      alert("La commande doit commencer par !");
      return;
    }

    const response = await fetch(`/commands/${username.toLowerCase()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [newCommand.name]: {
          response: newCommand.response,
          cooldown: parseInt(newCommand.cooldown),
        },
      }),
    });

    if (response.ok) {
      const updatedCommands = await response.json();
      setCommands(updatedCommands);
    } else {
      alert("Erreur lors de l'ajout de la commande.");
    }

    // Réinitialiser le formulaire
    setNewCommand({ name: "", response: "", cooldown: 5 });
  };

  // Modifier une commande
  const handleEditCommand = async () => {
    if (!editCommand.name.startsWith("!")) {
      alert("La commande doit commencer par !");
      return;
    }

    const response = await fetch(`/commands/${username.toLowerCase()}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [editCommand.name]: {
          response: editCommand.response,
          cooldown: parseInt(editCommand.cooldown),
        },
      }),
    });

    if (response.ok) {
      const updatedCommands = await response.json();
      setCommands(updatedCommands);
    } else {
      alert("Erreur lors de la modification de la commande.");
    }

    // Réinitialiser le formulaire
    setEditCommand({ name: "", response: "", cooldown: 5 });
  };

  // Supprimer une commande
  const handleDeleteCommand = async (commandName) => {
    const response = await fetch(`/commands/${username.toLowerCase()}?command=${commandName}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const updatedCommands = await response.json();
      setCommands(updatedCommands);
    } else {
      alert("Erreur lors de la suppression de la commande.");
    }
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

            {/* Bouton modifier et supprimer */}
            <div className="flex space-x-2 mt-2">
              <button
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setEditCommand({ name, response: data.response, cooldown: data.cooldown })}
              >
                Modifier
              </button>
              <button
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={() => handleDeleteCommand(name)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ajout de commande */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-lg mb-8">
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

      {/* Modification de commande */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">✏️ Modifier une commande</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Nom de la commande (ex: !hello)"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={editCommand.name}
            onChange={(e) => setEditCommand({ ...editCommand, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Réponse du bot"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={editCommand.response}
            onChange={(e) => setEditCommand({ ...editCommand, response: e.target.value })}
          />
          <input
            type="number"
            min="0"
            placeholder="Cooldown (secondes)"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={editCommand.cooldown}
            onChange={(e) => setEditCommand({ ...editCommand, cooldown: e.target.value })}
          />
          <button
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            onClick={handleEditCommand}
          >
            Modifier la commande
          </button>
        </div>
      </div>
    </div>
  );
}
