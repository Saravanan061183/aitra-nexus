import { motion } from "framer-motion";
import { Target, Globe, MapPin } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower local students with global-standard tech skills — right here in Madurai.",
  },
  {
    icon: Globe,
    title: "Funded by FourSteps",
    description: "Backed by FourSteps Training Solutions Pvt Ltd, bringing world-class tech education to Tier-2 cities.",
  },
  {
    icon: MapPin,
    title: "No Metro Required",
    description: "Access cutting-edge robotics, AI, and drone training without moving to metro cities.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient-neon">AITRA</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bridging the gap between rural talent and global technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-8 text-center hover:shadow-neon-blue transition-shadow duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
