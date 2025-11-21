import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cloud, 
  Database, 
  Smartphone, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Play
} from "lucide-react";

const TechnologyPage = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies = {
    frontend: {
      title: "Front-end Development",
      description: "Công nghệ hiện đại cho trải nghiệm người dùng tuyệt vời",
      items: [
        {
          name: "ReactJS",
          description: "Thư viện JavaScript cho xây dựng giao diện người dùng",
          icon: "⚛️",
          features: ["Component-based", "Virtual DOM", "Reusable Components"]
        },
        {
          name: "Angular",
          description: "Framework hoàn chỉnh cho ứng dụng web động",
          icon: "🅰️",
          features: ["Two-way Data Binding", "Dependency Injection", "Modular Architecture"]
        },
        {
          name: "Vue.js",
          description: "Framework progressive cho xây dựng UI",
          icon: "📊",
          features: ["Reactive Data Binding", "Component System", "Vue Router"]
        },
        {
          name: "TypeScript",
          description: "JavaScript với type system mạnh mẽ",
          icon: "🔷",
          features: ["Static Typing", "Better IntelliSense", "Enhanced Refactoring"]
        }
      ]
    },
    backend: {
      title: "Back-end Development",
      description: "Công nghệ server-side mạnh mẽ và bảo mật",
      items: [
        {
          name: "Node.js",
          description: "JavaScript runtime cho server-side development",
          icon: "🟢",
          features: ["Non-blocking I/O", "Event-driven", "NPM Ecosystem"]
        },
        {
          name: ".NET Core",
          description: "Framework đa nền tảng từ Microsoft",
          icon: "🔷",
          features: ["Cross-platform", "High Performance", "Enterprise Ready"]
        },
        {
          name: "Java Spring",
          description: "Framework enterprise Java phổ biến",
          icon: "☕",
          features: ["Dependency Injection", "AOP", "Spring Boot"]
        },
        {
          name: "Python Django",
          description: "Framework web Python cấp cao",
          icon: "🐍",
          features: ["Rapid Development", "Secure", "Scalable"]
        }
      ]
    },
    mobile: {
      title: "Mobile Development",
      description: "Phát triển ứng dụng di động đa nền tảng",
      items: [
        {
          name: "React Native",
          description: "Xây dựng ứng dụng mobile với React",
          icon: "📱",
          features: ["Cross-platform", "Native Performance", "Hot Reload"]
        },
        {
          name: "Flutter",
          description: "SDK của Google cho ứng dụng native",
          icon: "🎯",
          features: ["Single Codebase", "Fast Development", "Beautiful UI"]
        },
        {
          name: "iOS Swift",
          description: "Phát triển ứng dụng iOS native",
          icon: "🍎",
          features: ["Performance", "Safety", "Modern Syntax"]
        },
        {
          name: "Android Kotlin",
          description: "Ngôn ngữ chính thức cho Android development",
          icon: "🤖",
          features: ["Concise", "Safe", "Interoperable"]
        }
      ]
    },
    database: {
      title: "Database & Cloud",
      description: "Công nghệ lưu trữ và điện toán đám mây",
      items: [
        {
          name: "MongoDB",
          description: "NoSQL database cho ứng dụng hiện đại",
          icon: "🍃",
          features: ["Document-based", "Scalable", "Flexible Schema"]
        },
        {
          name: "PostgreSQL",
          description: "Relational database mã nguồn mở mạnh mẽ",
          icon: "🐘",
          features: ["ACID Compliance", "Extensible", "JSON Support"]
        },
        {
          name: "AWS",
          description: "Amazon Web Services - nền tảng cloud hàng đầu",
          icon: "☁️",
          features: ["Scalable", "Secure", "Global Infrastructure"]
        },
        {
          name: "Azure",
          description: "Cloud platform của Microsoft",
          icon: "🔷",
          features: ["Hybrid Cloud", "AI Integration", "Enterprise Focus"]
        }
      ]
    },
    blockchain: {
      title: "Blockchain & AI",
      description: "Công nghệ tiên tiến cho tương lai",
      items: [
        {
          name: "Ethereum",
          description: "Blockchain platform cho smart contracts",
          icon: "⛓️",
          features: ["Smart Contracts", "DApps", "DeFi"]
        },
        {
          name: "Solidity",
          description: "Ngôn ngữ lập trình cho Ethereum",
          icon: "📝",
          features: ["Static Typing", "Inheritance", "Libraries"]
        },
        {
          name: "Machine Learning",
          description: "AI và học máy cho ứng dụng thông minh",
          icon: "🧠",
          features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
        },
        {
          name: "IoT",
          description: "Internet of Things cho kết nối thông minh",
          icon: "📡",
          features: ["Real-time Data", "Sensor Networks", "Edge Computing"]
        }
      ]
    }
  };

  const stats = [
    { number: "50+", label: "Công nghệ sử dụng" },
    { number: "100+", label: "Dự án thành công" },
    { number: "10+", label: "Năm kinh nghiệm" },
    { number: "98%", label: "Khách hàng hài lòng" }
  ];

  const process = [
    {
      step: "01",
      title: "Phân tích & Lập kế hoạch",
      description: "Phân tích yêu cầu và lập kế hoạch chi tiết với công nghệ phù hợp"
    },
    {
      step: "02",
      title: "Thiết kế & Prototype",
      description: "Thiết kế UI/UX và tạo prototype để xác nhận concept"
    },
    {
      step: "03",
      title: "Phát triển & Tích hợp",
      description: "Phát triển ứng dụng với công nghệ hiện đại và tích hợp hệ thống"
    },
    {
      step: "04",
      title: "Kiểm thử & Triển khai",
      description: "Kiểm thử toàn diện và triển khai sản phẩm cuối cùng"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Công Nghệ <span className="text-primary">Hiện Đại</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Khám phá các công nghệ tiên tiến mà HITEK sử dụng để xây dựng 
              những giải pháp phần mềm đột phá cho doanh nghiệp của bạn
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/projects-page">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Xem các dự án
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" />
                Xem demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Công Nghệ Chúng Tôi Sử Dụng
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lựa chọn công nghệ phù hợp nhất cho từng dự án với sự am hiểu 
              chuyên sâu về các nền tảng hiện đại
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(technologies).map((techKey) => (
              <button
                key={techKey}
                onClick={() => setActiveTab(techKey)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === techKey
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {technologies[techKey].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {technologies[activeTab].title}
              </h3>
              <p className="text-muted-foreground">
                {technologies[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies[activeTab].items.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-4">{tech.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tech.description}
                  </p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quy Trình Phát Triển
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quy trình làm việc chuyên nghiệp đảm bảo chất lượng và tiến độ dự án
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sẵn sàng triển khai dự án với công nghệ hiện đại?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Liên hệ với chúng tôi để được tư vấn giải pháp công nghệ phù hợp nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/HITEK_CLONE#contact">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Liên hệ ngay
                </button>
              </Link>
              <Link to="/HITEK_CLONE#projects">
                <button className="border border-background px-8 py-3 rounded-lg font-semibold hover:bg-background/10 transition-colors">
                  Xem dự án
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
