import { Award, Users, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Năm kinh nghiệm" },
    { icon: Users, value: "500+", label: "Dự án hoàn thành" },
    { icon: Lightbulb, value: "50+", label: "Chuyên gia" },
    { icon: TrendingUp, value: "98%", label: "Khách hàng hài lòng" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm text-primary font-semibold tracking-wider uppercase">
              VỀ HITEK
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Đối tác công nghệ đáng tin cậy của bạn
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              HITEK là công ty công nghệ hàng đầu tại Việt Nam, chuyên cung cấp các giải pháp
              phần mềm và dịch vụ chuyển đổi số. Với đội ngũ chuyên gia giàu kinh nghiệm và
              công nghệ tiên tiến, chúng tôi cam kết mang đến những sản phẩm chất lượng cao.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sứ mệnh của chúng tôi là thúc đẩy sáng tạo, tăng tốc đổi mới, đồng hành phát
              triển và nâng tầm thành công cho mọi doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-gradient-accent transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
