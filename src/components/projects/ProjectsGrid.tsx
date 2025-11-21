// components/projects/ProjectsGrid.tsx
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import EmptyState from '@/components/ui/EmptyState';
import { useNavigate } from 'react-router-dom'; // 👈 Thêm import

// Supabase version: projects prop now can be from Supabase fetch
export default function ProjectsGrid({ projects, onProjectSelect }) {
  const navigate = useNavigate(); // 👈 Thêm hook

  if (!projects || projects.length === 0) {
    return <EmptyState />;
  }

  const handleProjectClick = (projectId: number) => {
    // 👇 Thay vì mở modal, chuyển hướng đến trang chi tiết
    navigate(`/project/${projectId}`);
  };

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
              onClick={() => handleProjectClick(project.id)} // 👈 Cập nhật click handler
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
