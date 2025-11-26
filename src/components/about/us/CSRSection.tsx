import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Scale, Heart, Users } from 'lucide-react';

const CSRSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const csrData = [
    {
      icon: DollarSign,
      title: "Thứ nhất",
      subtitle: "Về kinh tế",
      description: "Bao gồm thỏa mãn nhu cầu xã hội, tăng thêm phúc lợi xã hội, bảo đảm sự tồn tại và phát triển của doanh nghiệp.",
      color: "from-green-500 to-emerald-500",
      image: "https://hitek.com.vn/wp-content/uploads/2023/09/1-2048x1365.jpg"
    },
    {
      icon: Scale,
      title: "Thứ hai",
      subtitle: "Về pháp lý",
      description: "Doanh nghiệp phải thực hiện đầy đủ những quy định về pháp lý đối với các bên liên quan, bao gồm cổ đông, người tiêu dùng, gia đình của người lao động.",
      color: "from-blue-500 to-cyan-500",
      image: "https://hitek.com.vn/wp-content/uploads/2023/09/2-2048x1365.jpg"
    },
    {
      icon: Heart,
      title: "Thứ ba",
      subtitle: "Về đạo đức",
      description: "Là những hành vi và hoạt động mà xã hội mong đợi ở doanh nghiệp, nhưng không được quy định trong hệ thống pháp luật.",
      color: "from-purple-500 to-pink-500",
      image: "https://hitek.com.vn/wp-content/uploads/2023/09/3-2048x1498.jpg"
    },
    {
      icon: Users,
      title: "Thứ tư",
      subtitle: "Về tính nhân văn",
      description: "Doanh nghiệp cần thực hiện những hành vi thể hiện mong muốn đóng góp cho cộng đồng và xã hội.",
      color: "from-orange-500 to-red-500",
      image: "https://hitek.com.vn/wp-content/uploads/2023/09/4-2048x1365.jpg"
    }
  ];

  return (
    <motion.section 
      id="csr"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            HITEK SOFTWARE THỰC HIỆN CSR
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            CSR là từ viết tắt của Corporate Social Responsibility – Trách nhiệm xã hội của doanh nghiệp, đây được xem là một xu hướng phổ biến trên thế giới, trở thành một yêu cầu “mềm” đối với doanh nghiệp. Để thực hiện nghĩa vụ mà một doanh nghiệp và cá nhân liên quan phải thực hiện đối với xã hội nhằm đạt được nhiều nhất những tác động tích cực và giảm tối đa tác động tiêu cực đối với xã hội. Hitek Software đã và đang thực hiện những điều mục sau:
          </motion.p>
        </motion.div>

        {/* CSR Items */}
        <div className="space-y-20">
          {csrData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={containerVariants}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Column */}
                <motion.div 
                  variants={itemVariants}
                  className="lg:w-1/2 space-y-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: index * 0.2 
                      }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        variants={itemVariants}
                        className="text-lg text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        {item.subtitle}
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>

                  {/* Decorative elements */}
                  <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className={`h-1 bg-gradient-to-r ${item.color} rounded-full mt-6`}
                  />
                </motion.div>

                {/* Image Column */}
                <motion.div 
                  variants={imageVariants}
                  className="lg:w-1/2 relative"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    {/* Real image from URL */}
                    <motion.img 
                      src={item.image}
                      alt={item.subtitle}
                      className="w-full h-80 object-cover rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Gradient overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-overlay`}
                    />
                    
                    {/* Loading fallback */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center ${
                        item.image ? 'hidden' : 'flex'
                      }`}
                    >
                      <Icon className="w-16 h-16 text-gray-400 dark:text-gray-600" />
                    </motion.div>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${item.color} rounded-full opacity-20`}
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      x: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5 + 0.5
                    }}
                    className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br ${item.color} rounded-full opacity-20`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Summary */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Cam kết phát triển bền vững
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Hitek Software không ngừng nỗ lực thực hiện trách nhiệm xã hội trong mọi hoạt động kinh doanh, 
            hướng tới sự phát triển bền vững và đóng góp tích cực cho cộng đồng.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CSRSection;
