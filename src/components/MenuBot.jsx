"use client";

import { useState } from "react";
import Commandes from "./Commandes";
import Moderation from "./Moderation";
import Blacklist from "./Blacklist"; // selon ton arborescence
import Message from "./Message"; // adapte selon ton chemin
import FollowerGoal from "./FollowerGoal";
import SubGoal from "./SubGoal";
import DonGoal from "./Don";
import Donateur from "./Donateur";
import Viewer from "./Viewer";
import Host from "./Host";
import Cc from "./Cc";
import Obs from "./Obs";
import Oc from "./Oc";
import Of from "./Of";
import Oh from "./Oh";
import Os from "./Os";
import Od from "./Od";
import Sd from "./Sd";
import Vc from "./Vc";
import Vg from "./Vg";
import Vt from "./Vt";
import Lg from "./Lg";
import Vr from "./Vr";



const menuSections = {
  Objectif: ["Follower Goal", "Don Goal", "Sub Goal"],
  Recompense: ["Meilleur donateur", "Meilleur viewers", "Meilleur Host"],
  Obs: [
    "Overlay Chat",
    "Overlay Follow",
    "Overlay Sub",
    "Overlay Don",
    "Overlay Host",
  ],
  Casino: ["Commandes casinos", "Overlay Obs special Casino"],
  Dinero: [
    "Voir le solde des users",
  ],
  Chatbot: ["Modération", "Commandes", "BlackList", "Message Automatique"],
  GiveAway: ["Lancer un GiveAway"],
  "Interface web": [
    "Voir les call",
    "Voir le tournoi",
    "Voir le giveaway",
    "StreamDeck gratuit",
  ],
  Discord: [
    "Notif Discord En live",
    "Notif Discord YouTube",
    "Notif Discord Instagram",
    "Notif Discord twitter",
    "Notif Discord Tiktok",
  ],
};

export default function MenuBot() {
    const [selected, setSelected] = useState(null);


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#151b2a] p-4 border-r border-[#2d3748]">
        {Object.entries(menuSections).map(([section, items]) => (
          <div key={section} className="mb-4">
            <h2 className="text-purple-400 font-bold text-sm uppercase mb-2">
              {section}
            </h2>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setSelected(item)}
                    className={`w-full text-left px-3 py-2 rounded hover:bg-purple-500/20 transition text-sm ${
                      selected === item ? "bg-purple-600 text-white" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        
  {selected === "Commandes" ? (
    <Commandes />
  ) : selected === "Modération" ? (
    <Moderation />
  ) : selected === "BlackList" ? (
    <Blacklist />
) : selected === "Message Automatique" ? (
    <Message />
) : selected === "Follower Goal" ? ( // ✔️ nom exact, comme dans menuSections
    <FollowerGoal />
) : selected === "Sub Goal" ? ( // ✔️ nom exact, comme dans menuSections
    <SubGoal />
) : selected === "Don Goal" ? ( // ✔️ nom exact, comme dans menuSections
    <DonGoal />
  ) : selected === "Meilleur donateur" ? ( // ✔️ nom exact, comme dans menuSections
    <Donateur />
  ) : selected === "Meilleur viewers" ? ( // ✔️ nom exact, comme dans menuSections
    <Viewer />
  ) : selected === "Meilleur Host" ? ( // ✔️ nom exact, comme dans menuSections
    <Host />
  ) : selected === "Commandes casinos" ? ( // ✔️ nom exact, comme dans menuSections
    <Cc />
  ) : selected === "Overlay Obs special Casino" ? ( // ✔️ nom exact, comme dans menuSections
    <Obs />
  ) : selected === "Overlay Chat" ? ( // ✔️ nom exact, comme dans menuSections
    <Oc />
  ) : selected === "Overlay Follow" ? ( // ✔️ nom exact, comme dans menuSections
    <Of />
  ) : selected === "Overlay Don" ? ( // ✔️ nom exact, comme dans menuSections
    <Od />
  ) : selected === "Overlay Host" ? ( // ✔️ nom exact, comme dans menuSections
    <Oh />
  ) : selected === "Overlay Sub" ? ( // ✔️ nom exact, comme dans menuSections
    <Os />
  ) : selected === "StreamDeck gratuit" ? ( // ✔️ nom exact, comme dans menuSections
    <Sd />
  ) : selected === "Voir les call" ? ( // ✔️ nom exact, comme dans menuSections
    <Vc />
  ) : selected === "Voir le giveaway" ? ( // ✔️ nom exact, comme dans menuSections
    <Vg />
  ) : selected === "Voir le tournoi" ? ( // ✔️ nom exact, comme dans menuSections
    <Vt /> 
  ) : selected === "Lancer un GiveAway" ? ( // ✔️ nom exact, comme dans menuSections
    <Lg /> 
  ) : selected === "Voir le solde des users" ? ( // ✔️ nom exact, comme dans menuSections
    <Vr /> 
  ) : selected ? (
    <div className="bg-[#1e2638] p-6 rounded-xl text-white shadow-md">
      <h1 className="text-xl font-bold mb-2">{selected}</h1>
      <p>Contenu ou configuration à venir pour "{selected}".</p>
    </div>
  ) : (
    <p className="text-white">Sélectionne un module à gauche pour commencer.</p>
  )}
</main>


    </div>
  );
}
