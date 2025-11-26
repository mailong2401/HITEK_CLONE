// components/blog/BlogCTA.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Theo dõi Blog của chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nhận những bài viết mới nhất về công nghệ, phát triển phần mềm và kinh nghiệm từ đội ngũ Hitek
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-4 py-3 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center gap-3 justify-center"
            >
              <span>Đăng ký</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTA;
