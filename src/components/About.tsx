import { Leaf, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable solutions that benefit both business and environment"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Customized waste management strategies for your unique needs"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building greener communities through education and engagement"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge recycling programs and sustainability practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Earthify
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Earthify is a UAE-based recycling and sustainability consultancy dedicated to 
              helping individuals, corporations, and communities embrace eco-friendly solutions. 
              We focus on waste management strategies, recycling programs, and sustainability education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
