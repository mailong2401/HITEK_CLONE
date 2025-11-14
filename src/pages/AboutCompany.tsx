import ContactSection from "@/components/ContactSection";
import CompanyVision from "@/components/CompanyVision"
import CompanyInformation from '@/components/CompanyInformation';
import AchievementsTimeline from '@/components/AchievementsTimeline';
import KeyMembers from '@/components/KeyMembers';
import ModernCompanyBanner from '@/components/ModernCompanyBanner';
import CompanyActivities from '@/components/CompanyActivities'

const AboutCompany = () => {
  return (
    <>
      <ModernCompanyBanner />
      <CompanyVision />
      <CompanyInformation />
      <AchievementsTimeline />
      <KeyMembers />
      <CompanyActivities />
      <ContactSection />
    </>
  );
};

export default AboutCompany;
