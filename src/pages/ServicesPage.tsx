import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import useServicesData from "@/data/servicesData";

// Components
import HeroSection from "@/components/Services/HeroSection";
import ServicesNavigation from "@/components/Services/ServicesNavigation";
import ActiveServiceDetail from "@/components/Services/ActiveServiceDetail";
import AllServicesGrid from "@/components/Services/AllServicesGrid";
import DevelopmentProcess from "@/components/Services/DevelopmentProcess";
import CTASection from "@/components/Services/CTASection";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Sử dụng hook để lấy dữ liệu
  const { services, stats, process, sectionTitle, sectionDescription } = useServicesData();

  return (
    <div className="min-h-screen bg-background pt-20">
      <HeroSection />
      <ServicesNavigation 
        services={services} 
        activeService={activeService} 
        setActiveService={setActiveService} 
      />
      <ActiveServiceDetail 
        services={services} 
        activeService={activeService} 
        ref={ref} 
      />
      <AllServicesGrid 
        services={services} 
        setActiveService={setActiveService} 
      />
      <DevelopmentProcess process={process} />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
