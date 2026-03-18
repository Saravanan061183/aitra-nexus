import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-medium tracking-widest uppercase border border-primary/30 rounded-full text-primary bg-primary/5">
            Center for Robotics & AI
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-4 text-foreground">
            Future Tech Starts
            <br />
            <span className="text-gradient-neon">Here in Madurai</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-3">
            Learn Robotics, AI, IoT, Drone Technology & Build Real-World Skills
          </p>
          <p className="max-w-xl mx-auto text-base font-display font-semibold text-primary mb-10">
            🌍 International Quality — Now in Your Hometown
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg" className="text-base px-8">
              Join Workshop
            </Button>
            <Button variant="neon-outline" size="lg" className="text-base px-8">
              Explore Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
