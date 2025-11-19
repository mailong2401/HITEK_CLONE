import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Nội dung bên trái */}
              <div>
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

                <div className="space-y-4 mb-8">
                  {service.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 text-primary text-xl">✓</div>
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    Liên hệ ngay
                  </Button>
                  <Button size="lg" variant="outline" className="group">
                    Xem thêm
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Ảnh bên phải */}
              <div className="relative">
                <div className="sticky top-24">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
);

export default ActiveServiceDetail;
