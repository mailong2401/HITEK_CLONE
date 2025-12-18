import { motion } from 'framer-motion';
import { Code2, Globe, Calendar, Sparkles, ArrowRight, Target, Award, Clock } from 'lucide-react';
import Background from "@/assets/Services/techonology-banner.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Dark overlay for better text readability */}
        
        {/* Gradient overlay for branding */}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Grid pattern overlay */}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title with Gradient Animation */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              <span className="block">Dịch vụ</span>
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] drop-shadow-lg"
              >
                kiểm thử phần mềm
              </motion.span>
            </h1>
          </motion.div>

          {/* Animated Separator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-white/30 to-primary/70 rounded-full" />
            <Target className="w-6 h-6 text-primary drop-shadow-lg" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-white/30 to-accent/70 rounded-full" />
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl max-w-3xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                Là một trong những công ty phát triển phần mềm hàng đầu tại Việt Nam  
                <span className="block mt-4 font-semibold text-primary drop-shadow-lg">
                  Hitek vượt trội trong việc xây dựng trải nghiệm web và thiết bị di động cho khách hàng trên toàn thế giới.
                </span>
              </p>
            </div>
            
            {/* Floating accent */}
            <motion.div
              animate={floatAnimation}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent blur-sm"
            />
            <motion.div
              animate={floatAnimation}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary blur-sm"
            />
          </motion.div>

        </motion.div>





      </div>
    </section>
  );
};

export default HeroSection;
