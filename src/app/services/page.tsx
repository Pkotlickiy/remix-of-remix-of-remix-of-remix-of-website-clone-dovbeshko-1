import Header from "@/components/sections/header";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { FileText, Scale, MessageCircle, Search, Handshake, FileCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Юридические услуги",
  description: "Полный перечень юридических услуг адвоката Довбешко С.Ю. в Санкт-Петербурге: консультации, представительство в суде, составление документов и многое другое.",
  keywords: ["юридические услуги", "адвокат спб", "правовая помощь", "консультация юриста"],
  openGraph: {
    title: "Юридические услуги | Адвокат Довбешко С.Ю.",
    description: "Полный перечень юридических услуг адвоката Довбешко С.Ю. в Санкт-Петербурге",
    url: "https://advokat-dovbeshko.ru/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: MessageCircle,
      slug: "consultations",
      title: "Правовые консультации",
      desc: "Первичная и расширенная консультация по вашей ситуации, правовая оценка перспектив дела и рекомендации.",
    },
    {
      icon: Scale,
      slug: "court-representation",
      title: "Представительство в суде",
      desc: "Полное сопровождение дела от подготовки до представительства в судах всех инстанций.",
    },
    {
      icon: FileText,
      slug: "document-preparation",
      title: "Составление документов",
      desc: "Подготовка исков, жалоб, ходатайств, договоров с учётом судебной практики.",
    },
    {
      icon: Search,
      slug: "legal-analysis",
      title: "Правовой анализ",
      desc: "Комплексное исследование правовой ситуации с письменным заключением и рекомендациями.",
    },
    {
      icon: Handshake,
      slug: "pre-trial-settlement",
      title: "Досудебное урегулирование",
      desc: "Разрешение споров без суда: переговоры, претензии, медиация и компромиссы.",
    },
    {
      icon: FileCheck,
      slug: "execution",
      title: "Исполнительное производство",
      desc: "Сопровождение исполнения судебных решений, контроль действий приставов.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-16">
        <section className="bg-gradient-to-br from-muted/40 to-muted/20 py-12 md:py-20">
          <div className="container">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Услуги</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                Юридические услуги
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Полный спектр профессиональных юридических услуг для защиты ваших прав и интересов в Санкт-Петербурге. 
                Индивидуальный подход и многолетний опыт работы.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, slug, title, desc }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-primary group-hover:text-primary/80">
                    {title}
                  </h2>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/20 py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                Почему стоит обратиться за юридической помощью
              </h2>
              <div className="grid gap-6 sm:grid-cols-3 text-left">
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mb-3 text-3xl font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground">
                    лет успешной практики в области юриспруденции
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mb-3 text-3xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">
                    выигранных дел и довольных клиентов
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mb-3 text-3xl font-bold text-primary">98%</div>
                  <p className="text-sm text-muted-foreground">
                    положительных решений по делам
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-primary/90 hover:shadow-lg"
                >
                  Записаться на консультацию
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}