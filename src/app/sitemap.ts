import { MetadataRoute } from 'next'

// Practice areas slugs
const practiceAreas = [
  'criminal',
  'military',
  'realestate',
  'land',
  'inheritance',
  'unjust-enrichment',
  'medical',
  'consumer',
  'arbitration'
]

// Services slugs
const services = [
  'document-preparation',
  'court-representation',
  'consultations',
  'legal-analysis',
  'pre-trial-settlement',
  'execution'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://advokat-dovbeshko.ru'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/practice`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Practice area pages
  const practicePages: MetadataRoute.Sitemap = practiceAreas.map((slug) => ({
    url: `${baseUrl}/practice/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...practicePages, ...servicePages]
}