import { Card, CardContent } from "@/components/ui/card";
import { 
  Wifi, 
  Car, 
  UtensilsCrossed, 
  Wind,
  Tv,
  Bath,
  TreePine,
  Shield,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary internet access" },
  { icon: Car, title: "Free Parking", description: "Secure private parking" },
  { icon: UtensilsCrossed, title: "Full Kitchen", description: "Traditional cooking facilities" },
  { icon: Wind, title: "Air Conditioning", description: "Climate control in all rooms" },
  { icon: Tv, title: "Smart TVs", description: "Entertainment in living areas" },
  { icon: Bath, title: "Private Bathrooms", description: "Clean and comfortable facilities" },
  { icon: TreePine, title: "Garden Views", description: "Beautiful natural surroundings" },
  { icon: Shield, title: "Safe Environment", description: "Peaceful and secure location" },
  { icon: MapPin, title: "Great Location", description: "Easy access to local attractions" },
  { icon: Phone, title: "Guest Support", description: "Available when you need us" },
  { icon: Mail, title: "Communication", description: "Easy contact methods" },
  { icon: Clock, title: "Flexible Check-in", description: "Convenient arrival times" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-villa-sage/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Premium Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every comfort and convenience you need for the perfect getaway, 
            thoughtfully curated for an exceptional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="luxury-card group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-villa-green to-villa-green-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {amenity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;