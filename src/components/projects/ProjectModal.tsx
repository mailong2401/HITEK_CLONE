//components/projects/ProjectModal
import { motion } from "framer-motion";
import { Code, Smartphone, Clock, Users } from "lucide-react";
import { Project, ProjectResult } from "@/data/projectsData";
import { categories } from "@/data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  const categoryName = categories.find(cat => cat.id === project.category)?.name;
  
  // Convert results to array format if it's an object
  const resultsArray: ProjectResult[] = Array.isArray(project.results)
    ? project.results
    : Object.entries(project.results).map(([key, value]) => ({ key, value }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image || 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}
            alt={project.title}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg text-gray-900 dark:text-white"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              {categoryName}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              {project.client}
            </span>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{project.duration}</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Users className="w-4 h-4" />
              <span className="text-sm">{project.team}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Công nghệ sử dụng
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Tính năng chính
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Kết quả đạt được
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resultsArray.map((result) => (
                <div key={result.key} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                    {result.value.split(' ')[0]}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    {result.value.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-500/25">
              Đăng ký tư vấn dự án tương tự
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
