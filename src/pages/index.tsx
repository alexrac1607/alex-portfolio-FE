import Layout from "../components/Layout/Layout";
import AnimatedContent from "@/components/AnimatedContent";
import ProjectTileContainer from "@/components/ProjectSection/ProjectsContainer";
import BlogTileContainer from "@/components/BlogSection/BlogTileContainer"; // Import the new component
import "../common/globals.css";
import projects from "../common/projects.json";
import posts from "../common/posts.json"; // Create a similar JSON file for blog posts

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      <AnimatedContent />
      <ProjectTileContainer projects={projects} />
      <BlogTileContainer posts={posts} /> {/* Add the blog section */}
    </Layout>
  );
}
