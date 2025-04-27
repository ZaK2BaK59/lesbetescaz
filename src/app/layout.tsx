// src/app/layout.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../styles/globals.css";
import { CasinoPopupProvider } from "@/contexts/CasinoPopupContext";
import CasinoPopup from "@/popups/CasinoPopup"; // 🟣 Ajoute ici

export const metadata = {
  title: "LesBetesCaz",
  description: "Le duo le plus 🔥 du stream casino",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#0d1117] text-white font-sans">
        <CasinoPopupProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-24">{children}</main>

            {/* 🟣 ON AFFICHE TOUJOURS LE CASINO POPUP ICI */}
            <CasinoPopup />

            <Footer />
          </div>
        </CasinoPopupProvider>
      </body>
    </html>
  );
}
