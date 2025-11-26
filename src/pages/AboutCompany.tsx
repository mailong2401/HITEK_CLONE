import ContactSection from "@/components/ContactSection";
import CompanyVision from "@/components/about/company/CompanyVision"
import CompanyInformation from '@/components/about/company/CompanyInformation';
import AchievementsTimeline from '@/components/AchievementsTimeline';
import KeyMembers from '@/components/KeyMembers';
import ModernCompanyBanner from '@/components/about/company/ModernCompanyBanner';
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
