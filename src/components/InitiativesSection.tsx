import { motion } from "framer-motion";
import { Plane, Wallet, Users } from "lucide-react";

const initiatives = [
  {
    icon: Plane,
    title: "Drone Spraying for Agriculture",
    description: "Leveraging drone technology to revolutionize farming with precision spraying, reducing costs and increasing yields.",
  },
  {
    icon: Wallet,
    title: "Project Funding Support",
    description: "We help students and startups secure funding for innovative tech projects and prototypes.",
  },
  {
    icon: Users,
    title: "Open Workshops for All",
    description: "Free and affordable workshops open to everyone — students, professionals, and curious minds alike.",
  },
];

const InitiativesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Special <span className="text-gradient-neon">Initiatives</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Beyond the classroom — impacting communities</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-8 hover:shadow-neon-purple transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 mb-5 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
