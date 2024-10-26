import ProjectCard from './ProjectCard';
import projectData from '@/app/projects/projectData';

const ProjectGrid = () => {
  return (
    <section className="project-grid">
      {projectData.map((project) => (
        <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description} 
          image={project.image} 
          link={project.link} 
        />
      ))}
    </section>
  );
};

export default ProjectGrid;
