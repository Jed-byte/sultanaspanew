import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sultana Spa - Luxury Wellness & Beauty in Dubai",
  description: "Discover Sultana Spa's journey in Dubai. Founded with a passion for authentic Moroccan wellness traditions, we offer luxury spa treatments, traditional hammam experiences, and premium beauty services across Al Barsha, Downtown, and Al Andalus locations.",
  keywords: [
    "about Sultana Spa",
    "Sultana Spa Dubai history",
    "luxury spa Dubai",
    "Moroccan spa traditions",
    "wellness spa Dubai",
    "beauty spa Dubai",
    "hammam Dubai",
    "spa founder Dubai"
  ],
  openGraph: {
    title: "About Sultana Spa - Luxury Wellness & Beauty in Dubai",
    description: "Discover Sultana Spa's journey in Dubai. Founded with a passion for authentic Moroccan wellness traditions.",
    url: "https://sultanaspa.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

