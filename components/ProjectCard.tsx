import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <Link href={link} target="_blank">
      <div className="project-card">
        <Image src={image} alt={title} width={200} height={100} className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
