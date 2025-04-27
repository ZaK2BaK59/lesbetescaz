import Link from "next/link";


// src/components/PreventionSection.tsx
export default function PreventionSection() {
    return (
      <section className="rounded-2xl p-5 bg-linear-to-r from-amber-500 via-orange-500 to-red-500 text-white max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          {/* Titre de la section */}
          <h2 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">
            Prévention du Jeu Responsable 🎲
          </h2>
  
          {/* Texte de la section */}
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Il est essentiel de comprendre les risques associés au jeu en ligne et de jouer de manière responsable.
          </p>
  
          <div className="space-y-4">
            <ul className="list-inside space-y-3 text-left animate__animated animate__fadeIn animate__delay-2s font-medium">
              <li>🎯 **Jouez uniquement avec l&#39;argent que vous pouvez vous permettre de perdre.**</li>
              <li>🚫 **Fixez-vous des limites de temps et d&#39;argent pour éviter de perdre le contrôle.**</li>
              <li>📱 **Ne laissez pas le jeu affecter vos autres responsabilités, comme le travail ou la vie personnelle.**</li>
              <li>⚠️ **Si vous vous sentez stressé ou déprimé à cause du jeu, il est important de demander de l&#39;aide.**</li>
              <li>🛑 **Cherchez des ressources d&#39;aide telles que des lignes d&#39;assistance ou des sites de prévention.**</li>
            </ul>
          </div>
  
          <div className="mt-8 animate__animated animate__fadeIn animate__delay-3s">
            <Link
              href="#"
              className="text-lg font-bold text-black-500 hover:text-indigo-700 transition duration-300"
            >
              En savoir plus sur le jeu responsable
            </Link>
          </div>
        </div>
      </section>
    );
  }
  