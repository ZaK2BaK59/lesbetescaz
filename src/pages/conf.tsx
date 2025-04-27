'use client';

import Link from "next/link";
import '../styles/globals.css'; // Assure-toi d'avoir un fichier globals.css

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-purple-400">Politique de Confidentialité</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-300">
              La protection de vos données personnelles est une priorité pour LesBetesCaz. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Données collectées</h2>
            <p className="text-gray-300">
              Nous pouvons collecter des informations telles que votre adresse email, votre pseudo, votre activité sur notre site et vos préférences de jeux.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Utilisation des données</h2>
            <p className="text-gray-300">
              Les données collectées sont utilisées pour améliorer votre expérience utilisateur, personnaliser nos services et assurer le bon fonctionnement du site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Stockage et sécurité</h2>
            <p className="text-gray-300">
              Vos données sont stockées sur des serveurs sécurisés. Nous mettons en œuvre toutes les mesures nécessaires pour protéger vos informations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
            <p className="text-gray-300">
              LesBetesCaz utilise des cookies pour améliorer votre navigation, analyser le trafic et personnaliser le contenu. Vous pouvez paramétrer vos préférences via votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Partage des données</h2>
            <p className="text-gray-300">
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Certaines données peuvent être partagées avec nos partenaires de manière anonyme à des fins d&apos;analyse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Vos droits</h2>
            <p className="text-gray-300">
              Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour toute demande, veuillez nous contacter via notre formulaire.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Modifications de la politique</h2>
            <p className="text-gray-300">
              Cette politique peut être mise à jour. Nous vous invitons à la consulter régulièrement pour rester informé de nos pratiques.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
            <p className="text-gray-300">
              Pour toute question concernant cette politique, veuillez nous contacter via le formulaire ou à l&apos;adresse email suivante :{" "}
              <Link href="/contact" className="text-purple-400 underline hover:text-purple-300">Nous contacter</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
