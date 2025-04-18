"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-pink-100 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🐰 라냉이 끼끼 웹게임</h1>
      <p className="mb-6 text-lg text-gray-600">현실을 피하고 라냉과 함께 끼끼 울어보자!</p>
      <Link href="/kiki">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-pink-600 transition">
          👉 끼끼 울기 GO
        </button>
      </Link>
    </main>
  );
}