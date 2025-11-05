"use client";

import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-footer-background text-footer-text font-body"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 !font-bold">
          {/* Column 1: About */}
          <motion.div
            className="md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="mb-3 font-display text-xl font-bold text-[#f0e9e4]">
              Адвокат Довбешко С.Ю.
            </h3>
            <p className="mb-3 text-sm text-gray-300 leading-relaxed">
              Профессиональная юридическая помощь с опытом более 10+ лет в Санкт-Петербурге.
            </p>
            <p className="text-xs text-gray-400">
              Рег. номер 78/8409
            </p>
          </motion.div>

          {/* Column 2: Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-3 text-base text-[#f0e9e4] !font-bold">
              Контакты
            </h4>
            <ul className="space-y-2.5">
              <motion.li
                className="flex items-center text-sm"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gray-400" />
                <a href="tel:+79310070752" className="ml-2 transition-colors hover:text-accent !text-white">
                  +7 (931) 007-07-52
                </a>
              </motion.li>
              <motion.li
                className="flex items-center text-sm"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-gray-400" />
                <a href="mailto:S0070752@mail.ru" className="ml-2 transition-colors hover:text-accent !text-white">
                  S0070752@mail.ru
                </a>
              </motion.li>
              <li className="flex items-start text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-gray-400" />
                <span className="ml-2">
                  196066, Санкт-Петербург, Московский пр-кт 216, Лит. А, офис 7 (1 минута от м. Московская).
              Вход со стороны ул. Алтайская д. 3
                </span>
              </li>
              <li className="flex items-center text-sm">
                <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" />
                <span className="ml-2">
                  Пн-Пт: 9:00-20:00, Сб: 9:00-15:00
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="mb-3 text-base text-[#f0e9e4] !font-bold">
              Услуги
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/services/consultations", label: "Консультации" },
                { href: "/services/court-representation", label: "Представительство в суде" },
                { href: "/services/document-preparation", label: "Составление документов" },
                { href: "/services/legal-analysis", label: "Правовой анализ" }
              ].map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={item.href} className="text-sm transition-colors hover:text-accent !text-white">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/services" className="mt-1 inline-flex items-center text-sm font-semibold transition-colors hover:text-white !text-white !whitespace-pre-line">
                  Вся оказываемая помощь
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 4: Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-3 text-base text-[#f0e9e4] !font-bold">
              Области практики
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/practice/criminal", label: "Уголовные дела" },
                { href: "/practice/military", label: "Военное право" },
                { href: "/practice/realestate", label: "Недвижимость" },
                { href: "/practice/inheritance", label: "Наследственные споры" }
              ].map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={item.href} className="text-sm transition-colors hover:text-accent !text-white">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/practice" className="mt-1 inline-flex items-center text-sm font-semibold transition-colors hover:text-white !text-white">
                  Все области практики
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p>© 2025 Адвокат Довбешко С.Ю. Все права защищены.</p>
          <motion.div
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/privacy-policy" className="transition-colors hover:text-accent !text-white !text-sm">
              Политика конфиденциальности
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
