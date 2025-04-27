'use client';

import '../styles/globals.css'; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { PhoneCall, Target, Globe, Video, Shirt, Wallet, Gamepad2, Banknote } from "lucide-react";

const articles = [
  { id: 1, titre: "Call prioritaire", prix: 200, description: "Fais passer ton call en premier sur le stream !", icon: <PhoneCall size={64} className="text-purple-400" /> },
  { id: 2, titre: "Achat bounty", prix: 500, description: "STOP ! On coupe toute activité pour t'acheter un bounty.", icon: <Target size={64} className="text-purple-400" /> },
  { id: 3, titre: "Abonnement 1 mois NordVPN", prix: 1000, description: "Le meilleur VPN pour jouer aux meilleurs casinos.", icon: <Globe size={64} className="text-purple-400" /> },
  { id: 4, titre: "Live avec nous", prix: 1500, description: "Passe en live 30 minutes avec nous et fais-nous un call en direct !", icon: <Video size={64} className="text-purple-400" /> },
  { id: 5, titre: "T-Shirt LesBetesCaz", prix: 2000, description: "Reçois un T-Shirt LesBetesCaz édition spéciale !", icon: <Shirt size={64} className="text-purple-400" /> },
  { id: 6, titre: "Start 20€", prix: 2500, description: "On t'offre un start de 20€ sur un de nos casinos partenaires.", icon: <Wallet size={64} className="text-purple-400" /> },
  { id: 7, titre: "Prends le contrôle", prix: 5000, description: "Prends le contrôle du stream et du solde pendant 20 minutes !", icon: <Gamepad2 size={64} className="text-purple-400" /> },
  { id: 8, titre: "Pull LesBetesCaz", prix: 7500, description: "Pour tes meilleurs maxwins, prends ton meilleur pull !", icon: <Shirt size={64} className="text-purple-400" /> },
  { id: 9, titre: "Start 50€", prix: 10000, description: "On t'offre un start de 50€ sur un de nos casinos partenaires.", icon: <Banknote size={64} className="text-purple-400" /> },
];

export default function Boutique() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white mt-10">La Boutique Dinero</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Dépense tes Dinero gagnés en jouant ou en regardant les streams LesBetesCaz !
        </p>
      </section>

      {/* EXPLICATION */}
      <section className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-gray-400 text-lg">
          💸 Comment obtenir des Dinero ? Participe aux jeux sur le site, assiste aux streams, relève des défis quotidiens et collectionne des Dinero à échanger contre des récompenses exclusives !
        </p>
      </section>

      {/* SEARCH BAR */}
      <div className="flex justify-center my-8">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#151b2a] border border-purple-400 text-white rounded-full px-6 py-3 w-80 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
      </div>

      {/* ARTICLES */}
      <main className="flex-1 p-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-[#151b2a] rounded-lg shadow-lg hover:scale-105 transform transition p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              {article.icon}
            </div>
            <h2 className="text-xl font-bold text-purple-400 mb-2">{article.titre}</h2>
            <p className="text-gray-300 mb-4">{article.description}</p>
            <span className="font-semibold text-green-400 mb-2">{article.prix} Dinero</span>
            <button className="mt-auto bg-purple-600 hover:bg-purple-500 transition text-white font-bold py-2 px-6 rounded-full">
              Acheter
            </button>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
