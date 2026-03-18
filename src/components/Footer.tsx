import { Phone, MessageCircle, Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-neon mb-4">AITRA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Center for Robotics & Artificial Intelligence. Empowering Madurai with global tech skills.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+917299515354" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +91 7299 51 53 54
              </a>
              <a href="https://wa.me/917299515354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp
              </a>
              <a href="https://share.google/FWQHS0VTr2dtBUeMP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary" /> Our Location
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/AitraRobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:shadow-neon-blue transition-shadow duration-300"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/aitrarobotics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:shadow-neon-purple transition-shadow duration-300"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AITRA – Center for Robotics & AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
