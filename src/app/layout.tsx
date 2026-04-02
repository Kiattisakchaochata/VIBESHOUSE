import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
    languages: {
      th: `${SITE.url}/`,
      en: `${SITE.url}/en`,
      "x-default": `${SITE.url}/`,
    },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VIBES HOUSE",
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "VIBES HOUSE",
  image: `${SITE.url}${SITE.ogImage}`,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "9/2 ตำบลบ้านปึก",
    addressLocality: "ชลบุรี",
    postalCode: "20130",
    addressCountry: "TH",
  },
  servesCuisine: ["Thai", "Bar", "Beer"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="th"
  prefix="og: https://ogp.me/ns#"
  suppressHydrationWarning
  data-scroll-behavior="smooth"
>
      <head>
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>

      {/* 🔥 ตรงนี้คือจุดสำคัญ */}
      <body className="flex min-h-screen flex-col bg-black text-white antialiased">
        
        {/* JSON-LD */}
        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd, null, 2),
          }}
        />
        <script
          id="ld-restaurant"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd, null, 2),
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* 🔥 ตัวนี้สำคัญมาก */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}