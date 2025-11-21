import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();
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

  // Hàm scroll lên đầu trang
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsAboutHovered(false);
    setIsServicesHovered(false);
  }, []);

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
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutHovered(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesHovered(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ----- DATA -----
  const aboutData = [
    { title: t('about.companyInfo.title'), description: t('about.companyInfo.description'), href: "/about-company" },
    { title: t('about.aboutUs.title'), description: t('about.aboutUs.description'), href: "/about-us" },
  ];

  const servicesData = [
    { title: t('services.customSoftware.title'), description: t('services.customSoftware.description'), link: "#custom-software" },
    { title: t('services.longTermDevelopment.title'), description: t('services.longTermDevelopment.description'), link: "#long-term-software" },
    { title: t('services.webDevelopment.title'), description: t('services.webDevelopment.description'), link: "#web-development" },
    { title: t('services.cloudMigration.title'), description: t('services.cloudMigration.description'), link: "#cloud-migration" },
    { title: t('services.mobileApp.title'), description: t('services.mobileApp.description'), link: "#mobile-app" },
    { title: t('services.softwareTesting.title'), description: t('services.softwareTesting.description'), link: "#software-testing" },
    { title: t('services.outsourcing.title'), description: t('services.outsourcing.description'), link: "#outsourcing" },
    { title: t('services.offshoreCenter.title'), description: t('services.offshoreCenter.description'), link: "#offshore-center" },
    { title: t('services.nearshoreSoftware.title'), description: t('services.nearshoreSoftware.description'), link: "#nearshore-software" },
    { title: t('services.blockchain.title'), description: t('services.blockchain.description'), link: "#blockchain" },
  ];

  const navLinks = [
    { name: t('nav.home'), href: "/", onClick: scrollToTop },
    { name: t('nav.about'), href: "#about", hasDropdown: true, type: "about" },
    { name: t('nav.services'), href: "/services-page", hasDropdown: true, type: "services", onClick: scrollToTop },
    { name: t('nav.technology'), href: "/technology", onClick: scrollToTop },
    { name: t('nav.projects'), href: "/projects-page", onClick: scrollToTop },
    { name: t('nav.testimonials'), href: "#testimonials", onClick: scrollToTop },
    { name: t('nav.careers'), href: "#careers", onClick: scrollToTop },
  ];

  // ----- HOVER HANDLERS -----
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

  // Hàm xử lý khi click vào các mục dropdown
  const handleDropdownItemClick = () => {
    scrollToTop();
  };

  // Hàm xử lý khi click vào link chính của DỊCH VỤ
  const handleServicesLinkClick = (e) => {
    e.preventDefault();
    scrollToTop();
    // Sau khi scroll lên đầu, chuyển hướng đến trang dịch vụ
    setTimeout(() => {
      window.location.href = "/HITEK_CLONE/services-page";
    }, 500);
  };

  // ----- RENDER DROPDOWNS -----
  const renderAboutDropdown = () => (
    <motion.div 
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
      className="absolute top-full left-0 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-xl z-50 overflow-y-auto max-h-[500px]"
      onMouseEnter={() => handleMouseEnter("services")}
      onMouseLeave={() => handleMouseLeave("services")}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="p-6 grid grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="block border border-border rounded-lg p-4 hover:border-primary transition-colors"
            onClick={handleDropdownItemClick}
          >
            <h4 className="font-medium text-foreground mb-2">{service.title}</h4>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-3">{service.description}</p>
            <span className="text-sm text-primary hover:underline font-medium">{t('nav.viewMore')}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );

  // ----- MAIN RETURN -----
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <img src="https://hitek.com.vn/wp-content/uploads/2022/08/logo-140x38.avif" alt="HITEK Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative"
              onMouseEnter={() => link.type && handleMouseEnter(link.type)}
              onMouseLeave={() => link.type && handleMouseLeave(link.type)}
              ref={link.type === "about" ? aboutDropdownRef : link.type === "services" ? servicesDropdownRef : null}
            >
              {link.hasDropdown ? (
                <div className="flex items-center cursor-pointer">
                  {link.type === "services" ? (
                    // Xử lý riêng cho link DỊCH VỤ
                    <a
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={handleServicesLinkClick}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={link.onClick}
                    >
                      {link.name}
                    </Link>
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
                  onClick={link.onClick}
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
                    <a
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap flex-shrink-0"
                      onClick={handleServicesLinkClick}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap flex-shrink-0"
                      onClick={link.onClick || scrollToTop}
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
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">
                    {link.type === "services" ? (
                      <a
                        href={link.href}
                        onClick={handleServicesLinkClick}
                        className="cursor-pointer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      link.name
                    )}
                  </div>
                  <div className="pl-4 space-y-3 border-l-2 border-border">
                    {(link.type === "about" ? aboutData : servicesData).map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.href || item.link} 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors" 
                        onClick={handleDropdownItemClick}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={link.href} 
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors" 
                  onClick={link.onClick || scrollToTop}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
