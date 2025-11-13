import aiTechImage from "@/assets/ai-tech.jpg";
import { Sparkles, Brain, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AISection = () => {
  const aiSteps = [
    {
      step: "01",
      title: "Phân tích yêu cầu",
      description: "Ứng dụng AI để phân tích và hiểu rõ yêu cầu của khách hàng",
      icon: Brain,
    },
    {
      step: "02",
      title: "Thiết kế hệ thống",
      description: "AI hỗ trợ thiết kế kiến trúc hệ thống tối ưu và hiệu quả",
      icon: Target,
    },
    {
      step: "03",
      title: "Phát triển & Triển khai",
      description: "Tăng tốc độ phát triển với công nghệ AI tiên tiến",
      icon: Zap,
    },
    {
      step: "04",
      title: "Bảo trì & Tối ưu",
      description: "AI giám sát và tối ưu hóa hệ thống liên tục",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            QUY TRÌNH PHÁT TRIỂN PHẦN MỀM
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Quy trình ứng dụng AI
          </h2>
          <p className="text-muted-foreground text-lg">
            HITEK ứng dụng AI xuyên suốt từ phân tích yêu cầu, thiết kế hệ thống đến triển khai
            và bảo trì – giúp tăng tốc độ, độ chính xác và hiệu quả toàn diện.
          </p>
        </div>

        <div className="relative mb-16">
          <div
            className="h-96 rounded-2xl bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${aiTechImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/80 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs text-primary font-semibold">Đã ứng dụng AI</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AISection;
