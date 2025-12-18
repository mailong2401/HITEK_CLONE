import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const MobileAppProcess = () => {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const steps = [
    { number: "01", title: "Tiếp nhận yêu cầu của khách hàng" },
    { number: "02", title: "Chia nhỏ ý tưởng và phân tích dự án" },
    { number: "03", title: "Trình bày MVP" },
    { number: "04", title: "Thiết kế" },
    { number: "05", title: "Phát triển" },
    { number: "06", title: "QA" },
    { number: "07", title: "Test demo" },
    { number: "08", title: "Ra mắt" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Title Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 lg:mb-24"
          >

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              QUÁ TRÌNH ĐỂ MỘT ỨNG DỤNG DI ĐỘNG
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ĐƯỢC RA ĐỜI
              </span>
            </h1>

            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                Từ ý tưởng đầu tiên đến khi ứng dụng chính thức ra mắt, mỗi bước trong quy trình của chúng tôi đều được thiết kế tỉ mỉ để đảm bảo chất lượng và hiệu quả tối ưu.
              </p>
            </motion.div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div
            variants={containerVariants}
            className="relative"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Top Row - Steps 01-04 */}
              <div className="grid grid-cols-4 gap-8 mb-20 relative">
                {steps.slice(0, 4).map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="relative group flex flex-col items-center"
                  >
                    {/* Connector Line for steps 01-03 */}
                    {index < 3 && (
                      <motion.div
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute top-20 left-3/4 w-full h-1 bg-gradient-to-r from-primary/40 to-accent/40"
                      >
                        {/* Arrow head */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-accent/70" />
                      </motion.div>
                    )}
                    
                    {/* Circle with number */}
                    <motion.div
                      variants={circleVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="
                        w-40 h-40
                        rounded-full
                        bg-gradient-to-br from-card to-card
                        border-2 border-primary/30
                        flex flex-col items-center justify-center
                        text-center
                        shadow-lg relative
                        z-10
                      "
                    >
                      {/* Step Number */}
                      <div className="text-4xl font-bold text-primary mb-3">
                        {step.number}
                      </div>
                      
                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-foreground px-4 leading-tight">
                        {step.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Vertical Connector between rows */}
              <div className="relative h-24 mb-20 flex justify-center">
                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/40 to-accent/40"
                >
                  {/* Arrow head pointing down */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-accent/70" />
                </motion.div>
              </div>

              {/* Bottom Row - Steps 05-08 */}
              <div className="grid grid-cols-4 gap-8 relative">
                {steps.slice(4).map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="relative group flex flex-col items-center"
                  >
                    {/* Connector Line for steps 05-07 */}
                    {index < 3 && (
                      <motion.div
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute top-20 left-3/4 w-full h-1 bg-gradient-to-r from-primary/40 to-accent/40"
                      >
                        {/* Arrow head */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-accent/70" />
                      </motion.div>
                    )}
                    
                    {/* Circle with number */}
                    <motion.div
                      variants={circleVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="
                        w-40 h-40
                        rounded-full
                        bg-gradient-to-br from-card to-card
                        border-2 border-primary/30
                        flex flex-col items-center justify-center
                        text-center
                        shadow-lg relative
                        z-10
                      "
                    >
                      {/* Step Number */}
                      <div className="text-4xl font-bold text-primary mb-3">
                        {step.number}
                      </div>
                      
                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-foreground px-4 leading-tight">
                        {step.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 to-accent/40"
                >
                  {/* Arrow heads along the line */}
                  {steps.map((_, index) => (
                    index < steps.length - 1 && (
                      <div
                        key={index}
                        className="absolute"
                        style={{ top: `${(index * 100 + 80) / steps.length}%` }}
                      >
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-accent/70 transform translate-x-[-2px]" />
                      </div>
                    )
                  ))}
                </motion.div>
                
                <div className="space-y-10">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      variants={itemVariants}
                      className="relative pl-24"
                    >
                      {/* Circle with number */}
                      <motion.div
                        variants={circleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-card to-card border-2 border-primary/30 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-primary text-xl font-bold">{step.number}</span>
                      </motion.div>

                      {/* Step Title */}
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Explanation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppProcess;
