"use client";
import Image from 'next/image';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section id="about" className="bg-secondary py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.span className="text-sm font-medium uppercase tracking-widest text-primary/80"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Рег. номер 78/8409
          </motion.span>
          <motion.h2 className="font-display mt-2 text-center text-4xl font-bold text-primary md:text-5xl"
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Об адвокате
          </motion.h2>
          <motion.div className="mx-auto mt-4 h-0.5 w-24 bg-primary/30"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-lg leading-relaxed text-foreground/90">
              <span className="font-display float-left mr-2 mt-1 text-5xl font-bold text-primary leading-none">Д</span>
              овбешко Светлана Юрьевна — адвокат с обширным опытом успешной практики в различных отраслях права. Моя профессиональная философия строится на трех принципах: глубокое погружение в каждое дело, индивидуальный подход к каждому клиенту и безупречная репутация, основанная на реальных результатах. Я не просто решаю юридические проблемы — я защищаю ваши интересы с максимальной эффективностью и преданностью делу.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-semibold text-foreground/80">Высшее юридическое образование</span>
              </li>
              <li className="flex items-start">
                <Award className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-semibold text-foreground/80">Член адвокатской палаты Санкт-Петербурга</span>
              </li>
              <li className="flex items-start">
                <Award className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-semibold text-foreground/80">Постоянное повышение квалификации</span>
              </li>
            </ul>
            <div className="border-l-4 border-amber-300 bg-secondary p-6">
              <h4 className="font-display mb-2 text-xl font-bold text-primary">Профессиональный подход:</h4>
              <p className="font-body italic text-muted-foreground">
                В своей работе я руководствуюсь принципами профессионализма и этики. Я прилагаю максимум усилий для достижения наилучшего результата в каждом деле, однако исход зависит от множества факторов. Моя задача — обеспечить квалифицированную юридическую помощь и защиту ваших интересов на всех этапах правового процесса.
              </p>
            </div>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center lg:pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fdc2de3f-ceaa-4199-b016-17c223606fb5/visual-edit-uploads/1758729391680-3lhymjpaq7h.jpg"
                alt="Адвокат Довбешко Светлана Юрьевна в профессиональной обстановке"
                width={384}
                height={512}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.03]" />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-display text-right text-lg font-semibold text-white">
                  С.Ю. Довбешко
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>);

};

export default AboutSection;