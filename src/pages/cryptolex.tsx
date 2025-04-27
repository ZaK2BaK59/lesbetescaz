'use client';

import '../styles/globals.css'; // Assure-toi d'avoir ce fichier
import Navbar from "@/components/layout/Navbar"; // Utilisation de ta Navbar existante
import Footer from "@/components/layout/Footer"; // Utilisation de ton Footer existant

const lexiqueCrypto = [
  { terme: "Blockchain", description: "Technologie décentralisée qui enregistre de manière transparente toutes les transactions financières." },
  { terme: "Wallet", description: "Portefeuille numérique sécurisé pour stocker, recevoir et envoyer des cryptomonnaies." },
  { terme: "Adresse de wallet", description: "Identifiant unique (suite de lettres et chiffres) permettant de recevoir des fonds en crypto." },
  { terme: "Transaction Hash", description: "Code unique permettant de suivre ta transaction sur la blockchain en temps réel." },
  { terme: "Confirmations", description: "Nombre de validations par les mineurs pour sécuriser ta transaction sur la blockchain." },
  { terme: "Gas Fees", description: "Frais de transaction payés pour faire valider une opération sur certaines blockchains." },
  { terme: "Dépôt Crypto", description: "Envoyer des cryptomonnaies de ton wallet vers ton compte joueur sur un casino." },
  { terme: "Retrait Crypto", description: "Recevoir tes gains directement sur ton wallet personnel en cryptomonnaie." },
  { terme: "Stablecoin", description: "Cryptomonnaie stable dont la valeur suit le dollar (ex: USDT) pour éviter la volatilité." },
  { terme: "Bitcoin (BTC)", description: "Première et plus célèbre cryptomonnaie, souvent acceptée dans les casinos en ligne." },
  { terme: "Ethereum (ETH)", description: "Blockchain populaire pour les jeux en ligne, smart contracts, et transactions rapides." },
  { terme: "USDT (Tether)", description: "Stablecoin populaire utilisé pour déposer et retirer sans fluctuation de prix." },
  { terme: "Network", description: "Réseau spécifique utilisé pour transférer des cryptomonnaies : ERC20, TRC20, BEP20, etc." },
  { terme: "Memo / Tag", description: "Information supplémentaire parfois demandée pour valider des dépôts sur certains coins." },
  { terme: "Explorateur Blockchain", description: "Site permettant de consulter l'état d'une transaction en direct (ex: Etherscan, Blockchain.com)." },
  { terme: "KYC Crypto", description: "Processus d'identité demandé par certains sites pour sécuriser les transferts crypto." },
];

export default function LArtDeLaCryptomonnaie() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="w-full text-center py-16 bg-gradient-to-b from-[#0b0f1a] to-[#0d1117]">
        <h1 className="text-5xl font-extrabold text-white-400 mt-10">L&apos;Art de la Cryptomonnaie</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Découvre les bases de la cryptomonnaie appliquées aux casinos en ligne : wallets, dépôts, retraits et plus encore !
        </p>
      </section>

      {/* LEXIQUE */}
      <main className="flex-1 p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {lexiqueCrypto.map((item, index) => (
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
