import Header from "../components/Header";
import "../app/globals.css"
import AnimatedContent from "@/components/AnimatedContent";
import Footer from "@/components/Footer";

export default function HomePage(): JSX.Element {
    return (
      <>
    <Header />
    <main className="flex-grow"> <AnimatedContent/></main>
    <Footer/>
    </>
    );
  };
  