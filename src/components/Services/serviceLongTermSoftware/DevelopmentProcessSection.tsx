import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Zap, Shield, Clock } from 'lucide-react';
import Background from "@/assets/Services/longtermsoftware1.png";

const DevelopmentProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const keyPoints = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "Quy trình quản lý chuẩn mực"
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên nghiệp",
      description: "Lập trình viên đào tạo bài bản"
    },
    {
      icon: Target,
      title: "Tập trung mục tiêu",
      description: "Hiểu rõ dự án và tiêu chí"
    },
    {
      icon: Zap,
      title: "Công nghệ mới",
      description: "Chinh phục công nghệ mới nhất"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>

              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Dịch vụ phát triển phần mềm{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  dài hạn
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed font-medium text-foreground">
                Phát triển phần mềm dài hạn là một quá trình xây dựng phức tạp, bởi không phải ai cũng được đào tạo bài bản và có kiến thức chuyên sâu để tự mình xử lý các dự án phát triển phần mềm dài hạn.
              </p>
              
              <p className="leading-relaxed">
                Với quy trình quản lý chuẩn mực đạt ISO 9001:2015, đội ngũ lập trình viên chuyên nghiệp của chúng tôi sẽ luôn là một phần không thể thiếu cho các dự án phát triển phần mềm dài hạn của bạn.
              </p>
              
              <p className="leading-relaxed">
                Những quy trình của chúng tôi sẽ luôn đảm bảo chất lượng từ giai đoạn nghiên cứu dự án, ý tưởng của sản phẩm cho đến khi phát triển – ra mắt và bảo trì sản phẩm.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-foreground font-medium">
                  Phát triển phần mềm dài hạn từ lâu đã không còn là một dịch vụ xa lạ đối với nhiều người hay các doanh nghiệp.
                </p>
              </div>

              <p className="leading-relaxed">
                Và dịch vụ này cũng không quá khó nếu bạn tìm được một đơn vị đủ kinh nghiệm cũng như dành thời gian đủ để tìm hiểu kỹ về dự án họ cần phát triển.
              </p>
            </motion.div>



            {/* Additional Content */}
            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                Hầu hết các lập trình viên của Hitek Software đều không chỉ được học và đào tạo bài bản, chúng tôi còn tạo cơ hội để các lập trình viên có thể tìm hiểu sâu hơn các công nghệ, tạo tình huống để họ có thể nhanh chóng ứng phó với các trường hợp có thể xảy ra trong quá trình thực hiện.
              </p>
              
              <p className="leading-relaxed font-medium text-foreground">
                Chúng tôi luôn tin rằng để một dự án có thể phát triển một cách tốt nhất điều kiện đầu tiên là phải hiểu rõ dự án, tiêu chí và mục đích mà dự án hướng tới,… Sau đó sẽ là những công nghệ mà dự án cần phải áp dụng là gì. Và kể cả những công nghệ mới lạ nhất, chúng tôi tự tin rằng chúng tôi đều sẽ chinh phục được!
              </p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full">
              {/* Image using img tag */}
              <img 
                src={Background}
                alt="Phát triển phần mềm dài hạn tại Hitek Software"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/20 to-transparent" />
              


            </div>

            {/* Subtle Background Decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcessSection;
