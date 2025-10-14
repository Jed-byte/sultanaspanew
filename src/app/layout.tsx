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
        {children}
      </body>
    </html>
  );
}
