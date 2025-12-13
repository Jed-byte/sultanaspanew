import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const images = [
    { src: "/reception.jpg", alt: "Sultana Spa Reception" },
    { src: "/shopfront.jpg", alt: "Sultana Spa Shopfront" },
    { src: "/relaxationarea.jpg", alt: "Relaxation Area" },
    { src: "/relaxation.jpg", alt: "Relaxation Space" },
    { src: "/relaxtionarea3.png", alt: "Relaxation Area" },
    { src: "/treatmentroom.jpg", alt: "Treatment Room" },
    { src: "/treatment1.jpg", alt: "Treatment Room" },
    { src: "/treatment2.jpg", alt: "Treatment Room" },
    { src: "/waitingroom.jpg", alt: "Waiting Room" },
    { src: "/waitingroom2.jpg", alt: "Waiting Room" },
    { src: "/Massage.png", alt: "Massage Services" },
    { src: "/MassageEdit.png", alt: "Massage Treatment" },
    { src: "/facemassage.jpg", alt: "Facial Massage" },
    { src: "/hotstone.jpg", alt: "Hot Stone Massage" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-6 px-4" style={{background: 'linear-gradient(to right, #F8F4EF, #C4A484)'}}>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center hover:opacity-80 mb-3 transition-colors" style={{color: '#5D4037'}}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-light mb-3" style={{color: '#5D4037'}}>
            About Sultana Spa
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-16" style={{color: '#5D4037'}}>
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{color: '#5D4037'}}>
              Sultana Spa was founded in 2010 with a clear vision: to bring the richness, authenticity, and timeless rituals of Moroccan spa culture to the heart of the UAE.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{color: '#5D4037'}}>
              The spa is the creation of Loubna Momen, a Moroccan entrepreneur who relocated to the region with a deep desire to share the wellness traditions she grew up with. Inspired by the centuries-old hammam culture of Morocco — where self-care is both a ritual and a social experience — Loubna set out to create a space that feels authentic, refined, and welcoming.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{color: '#5D4037'}}>
              What began as a single location has grown into three established branches, each offering carefully curated treatments rooted in Moroccan heritage. From traditional hammam rituals and steam therapies to massages and beauty treatments, every service is designed to restore balance, relaxation, and well-being.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{color: '#5D4037'}}>
              At Sultana Spa, authenticity matters. We use time-honored techniques, premium products, and trained therapists who understand the cultural significance behind each ritual. Our spaces are designed to transport guests — combining traditional Moroccan elements with modern comfort and privacy.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{color: '#5D4037'}}>
              More than a spa, Sultana is a reflection of Loubna's journey and values: craftsmanship, hospitality, and attention to detail. Her mission has always been simple — to offer guests an experience that feels genuine, indulgent, and restorative, whether they are visiting for a quick treatment or a full hammam ritual.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{color: '#5D4037'}}>
              Today, Sultana Spa continues to serve a loyal community of clients who return not just for the treatments, but for the atmosphere, consistency, and care that define the brand.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-8 font-light italic" style={{color: '#A78A7F'}}>
              We invite you to experience the art of Moroccan wellness — thoughtfully reimagined for modern life.
            </p>
          </div>

          {/* Image Collage */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-center" style={{color: '#5D4037'}}>
              Our Spaces
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group border"
                  style={{borderColor: 'rgba(196, 164, 132, 0.3)'}}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

