import { forwardRef } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  iconName: string;
  fullDescription: string;
  features: string[];
  image: string;
}

interface ActiveServiceDetailProps {
  services: Service[];
  activeService: number;
}

const ActiveServiceDetail = forwardRef<HTMLDivElement, ActiveServiceDetailProps>(
  function ActiveServiceDetail({ services, activeService }, ref) {
    const service = services[activeService];

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

    return (
      <section ref={ref} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl text-primary text-4xl">
                {getIcon(service.iconName)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {service.title}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              {service.fullDescription || service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {service.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-primary">✓</div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);

export default ActiveServiceDetail;
