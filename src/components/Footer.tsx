import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Products: ['All Models', 'Electric', 'Hybrid', 'Accessories'],
    Support: ['Help Center', 'Warranty', 'Financing', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-display font-bold mb-4">
              <span className="text-gradient">LUXE</span>
              <span className="text-foreground">DRIVE</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Redefining luxury automotive excellence with cutting-edge technology and timeless design.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Visit Us</div>
                <div className="text-sm text-muted-foreground">
                  123 Luxury Drive, Beverly Hills, CA 90210
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Call Us</div>
                <div className="text-sm text-muted-foreground">
                  +1 (888) 555-LUXE
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-sm text-muted-foreground">
                  info@luxedrive.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LuxeDrive. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with passion for automotive excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
