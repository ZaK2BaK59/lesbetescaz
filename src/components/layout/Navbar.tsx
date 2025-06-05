'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Dice5, Store, Youtube, Hammer, Crown, Trophy } from "lucide-react";
import LoginPopup from "@/popups/LoginPopup";
import Image from "next/image";





const menuItems = [
  { label: "Jeux", href: "/jeux", icon: <Dice5 size={16} /> },
  { label: "Progression", href: "/progression", icon: <Trophy size={16} /> },
  { label: "Boutique", href: "/boutique", icon: <Store size={16} /> },
  {
    label: "Réseaux",
    dropdown: [
      { label: "Discord", href: "https://discord.gg/JtRVNJdtSZ" },
      { label: "Dlive", href: "https://dlive.tv/LesBetesCaz" },
      { label: "Instagram", href: "https://www.instagram.com/lesbetescaz/" },
      { label: "Twitter", href: "https://x.com/LesBtesCaz" },
      { label: "Snapchat", href: "https://snapchat.com/t/MLac4lDc" },
      { label: "Youtube", href: "https://www.youtube.com/@lbc0659" },
    ],
    icon: <Youtube size={16} />,
  },
  {
    label: "Outils",
    dropdown: [
      { label: "Tableau Blackjack", href: "/blackjack" },
      { label: "Tableau Hunt", href: "/hunt" },
      { label: "L'art du Casino", href: "/casinolex" },
      { label: "L'art de la Cryptomonnaie", href: "/cryptolex" },
    ],
    icon: <Hammer size={16} />,
  },
  {
    label: "Programme Vip",
    href: "/vip",
    special: true,
    icon: <Crown size={16} />,
  },
  { label: "Gestion Bot", href: "/bot", icon: <Hammer size={16} /> },

];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const queryUsername = url.searchParams.get("username");
      const queryAvatar = url.searchParams.get("avatar");
  
      if (queryUsername) {
        localStorage.setItem("username", queryUsername);
        setUsername(queryUsername);
      } else {
        const stored = localStorage.getItem("username");
        if (stored) setUsername(stored);
      }
  
      if (queryAvatar) {
        localStorage.setItem("avatar", queryAvatar);
        setAvatar(queryAvatar);
      } else {
        const stored = localStorage.getItem("avatar");
        if (stored) setAvatar(stored);
      }
  
      if (queryUsername || queryAvatar) {
        url.searchParams.delete("username");
        url.searchParams.delete("avatar");
        window.history.replaceState({}, "", url.toString());
      }
    }
  }, []);
  



  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="bg-[#0d1117] text-white fixed top-0 w-full z-50 border-b border-[#1e2638]">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-purple-400">
          LesBetesCaz
        </Link>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.dropdown ? (
                <div className="relative">
                  {/* BOUTON CLICK */}
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center gap-1 hover:text-purple-400 transition"
                  >
                    {item.icon}
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#151b2a] rounded-lg shadow-lg py-2 min-w-[180px] flex flex-col animate-fade-slide">
                      {item.dropdown.map((sub, index) => (
                        <Link
                          key={index}
                          href={sub.href}
                          className="px-4 py-2 hover:bg-purple-500/20 transition rounded"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 hover:text-purple-400 transition ${
                    item.special ? "text-yellow-400" : ""
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* BOUTON CONNEXION */}
        <div className="hidden lg:flex items-center gap-4">
  {username ? (
    <>
      <Image
        src={avatar || "/default-avatar.png"}
        alt="Avatar"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="font-semibold">@{username}</span>
      <button
        onClick={() => {
          localStorage.removeItem("username");
          localStorage.removeItem("avatar");
          setUsername(null);
          setAvatar(null);
          window.location.reload();
        }}
        className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-3 rounded-full text-sm"
      >
        Déconnexion
      </button>
    </>
  ) : (
    <button
      onClick={() => setIsLoginModalOpen(true)}
      className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full transition"
    >
      Connexion
    </button>
  )}
</div>



      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151b2a] p-4 space-y-4 animate-fade-slide">
          {menuItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              <Link
                href={item.href || "#"}
                className={`flex items-center gap-2 py-2 hover:text-purple-400 ${
                  item.special ? "text-yellow-400" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-6 flex flex-col gap-2 mt-1">
                  {item.dropdown.map((sub, index) => (
                    <Link
                      key={index}
                      href={sub.href}
                      className="text-sm hover:text-purple-400"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        {/* 🟣 Ajout du bouton Connexion pour mobile ici */}
    <div className="pt-4 border-t border-gray-600 mt-4">
      <button
        onClick={() => setIsLoginModalOpen(true)}
        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-full transition"
      >
        Connexion
      </button>
    </div>
  </div>
)}
      <LoginPopup isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      
    </header>
  );
  
}


