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
];

const UpcomingWorkshops = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-foreground">
            Next <span className="text-gradient-neon">Upcoming Workshops</span>
          </h2>
          <p className="text-muted-foreground">Reserve your spot — limited seats available</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workshops.map((ws, i) => (
            <motion.div
              key={ws.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 flex flex-col hover:shadow-neon-blue transition-all duration-300"
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
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
