"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Os() {
  const [text, setText] = useState("Merci pour le sub !");
  const [mediaType, setMediaType] = useState("image");
  const [mediaUrl, setMediaUrl] = useState("/avatars/1.png");
  const [duration, setDuration] = useState(5);
  const [bgColor, setBgColor] = useState("#1e2638");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [fontStyle, setFontStyle] = useState("sans");
  const [soundUrl, setSoundUrl] = useState("/sounds/sub.mp3");
  const [show, setShow] = useState(false);

  const fontClass = {
    sans: "font-sans",
    fancy: "font-extrabold italic",
    pixel: "tracking-widest uppercase",
    mono: "font-mono",
    cute: "font-bold text-pink-300 animate-pulse",
  }[fontStyle] || "font-sans";

  const playPreview = () => {
    setShow(true);
    const audio = new Audio(soundUrl);
    audio.play();
    setTimeout(() => setShow(false), duration * 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "media" | "sound") => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === "media") setMediaUrl(url);
      else if (type === "sound") setSoundUrl(url);
    }
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎉 Overlay sub - Personnalisation</h1>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block mb-1">Texte de notification</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Durée d&apos;affichage (sec)</label>
          <input
            type="number"
            value={duration}
            min={1}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Type de média</label>
          <select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          >
            <option value="image">Image</option>
            <option value="gif">GIF</option>
            <option value="video">Vidéo</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Média (URL ou fichier local)</label>
          <input
            type="text"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            placeholder="https://..."
          />
          <input
            type="file"
            accept="image/*,video/*,image/gif"
            onChange={(e) => handleFileUpload(e, "media")}
            className="mt-2 w-full text-sm text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1">Police d&apos;écriture</label>
          <select
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
          >
            <option value="sans">Classique</option>
            <option value="fancy">Stylé</option>
            <option value="pixel">Pixel</option>
            <option value="mono">Monospace</option>
            <option value="cute">Kawaii</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Couleur de fond</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-16 h-10 bg-transparent border-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block mb-1">Couleur du texte</label>
          <input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            className="w-16 h-10 bg-transparent border-none cursor-pointer"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1">Son de notification (URL ou MP3/WAV local)</label>
          <input
            type="text"
            value={soundUrl}
            onChange={(e) => setSoundUrl(e.target.value)}
            className="w-full p-2 rounded bg-[#1e2638] border border-gray-600"
            placeholder="https://..."
          />
          <input
            type="file"
            accept="audio/mp3,audio/wav"
            onChange={(e) => handleFileUpload(e, "sound")}
            className="mt-2 w-full text-sm text-gray-300"
          />
        </div>
      </div>

      <button
        onClick={playPreview}
        className="mb-8 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded shadow"
      >
        ▶️ Prévisualiser l&apos;animation
      </button>

      {/* Preview */}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-4 max-w-md mx-auto text-center shadow-lg"
          style={{ backgroundColor: bgColor, color: fontColor }}
        >
          {mediaType === "image" && (
            <Image
              src={mediaUrl}
              alt="media"
              width={200}
              height={200}
              className="mx-auto rounded mb-2"
            />
          )}
          {mediaType === "gif" && (
            <Image
              src={mediaUrl}
              alt="gif"
              width={192}
              height={192}
              className="mx-auto object-contain rounded mb-2"
            />
          )}
          {mediaType === "video" && (
            <video
              src={mediaUrl}
              autoPlay
              muted
              loop
              className="mx-auto w-64 h-40 rounded mb-2"
            />
          )}
          <p className={`text-xl ${fontClass}`}>{text}</p>
        </motion.div>
      )}
    </div>
  );
}
