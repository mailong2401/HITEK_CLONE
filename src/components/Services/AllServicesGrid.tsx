import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  const getIcon = (iconName: string) => {
    const icons: any = {
      Code2: '💻',
      BarChart3: '📊',
      Globe: '🌐',
      Cloud: '☁️',
      Smartphone: '📱',
      CheckCircle: '✅',
      Users: '👥',
      Building: '🏢',
      TrendingUp: '📈',
      Shield: '🛡️'
    };
    return icons[iconName] || '⚡';
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tất Cả Dịch Vụ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá toàn bộ dịch vụ công nghệ mà HITEK cung cấp
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-3xl">
                  {getIcon(service.iconName)}
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                    +{service.technologies.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllServicesGrid;