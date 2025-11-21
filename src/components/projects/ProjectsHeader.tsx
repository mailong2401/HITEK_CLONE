import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Rocket, Zap, Sparkles, ArrowRight } from "lucide-react";
import { floating, pulse } from "@/lib/animations";

const ProjectsHeader = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900">
      {/* Background với hiệu ứng nâng cao */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        
        {/* Gradient Overlay nâng cao */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/60 to-purple-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-blue-800/40" />
        
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
        animate={floating}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <div className="w-8 h-8 bg-blue-300/40 rounded-full blur-sm" />
      </motion.div>
      
      <motion.div
        animate={{
          ...floating,
          y: [5, -5, 5],
          transition: { ...floating.transition, delay: 1 }
        }}
        className="absolute top-1/3 right-20 hidden lg:block"
      >
        <div className="w-12 h-12 bg-purple-300/30 rounded-full blur-sm" />
      </motion.div>

      <motion.div
        animate={pulse}
        className="absolute bottom-32 left-1/4 hidden lg:block"
      >
        <Sparkles className="w-8 h-8 text-blue-200/60" />
      </motion.div>

      <motion.div
        animate={{
          ...floating,
          transition: { ...floating.transition, delay: 2 }
        }}
        className="absolute bottom-20 right-1/4 hidden lg:block"
      >
        <Zap className="w-6 h-6 text-cyan-300/60" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8"
          >
            <Rocket className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-lg">
              Đồng hành cùng 100+ doanh nghiệp
            </span>
            <Star className="w-5 h-5 text-white fill-current" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Dự Án{" "}
            </span>
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Công Nghệ
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Khám phá những giải pháp công nghệ đột phá mà{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-white font-bold bg-white/20 px-3 py-1 rounded-xl"
              >
                HITEK
              </motion.span>{" "}
              đã triển khai thành công cho các doanh nghiệp hàng đầu
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { number: "100+", label: "Dự án triển khai", color: "from-green-400 to-cyan-400" },
              { number: "50+", label: "Khách hàng", color: "from-blue-400 to-cyan-400" },
              { number: "99%", label: "Hài lòng", color: "from-purple-400 to-pink-400" },
              { number: "24/7", label: "Hỗ trợ kỹ thuật", color: "from-cyan-400 to-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects-filter')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span>Xem tất cả dự án</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <span>Liên hệ tư vấn</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent" />
    </section>
  );
};

export default ProjectsHeader;
