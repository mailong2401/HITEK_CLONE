import ContactSection from "@/components/ContactSection";
import AboutHitek from "@/components/about/us/AboutHitek";
import AboutUsBanner from "@/components/about/us/AboutUsBanner";
import CSRSection from "@/components/about/us/CSRSection";

const AboutUs = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutHitek />
      <ContactSection />
      <CSRSection />
    </>
  );
};

export default AboutUs;
