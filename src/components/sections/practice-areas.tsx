"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  House,
  Map,
  Scroll,
  Scale,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const practiceAreasData = [
  {
    icon: Shield,
    title: "Уголовное право",
    description: "Защита на всех стадиях уголовного процесса в Санкт-Петербурге",
    href: "/practice/criminal",
  },
  {
    icon: ShieldCheck,
    title: "Военное право",
    description: "Юридическая помощь военнослужащим и призывникам в СПб",
    href: "/practice/military",
  },
  {
    icon: House,
    title: "Недвижимость",
    description: "Сопровождение сделок с недвижимостью в Санкт-Петербурге",
    href: "/practice/realestate",
  },
  {
    icon: Map,
    title: "Земельное право",
    description: "Решение земельных споров и оформление прав на землю в СПб",
    href: "/practice/land",
  },
  {
    icon: Scroll,
    title: "Наследственное право",
    description: "Оформление наследства и решение наследственных споров",
    href: "/practice/inheritance",
  },
  {
    icon: Scale,
    title: "Неосновательное обогащение",
    description: "Возврат неосновательно полученных средств и имущества",
    href: "/practice/unjust-enrichment",
  },
  {
    icon: Stethoscope,
    title: "Медицинское право",
    description: "Защита прав пациентов и медицинских работников в СПб",
    href: "/practice/medical",
  },
  {
    icon: ShieldCheck,
    title: "Защита прав потребителей",
    description: "Возврат денег за некачественные товары и услуги в СПб",
    href: "/practice/consumer",
  },
  {
    icon: Scale,
    title: "Арбитраж",
    description: "Представительство в арбитражных судах Санкт-Петербурга",
    href: "/practice/arbitration",
  },
];

const PracticeAreas = () => {
  return (
    <motion.section
      className="bg-background py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              className="mb-8 text-center font-display text-3xl font-bold text-primary md:text-4xl"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Основные направления практики в СПб
            </motion.h2>
            <motion.p
              className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              Специализируемся на различных отраслях права, предоставляя
              квалифицированную юридическую помощь в Санкт-Петербурге и
              Ленинградской области.
            </motion.p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreasData.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * (idx % 9) }}
              >
                <Link
                  href={area.href}
                  className="group relative block overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="mb-2 font-display text-xl font-bold text-primary">
                        {area.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                      <span>Подробнее</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-[width] duration-300 group-hover:w-full"></div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default PracticeAreas;