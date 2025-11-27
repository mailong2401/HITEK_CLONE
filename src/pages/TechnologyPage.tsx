// pages/TechnologyPage.tsx
import HeroSection from "../components/technology/HeroSection";
import TechnologyTabs from "../components/technology/TechnologyTabs";
import DevelopmentProcess from "../components/technology/DevelopmentProcess";
import CTASection from "../components/technology/CTASection";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <HeroSection />
      <TechnologyTabs />
      <DevelopmentProcess />
      <CTASection />
    </div>
  );
};

export default TechnologyPage;
