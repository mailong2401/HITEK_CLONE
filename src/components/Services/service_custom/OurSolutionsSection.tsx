import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Smartphone, 
  RefreshCw, 
  CheckCircle, 
  ArrowRight,
  Target,
  Zap,
  Shield,
  Code2,
  Database,
  Cloud
} from 'lucide-react';

const OurSolutionsSection = () => {
  const solutions = [
    {
      icon: Briefcase,
      title: "Phát triển ứng dụng doanh nghiệp theo yêu cầu",
      description: "Hitek có nhiều kinh nghiệm phát triển các ứng dụng doanh nghiệp theo yêu cầu cho các công ty thuộc các lĩnh vực khác nhau. Chúng tôi phát triển các giải pháp phần mềm theo yêu cầu phù hợp để phù hợp với yêu cầu cụ thể của bạn, vì vậy bạn sẽ nhận được phần mềm tốt nhất có thể.",
      gradient: "from-primary to-primary/80",
      iconBg: "bg-primary/10"
    },
    {
      icon: Smartphone,
      title: "Phát triển ứng dụng di động theo yêu cầu",
      description: "Chúng tôi tạo các ứng dụng hiệu suất cao cho iOS và Android. Các nhà phát triển ứng dụng dành cho thiết bị di động tùy chỉnh chuyên nghiệp của chúng tôi có kinh nghiệm phát triển các ứng dụng gốc, ứng dụng lai và ứng dụng đa nền tảng.",
      gradient: "from-accent to-accent/80",
      iconBg: "bg-accent/10"
    },
    {
      icon: RefreshCw,
      title: "Cải tiến và hiện đại hóa phần mềm",
      description: "Với chuyên môn và cập nhật liên tục, chúng tôi sẽ sử dụng các công nghệ mới nhất và cập nhật để kéo dài tuổi thọ của hệ thống cũ của bạn.",
      gradient: "from-primary via-accent to-primary",
      iconBg: "bg-gradient-to-r from-primary/10 to-accent/10"
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: { 
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-secondary/50 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 opacity-10">
        <Code2 className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-10">
        <Database className="w-12 h-12 text-accent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Title with Creative Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          {/* Decorative Badge */}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">GIẢI PHÁP </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              PHẦN MỀM
            </span>
            <span className="block text-foreground">THEO YÊU CẦU</span>
          </h2>
          
          {/* Animated Separator */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-border to-primary/50" />
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-3 bg-primary/20 rounded-full blur-md animate-ping" />
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-border to-accent/50" />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cung cấp các giải pháp công nghệ tối ưu, được{" "}
            <span className="font-semibold text-primary">thiết kế riêng biệt</span> 
            {" "}để đáp ứng nhu cầu đặc thù của từng doanh nghiệp
          </p>
        </motion.div>

        {/* Animated Stats Section */}
        {/* Enhanced Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="relative group"
              >
                {/* Main Card */}
                <motion.div
                  variants={cardHoverVariants}
                  className="relative h-full bg-card border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/30 overflow-hidden"
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent to-transparent rounded-full" />
                  </div>
                  
                  {/* Icon with Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl ${solution.iconBg} mb-6 border border-border`}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-20`} />
                    <Icon className="w-10 h-10 text-primary relative z-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>




                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                  
                  {/* Corner Accents */}
                </motion.div>

                {/* External Glow Effect */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-20`} />
              </motion.div>
            );
          })}
        </motion.div>

              </div>
    </section>
  );
};

export default OurSolutionsSection;
