import Link from "next/link";
import { MapPin, Phone, Instagram, MessageSquare } from "lucide-react";

const branches = [
  {
    name: "Sultana Spa Al Barsha",
    location: "Al Barsha, Dubai",
    description: "Luxury wellness sanctuary in the heart of Al Barsha",
    link: "/spa/al-barsha",
    gradient: "from-rose-100 to-pink-100"
  },
  {
    name: "Sultana Spa Downtown",
    location: "Downtown Dubai",
    description: "Modern urban spa with breathtaking city views",
    link: "/spa/downtown",
    gradient: "from-blue-100 to-indigo-100"
  },
  {
    name: "Al Andalus Hammam & Barber",
    location: "Al Barsha",
    description: "Authentic Moroccan wellness rituals and treatments (Men's Only)",
    link: "/spa/al-andalus",
    gradient: "from-amber-100 to-orange-100"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #F8F4EF, #C4A484)' }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Decorative top border */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 md:w-24 h-px" style={{backgroundColor: '#C4A484', opacity: 0.5}}></div>
            <div className="mx-4 w-2 h-2 rounded-full" style={{backgroundColor: '#C4A484'}}></div>
            <div className="w-16 md:w-24 h-px" style={{backgroundColor: '#C4A484', opacity: 0.5}}></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide relative" style={{color: '#5D4037'}}>
            <span className="relative inline-block">
              Sultana Spa
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-px" style={{backgroundColor: '#5D4037', opacity: 0.3}}></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 font-light tracking-wide" style={{color: '#8F7568', letterSpacing: '0.05em'}}>
            Experience luxury wellness at our exclusive locations
          </p>
          
          {/* Decorative bottom border */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 md:w-20 h-px" style={{backgroundColor: '#C4A484', opacity: 0.4}}></div>
            <div className="mx-3 w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#C4A484', opacity: 0.6}}></div>
            <div className="w-12 md:w-20 h-px" style={{backgroundColor: '#C4A484', opacity: 0.4}}></div>
          </div>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{color: '#A78A7F'}}>
            Choose your sanctuary of relaxation and rejuvenation
          </p>
        </div>
      </div>

      {/* Branch Selection */}
      <div className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Choose Your Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each location offers a unique wellness experience tailored to your needs
          </p>
        </div>

        <div className="space-y-6">
          {branches.map((branch) => {
            const isAlAndalus = branch.name === "Al Andalus Hammam & Barber";
            return (
              <div
                key={branch.name}
                className={"group transition-all duration-300 transform hover:scale-[1.02] rounded-2xl shadow-lg hover:shadow-xl border"}
                style={{ 
                  background: isAlAndalus 
                    ? 'linear-gradient(to right, #5D4037, #4A3328)' 
                    : 'linear-gradient(to right, #F8F4EF, #F1E4D3)', 
                  borderColor: isAlAndalus ? '#C4A484' : '#C4A484' 
                }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3" style={{color: isAlAndalus ? '#F8F4EF' : '#A78A7F'}}>
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">{branch.location}</span>
                      </div>
                      
                      <h3 className="text-2xl font-medium mb-2" style={{color: isAlAndalus ? '#F8F4EF' : '#5D4037'}}>
                        {branch.name}
                      </h3>
                      
                      <p className="mb-4 leading-relaxed" style={{color: isAlAndalus ? '#E8D5C4' : '#A78A7F'}}>
                        {branch.description}
                      </p>
                    </div>
                    
                    <div className="md:ml-6">
                      <Link 
                        href={branch.link}
                        className="w-full md:w-auto font-medium py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg inline-block text-center"
                        style={{ 
                          backgroundColor: isAlAndalus ? '#F8F4EF' : '#5D4037',
                          color: isAlAndalus ? '#5D4037' : 'white'
                        }}
                      >
                        Explore This Location
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4" style={{ background: 'linear-gradient(to right, #C4A484, #A78A7F)' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-light mb-8">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h4 className="font-medium mb-2">Call Us</h4>
              <a 
                href="tel:+97145652323"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                +971 4 565 2323
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-8 w-8 mb-4" />
              <h4 className="font-medium mb-2">WhatsApp</h4>
              <a 
                href="https://wa.me/971524420053"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                +971 52 442 0053
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="h-8 w-8 mb-4" />
              <h4 className="font-medium mb-2">Follow Us</h4>
              <a 
                href="https://www.instagram.com/sultanaspahammamdubai/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                @sultanaspahammamdubai
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-white border-opacity-20">
            <Link 
              href="/privacy-policy"
              className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <span className="text-white opacity-50">|</span>
            <Link 
              href="/about"
              className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
