import Layout from "../components/Layout/Layout";
import AnimatedContent from "@/components/AnimatedContent";
import ProjectTileContainer from "@/components/ProjectSection/ProjectsContainer";
import "../app/globals.css";

export default function HomePage(): JSX.Element {
  const projects = [
    {
      url: "https://project1.example.com",
      description: "Project 1 Description",
      imageSrc: "/images/project1.png", // Path to your project image
    },
    {
      url: "https://project2.example.com",
      description: "Project 2 Description",
      imageSrc: "/images/project2.png", // Path to your project image
    },
    // Add more projects here
  ];

  return (
    <Layout>
      <AnimatedContent />
      <ProjectTileContainer projects={projects} />
    </Layout>
  );
}
