import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import BookingWidget from "@/components/BookingWidget";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Amenities />
      <Gallery />
      <BookingWidget />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Green Villa</h3>
              <p className="text-primary-foreground/80">
                Experience luxury and tranquility in our beautiful Mediterranean villa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Booking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+1 (555) 123-4567</p>
                <p>hello@greenvilla.com</p>
                <p>Mediterranean Coast</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Green Villa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;