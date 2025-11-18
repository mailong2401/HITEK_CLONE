import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2, Clock, Users, Code2, Zap, BarChart3, Rocket } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: string;
}

interface DevelopmentProcessProps {
  process: ProcessStep[];
}

const DevelopmentProcess = ({ process }: DevelopmentProcessProps) => {
  const [containerRef, containerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [stepsRef, stepsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getStepIcon = (stepNumber: string, iconName?: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Clock: <Clock className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      Code2: <Code2 className="w-6 h-6" />,
      Zap: <Zap className="w-6 h-6" />,
      BarChart3: <BarChart3 className="w-6 h-6" />,
      Rocket: <Rocket className="w-6 h-6" />,
      CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
    };

    if (iconName && iconMap[iconName]) {
      return iconMap[iconName];
    }

    // Default icons based on step number
    const defaultIcons = [
      <Users className="w-6 h-6" />,
      <Code2 className="w-6 h-6" />,
      <Zap className="w-6 h-6" />,
      <Rocket className="w-6 h-6" />,
    ];
    
    return defaultIcons[parseInt(stepNumber) - 1] || <CheckCircle2 className="w-6 h-6" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={containerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={containerInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4" />
            Quy Trình Làm Việc
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Quy Trình Phát Triển
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chúng tôi tuân theo quy trình phát triển chuyên nghiệp, đảm bảo chất lượng 
            và hiệu quả tối ưu cho từng dự án
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          ref={stepsRef}
          variants={containerVariants}
          initial="hidden"
          animate={stepsInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connecting Line - Desktop */}
          <motion.div
            variants={lineVariants}
            className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ originX: 0 }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Step Number Background */}
                <motion.div
                  animate={floatingAnimation}
                  className="absolute -top-4 -right-4 text-8xl font-black text-primary/5 pointer-events-none"
                >
                  {step.step}
                </motion.div>

                {/* Step Connector - Mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={stepsInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-0.5 bg-primary/20 lg:hidden"
                />

                {/* Step Card */}
                <motion.div
                  variants={cardHoverVariants}
                  className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full group-hover:border-primary/30 group-hover:bg-card/90 transition-all duration-300"
                >
                  {/* Step Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl text-primary border border-primary/10 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                    >
                      {getStepIcon(step.step, step.icon)}
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={stepsInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                      className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-lg"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/10 transition-all duration-500 pointer-events-none" />
                </motion.div>

                {/* Progress Line Connector - Desktop */}
                {index < process.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={stepsInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                    className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-primary/30"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Background Decoration */}
          <motion.div
            animate={floatingAnimation}
            className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-50 pointer-events-none"
          />
          <motion.div
            animate={{
              ...floatingAnimation,
              y: [5, -5, 5],
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
            className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl opacity-30 pointer-events-none"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={containerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">
              Mỗi bước được thực hiện tỉ mỉ và chuyên nghiệp
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;