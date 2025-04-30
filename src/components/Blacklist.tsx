"use client";

import { useEffect, useState } from "react";

export default function Blacklist() {
  const [badwords, setBadwords] = useState<string[]>([]);
  const [newWord, setNewWord] = useState("");
  const [blockLinks, setBlockLinks] = useState(false);

  useEffect(() => {
    // À remplacer plus tard par fetch API
    setBadwords(["merde", "grosnoob", "tricheur"]);
    setBlockLinks(true); // valeur simulée depuis un fichier JSON
  }, []);

  const handleAdd = () => {
    const word = newWord.trim().toLowerCase();
    if (!word || badwords.includes(word)) return;
    setBadwords([...badwords, word]);
    setNewWord("");
  };

  const handleDelete = (wordToDelete: string) => {
    setBadwords(badwords.filter((word) => word !== wordToDelete));
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">🚫 Blacklist des mots interdits</h1>

      {/* Liste des mots interdits */}
      <ul className="mb-6 space-y-2">
        {badwords.map((word) => (
          <li
            key={word}
            className="bg-[#2a3345] px-4 py-2 rounded flex justify-between items-center"
          >
            <span>{word}</span>
            <button
              onClick={() => handleDelete(word)}
              className="text-sm text-red-400 hover:underline"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {/* Formulaire ajout mot */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">➕ Ajouter un mot</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            className="flex-1 p-2 rounded bg-[#1e2638] border border-gray-600"
            placeholder="Ex : insultemoche"
          />
          <button
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
            onClick={handleAdd}
          >
            Ajouter
          </button>
        </div>
      </div>

      {/* Blocage des liens */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">🔗 Blocage des liens</h2>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={blockLinks}
            onChange={(e) => setBlockLinks(e.target.checked)}
            className="form-checkbox h-5 w-5 text-purple-600"
          />
          <span className="text-gray-300">
            Bloquer tous les liens dans le chat (http, .com, .gg, etc.)
          </span>
        </label>
      </div>
    </div>
  );
}
