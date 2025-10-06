import { Monitor, Package, Apple, Shirt, AlertTriangle, Wrench, Shield, Recycle, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT & E-Waste Disposal",
      description: "Secure and sustainable recycling of electronics and data-bearing devices with complete live recording of destruction process and sharing.",
      color: "bg-primary/10"
    },
    {
      icon: Package,
      title: "FMCG & Cosmetics Disposal/Destruction",
      description: "Safe destruction of expired or damaged consumer goods and personal care products. Destruction process complete live recording and sharing.",
      color: "bg-accent/10"
    },
    {
      icon: Apple,
      title: "Expired and Packed Food Disposal",
      description: "Environmentally compliant disposal of expired or unsellable food items with as client request live recording of destruction process.",
      color: "bg-primary-light/10"
    },
    {
      icon: Shirt,
      title: "Fashion & Apparel Destruction",
      description: "Brand-protected destruction of apparel, footwear, and accessories with complete documentation.",
      color: "bg-secondary/30"
    },
    {
      icon: AlertTriangle,
      title: "Hazardous Waste Disposal Support",
      description: "Expert coordination for safe management of chemical and industrial waste in full compliance with UAE regulations.",
      color: "bg-primary/10"
    },
    {
      icon: Wrench,
      title: "Lubricant & Spare Parts Destruction",
      description: "Responsible handling and destruction of oils, lubricants, and automotive materials with certified processes.",
      color: "bg-accent/10"
    },
    {
      icon: Shield,
      title: "Brand Protection & Confidential Disposal",
      description: "Ensuring sensitive materials and branded items are irreversibly destroyed with full confidentiality and compliance.",
      color: "bg-primary-light/10"
    },
    {
      icon: Recycle,
      title: "Specialized Waste Disposal",
      description: "Custom disposal solutions for unique or regulated waste streams tailored to your specific requirements.",
      color: "bg-secondary/30"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive sustainability solutions designed to make a real impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-hover animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
