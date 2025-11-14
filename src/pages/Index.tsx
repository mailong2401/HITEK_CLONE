import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AISection from "@/components/AISection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FlexibleWorkSection from "@/components/FlexibleWorkSection";
import ProjectsSection from "@/components/ProjectsSection"
import ClientsSection from "@/components/ClientsSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AISection />
      <ServicesSection />
      <FlexibleWorkSection /> 
      <ProjectsSection/>
      <AboutSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
