"use client";

import { useEffect, useState } from "react";

type AutoMessage = {
  text: string;
  interval: number;
};

export default function Message() {
  const [messages, setMessages] = useState<AutoMessage[]>([]);
  const [newMessage, setNewMessage] = useState({ text: "", interval: 300 });

  // Simuler chargement initial
  useEffect(() => {
    setMessages([
      { text: "Pense à follow la chaîne 💜", interval: 300 },
      { text: "Rejoins notre Discord : discord.gg/abc", interval: 600 },
    ]);
  }, []);

  const handleAdd = () => {
    if (!newMessage.text.trim()) return;
    setMessages([...messages, { ...newMessage }]);
    setNewMessage({ text: "", interval: 300 });
  };

  const handleDelete = (index: number) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">💬 Messages Automatiques</h1>

      {/* Liste des messages */}
      <ul className="mb-6 space-y-3">
        {messages.map((msg, i) => (
          <li
            key={i}
            className="bg-[#2a3345] px-4 py-3 rounded flex justify-between items-center"
          >
            <div>
              <p>{msg.text}</p>
              <p className="text-sm text-gray-400">⏱️ Toutes les {msg.interval} secondes</p>
            </div>
            <button
              onClick={() => handleDelete(i)}
              className="text-sm text-red-400 hover:underline"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {/* Formulaire ajout */}
      <div className="bg-[#2f3b51] p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">➕ Ajouter un message</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Message à envoyer"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={newMessage.text}
            onChange={(e) => setNewMessage({ ...newMessage, text: e.target.value })}
          />
          <input
            type="number"
            min="60"
            placeholder="Intervalle en secondes"
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            value={newMessage.interval}
            onChange={(e) => setNewMessage({ ...newMessage, interval: parseInt(e.target.value) })}
          />
          <button
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
            onClick={handleAdd}
          >
            Ajouter le message
          </button>
        </div>
      </div>
    </div>
  );
}
