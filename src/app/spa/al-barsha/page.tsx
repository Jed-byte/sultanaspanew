"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Phone, MapPin, Star, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  description: string;
  priceOptions?: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    category: "Hammam",
    items: [
      { name: "Basic Hammam", duration: "45 min", price: "AED 250", description: "A classic cleanse: steam, black soap, kessa glove exfoliation, and a gentle rinse. Perfect for first-timers or a quick refresh. (with loofa)" },
      { name: "Traditional Hammam", duration: "60 min", price: "AED 350", description: "Ultimate rejuvenation: beldi black soap cleanse, kessa glove exfoliation, rhassoul clay mask, nourishing hair wash, hydrating soap massage. (with loofa)" },
      { name: "Detox Hammam", duration: "75 min", price: "AED 550", description: "Purifying ritual: argan hair treatment, double exfoliation, detoxifying green tea scrub, body & face mask, green tea massage, shower gel cleanse. (with loofa)" },
      { name: "Royal Hammam", duration: "90 min", price: "AED 650", description: "Intense hydration: black soap, steam, exfoliation, nourishing hair mask, almond & honey scrub, honey & verbena body mask, 15-min massage. (with loofa)" },
      { name: "Add-on Loofa", duration: "N/A", price: "AED 65", description: "Fresh new loofa for your treatment." },
    ]
  },
  {
    category: "Massage",
    items: [
      { name: "Sensory Awakening Candle Massage - By LaSultane de Saba", duration: "60 min", price: "AED 450", description: "Luxurious massage using warm aromatherapy candle oil for deep relaxation and skin nourishment." },
      { name: "Hotstone Serenity Massage", duration: "Multiple", price: "From AED 200", description: "Relaxing massage using heated stones to ease muscle tension and promote deep relaxation. Our signature hot stone therapy combines traditional massage techniques with the healing power of heated stones for ultimate stress relief and muscle relaxation.", priceOptions: "30 min - AED 200|60 min - AED 400|90 min - AED 490" },
      { name: "Serenity Massage Relaxation", duration: "Multiple", price: "From AED 200", description: "Classic relaxation massage focusing on stress relief and muscle tension. This therapeutic treatment combines various massage techniques to promote overall wellness and deep relaxation.", priceOptions: "30 min - AED 200|60 min - AED 300|90 min - AED 400" },
      { name: "Lymphatic Drainage Massage", duration: "Multiple", price: "From AED 200", description: "Gentle massage technique to stimulate lymph flow and reduce fluid retention. This specialized treatment helps detoxify the body, reduce swelling, and improve circulation.", priceOptions: "30 min - AED 200|60 min - AED 400|90 min - AED 490" },
      { name: "Energizing Deep Tissue Massage", duration: "Multiple", price: "From AED 250", description: "Focused deep tissue work targeting specific areas of tension. This intensive massage therapy helps relieve chronic muscle tension and promotes recovery through deep pressure techniques.", priceOptions: "30 min - AED 250|60 min - AED 400|90 min - AED 495" },
      { name: "Emerald Oxygenating Thai Massage", duration: "Multiple", price: "From AED 250", description: "Traditional Thai massage techniques focusing on energy lines and flexibility. This unique treatment combines stretching, pressure point therapy, and energy line work to improve flexibility and restore balance.", priceOptions: "30 min - AED 250|60 min - AED 325|90 min - AED 420" },
      { name: "Blissful Bloom Pregnancy Massage with Argan oil", duration: "Multiple", price: "From AED 240", description: "Gentle massage specifically designed for expectant mothers using nourishing argan oil. This nurturing treatment provides relief from pregnancy-related discomfort while ensuring the safety and comfort of both mother and baby.", priceOptions: "30 min - AED 240|60 min - AED 350|90 min - AED 450" },
      { name: "In-Chair Massage - Foot", duration: "20 min", price: "AED 95", description: "Quick and effective targeted foot massage treatment for instant relief and relaxation." },
      { name: "In-Chair Massage - Face", duration: "20 min", price: "AED 180", description: "Quick and effective targeted face massage treatment for instant relief and relaxation." },
    ]
  },
  {
    category: "Facial",
    items: [
      { name: "Deep Cleansing Facial", duration: "60 min", price: "AED 350", description: "A thorough cleansing treatment that removes impurities, unclogs pores, and refreshes your skin." },
      { name: "Anti-Aging Facial", duration: "75 min", price: "AED 450", description: "Advanced treatment targeting fine lines and wrinkles using premium anti-aging products." },
      { name: "Hydrating Facial", duration: "60 min", price: "AED 350", description: "Intensive moisture treatment for dry or dehydrated skin, restoring natural glow." },
      { name: "Brightening Facial", duration: "60 min", price: "AED 350", description: "Specialized treatment to even skin tone and enhance natural radiance." },
      { name: "Acne Treatment", duration: "60 min", price: "AED 350", description: "Targeted treatment for acne-prone skin, including deep cleansing and specialized care." },
    ]
  },
  {
    category: "Hair",
    items: [
      // Placeholder - user will provide the actual data
      { name: "Hair Cut & Style", duration: "60 min", price: "AED 150", description: "Professional cut and styling" },
      { name: "Hair Color", duration: "120 min", price: "AED 300", description: "Full color treatment" },
    ]
  },
  {
    category: "Nails",
    items: [
      { name: "Classic Manicure", duration: "45 min", price: "AED 80", description: "Complete nail care and polish" },
      { name: "Gel Manicure", duration: "60 min", price: "AED 120", description: "Long-lasting gel polish application" },
      { name: "Classic Pedicure", duration: "60 min", price: "AED 100", description: "Relaxing foot care treatment" },
      { name: "Spa Pedicure", duration: "75 min", price: "AED 150", description: "Luxury foot treatment with massage" },
    ]
  },
  {
    category: "Waxing",
    items: [
      // Placeholder - user will provide the actual data
      { name: "Full Leg Wax", duration: "45 min", price: "AED 120", description: "Complete leg hair removal" },
      { name: "Brazilian Wax", duration: "30 min", price: "AED 150", description: "Full bikini area treatment" },
    ]
  },
  {
    category: "Lashes",
    items: [
      // Placeholder - user will provide the actual data
      { name: "Lash Extensions", duration: "120 min", price: "AED 200", description: "Individual lash application" },
      { name: "Lash Lift", duration: "60 min", price: "AED 150", description: "Natural lash curl and tint" },
    ]
  },
  {
    category: "Threading",
    items: [
      // Placeholder - user will provide the actual data
      { name: "Eyebrow Threading", duration: "15 min", price: "AED 40", description: "Precise eyebrow shaping" },
      { name: "Face Threading", duration: "30 min", price: "AED 80", description: "Full face hair removal" },
    ]
  },
  {
    category: "LPG",
    items: [
      // Placeholder - user will provide the actual data
      { name: "LPG Body Treatment", duration: "45 min", price: "AED 300", description: "Cellulite reduction treatment" },
      { name: "LPG Face Treatment", duration: "30 min", price: "AED 200", description: "Facial contouring and firming" },
    ]
  },
];

