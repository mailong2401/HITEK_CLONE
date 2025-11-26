import { useState } from "react";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { useProjects } from "@/hooks/useProjects"; // Import hook
import { motion } from "framer-motion"; // Thêm motion cho loading

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Sử dụng useProjects hook để lấy dữ liệu từ Supabase
  const { projects, categories, loading, error } = useProjects();

  // Lọc dự án dựa trên category và search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const selectedProjectData = projects.find(project => project.id === selectedProject);

  // Hiển thị loading
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16 md:pt-20">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-lg text-muted-foreground">Đang tải dự án...</p>
        </div>
      </div>
    );
  }

  // Hiển thị lỗi
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16 md:pt-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span className="text-white text-2xl">!</span>
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Lỗi khi tải dữ liệu</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20 pt-16 md:pt-20">
      <ProjectsHeader />
      
      <ProjectsFilter
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />

      <ProjectsGrid
        projects={filteredProjects}
        onProjectSelect={setSelectedProject}
      />

      <ProjectModal
        project={selectedProjectData || null}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ProjectsCTA />
    </div>
  );
};

export default ProjectsPage;
