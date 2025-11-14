import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Globe, Target, Rocket, Star } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8
    }
  }
};

const timelineItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const AboutHitek: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineData = [
    {
      year: "2018",
      icon: Users,
      title: "Thành lập Hitek",
      description: "Hitek được thành lập chỉ với 5 kỹ sư phần mềm, làm việc tự do, tập trung vào phát triển web và ứng dụng di động cho thị trường Việt Nam.",
      stats: "5 kỹ sư",
      color: "from-blue-500 to-cyan-500",
      badgeColor: "bg-blue-500"
    },
    {
      year: "2019",
      icon: Globe,
      title: "Bước ra thế giới",
      description: "Lần đầu nhận được hợp đồng gia công phần mềm cho thị trường Hàn Quốc, Hitek đã thay đổi chiến lược kinh doanh mở rộng sang thị trường nước ngoài.",
      stats: "Thị trường Hàn Quốc",
      color: "from-green-500 to-emerald-500",
      badgeColor: "bg-green-500"
    },
    {
      year: "2020 - 2021",
      icon: Target,
      title: "Chuyên sâu Hàn Quốc",
      description: "Chúng tôi tiếp tục phát triển công nghệ tại Hàn Quốc. Gần 90% các dự án đến từ thị trường này.",
      stats: "90% dự án từ Hàn Quốc",
      color: "from-purple-500 to-pink-500",
      badgeColor: "bg-purple-500"
    },
    {
      year: "2022 - Nay",
      icon: Rocket,
      title: "Toàn cầu hóa",
      description: "Hitek cung cấp các dịch vụ gia công phần mềm và cung cấp phần mềm cho các khách hàng đến từ Mỹ, Canada, Đức, Hàn, Úc, Nhật.",
      stats: "6+ quốc gia",
      color: "from-orange-500 to-red-500",
      badgeColor: "bg-orange-500"
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-8 pt-20"
    >
      {/* Nội dung chính - căn giữa */}
      <motion.div 
        variants={itemVariants}
        className="w-full text-center"
      >
        {/* Giới thiệu chính */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border shadow-lg mb-16 hover:shadow-xl transition-all duration-300 mx-auto max-w-4xl"
        >
          <div className="flex flex-col items-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-bold text-primary mb-6 font-heading"
            >
              Từ Khởi Nghiệp Đến Toàn Cầu
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-foreground leading-relaxed text-lg mb-6 max-w-3xl"
            >
              Hitek được thành lập từ năm 2018, một chặng đường đủ dài để chúng tôi có thể khẳng định vị thế của mình ở thị trường công nghệ hiện tại.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-foreground leading-relaxed text-lg font-semibold max-w-3xl mb-8"
            >
              Mục tiêu ở tương lai Hitek không chỉ là một công ty phát triển phần mềm tốt nhất tại Việt Nam, mà còn là một công ty phần mềm hàng đầu Thế giới!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="w-40 h-40 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
                        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3"
                      >
                        <Star className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="font-bold text-primary text-lg"
                      >
                        Since 2018
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity
                  }}
                  className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Section - ĐÃ SỬA: Layout 3 cột chuẩn */}
        <motion.div 
          ref={timelineRef}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          variants={timelineVariants}
          className="relative mx-auto max-w-6xl"
        >
          {/* Timeline line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full z-0"
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
                  className="relative flex items-center w-full"
                >
                  {/* Cột trái - 5/12 */}
                  <div className="w-5/12 pr-8">
                    {isEven && (
                      <Card 
                        item={item} 
                        index={index} 
                        timelineInView={timelineInView} 
                        alignment="left"
                      />
                    )}
                  </div>

                  {/* Cột giữa - 2/12 với dot */}
                  <div className="w-2/12 flex justify-center relative z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: 0.8 + index * 0.2 
                      }}
                      className={`w-6 h-6 ${item.badgeColor} rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300`}

                    />
                  </div>

                  {/* Cột phải - 5/12 */}
                  <div className="w-5/12 pl-8">
                    {!isEven && (
                      <Card 
                        item={item} 
                        index={index} 
                        timelineInView={timelineInView} 
                        alignment="right"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Khẩu hiệu cuối */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 mx-auto max-w-4xl"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-2xl font-bold text-primary mb-4 font-heading"
            >
              Sứ Mệnh Tiếp Theo
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="text-lg text-foreground leading-relaxed"
            >
              Tiếp tục mở rộng sang các thị trường mới, đẩy mạnh nghiên cứu AI và công nghệ tiên tiến, 
              không ngừng nâng cao chất lượng dịch vụ để trở thành đối tác công nghệ đáng tin cậy trên toàn cầu.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Card component cho mỗi mốc thời gian
const Card = ({ item, index, timelineInView, alignment }: { item: any, index: number, timelineInView: boolean, alignment: 'left' | 'right' }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
      className={`bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${alignment === 'right' ? 'text-right' : 'text-left'}`}
    >
      <div className={`flex ${alignment === 'right' ? 'flex-row-reverse' : 'flex-row'} items-start justify-between mb-4`}>
        <div className={`flex ${alignment === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center space-x-3`}>
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={timelineInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              delay: 1.0 + index * 0.2 
            }}
            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <div className={alignment === 'right' ? 'text-right' : 'text-left'}>
            <motion.h3 
              initial={{ opacity: 0, x: alignment === 'right' ? 20 : -20 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: alignment === 'right' ? 20 : -20 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
              className="text-xl font-bold text-foreground"
            >
              {item.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
              className="text-primary font-semibold text-lg"
            >
              {item.year}
            </motion.p>
          </div>
        </div>
        
        {/* Stats badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={timelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold border border-primary/20"
        >
          {item.stats}
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
        className="text-muted-foreground leading-relaxed"
      >
        {item.description}
      </motion.p>

      {/* Progress dots */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 2.0 + index * 0.2 }}
        className={`flex items-center space-x-1 mt-4 ${alignment === 'right' ? 'justify-end' : 'justify-start'}`}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              delay: 2.2 + index * 0.2 + i * 0.1 
            }}
            className="w-2 h-2 bg-accent rounded-full"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutHitek;
