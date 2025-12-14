export default function OrganizationSchema() {
  const schema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

