import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  GlobeAltIcon,
  CubeTransparentIcon,
  ChatBubbleLeftRightIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  WalletIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const BlockchainServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const services = [
    {
      id: 1,
      icon: GlobeAltIcon,
      title: 'Dịch Vụ Phát Triển Web3',
      description: 'Các giải pháp end-to-end để tạo điều kiện thuận lợi cho doanh nghiệp tham gia vào web3',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: CubeTransparentIcon,
      title: 'Phát Triển Ứng Dụng Phi Tập Trung (dApp)',
      description: 'Các dịch vụ phát triển dApp end-to-end được hỗ trợ bởi đội ngũ chuyên gia Blockchain chuyên nghiệp',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: ChatBubbleLeftRightIcon,
      title: 'Tư Vấn Ứng Dụng Blockchain',
      description: 'Dịch vụ tư vấn Web3 giúp doanh nghiệp xác định các cơ hội và rủi ro tiềm ẩn khi sử dụng blockchain',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: ShoppingCartIcon,
      title: 'Phát Triển Sàn Giao Dịch NFT',
      description: 'Cung cấp các dịch vụ thị trường và tạo NFT giúp khởi chạy thị trường NFT giàu tính năng',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 5,
      icon: DocumentTextIcon,
      title: 'Phát Triển Hợp Đồng Thông Minh',
      description: 'Dịch vụ phát triển hợp đồng thông minh cho phép doanh nghiệp xây dựng ứng dụng phi tập trung',
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 6,
      icon: CurrencyDollarIcon,
      title: 'Cung Cấp Token',
      description: 'Bao gồm việc tạo và tích hợp token, hỗ trợ toàn diện việc phát triển nền tảng đầu tư',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      id: 7,
      icon: WalletIcon,
      title: 'Phát Triển Ví Điện Tử Crypto',
      description: 'Chuyên phát triển ví tiền điện tử trên web và di động, bao gồm cả ví lưu ký và không lưu ký',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 8,
      icon: ChartBarIcon,
      title: 'Phát Triển Sản Phẩm DeFi',
      description: 'Ứng dụng nền tảng phi tập trung, cho phép tiến hành các hoạt động tài chính không cần cấp phép',
      color: 'from-teal-500 to-green-500',
    },
    {
      id: 9,
      icon: RocketLaunchIcon,
      title: 'Phát Triển IDO, IEO',
      description: 'Các giải pháp end-to-end từ tạo white paper đến phát triển token để khởi chạy token riêng',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const chunks = [];
  for (let i = 0; i < services.length; i += 3) {
    chunks.push(services.slice(i, i + 3));
  }

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[hsl(217,33%,97%)] to-white dark:from-[hsl(217,60%,8%)] dark:to-[hsl(217,33%,12%)] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[hsl(217,91%,60%,0.1)] to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-l from-[hsl(217,91%,60%,0.1)] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(217,33%,12%)] dark:text-white mb-6">
            Ứng Dụng Blockchain
            <span className="block mt-2 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(217,91%,70%)] bg-clip-text text-transparent">
              Cho Doanh Nghiệp Mọi Lĩnh Vực
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[hsl(217,20%,50%)] dark:text-[hsl(217,20%,65%)] max-w-3xl mx-auto leading-relaxed">
            Chúng tôi giúp bạn phát triển công nghệ Blockchain cho doanh nghiệp mọi lĩnh vực, công nghệ này có thể cung cấp cho bạn những hồ sơ giao dịch dễ dàng và an toàn
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-12"
        >
          {chunks.map((chunk, chunkIndex) => (
            <motion.div
              key={chunkIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {chunk.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  animate="animate"
                  onMouseEnter={() => setHoveredIndex(service.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  <motion.div
                    variants={cardVariants}
                    className="relative bg-white dark:bg-[hsl(217,33%,12%)] rounded-2xl p-8 h-full border border-[hsl(217,33%,88%)] dark:border-[hsl(217,33%,20%)] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Card background gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${service.color} transition-opacity duration-300`} />

                    {/* Icon container */}
                    <motion.div
                      variants={iconVariants}
                      className="relative mb-6 inline-flex"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl rounded-2xl`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Animated ring */}
                      <motion.div
                        animate={{
                          scale: hoveredIndex === service.id ? [1, 1.2, 1] : 1,
                          opacity: hoveredIndex === service.id ? [0.5, 0.8, 0.5] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute inset-0 rounded-2xl border-2 border-transparent border-t-gradient-to-r ${service.color} border-b-gradient-to-r ${service.color}`}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-[hsl(217,33%,12%)] dark:text-white mb-4 group-hover:text-[hsl(217,91%,60%)] dark:group-hover:text-[hsl(217,91%,60%)] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[hsl(217,20%,50%)] dark:text-[hsl(217,20%,65%)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom gradient line */}
                    <motion.div
                      animate={{
                        width: hoveredIndex === service.id ? '100%' : '0%',
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                    />
                  </motion.div>

                  {/* Floating particles effect */}
                  {hoveredIndex === service.id && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -20],
                            x: Math.sin(i * 120) * 10,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                          }}
                          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                          style={{
                            top: `${Math.random() * 60 + 20}%`,
                            left: `${Math.random() * 80 + 10}%`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <button className="relative px-8 py-4 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(217,91%,70%)] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[hsl(217,91%,60%,0.3)] transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Khám Phá Tất Cả Dịch Vụ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(217,91%,70%)] to-[hsl(217,91%,60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0.5,
              }}
              className="absolute top-0 left-0 w-16 h-full bg-white/20 skew-x-12"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockchainServices;
