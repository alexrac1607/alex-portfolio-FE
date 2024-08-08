import ProjectTile from "./ProjectTile";
import { Project } from "@/common/types";

interface ProjectTileContainerProps {
  projects: Project[];
}

export default function ProjectTileContainer({
  projects,
}: ProjectTileContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-4 md:mt-8">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            url={project.url}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
