import { motion } from "framer-motion";

const ProjectsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Sẵn sàng triển khai dự án của bạn?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed"
        >
          HITEK cam kết mang đến giải pháp công nghệ tối ưu, 
          đội ngũ chuyên gia giàu kinh nghiệm và dịch vụ hỗ trợ 24/7
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Đăng ký tư vấn miễn phí
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Liên hệ chuyên gia
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsCTA;