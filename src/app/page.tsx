// app/page.tsx

import AnimatedContent from "@/components/AnimatedContent";
import ProjectTileContainer from "@/components/ProjectSection/ProjectsContainer";
import BlogTileContainer from "@/components/BlogSection/BlogTileContainer";
import projects from "../common/projects.json";
import { BlogPost } from "@/common/types";
import { fetchPosts } from "@/api/fetchPosts";

export default async function HomePage() {
  const posts: BlogPost[] = await fetchPosts();

  return (
    <>
      <AnimatedContent />
      <ProjectTileContainer projects={projects} />
      <BlogTileContainer posts={posts} />
    </>
  );
}
