import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

const workshops = [
  {
    title: "Intro to Robotics",
    date: "Apr 5, 2026",
    time: "10:00 AM – 1:00 PM",
    seats: "30 seats",
    tag: "Beginner",
  },
  {
    title: "Drone Tech Masterclass",
    date: "Apr 12, 2026",
    time: "2:00 PM – 5:00 PM",
    seats: "25 seats",
    tag: "Intermediate",
  },
  {
    title: "AI & Machine Learning",
    date: "Apr 19, 2026",
    time: "10:00 AM – 4:00 PM",
    seats: "20 seats",
    tag: "Advanced",
  },
  {
    title: "IoT Smart Home Project",
    date: "Apr 26, 2026",
    time: "11:00 AM – 2:00 PM",
    seats: "35 seats",
    tag: "Beginner",
  },
];

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-24 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Upcoming <span className="text-gradient-neon">Workshops</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Hands-on, skill-based events to level up your tech journey</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {workshops.map((ws, i) => (
            <motion.div
              key={ws.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 flex flex-col hover:shadow-neon-blue transition-all duration-500 group"
            >
              <span className="self-start text-[10px] font-display font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-4">
                {ws.tag}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">{ws.title}</h3>
              <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {ws.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {ws.time}</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> {ws.seats}</div>
              </div>
              <Button variant="neon" size="sm" className="mt-auto w-full">
                Join Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
