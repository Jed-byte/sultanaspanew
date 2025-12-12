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
    location: "Traditional Hammam Experience",
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
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide" style={{color: '#5D4037'}}>
            Sultana Spa
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light" style={{color: '#A78A7F'}}>
            Experience luxury wellness at our exclusive locations
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: '#A78A7F'}}>
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
          {branches.map((branch) => (
            <div
              key={branch.name}
              className={"group transition-all duration-300 transform hover:scale-[1.02] rounded-2xl shadow-lg hover:shadow-xl border"}
              style={{ background: 'linear-gradient(to right, #F8F4EF, #F1E4D3)', borderColor: '#C4A484' }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3" style={{color: '#A78A7F'}}>
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{branch.location}</span>
                    </div>
                    
                    <h3 className="text-2xl font-medium mb-2" style={{color: '#5D4037'}}>
                      {branch.name}
                    </h3>
                    
                    <p className="mb-4 leading-relaxed" style={{color: '#A78A7F'}}>
                      {branch.description}
                    </p>
                  </div>
                  
                  <div className="md:ml-6">
                    <Link href={branch.link}>
                      <button className="w-full md:w-auto text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                        style={{ backgroundColor: '#5D4037' }}
                      >
                        Explore This Location
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4" style={{ background: 'linear-gradient(to right, #C4A484, #A78A7F)' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-light mb-8">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h4 className="font-medium mb-2">Call Us</h4>
              <p className="opacity-90">+971 4 XXX XXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-8 w-8 mb-4" />
              <h4 className="font-medium mb-2">WhatsApp</h4>
              <p className="opacity-90">+971 50 XXX XXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="h-8 w-8 mb-4" />
              <h4 className="font-medium mb-2">Follow Us</h4>
              <p className="opacity-90">@sultanaspa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
