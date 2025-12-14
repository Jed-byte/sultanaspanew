"use client";

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  openingHours?: string[];
  priceRange?: string;
}

export default function LocalBusinessSchema({
  name,
  description,
  url,
  telephone,
  address,
  geo,
  openingHours,
  priceRange = "$$"
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      }
    }),
    ...(openingHours && {
      "openingHoursSpecification": openingHours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.split(" ")[0],
        "opens": hours.split(" ")[1]?.split("-")[0],
        "closes": hours.split(" ")[1]?.split("-")[1]
      }))
    }),
    "priceRange": priceRange,
    "image": "https://sultanaspa.com/sultanaspalogo.png"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

