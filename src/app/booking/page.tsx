import Header from "@/components/sections/header";
import ContactSection from "@/components/sections/contact";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запись на консультацию",
  description: "Записаться на консультацию к адвокату Довбешко С.Ю. в Санкт-Петербурге. Первичная консультация по уголовным, военным делам, недвижимости, наследственным спорам.",
  keywords: ["консультация адвоката", "запись к юристу", "юридическая консультация спб"],
  openGraph: {
    title: "Запись на консультацию | Адвокат Довбешко С.Ю.",
    description: "Записаться на консультацию к адвокату в Санкт-Петербурге. Профессиональная юридическая помощь.",
    url: "https://advokat-dovbeshko.ru/booking",
  },
  alternates: {
    canonical: '/booking',
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-10">
          <div className="container">
            <h1 className="mb-6 text-4xl font-bold text-[var(--color-primary)]">Запись на консультацию</h1>
            <p className="mb-10 text-muted-foreground">
              Оставьте заявку на консультацию, и я свяжусь с вами для уточнения деталей и времени встречи.
            </p>
          </div>
        </section>
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}