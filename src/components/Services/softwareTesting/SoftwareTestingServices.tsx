import { motion } from 'framer-motion';
import { Zap, Smartphone, Cpu, Shield } from 'lucide-react';

const SoftwareTestingServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const services = [
    {
      icon: Cpu,
      title: "KIỂM TRA API",
      description: "Các dịch vụ thử nghiệm của chúng tôi sử dụng các phương pháp hay nhất và công cụ nguồn mở để giảm chu kỳ phân phối của bạn. Chúng tôi đánh giá các API của bạn dựa trên thông số kỹ thuật, hiệu suất, khả năng xử lý lỗi và tính bảo mật của chúng.",
      features: [
        "Đánh giá thông số kỹ thuật API",
        "Kiểm tra hiệu suất tối ưu",
        "Kiểm tra khả năng xử lý lỗi",
        "Đảm bảo tính bảo mật"
      ],
      color: "from-blue-500/10 to-blue-600/10",
      textColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "THỬ NGHIỆM DI ĐỘNG",
      description: "Các chuyên gia thử nghiệm di động của chúng tôi luôn ghi nhớ các mục tiêu và ngân sách của bạn trong khi chúng tôi phát triển chiến lược thử nghiệm của bạn. Chúng tôi lựa chọn thủ công các công cụ và tập trung vào kiểm tra chức năng, kiểm tra hiệu suất và kiểm tra bảo mật.",
      features: [
        "Kiểm tra chức năng ứng dụng",
        "Kiểm tra hiệu suất di động",
        "Kiểm tra bảo mật toàn diện",
        "Tối ưu ngân sách và mục tiêu"
      ],
      color: "from-green-500/10 to-green-600/10",
      textColor: "text-green-600"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Title Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 lg:mb-24"
          >

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              TĂNG TỐC THỜI GIAN TIẾP THỊ CỦA BẠN VỚI
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ĐẢM BẢO CHẤT LƯỢNG & KIỂM THỬ PHẦN MỀM
              </span>
            </h1>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-primary/30">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-xl`}>
                      <service.icon className="w-8 h-8 ${service.textColor}" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="p-1.5 bg-primary/10 rounded-lg mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Border Effect */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Hitek Software</span>
                      <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${service.color.replace('/10', '')}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
                  </motion.div>
      </div>
    </section>
  );
};

export default SoftwareTestingServices;
