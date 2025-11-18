import { forwardRef } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

interface ActiveServiceDetailProps {
  services: Service[];
  activeService: number;
}

const ActiveServiceDetail = forwardRef<HTMLDivElement, ActiveServiceDetailProps>(
  function ActiveServiceDetail({ services, activeService }, ref) {
    const service = services[activeService];

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
              <div className="text-primary text-5xl">{service.icon}</div>
              <h2 className="text-4xl font-bold">{service.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);

export default ActiveServiceDetail;
