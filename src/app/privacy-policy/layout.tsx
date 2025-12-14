import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms - Sultana Spa Dubai",
  description: "Read Sultana Spa's Privacy Policy and Terms & Conditions. Learn how we protect your personal information and understand our service terms for spa treatments in Dubai.",
  keywords: [
    "Sultana Spa privacy policy",
    "spa terms and conditions Dubai",
    "data protection Dubai",
    "spa privacy policy",
    "wellness spa terms"
  ],
  openGraph: {
    title: "Privacy Policy & Terms - Sultana Spa Dubai",
    description: "Read Sultana Spa's Privacy Policy and Terms & Conditions.",
    url: "https://sultanaspa.com/privacy-policy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

