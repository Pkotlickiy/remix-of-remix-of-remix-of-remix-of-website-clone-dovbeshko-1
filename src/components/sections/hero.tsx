"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden bg-white py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#f0e9e4]/60 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f8f5f2]/70 blur-2xl"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] [mask-image:radial-gradient(closest-side,black,transparent)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'conic-gradient(from 0deg, rgba(139,38,53,0.35), rgba(212,165,165,0.25), rgba(245,240,240,0.2), rgba(139,38,53,0.35))',
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/4 top-10 h-6 w-6 rounded-full bg-primary/20 blur-[2px]"
          animate={{ y: [0, 18, 0], x: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute left-12 bottom-16 h-4 w-4 rounded-full bg-accent/40"
          animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/3 top-8 h-3 w-3 rounded-full bg-secondary/70"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"></div>
      <div className="container relative grid items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <motion.span
              className="mb-2 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-primary"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Адвокат в Санкт-Петербурге
            </motion.span>
            <motion.h1
              className="text-4xl font-bold text-primary font-display md:text-5xl lg:text-6xl mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              Довбешко Светлана Юрьевна
              <br />
              <span className="relative inline-block text-3xl md:text-4xl lg:text-5xl">
                Адвокат в СПБ
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-primary"></span>
              </span>
            </motion.h1>
            <motion.p
              className="max-w-2xl text-xl text-[#603a30] md:text-2xl mb-8"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Профессиональная юридическая помощь в Санкт-Петербурге. Защита,
              которой можно доверять
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            <p className="max-w-[600px] text-[#603a30] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <span className="relative inline-block text-lg font-bold text-primary md:text-xl lg:text-2xl">
                Светлана Юрьевна Довбешко
              </span>
              . Квалифицированная юридическая поддержка и защита ваших интересов во
              всех сферах права: от Земельного права и наследственных споров
              до уголовных дел и военных вопросов. Индивидуальный подход к
              каждому доверителю с ориентацией на эффективный результат.
            </p>
          </motion.div>
          <motion.div
            className="mt-4"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32 }}
          >
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-offset-background transition-all duration-300 hover:bg-[#603a30] hover:-translate-y-0.5 hover:shadow-md">

                Записаться на консультацию
              </a>
              <a
                href="#about"
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5">

                Узнать больше
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative mx-auto mt-10 w-[280px] max-w-full md:mt-0 md:w-[360px] lg:w-[420px]"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          animate={{ y: [0, -8, 0] }}
        >
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-accent/40 blur-xl"></div>
          <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-secondary blur-2xl"></div>
          <div className="relative rounded-full border-4 border-secondary p-2 shadow-xl">
            <div className="overflow-hidden rounded-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/31045dba-385f-4adf-9110-afd8d5920f23/visual-edit-uploads/1758718176168-iro1wsxuy1.jpg"
                alt="Адвокат Довбешко Светлана Юрьевна"
                width={800}
                height={800}
                className="object-cover !w-full !h-full !max-w-full"
                priority />

            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>);

}