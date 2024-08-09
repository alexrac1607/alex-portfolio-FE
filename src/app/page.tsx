import AnimatedContent from "@/components/AnimatedContent";
import ProjectTileContainer from "@/components/ProjectSection/ProjectsContainer";
import BlogTileContainer from "@/components/BlogSection/BlogTileContainer";
import projects from "../common/projects.json";
import posts from "../common/posts.json";

export default function HomePage(): JSX.Element {
  return (
    <>
      <AnimatedContent />
      <ProjectTileContainer projects={projects} />
      <BlogTileContainer posts={posts} />
    </>
  );
}
