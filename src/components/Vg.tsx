"use client";

import { useState } from "react";

const initialParticipants = [
  {
    id: 1,
    avatar: "/avatars/1.png",
    username: "ViewerX",
    ticketCount: 3,
  },
  {
    id: 2,
    avatar: "/avatars/2.png",
    username: "LuckyGuy",
    ticketCount: 5,
  },
];

export default function Vg() {
  const [participants, setParticipants] = useState(initialParticipants);

  const deleteParticipant = (id: number) => {
    setParticipants(participants.filter((p) => p.id !== id));
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎁 Participants au Giveaway</h1>

      <div className="space-y-4">
        {participants.map((p) => (
          <div
            key={p.id}
            className="bg-[#2a3345] rounded-xl p-4 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={p.avatar}
                alt={p.username}
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              <div>
                <p className="text-sm font-bold">{p.username}</p>
                <p className="text-sm text-gray-300">
                  🎟️ Tickets : {p.ticketCount}
                </p>
              </div>
            </div>

            <button
              onClick={() => deleteParticipant(p.id)}
              className="text-xs px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
            >
              ❌ Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
