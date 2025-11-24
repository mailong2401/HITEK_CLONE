// src/pages/ConsultationPage.tsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ConsultationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  const consultationServices = [
    {
      icon: Target,
      title: "Tư vấn chiến lược công nghệ",
      description: "Phân tích và đề xuất giải pháp công nghệ phù hợp với mục tiêu kinh doanh"
    },
    {
      icon: Zap,
      title: "Kiến trúc hệ thống",
      description: "Thiết kế kiến trúc hệ thống tối ưu, scalable và bảo mật"
    },
    {
      icon: Users,
      title: "Đội ngũ phát triển",
      description: "Tư vấn mô hình team phát triển phù hợp với dự án"
    },
    {
      icon: MessageCircle,
      title: "Lộ trình triển khai",
      description: "Xây dựng lộ trình phát triển rõ ràng, tiết kiệm thời gian và chi phí"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 dark:from-slate-950 dark:via-blue-950/10 dark:to-purple-950/5">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">
                TƯ VẤN CÔNG NGHỆ MIỄN PHÍ
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Nhận Tư Vấn{" "}
              </span>
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Công Nghệ
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Để lại thông tin, chuyên gia công nghệ của chúng tôi sẽ liên hệ tư vấn 
              giải pháp phù hợp nhất cho doanh nghiệp của bạn
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Thông Tin Liên Hệ
                </h2>
                <p className="text-muted-foreground mb-8">
                  Đội ngũ chuyên gia của HITEK sẵn sàng hỗ trợ và tư vấn 
                  giải pháp công nghệ tối ưu cho doanh nghiệp của bạn
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Điện thoại</h3>
                    <p className="text-muted-foreground">+84 123 456 789</p>
                    <p className="text-sm text-muted-foreground/70">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">contact@hitek.com.vn</p>
                    <p className="text-sm text-muted-foreground/70">Phản hồi trong 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Địa chỉ</h3>
                    <p className="text-muted-foreground">
                      Tòa nhà Technology Center, Quận 7, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Thời gian làm việc</h3>
                    <p className="text-muted-foreground">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                    <p className="text-muted-foreground">Thứ 7: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Dịch Vụ Tư Vấn
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {consultationServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all duration-300"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Đăng Ký Tư Vấn
                    </h3>
                    <p className="text-muted-foreground">
                      Điền thông tin để nhận tư vấn miễn phí từ chuyên gia
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Họ và tên *
                        </label>
                        <Input
                          placeholder="Nhập họ và tên"
                          className="bg-background border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Số điện thoại *
                        </label>
                        <Input
                          placeholder="Nhập số điện thoại"
                          className="bg-background border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="Nhập email"
                        className="bg-background border-border/50 focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Công ty
                      </label>
                      <Input
                        placeholder="Tên công ty (nếu có)"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Lĩnh vực quan tâm
                      </label>
                      <select className="w-full px-3 py-2 border border-border/50 rounded-lg bg-background focus:border-primary focus:outline-none">
                        <option value="">Chọn lĩnh vực quan tâm</option>
                        <option value="web-development">Phát triển Web Application</option>
                        <option value="mobile-app">Ứng dụng di động</option>
                        <option value="enterprise">Hệ thống doanh nghiệp</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="cloud">Điện toán đám mây</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nội dung tư vấn *
                      </label>
                      <Textarea
                        placeholder="Mô tả chi tiết nhu cầu tư vấn của bạn..."
                        rows={5}
                        className="bg-background border-border/50 focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                    >
                      Gửi Yêu Cầu Tư Vấn
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Chúng tôi cam kết bảo mật thông tin của bạn và sẽ liên hệ trong vòng 24 giờ
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: "500+", label: "Khách hàng đã tư vấn" },
              { number: "95%", label: "Tỷ lệ hài lòng" },
              { number: "24h", label: "Phản hồi nhanh chóng" },
              { number: "50+", label: "Chuyên gia công nghệ" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
