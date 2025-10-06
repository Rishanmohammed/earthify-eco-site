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
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>Earthify</strong> is a UAE-based <strong>recycling and sustainability consultancy</strong> dedicated to helping individuals, corporations, and communities achieve their sustainability goals.
              We provide <strong>end-to-end guidance</strong> in responsible waste management, ensuring our clients find <strong>cost-effective, certified, and environmentally safe solutions</strong> for disposal and destruction needs.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our team connects clients with <strong>trusted, government-approved recycling partners</strong> across the UAE, ensuring every waste stream is handled ethically, efficiently, and within compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in-up">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower every <strong>individual, community, and corporation</strong> to understand and act upon their waste management responsibilities — aligning with the <strong>UAE 2030 Sustainability Vision</strong> and contributing to a cleaner, greener future.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To make sustainability achievable for everyone by providing <strong>practical, budget-friendly waste disposal and destruction solutions</strong>, while promoting <strong>awareness, education, and responsible action</strong> towards environmental protection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

          <div className="bg-card p-8 rounded-2xl shadow-card text-center animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Our Network</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We maintain strong <strong>tie-ups with reputed recycling centers across the UAE</strong>, ensuring that every disposal or destruction process meets local environmental standards and delivers <strong>value, transparency, and compliance</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
