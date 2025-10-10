import Header from "@/components/sections/header";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты адвоката Довбешко С.Ю. в Санкт-Петербурге. Адрес офиса: Московский пр-кт. 143. Телефон: +7 (931) 007-07-52. Email: S0070752@mail.ru",
  keywords: ["контакты адвоката", "адрес юриста спб", "телефон адвоката"],
  openGraph: {
    title: "Контакты | Адвокат Довбешко С.Ю.",
    description: "Адрес, телефон, email адвоката в Санкт-Петербурге. Московский пр-кт. 143.",
    url: "https://advokat-dovbeshko.ru/contacts",
  },
  alternates: {
    canonical: '/contacts',
  },
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-10">
          <div className="container">
            <h1 className="mb-6 text-4xl font-bold text-[var(--color-primary)]">Контакты</h1>
            <p className="mb-10 text-muted-foreground">
              Свяжитесь со мной удобным для вас способом или отправьте сообщение через форму ниже.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}