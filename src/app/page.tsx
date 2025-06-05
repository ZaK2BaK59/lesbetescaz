'use client';

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import CasinoCard from "@/components/cards/CasinoCard";
import PreventionSection from "@/components/PreventionSection";
import '../styles/globals.css'; // Assure-toi d'avoir un fichier globals.css

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const queryUsername = url.searchParams.get("username");
      const queryAvatar = url.searchParams.get("avatar");

      if (queryUsername) {
        localStorage.setItem("username", queryUsername);
      }

      if (queryAvatar) {
        localStorage.setItem("avatar", queryAvatar);
      }

      if (queryUsername || queryAvatar) {
        url.searchParams.delete("username");
        url.searchParams.delete("avatar");
        window.history.replaceState({}, "", url.toString());
      }
    }
  }, []);

  return (
    <>
      <section>
        <Header />
      </section>

      <section id="casinos" className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn text-center">
          Nos casinos partenaires 💎
        </h1>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CasinoCard
            size="large"
            logoSrc="/horus.png"
            bonusList={["100% – Wager free", "jusqu’à 1000€"]}
            joinUrl="https://www.horuscasino.com/fr/?a_aid=lesbetescaz&amp;amp;amp;amp;a_bid=d57cc95e"
            label="EXCLUSIF"
            bgClass="bg-gradient-to-r from-[#211b1b] to-[#261f1f]"
            infoId="horus"
          />
          <CasinoCard
            size="medium"
            logoSrc="/twin.png"
            bonusList={["100% +100 Free Spins"]}
            joinUrl="https://bit.ly/4cfyZSR"
            label="EXCLUSIF"
            bgClass="bg-gradient-to-r from-[#27a8f2] to-[#2487bf]"
            infoId="twin"
          />
          <CasinoCard
            size="medium"
            logoSrc="/kryptosino.png"
            bonusList={["100% – Wager Free", "jusqu’à 500€"]}
            joinUrl="https://www.kryptosino555.com/referral/5DEhZf5qdrQJ96mq"
            label="EXCLUSIF"
            bgClass="bg-gradient-to-r from-[#cf3c3c] to-[#c93030]"
            infoId="krypto"
          />
          <CasinoCard
            size="small"
            logoSrc="/stake.png"
            bonusList={["Crypton Only", "+10% Dépôt"]}
            joinUrl="https://stake.com/?c=OuovqHzk"
            bgClass="bg-gradient-to-r from-indigo-600 to-blue-700"
            infoId="stake"
          />
          <CasinoCard
            size="small"
            logoSrc="/roobet.png"
            bonusList={["Raffle Quotidienne", "+250 Free Spins"]}
            joinUrl="https://roobet.com/?ref=lesbtescaz"
            bgClass="bg-gradient-to-r from-orange-600 to-amber-700"
            infoId="roobet"
          />
          <CasinoCard
            size="small"
            logoSrc="/betify.png"
            bonusList={["100% jusqu’à 1000€"]}
            joinUrl="#"
            bgClass="bg-gradient-to-r from-green-700 to-teal-800"
            infoId="betify"
          />
          <CasinoCard
            size="small"
            logoSrc="/gamdom.png"
            bonusList={["150%", "Crypto Only"]}
            joinUrl="gamdom.com/r/LesBetesCaz"
            bgClass="bg-gradient-to-r from-pink-600 to-rose-700"
            infoId="gamdom"
          />
        </div>
      </section>

      <br />
      <br />
      <section>
        <PreventionSection />
      </section>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
