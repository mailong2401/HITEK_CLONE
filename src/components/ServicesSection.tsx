import { Code, Cloud, Smartphone, Shield, Cpu, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Phát triển phần mềm",
      description: "Xây dựng các giải pháp phần mềm tùy chỉnh đáp ứng nhu cầu kinh doanh",
    },
    {
      icon: Cloud,
      title: "Giải pháp Cloud",
      description: "Triển khai và quản lý hạ tầng đám mây hiệu quả và bảo mật",
    },
    {
      icon: Smartphone,
      title: "Ứng dụng di động",
      description: "Phát triển app mobile đa nền tảng với trải nghiệm người dùng tối ưu",
    },
    {
      icon: Shield,
      title: "An ninh mạng",
      description: "Bảo vệ hệ thống và dữ liệu với các giải pháp bảo mật tiên tiến",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Tích hợp AI và ML để tự động hóa và tối ưu quy trình",
    },
    {
      icon: Database,
      title: "Quản lý dữ liệu",
      description: "Thiết kế và quản lý cơ sở dữ liệu mạnh mẽ, có khả năng mở rộng",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            DỊCH VỤ CỦA CHÚNG TÔI
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Giải pháp công nghệ toàn diện
          </h2>
          <p className="text-muted-foreground text-lg">
            Chúng tôi cung cấp các dịch vụ công nghệ hiện đại, giúp doanh nghiệp chuyển đổi số
            và nâng cao năng lực cạnh tranh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/50 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="mb-4 p-4 rounded-lg bg-primary/10 group-hover:bg-gradient-accent transition-all duration-300 w-fit">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
