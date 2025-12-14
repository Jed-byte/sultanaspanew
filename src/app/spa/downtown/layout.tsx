import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sultana Spa Downtown Dubai - Premium Hammam & Beauty Services",
  description: "Discover Sultana Spa Downtown Dubai. Luxury hammam rituals, therapeutic massages, hydrafacial treatments, professional hair services, and nail care in the heart of Downtown Dubai. Book your wellness experience.",
  keywords: [
    "Sultana Spa Downtown",
    "spa Downtown Dubai",
    "hammam Downtown Dubai",
    "massage Downtown Dubai",
    "hydrafacial Downtown",
    "facial treatment Downtown",
    "hair salon Downtown Dubai",
    "nail salon Downtown",
    "wellness center Downtown",
    "luxury spa Downtown Dubai",
    "Turkish hammam Downtown",
    "Moroccan hammam Downtown"
  ],
  openGraph: {
    title: "Sultana Spa Downtown Dubai - Premium Hammam & Beauty Services",
    description: "Discover Sultana Spa Downtown Dubai. Luxury hammam rituals, therapeutic massages, and premium beauty services.",
    url: "https://sultanaspa.com/spa/downtown",
    type: "website",
  },
};

export default function DowntownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

