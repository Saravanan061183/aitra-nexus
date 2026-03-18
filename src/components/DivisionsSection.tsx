import { motion } from "framer-motion";
import { GraduationCap, Cpu, Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const divisions = [
  {
    icon: GraduationCap,
    title: "Learning Programs",
    items: [
      { label: "Kids", desc: "Robotics, IoT, Block Coding" },
      { label: "College Students", desc: "Robotics, IoT, Drone Tech" },
      { label: "Professionals", desc: "Python, AI, MERN, Digital Marketing" },
    ],
  },
  {
    icon: Cpu,
    title: "AI Products & Services",
    items: [
      { label: "Custom AI Solutions", desc: "Tailored artificial intelligence for your business" },
      { label: "Software & App Dev", desc: "Full-stack development & deployment" },
      { label: "Automation Systems", desc: "Smart automation for efficiency" },
    ],
  },
];

const DivisionsSection = () => {
  return (
    <section id="divisions" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
            What We <span className="text-gradient-neon">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Three core divisions powering the future of tech in Madurai</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-8 hover:shadow-neon-blue transition-all duration-300"
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

        {/* AITRA TECH X Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass rounded-xl p-8 md:p-10 hover:shadow-neon-blue transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">AITRA TECH X</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                Your one-stop app for discovering and booking tech workshops — like BookMyShow, but for tech!
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">✅ Browse & book workshops instantly</li>
                <li className="flex items-center gap-2">✅ Earn through our referral program</li>
                <li className="flex items-center gap-2">✅ Track your learning journey</li>
              </ul>
              <Button variant="neon" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download AITRA Tech X App
              </Button>
            </div>
            <div className="w-48 h-80 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-xs font-display font-semibold text-primary">AITRA Tech X</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DivisionsSection;
