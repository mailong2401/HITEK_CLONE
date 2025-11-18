import { motion } from "framer-motion";

const ProjectsHeader = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Dự Án <span className="text-blue-200">Công Nghệ</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed"
          >
            Khám phá những giải pháp công nghệ đột phá mà HITEK đã triển khai 
            thành công cho các doanh nghiệp hàng đầu
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 text-lg"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>100+ Dự án triển khai</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <span>50+ Khách hàng</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
              <span>Chuyên gia công nghệ</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHeader;