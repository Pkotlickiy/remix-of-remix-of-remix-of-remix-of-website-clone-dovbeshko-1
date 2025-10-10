import Header from "@/components/sections/header";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  FileText, 
  Scale, 
  MessageCircle, 
  Search, 
  Handshake, 
  FileCheck, 
  CheckCircle,
  Phone,
  Mail,
  Clock
} from "lucide-react";

const SERVICES: Record<string, {
  title: string;
  intro: string;
  points: string[];
  icon: any;
}> = {
  "document-preparation": {
    title: "Составление юридических документов",
    intro:
      "Подготовка исков, жалоб, ходатайств, заявлений, договоров и иных документов с учётом судебной практики и ваших целей.",
    points: [
      "Исковые заявления, отзывы, возражения",
      "Апелляционные и кассационные жалобы",
      "Ходатайства, претензии, заявления в госорганы",
      "Договоры (купля‑продажа, аренда, подряды, услуги)",
      "Правовая экспертиза уже подготовленных документов",
    ],
    icon: FileText,
  },
  "court-representation": {
    title: "Представительство в суде",
    intro:
      "Полное сопровождение вашего дела: от подготовки позиции и досудебного урегулирования до представительства в судах всех инстанций.",
    points: [
      "Анализ ситуации и перспектив дела",
      "Подготовка правовой позиции и доказательственной базы",
      "Представительство в судах первой, апелляционной и кассационной инстанций",
      "Медиация и досудебное урегулирование",
      "Исполнительное производство и контроль исполнения",
    ],
    icon: Scale,
  },
  "consultations": {
    title: "Правовые консультации",
    intro:
      "Первичная и расширенная консультация по вашей ситуации, правовая оценка перспектив дела и рекомендации по дальнейшим действиям.",
    points: [
      "Анализ документов и обстоятельств дела",
      "Оценка правовых перспектив и рисков",
      "Рекомендации по стратегии защиты",
      "Разъяснение норм законодательства",
      "План дальнейших действий",
    ],
    icon: MessageCircle,
  },
  "legal-analysis": {
    title: "Правовой анализ",
    intro:
      "Комплексное исследование правовой ситуации, подготовка письменного заключения с оценкой перспектив и рекомендациями.",
    points: [
      "Изучение документов и материалов дела",
      "Анализ применимого законодательства и судебной практики",
      "Выявление правовых рисков и возможностей",
      "Подготовка развёрнутого письменного заключения",
      "Рекомендации по минимизации рисков",
    ],
    icon: Search,
  },
  "pre-trial-settlement": {
    title: "Досудебное урегулирование",
    intro:
      "Разрешение споров без обращения в суд: переговоры, претензионная работа, медиация и достижение компромисса.",
    points: [
      "Подготовка и направление претензий",
      "Ведение переговоров с оппонентом",
      "Медиация и примирительные процедуры",
      "Заключение мировых соглашений",
      "Защита интересов на досудебной стадии",
    ],
    icon: Handshake,
  },
  "execution": {
    title: "Исполнительное производство",
    intro:
      "Сопровождение исполнения судебных решений, контроль действий приставов и защита прав в исполнительном производстве.",
    points: [
      "Подача документов в службу судебных приставов",
      "Контроль действий приставов",
      "Обжалование постановлений и бездействия",
      "Розыск имущества должника",
      "Защита прав взыскателя и должника",
    ],
    icon: FileCheck,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    return {
      title: "Услуга не найдена",
    };
  }

  return {
    title: service.title,
    description: service.intro,
    keywords: [service.title, "юридические услуги", "адвокат спб", "правовая помощь"],
    openGraph: {
      title: `${service.title} | Адвокат Довбешко С.Ю.`,
      description: service.intro,
      url: `https://advokat-dovbeshko.ru/services/${slug}`,
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return notFound();
  
  const Icon = service.icon;
  
  // Get related services (exclude current)
  const relatedServices = Object.entries(SERVICES)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, val]) => ({ slug: key, ...val }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">Главная</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="transition-colors hover:text-primary">Услуги</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>
            
            <div className="flex items-start gap-6">
              <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  {service.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* What's Included Card */}
                <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-bold text-primary">Что входит в услугу</h2>
                  <ul className="space-y-4">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why It's Important Card */}
                <div className="rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold text-primary">Почему это важно</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Профессиональный подход к решению вашего вопроса обеспечивает надёжную защиту ваших прав 
                    и интересов. Я использую многолетний опыт и знание судебной практики для достижения 
                    наилучшего результата в каждом конкретном случае.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-sm">
                    <h3 className="mb-3 text-lg font-semibold text-primary">Записаться на консультацию</h3>
                    <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                      Обсудим вашу ситуацию, определим стратегию и согласуем условия сотрудничества
                    </p>
                    <Link
                      href="/booking"
                      className="block w-full rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-md transition hover:bg-primary/90 hover:shadow-lg"
                    >
                      Записаться
                    </Link>
                  </div>

                  {/* Contact Info Card */}
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Контакты
                    </h4>
                    <div className="space-y-3">
                      <a 
                        href="tel:+79310070752" 
                        className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                      >
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+7 (931) 007-07-52</span>
                      </a>
                      <a 
                        href="mailto:S0070752@mail.ru" 
                        className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                        <span>S0070752@mail.ru</span>
                      </a>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Clock className="mt-0.5 h-4 w-4 text-primary" />
                        <span>Пн-Пт: 9:00-18:00</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Info */}
                  <div className="rounded-xl border border-border bg-muted/30 p-6">
                    <h4 className="mb-2 text-sm font-semibold text-primary">Стоимость</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Определяется индивидуально в зависимости от сложности и объёма работ. 
                      Точные условия обсудим на консультации.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="border-t bg-muted/20 py-12 md:py-16">
            <div className="container">
              <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">Другие услуги</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map(({ slug: relatedSlug, title, intro, icon: RelatedIcon }) => (
                  <Link
                    key={relatedSlug}
                    href={`/services/${relatedSlug}`}
                    className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <RelatedIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-primary/80">
                      {title}
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                      {intro}
                    </p>
                    <span className="text-sm font-medium text-primary">
                      Подробнее →
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Все услуги →
                </Link>
              </div>
            </div>
          </section>
        )}

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}