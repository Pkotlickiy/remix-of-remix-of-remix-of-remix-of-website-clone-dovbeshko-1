import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог о правовых вопросах",
  description: "Актуальные статьи и новости по различным областям права в России. Практические советы адвоката, разбор сложных случаев, анализ судебной практики 2024-2025 года.",
  keywords: ["юридический блог", "правовые статьи", "судебная практика", "юридические советы", "правовая помощь"],
  openGraph: {
    title: "Блог о правовых вопросах | Адвокат Довбешко С.Ю.",
    description: "Актуальные статьи и новости по различным областям права. Практические советы, разбор сложных случаев.",
    url: "https://advokat-dovbeshko.ru/blog",
  },
  alternates: {
    canonical: '/blog',
  },
};

const BLOG_POSTS = [
{
  slug: "zashchita-prav-voennosluzhaschih",
  title: "Защита прав военнослужащих: основные аспекты",
  excerpt: "Разбираем ключевые вопросы правовой защиты военнослужащих, включая споры по контракту, денежному довольствию и дисциплинарным взысканиям.",
  category: "Военное право",
  date: "15 января 2025",
  readTime: "5 мин"
},
{
  slug: "uvolnenie-po-state-zashchita",
  title: "Увольнение по статье: как защитить свои права",
  excerpt: "Подробное руководство по защите от незаконного увольнения. Основания для увольнения, порядок обжалования и восстановление на работе.",
  category: "Трудовое право",
  date: "12 января 2025",
  readTime: "6 мин"
},
{
  slug: "osparivanie-zaveshchaniya",
  title: "Как оспорить завещание: пошаговая инструкция",
  excerpt: "Подробное руководство по оспариванию завещаний в суде. Основания, сроки, необходимые доказательства и судебная практика.",
  category: "Наследственное право",
  date: "10 января 2025",
  readTime: "7 мин"
},
{
  slug: "razdel-imushchestva-pri-razvode",
  title: "Раздел имущества при разводе: что нужно знать",
  excerpt: "Как правильно разделить совместно нажитое имущество при расторжении брака. Особенности раздела недвижимости, автомобилей и долгов.",
  category: "Семейное право",
  date: "8 января 2025",
  readTime: "7 мин"
},
{
  slug: "pokupka-nedvizhimosti-riski",
  title: "Покупка недвижимости: как избежать рисков",
  excerpt: "Юридические аспекты сделок с недвижимостью. Проверка чистоты документов, скрытые обременения и способы защиты покупателя.",
  category: "Недвижимость",
  date: "5 января 2025",
  readTime: "6 мин"
},
{
  slug: "obzhalovanie-shtrafov-gibdd",
  title: "Обжалование штрафов ГИБДД: пошаговая инструкция",
  excerpt: "Как правильно обжаловать постановление о штрафе. Сроки обжалования, порядок подачи жалобы и типичные ошибки водителей.",
  category: "Административное право",
  date: "3 января 2025",
  readTime: "5 мин"
},
{
  slug: "ugolovnaya-zashchita-na-stadii-sledstviya",
  title: "Защита на стадии следствия: что важно знать",
  excerpt: "Роль адвоката на этапе предварительного следствия. Какие права имеет подозреваемый и как эффективно построить защиту.",
  category: "Уголовное право",
  date: "28 декабря 2024",
  readTime: "8 мин"
},
{
  slug: "nalogovye-spory-zashchita",
  title: "Налоговые споры: как защититься от доначислений",
  excerpt: "Защита от необоснованных налоговых претензий. Обжалование решений налоговых органов, представительство в суде.",
  category: "Налоговое право",
  date: "25 декабря 2024",
  readTime: "6 мин"
},
{
  slug: "zemelnye-spory-granitsy",
  title: "Земельные споры: установление границ участка",
  excerpt: "Как правильно установить границы земельного участка, что делать при конфликтах с соседями и какие документы необходимы.",
  category: "Земельное право",
  date: "20 декабря 2024",
  readTime: "5 мин"
},
{
  slug: "bankrotstvo-fizicheskih-lits",
  title: "Банкротство физических лиц: плюсы и минусы",
  excerpt: "Когда стоит подавать на банкротство, как проходит процедура, какие долги можно списать и какие последствия ждут должника.",
  category: "Банкротство",
  date: "18 декабря 2024",
  readTime: "8 мин"
},
{
  slug: "meditsinskaya-oshibka-kompensatsiya",
  title: "Медицинская ошибка: право на компенсацию",
  excerpt: "Как доказать медицинскую ошибку и получить компенсацию. Порядок действий, экспертиза и судебная практика по делам о врачебных ошибках.",
  category: "Медицинское право",
  date: "15 декабря 2024",
  readTime: "6 мин"
},
{
  slug: "korporativnye-spory-aktsionery",
  title: "Корпоративные споры: защита прав акционеров",
  excerpt: "Как защитить права миноритарных акционеров. Обжалование решений общих собраний, споры с мажоритариями, взыскание дивидендов.",
  category: "Корпоративное право",
  date: "12 декабря 2024",
  readTime: "7 мин"
},
{
  slug: "vozvrat-nekachestvennogo-tovara",
  title: "Возврат некачественного товара: права потребителя",
  excerpt: "Пошаговая инструкция по возврату товара ненадлежащего качества. Сроки, претензии, неустойки и судебное взыскание.",
  category: "Защита прав потребителей",
  date: "10 декабря 2024",
  readTime: "5 мин"
},
{
  slug: "arbitrazhnye-spory-praktika",
  title: "Арбитражные споры: актуальная судебная практика",
  excerpt: "Обзор последних изменений в арбитражной практике. Договорные споры, взыскание задолженности и признание сделок недействительными.",
  category: "Арбитраж",
  date: "5 декабря 2024",
  readTime: "7 мин"
},
{
  slug: "neosnovatelnoe-obogashchenie-praktika",
  title: "Неосновательное обогащение: судебная практика 2024",
  excerpt: "Анализ актуальной судебной практики по делам о неосновательном обогащении. Как вернуть незаконно полученные денежные средства.",
  category: "Неосновательное обогащение",
  date: "1 декабря 2024",
  readTime: "6 мин"
}];


export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container">
            <div className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:underline">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Блог</span>
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary md:text-5xl">
              Блог о правовых вопросах
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Актуальные статьи и новости по различным областям права. Практические советы, разбор сложных случаев и анализ судебной практики.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) =>
              <article
                key={post.slug}
                className="group rounded-lg border bg-card transition-all hover:shadow-lg">

                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h2 className="mb-3 font-display text-xl font-bold text-primary group-hover:underline">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        <time>{post.date}</time>
                      </div>
                      <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80">

                        Читать далее
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-12 text-white">
          <div className="container text-center">
            <h2 className="mb-4 font-display text-3xl font-bold">
              Нужна консультация по вашему делу?
            </h2>
            <p className="mb-6 text-lg opacity-90 !text-white">
              Получите профессиональную юридическую помощь
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="rounded-md bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100">

                Записаться на консультацию
              </Link>
              <Link
                href="/booking"
                className="rounded-md border border-white px-6 py-3 font-semibold transition-colors hover:bg-white/10 !text-white">

                Связаться
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}