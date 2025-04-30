"use client";

import { useState } from "react";

const fixedCommands = [
  {
    command: "!call",
    description: "Demander au streamer une machine à jouer.",
  },
  {
    command: "!hunt",
    description: "Proposer une machine à ajouter dans le hunt (si hunt sur le site lesbetescaz.com)",
  },
  {
    command: "!BE",
    description:
      "Afficher le break even si le streamer a enregistré le hunt sur le site lesbetescaz.com",
  },
  {
    command: "!start",
    description:
      "Voir l'heure et le montant de départ de la session si renseignés.",
  },
  {
    command: "!balance",
    description: "Affiche la balance actuelle (si configuré).",
  },
  {
    command: "!provider",
    description: "Indique le provider du dernier jeu joué.",
  },
  {
    command: "!bonuslist",
    description: "Liste les bonus enregistrés durant la session sur le site lesbetescaz.com",
  },
];

const editableCommands = [
  { command: "!maxwin", label: "Contenu de !Maxwin" },
  { command: "!gain", label: "Contenu de !Gain" },
  { command: "!retrait", label: "Contenu de !Retrait" },
  { command: "!casino", label: "Nom du casino sponsorisé" },
];

export default function Cc() {
  const [values, setValues] = useState<Record<string, string>>({
    "!Maxwin": "Aucun maxwin enregistré pour l’instant.",
    "!Gain": "Pas de gros gain pour le moment.",
    "!Retrait": "Aucun retrait effectué actuellement.",
    "!casino": "Retrouve-moi sur LesBetesCaz.com 🎰",
  });

  const handleChange = (cmd: string, newVal: string) => {
    setValues((prev) => ({ ...prev, [cmd]: newVal }));
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">🎰 Commandes Casino</h1>

      {/* Commandes fixes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-purple-400">
          Commandes fixes
        </h2>
        <ul className="space-y-3">
          {fixedCommands.map(({ command, description }) => (
            <li
              key={command}
              className="bg-[#1e2638] p-4 rounded-xl shadow-md flex flex-col"
            >
              <span className="text-lg font-bold text-purple-300">{command}</span>
              <span className="text-sm text-gray-400 mt-1">{description}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Commandes éditables */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-purple-400">
          Commandes personnalisables
        </h2>
        <div className="space-y-4">
          {editableCommands.map(({ command, label }) => (
            <div
              key={command}
              className="bg-[#2a3345] p-4 rounded-lg shadow-md space-y-2"
            >
              <label className="block text-sm font-medium mb-1">
                {label}
              </label>
              <textarea
                value={values[command]}
                onChange={(e) => handleChange(command, e.target.value)}
                className="w-full bg-[#1e2638] border border-gray-600 p-2 rounded resize-none"
                rows={2}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
