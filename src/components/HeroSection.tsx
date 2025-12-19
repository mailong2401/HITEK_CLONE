import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://hitek.com.vn/wp-content/uploads/2024/10/home-page-hitek-software.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/40 via-tech-dark/30 to-tech-dark/50"></div>

      {/* Phần nội dung chính - căn giữa */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20 text-center flex-1 flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* H1 với animation đơn giản */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl text-primary md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            {t('hero.title1')}
          </motion.h1>
          
          {/* H2 với animation đơn giản */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            {t('hero.title2')}
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 italic mt-4"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
      </motion.div>

      {/* Phần button cố định ở dưới */}
      <motion.div 
        className="relative z-10 w-full pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('ai-section')} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t('hero.explore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg" 
              variant="outline" 
              className="bg-black-600 border-white text-white hover:bg-white/10"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
