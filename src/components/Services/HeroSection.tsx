import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Dịch Vụ <span className="text-primary">Công Nghệ</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cung cấp giải pháp công nghệ toàn diện từ tư vấn, thiết kế đến phát triển 
            và bảo trì hệ thống phần mềm cho doanh nghiệp
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/HITEK_CLONE#contact">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                Nhận tư vấn ngay
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" />
              Xem case study
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection