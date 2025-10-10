import Script from 'next/script'

interface OrganizationSchema {
  name: string
  description: string
  url: string
  logo?: string
  image?: string
  telephone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  sameAs?: string[]
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface ArticleSchema {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
}

export function OrganizationStructuredData() {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Адвокат Довбешко Светлана Юрьевна",
    description: "Профессиональная юридическая помощь в Санкт-Петербурге. Уголовное право, военное право, недвижимость, наследственные споры.",
    url: "https://advokat-dovbeshko.ru",
    telephone: "+79310070752",
    email: "S0070752@mail.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Московский пр-кт. 143",
      addressLocality: "Санкт-Петербург",
      postalCode: "196105",
      addressCountry: "RU"
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://advokat-dovbeshko.ru${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleStructuredData({ article }: { article: ArticleSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Адвокат Довбешко С.Ю.",
      url: "https://advokat-dovbeshko.ru",
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://advokat-dovbeshko.ru",
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Адвокат Довбешко Светлана Юрьевна",
    description: "Опытный адвокат в Санкт-Петербурге, специализирующийся на уголовном праве, военном праве, недвижимости и наследственных спорах",
    url: "https://advokat-dovbeshko.ru",
    telephone: "+79310070752",
    email: "S0070752@mail.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Московский пр-кт. 143",
      addressLocality: "Санкт-Петербург",
      postalCode: "196105",
      addressCountry: "RU"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.878265,
      longitude: 30.318985
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    areaServed: {
      "@type": "City",
      name: "Санкт-Петербург"
    }
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}