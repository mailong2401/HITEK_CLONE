import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects"; // 👈 Import hook
import { useNavigate } from 'react-router-dom'; // 👈 Import navigate

const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  const navigate = useNavigate(); // 👈 Sử dụng navigate
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [hasAnimated, setHasAnimated] = useState(false);

  // 👇 Sử dụng useProjects hook để lấy dữ liệu
  const { projects, categories, loading, error } = useProjects();

  // 👇 Lọc và giới hạn số lượng projects hiển thị (ví dụ: 6 projects đầu tiên)
  const featuredProjects = projects.slice(0, 6).map(project => ({
    id: project.id,
    image: project.image || 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: project.title,
    description: project.description,
    category: categories.find(cat => cat.id === project.category)?.name || project.category,
  }));

  // Tính toán số dots thực tế cần hiển thị
  const totalDots = Math.max(featuredProjects.length - visibleCards + 1, 1);

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
    const maxIndex = featuredProjects.length - visibleCards;
    const newIndex = direction === 'right' 
      ? currentIndex >= maxIndex ? 0 : currentIndex + 1
      : currentIndex <= 0 ? maxIndex : currentIndex - 1;
    
    scrollToIndex(newIndex);
  };

  // 👇 Xử lý click để chuyển đến trang chi tiết
  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  // 👇 Xử lý click "Xem tất cả" để chuyển đến trang projects
  const handleViewAllProjects = () => {
    navigate('/projects');
  };

  // Auto scroll chỉ khi section trong view
  useEffect(() => {
    if (!isInView || featuredProjects.length === 0) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isInView, featuredProjects.length]);

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

  // 👇 Hiển thị loading state
  if (loading) {
    return (
      <section 
        ref={sectionRef}
        id="projects" 
        className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/20 to-amber-50/10 dark:from-slate-950 dark:via-orange-950/10 dark:to-amber-950/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div>Đang tải dữ liệu dự án...</div>
          </div>
        </div>
      </section>
    );
  }

  // 👇 Hiển thị error state
  if (error) {
    return (
      <section 
        ref={sectionRef}
        id="projects" 
        className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/20 to-amber-50/10 dark:from-slate-950 dark:via-orange-950/10 dark:to-amber-950/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            Lỗi khi tải dữ liệu: {error}
          </div>
        </div>
      </section>
    );
  }

  // 👇 Hiển thị empty state nếu không có projects
  if (featuredProjects.length === 0) {
    return (
      <section 
        ref={sectionRef}
        id="projects" 
        className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/20 to-amber-50/10 dark:from-slate-950 dark:via-orange-950/10 dark:to-amber-950/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div>Chưa có dự án nào để hiển thị.</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/20 to-amber-50/10 dark:from-slate-950 dark:via-orange-950/10 dark:to-amber-950/5 overflow-hidden"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">
              DỰ ÁN CỦA CHÚNG TÔI
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {projects.length}+ Sản phẩm
            <span className="block bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              chất lượng nổi bật
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed text-center md:text-left flex-1">
              Hitek cam kết cung cấp các sản phẩm phần mềm có chất lượng vượt trội vì chúng tôi tin rằng chất lượng là vinh dự.
            </p>
            <button 
              onClick={handleViewAllProjects}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 whitespace-nowrap hover:gap-3 hover:scale-105"
            >
              <span>Xem tất cả các dự án</span>
              <ArrowRight className="h-4 w-4 transition-all duration-300" />
            </button>
          </div>
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
            {featuredProjects.map((project, index) => {
              const isCenter = isCenterCard(index);
              return (
                <Card
                  key={project.id}
                  className={`
                    group transition-all duration-500 border-2 flex-shrink-0 flex flex-col snap-start cursor-pointer
                    ${isCenter 
                      ? 'scale-105 shadow-2xl border-primary/30 bg-gradient-to-br from-card to-orange-50/50 dark:to-orange-950/20 w-[400px]' 
                      : 'scale-95 shadow-lg border-border/30 bg-card/70 backdrop-blur-sm opacity-70 w-[380px] hover:opacity-90'
                    }
                    ${hasAnimated ? 'animate-in slide-in-from-bottom-8 duration-700' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <CardHeader className="p-0 flex-shrink-0">
                    <div className="h-52 overflow-hidden rounded-t-lg relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={`
                          w-full h-full object-cover transition-all duration-700
                          ${isCenter ? 'group-hover:scale-110' : 'group-hover:scale-105'}
                        `}
                      />
                      {/* Overlay gradient cho ảnh */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pb-0">
                      <CardTitle className={`
                        transition-all duration-300
                        ${isCenter 
                          ? 'text-2xl font-bold text-foreground group-hover:text-primary' 
                          : 'text-xl font-semibold text-foreground/90'
                        }
                      `}>
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-4 flex-1 flex flex-col">
                    <p className={`
                      leading-relaxed flex-1 transition-all duration-300 mb-4
                      ${isCenter 
                        ? 'text-foreground/80 text-base' 
                        : 'text-muted-foreground text-sm'
                      }
                    `}>
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-border/30">
                      <button className={`
                        w-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 py-2 rounded-lg border
                        ${isCenter 
                          ? 'text-primary border-primary/20 hover:bg-primary/10 hover:text-primary' 
                          : 'text-muted-foreground border-border/30 hover:bg-card hover:text-foreground'
                        }
                      `}>
                        <span>Xem chi tiết</span>
                        <ArrowRight className={`
                          transition-all duration-300
                          ${isCenter ? 'h-4 w-4' : 'h-3 w-3'}
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

        {/* Project Stats với hiệu ứng xuất hiện */}
        <div 
          className={`
            text-center mt-16 transition-all duration-1000 delay-700
            ${isInView 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-5 opacity-0'
            }
          `}
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{projects.length}+</div>
              <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">95%</div>
              <div className="text-sm text-muted-foreground">Tỉ lệ thành công</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">24/7</div>
              <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
        /* Ẩn thanh scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
