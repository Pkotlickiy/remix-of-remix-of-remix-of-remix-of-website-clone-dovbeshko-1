import Link from "next/link";
import { Shield, FileText, Scale, Gavel, Briefcase, BookOpen } from "lucide-react";

// Services section used on /services page and homepage
// Server Component (no interactivity needed)
export default function Services() {
  const items = [
    {
      icon: Shield,
      title: "Защита по уголовным делам",
      desc: "Консультации, защита на следствии и в суде, обжалование приговоров.",
      href: "/practice/criminal",
    },
    {
      icon: Briefcase,
      title: "Военное право",
      desc: "Помощь военнослужащим и призывникам, споры с военкоматами и частями.",
      href: "/practice/military",
    },
    {
      icon: FileText,
      title: "Составление документов",
      desc: "Иски, жалобы, заявления, договоры — подготовка и правовая экспертиза.",
      href: "/services/document-preparation",
    },
    {
      icon: Scale,
      title: "Гражданские споры",
      desc: "Недвижимость, наследство, потребительские споры и иные категории дел.",
      href: "/practice/realestate",
    },
    {
      icon: Gavel,
      title: "Представительство в суде",
      desc: "Ведение дела в судах всех инстанций, досудебное урегулирование.",
      href: "/services/court-representation",
    },
    {
      icon: BookOpen,
      title: "Правовые консультации",
      desc: "Первичная и расширенная консультация, правовая позиция и стратегия.",
      href: "/booking",
    },
  ];

  return (
    <section className="bg-[var(--color-secondary)]/40 py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
            Юридическая помощь в Санкт-Петербурге
          </p>
          <h2 className="font-display text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
            Основные услуги
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Комплексная юридическая поддержка: от консультации и подготовки документов до
            представительства в суде.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, href }) => (
            <div
              key={title}
              className="group rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-[var(--color-primary)]">
                {title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{desc}</p>
              <Link
                href={href}
                className="text-sm font-medium text-[var(--color-primary)] underline-offset-4 hover:underline"
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}