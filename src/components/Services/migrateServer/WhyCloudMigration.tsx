import { motion } from 'framer-motion';
import { Cloud, Database, Server, Zap, ChevronRight } from 'lucide-react';

const WhyCloudMigration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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


  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tại sao phải cần đến{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CLOUD MIGRATION?
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Một doanh nghiệp có rất "nhiều thứ" cần đến Cloud Migration. Chẳng hạn như chuyển các dữ liệu và ứng dụng từ một trung tâm dữ liệu nào đó lên môi trường Cloud, đây là một nhu cầu thường thấy nhất từ các doanh nghiệp hiện nay.
                </p>
                
                <p className="leading-relaxed">
                  Ngoài ra, có một mô hình "lên mây" khác nói đến việc chuyển dữ liệu và các ứng dụng giữa các đám mây hoặc các nhà cung cấp với nhau. Mô hình này thường được gọi với cái tên "Di chuyển giữa các đám mây".
                </p>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="text-foreground font-medium">
                    Môi trường đám mây có thể mở rộng dễ dàng, ổn định và có tính sẵn sàng cao. Điện toán đám mây mang đến một thế giới mới và sự phát triển vượt bậc cho hoạt động kinh doanh và hạ tầng các ứng dụng trong doanh nghiệp.
                  </p>
                </div>

                <p className="leading-relaxed font-medium text-foreground">
                  Trọng tâm trong đó – những máy chủ đám mây (cloud server) đang ngày một quan trọng hơn trong nội bộ mỗi doanh nghiệp.
                </p>
              </div>


            </motion.div>

            {/* Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://hitek.com.vn/wp-content/uploads/2023/10/30495-1024x870.jpg"
                  alt="Cloud Migration - Lý do cần chuyển đổi lên đám mây"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              
              {/* Simple overlay */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-gradient-to-r from-primary to-accent text-white font-semibold py-2 px-6 rounded-lg shadow-lg">
                  Cloud Migration
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCloudMigration;
