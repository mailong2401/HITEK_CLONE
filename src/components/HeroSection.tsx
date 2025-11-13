import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://hitek.com.vn/wp-content/uploads/2024/10/home-page-hitek-software.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/80 via-tech-dark/70 to-tech-dark"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            THÚC ĐẨY SÁNG TẠO, TĂNG TỐC ĐỔI MỚI
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            ĐỒNG HÀNH PHÁT TRIỂN, NÂNG TẦM THÀNH CÔNG
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground italic mt-4">
            _ Chất lượng là danh dự _
          </p>
          <div className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground mt-8 tracking-wider">
            A New SOURCE of ENERGY
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Khám phá ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10">
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
