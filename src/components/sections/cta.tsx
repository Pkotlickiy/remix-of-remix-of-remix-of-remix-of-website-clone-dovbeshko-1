"use client";
import Link from 'next/link';
import { Phone, MapPin, ClipboardList, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-r from-primary to-[#741717] py-16 text-white md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}>

      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-display text-4xl font-bold text-white md:text-5xl mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}>

          Нужна юридическая помощь?
        </motion.h2>
        <motion.p
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}>

          Получите профессиональную консультацию адвоката. Защитим ваши права и интересы.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}>

          <Link
            href="/booking"
            className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-8 py-3 text-base font-medium text-primary transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">

            <ClipboardList className="h-5 w-5" />
            Получить консультацию
          </Link>
          <Link
            href="/contacts"
            className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white bg-transparent px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">

            <MessageSquare className="h-5 w-5" />
            Связаться с нами
          </Link>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-3xl border-t border-white/20 pt-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}>

          <div className="flex flex-col items-center justify-center gap-6 text-sm sm:flex-row sm:gap-12">
            <a
              href="tel:+79310070752"
              className="flex items-center gap-2 transition-all duration-300 hover:text-white/80 hover:-translate-y-0.5 !text-xl">

              <Phone className="h-4 w-4 !text-white" />
              <span className="!text-white !text-xl !font-bold">+7 (931) 007-07-52</span>
            </a>
            <div className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
              <MapPin className="h-4 w-4 !text-[26px]" />
              <span className="!text-xl">Санкт-Петербург, Московский проспект 143</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>);

};

export default CtaSection;