const reviews = [
  {
    name: "Rasha Rteil",
    rating: 5,
    text: "I've tried almost every high end Hammam in Dubai, such as The One and Only Mirage, Jumeirah Zabeel, Talees Spa, Atlantis and every other 4-5 star hotel. I am not interested in the fancy architecture of the space and the massive hammam room which can host 10-15 women, or the lavish price and this BS, which many women care about in Dubai.\n\nFrom my experience in Hammam's this is by far the best one when it comes to, price, output, friendliness, and authenticity!!!!!\n\nSultana Spa puts effort in the technique of the scrubbing, the steam room is cozy but the steam is on point! And my favorite about this place is the spacious and full marble treatment room.\n\nThe space of the overall place is not big, but it's the treatment that has left me dropping all places moving forward and repeating my visit!\n\nMy hammam lady was Khadija, nice, strong hands, quick, and determined to get every inch of me stripped from dead skin! And she succeeded.\n\nThank you Sultana Spa!!!!",
    treatment: "Traditional Hammam"
  },
  {
    name: "Salma",
    rating: 5,
    text: "Excellent experience and very nice Hammam. I would highly recommend it. The staff were incredibly nice from Fatima-Ezzahra that welcome us in the spa to the amazing ladies who did the Moroccan bath for us. Nezha did my Moroccan bath and she was just amazing. I feel so refreshed and relaxed. Definitely ask for Nezha when you go. She is the best !!",
    treatment: "Moroccan Hammam"
  },
  {
    name: "Hanan El Sharif",
    rating: 5,
    text: "What words can I say to describe this spectacular authentic Moroccan spa. Sultana has been in UAE for 14+ years now and is still going strong. Yet I just discovered their original branch in Barsha this week. My mom and I had a Moroccan Hammam with Thuraya she was short of amazing, she was fantastic and I absolutely loved her. We had our massage with Siri and she is fabulous, went in with so much tension and came out another person.\n\nIn short, sultana is my favourite place for a self care and pamper day, their ambience is so relaxing and the entire staff are so friendly, respectful and amazing at what they do. They always have offers as well which is an added benefit. You won't regret coming here one bit.",
    treatment: "Moroccan Hammam & Massage"
  },
];

