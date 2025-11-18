import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full min-h-screen bg-bgLight flex flex-col items-center px-6 py-10 md:px-16" id="projects">
        <h2 className="text-4xl text-white font-semibold mb-24 mt-14">Projetos</h2>

        <div className="flex flex-wrap gap-6 max-w-7xl ">

            <ProjectCard 
                image="/projects/acorddion.jpg"
                title="Accordion, FAQ"
                description="Página de FAQ, criada usando html, css e javascript"
                url="https://faq-accordion-card-nine-theta.vercel.app/"
            />
            <ProjectCard 
                image="/projects/intro-component.jpg"
                title="Página de Registro"
                description="Página de registro feita com Html e Css e Javascript, com verificação dos dados."
                url="https://intro-component-with-signup-form-master-steel-gamma.vercel.app/"
            />
            <ProjectCard 
                image="/projects/pricing.jpg"
                title="Página de Preços"
                description="Página de Preços feita com Html e Css e Javascript, com botão toggle."
                url="https://pricing-component-with-toggle-two-zeta.vercel.app/"
            />
            <ProjectCard 
                image="/projects/fylo-dark-theme.jpg"
                title="Fylo Landing Page "
                description="Landing page feita com Html e Css e Javascript."
                url="https://fylo-dark-theme-landing-page-lake.vercel.app/"
            />
            <ProjectCard 
                image="/projects/huddlelanding.jpg"
                title="Hunddle Landing Page "
                description="Landing page feita com Html e Css e Javascript."
                url="https://huddle-landing-page-with-alternating-feature-rho.vercel.app/"
            />
            <ProjectCard 
                image="/projects/fylo-two-columns.jpg"
                title="Landing Page "
                description="Landing page feita com Html e Css e Javascript."
                url="https://fylo-landing-page-with-two-column-layout-khaki.vercel.app/"
            />
            <ProjectCard 
                image="/projects/blogr.jpg"
                title="Blogr Landing Page"
                description="Landing page feita com Html e Css e Javascript."
                url="https://blogr-landing-page-main-zeta.vercel.app/"
            />
            <ProjectCard 
                image="/projects/insure.png"
                title="Insure Landing Page "
                description="Landing page feita com React, Styled Components."
                url="https://insure-blue.vercel.app/"
            />
        
           
        </div>

    </section>
  )
}
