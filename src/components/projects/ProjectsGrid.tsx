import { motion } from "framer-motion";
import { Project } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import EmptyState from "@/components/ui/EmptyState";

interface ProjectsGridProps {
  projects: Project[];
  onProjectSelect: (projectId: number) => void;
}

const ProjectsGrid = ({ projects, onProjectSelect }: ProjectsGridProps) => {
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectSelect(project.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;