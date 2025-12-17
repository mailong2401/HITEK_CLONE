import { motion } from 'framer-motion';
import { CheckCircle, Code2, Users, Rocket, Shield, Zap, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

// Bạn có thể thay thế bằng ảnh thực tế của bạn
import CustomSoftwareImage from '@/assets/Services/1/software_text_1-1-2048x905.jpg';

const CustomSoftwareSection = () => {
  const constraintsRef = useRef(null);

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

  const imageVariants = {
    hidden: { x: -50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tại sao phải cần đến{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Dịch vụ phát triển phần mềm theo yêu cầu?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image with floating elements */}
            <motion.div
              ref={constraintsRef}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={CustomSoftwareImage}
                  alt="Phát triển phần mềm theo yêu cầu"
                  className="w-full h-auto object-cover aspect-video"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Floating badge on image */}
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium text-primary">Custom Solution</span>
                </motion.div>
              </div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-2xl rotate-12 hidden lg:flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Code2 className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent rounded-2xl -rotate-12 hidden lg:flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Users className="w-8 h-8 text-primary-foreground" />
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg mb-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-bold text-primary">Phát triển phần mềm theo yêu cầu</span> là quá trình thiết kế, triển khai, thử nghiệm, triển khai phần mềm được xây dựng tùy chỉnh để phù hợp với yêu cầu của tổ chức của bạn thay vì phần mềm mua sẵn. Phát triển phần mềm theo yêu cầu còn được gọi là gia công phần mềm.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 shadow-lg">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="font-bold text-accent">Gia công phần mềm</span> là một công cụ tuyệt vời để các doanh nghiệp phát triển phần mềm theo yêu cầu của họ. Gia công phần mềm cho phép các doanh nghiệp thuê các nhà phát triển là chuyên gia phát triển phần mềm theo yêu cầu và điều này giúp tăng đáng kể năng suất của họ.
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                variants={itemVariants}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Nhận tư vấn miễn phí</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
                  </div>
      </div>
    </section>
  );
};

export default CustomSoftwareSection;
