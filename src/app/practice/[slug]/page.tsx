import Header from "@/components/sections/header";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Scale, Shield, Building2, Landmark, FileText, TrendingUp, Stethoscope, ShoppingCart, Briefcase, ArrowRight, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

const PRACTICE_MAP: Record<string, { title: string; description: string; icon: any; whatIncluded: string[]; whyImportant: string }> = {
  criminal: {
    title: "Уголовное право",
    description:
      "Защита на всех стадиях уголовного процесса: от доследственной проверки до апелляции. Подготовка жалоб, ходатайств, участие в следственных действиях, стратегия защиты.",
    icon: Shield,
    whatIncluded: [
      "Консультация по уголовным делам и оценка перспектив",
      "Участие в следственных действиях и допросах",
      "Подготовка жалоб и ходатайств",
      "Представительство в суде всех инстанций",
      "Обжалование приговоров в апелляции и кассации"
    ],
    whyImportant: "Профессиональная защита с первых дней уголовного преследования критически важна для минимизации рисков, сохранения прав и достижения наилучшего результата."
  },
  military: {
    title: "Военное право",
    description:
      "Правовая помощь военнослужащим и призывникам: споры по контракту и денежному довольствию, дисциплинарные взыскания, обжалование решений призывной комиссии.",
    icon: Shield,
    whatIncluded: [
      "Консультации по военному праву",
      "Обжалование решений призывной комиссии",
      "Споры по контракту и денежному довольствию",
      "Защита от дисциплинарных взысканий",
      "Представительство в военных судах"
    ],
    whyImportant: "Военнослужащие имеют особый правовой статус. Профессиональная помощь обеспечивает защиту их прав и законных интересов."
  },
  realestate: {
    title: "Недвижимость",
    description:
      "Сопровождение сделок с недвижимостью, проверка юридической чистоты, споры о праве собственности, признание сделок недействительными.",
    icon: Building2,
    whatIncluded: [
      "Юридическая проверка объектов недвижимости",
      "Сопровождение сделок купли-продажи",
      "Оформление и регистрация прав собственности",
      "Разрешение споров о праве собственности",
      "Признание сделок недействительными"
    ],
    whyImportant: "Недвижимость - крупная инвестиция. Юридическое сопровождение минимизирует риски и обеспечивает законность сделки."
  },
  land: {
    title: "Земельное право",
    description:
      "Земельные споры, установление границ, оформление прав на землю, сервитуты, обжалование кадастровой стоимости.",
    icon: Landmark,
    whatIncluded: [
      "Установление и оспаривание границ земельных участков",
      "Оформление прав на земельные участки",
      "Споры о сервитутах и межевании",
      "Обжалование кадастровой стоимости",
      "Судебная защита земельных прав"
    ],
    whyImportant: "Земельные вопросы требуют глубокого знания законодательства. Профессиональная помощь защитит ваши интересы и права на землю."
  },
  inheritance: {
    title: "Наследственное право",
    description:
      "Ведение наследственных дел, оформление прав, восстановление сроков принятия наследства, оспаривание завещаний.",
    icon: FileText,
    whatIncluded: [
      "Оформление наследственных прав",
      "Восстановление пропущенных сроков",
      "Оспаривание завещаний",
      "Разрешение споров между наследниками",
      "Защита прав на обязательную долю"
    ],
    whyImportant: "Наследственные споры часто бывают сложными и эмоциональными. Юридическая поддержка обеспечит справедливое распределение имущества."
  },
  "unjust-enrichment": {
    title: "Неосновательное обогащение",
    description:
      "Иски о возврате неосновательно полученных денежных средств и имущества, защита прав при необоснованном взыскании.",
    icon: TrendingUp,
    whatIncluded: [
      "Анализ оснований для взыскания",
      "Подготовка исков о возврате средств",
      "Защита от необоснованных требований",
      "Судебное представительство",
      "Исполнение судебных решений"
    ],
    whyImportant: "Возврат неосновательно полученного требует точного правового обоснования. Профессиональная помощь повышает шансы на успех."
  },
  medical: {
    title: "Медицинское право",
    description:
      "Защита прав пациентов и медработников, споры о качестве оказания медицинской помощи, компенсации вреда здоровью.",
    icon: Stethoscope,
    whatIncluded: [
      "Консультации по медицинскому праву",
      "Анализ качества оказанной помощи",
      "Взыскание компенсации вреда здоровью",
      "Защита прав медицинских работников",
      "Судебное представительство в медицинских спорах"
    ],
    whyImportant: "Медицинские споры требуют специальных знаний. Профессиональная защита обеспечит компенсацию причиненного вреда."
  },
  consumer: {
    title: "Защита прав потребителей",
    description:
      "Возврат денежных средств за некачественные товары и услуги, штрафы и неустойки, досудебные претензии и судебное представительство.",
    icon: ShoppingCart,
    whatIncluded: [
      "Подготовка претензий к продавцам/исполнителям",
      "Возврат средств за некачественные товары",
      "Взыскание неустоек и компенсаций",
      "Защита от навязанных услуг",
      "Судебное представительство"
    ],
    whyImportant: "Закон защищает потребителей. Профессиональная помощь обеспечит возврат средств и компенсацию морального вреда."
  },
  arbitration: {
    title: "Арбитраж",
    description:
      "Представительство в арбитражных судах: договорные споры, взыскание задолженности, признание сделок недействительными.",
    icon: Briefcase,
    whatIncluded: [
      "Анализ перспектив арбитражного спора",
      "Подготовка исковых заявлений и отзывов",
      "Представительство в арбитражных судах",
      "Взыскание задолженности с контрагентов",
      "Обжалование судебных актов"
    ],
    whyImportant: "Арбитражные споры требуют профессионализма. Опытный представитель защитит интересы вашего бизнеса."
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = PRACTICE_MAP[slug];

  if (!item) {
    return {
      title: "Раздел не найден",
    };
  }

  return {
    title: item.title,
    description: item.description,
    keywords: [item.title, "юридическая помощь", "адвокат санкт-петербург", "юрист спб"],
    openGraph: {
      title: `${item.title} | Адвокат Довбешко С.Ю.`,
      description: item.description,
      url: `https://advokat-dovbeshko.ru/practice/${slug}`,
    },
    alternates: {
      canonical: `/practice/${slug}`,
    },
  };
}

export default async function PracticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = PRACTICE_MAP[slug];
  const Icon = item?.icon;

  // Get other practice areas (exclude current)
  const otherPractices = Object.entries(PRACTICE_MAP)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-muted/20 py-16 md:py-24">
          <div className="container">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <Link href="/practice" className="hover:text-primary transition-colors">Практика</Link>
              {item && (
                <>
                  <span className="mx-2">/</span>
                  <span className="text-foreground">{item.title}</span>
                </>
              )}
            </div>

            <div className="flex items-start gap-6">
              {Icon && (
                <div className="hidden md:block rounded-2xl bg-primary/10 p-6">
                  <Icon className="h-16 w-16 text-primary" />
                </div>
              )}
              <div className="flex-1">
                <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                  {item ? item.title : "Раздел не найден"}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {item
                    ? item.description
                    : "Запрошенный подраздел практики не найден. Вернитесь к списку и выберите доступный раздел."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {item ? (
          <>
            {/* Main Content */}
            <section className="py-12 md:py-16">
              <div className="container">
                <div className="grid gap-8 lg:grid-cols-3">
                  {/* Left Column - Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* What's Included */}
                    <div className="rounded-xl border bg-card p-8 shadow-sm">
                      <h2 className="mb-6 text-2xl font-semibold text-primary">
                        Что входит в услугу
                      </h2>
                      <ul className="space-y-3">
                        {item.whatIncluded.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Why Important */}
                    <div className="rounded-xl border bg-accent/10 p-8">
                      <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Почему это важно
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.whyImportant}
                      </p>
                    </div>

                    {/* How to Start */}
                    <div className="rounded-xl border bg-card p-8 shadow-sm">
                      <h2 className="mb-6 text-2xl font-semibold text-primary">
                        Как начать работу
                      </h2>
                      <div className="space-y-4">
                        {[
                          "Свяжитесь для первичной консультации",
                          "Передайте документы для оценки перспектив",
                          "Согласуем стратегию и заключим соглашение",
                          "Приступаем к защите ваших интересов"
                        ].map((step, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                              {index + 1}
                            </div>
                            <p className="text-muted-foreground pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Sidebar */}
                  <div className="lg:sticky lg:top-24 space-y-6 h-fit">
                    {/* Contact Card */}
                    <div className="rounded-xl border bg-card p-6 shadow-sm">
                      <h3 className="mb-4 text-lg font-semibold text-primary">
                        Контакты
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="tel:+79310070752"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="h-5 w-5" />
                          <span>+7 (931) 007-07-52</span>
                        </a>
                        <a
                          href="mailto:S0070752@mail.ru"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                          <span>S0070752@mail.ru</span>
                        </a>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Clock className="h-5 w-5" />
                          <span>Пн-Пт: 9:00-18:00</span>
                        </div>
                      </div>
                      <div className="mt-6 space-y-3">
                        <Link
                          href="/booking"
                          className="block w-full rounded-lg bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          Записаться на консультацию
                        </Link>
                        <Link
                          href="/contacts"
                          className="block w-full rounded-lg border px-6 py-3 text-center font-semibold text-foreground transition-colors hover:bg-muted"
                        >
                          Связаться
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Other Practice Areas */}
            <section className="bg-muted/40 py-12 md:py-16">
              <div className="container">
                <h2 className="mb-8 text-2xl font-semibold text-primary">
                  Другие области практики
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {otherPractices.map((practice) => {
                    const PracticeIcon = practice.icon;
                    return (
                      <Link
                        key={practice.slug}
                        href={`/practice/${practice.slug}`}
                        className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                      >
                        <PracticeIcon className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                        <h3 className="mb-2 text-lg font-semibold text-primary">
                          {practice.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {practice.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-primary">
                          Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/practice"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Все области практики <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="py-12 md:py-16">
            <div className="container">
              <div className="rounded-xl border bg-card p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Перейдите на страницу «Практика», чтобы выбрать нужный раздел.
                </p>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Все области практики <ArrowRight className="h-4 w-4" />
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