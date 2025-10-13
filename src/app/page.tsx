import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import PracticeAreas from '@/components/sections/practice-areas'
import AboutSection from '@/components/sections/about'
import Testimonials from '@/components/sections/testimonials'
import ProcessSection from '@/components/sections/process'
import ContactSection from '@/components/sections/contact'
import CtaSection from '@/components/sections/cta'
import Footer from '@/components/sections/footer'
import { OrganizationStructuredData, LocalBusinessStructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Адвокат Довбешко С.Ю. в Санкт-Петербурге | Профессиональная юридическая помощь',
  description: 'Адвокат Довбешко Светлана Юрьевна в Санкт-Петербурге. Профессиональная юридическая помощь по уголовным, военным делам, недвижимости, наследственным спорам. Опыт более 10 лет. Записаться на консультацию.',
  openGraph: {
    title: 'Адвокат Довбешко С.Ю. в Санкт-Петербурге',
    description: 'Профессиональная юридическая помощь. Уголовное право, военное право, недвижимость, наследственные споры.',
    url: 'https://advokat-dovbeshko.ru',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <OrganizationStructuredData />
      <LocalBusinessStructuredData />
      <Header />
      <main id="main-content" className="pt-16">
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <Testimonials />
        <ProcessSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}