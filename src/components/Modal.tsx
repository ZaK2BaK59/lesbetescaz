// Utilisation de "use client" pour marquer le composant comme client

import React from "react";
import Image from "next/image";  // Utilisation de Image de Next.js

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  // Removed unused email state

  if (!isOpen) return null; // Si le modal est fermé, ne pas afficher

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#1e2638] p-6 rounded-lg w-[400px] text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">DLive Login</h2>
          <button onClick={closeModal} className="text-white">
            <span>&#10005;</span> {/* Bouton de fermeture */}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="https://zupimages.net/up/25/15/g1y6.png"  // Utilisation d'Image pour un meilleur rendu
            alt="DLive logo"
            width={100}  // Largeur de l'image
            height={100} // Hauteur de l'image
            className="mb-4"
          />
          <p className="mb-4 text-center">
            Se connecter avec votre compte DLive est rapide, simple et sécurisé!
          </p>

          <button
            onClick={() => {
              // Logique de connexion avec DLive ici
              console.log("Connexion via DLive...");
              closeModal();  // Ferme le modal après l'action
            }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold"
          >
            Se connecter avec DLive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
