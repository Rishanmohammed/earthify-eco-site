import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ImageSlider from "@/components/ImageSlider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ImageSlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
