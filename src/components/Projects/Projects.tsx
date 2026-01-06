import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className="w-full min-h-screen bg-bgLight flex flex-col items-center px-6 py-10 md:px-16" id="projects">
        <h2 className="text-4xl text-white font-semibold mb-14 mt-14">Projetos</h2>

        <h2 className="text-2xl text-primary font-bold w-full max-w-7xl mb-5">React</h2>
        <div className="flex flex-wrap w-full gap-6 max-w-7xl mb-10 ">
            <ProjectCard 
                image="/projects/todo-fullstack.jpg"
                title="Todo Fullstack com Login"
                description="Aplicação feita com React, css-module, typescript, Backend em Node."
                url="https://www.linkedin.com/posts/remersonmonteiro_react-typescript-jwt-activity-7121117858700439553--rut?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/pokedex.jpg"
                title="Pokedex Web"
                description="Pokedex feita com React, Styled Components, consumo de API."
                url="https://www.linkedin.com/posts/remersonmonteiro_frontend-react-javascript-activity-7230166421727567872-KeiC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/movie.jpg"
                title="Páginas de Filmes"
                description="Página de filmes feita com React, Styled Components, consumo de API TMDB."
                url="https://www.linkedin.com/posts/remersonmonteiro_react-css-javascript-activity-7234335881510219778-r7DK?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/insure.png"
                title="Insure Landing Page "
                description="Landing page feita com React, Styled Components."
                url="https://insure-blue.vercel.app/"
            />
             <ProjectCard 
                image="/projects/todo.jpg"
                title="Todo App"
                description="Todo App feito com React, Typescript, Css-module e Vite, desafio Rocketseat."
                url="https://desafio-react-ignite-to-do-list.vercel.app/"
            />
        </div>

        <h2 className="text-2xl text-primary font-bold w-full max-w-7xl my-5">React Native</h2>
        <div className="flex flex-wrap gap-6 w-full max-w-7xl mb-10">
            <ProjectCard 
                image="/projects/teams.png"
                title="Ignite Teams"
                description="Aplicativo para gerenciar turmas de times, feito em React Native e Expo"
                url="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7396616242217807872-jopf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/dailydiet.png"
                title="Daily Diet"
                description="Aplicativo para gerenciar refeições e acompanhar dieta, feito em React Native e Expo"
                url="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7399172937632743424-0llu?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/gym.png"
                title="Rocket Gym"
                description="Aplicativo para gerenciamento de treinos e exercícios físicos, feito em React Native, GlueStack e Expo"
                url="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7401705225805402112-_w_q?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/marketspace.png"
                title="Marketspace"
                description="Aplicativo de anúncios de produtos no estilo OLX, feito em React Native e Expo"
                url="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7414352602391568384-zaiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
           
            
        </div>

        <h2 className="text-2xl text-primary font-bold w-full max-w-7xl my-5">Html, Css e Javascript</h2>
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
        </div>

        
            
        
           

    </section>
  )
}
