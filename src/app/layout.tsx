import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcelo's School | Dojo de MMA, BJJ y Defensa Personal en Sevilla",
  description: "Dojo premium de Artes Marciales en la Calle Arce, Sevilla. Especialistas en MMA, Jiu-Jitsu Brasileño (BJJ) y Defensa Personal con el Maestro Marcelo. ¡Reserva tu clase gratis!",
  keywords: ["MMA Sevilla", "BJJ en Sevilla", "Artes marciales Calle Arce", "Defensa Personal Sevilla", "Dojo en Sevilla", "Jiu-Jitsu Sevilla", "Clases de MMA Sevilla", "Marcelo's School"],
  authors: [{ name: "Maestro Marcelo" }],
  openGraph: {
    title: "Marcelo's School | Dojo de MMA, BJJ y Defensa Personal en Sevilla",
    description: "Únete a la mejor comunidad de artes marciales en Sevilla. Entrena MMA, BJJ y Defensa Personal en un espacio de alto rendimiento y valores tradicionales en Calle Arce.",
    url: "https://marcelosschoolsevilla.com",
    siteName: "Marcelo's School",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Entrenamiento en Marcelo's School Sevilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo's School | Dojo de MMA, BJJ y Defensa Personal en Sevilla",
    description: "Transforma tu cuerpo y mente en la Calle Arce, Sevilla. Clases de MMA, BJJ y Defensa Personal.",
  },
  alternates: {
    canonical: "https://marcelosschoolsevilla.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": "https://marcelosschoolsevilla.com/#dojo",
  "name": "Marcelo's School",
  "url": "https://marcelosschoolsevilla.com",
  "logo": "https://marcelosschoolsevilla.com/logo.png",
  "image": "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800",
  "description": "Dojo premium de MMA, Jiu-Jitsu Brasileño (BJJ) y Defensa Personal en la Calle Arce, Sevilla. Espacio de alto rendimiento y valores tradicionales.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Arce",
    "addressLocality": "Sevilla",
    "addressRegion": "Andalucía",
    "postalCode": "41002",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.39485,
    "longitude": -5.99612
  },
  "telephone": "+34954123456",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "knowsAbout": [
    "Mixed Martial Arts",
    "Brazilian Jiu-Jitsu",
    "Self Defense",
    "Artes Marciales Sevilla",
    "BJJ Sevilla",
    "MMA Sevilla"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 selection:bg-red-600 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
