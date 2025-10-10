import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advokat-dovbeshko.ru'

  // Статические страницы
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Страницы практик
  const practicePages = [
    'criminal',
    'military',
    'realestate',
    'land',
    'inheritance',
    'unjust-enrichment',
    'medical',
    'consumer',
    'arbitration',
  ].map((slug) => ({
    url: `${baseUrl}/practice/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Страницы услуг
  const servicePages = [
    'document-preparation',
    'court-representation',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Статьи блога
  const blogPosts = [
    'zashchita-prav-voennosluzhaschih',
    'osparivanie-zaveshchaniya',
    'pokupka-nedvizhimosti-riski',
    'ugolovnaya-zashchita-na-stadii-sledstviya',
    'zemelnye-spory-granitsy',
    'meditsinskaya-oshibka-kompensatsiya',
    'vozvrat-nekachestvennogo-tovara',
    'arbitrazhnye-spory-praktika',
    'neosnovatelnoe-obogashchenie-praktika',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...practicePages, ...servicePages, ...blogPosts]
}