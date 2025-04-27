'use client';

import Link from "next/link";
import '../styles/globals.css'; // Assure-toi d'avoir un fichier globals.css

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-purple-400">Conditions Générales d&apos;Utilisation</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-300">
              Bienvenue sur LesBetesCaz ! Ce site vous propose de découvrir des casinos en ligne partenaires et de jouer avec de la monnaie fictive sur nos outils internes. Nous ne proposons aucun jeu d&apos;argent réel directement sur notre site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Objet du site</h2>
            <p className="text-gray-300">
              LesBetesCaz est une plateforme de mise en relation entre les utilisateurs et les casinos en ligne partenaires. Nous ne sommes ni un opérateur de jeux, ni une société de paris en ligne.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Monnaie fictive</h2>
            <p className="text-gray-300">
              Toutes les monnaies utilisées sur LesBetesCaz sont entièrement fictives et n&apos;ont aucune valeur monétaire réelle. Aucun échange d&apos;argent réel n&apos;est possible sur notre site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Responsabilité</h2>
            <p className="text-gray-300">
              Nous déclinons toute responsabilité concernant les pertes financières pouvant être subies sur les plateformes de jeux partenaires. Chaque utilisateur doit jouer de manière responsable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Accès au site</h2>
            <p className="text-gray-300">
              L&apos;accès à LesBetesCaz est réservé aux personnes majeures (18 ans et plus). L&apos;utilisateur s&apos;engage à respecter la législation de son pays concernant les jeux en ligne.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Propriété intellectuelle</h2>
            <p className="text-gray-300">
              L&apos;ensemble des contenus présents sur le site (textes, logos, graphismes) sont la propriété exclusive de LesBetesCaz, sauf mentions contraires.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Modifications des CGU</h2>
            <p className="text-gray-300">
              LesBetesCaz se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à consulter régulièrement cette page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
            <p className="text-gray-300">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter via notre formulaire de contact ou par email à :{" "}
              <Link href="/contact" className="text-purple-400 underline hover:text-purple-300">Nous contacter</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
