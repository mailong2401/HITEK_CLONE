import { useState } from "react";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { useProjects } from "@/hooks/useProjects"; // Import hook

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

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Lỗi khi tải dữ liệu: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/20">
      <ProjectsHeader />
      
      <ProjectsFilter
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
        categories={categories} // Truyền categories từ Supabase
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