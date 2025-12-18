import { motion } from 'framer-motion';
import { CheckCircle, Smartphone, Palette, Headphones, Cpu, Wrench } from 'lucide-react';
import Background from "@/assets/Services/app.png"

const AppDevelopmentServices = () => {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const services = [
    {
      icon: Smartphone,
      title: "Phát triển trên các nền tảng iOS, Android, Ipad",
    },
    {
      icon: Palette,
      title: "UX/UI design",
    },
    {
      icon: Headphones,
      title: "Tư vấn và hỗ trợ trong suốt quá trình dự án",
    },
    {
      icon: Cpu,
      title: "Kiểm thử phần mềm",
    },
    {
      icon: Wrench,
      title: "Dịch vụ sau bán hàng và chăm sóc",
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
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              CÁC DỊCH VỤ PHÁT TRIỂN APP
              <span className="pt-3 pb-3 block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                VƯỢT TRỘI MÀ CHÚNG TÔI CUNG CẤP
              </span>
            </h2>

            <motion.div
              variants={itemVariants}
              className="max-w-5xl mx-auto"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                Các dịch vụ chúng tôi đã thiết lập cho khách hàng đang liên tục cải thiện. Phát triển, tích hợp và quản trị các ứng dụng mobile app đều là một phần công việc của chúng tôi. Chúng tôi không ngừng đánh giá cao sự hiểu biết và mối quan hệ bền chặt giữa Hitek và khách hàng nhằm tạo ra những kết quả tiềm năng tốt nhất, từ khâu lên ý tưởng và thiết kế thông qua việc phân phối và hỗ trợ liên tục.
              </p>
            </motion.div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Services List */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-card border border-border rounded-xl p-4 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg transition-transform duration-300">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Image Section */}
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden  group">
                {/* Main Image */}
                <img 
                  src={Background}
                  alt="Phát triển ứng dụng mobile đa nền tảng"
                  className="w-64 md:w-80 h-auto object-cover aspect-square  transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-r from-primary/90 to-accent/90 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <Smartphone className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                  className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-accent/90 to-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <Palette className="w-8 h-8 text-white" />
                </motion.div>

                {/* Brand Badge */}
                <div className="absolute top-8 right-8 bg-gradient-to-r from-primary to-accent text-white font-bold py-2 px-6 rounded-full">
                  Hitek Software
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default AppDevelopmentServices;
