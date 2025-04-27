'use client';

import '../styles/globals.css'; // Assure-toi d'avoir ce fichier
import Navbar from "@/components/layout/Navbar"; // Utilisation de ta Navbar existante
import Footer from "@/components/layout/Footer"; // Utilisation de ton Footer existant

const lexique = [
  { terme: "Slot", description: "Machine à sous en ligne où tu fais tourner des rouleaux pour tenter de décrocher des gains." },
  { terme: "Provider", description: "Studio de création qui développe les jeux et les slots proposés par les casinos en ligne." },
  { terme: "Bankroll", description: "Le total d'argent dont tu disposes pour jouer sur ton compte casino." },
  { terme: "Raw Money", description: "Ton argent réel déposé sans bonus, retirable sans conditions spéciales." },
  { terme: "Wager", description: "Le montant total que tu dois miser pour débloquer un bonus et retirer ton argent." },
  { terme: "Deposit Bonus", description: "Bonus offert par le casino quand tu fais un dépôt, souvent avec des conditions de mise et de mise maximum." },
  { terme: "Max Bet", description: "Limite maximale autorisée par mise, surtout quand tu joues avec un bonus actif." },
  { terme: "Withdraw", description: "Action de retirer une partie ou l’ensemble de ton solde vers ton compte bancaire ou portefeuille électronique." },
  { terme: "Breakeven", description: "Calcul qui indique combien tu dois gagner pour récupérer ta mise de départ, utilisé souvent en bonus hunt." },
  { terme: "Bet", description: "Montant que tu mises à chaque spin ou tour de jeu." },
  { terme: "Scatter", description: "Symbole spécial qui déclenche des bonus ou des free spins sur une machine à sous." },
  { terme: "Bonus", description: "Fonctionnalité spéciale d’une machine à sous offrant souvent des tours gratuits ou des gains boostés." },
  { terme: "Bonus Non Sticky", description: "Type de bonus où ton dépôt est séparé de la partie bonus : tu peux retirer ton dépôt sans toucher au bonus si tu gagnes avant." },
  { terme: "Basegame", description: "Partie normale d’une machine à sous où tu fais des spins sans être dans un mode bonus." },
  { terme: "Megaways", description: "Système de jeu permettant des milliers de façons de gagner sur une machine à sous, développé par BigTimeGaming." },
  { terme: "Wild", description: "Symbole qui remplace d’autres symboles pour créer plus de connexions gagnantes." },
  { terme: "Retrigger", description: "Obtenir à nouveau un bonus ou des tours gratuits pendant un mode bonus actif." },
  { terme: "Max Win", description: "Gain maximal possible sur une machine à sous, exprimé en multiplicateur de ta mise." },
  { terme: "RTP", description: "Taux de retour aux joueurs, exprimé en pourcentage, indiquant combien la machine reverse à long terme." },
  { terme: "Volatilité", description: "Niveau de risque d'une machine : faible volatilité = gains fréquents mais petits ; haute volatilité = gros gains mais plus rares." },
  { terme: "Bait", description: "Situation où la machine donne presque un bonus mais le rate exprès, créant un faux espoir." },
  { terme: "Live Dealer", description: "Jeux de casino animés par un vrai croupier filmé en direct, comme le Blackjack ou la Roulette live." },
  { terme: "Bust", description: "Dépasser le score maximum autorisé (souvent 21 au Blackjack), entraînant une perte immédiate." },
  { terme: "KYC", description: "Procédure d'identification où le casino vérifie ton identité avant d'autoriser des retraits." },
];

export default function LArtDuCasino() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="w-full text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white mt-10">L&apos;Art du Casino</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Explore le vocabulaire essentiel du monde du casino en ligne et deviens un expert du jeu !
        </p>
      </section>

      {/* LEXIQUE */}
      <main className="flex-1 p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {lexique.map((item, index) => (
          <div key={index} className="bg-[#151b2a] p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h2 className="text-xl font-bold text-purple-400 mb-2">{item.terme}</h2>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
