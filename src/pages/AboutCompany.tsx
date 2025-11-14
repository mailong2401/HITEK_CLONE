import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CompanyVision from "@/components/CompanyVision"
import CompanyInfo from '@/components/CompanyInfo';
import VisionCard from '@/components/VisionCard';
import CompanyInformation from '@/components/CompanyInformation';
import AchievementsTimeline from '@/components/AchievementsTimeline';
import KeyMembersHorizontal from '@/components/KeyMembersHorizontal';
import KeyMembers from '@/components/KeyMembers';

const AboutCompany = () => {
  return (
    <>
      <CompanyVision />
      <CompanyInformation />
      <AchievementsTimeline />
      <KeyMembers />
      <ContactSection />
    </>
  );
};

export default AboutCompany;
