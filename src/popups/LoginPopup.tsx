"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LoginPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#151b2a] text-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Bouton Fermer */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={28} />
            </button>

            {/* Titre */}
            <h2 className="text-3xl font-extrabold text-center text-purple-400 mb-6">Connexion</h2>

            {/* Texte */}
            <p className="text-gray-300 text-center mb-6">
              Connecte-toi avec ton compte DLive pour accéder à toutes les fonctionnalités du site.
            </p>

            {/* Bouton connexion DLive */}
            <div className="flex justify-center">
              <button
                className="bg-purple-600 hover:bg-purple-500 transition text-white font-bold py-3 px-6 rounded-full text-lg"
                onClick={() => {
                  window.location.href = "https://dlive.tv/oauth2/authorize"; // ici tu mettras ton URL OAuth2 DLive
                }}
              >
                Se connecter avec DLive
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
