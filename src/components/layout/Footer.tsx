// src/components/layout/Footer.tsx


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-gray-300 pt-12 px-6 pb-6 border-t border-[#1e2638]">
      {/* Bloc VIP / Newsletter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            REJOIGNEZ NOTRE <span className="text-yellow-400">VIP</span>
          </h2>
          <p className="text-sm text-gray-400">
            Restez informé de nos derniers bonus, jeux et giveaways 🔥
          </p>
        </div>
        <form className="flex gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="w-full px-4 py-2 rounded-md bg-[#121b2a] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-md text-white font-semibold"
          >
            S’inscrire
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#1e2638] pt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2 text-white">Pages légales</h4>
          <ul className="space-y-1">
            <li><Link href="/cgu">CGU</Link></li>
            <li><Link href="/conf">Politique de confidentialité</Link></li>
            <li><Link href="/responsable">Jeu responsable</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Casinos</h4>
          <ul className="space-y-1">
            <li><Link href="#">Casinos en ligne</Link></li>
            <li><Link href="#">Casinos mobile</Link></li>
            <li><Link href="#">Casinos en direct</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Bonus</h4>
          <ul className="space-y-1">
            <li><Link href="#">Bonus sans dépôt</Link></li>
            <li><Link href="#">Free spins</Link></li>
            <li><Link href="#">Bienvenue</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Outils</h4>
          <ul className="space-y-1">
            <li><Link href="/blackjack">Blackjack</Link></li>
            <li><Link href="/casinolex">Lexique casino</Link></li>
            <li><Link href="/cryptolex">Lexique Cryptomonnaie</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-white">Langues</h4>
          <ul className="space-y-1">
            <li><Link href="#">Français</Link></li>
          </ul>
        </div>
      </div>

      {/* Mentions légales */}
      <div className="max-w-7xl mx-auto pt-10 text-xs text-gray-500 space-y-4">
        <p>
          <strong>JEU RESPONSABLE :</strong> Ce site ne propose pas de jeux d’argent réels. Les
          informations sont fournies à titre informatif uniquement. Jouez toujours de manière responsable.
        </p>
        <p>
          <strong>ATTENTION :</strong> Veuillez vérifier les lois en vigueur dans votre pays. Certaines
          offres peuvent être restreintes.
        </p>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-[#1e2638] text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LesBetesCaz. Tous droits réservés.
      </div>
    </footer>
  );
}
