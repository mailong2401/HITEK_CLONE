// components/technology/DevelopmentProcess.tsx
import { motion } from "framer-motion";

const process = [
  {
    step: "01",
    title: "Phân tích & Lập kế hoạch",
    description: "Phân tích yêu cầu và lập kế hoạch chi tiết với công nghệ phù hợp"
  },
  {
    step: "02",
    title: "Thiết kế & Prototype",
    description: "Thiết kế UI/UX và tạo prototype để xác nhận concept"
  },
  {
    step: "03",
    title: "Phát triển & Tích hợp",
    description: "Phát triển ứng dụng với công nghệ hiện đại và tích hợp hệ thống"
  },
  {
    step: "04",
    title: "Kiểm thử & Triển khai",
    description: "Kiểm thử toàn diện và triển khai sản phẩm cuối cùng"
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quy Trình Phát Triển
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quy trình làm việc chuyên nghiệp đảm bảo chất lượng và tiến độ dự án
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
