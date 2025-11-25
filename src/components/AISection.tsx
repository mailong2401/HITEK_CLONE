import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aiTechImage from "@/assets/banner-ai-section.gif";
import { 
  Sparkles, Brain, Zap, Target, MessageCircle, Cpu, 
  GitBranch, Code2, TestTube, Ship, Activity, Cloud,
  Layout, Mic, Bug, Monitor, Globe,
  BarChart, Gauge, MessageSquare, Database, Figma
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

// Animation variants được tối ưu từ các component trước
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      ease: "easeOut" as const
    }
  }
};

const slideInUp = {
  hidden: { 
    opacity: 0, 
    y: 80 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

const toolItemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const titleGradientVariants = {
  hidden: { 
    opacity: 0,
    backgroundPosition: "0% 50%"
  },
  visible: {
    opacity: 1,
    backgroundPosition: "100% 50%",
    transition: {
      opacity: { duration: 1, delay: 0.3 },
      backgroundPosition: { 
        duration: 3, 
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

// Animated Components với framer-motion
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideInUp}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const AISection = () => {
  const { t } = useLanguage();


  const aiSteps = [
  {
    step: t(`home.aiSection.steps.${0}.step`),
    title: t(`home.aiSection.steps.${0}.title`),
    description: t(`home.aiSection.steps.${0}.description`),
    icon: Brain,
    aiTools: [
      { name: t(`home.aiSection.steps.${0}.tools.${0}`), icon: MessageCircle, color: "text-green-500" },
      { name: t(`home.aiSection.steps.${0}.tools.${1}`), icon: Brain, color: "text-blue-500" },
      { name: t(`home.aiSection.steps.${0}.tools.${2}`), icon: Mic, color: "text-purple-500" }
    ],
    features: [
      t(`home.aiSection.steps.${0}.features.${0}`),
      t(`home.aiSection.steps.${0}.features.${1}`),
      t(`home.aiSection.steps.${0}.features.${2}`),
    ]
  },
  {
    step: t(`home.aiSection.steps.${1}.step`),
    title: t(`home.aiSection.steps.${1}.title`),
    description: t(`home.aiSection.steps.${1}.description`),
    icon: Target,
    aiTools: [
      { name: t(`home.aiSection.steps.${1}.tools.${0}`), icon: Brain, color: "text-blue-500" },
      { name: t(`home.aiSection.steps.${1}.tools.${1}`), icon: MessageCircle, color: "text-green-500" },
      { name: t(`home.aiSection.steps.${1}.tools.${2}`), icon: Layout, color: "text-orange-500" },
      { name: t(`home.aiSection.steps.${1}.tools.${3}`), icon: Figma, color: "text-pink-500" },
      { name: t(`home.aiSection.steps.${1}.tools.${4}`), icon: Database, color: "text-red-500" }
    ],
    features: [
      t(`home.aiSection.steps.${1}.features.${0}`),
      t(`home.aiSection.steps.${1}.features.${1}`),
      t(`home.aiSection.steps.${1}.features.${2}`),
    ]
  },
  {
    step: t(`home.aiSection.steps.${2}.step`),
    title: t(`home.aiSection.steps.${2}.title`),
    description: t(`home.aiSection.steps.${2}.description`),
    icon: Code2,
    aiTools: [
      { name: t(`home.aiSection.steps.${2}.tools.${0}`), icon: GitBranch, color: "text-purple-500" },
      { name: t(`home.aiSection.steps.${2}.tools.${1}`), icon: Code2, color: "text-blue-400" },
      { name: t(`home.aiSection.steps.${2}.tools.${2}`), icon: Zap, color: "text-yellow-500" },
      { name: t(`home.aiSection.steps.${2}.tools.${3}`), icon: Activity, color: "text-green-400" }
    ],
    features: [
      t(`home.aiSection.steps.${2}.features.${0}`),
      t(`home.aiSection.steps.${2}.features.${1}`),
      t(`home.aiSection.steps.${2}.features.${2}`),
    ]
  },
  {
    step: t(`home.aiSection.steps.${3}.step`),
    title: t(`home.aiSection.steps.${3}.title`),
    description: t(`home.aiSection.steps.${3}.description`),
    icon: TestTube,
    aiTools: [
      { name: t(`home.aiSection.steps.${3}.tools.${0}`), icon: TestTube, color: "text-blue-500" },
      { name: t(`home.aiSection.steps.${3}.tools.${1}`), icon: Bug, color: "text-red-500" },
      { name: t(`home.aiSection.steps.${3}.tools.${2}`), icon: Monitor, color: "text-green-600" },
      { name: t(`home.aiSection.steps.${3}.tools.${3}`), icon: Globe, color: "text-orange-500" },
      { name: t(`home.aiSection.steps.${3}.tools.${4}`), icon: MessageCircle, color: "text-green-500" }
    ],
    features: [
      t(`home.aiSection.steps.${3}.features.${0}`),
      t(`home.aiSection.steps.${3}.features.${1}`),
      t(`home.aiSection.steps.${3}.features.${2}`),
    ]
  },
  {
    step: t(`home.aiSection.steps.${4}.step`),
    title: t(`home.aiSection.steps.${4}.title`),
    description: t(`home.aiSection.steps.${4}.description`),
    icon: Ship,
    aiTools: [
      { name: t(`home.aiSection.steps.${4}.tools.${0}`), icon: Ship, color: "text-blue-500" },
      { name: t(`home.aiSection.steps.${4}.tools.${1}`), icon: Cloud, color: "text-red-500" },
      { name: t(`home.aiSection.steps.${4}.tools.${2}`), icon: Activity, color: "text-green-500" },
      { name: t(`home.aiSection.steps.${4}.tools.${3}`), icon: Cloud, color: "text-orange-500" }
    ],
    features: [
      t(`home.aiSection.steps.${4}.features.${0}`),
      t(`home.aiSection.steps.${4}.features.${1}`),
      t(`home.aiSection.steps.${4}.features.${2}`),
    ]
  },
  {
    step: t(`home.aiSection.steps.${5}.step`),
    title: t(`home.aiSection.steps.${5}.title`),
    description: t(`home.aiSection.steps.${5}.description`),
    icon: Activity,
    aiTools: [
      { name: t(`home.aiSection.steps.${5}.tools.${0}`), icon: Activity, color: "text-purple-500" },
      { name: t(`home.aiSection.steps.${5}.tools.${1}`), icon: BarChart, color: "text-blue-400" },
      { name: t(`home.aiSection.steps.${5}.tools.${2}`), icon: Gauge, color: "text-green-500" },
      { name: t(`home.aiSection.steps.${5}.tools.${3}`), icon: MessageSquare, color: "text-pink-500" }
    ],
    features: [
      t(`home.aiSection.steps.${5}.features.${0}`),
      t(`home.aiSection.steps.${5}.features.${1}`),
      t(`home.aiSection.steps.${5}.features.${2}`),
    ]
  },
];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const bannerTools = [
  { name: t(`home.aiSection.banner.tools.${0}`), icon: MessageCircle, bg: "bg-green-500/20" },
  { name: t(`home.aiSection.banner.tools.${1}`), icon: GitBranch, bg: "bg-purple-500/20" },
  { name: t(`home.aiSection.banner.tools.${2}`), icon: TestTube, bg: "bg-blue-500/20" },
  { name: t(`home.aiSection.banner.tools.${3}`), icon: Ship, bg: "bg-orange-500/20" },
  { name: t(`home.aiSection.banner.tools.${4}`), icon: Activity, bg: "bg-red-500/20" }
];

  // Background orbs variants
  const orbVariants = {
    hidden: { 
      opacity: 0,
      scale: 0 
    },
    visible: {
      opacity: [0.1, 0.3, 0.1],
      scale: 1,
      transition: {
        opacity: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse" as const
        },
        scale: {
          duration: 2,
          ease: "easeOut" as const
        }
      }
    }
  };

  return (
    <motion.section 
      id="ai-section"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-br from-background via-blue-50/20 to-purple-50/10 dark:from-background dark:via-blue-950/10 dark:to-purple-950/5 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          variants={orbVariants}
          className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
        />
        <motion.div 
          variants={orbVariants}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
        />
        <motion.div 
          variants={orbVariants}
          transition={{ delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section với animation được cải thiện */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-16" delay={0.2}>
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('home.aiSection.title')}
              <motion.span 
                variants={titleGradientVariants}
                className="block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2"
                style={{ backgroundSize: "200% 100%" }}
              >
                {t('home.aiSection.subtitle')}
              </motion.span>
            </h2>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            {t('home.aiSection.description')}
          </motion.p>
        </AnimatedSection>

        {/* Hero Banner với animation được cải thiện */}
        <AnimatedSection className="relative mb-20" delay={0.6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
            className="h-80 rounded-3xl bg-cover bg-center relative overflow-hidden shadow-2xl border border-primary/20"
            style={{ backgroundImage: `url(${aiTechImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/95 via-tech-dark/80 to-tech-dark/95"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-2xl font-bold mb-6"
                >
                  {t('home.aiSection.banner.heading')}
                </motion.h3>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap items-center justify-center gap-3 mb-4"
                >
                  {bannerTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      variants={toolItemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className={`flex items-center gap-2 ${tool.bg} backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 transition-all duration-300 hover:border-white/30`}
                    >
                      <tool.icon className="h-5 w-5" />
                      <span className="font-semibold text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-lg opacity-90 max-w-2xl"
                >
                  {t('home.aiSection.banner.note')}
                </motion.p>
              </div>
            </div>

            {/* Animated sparkles với hiệu ứng được cải thiện */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-4 right-4"
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-4 left-4"
            >
              <Zap className="h-5 w-5 text-blue-400" />
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Grid 6 bước với timeline và staggered animation được cải thiện */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline connector - Ẩn trên mobile */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden xl:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 origin-left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {aiSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                  className="relative group"
                >
                  {/* Timeline dot với animation được cải thiện */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: 0.8 + index * 0.1 
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="hidden xl:flex absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10 group-hover:shadow-primary/30 transition-all duration-300"
                  />
                  
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm h-full overflow-hidden">
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-lg -z-10" />
                    
                    <CardContent className="p-6 space-y-4 h-full flex flex-col relative z-10">
                      {/* Header với số bước và icon chính */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-300">
                          {step.step}
                        </span>
                        <motion.div 
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                          className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 shadow-sm border border-primary/10 group-hover:border-primary/20"
                        >
                          <Icon className="h-6 w-6 text-primary" />
                        </motion.div>
                      </motion.div>

                      {/* Tiêu đề và mô tả */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                        className="space-y-3 flex-1"
                      >
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Features list */}
                      {step.features && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                          className="space-y-2"
                        >
                          {step.features.map((feature, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 1.3 + index * 0.1 + idx * 0.05 }}
                              className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                            >
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                  type: "spring", 
                                  delay: 1.4 + index * 0.1 + idx * 0.05 
                                }}
                                className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0 group-hover:bg-primary transition-colors duration-300"
                              />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* AI Tools với logo */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                        className="pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-300"
                      >
                        <div className="space-y-3">
                          <motion.div 
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-1.5"
                          >
                            {step.aiTools.map((tool, idx) => {
                              const ToolIcon = tool.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  variants={toolItemVariants}
                                  whileHover={{ 
                                    scale: 1.05,
                                    y: -2
                                  }}
                                >
                                  <Badge 
                                    variant="secondary" 
                                    className="gap-1.5 bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 text-xs py-1 px-2 transition-all duration-200 group-hover:shadow-sm"
                                  >
                                    <ToolIcon className={`h-3 w-3 ${tool.color}`} />
                                    <span className="text-xs">{tool.name.split('/')[0].trim()}</span>
                                  </Badge>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to action với animation được cải thiện */}
        <AnimatedSection className="text-center mt-16" delay={1.8}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity 
              }}
              className="text-sm font-semibold text-foreground bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent bg-size-200"
              style={{ backgroundSize: "200% 100%" }}
            >
              {t('cta.ready')} {t('cta.contactButton')}
            </motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <Zap className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Decorative floating elements với animation được cải thiện */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-10 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            x: [0, 10, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 left-20 w-3 h-3 bg-purple-500/30 rounded-full blur-sm"
        />
      </div>
    </motion.section>
  );
};

export default AISection;
