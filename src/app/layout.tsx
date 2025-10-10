import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Адвокат Довбешко С.Ю. в Санкт-Петербурге | Юридические услуги",
    template: "%s | Адвокат Довбешко С.Ю."
  },
  description: "Профессиональная юридическая помощь в Санкт-Петербурге. Адвокат Довбешко Светлана Юрьевна: уголовное право, военное право, недвижимость, наследственные споры. Опыт более 10 лет.",
  keywords: ["адвокат санкт-петербург", "юрист спб", "юридические услуги", "уголовный адвокат", "военный адвокат", "адвокат по недвижимости", "наследственные споры"],
  authors: [{ name: "Довбешко Светлана Юрьевна" }],
  creator: "Довбешко Светлана Юрьевна",
  publisher: "Адвокат Довбешко С.Ю.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://advokat-dovbeshko.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://advokat-dovbeshko.ru',
    siteName: 'Адвокат Довбешко С.Ю.',
    title: 'Адвокат Довбешко С.Ю. в Санкт-Петербурге | Юридические услуги',
    description: 'Профессиональная юридическая помощь в Санкт-Петербурге. Уголовное право, военное право, недвижимость, наследственные споры.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Адвокат Довбешко Светлана Юрьевна',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    yandex: 'your-yandex-verification-code',
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@100;200;300;400;500;600;700;800;900&display=swap" />        <style>{`
        :root {
          --font-cormorant-garamond: 'Cormorant Garamond', sans-serif;
        }
      `}</style>
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}