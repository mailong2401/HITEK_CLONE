import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Briefcase, Cpu, Target, Globe, Users } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";


const SustainableDevelopmentGoals: React.FC = () => {
  const { t } = useLanguage();
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
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  const goalsItems = [
  { icon: Book, color: "from-red-500 to-pink-500", bgColor: "bg-red-50 dark:bg-red-900/20" },
  { icon: Briefcase, color: "from-green-500 to-emerald-500", bgColor: "bg-green-50 dark:bg-green-900/20" },
  { icon: Cpu, color: "from-orange-500 to-amber-500", bgColor: "bg-orange-50 dark:bg-orange-900/20" }
];

const goalsData = goalsItems.map((item, idx) => ({
  number: (idx + 1).toString(),
  icon: item.icon,
  title: t(`about.us.sdg.goals.${idx}.title`),
  description: t(`about.us.sdg.goals.${idx}.description`),
  hitekAction: t(`about.us.sdg.goals.${idx}.hitekAction`),
  color: item.color,
  bgColor: item.bgColor
}));

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-500 rounded-full"
              />
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t("about.us.sdg.header.title")}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            {t(`about.us.sdg.header.paragraphs.${0}`)}
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            {t(`about.us.sdg.header.paragraphs.${1}`)}
          </motion.p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white mb-16 shadow-2xl"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            {t("about.us.sdg.vision.title")}
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed"
          >
            {t("about.us.sdg.vision.description")}
          </motion.p>
        </motion.div>

        {/* SDG Goals Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {goalsData.map((goal, index) => {
            const Icon = goal.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`relative rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 ${goal.bgColor}`}
              >
                {/* Number Badge */}
                <motion.div 
                  variants={numberVariants}
                  className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-2xl font-bold text-white">{goal.number}</span>
                </motion.div>

                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: index * 0.2 + 0.5 
                  }}
                  className={`w-12 h-12 bg-gradient-to-br ${goal.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  variants={itemVariants}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  {goal.title}
                </motion.h3>

                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                >
                  {goal.description}
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Hitek Software:</span> {goal.hitekAction}
                    </p>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${goal.color} rounded-full`}
                />
                <motion.div
                  animate={{ 
                    y: [0, 5, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5 + 0.5
                  }}
                  className={`absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br ${goal.color} rounded-full`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Impact */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <Globe className="w-12 h-12 text-blue-500" />
          </motion.div>
          
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t("about.us.sdg.globalImpact.title")}
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t("about.us.sdg.globalImpact.description")}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SustainableDevelopmentGoals;
