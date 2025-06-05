"use client";

import { useState } from "react";
import Image from 'next/image';


type Viewer = {
  id: number;
  avatar: string;
  username: string;
  balance: number;
};

const initialViewers: Viewer[] = [
  {
    id: 1,
    avatar: "/avatars/1.png",
    username: "ViewerX",
    balance: 1500,
  },
  {
    id: 2,
    avatar: "/avatars/2.png",
    username: "CasinoFan42",
    balance: 3200,
  },
];

export default function Vr() {
  const [viewers, setViewers] = useState<Viewer[]>(initialViewers);
  const [editId, setEditId] = useState<number | null>(null);
  const [editedBalance, setEditedBalance] = useState<number>(0);

  const deleteViewer = (id: number) => {
    setViewers(viewers.filter((viewer) => viewer.id !== id));
  };

  const startEdit = (id: number, balance: number) => {
    setEditId(id);
    setEditedBalance(balance);
  };

  const saveEdit = (id: number) => {
    setViewers(
      viewers.map((viewer) =>
        viewer.id === id ? { ...viewer, balance: editedBalance } : viewer
      )
    );
    setEditId(null);
    setEditedBalance(0);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">💰 Soldes des Viewers</h1>

      <div className="space-y-4">
        {viewers.map((viewer) => (
          <div
            key={viewer.id}
            className="bg-[#2a3345] rounded-xl p-4 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
            <Image
  src={viewer.avatar}
  alt={viewer.username}
  width={48}
  height={48}
  className="rounded-full border-2 border-purple-600"
/>

              <div>
                <p className="text-sm font-bold">{viewer.username}</p>
                {editId === viewer.id ? (
                  <input
                    type="number"
                    value={editedBalance}
                    onChange={(e) => setEditedBalance(Number(e.target.value))}
                    className="mt-1 p-1 rounded bg-[#1e2638] border border-gray-600 w-32 text-sm"
                  />
                ) : (
                  <p className="text-sm text-gray-300">
                    💸 {viewer.balance.toLocaleString("fr-FR")} €
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {editId === viewer.id ? (
                <button
                  onClick={() => saveEdit(viewer.id)}
                  className="text-xs px-3 py-1 bg-green-600 hover:bg-green-700 rounded"
                >
                  💾 Sauver
                </button>
              ) : (
                <button
                  onClick={() => startEdit(viewer.id, viewer.balance)}
                  className="text-xs px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded"
                >
                  ✏️ Modifier
                </button>
              )}
              <button
                onClick={() => deleteViewer(viewer.id)}
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
