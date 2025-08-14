import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Bed } from "lucide-react";
import villaHero from "/lovable-uploads/e85c3cfc-b2c6-431e-929c-512d468d0c17.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${villaHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="luxury" className="bg-villa-gold text-white">
              ★ Premium Villa
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-villa-gold text-villa-gold" />
              <span className="text-sm">4.9 (127 reviews)</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Villa Arougou
            <span className="block text-villa-gold">Authentic Stay</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Experience authentic charm in our traditional villa featuring stunning views, 
            comfortable amenities, and peaceful moments in a beautiful natural setting.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-villa-gold" />
              <span>Traditional Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-villa-gold" />
              <span>8 Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bed className="w-5 h-5 text-villa-gold" />
              <span>4 Bedrooms</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg">
              Book Your Stay
            </Button>
            <Button variant="ghost-white" size="lg" className="text-lg">
              Virtual Tour
            </Button>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="flex items-center justify-between text-sm">
              <span>Starting from</span>
              <span className="text-2xl font-bold text-villa-gold">$450<span className="text-base text-gray-300">/night</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;