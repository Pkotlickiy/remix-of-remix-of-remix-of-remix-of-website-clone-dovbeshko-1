"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2c3e50] text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm flex-1">
          Мы используем cookie для улучшения работы сайта. Продолжая просмотр, вы соглашаетесь с{' '}
          <Link href="/cookie-policy" className="text-[#3498db] underline">
            Политикой cookie
          </Link>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-[#27ae60] text-white border-none px-5 py-2 rounded cursor-pointer font-medium hover:bg-[#219150] transition"
          >
            Принять
          </button>
          <Link
            href="/cookie-policy"
            className="bg-transparent text-white border border-white px-5 py-2 rounded cursor-pointer hover:bg-white/10 transition"
          >
            Настроить
          </Link>
        </div>
      </div>
    </div>
  );
}
