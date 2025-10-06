import { Recycle, TrendingUp, Clipboard, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Recycle,
      title: "Recycling Programs",
      description: "Comprehensive recycling solutions tailored to your organization's needs. We implement efficient sorting, collection, and processing systems.",
      color: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Sustainability Consulting",
      description: "Expert guidance to help your business achieve sustainability goals. From carbon footprint reduction to green certifications.",
      color: "bg-accent/10"
    },
    {
      icon: Clipboard,
      title: "Waste Management Planning",
      description: "Strategic waste management solutions that reduce costs and environmental impact. Audit, plan, and optimize your waste systems.",
      color: "bg-primary-light/10"
    },
    {
      icon: GraduationCap,
      title: "Corporate Training",
      description: "Educational workshops and training programs to empower your team with sustainability knowledge and best practices.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
