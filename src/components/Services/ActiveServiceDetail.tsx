import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

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
    const [contentRef, contentInView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    const [imageRef, imageInView] = useInView({
      threshold: 0.3,
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
          type: "spring",
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
          type: "spring",
          damping: 20,
          stiffness: 100,
          duration: 0.8
        }
      }
    };

    const featureVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
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
        ease: "easeInOut"
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

                {/* Features List */}
                <motion.div
                  variants={containerVariants}
                  className="space-y-4"
                >
                  <motion.h3 
                    variants={contentVariants}
                    className="text-2xl font-semibold text-foreground flex items-center gap-2"
                  >
                    <Rocket className="w-6 h-6 text-primary" />
                    Tính năng nổi bật
                  </motion.h3>
                  <div className="space-y-3">
                    {service.features?.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={featureVariants}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="mt-1 text-primary text-xl p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                        </motion.div>
                        <p className="text-foreground text-lg leading-relaxed flex-1">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies Tags */}
                {service.technologies && (
                  <motion.div
                    variants={contentVariants}
                    className="pt-4"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Công nghệ sử dụng
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
                    <span className="font-semibold">Liên hệ ngay</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="font-semibold">Xem case study</span>
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
                          <span className="font-semibold text-sm">Giải pháp hàng đầu</span>
                        </div>
                        <p className="text-foreground text-sm">
                          Thiết kế tối ưu cho hiệu suất và trải nghiệm người dùng
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -z-10 transform scale-105" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);

export default ActiveServiceDetail;