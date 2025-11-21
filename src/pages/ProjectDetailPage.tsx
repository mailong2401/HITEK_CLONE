// pages/ProjectDetailPage.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";
import { ArrowLeft, Calendar, Users, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects, loading, error } = useProjects();

  // Tìm project theo ID
  const project = projects.find(proj => proj.id === parseInt(id || "0"));
  
  // Lấy các dự án khác (loại trừ dự án hiện tại)
  const otherProjects = projects
    .filter(proj => proj.id !== project?.id)
    .slice(0, 4); // Lấy tối đa 4 dự án

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {error ? "Lỗi khi tải dữ liệu" : "Dự án không tồn tại"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {error?.message || "Không tìm thấy dự án với ID này."}
          </p>
          <Link 
            to="/projects-page" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Quay lại danh sách dự án
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Quay lại
            </button>
            <Link 
              to="/projects-page"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Tất cả dự án
            </Link>
          </div>
        </div>
      </div>

      {/* Project Hero */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Project Images Gallery */}
            {project.images && project.images.length > 0 ? (
              <div className="relative">
                <img
                  src={project.images[0].image_url}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                {/* Image Gallery Indicator */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    +{project.images.length - 1} ảnh
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Chưa có hình ảnh</span>
              </div>
            )}

            {/* Project Info */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                  {project.client && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
              )}

              {/* Team Info */}
              {project.team && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Đội ngũ tham gia
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.team}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Results Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Tính năng chính
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white"
              >
                <h3 className="text-2xl font-semibold mb-6">Kết quả đạt được</h3>
                <div className="space-y-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold mb-2">{result.value}</div>
                      <div className="text-blue-100">{result.key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Images */}
      {project.images && project.images.length > 1 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Hình ảnh dự án
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={image.image_url}
                      alt={image.caption || `Project image ${index + 2}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {image.caption && (
                      <div className="p-3 bg-gray-50 dark:bg-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-300">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Projects Section - MỚI THÊM */}
      {otherProjects.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Dự án khác
                </h3>
                <Link 
                  to="/projects-page"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Xem tất cả
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Grid hiển thị các dự án khác trong 1 hàng */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProjects.map((otherProject) => {
                  const projectImage = otherProject.images && otherProject.images.length > 0 
                    ? otherProject.images[0].image_url 
                    : 'https://via.placeholder.com/300x200?text=No+Image';
                  
                  return (
                    <motion.div
                      key={otherProject.id}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-600"
                      onClick={() => navigate(`/project/${otherProject.id}`)}
                    >
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={projectImage}
                          alt={otherProject.title}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-4">
                        <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium mb-2">
                          {otherProject.category}
                        </span>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {otherProject.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {otherProject.description}
                        </p>
                        {otherProject.client && (
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {otherProject.client}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Bạn có dự án tương tự?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực với giải pháp công nghệ tối ưu nhất.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Đăng ký tư vấn miễn phí
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
