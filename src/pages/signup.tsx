// src/pages/signup.tsx
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour l'inscription à ajouter ici
    console.log("Signup form submitted:", email, password);
  };

  return (
    <div className="bg-[#0d1117] text-white">
      <Navbar />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-4xl font-bold text-center mb-6">S&#39;inscrire</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Votre mot de passe"
                  className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-md hover:bg-purple-700 transition"
              >
                S&#39;inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
