"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CasinoPopupContextType = {
  selectedCasinoId: string | null;
  openCasinoPopup: (id: string) => void;
  closeCasinoPopup: () => void;
};

const CasinoPopupContext = createContext<CasinoPopupContextType | undefined>(undefined);

export function useCasinoPopup() {
  const context = useContext(CasinoPopupContext);
  if (!context) {
    throw new Error("useCasinoPopup must be used inside a CasinoPopupProvider");
  }
  return context;
}

export function CasinoPopupProvider({ children }: { children: ReactNode }) {
  const [selectedCasinoId, setSelectedCasinoId] = useState<string | null>(null);

  const openCasinoPopup = (id: string) => setSelectedCasinoId(id);
  const closeCasinoPopup = () => setSelectedCasinoId(null);

  return (
    <CasinoPopupContext.Provider value={{ selectedCasinoId, openCasinoPopup, closeCasinoPopup }}>
      {children}
    </CasinoPopupContext.Provider>
  );
}
