"use client";

import { useState } from "react";
import ProjectTile from "./ProjectTile";
import SearchBar from "./../SearchBar";
import { Project } from "@/common/types";

interface ProjectTileContainerProps {
  projects: Project[];
}

export default function ProjectTileContainer({
  projects,
}: ProjectTileContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder='"Search projects - very useful search bar that is totally needed because I have a lot of projects"'
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-4 md:mt-8">
        {filteredProjects.map((project, index) => (
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
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No projects found.</p>
      )}
    </div>
  );
}
