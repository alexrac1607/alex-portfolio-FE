import ProjectTile from "./ProjectTile";

interface Project {
  url: string;
  description: string;
  imageSrc: string;
}

interface ProjectsContainerProps {
  projects: Project[];
}

export default function ProjectsContainer({
  projects,
}: ProjectsContainerProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            url={project.url}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
