import HeroSection from "@/components/homePage/HeroSection";
import AISection from "@/components/homePage/AISection";
import ServicesSection from "@/components/homePage/ServicesSection";
import AboutSection from "@/components/homePage/AboutSection";
import ContactSection from "@/components/ContactSection";
import FlexibleWorkSection from "@/components/homePage/FlexibleWorkSection";
import ProjectsSection from "@/components/homePage/ProjectsSection"
import ClientsSection from "@/components/homePage/ClientsSection"

const Index = () => {
  return (
    <> {/* Đã bỏ Navigation và Footer vì đã có trong Layout */}
      <HeroSection />
      <AISection />
      <ServicesSection />
      <FlexibleWorkSection /> 
      <ProjectsSection/>
      <AboutSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
};

export default Index;
