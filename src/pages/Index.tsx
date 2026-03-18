import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UpcomingWorkshops from "@/components/UpcomingWorkshops";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import InitiativesSection from "@/components/InitiativesSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UpcomingWorkshops />
      <AboutSection />
      <DivisionsSection />
      <InitiativesSection />
      <WorkshopsSection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
