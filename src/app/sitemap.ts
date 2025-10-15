import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://advokat-dovbeshko.ru";
  
  // Practice areas
  const practiceAreas = [
    "criminal",
    "military", 
    "realestate",
    "inheritance",
    "land",
    "medical",
    "consumer",
    "arbitration",
    "unjust-enrichment"
  ];

  // Services
  const services = [
    "consultations",
    "court-representation",
    "document-preparation",
    "legal-analysis",
    "pre-trial-settlement",
    "execution"
  ];

  // Blog posts
  const blogPosts = [
    "zashchita-prav-voennosluzhaschih",
    "uvolnenie-po-state-zashchita",
    "osparivanie-zaveshchaniya",
    "razdel-imushchestva-pri-razvode",
    "pokupka-nedvizhimosti-riski",
    "spory-s-zastroyshchikami-prava",
    "ugolovnaya-zashchita-na-stadii-sledstviya",
    "obzhalovanie-prigovora-v-sude",
    "nalogovye-spory-zashchita",
    "zemelnye-spory-granitsy",
    "meditsinskaya-oshibka-kompensatsiya",
    "korporativnye-spory-aktsionery",
    "vozvrat-nekachestvennogo-tovara",
    "arbitrazhnye-spory-praktika",
    "neosnovatelnoe-obogashchenie-praktika"
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...practiceAreas.map((slug) => ({
      url: `${baseUrl}/practice/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}