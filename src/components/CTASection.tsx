import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-secondary/40 via-primary/5 to-secondary/40">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Start Your Tech Journey <span className="text-gradient-neon">Today</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Join hundreds of students and professionals building the future from Madurai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg" className="text-base px-10">
              Join Workshop
            </Button>
            <Button variant="neon-outline" size="lg" className="text-base px-10">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
