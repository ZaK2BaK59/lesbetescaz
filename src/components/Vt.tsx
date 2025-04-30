"use client";

import { useState } from "react";

type Match = {
  id: number;
  player1: string;
  player2: string;
  winner?: string;
};

export default function Vt() {
  const [size, setSize] = useState<8 | 16 | 32>(8);
  const [players, setPlayers] = useState<string[]>([]);
  const [rounds, setRounds] = useState<Match[][]>([]);
  const [editing, setEditing] = useState(false);
  const [inputPlayer, setInputPlayer] = useState("");

  const generateMatches = (players: string[]) => {
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    const firstRound: Match[] = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      firstRound.push({
        id: i / 2,
        player1: shuffled[i],
        player2: shuffled[i + 1],
      });
    }
    setRounds([firstRound]);
  };

  const handleWinner = (roundIndex: number, matchIndex: number, winner: string) => {
    const newRounds = [...rounds];
    newRounds[roundIndex][matchIndex].winner = winner;

    if (!newRounds[roundIndex + 1]) newRounds[roundIndex + 1] = [];

    const nextIndex = Math.floor(matchIndex / 2);
    if (!newRounds[roundIndex + 1][nextIndex]) {
      newRounds[roundIndex + 1][nextIndex] = {
        id: nextIndex,
        player1: winner,
        player2: "",
      };
    } else {
      if (!newRounds[roundIndex + 1][nextIndex].player1)
        newRounds[roundIndex + 1][nextIndex].player1 = winner;
      else newRounds[roundIndex + 1][nextIndex].player2 = winner;
    }

    setRounds(newRounds);
  };

  const startTournament = () => {
    if (players.length !== size) return alert("Remplis tous les slots !");
    generateMatches(players);
    setEditing(false);
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🏆 Tournoi</h1>

      <div className="mb-6">
        <label className="mr-2">Nombre de participants :</label>
        <select
          value={size}
          onChange={(e) => {
            setSize(parseInt(e.target.value) as 8 | 16 | 32);
            setPlayers([]);
            setRounds([]);
            setEditing(true);
          }}
          className="p-2 rounded bg-[#1e2638] border border-gray-600"
        >
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
        </select>
      </div>

      {editing && (
        <div className="mb-6">
          <h2 className="text-xl mb-2">👥 Ajouter des participants ({players.length}/{size})</h2>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={inputPlayer}
              onChange={(e) => setInputPlayer(e.target.value)}
              className="p-2 rounded bg-[#1e2638] border border-gray-600"
              placeholder="Nom du joueur"
            />
            <button
              onClick={() => {
                if (inputPlayer && players.length < size) {
                  setPlayers([...players, inputPlayer]);
                  setInputPlayer("");
                }
              }}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
            >
              ➕ Ajouter
            </button>
          </div>
          <ul className="list-disc pl-6 text-sm text-gray-300">
            {players.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <button
            className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
            onClick={startTournament}
          >
            🚀 Lancer le tournoi
          </button>
        </div>
      )}

      {/* Affichage de l'arbre */}
      <div className="overflow-auto">
        {rounds.map((round, roundIndex) => (
          <div key={roundIndex} className="mb-8">
            <h2 className="text-lg mb-2">Round {roundIndex + 1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {round.map((match) => (
                <div
                  key={match.id}
                  className="bg-[#2a3345] p-4 rounded shadow flex flex-col gap-2"
                >
                  <div
                    className={`p-2 rounded cursor-pointer border ${
                      match.winner === match.player1
                        ? "bg-green-600 border-green-800"
                        : "border-gray-500 hover:bg-gray-700"
                    }`}
                    onClick={() => handleWinner(roundIndex, match.id, match.player1)}
                  >
                    {match.player1}
                  </div>
                  <div
                    className={`p-2 rounded cursor-pointer border ${
                      match.winner === match.player2
                        ? "bg-green-600 border-green-800"
                        : "border-gray-500 hover:bg-gray-700"
                    }`}
                    onClick={() => handleWinner(roundIndex, match.id, match.player2)}
                  >
                    {match.player2}
                  </div>
                  {match.winner && (
                    <div className="text-sm text-gray-300 mt-2">✅ Vainqueur : {match.winner}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
