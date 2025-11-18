import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, ExternalLink, ArrowUpRight } from "lucide-react";

// Components
import HeroSection from "@/components/Services/HeroSection";
import StatsSection from "@/components/Services/StatsSection";
import ServicesNavigation from "@/components/Services/ServicesNavigation";
import ActiveServiceDetail from "@/components/Services/ActiveServiceDetail";
import AllServicesGrid from "@/components/Services/AllServicesGrid";
import DevelopmentProcess from "@/components/Services/DevelopmentProcess";
import CTASection from "@/components/Services/CTASection";

// Data
import { services, stats, process } from "@/data/servicesData";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background pt-20">
      <HeroSection />
      <StatsSection stats={stats} />
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