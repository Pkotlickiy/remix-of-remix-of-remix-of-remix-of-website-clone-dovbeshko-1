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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
    yandex: '9dfeee966659d806',
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(104756921, "init", {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/104756921" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}