import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Import các hình ảnh mẫu
import service1 from "@/assets/Services/s1.jpg"
import service2 from "@/assets/Services/s2.jpg"
import service3 from "@/assets/Services/s3.jpg"
import service4 from "@/assets/Services/s4.jpg"
import service5 from "@/assets/Services/s5.jpg"
import service6 from "@/assets/Services/s6.jpg"
import service7 from "@/assets/Services/s7.jpg"
import service8 from "@/assets/Services/s8.jpg"
import service9 from "@/assets/Services/s9.jpg"
import service10 from "@/assets/Services/s10.jpg"

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
      image: service1,
      title: t('services.customSoftware.title'),
      description: t('services.customSoftware.description'),
    },
    {
      image: service2,
      title: t('services.longTermDevelopment.title'),
      description: t('services.longTermDevelopment.description'),
    },
    {
      image: service3,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
    },
    {
      image: service4,
      title: t('services.cloudMigration.title'),
      description: t('services.cloudMigration.description'),
    },
    {
      image: service5,
      title: t('services.mobileApp.title'),
      description: t('services.mobileApp.description'),
    },
    {
      image: service6,
      title: t('services.softwareTesting.title'),
      description: t('services.softwareTesting.description'),
    },
    {
      image: service7,
      title: t('services.outsourcing.title'),
      description: t('services.outsourcing.description'),
    },
    {
      image: service8,
      title: t('services.offshoreCenter.title'),
      description: t('services.offshoreCenter.description'),
    },
    {
      image: service9,
      title: t('services.nearshoreSoftware.title'),
      description: t('services.nearshoreSoftware.description'),
    },
    {
      image: service10,
      title: t('services.blockchain.title'),
      description: t('services.blockchain.description'),
    },
  ];

  // Tính toán số dots thực tế cần hiển thị
  const totalDots = Math.max(services.length - visibleCards + 1, 1);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.children[index];
      if (cardElement) {
        const containerWidth = container.offsetWidth;
        const cardWidth = cardElement.offsetWidth;
        const gap = 20;
        const scrollPosition = index * (cardWidth + gap) - (containerWidth - cardWidth) / 2;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const scroll = (direction) => {
    const maxIndex = services.length - visibleCards;
    const newIndex = direction === 'right' 
      ? currentIndex >= maxIndex ? 0 : currentIndex + 1
      : currentIndex <= 0 ? maxIndex : currentIndex - 1;
    
    scrollToIndex(newIndex);
  };

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

  // Xử lý scroll bằng touch/swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      scroll('right');
    } else if (isRightSwipe) {
      scroll('left');
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-gradient-to-br from-background via-background/90 to-secondary/50 overflow-hidden relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full">
              {t('servicesSection.tagline')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {t('servicesSection.heading').split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent pb-2">
              {t('servicesSection.heading').split(' ').slice(2).join(' ')}
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t('servicesSection.subheading')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - chỉ hiện trên desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scroll('left')}
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border-2 hover:bg-background hover:scale-110 transition-all duration-300 hover:border-primary"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </Button>
            
            <Button
              onClick={() => scroll('right')}
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border-2 hover:bg-background hover:scale-110 transition-all duration-300 hover:border-primary"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </Button>
          </div>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-5 pb-8 px-2 md:px-8 scroll-smooth snap-x snap-mandatory"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              cursor: 'grab'
            }}
            onMouseDown={() => document.body.style.cursor = 'grabbing'}
            onMouseUp={() => document.body.style.cursor = 'grab'}
            onMouseLeave={() => document.body.style.cursor = 'default'}
          >
            {services.map((service, index) => {
              const isCenter = isCenterCard(index);
              return (
                <Card
                  key={index}
                  className={`
                    group transition-all duration-500 border-2 flex-shrink-0 flex flex-col snap-start cursor-pointer
                    ${isCenter 
                      ? 'scale-105 shadow-2xl border-primary/50 bg-gradient-to-br from-card to-primary/5 w-[400px]' 
                      : 'scale-95 shadow-lg border-border/50 bg-card/90 backdrop-blur-sm opacity-80 hover:opacity-100 w-[380px]'
                    }
                    ${hasAnimated ? 'animate-in fade-in duration-700' : ''}
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      scrollToIndex(index - Math.floor(visibleCards / 2));
                    }
                  }}
                >
                  <CardHeader className="p-0 flex-shrink-0">
                    <div className="h-56 overflow-hidden rounded-t-lg relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className={`
                          w-full h-full object-cover transition-all duration-700
                          ${isCenter ? 'group-hover:scale-110' : 'group-hover:scale-105'}
                        `}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-semibold text-white bg-primary/90 px-3 py-1 rounded-full">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 pb-0">
                      <CardTitle className={`
                        transition-all duration-300 flex items-center
                        ${isCenter 
                          ? 'text-2xl font-bold text-foreground group-hover:text-primary' 
                          : 'text-xl font-semibold text-foreground/90 group-hover:text-foreground'
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
                        : 'text-muted-foreground text-sm group-hover:text-foreground/70'
                      }
                    `}>
                      {service.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border/30">
                      <Button
                        variant="ghost"
                        className={`
                          px-0 font-semibold text-sm transition-all duration-300 flex items-center gap-2 group-hover:gap-3
                          ${isCenter 
                            ? 'text-primary hover:text-primary/80' 
                            : 'text-muted-foreground hover:text-foreground'
                          }
                        `}
                      >
                        <span>{t('servicesSection.exploreButton')}</span>
                        <ChevronRight className={`
                          transition-all duration-300
                          ${isCenter ? 'h-5 w-5' : 'h-4 w-4'}
                        `} />
                      </Button>
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
                rounded-full transition-all duration-500 ease-out group
                ${index === currentIndex 
                  ? 'bg-primary scale-125 w-10 h-3 shadow-lg shadow-primary/30' 
                  : 'bg-border hover:bg-primary/50 w-3 h-3'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <span className="block w-2 h-2 bg-white rounded-full mx-auto"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            size="icon"
            className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg border-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg border-2"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth grab cursor effect */
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Card hover glow effect */
        .group:hover .card-glow {
          box-shadow: 0 0 40px rgba(var(--primary) / 0.3);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .service-card {
            width: 85vw !important;
            min-width: 85vw !important;
          }
        }
        
        @media (max-width: 640px) {
          .service-card {
            width: 90vw !important;
            min-width: 90vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
