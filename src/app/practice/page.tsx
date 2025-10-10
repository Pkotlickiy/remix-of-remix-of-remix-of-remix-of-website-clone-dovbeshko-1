import Header from "@/components/sections/header";
import PracticeAreas from "@/components/sections/practice-areas";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import { Scale, Users, Award } from "lucide-react";

export default function PracticePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-muted/20 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                Области практики
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Основные направления моей юридической практики в Санкт-Петербурге. 
                Каждая область требует глубоких знаний законодательства и богатого 
                практического опыта. Выберите интересующий раздел, чтобы узнать подробности.
              </p>
            </div>
          </div>
        </section>

        <PracticeAreas />

        {/* Benefits Section */}
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-primary">15+</h3>
                <p className="text-muted-foreground">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">выигранных дел</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-primary">98%</h3>
                <p className="text-muted-foreground">успешных исходов</p>
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