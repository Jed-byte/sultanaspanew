import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al Andalus Hammam & Barber - Men's Traditional Spa Dubai",
  description: "Al Andalus Hammam & Barber offers authentic Moroccan hammam experiences and professional barber services for men in Al Barsha, Dubai. Traditional wellness rituals, grooming services, and relaxation treatments.",
  keywords: [
    "Al Andalus Hammam",
    "men's spa Dubai",
    "hammam for men Dubai",
    "barber shop Al Barsha",
    "men's grooming Dubai",
    "Moroccan hammam men",
    "traditional hammam Dubai",
    "men's wellness Dubai",
    "barber services Al Barsha",
    "men's spa treatments Dubai"
  ],
  openGraph: {
    title: "Al Andalus Hammam & Barber - Men's Traditional Spa Dubai",
    description: "Al Andalus Hammam & Barber offers authentic Moroccan hammam experiences and professional barber services for men in Dubai.",
    url: "https://sultanaspa.com/spa/al-andalus",
    type: "website",
  },
};

export default function AlAndalusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

