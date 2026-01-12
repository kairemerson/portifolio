import { About } from "@src/components/About/About";
import Contact from "@src/components/Contact/Contact";
import { ExperienceSection } from "@src/components/experience-section";
import Footer from "@src/components/Footer/Footer";
import { Header } from "@src/components/header/Header";
import { Hero } from "@src/components/Hero/Hero";
import { ProjectsSection } from "@src/components/project-session";
import Projects from "@src/components/Projects/Projects";
import { TechnologiesSection } from "@src/components/technologies-section";
import Tecnology from "@src/components/Tecnology/Tecnology";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remerson Monteiro | Desenvolvedor Frontend React',
  description:
    'Portfólio de desenvolvedor frontend júnior especializado em React e Next.js.',
  openGraph: {
    title: 'Desenvolvedor Frontend React | Portfólio',
    description:
      'Projetos em React, Next.js, Tailwind e TypeScript.',
    url: 'https://seusite.com',
    siteName: 'Portfólio Remerson',
    images: ['/og.png'],
    locale: 'pt_BR',
    type: 'website',
  },
};


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-500 overflow-x-hidden">
      <Header/>
      <Hero/>
      <About/>
      {/* <Tecnology/> */}
      {/* <Projects/> */}
      <TechnologiesSection/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
