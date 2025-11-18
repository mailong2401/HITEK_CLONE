interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
}

interface ServicesNavigationProps {
  services: Service[];
  activeService: number;
  setActiveService: (index: number) => void;
}

const ServicesNavigation = ({ 
  services, 
  activeService, 
  setActiveService 
}: ServicesNavigationProps) => {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                activeService === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {service.icon}
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNavigation;