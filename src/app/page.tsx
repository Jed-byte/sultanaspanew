import Image from "next/image";
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
    name: "Hammam Al Andalus",
    location: "Traditional Hammam Experience",
    description: "Authentic Moroccan wellness rituals and treatments (Men's Only)",
    link: "/hammam/al-andalus",
    gradient: "from-amber-100 to-orange-100"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide text-gray-800">
            Sultana Spa
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-700">
            Experience luxury wellness at our exclusive locations
          </p>
          <p className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
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
            <div key={branch.name} className={`group transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r ${branch.gradient} rounded-2xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl`}>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3 text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{branch.location}</span>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-gray-800 mb-2">
                      {branch.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {branch.description}
                    </p>
                  </div>
                  
                  <div className="md:ml-6">
                    <Link href={branch.link}>
                      <button className="w-full md:w-auto bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
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
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-4">
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
