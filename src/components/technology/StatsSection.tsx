// components/technology/StatsSection.tsx
import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Công nghệ sử dụng" },
  { number: "100+", label: "Dự án thành công" },
  { number: "10+", label: "Năm kinh nghiệm" },
  { number: "98%", label: "Khách hàng hài lòng" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
