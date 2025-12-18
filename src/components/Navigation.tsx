import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LogoHitek from "@/assets/logoHitek.avif"

const Navigation = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ----- SCROLL EFFECT -----
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const scrollLeftFn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRightFn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, [checkScrollButtons]);

  // ----- CLICK OUTSIDE DROPDOWN -----
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutHovered(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesHovered(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ----- DATA -----
  const aboutData = [
    { title: t('about.company.title'), description: t('about.company.description'), href: "/about-company" },
    { title: t('about.us.title'), description: t('about.us.description'), href: "/about-us" },
  ];

  const servicesData = [
    { title: t('services.customSoftware.title'), description: t('services.customSoftware.description'), link: "/services-page/custom-software" },
    { title: t('services.longTermDevelopment.title'), description: t('services.longTermDevelopment.description'), link: "/services-page/long-term-software" },
    { title: t('services.webDevelopment.title'), description: t('services.webDevelopment.description'), link: "/services-page/mobile-app" },
    { title: t('services.cloudMigration.title'), description: t('services.cloudMigration.description'), link: "/services-page/migrate-server" },
    { title: t('services.mobileApp.title'), description: t('services.mobileApp.description'), link: "/services-page#mobile-app" },
    { title: t('services.softwareTesting.title'), description: t('services.softwareTesting.description'), link: "/services-page/software-testing" },
    { title: t('services.outsourcing.title'), description: t('services.outsourcing.description'), link: "/services-page/outsourcing" },
    { title: t('services.offshoreCenter.title'), description: t('services.offshoreCenter.description'), link: "/services-page#offshore-center" },
    { title: t('services.nearshoreSoftware.title'), description: t('services.nearshoreSoftware.description'), link: "/services-page#nearshore-software" },
    { title: t('services.blockchain.title'), description: t('services.blockchain.description'), link: "/services-page#blockchain" },
  ];

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "#", hasDropdown: true, type: "about" },
    { name: t('nav.services'), href: "/services-page", hasDropdown: true, type: "services" },
    { name: t('nav.technology'), href: "/technology" },
    { name: t('nav.projects'), href: "/projects-page" },
    { name: t('nav.testimonials'), href: "/blog" },
    { name: t('nav.careers'), href: "/recruitment" },
  ];

  // ----- HOVER HANDLERS -----
  const handleMouseEnter = (type: string) => {
    if (type === "about") {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      setIsAboutHovered(true);
    } else if (type === "services") {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      setIsServicesHovered(true);
    }
  };

  const handleMouseLeave = (type: string) => {
    if (type === "about") {
      aboutTimeoutRef.current = setTimeout(() => setIsAboutHovered(false), 150);
    } else if (type === "services") {
      servicesTimeoutRef.current = setTimeout(() => setIsServicesHovered(false), 150);
    }
  };

  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  // Hàm scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hàm xử lý khi click vào các mục dropdown
  const handleDropdownItemClick = () => {
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  // Hàm xử lý khi click vào link chính của DỊCH VỤ - FIXED
  const handleServicesLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesHovered(false);
    scrollToTop();
    navigate("/services-page");
  };

  // Hàm xử lý click vào ABOUT (chỉ có dropdown, không có trang riêng)
  const handleAboutLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Không làm gì cả, chỉ để mở dropdown khi hover
  };

  // ----- RENDER DROPDOWNS -----
  const renderAboutDropdown = () => (
    <motion.div 
      ref={aboutDropdownRef}
      className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-xl z-50"
      onMouseEnter={() => handleMouseEnter("about")}
      onMouseLeave={() => handleMouseLeave("about")}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="p-6">
        <h3 className="font-semibold text-foreground mb-4 text-lg text-center">{t('nav.about')}</h3>
        <div className="space-y-4">
          {aboutData.map((item, index) => (
            <Link 
              key={index}
              to={item.href}
              className="block border border-border rounded-lg p-4 hover:border-primary transition-colors"
              onClick={handleDropdownItemClick}
            >
              <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              <span className="text-sm text-primary hover:underline font-medium">{t('nav.learnMore')}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderServicesDropdown = () => (
    <motion.div 
      ref={servicesDropdownRef}
      className="absolute top-full left-0 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-xl z-50 overflow-y-auto max-h-[500px]"
      onMouseEnter={() => handleMouseEnter("services")}
      onMouseLeave={() => handleMouseLeave("services")}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="p-6 grid grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="block border border-border rounded-lg p-4 hover:border-primary transition-colors"
            onClick={handleDropdownItemClick}
          >
            <h4 className="font-medium text-foreground mb-2">{service.title}</h4>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-3">{service.description}</p>
            <span className="text-sm text-primary hover:underline font-medium">{t('nav.viewMore')}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  // ----- MAIN RETURN -----
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${isScrolled ? "shadow-lg" : ""} h-16 md:h-20`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" >
          <img src={LogoHitek} alt="HITEK Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative"
              onMouseEnter={() => link.type && handleMouseEnter(link.type)}
              onMouseLeave={() => link.type && handleMouseLeave(link.type)}
            >
              {link.hasDropdown ? (
                <div className="flex items-center cursor-pointer">
                  {link.type === "services" ? (
                    // Xử lý cho link DỊCH VỤ
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={(e) => handleServicesLinkClick(e)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    // Xử lý cho ABOUT (chỉ có dropdown)
                    <a
                      href="#"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={(e) => handleAboutLinkClick(e)}
                    >
                      {link.name}
                    </a>
                  )}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${(link.type === "about" && isAboutHovered) || (link.type === "services" && isServicesHovered) ? "rotate-180" : ""}`} />
                  <AnimatePresence>
                    {link.type === "about" && isAboutHovered && renderAboutDropdown()}
                    {link.type === "services" && isServicesHovered && renderServicesDropdown()}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  to={link.href} 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* Tablet Scroll Menu */}
        <div className="hidden md:flex lg:hidden items-center flex-1 mx-4">
          {canScrollLeft && <Button variant="ghost" size="icon" onClick={scrollLeftFn}><ChevronLeft className="h-4 w-4" /></Button>}
          <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide mx-2 flex-1" onScroll={checkScrollButtons}>
            <div className="flex items-center space-x-4 px-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.type === "services" ? (
                    // Xử lý cho DỊCH VỤ trên tablet
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap flex-shrink-0"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToTop();
                        navigate("/services-page");
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : link.type === "about" ? (
                    // Xử lý cho ABOUT trên tablet (không có dropdown)
                    <Link
                      to={aboutData[0].href} // Mặc định chuyển đến trang đầu tiên
                      className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap flex-shrink-0"
                      onClick={() => scrollToTop()}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap flex-shrink-0"
                      onClick={() => scrollToTop()}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          {canScrollRight && <Button variant="ghost" size="icon" onClick={scrollRightFn}><ChevronRight className="h-4 w-4" /></Button>}
        </div>

        {/* Tablet Controls */}
        <div className="hidden md:flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-background border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      {link.type === "services" ? (
                        // DỊCH VỤ trên mobile - click chuyển trang
                        <Link
                          to={link.href}
                          className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            scrollToTop();
                          }}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        // ABOUT trên mobile - có dropdown
                        <>
                          <div className="text-base font-medium text-foreground py-2">
                            {link.name}
                          </div>
                          <div className="pl-4 space-y-2 border-l-2 border-border">
                            {(link.type === "about" ? aboutData : servicesData).map((item, index) => (
                              <Link 
                                key={index} 
                                to={item.href || item.link} 
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2" 
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  scrollToTop();
                                }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        scrollToTop();
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
