import { motion } from 'framer-motion';
import { CheckCircle, Cloud, Expand, Target, DollarSign } from 'lucide-react';
import ImgMig from '@/assets/Services/migrate1.png'

const CloudMigrationSection = () => {
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
    hidden: { scale: 0.9, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const benefits = [
    {
      icon: Expand,
      title: "Mở rộng dễ dàng và nhanh chóng",
      description: "Đáp ứng nhu cầu lưu trữ của toàn bộ hệ thống công ty"
    },
    {
      icon: Target,
      title: "Dễ dàng tiếp cận thị trường",
      description: "Tăng cường khả năng cạnh tranh và mở rộng thị trường"
    },
    {
      icon: DollarSign,
      title: "Tiết kiệm chi phí tối đa",
      description: "Điều không doanh nghiệp nào có thể không lưu tâm đến"
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
              <Cloud className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">CHUYỂN ĐỔI SỐ</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Mở rộng dễ dàng - Tiếp cận nhanh hơn - Tiết kiệm chi phí
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-4">
                là những gì mà chúng tôi nói đến Dịch vụ Cloud Migration
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-16 lg:mb-24"
          >
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
                Trong thời đại 4.0 hiện nay, nếu doanh nghiệp bạn chưa biết đến Cloud Migration sẽ bị coi là một sự tụt hậu trầm trọng khi trên thế giới hầu như doanh nghiệp nào cũng sử dụng dịch vụ này. Hãy chủ động hơn trên con đường kinh doanh của mình bằng cách cập nhật và sử dụng các công nghệ mới nhất, thuận tiện và mang lại lợi ích tốt nhất cho bạn và doanh nghiệp của bạn.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-foreground font-medium text-lg">
                  Cloud Migration sẽ chuyển các dữ liệu, ứng dụng hay các yếu tố cần thiết khác cho việc vận hành doanh nghiệp lên trên các "đám mây" hay còn được gọi là Cloud. Việc này sẽ giải quyết được rất nhiều vấn đề cho doanh nghiệp của bạn:
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Benefits List */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-card border border-border rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                {/* Main Image */}
                <img 
                  src={ImgMig}
                  alt="Cloud Migration Services - Dịch vụ chuyển đổi lên đám mây"
                  className="w-full h-auto object-cover aspect-square transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-tech-dark/30 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <motion.div
                  animate={floatAnimation}
                  className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-r from-primary/90 to-accent/90 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <Cloud className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div
                  animate={floatAnimation}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-accent/90 to-primary/90 rounded-xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <Expand className="w-8 h-8 text-white" />
                </motion.div>

                {/* Brand Badge */}
                <div className="absolute bottom-8 left-8 bg-gradient-to-r from-primary to-accent text-white font-bold py-2 px-6 rounded-full shadow-lg">
                  Cloud Expert
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

export default CloudMigrationSection;
