// src/components/LogoCarousel.tsx
import Image from "next/image";

const logos = [
  "/horus.png", 
  "/stake.png", 
  "/kryptosino.png", 
  "/roobet.png", 
  "/gamdom.png", 
  "/twin.png"
];

export default function LogoCarousel() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto overflow-hidden ">
        <div className="flex items-center space-x-5 animate-marquee">
          {/* Looping through the logos array */}
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center bg-white/10 rounded-lg p-4 w-20 h-20 object-contain">
              <Image 
                src={logo} 
                alt={`Casino logo ${index + 1}`} 
                width={80} // Ajuste la taille ici
                height={80} // Ajuste la taille ici
                className="object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
