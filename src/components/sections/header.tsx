"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Помощь" },
  { href: "/practice", label: "Практика" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Контакты" },
  { href: "/booking", label: "Записаться" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const headerClass = `fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
    isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
  }`;
  
  const topSpanClass = `mb-1 h-0.5 w-6 transform rounded-full bg-[#741717] transition duration-300 ease-in-out ${
    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
  }`;
  const middleSpanClass = `h-0.5 w-6 rounded-full bg-[#741717] transition-opacity duration-300 ease-in-out ${
    isMenuOpen ? "opacity-0" : ""
  }`;
  const bottomSpanClass = `mt-1 h-0.5 w-6 transform rounded-full bg-[#741717] transition duration-300 ease-in-out ${
    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
  }`;

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-16 rounded bg-[#741717] px-4 py-2 text-white transition-transform focus:translate-y-0"
      >
        Перейти к содержимому
      </a>
      <header className={headerClass}>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center"
            aria-label="Адвокат Довбешко С.Ю. - Главная страница"
          >
            <div className="relative flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#741717]/20 to-transparent mb-1.5" />
                <div className="text-center relative">
                  <div className="font-['Cormorant_Garamond',_serif] font-light tracking-widest text-[#741717] transition-all duration-300 flex justify-center text-3xl">
                    <span className="inline-block origin-bottom">S</span>
                    <span className="inline-block origin-bottom px-1">U</span>
                    <span className="inline-block origin-bottom">D</span>
                  </div>
                  <div className="uppercase tracking-widest text-gray-500 transition-all duration-300 text-sm font-light font-sans">
                    адвокат
                  </div>
                </div>
                <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#741717]/20 to-transparent mt-1.5" />
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#741717] ${
                        isActive
                          ? "text-[#741717] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#741717] after:content-['']"
                          : "text-[#603a30]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href="tel:+79310070752"
              className="text-sm font-medium text-[#603a30] hover:text-[#741717] transition-colors duration-300"
            >
              +7 (931) 007-07-52
            </a>
            <Link
              href="/booking"
              className="bg-[#741717] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#8c1c1c] transition-colors duration-300"
            >
              Связаться
            </Link>
          </nav>
          <button
            className="z-50 flex flex-col items-center justify-center md:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Открыть меню</span>
            <span className={topSpanClass} />
            <span className={middleSpanClass} />
            <span className={bottomSpanClass} />
          </button>
        </div>
        
        <div
          className={`absolute left-0 w-full bg-white md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "top-16 opacity-100 visible" : "top-12 opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center px-4 pt-2 pb-5 border-t border-gray-200">
            <ul className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => (
                <li key={`mobile-${link.href}`} className="w-full text-center">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-2 text-base font-medium transition-colors duration-300 hover:text-[#741717] ${
                      pathname === link.href ? "text-[#741717]" : "text-[#603a30]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+79310070752"
              className="mt-4 py-2 text-base font-medium text-[#603a30] hover:text-[#741717] transition-colors duration-300"
            >
              +7 (931) 007-07-52
            </a>
            <Link
              href="/booking"
              onClick={closeMenu}
              className="mt-4 w-full text-center bg-[#741717] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#8c1c1c] transition-colors duration-300"
            >
              Связаться
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}