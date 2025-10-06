import { Leaf, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "X (Twitter)" }
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Earthify</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Making sustainability simple and accessible for everyone. 
                Together, we create a greener future.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Dubai, United Arab Emirates</li>
                <li>info@earthify.ae</li>
                <li>+971 XX XXX XXXX</li>
              </ul>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            
            <p className="text-primary-foreground/60 text-sm text-center">
              © {currentYear} Earthify Recycling Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
