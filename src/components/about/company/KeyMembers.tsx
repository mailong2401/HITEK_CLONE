import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyMembers = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [direction, setDirection] = useState(0);

  // Sử dụng trực tiếp translation keys
  const members = [
    {
      name: t('about.company.keyMembers.members.0.name'),
      position: t('about.company.keyMembers.members.0.position'),
      image: "https://hitek.com.vn/wp-content/uploads/2022/09/sean-1.png",
      achievements: [
        { type: "highlight", text: t('about.company.keyMembers.members.0.achievements.0.text') },
        { type: "highlight", text: t('about.company.keyMembers.members.0.achievements.1.text') },
        { type: "normal", text: t('about.company.keyMembers.members.0.achievements.2.text') },
        { type: "normal", text: t('about.company.keyMembers.members.0.achievements.3.text') },
        { type: "normal", text: t('about.company.keyMembers.members.0.achievements.4.text') }
      ]
    },
    {
      name: t('about.company.keyMembers.members.1.name'),
      position: t('about.company.keyMembers.members.1.position'),
      image: "https://hitek.com.vn/wp-content/uploads/2022/11/Le-Quoc-Vu.png",
      achievements: [
        { type: "highlight", text: t('about.company.keyMembers.members.1.achievements.0.text') },
        { type: "highlight", text: t('about.company.keyMembers.members.1.achievements.1.text') },
        { type: "normal", text: t('about.company.keyMembers.members.1.achievements.2.text') },
        { type: "award", text: t('about.company.keyMembers.members.1.achievements.3.text') },
        { type: "award", text: t('about.company.keyMembers.members.1.achievements.4.text') },
        { type: "award", text: t('about.company.keyMembers.members.1.achievements.5.text') },
        { type: "normal", text: t('about.company.keyMembers.members.1.achievements.6.text') }
      ]
    },
    {
      name: t('about.company.keyMembers.members.2.name'),
      position: t('about.company.keyMembers.members.2.position'),
      image: "https://hitek.com.vn/wp-content/uploads/2022/09/Sep-Long-768x816.png",
      achievements: [
        { type: "normal", text: t('about.company.keyMembers.members.2.achievements.0.text') },
        { type: "normal", text: t('about.company.keyMembers.members.2.achievements.1.text') },
        { type: "normal", text: t('about.company.keyMembers.members.2.achievements.2.text') },
        { type: "normal", text: t('about.company.keyMembers.members.2.achievements.3.text') },
        { type: "normal", text: t('about.company.keyMembers.members.2.achievements.4.text') }
      ]
    }
  ];

  // Stats data với translation
  const stats = [
    { 
      icon: Users, 
      color: "blue", 
      value: t('about.company.keyMembers.stats.0.value'), 
      label: t('about.company.keyMembers.stats.0.label') 
    },
    { 
      icon: Globe, 
      color: "purple", 
      value: t('about.company.keyMembers.stats.1.value'), 
      label: t('about.company.keyMembers.stats.1.label') 
    },
    { 
      icon: Award, 
      color: "green", 
      value: t('about.company.keyMembers.stats.2.value'), 
      label: t('about.company.keyMembers.stats.2.label') 
    }
  ];

  // Additional info với translation
  const additionalInfo = [
    { color: "green", text: t('about.company.keyMembers.additionalInfo.0.text') },
    { color: "blue", text: t('about.company.keyMembers.additionalInfo.1.text') },
    { color: "purple", text: t('about.company.keyMembers.additionalInfo.2.text') }
  ];

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

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -80 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextMember = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevMember = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  // Auto scroll chỉ khi section trong view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      nextMember();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  // Kích hoạt animation khi section vào view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "highlight":
        return "";
      case "award":
        return "";
      default:
        return "";
    }
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case "highlight":
        return "border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20";
      case "award":
        return "border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20";
      default:
        return "border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-900";
    }
  };

  // Component cho màu sắc động
  const StatIcon = ({ icon: Icon, color }: { icon: any, color: string }) => {
    const colorClasses = {
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400", 
      green: "text-green-600 dark:text-green-400"
    };

    return <Icon className={`h-6 w-6 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} mx-auto mb-2`} />;
  };

  const StatBackground = ({ color }: { color: string }) => {
    const colorClasses = {
      blue: "bg-blue-50 dark:bg-blue-900/20",
      purple: "bg-purple-50 dark:bg-purple-900/20",
      green: "bg-green-50 dark:bg-green-900/20"
    };

    return colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  };

  const DotColor = ({ color }: { color: string }) => {
    const colorClasses = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500"
    };

    return colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  };

  const currentMember = members[currentIndex];

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section với hiệu ứng xuất hiện */}
        <div className="flex items-start mb-16">
          {/* Số phần với gạch chân */}
          <motion.div 
            variants={slideInLeft}
            className="relative flex-shrink-0 mr-8"
          >
            <div className="text-6xl font-bold text-gray-900 dark:text-white pb-4 border-b-4 border-blue-500 relative">
              {t("about.company.keyMembers.sectionNumber")}
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Nội dung tiêu đề */}
          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t("about.company.keyMembers.title")}
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("about.company.keyMembers.description")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={prevMember}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.9 }}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
          </motion.button>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={nextMember}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.9 }}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
          </motion.button>

          {/* Main Content Card với AnimatePresence */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                {/* Header với gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                      >
                        {currentMember.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-blue-100 text-lg"
                      >
                        {currentMember.position}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Content - Ảnh bên trái, thông tin bên phải */}
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Ảnh thành viên - Bên trái */}
                    <div className="lg:w-2/5 flex flex-col">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative group flex-1"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-2xl shadow-2xl transition-transform duration-300 h-full"
                        >
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl h-full">
                            <motion.img 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                              src={currentMember.image} 
                              alt={currentMember.name}
                              className="w-full h-full max-h-[500px] object-cover rounded-lg shadow-lg"
                              onError={(e) => {
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3EẢnh thành viên%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Thông tin nhanh */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-6 grid grid-cols-3 gap-4 text-center"
                      >
                        {stats.map((stat, index) => (
                          <motion.div 
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`${StatBackground({ color: stat.color })} rounded-lg p-4`}
                          >
                            <StatIcon icon={stat.icon} color={stat.color} />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Thông tin thành tích - Bên phải - FULL HEIGHT */}
                    <div className="lg:w-3/5 flex flex-col">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-4 flex-1"
                      >
                        {currentMember.achievements.map((achievement, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className={`p-4 rounded-lg ${getAchievementColor(achievement.type)} transition-all duration-300 hover:shadow-md`}
                          >
                            <div className="flex items-start space-x-3">
                              <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                                className="text-lg mt-0.5 flex-shrink-0"
                              >
                                {getAchievementIcon(achievement.type)}
                              </motion.span>
                              <p className={`leading-relaxed ${
                                achievement.type === "highlight" 
                                  ? "font-semibold text-gray-900 dark:text-white" 
                                  : achievement.type === "award"
                                  ? "text-yellow-700 dark:text-yellow-400"
                                  : "text-gray-700 dark:text-gray-300"
                              }`}>
                                {achievement.text}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Thông tin bổ sung */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          {additionalInfo.map((item, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <div className={`w-2 h-2 ${DotColor({ color: item.color })} rounded-full`}></div>
                              <span>{item.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll indicator dots */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex justify-center mt-12 space-x-3"
        >
          {members.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`
                rounded-full transition-all duration-500 ease-out
                ${index === currentIndex 
                  ? 'bg-blue-600 scale-125 w-8 h-3' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 w-3 h-3'
                }
              `}
            />
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200 dark:border-gray-700">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 2.2 + i * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className={`w-3 h-3 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'} rounded-full`}
              />
            ))}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="text-gray-600 dark:text-gray-400 text-sm font-medium"
            >
              {t("about.company.keyMembers.footerText")}
            </motion.span>
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 2.7 + i * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className={`w-3 h-3 ${i % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'} rounded-full`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyMembers;