export default function AlBarshaPage() {
  const [activeCategory, setActiveCategory] = useState("Hammam");
  const [expandedReview, setExpandedReview] = useState<string | null>(null);

  const activeServices = services.find(service => service.category === activeCategory);
  const serviceCategories = services.map(service => service.category);

  return (
    <>
      <LocalBusinessSchema
        name="Sultana Spa Al Barsha"
        description="Luxury wellness sanctuary in the heart of Al Barsha, Dubai. Premium hammam treatments, relaxing massages, facials, hair services, and nail care."
        url="https://sultanaspa.com/spa/al-barsha"
        telephone="+97143928242"
        address={{
          addressLocality: "Al Barsha",
          addressRegion: "Dubai",
          addressCountry: "AE"
        }}
        priceRange="$$"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://sultanaspa.com" },
          { name: "Al Barsha", url: "https://sultanaspa.com/spa/al-barsha" }
        ]}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-6 px-4" style={{background: 'linear-gradient(to right, #F8F4EF, #C4A484)'}}>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center hover:opacity-80 mb-3 transition-colors" style={{color: '#5D4037'}}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Locations
          </Link>
          <h1 className="text-3xl md:text-5xl font-light mb-3" style={{color: '#5D4037'}}>
            Sultana Spa Al Barsha
          </h1>
          <p className="text-lg md:text-xl max-w-3xl" style={{color: '#A78A7F'}}>
            Luxury wellness sanctuary in the heart of Al Barsha
          </p>
        </div>
      </div>

      {/* Services Section with Menu */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{color: '#5D4037'}}>Our Services</h2>
            <p className="text-lg" style={{color: '#A78A7F'}}>Choose your category to view our premium treatments</p>
              </div>

          {/* Service Category Menu */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                    activeCategory === category
                      ? "text-white shadow-lg"
                      : "bg-white border hover:bg-opacity-80"
                  }`}
                  style={{
                    backgroundColor: activeCategory === category ? '#5D4037' : 'white',
                    color: activeCategory === category ? 'white' : '#A78A7F',
                    borderColor: '#C4A484'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Category Services */}
          {activeServices && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{border: '1px solid #C4A484'}}>
              <div className="p-6" style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}>
                <h3 className="text-2xl font-medium text-white">{activeServices.category}</h3>
              </div>
              <div className="p-6">
                <div className="grid gap-6">
                  {activeServices.items.map((service: ServiceItem, index: number) => {
                    const serviceKey = `${service.name}-${service.duration}-${index}`;
                    
                    return (
                      <div key={serviceKey} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-opacity-50 transition-colors" style={{border: '1px solid #F8F4EF', backgroundColor: 'rgba(248, 244, 239, 0.3)'}}>
                        <div className="flex-1">
                          <h4 className="text-lg font-medium mb-1" style={{color: '#5D4037'}}>{service.name}</h4>
                          <p className="mb-2 text-sm" style={{color: '#A78A7F'}}>{service.description}</p>
                          {service.name !== "Add-on Loofa" && !service.priceOptions && (
                            <p className="flex items-center text-sm" style={{color: '#A78A7F'}}>
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </p>
                          )}
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
                          <p className="text-2xl font-bold mb-2" style={{color: '#5D4037'}}>{service.price}</p>
                          {service.priceOptions && (
                            <p className="text-xs md:text-sm mb-3 text-right" style={{color: '#A78A7F'}}>
                              {service.priceOptions.split('|').map((option, optIndex, array) => (
                                <span key={optIndex}>
                                  {option}
                                  {optIndex < array.length - 1 && (
                                    <span className="font-bold"> | </span>
                                  )}
                                </span>
                              ))}
                            </p>
                          )}
                          {service.name !== "Add-on Loofa" && (
                            <a 
                              href="https://sultanaspa.zenoti.com/webstoreNew/services"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm hover:opacity-90 inline-block"
                              style={{backgroundColor: '#5D4037'}}
                            >
                              Book Now
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Location Info - Moved Below Services */}
      <div className="py-4 md:py-6 px-4" style={{backgroundColor: '#F8F4EF'}}>
        <div className="max-w-6xl mx-auto">
          
          {/* Desktop Layout - Compact */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow" style={{border: '1px solid #C4A484'}}>
              <h3 className="text-lg font-medium mb-2 flex items-center" style={{color: '#5D4037'}}>
                <MapPin className="h-4 w-4 mr-1" style={{color: '#C4A484'}} />
                Location
              </h3>
              <div className="space-y-1 text-sm">
                <a 
                  href="https://maps.app.goo.gl/vrNKxkqEb7eG7tDGA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
                  style={{backgroundColor: '#5D4037'}}
                >
                  Open Google Maps
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow" style={{border: '1px solid #C4A484'}}>
              <h3 className="text-lg font-medium mb-2 flex items-center" style={{color: '#5D4037'}}>
                <Phone className="h-4 w-4 mr-1" style={{color: '#C4A484'}} />
                Contact & Booking
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <a 
                    href="tel:+97143928242" 
                    className="flex-1 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
                    style={{backgroundColor: '#5D4037'}}
                  >
                    Call
                  </a>
                  <a 
                    href="https://wa.me/971XXXXXXXXX" 
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-full transition-colors duration-200 text-xs text-center"
                  >
                    WhatsApp
                  </a>
          </div>
        </div>
      </div>

            <div className="bg-white rounded-lg p-4 shadow" style={{border: '1px solid #C4A484'}}>
              <h3 className="text-lg font-medium mb-2 flex items-center" style={{color: '#5D4037'}}>
                <Instagram className="h-4 w-4 mr-1" style={{color: '#C4A484'}} />
                Follow Us
              </h3>
              <div className="space-y-1 text-sm" style={{color: '#A78A7F'}}>
                <a 
                  href="https://www.instagram.com/sultanaspahammamdubai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-xs text-center hover:opacity-90"
                  style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}
                >
                  @sultanaspahammamdubai
                </a>
              </div>
            </div>
          </div>

                    {/* Mobile Layout - Always Expanded */}
          <div className="md:hidden space-y-4">
            <h3 className="text-2xl font-light mb-4 text-center" style={{color: '#5D4037'}}>Contact Us</h3>

            {/* Location Section */}
            <div className="bg-white rounded-lg shadow" style={{border: '1px solid #C4A484'}}>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 mr-2" style={{color: '#C4A484'}} />
                  <span className="font-medium" style={{color: '#5D4037'}}>Location</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/vrNKxkqEb7eG7tDGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
                  style={{backgroundColor: '#5D4037'}}
                >
                  Open Google Maps
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-lg shadow" style={{border: '1px solid #C4A484'}}>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <Phone className="h-4 w-4 mr-2" style={{color: '#C4A484'}} />
                  <span className="font-medium" style={{color: '#5D4037'}}>Contact & Booking</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+97143928242"
                    className="flex-1 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
                    style={{backgroundColor: '#5D4037'}}
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/971XXXXXXXXX"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="bg-white rounded-lg shadow" style={{border: '1px solid #C4A484'}}>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <Instagram className="h-4 w-4 mr-2" style={{color: '#C4A484'}} />
                  <span className="font-medium" style={{color: '#5D4037'}}>Follow Us</span>
                </div>
                <a
                  href="https://www.instagram.com/sultanaspahammamdubai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-center hover:opacity-90 text-sm"
                  style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}
                >
                  @sultanaspahammamdubai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 px-4" style={{backgroundColor: '#F8F4EF'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-light mb-4" style={{color: '#5D4037'}}>What Our Clients Say</h3>
            <p className="text-lg" style={{color: '#A78A7F'}}>Real experiences from our valued guests - Google Reviews</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => {
              const reviewKey = `${review.name}-${index}`;
              const isExpanded = expandedReview === reviewKey;
              const previewLength = 200;
              const needsExpansion = review.text.length > previewLength;
              const displayText = isExpanded || !needsExpansion 
                ? review.text 
                : review.text.substring(0, previewLength) + "...";
              
              return (
                <div key={reviewKey} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow" style={{border: '1px solid #C4A484'}}>
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{color: '#C4A484'}} />
                    ))}
                  </div>
                  <p className="italic mb-4 leading-relaxed whitespace-pre-line" style={{color: '#A78A7F'}}>&ldquo;{displayText}&rdquo;</p>
                  {needsExpansion && (
                    <button
                      onClick={() => setExpandedReview(isExpanded ? null : reviewKey)}
                      className="flex items-center gap-2 text-sm font-medium mb-4 transition-colors hover:opacity-80"
                      style={{color: '#5D4037'}}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Read Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          Read More
                        </>
                      )}
                    </button>
                  )}
                  <div className="text-center">
                    <p className="font-medium" style={{color: '#5D4037'}}>{review.name}</p>
                    <p className="text-sm" style={{color: '#A78A7F'}}>{review.treatment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4" style={{background: 'linear-gradient(to right, #C4A484, #A78A7F)'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-light mb-6">Ready to Experience Luxury?</h3>
          <p className="text-xl mb-8 opacity-90">Book your appointment today and discover why we're Dubai's premier spa destination</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://sultanaspa.zenoti.com/webstoreNew/services"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg hover:opacity-90 inline-block text-center"
              style={{
                backgroundColor: 'white',
                color: '#5D4037'
              }}
            >
              Book Online
            </a>
            <a 
              href="tel:+97143928242"
              className="border-2 border-white text-white hover:bg-white font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg inline-block text-center"
              style={{
                borderColor: 'white'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = 'white';
                (e.target as HTMLAnchorElement).style.color = '#5D4037';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.target as HTMLAnchorElement).style.color = 'white';
              }}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
} 