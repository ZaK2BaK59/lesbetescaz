import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl shadow-md border border-[#2d3748] bg-[#151b2a] ${className}`}>
      {children}
    </div>
  );
}
