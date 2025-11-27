import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  technologies: string[];
}

interface AllServicesGridProps {
  services: Service[];
  setActiveService: (index: number) => void;
}

const AllServicesGrid = ({ services, setActiveService }: AllServicesGridProps) => {
  const { t } = useLanguage();
  const [containerRef, containerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    }
  };


  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t("services.allServicesGrid.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("services.allServicesGrid.description")}
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                variants={hoverVariants}
                className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/90"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    variants={iconVariants}
                    className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 text-3xl shadow-sm"
                  >
                    {getIcon(service.iconName)}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-primary/5 rounded-full text-xs font-medium text-primary border border-primary/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {service.technologies.length > 3 && (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      +{service.technologies.length - 3}
                    </motion.span>
                  )}
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground/60 text-sm font-medium">
            {t("services.allServicesGrid.hintClick")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServicesGrid;
