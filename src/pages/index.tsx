import Layout from "../components/Layout/Layout";
import AnimatedContent from "@/components/AnimatedContent";
import ProjectTileContainer from "@/components/ProjectSection/ProjectsContainer";
import "../common/globals.css";
import projects from "../common/projects.json";

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      <AnimatedContent />
      <ProjectTileContainer projects={projects} />
    </Layout>
  );
}
