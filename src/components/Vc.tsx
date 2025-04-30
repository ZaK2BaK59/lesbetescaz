"use client";

import { useState } from "react";

const initialCalls = [
  {
    id: 1,
    avatar: "/avatars/1.png",
    username: "ViewerX",
    call: "Fais péter une machine !",
  },
  {
    id: 2,
    avatar: "/avatars/2.png",
    username: "CasinoFan42",
    call: "Tu lances un hunt ? 💥",
  },
];

export default function Vc() {
  const [calls, setCalls] = useState(initialCalls);
  const [editId, setEditId] = useState<number | null>(null);
  const [editedCall, setEditedCall] = useState("");

  const deleteCall = (id: number) => {
    setCalls(calls.filter((call) => call.id !== id));
  };

  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditedCall(text);
  };

  const saveEdit = (id: number) => {
    setCalls(
      calls.map((call) =>
        call.id === id ? { ...call, call: editedCall } : call
      )
    );
    setEditId(null);
    setEditedCall("");
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📢 Voir les Calls des Viewers</h1>

      <div className="space-y-4">
        {calls.map((call) => (
          <div
            key={call.id}
            className="bg-[#2a3345] rounded-xl p-4 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={call.avatar}
                alt={call.username}
                className="w-12 h-12 rounded-full border-2 border-purple-600"
              />
              <div>
                <p className="text-sm font-bold">{call.username}</p>
                {editId === call.id ? (
                  <input
                    type="text"
                    value={editedCall}
                    onChange={(e) => setEditedCall(e.target.value)}
                    className="mt-1 p-1 rounded bg-[#1e2638] border border-gray-600 w-64 text-sm"
                  />
                ) : (
                  <p className="text-sm text-gray-300">{call.call}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {editId === call.id ? (
                <button
                  onClick={() => saveEdit(call.id)}
                  className="text-xs px-3 py-1 bg-green-600 hover:bg-green-700 rounded"
                >
                  💾 Sauver
                </button>
              ) : (
                <button
                  onClick={() => startEdit(call.id, call.call)}
                  className="text-xs px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded"
                >
                  ✏️ Modifier
                </button>
              )}
              <button
                onClick={() => deleteCall(call.id)}
                className="text-xs px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
              >
                ❌ Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
