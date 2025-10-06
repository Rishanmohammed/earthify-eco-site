import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import recycling1 from "@/assets/recycling-1.jpg";
import recycling2 from "@/assets/recycling-2.jpg";
import recycling3 from "@/assets/recycling-3.jpg";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: recycling1,
      title: "Modern Recycling Facilities",
      description: "State-of-the-art sorting and processing centers"
    },
    {
      image: recycling2,
      title: "Sustainable Workspaces",
      description: "Creating eco-friendly corporate environments"
    },
    {
      image: recycling3,
      title: "Community Engagement",
      description: "Building greener communities together"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-hover">
            <div className="relative h-[400px] md:h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-primary-foreground">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in-up">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-primary-foreground/90 animate-fade-in-up">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/90 hover:bg-primary-foreground border-0 h-12 w-12 rounded-full shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/90 hover:bg-primary-foreground border-0 h-12 w-12 rounded-full shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-primary-foreground"
                      : "w-2 bg-primary-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
