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
                  const clientId = "4144371611";
                  const redirectUri = encodeURIComponent("http://localhost:3000/api/dlive/callback"); // Pour local, à changer en prod
                  const scope = [
                    "identity",
                    "chat:write",
                    "chest:write",
                    "comment:write",
                    "email:read",
                    "emote:read",
                    "emote:write",
                    "language:read",
                    "moderation:read",
                    "moderation:write",
                    "relationship:read",
                    "relationship:write",
                    "streamkey:read",
                    "streamkey:write",
                    "streamtemplate:read",
                    "streamtemplate:write",
                    "subscription:read",
                    "subsetting:write",
                    "panel:write",
                    "watching:read"
                  ].join("+");
                
                  const authUrl = `https://dlive.tv/o/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
                  window.location.href = authUrl;
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
