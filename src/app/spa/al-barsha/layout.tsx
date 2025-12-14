import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sultana Spa Al Barsha - Luxury Wellness & Beauty Treatments Dubai",
  description: "Experience luxury wellness at Sultana Spa Al Barsha. Premium hammam treatments, relaxing massages, facials, hair services, and nail care in the heart of Al Barsha, Dubai. Book your appointment today.",
  keywords: [
    "Sultana Spa Al Barsha",
    "spa Al Barsha Dubai",
    "hammam Al Barsha",
    "massage Al Barsha",
    "facial treatment Al Barsha",
    "beauty spa Al Barsha",
    "wellness center Al Barsha",
    "luxury spa Al Barsha",
    "hair salon Al Barsha",
    "nail salon Al Barsha"
  ],
  openGraph: {
    title: "Sultana Spa Al Barsha - Luxury Wellness & Beauty Treatments Dubai",
    description: "Experience luxury wellness at Sultana Spa Al Barsha. Premium hammam treatments, relaxing massages, and beauty services.",
    url: "https://sultanaspa.com/spa/al-barsha",
    type: "website",
    images: [
      {
        url: "https://sultanaspa.com/sultanaspalogo.png",
        width: 1200,
        height: 630,
        alt: "Sultana Spa Al Barsha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sultanaspa.com/sultanaspalogo.png"],
  },
};

export default function AlBarshaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

