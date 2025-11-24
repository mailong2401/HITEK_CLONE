import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

// Import các hình ảnh mẫu
import softwareDevImg from "@/assets/ai-tech.jpg";
import cloudSolutionImg from "@/assets/ai-tech.jpg";
import mobileAppImg from "@/assets/ai-tech.jpg";
import cybersecurityImg from "@/assets/ai-tech.jpg";
import aiMlImg from "@/assets/ai-tech.jpg";
import dataManagementImg from "@/assets/ai-tech.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [hasAnimated, setHasAnimated] = useState(false);

  const services = [
    {
      image: softwareDevImg,
      title: t('servicesSection.services.softwareDev.title'),
      description: t('servicesSection.services.softwareDev.description'),
    },
    {
      image: cloudSolutionImg,
      title: t('servicesSection.services.cloudSolution.title'),
      description: t('servicesSection.services.cloudSolution.description'),
    },
    {
      image: mobileAppImg,
      title: t('servicesSection.services.mobileApp.title'),
      description: t('servicesSection.services.mobileApp.description'),
    },
    {
      image: cybersecurityImg,
      title: t('servicesSection.services.cybersecurity.title'),
      description: t('servicesSection.services.cybersecurity.description'),
    },
    {
      image: aiMlImg,
      title: t('servicesSection.services.aiMl.title'),
      description: t('servicesSection.services.aiMl.description'),
    },
    {
      image: dataManagementImg,
      title: t('servicesSection.services.dataManagement.title'),
      description: t('servicesSection.services.dataManagement.description'),
    },
    {
      image: dataManagementImg,
      title: t('servicesSection.services.consulting.title'),
      description: t('servicesSection.services.consulting.description'),
    },
    {
      image: dataManagementImg,
      title: t('servicesSection.services.maintenance.title'),
      description: t('servicesSection.services.maintenance.description'),
    },
  ];

  // Tính toán số dots thực tế cần hiển thị
  const totalDots = Math.max(services.length - visibleCards + 1, 1);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const gap = 20;
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scroll = (direction) => {
    const maxIndex = services.length - visibleCards;
    const newIndex = direction === 'right' 
      ? currentIndex >= maxIndex ? 0 : currentIndex + 1
      : currentIndex <= 0 ? maxIndex : currentIndex - 1;
    
    scrollToIndex(newIndex);
  };

  // Auto scroll chỉ khi section trong view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  // Cập nhật số card hiển thị dựa trên kích thước màn hình
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Kích hoạt animation khi section vào view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Hàm xác định card có đang ở trung tâm không
  const isCenterCard = (index) => {
    return index === currentIndex + Math.floor(visibleCards / 2);
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section với hiệu ứng xuất hiện */}
        <div 
          className={`
            text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 transform
            ${isInView 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
            }
          `}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('servicesSection.heading').split(' ').slice(0, 2).join(' ')}
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-2">
              {t('servicesSection.heading').split(' ').slice(2).join(' ')}
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('servicesSection.subheading')}
          </p>
        </div>

        {/* Carousel Container với hiệu ứng xuất hiện */}
        <div 
          className={`
            relative max-w-6xl mx-auto transition-all duration-1000 delay-300
            ${isInView 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
            }
          `}
        >
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border hover:bg-background hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border hover:bg-background hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Scrollable Cards Container với hiệu ứng phóng to */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 pb-8 scroll-smooth px-8 snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {services.map((service, index) => {
              const isCenter = isCenterCard(index);
              return (
                <Card
                  key={index}
                  className={`
                    group transition-all duration-500 border-2 flex-shrink-0 flex flex-col snap-start
                    ${isCenter 
                      ? 'scale-105 shadow-2xl border-primary/30 bg-gradient-to-br from-card to-blue-50/50 dark:to-blue-950/20 w-[400px]' 
                      : 'scale-95 shadow-lg border-border/30 bg-card/70 backdrop-blur-sm opacity-70 w-[380px] hover:opacity-90'
                    }
                    ${hasAnimated ? 'animate-in slide-in-from-bottom-8 duration-700' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <CardHeader className="p-0 flex-shrink-0">
                    <div className="h-52 overflow-hidden rounded-t-lg relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className={`
                          w-full h-full object-cover transition-all duration-700
                          ${isCenter ? 'group-hover:scale-110' : 'group-hover:scale-105'}
                        `}
                      />
                      {/* Overlay gradient cho ảnh */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6 pb-0">
                      <CardTitle className={`
                        transition-all duration-300 flex items-center
                        ${isCenter 
                          ? 'text-2xl font-bold text-foreground group-hover:text-primary' 
                          : 'text-xl font-semibold text-foreground/90'
                        }
                      `}>
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-4 flex-1 flex flex-col">
                    <p className={`
                      leading-relaxed flex-1 transition-all duration-300
                      ${isCenter 
                        ? 'text-foreground/80 text-base' 
                        : 'text-muted-foreground text-sm'
                      }
                    `}>
                      {service.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border/30">
                      <button className={`
                        font-semibold text-sm transition-all duration-300 flex items-center gap-2 group-hover:gap-3
                        ${isCenter 
                          ? 'text-primary hover:text-primary/80' 
                          : 'text-muted-foreground hover:text-foreground'
                        }
                      `}>
                        <span>{t('servicesSection.exploreButton')}</span>
                        <ChevronRight className={`
                          transition-all duration-300
                          ${isCenter ? 'h-5 w-5' : 'h-4 w-4'}
                        `} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator dots với hiệu ứng xuất hiện */}
        <div 
          className={`
            flex justify-center mt-12 space-x-3 transition-all duration-1000 delay-500
            ${isInView 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-5 opacity-0'
            }
          `}
        >
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`
                rounded-full transition-all duration-500 ease-out
                ${index === currentIndex 
                  ? 'bg-primary scale-125 w-8 h-3' 
                  : 'bg-border hover:bg-primary/50 w-3 h-3'
                }
              `}
            />
          ))}
        </div>
      </div>

      <style>{`
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
