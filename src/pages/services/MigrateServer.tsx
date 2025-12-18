import HeroSection from "@/components/Services/migrateServer/HeroSection";
import CloudMigrationSection from "@/components/Services/migrateServer/CloudMigrationSection";
import CloudMigrationProcess from "@/components/Services/migrateServer/CloudMigrationProcess";
import WhyCloudMigration from "@/components/Services/migrateServer/WhyCloudMigration";
import ContactSection from "@/components/ContactSection";

const MigrateServer = () => {
  return (
    <>
      <HeroSection/>
      <CloudMigrationSection />
      <WhyCloudMigration />
      <CloudMigrationProcess />
      <ContactSection />
    </>
  )
}

export default MigrateServer;
