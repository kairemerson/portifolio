import { About } from "@src/components/About/About";
import Contact from "@src/components/Contact/Contact";
import Footer from "@src/components/Footer/Footer";
import { Header } from "@src/components/header/Header";
import { Hero } from "@src/components/Hero/Hero";
import Projects from "@src/components/Projects/Projects";
import Tecnology from "@src/components/Tecnology/Tecnology";

export default function Home() {
  return (
    <div className="h-screen bg-gray-500">
      <Header/>
      <Hero/>
      <About/>
      <Tecnology/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
