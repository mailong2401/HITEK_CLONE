import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ProcessStepProps {
  title: string;
  content: React.ReactNode;
  imageUrl: string;
  reverse?: boolean;
  stepNumber: number;
  totalSteps: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  title, 
  content, 
  imageUrl,
  reverse = false,
  stepNumber,
  totalSteps
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, stepNumber * 300);
    return () => clearTimeout(timer);
  }, [stepNumber]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: stepNumber * 0.1
      }
    }
  };

  const rocketVariants = {
    initial: { x: reverse ? 50 : -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: stepNumber * 0.2 + 0.3
      }
    },
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Xác định icon dựa trên stepNumber (lẻ/chẵn)
  const rocketIcon = stepNumber % 2 === 1 
    ? "https://hitek.com.vn/wp-content/uploads/2023/10/rocket_2256186.png"
    : "https://hitek.com.vn/wp-content/uploads/2023/10/rocket_2256162.png";

  const isLastStep = stepNumber === totalSteps;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''} relative`}
    >
      {/* Rocket Icon - Bên trái (cho layout không reverse) hoặc bên phải (cho layout reverse) */}
      <motion.div
        variants={rocketVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className={`absolute ${reverse ? 'lg:left-0' : 'lg:right-0'} -top-6 lg:top-1/2 lg:-translate-y-1/2 z-10 hidden lg:block`}
        style={{
          [reverse ? 'left' : 'right']: 'calc(50% - 2rem)',
          marginLeft: reverse ? '-4rem' : '4rem',
          marginRight: reverse ? '4rem' : '-4rem'
        }}
      >
        <div className="relative">
          <img 
            src={rocketIcon}
            alt="Rocket Icon"
            className="w-16 h-16 lg:w-20 lg:h-20 drop-shadow-lg"
          />
          {/* Trail effect */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-t from-primary/20 to-transparent blur-sm" />
        </div>
      </motion.div>

      {/* Mobile Rocket Icon */}
      <motion.div
        variants={rocketVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 lg:hidden"
      >
        <div className="relative">
          <img 
            src={rocketIcon}
            alt="Rocket Icon"
            className="w-12 h-12 drop-shadow-lg"
          />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-primary/20 to-transparent blur-sm" />
        </div>
      </motion.div>

      {/* Step Number Badge */}
      <div className={`absolute ${reverse ? 'right-0' : 'left-0'} -top-2 lg:top-8 ${reverse ? 'lg:left-8' : 'lg:right-8'} z-10`}>
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 relative">
        {/* Vertical line for desktop */}
        {!isLastStep && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/30 to-accent/30 hidden lg:block" />
        )}
        
        <motion.div 
          variants={containerVariants}
          className="space-y-8 pt-12 lg:pt-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center lg:text-left">
            {title}
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            {content}
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div 
        variants={containerVariants}
        className="lg:w-1/2 relative"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <img 
            src={imageUrl}
            alt={title}
            className="w-84 md:w-124 h-auto object-cover aspect-video transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/20 to-transparent" />
          
          {/* Step Indicator on Image */}
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-tech-navy/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="font-bold text-primary">Bước {stepNumber}</span>
          </div>
        </div>

        {/* Progress Dots for Mobile */}
        {stepNumber < totalSteps && (
          <div className="flex justify-center mt-8 lg:hidden">
            <div className="flex items-center gap-2">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index + 1 <= stepNumber ? 'bg-primary' : 'bg-border'}`}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectPlanningSection = () => {
  const steps = [
    {
      title: "Lên ý tưởng, kế hoạch và phân tích dự án",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/finalizing-ideas-predict-and-analyze-feasibility-768x491.png",
      content: (
        <>
          <p className="leading-relaxed">
            Dịch vụ phát triển phần mềm dài hạn thường sẽ dành cho các khách hàng đã có ý tưởng từ ban đầu. Sau đó khách hàng sẽ cung cấp các báo cáo kinh doanh, hồ sơ hành vi người dùng,... để đội ngũ chúng tôi có thể cùng nhau phân tích và tìm ra giải pháp phù hợp nhất với nhu cầu của khách hàng. Tiếp theo sau giai đoạn thống nhất ý tưởng sẽ là giai đoạn định hình sản phẩm; phác thảo phạm vi dự án và xác định các tính năng cần thiết và các yêu cầu thiết kế.
          </p>
          <div className="py-8">
            <div className="w-full border-t border-border" />
          </div>
        </>
      ),
    },
    {
      title: "Hoàn thiện thiết kế cấu trúc phần mềm",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/designing-product-structure.png",
      content: (
        <p className="leading-relaxed">
          Cấu trúc của phần mềm sẽ bao gồm cấu trúc sản phẩm, các yếu tố chính, mạng lưu trữ và môi trường phát triển với các data modules. Việc hoàn thiện thiết kế sản phẩm trước sẽ đảm bảo hệ thống phần mềm đáp ứng được các yêu cầu hiện tại của khách hàng, hoặc các yếu tố phát sinh trong tương lai, việc can thiệp sẽ dễ dàng hơn bao giờ hết.
        </p>
      ),
      reverse: true,
    },
    {
      title: "Bắt đầu xây dựng và phát triển phần mềm",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/acceptance-testing-product-quality-measurement-768x688.png",
      content: (
        <>
          <p className="leading-relaxed">
            Ở giai đoạn này, các yêu cầu sẽ được phân loại và chia nhỏ một cách chi tiết nhất trong đó, các nhân sự hay nhóm thực hiện sẽ được xác định và phân công cụ thể. Do đó, đôi bên sẽ nắm được mốc thời gian hoàn thành và dễ dàng theo dõi tiến độ công việc mà không cần phải xác nhận với từng cá nhân. Quá trình này đóng một vai trò vô cùng quan trọng trong việc xác định cách thức triển khai giải pháp phù hợp. Một số tài liệu chính bao gồm tài liệu thiết kế, tài liệu đặc điểm kỹ thuật, yêu cầu chức năng và tiêu chuẩn mã hóa sẽ được tuân theo trong quá trình phân phối cuối cùng.
          </p>
          <div className="py-8">
            <div className="w-full border-t border-border" />
          </div>
        </>
      ),
    },
    {
      title: "Tiến hành kiểm thử và đo lường chất lượng sản phẩm",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/10/TRAINING-TRANSFERRING-NEW-TECHNOLOGY.png",
      content: (
        <p className="leading-relaxed">
          Giai đoạn này là một trong những giai đoạn quan trọng không kém giai đoạn phát triển sản phẩm. Chất lượng của một sản phẩm được xem là chìa khoá thành công của cả sản phẩm. Khâu kiểm thử sẽ bao gồm cài đặt, kiểm tra hệ thống, sửa lỗi, kiểm thử được thực hiện bởi người dùng cuối hoặc khách hàng để xác minh/chấp nhận hệ thống phần mềm trước khi cho ra mắt thị trường.
        </p>
      ),
      reverse: true,
    },
    {
      title: "Đào tạo và chuyển giao công nghệ",
      imageUrl: "https://hitek.com.vn/wp-content/uploads/2022/09/CONDUCTING-SOFTWARE-DEVELOPMENT.png",
      content: (
        <p className="leading-relaxed">
          Đây là công đoạn đào tạo và bàn giao lại sản phẩm cho khách hàng. Chúng tôi sẽ hướng dẫn tận tình các cách vận hành cho cá nhân, đội nhóm hay bộ phận mà khách hàng đã chỉ định. Giai đoạn này không thể tránh khỏi một số phát sinh từ khách hàng, khi đó, nhiệm vụ của team phát triển sẽ ghi nhận ý kiến và thay đổi cho phù hợp với yêu cầu mới của khách hàng nhất có thể. Cuối cùng, team phát triển sẽ bàn giao tất cả dự án lại cho khách hàng bao gồm code, documents và giấy phép phần mềm.
        </p>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Quy trình phát triển
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              phần mềm dài hạn
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Từ ý tưởng đến hoàn thiện - 5 bước quan trọng tạo nên sản phẩm chất lượng
          </p>
        </motion.div>

        <div className="space-y-32 lg:space-y-40">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              title={step.title}
              content={step.content}
              imageUrl={step.imageUrl}
              reverse={step.reverse || false}
              stepNumber={index + 1}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* Launch Rocket - Special animation for last step */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 text-center"
        >
          <div className="relative inline-block">
            <img 
              src="https://hitek.com.vn/wp-content/uploads/2023/10/rocket_2256162.png"
              alt="Launch Rocket"
              className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-8 animate-pulse"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-gradient-to-t from-primary/30 to-transparent blur-lg" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Sẵn sàng khởi động dự án của bạn?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Liên hệ với chúng tôi để bắt đầu hành trình chuyển đổi số cùng Hitek Software
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPlanningSection;
