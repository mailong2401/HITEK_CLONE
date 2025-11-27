import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";


interface Service {
  title: string;
  description: string;
  iconName: string;
  fullDescription: string;
  features: string[];
  image: string;
  technologies?: string[];
}

interface ActiveServiceDetailProps {
  services: Service[];
  activeService: number;
}

const ActiveServiceDetail = forwardRef<HTMLDivElement, ActiveServiceDetailProps>(

  function ActiveServiceDetail({ services, activeService }, ref) {
  const { t } = useLanguage();
    const [contentRef, contentInView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    const [imageRef, imageInView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });

    const [featuresRef, featuresInView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    const service = services[activeService];

    const getIcon = (iconName: string) => {
      const icons: Record<string, string> = {
        Code2: '💻',
        BarChart3: '📊',
        Globe: '🌐',
        Cloud: '☁️',
        Smartphone: '📱',
        CheckCircle: '✅',
        Users: '👥',
        Building: '🏢',
        TrendingUp: '📈',
        Shield: '🛡️',
        Cpu: '⚡',
        Database: '🗄️',
        Zap: '⚡',
        Lock: '🔒',
        Palette: '🎨'
      };
      return icons[iconName] || '⚡';
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15
        }
      }
    };

    const contentVariants = {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring" as const,
          damping: 20,
          stiffness: 100,
          duration: 0.8
        }
      }
    };

    const imageVariants = {
      hidden: { opacity: 0, x: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          damping: 20,
          stiffness: 100,
          duration: 0.8
        }
      }
    };

    const featureVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          damping: 25,
          stiffness: 100
        }
      }
    };

    const floatingAnimation = {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    };

    return (
      <section ref={ref} className="py-20 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {/* Phần trên: Grid 2 cột */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
              {/* Nội dung bên trái */}
              <motion.div
                ref={contentRef}
                variants={containerVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                className="space-y-8"
              >
                <motion.div
                  variants={contentVariants}
                  className="flex items-center gap-4 mb-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl text-primary text-4xl shadow-lg border border-primary/10"
                  >
                    {getIcon(service.iconName)}
                  </motion.div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {service.title}
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100px" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2"
                    />
                  </div>
                </motion.div>
                
                <motion.p
                  variants={contentVariants}
                  className="text-xl text-muted-foreground leading-relaxed"
                >
                  {service.fullDescription || service.description}
                </motion.p>

                {/* Technologies Tags */}
                {service.technologies && (
                  <motion.div
                    variants={contentVariants}
                    className="pt-4"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {t("services.activeServiceDetail.technologiesTitle")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-sm font-medium text-primary border border-primary/20 hover:border-primary/40 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Buttons */}
                <motion.div
                  variants={contentVariants}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">{t("services.activeServiceDetail.contactNow")}</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="font-semibold">{t("services.activeServiceDetail.viewCaseStudy")}</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Ảnh bên phải */}
              <motion.div
                ref={imageRef}
                variants={imageVariants}
                initial="hidden"
                animate={imageInView ? "visible" : "hidden"}
                className="relative"
              >
                <div className="sticky top-24">
                  {/* Decorative elements */}
                  <motion.div
                    animate={floatingAnimation}
                    className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{
                      ...floatingAnimation,
                      y: [5, -5, 5],
                      transition: { ...floatingAnimation.transition, delay: 1 }
                    }}
                    className="absolute -bottom-6 -right-6 w-6 h-6 bg-primary/30 rounded-full blur-sm"
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10" />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                      >
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold text-sm">{t("services.activeServiceDetail.topSolutionLabel")}</span>
                        </div>
                        <p className="text-foreground text-sm">
                          {t("services.activeServiceDetail.topSolutionDescription")}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -z-10 transform scale-105" />
                </div>
              </motion.div>
            </div>

            {/* Phần dưới: Tính năng nổi bật - Full Width */}
            <motion.div
              ref={featuresRef}
              initial={{ opacity: 0, y: 40 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-3xl p-8 lg:p-12 border border-border/50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center mb-12"
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3 mb-4"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Rocket className="w-8 h-8 text-primary" />
                  </motion.div>
                  {t("services.activeServiceDetail.featuresTitle")}
                  <motion.div
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Rocket className="w-8 h-8 text-primary" />
                  </motion.div>
                </motion.h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t("services.activeServiceDetail.featuresSubtitle")}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {service.features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex-shrink-0 mt-1 text-primary text-xl p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
                      >
                        <CheckCircle2 className="w-6 h-6" />
                      </motion.div>
                      <p className="text-foreground text-lg leading-relaxed flex-1">
                        {feature}
                      </p>
                    </div>
                    
                    {/* Hover line effect */}
                    <motion.div
                      className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-4 opacity-0 group-hover:opacity-100"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner elements */}
              <motion.div
                animate={floatingAnimation}
                className="absolute top-4 left-4 w-6 h-6 bg-primary/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  ...floatingAnimation,
                  y: [5, -5, 5],
                  transition: { ...floatingAnimation.transition, delay: 0.5 }
                }}
                className="absolute bottom-4 right-4 w-4 h-4 bg-primary/30 rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
);

export default ActiveServiceDetail;
