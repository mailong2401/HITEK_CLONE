// components/blog/BlogHero.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, TrendingUp, Star, Sparkles, ArrowRight } from "lucide-react";

const BlogHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const textGlowAnimation = {
    backgroundPosition: ["0%", "100%", "0%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background với hiệu ứng nâng cao */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Blog Background"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay nâng cao */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-primary/20 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
        
        {/* Animated Grid Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <div className="w-6 h-6 bg-primary/30 rounded-full blur-sm" />
      </motion.div>
      
      <motion.div
        animate={{
          ...floatingAnimation,
          y: [5, -5, 5],
          transition: { ...floatingAnimation.transition, delay: 1 }
        }}
        className="absolute top-1/3 right-20 hidden lg:block"
      >
        <div className="w-8 h-8 bg-primary/20 rounded-full blur-sm" />
      </motion.div>

      <motion.div
        animate={pulseAnimation}
        className="absolute bottom-32 left-1/4 hidden lg:block"
      >
        <Sparkles className="w-6 h-6 text-primary/40" />
      </motion.div>

      <motion.div
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
        className="absolute top-1/2 left-20 hidden lg:block"
      >
        <BookOpen className="w-8 h-8 text-primary/30" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge với animation */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">
              Kiến thức & Công nghệ
            </span>
            <TrendingUp className="w-4 h-4 text-primary" />
            <Star className="w-4 h-4 text-primary fill-current" />
          </motion.div>

          {/* Main Heading với gradient animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Blog{" "}
            </span>
            <motion.span
              animate={textGlowAnimation}
              className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Hitek
            </motion.span>
          </motion.h1>

          {/* Subheading với interactive elements */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Khám phá những bài viết mới nhất về{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg"
              >
                công nghệ
              </motion.span>
              ,{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg"
              >
                kinh nghiệm
              </motion.span>
              {" "}phát triển phần mềm và những{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg"
              >
                câu chuyện
              </motion.span>
              {" "}thành công từ đội ngũ chuyên gia
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { number: "200+", label: "Bài viết chất lượng" },
              { number: "50K+", label: "Độc giả mỗi tháng" },
              { number: "95%", label: "Đánh giá tích cực" },
              { number: "24/7", label: "Cập nhật kiến thức" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span>Khám phá bài viết</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default BlogHero;
