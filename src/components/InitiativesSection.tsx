import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane, Wallet, Users, MessageCircle } from "lucide-react";

const InitiativesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Special <span className="text-gradient-neon">Initiatives</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Beyond the classroom — impacting communities</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Drone Spraying - Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 hover:shadow-neon-blue transition-shadow duration-300 group md:row-span-1"
          >
            <div className="w-12 h-12 mb-5 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <Plane className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">Drone Spraying for Agriculture</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Precision pesticide spraying using advanced drone technology. Reduce costs, increase yields, and protect your crops efficiently.
            </p>
            <Button
              variant="neon"
              size="sm"
              className="w-full gap-2"
              onClick={() => window.open("https://wa.me/917299515354?text=Hi%2C%20I%20want%20to%20book%20drone%20pesticide%20spraying%20for%20my%20farm.", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Book Drone Spraying
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass rounded-xl p-8 hover:shadow-neon-blue transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 mb-5 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">Project Funding Support</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We help students and startups secure funding for innovative tech projects and prototypes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 hover:shadow-neon-blue transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 mb-5 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">Open Workshops for All</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free and affordable workshops open to everyone — students, professionals, and curious minds alike.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
