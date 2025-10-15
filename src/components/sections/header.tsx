"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Помощь" },
  { href: "/practice", label: "Практика" },
  { href: "/blog", label: "Блог" },
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

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-16 rounded bg-[#741717] px-4 py-2 text-white transition-transform focus:translate-y-0"
      >
        Перейти к содержимому
      </a>
      <motion.header
        className={headerClass}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center"
            aria-label="Адвокат Довбешко С.Ю. - Главная страница"
          >
            <motion.div
              className="relative flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#741717]/20 to-transparent mb-1.5" />
                <div className="text-center relative">
                  <div className="font-['Cormorant_Garamond',_serif] font-light tracking-widest text-[#741717] transition-all duration-300 flex justify-center text-3xl">
                    <motion.span
                      className="inline-block origin-bottom"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      S
                    </motion.span>
                    <motion.span
                      className="inline-block origin-bottom px-1"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    >
                      U
                    </motion.span>
                    <motion.span
                      className="inline-block origin-bottom"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      D
                    </motion.span>
                  </div>
                  <div className="uppercase tracking-widest text-gray-500 transition-all duration-300 text-sm font-light font-sans">
                    адвокат
                  </div>
                </div>
                <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#741717]/20 to-transparent mt-1.5" />
              </div>
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#741717] ${
                        isActive
                          ? "text-[#741717]"
                          : "text-[#603a30]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-1 left-0 h-0.5 bg-[#741717]"
                          layoutId="activeNav"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <motion.a
              href="tel:+79310070752"
              className="text-sm font-medium text-[#603a30] hover:text-[#741717] transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              +7 (931) 007-07-52
            </motion.a>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              <Link
                href="/booking"
                className="bg-[#741717] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#8c1c1c] transition-all duration-300 inline-block hover:-translate-y-0.5 hover:shadow-md"
              >
                Связаться
              </Link>
            </motion.div>
          </nav>
          <button
            className="z-50 flex flex-col items-center justify-center md:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Открыть меню</span>
            <motion.span
              className="mb-1 h-0.5 w-6 rounded-full bg-[#741717]"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="h-0.5 w-6 rounded-full bg-[#741717]"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="mt-1 h-0.5 w-6 rounded-full bg-[#741717]"
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute left-0 w-full bg-white md:hidden border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center px-4 pt-2 pb-5">
                <ul className="flex flex-col items-center gap-4 w-full">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={`mobile-${link.href}`}
                      className="w-full text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block py-2 text-base font-medium transition-colors duration-300 hover:text-[#741717] ${
                          pathname === link.href ? "text-[#741717]" : "text-[#603a30]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="tel:+79310070752"
                  className="mt-4 py-2 text-base font-medium text-[#603a30] hover:text-[#741717] transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  +7 (931) 007-07-52
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="w-full"
                >
                  <Link
                    href="/booking"
                    onClick={closeMenu}
                    className="mt-4 w-full text-center bg-[#741717] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#8c1c1c] transition-colors duration-300 block"
                  >
                    Связаться
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}