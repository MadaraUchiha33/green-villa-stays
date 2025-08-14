import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
const villaInterior = "/lovable-uploads/bd028ba7-6a4f-49b8-a48b-12becb8e6eaa.png";
const villaOutdoor = "/lovable-uploads/e85c3cfc-b2c6-431e-929c-512d468d0c17.png";
const villaGarden = "/lovable-uploads/e91daf4e-6079-4e8a-a909-74fcf55fad8b.png";
const villaHallway = "/lovable-uploads/026f2409-683b-4561-afb8-678f5c8ba0b5.png";
const villaDetails = "/lovable-uploads/ef6c4b24-2523-46a4-8383-93f2a98adbab.png";

const galleryImages = [
  { src: villaOutdoor, alt: "Villa Outdoor Terrace", title: "Sunset Terrace with Mountain Views" },
  { src: villaInterior, alt: "Dining Room", title: "Traditional Dining Area" },
  { src: villaGarden, alt: "Garden View", title: "Peaceful Garden & Landscape" },
  { src: villaHallway, alt: "Villa Entrance", title: "Elegant Entrance Hall" },
  { src: villaDetails, alt: "Interior Details", title: "Traditional Architectural Details" },
  { src: villaInterior, alt: "Living Space", title: "Comfortable Living Areas" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Villa Arougou Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our authentic villa and discover 
            the traditional charm and natural beauty that awaits you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-semibold">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;