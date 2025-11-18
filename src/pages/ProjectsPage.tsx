import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, ExternalLink, Play, Code, Smartphone, Globe, Database, Cloud, Shield, Clock, Users } from "lucide-react";

// Mock data based on HITEK's actual services
const projectsData = [
  {
    id: 1,
    title: "Hệ thống quản lý sản xuất thông minh",
    category: "enterprise",
    client: "Tập đoàn Sản xuất Công nghiệp",
    description: "Phát triển hệ thống ERP tùy chỉnh cho ngành sản xuất, tích hợp IoT và AI để tối ưu hóa quy trình sản xuất và quản lý chuỗi cung ứng.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: [".NET Core", "React", "SQL Server", "Azure IoT", "Power BI"],
    features: ["Quản lý sản xuất real-time", "Theo dõi thiết bị IoT", "Báo cáo thông minh", "Tự động hóa quy trình"],
    results: {
      efficiency: "Tăng 40% hiệu suất",
      cost: "Giảm 25% chi phí",
      quality: "Giảm 60% lỗi sản phẩm"
    },
    duration: "6 tháng",
    team: "12 developers"
  },
  {
    id: 2,
    title: "Ứng dụng ngân hàng số",
    category: "fintech",
    client: "Ngân hàng TMCP Việt Nam",
    description: "Xây dựng ứng dụng ngân hàng di động với đầy đủ tính năng giao dịch, đầu tư và bảo mật đa lớp, đáp ứng tiêu chuẩn an toàn thông tin.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "Redis", "Kubernetes"],
    features: ["Chuyển khoản đa kênh", "Đầu tư tài chính", "Bảo mật sinh trắc học", "Hỗ trợ 24/7"],
    results: {
      users: "500,000+ người dùng",
      transactions: "1M+ giao dịch/ngày",
      rating: "4.8/5 trên App Store"
    },
    duration: "9 tháng",
    team: "15 developers"
  },
  {
    id: 3,
    title: "Nền tảng thương mại điện tử B2B",
    category: "ecommerce",
    client: "Tập đoàn Phân phối",
    description: "Phát triển nền tảng thương mại điện tử kết nối nhà sản xuất và nhà phân phối với hệ thống quản lý đơn hàng và logistics thông minh.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Java Spring", "Angular", "Oracle", "Elasticsearch", "Docker"],
    features: ["Đa vendor", "Quản lý kho thông minh", "Tích hợp logistics", "Báo cáo kinh doanh"],
    results: {
      revenue: "Tăng 200% doanh thu",
      partners: "1,000+ đối tác",
      orders: "50,000+ đơn hàng/tháng"
    },
    duration: "8 tháng",
    team: "18 developers"
  },
  {
    id: 4,
    title: "Hệ thống chăm sóc sức khỏe từ xa",
    category: "healthcare",
    client: "Bệnh viện Đa khoa Quốc tế",
    description: "Xây dựng nền tảng telemedicine với khả năng kết nối bác sĩ - bệnh nhân, quản lý hồ sơ sức khỏe điện tử và theo dõi bệnh nhân từ xa.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React Native", "Python Django", "MongoDB", "WebRTC", "AWS"],
    features: ["Khám bệnh từ xa", "QL hồ sơ điện tử", "Nhắc lịch thông minh", "Theo dõi sức khỏe"],
    results: {
      patients: "100,000+ bệnh nhân",
      efficiency: "Tiết kiệm 65% thời gian",
      satisfaction: "94% hài lòng"
    },
    duration: "7 tháng",
    team: "14 developers"
  },
  {
    id: 5,
    title: "Giải pháp quản lý chuỗi cung ứng",
    category: "logistics",
    client: "Công ty Logistics Toàn cầu",
    description: "Phát triển hệ thống SCM tích hợp AI để tối ưu hóa vận chuyển, dự báo nhu cầu và quản lý tồn kho cho chuỗi cung ứng phức tạp.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: [".NET", "Vue.js", "SQL Server", "Machine Learning", "Azure"],
    features: ["Theo dõi vận chuyển", "Dự báo thông minh", "Tối ưu lộ trình", "Báo cáo real-time"],
    results: {
      delivery: "Giảm 30% thời gian",
      cost: "Tiết kiệm 40% chi phí",
      accuracy: "95% độ chính xác"
    },
    duration: "10 tháng",
    team: "16 developers"
  },
  {
    id: 6,
    title: "Nền tảng giáo dục trực tuyến",
    category: "education",
    client: "Tổ chức Giáo dục Quốc tế",
    description: "Xây dựng nền tảng học tập trực tuyến với công nghệ streaming tiên tiến, hệ thống đánh giá tự động và tương tác đa phương tiện.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC", "Cloudflare"],
    features: ["Video streaming 4K", "Bài giảng tương tác", "Đánh giá AI", "Cộng đồng học tập"],
    results: {
      students: "50,000+ học viên",
      courses: "500+ khóa học",
      completion: "85% hoàn thành khóa học"
    },
    duration: "6 tháng",
    team: "13 developers"
  }
];

const categories = [
  { id: "all", name: "Tất cả dự án", icon: Code },
  { id: "enterprise", name: "Doanh nghiệp", icon: Database },
  { id: "fintech", name: "Fintech", icon: Shield },
  { id: "ecommerce", name: "Thương mại điện tử", icon: Globe },
  { id: "healthcare", name: "Y tế", icon: Smartphone },
  { id: "logistics", name: "Logistics", icon: Cloud },
  { id: "education", name: "Giáo dục", icon: Code }
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const selectedProjectData = projectsData.find(project => project.id === selectedProject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20">
      {/* Header */}
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

      {/* Filters and Search */}
      <section className="py-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm dự án, công nghệ, khách hàng..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                        : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 backdrop-blur-sm"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-700"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">{project.team}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
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
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {project.client}
                    </span>
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                      <span className="text-sm font-medium">Chi tiết</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Filter className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Không tìm thấy dự án phù hợp
              </h3>
              <p className="text-gray-500 dark:text-gray-500 max-w-md mx-auto">
                Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác để khám phá thêm các dự án của chúng tôi
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProjectData && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg text-gray-900 dark:text-white"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  {categories.find(cat => cat.id === selectedProjectData.category)?.name}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {selectedProjectData.client}
                </span>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{selectedProjectData.duration}</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{selectedProjectData.team}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedProjectData.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedProjectData.description}
              </p>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Công nghệ sử dụng
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProjectData.technologies.map((tech, index) => (
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
                    {selectedProjectData.features.map((feature, index) => (
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
                  {Object.entries(selectedProjectData.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                        {value.split(' ')[0]}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">
                        {value.split(' ').slice(1).join(' ')}
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
      )}

      {/* CTA Section */}
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
    </div>
  );
};

export default ProjectsPage;