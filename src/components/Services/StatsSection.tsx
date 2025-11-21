import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, TrendingUp, Users, Clock, Award } from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon?: string;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getIcon = (iconName?: string) => {
    const icons: Record<string, React.ReactNode> = {
      Star: <Star className="w-6 h-6" />,
      TrendingUp: <TrendingUp className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      Clock: <Clock className="w-6 h-6" />,
      Award: <Award className="w-6 h-6" />,
    };
    return icons[iconName || "Star"] || <Star className="w-6 h-6" />;
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
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              Thành Tựu Nổi Bật
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Con Số Ấn Tượng
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Những con số biết nói về hiệu quả và chất lượng dịch vụ của chúng tôi
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Background Glow Effect */}
                <motion.div
                  animate={floatingAnimation}
                  className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center group-hover:border-primary/30 group-hover:bg-card/90 transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    variants={counterVariants}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl text-primary mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                  >
                    {getIcon(stat.icon)}
                  </motion.div>

                  {/* Number with Counting Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="flex items-baseline justify-center gap-1 mb-2"
                  >
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {stat.number}
                    </span>
                    {stat.suffix && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="text-2xl font-semibold text-primary"
                      >
                        {stat.suffix}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300"
                  >
                    {stat.label}
                  </motion.p>

                  {/* Animated Border Bottom */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full group-hover:w-3/4 transition-all duration-500"
                    whileHover={{ width: "75%" }}
                  />

                  {/* Floating Dots */}
                  <motion.div
                    animate={floatingAnimation}
                    className="absolute -top-2 -left-2 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    animate={{
                      ...floatingAnimation,
                      y: [3, -3, 3],
                      transition: { ...floatingAnimation.transition, delay: 0.5 }
                    }}
                    className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <motion.div
              animate={pulseAnimation}
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10"
            >
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">
                Hiệu suất không ngừng cải thiện
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-8 h-8 bg-primary/10 rounded-full blur-lg opacity-50 pointer-events-none"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            y: [5, -5, 5],
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-primary/20 rounded-full blur-lg opacity-30 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default StatsSection;