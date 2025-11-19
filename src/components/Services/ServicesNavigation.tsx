interface Service {
  id: string;
  iconName: string;
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
              <span>{getIcon(service.iconName)}</span>
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNavigation;