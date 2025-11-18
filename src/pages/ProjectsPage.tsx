import { useState } from "react";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import { projectsData } from "@/data/projectsData";

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