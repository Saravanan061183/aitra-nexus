import { motion } from "framer-motion";
import { IndianRupee, Briefcase, Wrench, MapPin } from "lucide-react";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "World-class tech education at prices that work for everyone." },
  { icon: Briefcase, title: "Industry-Focused Skills", desc: "Curriculum designed with real industry demands in mind." },
  { icon: Wrench, title: "Hands-On Training", desc: "Build real projects from day one — not just theory." },
  { icon: MapPin, title: "Local Access, Global Tech", desc: "Get metro-level tech training right here in Madurai." },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 relative">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Why <span className="text-gradient-neon">AITRA</span>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass flex items-center justify-center group-hover:shadow-neon-blue transition-shadow duration-500">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
