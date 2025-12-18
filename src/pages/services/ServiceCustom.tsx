import HeroSection from "@/components/Services/service_custom/HeroSection";
import CustomSoftwareSection from "@/components/Services/service_custom/CustomSoftwareSection"
import OurSolutionsSection from '@/components/Services/service_custom/OurSolutionsSection';
import DevelopmentProcessSection from '@/components/Services/service_custom/DevelopmentProcessSection';
import OurTechnologiesSection from '@/components/Services/service_custom/OurTechnologiesSection';
import ContactSection from "@/components/ContactSection";

const ServiceCustom = () => {
  return (
    <>
      <HeroSection/>
      <CustomSoftwareSection/>
      <OurSolutionsSection/>
      <DevelopmentProcessSection />
      <OurTechnologiesSection />
      <ContactSection />
    </>
  )
}

export default ServiceCustom;
