import { motion } from "framer-motion";
import { GraduationCap, Cpu, Smartphone } from "lucide-react";

const divisions = [
  {
    icon: GraduationCap,
    title: "Learning Programs",
    color: "blue" as const,
    items: [
      { label: "Kids", desc: "Robotics, IoT, Block Coding" },
      { label: "College Students", desc: "Robotics, IoT, Drone Tech" },
      { label: "Professionals", desc: "Python, AI, MERN, Digital Marketing" },
    ],
  },
  {
    icon: Cpu,
    title: "AI Products & Services",
    color: "purple" as const,
    items: [
      { label: "Custom AI Solutions", desc: "Tailored artificial intelligence for your business" },
      { label: "Software & App Dev", desc: "Full-stack development & deployment" },
      { label: "Automation Systems", desc: "Smart automation for efficiency" },
    ],
  },
  {
    icon: Smartphone,
    title: "AITRA TECH X",
    color: "mixed" as const,
    items: [
      { label: "Workshop Discovery", desc: "Find and book tech workshops instantly" },
      { label: "BookMyShow for Tech", desc: "Browse, book & attend events seamlessly" },
      { label: "Referral Earnings", desc: "Earn by referring friends to workshops" },
    ],
  },
];

const borderColors = {
  blue: "border-neon-blue/30 hover:border-neon-blue/60",
  purple: "border-neon-purple/30 hover:border-neon-purple/60",
  mixed: "border-primary/30 hover:border-primary/60",
};

const glowStyles = {
  blue: "hover:shadow-neon-blue",
  purple: "hover:shadow-neon-purple",
  mixed: "hover:shadow-neon-blue",
};

const DivisionsSection = () => {
  return (
    <section id="divisions" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What We <span className="text-gradient-neon">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Three core divisions powering the future of tech in Madurai</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass rounded-xl p-8 border ${borderColors[div.color]} ${glowStyles[div.color]} transition-all duration-500`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <div.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{div.title}</h3>
              </div>
              <div className="space-y-4">
                {div.items.map((item) => (
                  <div key={item.label} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
