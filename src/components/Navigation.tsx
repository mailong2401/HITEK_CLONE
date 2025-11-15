import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kiểm tra khả năng scroll
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutHovered(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const aboutData = [
    {
      title: "Thông tin công ty",
      description: "Tìm hiểu về hành trình phát triển, sứ mệnh và tầm nhìn của HITEK",
      href: "/about-company"
    },
    {
      title: "Về chúng tôi", 
      description: "Đội ngũ chuyên gia, văn hóa công ty và những giá trị cốt lõi",
      href: "/about-us"
    }
  ];

  const servicesData = [
    {
      title: "Dịch vụ custom phần mềm",
      description: "Là một công ty phát triển phần mềm custom hàng đầu Việt Nam, chúng tôi đã hoàn thành xuất sắc hàng trăm dự án cho các khách hàng trên toàn thế giới. Thành lập từ năm 2017, Hitek luôn áp dụng các phương pháp mới một cách thuần thục.",
      link: "#custom-software"
    },
    {
      title: "Dịch vụ phát triển phần mềm dài hạn",
      description: "Phát triển phần mềm dài hạn là một quá trình xây dựng phức tạp, bởi không phải ai cũng được đào tạo bài bản và có kiến thức chuyên sâu để tự mình xử lý các dự án phát triển phần mềm dài hạn.",
      link: "#long-term-software"
    },
    {
      title: "Dịch vụ phát triển web",
      description: "Gần 10 năm kinh nghiệm trong nghề, chúng tôi luôn phát triển web bằng các công nghệ nổi trội bậc nhất như .NET, NodeJS, Java, PHP và các công nghệ front-end hiện đại khác (Angular, ReactJS, Jquery, HTML5, CSS3… ).",
      link: "#web-development"
    },
    {
      title: "Dịch vụ Cloud Migration",
      description: "Tận dụng đám mây và cơ sở hạ tầng để thúc đẩy tăng trưởng kinh doanh.",
      link: "#cloud-migration"
    },
    {
      title: "Dịch vụ phát triển mobile app",
      description: "Là một công ty phát triển ứng dụng di động hàng đầu, chúng tôi có nhiều năm kinh nghiệm trong việc tạo ra các ứng dụng sáng tạo, chất lượng cao cho khách hàng của mình.",
      link: "#mobile-app"
    },
    {
      title: "Dịch vụ kiểm thử phần mềm",
      description: "Là một trong những công ty phát triển phần mềm hàng đầu tại Việt Nam, Hitek vượt trội trong việc xây dựng trải nghiệm web và thiết bị di động cho khách hàng trên toàn thế giới.",
      link: "#software-testing"
    },
    {
      title: "Dịch vụ outsourcing theo dự án",
      description: "Đã và đang có nhiều cơ hội thực hiện những dự án Outsourcing cho các quốc gia phát triển trên thế giới như Mỹ, Canada, Hàn Quốc,... chúng tôi tự tin rằng Hitek có đủ kinh nghiệm để xử lý những dự án phức tạp nhất.",
      link: "#outsourcing"
    },
    {
      title: "Dịch vụ xây dựng offshore center",
      description: "Được tích lũy kinh nghiệm từ các dự án xây dựng offshore center với các khách hàng từ khắp nơi trên thế giới, Hitek tự tin rằng chúng tôi là một trong số ít những nhà cung cấp dịch vụ xây dựng offshore center phù hợp và hiện đại nhất.",
      link: "#offshore-center"
    },
    {
      title: "Dịch vụ phát triển phần mềm tại các quốc gia lân cận",
      description: "Phát triển phần mềm tại các quốc gia lân cận đề cập đến việc sản xuất phần mềm tại các quốc gia gần với thị trường tiêu thụ và thường có múi giờ tương tự, hơn hết sự khác biệt sẽ luôn nằm ở mức tối thiểu.",
      link: "#nearshore-software"
    },
    {
      title: "Dịch vụ ứng dụng Blockchain cho doanh nghiệp",
      description: "Chúng tôi giúp bạn phát triển công nghệ Blockchain cho doanh nghiệp mọi lĩnh vực, công nghệ này có thể cung cấp cho bạn những hồ sơ giao dịch dễ dàng và an toàn",
      link: "#blockchain"
    }
  ];

  const navLinks = [
    { name: "TRANG CHỦ", href: "/" },
    { 
      name: "VỀ HITEK", 
      href: "#about",
      hasDropdown: true,
      type: "about"
    },
    { 
      name: "DỊCH VỤ", 
      href: "#services",
      hasDropdown: true,
      type: "services"
    },
    { name: "CÔNG NGHỆ", href: "#technology" },
    { name: "DỰ ÁN", href: "#projects" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "TUYỂN DỤNG", href: "#careers" },
  ];

  // Hàm xử lý hover với delay
  const handleMouseEnter = (type) => {
    if (type === "about") {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      setIsAboutHovered(true);
    } else if (type === "services") {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      setIsServicesHovered(true);
    }
  };

  const handleMouseLeave = (type) => {
    if (type === "about") {
      aboutTimeoutRef.current = setTimeout(() => {
        setIsAboutHovered(false);
      }, 150); // Delay nhỏ để người dùng có thời gian di chuyển đến dropdown
    } else if (type === "services") {
      servicesTimeoutRef.current = setTimeout(() => {
        setIsServicesHovered(false);
      }, 150);
    }
  };

  const renderAboutDropdown = () => (
    <div 
      className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-xl z-50"
      onMouseEnter={() => handleMouseEnter("about")}
      onMouseLeave={() => handleMouseLeave("about")}
    >
      <div className="p-6">
        <h3 className="font-semibold text-foreground mb-4 text-lg text-center">VỀ HITEK</h3>
        <div className="space-y-4">
          {aboutData.map((item, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <Link 
                to={item.href}
                className="block hover:text-primary transition-colors"
                onClick={() => setIsAboutHovered(false)}
              >
                <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.description}
                </p>
                <span className="text-sm text-primary hover:underline font-medium">Tìm hiểu thêm</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServicesDropdown = () => (
    <div 
      className="absolute top-full left-0 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-xl z-50"
      onMouseEnter={() => handleMouseEnter("services")}
      onMouseLeave={() => handleMouseLeave("services")}
    >
      <div className="p-6">
        <h3 className="font-semibold text-foreground mb-6 text-lg text-center">DỊCH VỤ CỦA CHÚNG TÔI</h3>
        <div className="grid grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <a 
                href={service.link}
                className="block hover:text-primary transition-colors"
              >
                <h4 className="font-medium text-foreground mb-3">{service.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {service.description}
                </p>
                <span className="text-sm text-primary hover:underline font-medium">Xem thêm</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Cleanup timeout khi component unmount
  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Bên trái */}
          <div className="flex items-center flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="https://hitek.com.vn/wp-content/uploads/2022/08/logo-140x38.avif" 
                alt="HITEK Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Chính giữa */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.type === "about") handleMouseEnter("about");
                    if (link.type === "services") handleMouseEnter("services");
                  }}
                  onMouseLeave={() => {
                    if (link.type === "about") handleMouseLeave("about");
                    if (link.type === "services") handleMouseLeave("services");
                  }}
                  ref={link.type === "about" ? aboutDropdownRef : link.type === "services" ? servicesDropdownRef : null}
                >
                  {link.hasDropdown ? (
                    <div className="flex items-center cursor-pointer">
                      <span className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                        {link.name}
                      </span>
                      <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${
                        (link.type === "about" && isAboutHovered) || (link.type === "services" && isServicesHovered) 
                          ? 'rotate-180' : ''
                      }`} />
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* About Dropdown Menu */}
                  {link.type === "about" && isAboutHovered && renderAboutDropdown()}

                  {/* Services Dropdown Menu */}
                  {link.type === "services" && isServicesHovered && renderServicesDropdown()}
                </div>
              ))}
            </div>
          </div>

          {/* Controls - Bên phải */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Tablet Navigation với horizontal scroll - Chính giữa */}
          <div className="hidden md:flex lg:hidden items-center justify-center flex-1 mx-4">
            <div className="flex items-center w-full max-w-md">
              {/* Nút scroll left */}
              {canScrollLeft && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 flex-shrink-0"
                  onClick={scrollLeft}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
              
              {/* Container scroll */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide mx-2 flex-1"
                onScroll={checkScrollButtons}
              >
                <div className="flex items-center space-x-4 px-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Nút scroll right */}
              {canScrollRight && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 flex-shrink-0"
                  onClick={scrollRight}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Tablet Controls - Bên phải */}
          <div className="hidden md:flex lg:hidden items-center gap-2 flex-shrink-0">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-foreground">
                      {link.name}
                    </div>
                    {/* Mobile Submenu */}
                    <div className="pl-4 space-y-3 border-l-2 border-border">
                      {link.type === "about" ? (
                        aboutData.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </a>
                        ))
                      ) : (
                        servicesData.map((service, index) => (
                          <a
                            key={index}
                            href={service.link}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </a>
                        ))
                      )}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
