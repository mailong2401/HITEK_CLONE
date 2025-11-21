// components/projects/ProjectCard.tsx - Cập nhật để hiển thị đúng dữ liệu từ Supabase
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Clock, Users } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  // Lấy ảnh đầu tiên hoặc ảnh mặc định
  const mainImage = project.images && project.images.length > 0 
    ? project.images[0].image_url 
    : 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={mainImage}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
          <div className="text-white">
            {project.duration && (
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{project.duration}</span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">{project.team}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
            {project.category}
          </span>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          {project.client && (
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {project.client}
            </span>
          )}
          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
            <span className="text-sm font-medium">Chi tiết</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
