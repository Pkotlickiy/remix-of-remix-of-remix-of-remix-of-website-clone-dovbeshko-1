import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advokat-dovbeshko.ru'

  // Основные статические страницы
  const staticPages = [
    '',
    '/booking',
    '/contacts',
    '/privacy-policy',
  ]

  // Области практики
  const practiceAreas = [
    'criminal-law',
    'military-law',
    'real-estate',
    'inheritance',
    'civil-disputes',
    'administrative-law',
    'arbitration',
    'business-law',
    'family-law',
  ]

  // Услуги
  const services = [
    'legal-consultation',
    'court-representation',
    'document-preparation',
    'legal-support',
    'appeals',
    'online-consultation',
  ]

  return [
    // Главная страница
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Статические страницы
    ...staticPages.slice(1).map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Области практики
    ...practiceAreas.map((slug) => ({
      url: `${baseUrl}/practice/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Услуги
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}