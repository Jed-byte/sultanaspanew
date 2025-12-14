import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Sultana Spa - Luxury Wellness & Beauty Spa in Dubai",
  description: "Experience luxury wellness at Sultana Spa Dubai. Premium beauty treatments, relaxing massages, and traditional hammam services at Al Barsha, Downtown, and Hammam Al Andalus locations.",
  keywords: ["spa Dubai", "beauty treatments", "massage", "hammam", "wellness", "luxury spa", "Al Barsha spa", "Downtown Dubai spa"],
  icons: {
    icon: "/sultanaspalogo.png",
  },
  openGraph: {
    title: "Sultana Spa - Luxury Wellness & Beauty Spa in Dubai",
    description: "Experience luxury wellness at our exclusive Dubai locations. Premium spa treatments and traditional hammam services.",
    url: "https://sultanaspa.com",
    siteName: "Sultana Spa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultana Spa - Luxury Wellness & Beauty Spa in Dubai",
    description: "Experience luxury wellness at our exclusive Dubai locations.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Sultana Spa",
  "description": "Luxury wellness and beauty spa offering premium hammam treatments, massages, facials, hair services, and nail care in Dubai",
  "url": "https://sultanaspa.com",
  "logo": "https://sultanaspa.com/sultanaspalogo.png",
  "image": "https://sultanaspa.com/sultanaspalogo.png",
  "telephone": "+97145652323",
  "email": "info@sultanaspa.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai"
  },
  "sameAs": [
    "https://www.instagram.com/sultanaspahammamdubai/"
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spa Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hammam Treatments",
          "description": "Traditional Moroccan and Turkish hammam experiences"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Massage Therapy",
          "description": "Relaxation and therapeutic massage services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Facial Treatments",
          "description": "Hydrafacial and premium facial services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hair Services",
          "description": "Hair treatments, coloring, and styling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nail Care",
          "description": "Manicure and pedicure services"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
