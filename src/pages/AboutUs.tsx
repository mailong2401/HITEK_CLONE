import ContactSection from "@/components/ContactSection";
import AboutHitek from "@/components/about/us/AboutHitek";
import AboutUsBanner from "@/components/about/us/AboutUsBanner";
import CSRSection from "@/components/about/us/CSRSection";
import SustainableDevelopmentGoals from "@/components/about/us/SustainableDevelopmentGoals";

const AboutUs = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutHitek />
      <SustainableDevelopmentGoals />
      <CSRSection />
      <ContactSection />
    </>
  );
};

export default AboutUs;
