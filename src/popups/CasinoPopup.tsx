"use client";

import { useCasinoPopup } from "@/contexts/CasinoPopupContext";
import { casinoData } from "@/data/casinoData";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function CasinoPopup() {
  const { selectedCasinoId, closeCasinoPopup } = useCasinoPopup();
  const casino = casinoData.find(c => c.id === selectedCasinoId);
  console.log("selectedCasinoId:", selectedCasinoId);
console.log("casino trouvé:", casino);


  if (!casino) return null;

  return (
    <AnimatePresence>
      {selectedCasinoId && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#151b2a] rounded-2xl p-8 max-w-2xl w-full shadow-2xl text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Bouton fermer */}
            <button onClick={closeCasinoPopup} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={28} />
            </button>

            {/* Logo et titre */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image src={casino.logo} alt={casino.name} fill className="rounded-md object-contain" />
              </div>
              <h2 className="text-3xl font-extrabold text-purple-400">{casino.name}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4">{casino.description}</p>

            {/* Infos bonus */}
            <div className="bg-[#1e253a] rounded-xl p-4 mb-4">
              <h3 className="text-lg font-bold mb-2 text-white">Bonus de bienvenue :</h3>
              <p className="text-purple-400">{casino.welcomeBonus}</p>
            </div>

            {/* Infos techniques */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <p><strong>Dépôt minimum :</strong> {casino.minDeposit}€</p>
              <p><strong>Dépôt bonus minimum :</strong> {casino.minBonusDeposit}€</p>
              <p><strong>Max Bet Bonus :</strong> {casino.maxBetBonus}€</p>
              <p><strong>KYC requis :</strong> {casino.kycRequired ? "Oui" : "Non"}</p>
              <p><strong>VPN autorisé :</strong> {casino.vpnAllowed ? "Oui" : "Non"}</p>
              <p><strong>Bonus Hunt :</strong> {casino.bonusHuntAllowed ? "Oui" : "Non"}</p>
            </div>

            {/* Bouton rejoindre */}
            <div className="mt-6">
              <a href={casino.joinUrl} target="_blank" rel="noopener noreferrer"
                 className="w-full block text-center bg-purple-600 hover:bg-purple-500 transition py-3 rounded-xl font-bold text-white">
                Rejoindre {casino.name}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
