import { motion } from 'framer-motion';
import { Cloud, ClipboardCheck, DollarSign, Server, Shield, Rocket } from 'lucide-react';

const CloudMigrationProcess = () => {
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

  const processSteps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Lập kế hoạch",
      description: "Việc đầu tiên sau khi nhận được yêu cầu từ khách hàng sẽ là phân tích và lập kế hoạch chi tiết về yêu cầu kinh doanh từ khách hàng. Đội ngũ Lập trình viên của Hitek sẽ tiến hành phân tích để nắm bắt và tìm hiểu hiện trạng dữ liệu kiến trúc doanh nghiệp. Phân tích kiến trúc hiện tại, hiểu nhu cầu kinh doanh và ưu tiên ứng dụng chuyển đổi.",
      additional: "Sau khi phân tích kỹ càng, chúng tôi sẽ lên kế hoạch bao gồm cả đánh giá chi phí, và chi phí này sẽ dựa trên các yếu tố chủ quan và khách quan mà chúng tôi đã phân tích trước đó.",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/finalizing-ideas-predict-and-analyze-feasibility-768x491.png",
      color: "blue"
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Xác định chi phí",
      description: "Xác định chi phí di chuyển và làm việc 'trên đám mây' để cân đối chính xác hơn với nguồn tài nguyên của công ty bạn. Bên cạnh đó, còn xác định tổng chi phí sở hữu giữa môi trường hiện tại của bạn và môi trường đám mây mới.",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/acceptance-testing-product-quality-measurement-768x688.png",
      color: "green"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Thực hiện quá trình di chuyển lên đám mây",
      description: "Quá trình này sẽ dễ làm gián đoạn mọi hoạt động làm việc của công ty nếu như đơn vị cung cấp không có nhiều kinh nghiệm. Nhưng ở Hitek, chúng tôi tin rằng điều này sẽ rất khó có thể xảy ra sơ suất từ việc gián đoạn hoạt động đến duy trì mã và cơ sở hạ tầng cho cả hai môi trường hay bất kì lỗi gì khác với đội ngũ dày dặn kinh nghiệm nhiều năm trong nghề như chúng tôi.",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/TRAINING-TRANSFERRING-NEW-TECHNOLOGY.png",
      color: "purple"
    },
    {
      number: "04",
      icon: Shield,
      title: "Duy trì quá trình lưu trữ các ứng dụng trên đám mây",
      description: "Tính bảo mật khi duy trì ứng dụng trên đám mây là điều mà chúng tôi luôn tự tin, và dĩ nhiên nó đã được chứng minh khi chúng tôi là một trong những công ty hoàn thành ISO 27001 - tiêu chuẩn quốc tế cung cấp các yêu cầu cho Hệ thống quản lý an toàn thông tin (ISMS), một cách xuất sắc nhất. Và để đảm bảo quá trình hoạt động liên tục, chúng tôi sẽ luôn cập nhật các phiên bản mới của dịch vụ.",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/designing-product-structure.png",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: { bg: "from-blue-500/10 to-blue-600/10", text: "text-blue-600", border: "border-blue-600/30" },
    green: { bg: "from-green-500/10 to-green-600/10", text: "text-green-600", border: "border-green-600/30" },
    purple: { bg: "from-purple-500/10 to-purple-600/10", text: "text-purple-600", border: "border-purple-600/30" },
    orange: { bg: "from-orange-500/10 to-orange-600/10", text: "text-orange-600", border: "border-orange-600/30" }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
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
              CÁCH CHÚNG TÔI TRIỂN KHAI
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DỊCH VỤ CLOUD MIGRATION
              </span>
            </h1>

            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <p className="text-xl text-muted-foreground leading-relaxed text-center">
                  Sau khi nhận được ý tưởng, yêu cầu từ khách hàng và tiến hành tư vấn Cloud Migration phù hợp, Hitek sẽ thực hiện các bước sau:
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-24 lg:space-y-32">
            {processSteps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2 space-y-8">
                    <div className="space-y-6">
                      {/* Step Header */}
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${colors.bg} rounded-xl`}>
                          <step.icon className="w-8 h-8 ${colors.text}" />
                        </div>
                        <div>
                          <div className="text-6xl font-bold text-primary mb-2">{step.number}</div>
                          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            {step.title}
                          </h2>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-6 text-lg text-muted-foreground">
                        <p className="leading-relaxed">
                          {step.description}
                        </p>
                        
                        {step.additional && (
                          <div className={`bg-gradient-to-r ${colors.bg} border-l-4 ${colors.border} p-6 rounded-r-lg`}>
                            <p className="text-foreground font-medium">
                              {step.additional}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent/50 rounded-full" />
                      <span className="text-sm text-muted-foreground">Bước {parseInt(step.number)}</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative rounded-3xl overflow-hidden group">
                      <img 
                        src={step.imageUrl}
                        alt={step.title}
                        className="w-84 md:w-124 h-auto object-cover aspect-[4/3] transition-transform duration-700"
                      />
                    </div>

                    {/* Background Decoration */}
                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-48 h-48 bg-gradient-to-r ${colors.bg.replace('/10', '/20').replace(' ', '')} rounded-full mix-blend-multiply filter blur-3xl opacity-30`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudMigrationProcess;
