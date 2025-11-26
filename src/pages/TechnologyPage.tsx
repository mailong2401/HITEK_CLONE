// pages/TechnologyPage.tsx
import HeroSection from "../components/technology/HeroSection";
import StatsSection from "../components/technology/StatsSection";
import TechnologyTabs from "../components/technology/TechnologyTabs";
import DevelopmentProcess from "../components/technology/DevelopmentProcess";
import CTASection from "../components/technology/CTASection";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <HeroSection />
      <StatsSection />
      <TechnologyTabs />
      <DevelopmentProcess />
      <CTASection />
    </div>
  );
};

export default TechnologyPage;
