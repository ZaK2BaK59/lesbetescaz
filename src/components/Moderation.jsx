"use client";

export default function Moderation() {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">🛡️ Modération</h1>
      <div className="bg-yellow-900/20 border-l-4 border-yellow-400 text-yellow-300 p-4 rounded-lg mb-6">
        <p>
          ⚠️ Le bot <strong>LesBetesCaz_Bot</strong> doit être <u>modérateur</u> de votre chaîne DLive.
          <br />
          Sinon, les commandes de modération ne pourront pas fonctionner.
        </p>
      </div>

      <p className="text-gray-300">
        Une fois le bot modérateur, vous pourrez :
      </p>
      <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
        <li>Supprimer les messages offensants</li>
        <li>Timeout / Ban des utilisateurs</li>
        <li>Activer le mode lent</li>
        <li>Nettoyer le chat automatiquement</li>
      </ul>

      <div className="mt-6">
        <p className="text-sm text-gray-500 italic">
          Vous pouvez ajouter un modérateur sur DLive en allant sur votre chaîne → Paramètres → Modération.
        </p>
      </div>
    </div>
  );
}
