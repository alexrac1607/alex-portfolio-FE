"use client";

import AnimatedContent from "@/components/AnimatedContent";
import ProjectTileContainer from "@/components/ProjectSection/ProjectsContainer";
import BlogTileContainer from "@/components/BlogSection/BlogTileContainer";
import projects from "../common/projects.json";
import { BlogPost } from "@/common/types";
import posts from "../../public/posts.json";

export default function HomePage() {
  return (
    <>
      <AnimatedContent />
      <ProjectTileContainer projects={projects} />
      <BlogTileContainer posts={posts} />
    </>
  );
}
