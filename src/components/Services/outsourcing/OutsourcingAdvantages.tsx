import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  Clock, 
  Target, 
  RefreshCw, 
  Users,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const OutsourcingAdvantages = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "TIẾT KIỆM CHI PHÍ",
      icon: DollarSign,
      color: "from-green-500/10 to-green-600/10",
      textColor: "text-green-600",
      borderColor: "border-green-600/30",
      content: "Lợi thế rõ ràng nhất của phát triển thuê ngoài là giảm chi phí, điều này thường được nhấn mạnh trong phần lớn các bài báo về vấn đề này. Việc thúc đẩy tăng trưởng của công ty có thể đạt được thông qua việc giảm chi phí. Việc chọn nhà phát triển phần mềm rẻ nhất có thể không nhất thiết dẫn đến các dịch vụ phức tạp hơn, do đó, điều quan trọng là phải đạt được sự cân bằng giữa hiệu quả chi phí và chất lượng."
    },
    {
      id: 1,
      title: "TIẾT KIỆM THỜI GIAN",
      icon: Clock,
      color: "from-blue-500/10 to-blue-600/10",
      textColor: "text-blue-600",
      borderColor: "border-blue-600/30",
      content: "Khi thuê ngoài dịch vụ IT, bạn có thể dễ dàng tránh được việc mất thời gian và chi phí cho việc tuyển dụng và đào tạo nhân viên."
    },
    {
      id: 2,
      title: "TẬP TRUNG VÀO GIÁ TRỊ CỐT LÕI",
      icon: Target,
      color: "from-purple-500/10 to-purple-600/10",
      textColor: "text-purple-600",
      borderColor: "border-purple-600/30",
      content: "Việc thuê ngoài những mảng không phải trọng tâm, hay những dự án ngắn hạn giúp công ty bạn có thể tập trung nhân lực và chi phí vào những hoạt động chính của công ty mình, tránh lãng phí."
    },
    {
      id: 3,
      title: "TĂNG TÍNH LINH HOẠT",
      icon: RefreshCw,
      color: "from-orange-500/10 to-orange-600/10",
      textColor: "text-orange-600",
      borderColor: "border-orange-600/30",
      content: "Tính linh hoạt là một lợi thế khác của gia công phần mềm. Việc sử dụng dịch vụ outsourcing giúp bạn linh hoạt trong việc sắp xếp chỗ ngồi cho nhân viên, tránh được việc thừa thiếu nhân viên trong những dự án ngắn hạn. Nhân sự tạm thời sẽ được cung cấp khi các doanh nghiệp cần. Ví dụ, các nhân viên và các chuyên viên kỹ thuật tạm thời sẽ được bổ sung để hỗ trợ các dự án mới hoặc để phục vụ cho một đơn hàng đột xuất trong một thời điểm cụ thể của năm."
    },
    {
      id: 4,
      title: "TIẾP CẬN NGUỒN NHÂN TÀI LỚN",
      icon: Users,
      color: "from-red-500/10 to-red-600/10",
      textColor: "text-red-600",
      borderColor: "border-red-600/30",
      content: "Các công ty kỹ thuật phần mềm có thể là nguồn cung cấp nhân tài mới cho các doanh nghiệp muốn thuê ngoài một số hoặc tất cả các nhu cầu phát triển phần mềm của họ. Với khả năng tiếp cận nhiều nhà phát triển phần mềm có năng lực cao từ khắp nơi trên thế giới, bạn có thể xúc tiến toàn bộ thiết kế, tích hợp và thực hiện các dự án mới và có một thời gian dễ dàng hơn."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: {
        duration: 0.3
      }
    }
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">LỢI THẾ VƯỢT TRỘI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ưu điểm của dịch vụ
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Outsourcing theo dự án
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
            {/* Navigation Tabs */}
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              const Icon = tab.icon;
              
              return (
                <motion.button
                  key={tab.id}
                  variants={itemVariants}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex flex-col items-center justify-center
                    p-6 rounded-2xl
                    transition-all duration-300
                    ${isActive 
                      ? `bg-gradient-to-br ${tab.color} border-2 ${tab.borderColor} shadow-xl` 
                      : 'bg-card border border-border hover:border-primary/30 hover:shadow-lg'
                    }
                  `}
                >
                  {/* Icon Container */}
                  <div className={`
                    p-4 rounded-xl mb-4
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-white shadow-lg' 
                      : `bg-gradient-to-r ${tab.color}`
                    }
                  `}>
                    <Icon className={`w-8 h-8 ${tab.textColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`
                    text-lg font-bold text-center
                    transition-colors duration-300
                    ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                  `}>
                    {tab.title}
                  </h3>
                  
                  {/* Active Indicator */}
                  <div className={`
                    mt-4 w-12 h-1 rounded-full
                    transition-all duration-300
                    ${isActive 
                      ? `bg-gradient-to-r ${tab.color.replace('/10', '')}` 
                      : 'bg-transparent'
                    }
                  `} />
                </motion.button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="min-h-[400px] relative">
            <AnimatePresence mode="wait">
              {tabs.map((tab, index) => {
                if (activeTab === index) {
                  const Icon = tab.icon;
                  
                  return (
                    <motion.div
                      key={tab.id}
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-xl">
                        <div className="flex items-start gap-6 mb-8">
                          <div className={`p-4 bg-gradient-to-r ${tab.color} rounded-2xl`}>
                            <Icon className={`w-10 h-10 ${tab.textColor}`} />
                          </div>
                          <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                              {tab.title}
                            </h2>
                            <div className="flex items-center gap-4">
                              <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${tab.color.replace('/10', '')}`} />
                              <span className="text-muted-foreground text-sm">
                                Lợi thế số {index + 1}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            {tab.content}
                          </p>
                          
                          {/* Additional Info */}
                          <div className="mt-8 pt-8 border-t border-border">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-foreground font-medium">
                                  Hitek Software - Đối tác Outsourcing hàng đầu
                                </span>
                              </div>
                              <ChevronRight className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Background Decoration */}
                      <div className={`absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-r ${tab.color.replace('/10', '/20')} rounded-full mix-blend-multiply filter blur-3xl opacity-20`} />
                      <div className={`absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-r ${tab.color.replace('/10', '/10')} rounded-full mix-blend-multiply filter blur-2xl opacity-10`} />
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeTab === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                  }
                `}
                aria-label={`Chuyển đến tab ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutsourcingAdvantages;
