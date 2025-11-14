import { useRef } from 'react';
import { useInView } from 'framer-motion';
import aiTechImage from "@/assets/banner-ai-section.gif";
import { 
  Sparkles, Brain, Zap, Target, MessageCircle, Cpu, 
  GitBranch, Code2, TestTube, Ship, Activity, Cloud,
  Layout, Flowchart, Mic, Bug, Monitor, Globe,
  BarChart, Gauge, MessageSquare, Database, Figma
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation component
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      {children}
    </div>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(30px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const AISection = () => {
  const aiSteps = [
    {
      step: "01",
      title: "Phân tích yêu cầu",
      description: "Hiểu nhu cầu khách hàng, nghiệp vụ, chức năng cần có với độ chính xác cao",
      icon: Brain,
      aiTools: [
        { name: "ChatGPT / GPT", icon: MessageCircle, color: "text-green-500" },
        { name: "Bard / Gemini", icon: Brain, color: "text-blue-500" },
        { name: "Avscribe", icon: Mic, color: "text-purple-500" }
      ],
      features: [
        "Phân tích yêu cầu, tư vấn giải pháp",
        "Tự động viết tài liệu ban đầu",
        "Chuyển lời nói → văn bản thông minh"
      ]
    },
    {
      step: "02",
      title: "Thiết kế hệ thống",
      description: "Thiết kế kiến trúc tổng thể, mô hình dữ liệu, API tối ưu",
      icon: Target,
      aiTools: [
        { name: "Bard / Gemini", icon: Brain, color: "text-blue-500" },
        { name: "ChatGPT", icon: MessageCircle, color: "text-green-500" },
        { name: "Draw.io", icon: Layout, color: "text-orange-500" },
        { name: "Figma", icon: Figma, color: "text-pink-500" },
        { name: "Visio", icon: Database, color: "text-red-500" }
      ],
      features: [
        "Tạo sơ đồ kiến trúc thông minh",
        "Mô tả API, ERD tự động",
        "Thiết kế mô hình nâng cao"
      ]
    },
    {
      step: "03",
      title: "Lập trình",
      description: "Viết code các module theo thiết kế với sự hỗ trợ của AI",
      icon: Code2,
      aiTools: [
        { name: "GitHub Copilot", icon: GitBranch, color: "text-purple-500" },
        { name: "Cursor", icon: Code2, color: "text-blue-400" },
        { name: "Tabnine", icon: Zap, color: "text-yellow-500" },
        { name: "Sourcegraph", icon: Activity, color: "text-green-400" }
      ],
      features: [
        "Tự động gợi ý code thông minh",
        "AI review và refactor code",
        "Hỗ trợ tìm kiếm code nhanh"
      ]
    },
    {
      step: "04",
      title: "Kiểm thử phần mềm",
      description: "Đảm bảo hệ thống không lỗi với kiểm thử tự động AI",
      icon: TestTube,
      aiTools: [
        { name: "Testim", icon: TestTube, color: "text-blue-500" },
        { name: "Sapienz", icon: Bug, color: "text-red-500" },
        { name: "Selenium", icon: Monitor, color: "text-green-600" },
        { name: "BrowserStack", icon: Globe, color: "text-orange-500" },
        { name: "ChatGPT", icon: MessageCircle, color: "text-green-500" }
      ],
      features: [
        "Kiểm thử tự động bằng AI",
        "Tạo test case tự động",
        "Testing đa nền tảng thông minh"
      ]
    },
    {
      step: "05",
      title: "Triển khai",
      description: "Đưa hệ thống lên môi trường thực tế với CI/CD thông minh",
      icon: Ship,
      aiTools: [
        { name: "Harness", icon: Ship, color: "text-blue-500" },
        { name: "Spinnaker", icon: Cloud, color: "text-red-500" },
        { name: "ArgoCD", icon: Activity, color: "text-green-500" },
        { name: "AWS CodePipeline", icon: Cloud, color: "text-orange-500" }
      ],
      features: [
        "CI/CD với AI tối ưu",
        "Deploy đa nền tảng",
        "GitOps cho Kubernetes"
      ]
    },
    {
      step: "06",
      title: "Bảo trì & Vận hành",
      description: "Theo dõi hệ thống, sửa lỗi, nâng cấp với AIOps",
      icon: Activity,
      aiTools: [
        { name: "Moogsoft", icon: Activity, color: "text-purple-500" },
        { name: "Splunk", icon: BarChart, color: "text-blue-400" },
        { name: "Dynatrace", icon: Gauge, color: "text-green-500" },
        { name: "Chatbot AI", icon: MessageSquare, color: "text-pink-500" }
      ],
      features: [
        "Phát hiện sự cố tự động",
        "Phân tích log thông minh",
        "Giám sát hiệu năng bằng AI"
      ]
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-blue-50/20 to-purple-50/10 dark:from-background dark:via-blue-950/10 dark:to-purple-950/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section với animation */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Giải Pháp Phát Triển Phần Mềm
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mt-2">
              Thông Minh với AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            HITEK tích hợp các công nghệ AI hàng đầu xuyên suốt quy trình phát triển, 
            mang lại hiệu quả vượt trội về chất lượng và tốc độ
          </p>
        </AnimatedSection>

        {/* Hero Banner với animation */}
        <AnimatedSection className="relative mb-20">
          <div
            className="h-80 rounded-3xl bg-cover bg-center relative overflow-hidden shadow-2xl border"
            style={{ backgroundImage: `url(${aiTechImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/95 via-tech-dark/80 to-tech-dark/95"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-6">Công Nghệ AI Hàng Đầu Được Tích Hợp</h3>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                  {[
                    { name: "ChatGPT", icon: MessageCircle, bg: "bg-green-500/20" },
                    { name: "GitHub Copilot", icon: GitBranch, bg: "bg-purple-500/20" },
                    { name: "Testim", icon: TestTube, bg: "bg-blue-500/20" },
                    { name: "Harness", icon: Ship, bg: "bg-orange-500/20" },
                    { name: "Moogsoft", icon: Activity, bg: "bg-red-500/20" }
                  ].map((tool, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-2 ${tool.bg} backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300`}
                      style={{
                        animationDelay: `${index * 0.15}s`,
                        animation: 'slideInUp 0.6s ease-out forwards'
                      }}
                    >
                      <tool.icon className="h-5 w-5" />
                      <span className="font-semibold text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg opacity-90 max-w-2xl">
                  Hơn 20+ công cụ AI được tối ưu hóa cho từng giai đoạn phát triển
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Grid 6 bước với timeline và staggered animation */}
        <div className="relative">
          {/* Timeline connector - Ẩn trên mobile */}
          <div className="hidden xl:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {aiSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <div className="relative group">
                    {/* Timeline dot */}
                    <div className="hidden xl:flex absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform"></div>
                    
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm h-full hover:scale-105">
                      <CardContent className="p-6 space-y-4 h-full flex flex-col">
                        {/* Header với số bước và icon chính */}
                        <div className="flex items-center justify-between">
                          <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-300">
                            {step.step}
                          </span>
                          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 shadow-sm border">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>

                        {/* Tiêu đề và mô tả */}
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Features list */}
                        {step.features && (
                          <div className="space-y-2">
                            {step.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* AI Tools với logo */}
                        <div className="pt-4 border-t border-border/50">
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-1.5">
                              {step.aiTools.map((tool, idx) => {
                                const ToolIcon = tool.icon;
                                return (
                                  <Badge 
                                    key={idx} 
                                    variant="secondary" 
                                    className="gap-1.5 bg-primary/5 hover:bg-primary/10 border border-primary/10 text-xs py-1 px-2 transition-all duration-200 hover:scale-105"
                                  >
                                    <ToolIcon className={`h-3 w-3 ${tool.color}`} />
                                    <span className="text-xs">{tool.name.split('/')[0].trim()}</span>
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>

        {/* Call to action với animation */}
        <AnimatedSection className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-semibold text-foreground">
              Sẵn sàng tích hợp AI vào dự án của bạn? Liên hệ chuyên gia ngay!
            </span>
          </div>
        </AnimatedSection>
      </div>

      {/* Thêm CSS animation cho các tool badges trong banner */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AISection;
