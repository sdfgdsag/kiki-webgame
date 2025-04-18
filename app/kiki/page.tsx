"use client";
import { useState } from 'react';
import { motion } from "framer-motion";

export default function KikiCryGame() {
  const [ram, setRam] = useState(100);
  const [cryCount, setCryCount] = useState(0);

  const cry = () => {
    setCryCount(cryCount + 1);
    setRam(prev => Math.max(prev - 5, 0));
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6">
      <motion.img
        src="/lanaeng-character.png"
        alt="라냉"
        className="w-32 h-auto mb-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <h1 className="text-3xl font-bold mb-2">라냉이 끼끼 울고 있어요!</h1>
      <p className="mb-4">RAM 잔량: {ram}%</p>
      <button
        onClick={cry}
        className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
      >
        😿 끼끼 울기 ({cryCount})
      </button>
    </div>
  );
}