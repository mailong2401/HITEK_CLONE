import { motion } from 'framer-motion';
import { 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ChevronRight
} from 'lucide-react';

const DevelopmentProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Phân tích yêu cầu của khách hàng",
      description: "Ở bất kỳ dịch vụ nào, tiêu chí đầu tiên của Hitek Software vẫn luôn phải hiểu rõ dự án. Do đó, chúng tôi sẽ phải bắt đầu bằng việc tiến hành phân tích yêu cầu chung của dự án từ đó chúng tôi có thể đề xuất những giải pháp công nghệ tốt nhất và một kế hoạch tối ưu, chi tiết nhất cho dự án.",
      duration: "1-2 tuần",
      gradient: "from-primary to-primary/80"
    },
    {
      number: "02",
      icon: Palette,
      title: "Thiết kế UI/UX",
      description: "Sau khi đã tìm hiểu kỹ về dự án cũng như doanh nghiệp, chúng tôi sẽ lên một bản thiết kế chi tiết, từ đó tạo ra một bản demo sản phẩm sẽ giúp khách hàng được hình dung rõ hơn về dự án. Giai đoạn này cũng sẽ giúp khách hàng hiểu hơn về trải nghiệm khách hàng để đưa ra những bổ sung hay giảm thiểu cần thiết cho sản phẩm.",
      duration: "2-3 tuần",
      gradient: "from-accent to-accent/80"
    },
    {
      number: "03",
      icon: Code,
      title: "Phát triển phần mềm",
      description: "Giai đoạn này sẽ bao gồm các bước phát triển front-end và back-end. Các lập trình viên của chúng tôi có kinh nghiệm sử dụng tất cả các ngôn ngữ lập trình phổ biến nhất hiện nay và sử dụng công nghệ phù hợp nhất với sản phẩm của khách hàng.",
      duration: "4-8 tuần",
      gradient: "from-primary via-accent to-primary"
    },
    {
      number: "04",
      icon: TestTube,
      title: "Kiểm thử",
      description: "Giai đoạn kiểm thử (QA) đóng một vai trò đặc biệt trong sự thành công của sản phẩm. Vì lý do chúng tôi luôn chú ý thực hiện kiểm tra đảm bảo chất lượng kỹ lưỡng ở mọi giai đoạn phát triển sản phẩm để xác định lỗi, báo cáo lỗi, theo dõi lỗi, sửa chữa và cung cấp chất lượng sản phẩm tốt nhất.",
      duration: "1-2 tuần",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      number: "05",
      icon: Rocket,
      title: "Hoàn thiện sản phẩm và hỗ trợ kỹ thuật",
      description: "Sau khi đã được kiểm tra chất lượng, sản phẩm sẽ được cho ra mắt với các giai đoạn như triển khai phần mềm trên thị trường, tải lên các cửa hàng ứng dụng, và cuối cùng là hỗ trợ kỹ thuật sau khi ra mắt, bảo trì sản phẩm.",
      duration: "Liên tục",
      gradient: "from-accent via-primary to-accent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quy trình phát triển dịch vụ 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              theo yêu cầu của chúng tôi
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giống như các dịch vụ khác, Dịch vụ phát triển phần mềm theo yêu cầu cũng được Hitek Software đề ra một quy trình chặt chẽ bao gồm các giai đoạn cụ thể như sau:
          </p>
        </motion.div>

        {/* Timeline Process */}
        <div className="relative max-w-7xl mx-auto">
          {/* Custom Vertical Timeline Line with dots */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ transformOrigin: 'top' }}
          >
            {/* Main gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary w-full" />
            
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary to-accent opacity-30"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Connection dots for each step */}
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-card shadow-lg"
                style={{
                  top: `${20 + (index * 20)}%`,
                  background: `linear-gradient(135deg, var(--primary), var(--accent))`
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + (index * 0.1),
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              />
            ))}
          </motion.div>
          
          {/* Steps Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Step Number & Icon */}
                  <div className="relative z-10 flex-shrink-0 w-full md:w-1/5">
                    <div className={`relative w-28 h-28 rounded-3xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-2xl group mx-auto md:mx-0`}>
                      {/* Animated background effect */}
                      <div className="absolute inset-0 rounded-3xl bg-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-all duration-300" />
                      
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-xl border-2 border-border">
                        <span className="text-lg font-bold text-card-foreground">{step.number}</span>
                      </div>
                      
                      <Icon className="w-14 h-14 text-primary-foreground relative z-10" />
                      
                      {/* Pulsing animation */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border-2 border-border px-3 py-1.5 rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-card-foreground">{step.duration}</span>
                    </div>
                  </div>

                  {/* Connecting Line (Mobile) */}
                  <div className="absolute left-14 top-28 bottom-0 w-2 bg-gradient-to-b from-border to-transparent md:hidden" />

                  {/* Content Card */}
                  <div className={`flex-1 w-full md:w-4/5 ${isEven ? 'md:pr-0 md:text-left' : 'md:pl-0 md:text-left'} text-center md:text-left`}>
                    <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4 md:mb-6">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {step.description}
                      </p>
                      

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default DevelopmentProcessSection;
