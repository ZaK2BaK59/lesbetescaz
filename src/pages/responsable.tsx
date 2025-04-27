'use client';

import Link from "next/link";
import '../styles/globals.css'; // Assure-toi d'avoir un fichier globals.css

export default function JeuResponsable() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-purple-400">Jeu Responsable</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-300">
              Chez LesBetesCaz, nous encourageons un environnement de jeu responsable. Même avec de la monnaie fictive, il est important de jouer de manière saine et équilibrée.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Nos engagements</h2>
            <p className="text-gray-300">
              Nous nous engageons à sensibiliser nos utilisateurs sur les risques liés au jeu excessif et à fournir des ressources pour aider à maintenir une pratique ludique et sans risque.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Conseils de jeu</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Fixez-vous des limites de temps et de sessions.</li>
              <li>Ne jouez jamais sous l&apos;effet du stress, de la fatigue ou de l&apos;alcool.</li>
              <li>Souvenez-vous que les jeux sur notre site sont uniquement à but récréatif.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Aide et ressources</h2>
            <p className="text-gray-300">
              Si vous ressentez une perte de contrôle sur votre comportement de jeu, nous vous recommandons de consulter des organismes spécialisés comme{" "}
              <a href="https://www.joueurs-info-service.fr/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">
                Joueurs Info Service
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Limites personnelles</h2>
            <p className="text-gray-300">
              Même sur un site utilisant de la monnaie fictive, nous conseillons à nos utilisateurs de définir des limites claires pour garder une pratique responsable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Protection des mineurs</h2>
            <p className="text-gray-300">
              Les jeux proposés sur LesBetesCaz sont strictement réservés aux personnes de 18 ans et plus. Nous encourageons les parents à surveiller l&apos;activité en ligne de leurs enfants.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
            <p className="text-gray-300">
              Pour toute question ou demande d&apos;information supplémentaire, vous pouvez nous contacter via notre{" "}
              <Link href="/contact" className="text-purple-400 underline hover:text-purple-300">formulaire de contact</Link>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
