'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@src/lib/motion';
import { ProjectCard } from './project-card';

function ProjectGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-7xl mb-16"
    >
      <h3 className="text-2xl text-primary font-bold mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="w-full min-h-screen bg-section flex flex-col items-center px-6 pb-20 md:px-16" id="projects">
        <h2 className="text-foreground mt-10 md:mt-24 text-3xl font-bold">Projetos</h2>
          
          <ProjectGroup title='React'>
            <ProjectCard 
                image="/projects/todo-fullstack.jpg"
                title="Todo Fullstack com Login"
                description="Aplicação feita com React, css-module, typescript, Backend em Node."
                link="https://www.linkedin.com/posts/remersonmonteiro_react-typescript-jwt-activity-7121117858700439553--rut?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/pokedex.jpg"
                title="Pokedex Web"
                description="Pokedex feita com React, Styled Components, consumo de API."
                link="https://www.linkedin.com/posts/remersonmonteiro_frontend-react-javascript-activity-7230166421727567872-KeiC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/movie.jpg"
                title="Páginas de Filmes"
                description="Página de filmes feita com React, Styled Components, consumo de API TMDB."
                link="https://www.linkedin.com/posts/remersonmonteiro_react-css-javascript-activity-7234335881510219778-r7DK?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/insure.png"
                title="Insure Landing Page "
                description="Landing page feita com React, Styled Components."
                link="https://insure-blue.vercel.app/"
            />
              <ProjectCard 
                image="/projects/todo.jpg"
                title="Todo App"
                description="Todo App feito com React, Typescript, Css-module e Vite, desafio Rocketseat."
                link="https://desafio-react-ignite-to-do-list.vercel.app/"
            />

          </ProjectGroup>

          <ProjectGroup title='React Native'>
            <ProjectCard 
                image="/projects/teams.png"
                title="Ignite Teams"
                description="Aplicativo para gerenciar turmas de times, feito em React Native e Expo"
                link="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7396616242217807872-jopf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/dailydiet.png"
                title="Daily Diet"
                description="Aplicativo para gerenciar refeições e acompanhar dieta, feito em React Native e Expo"
                link="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7399172937632743424-0llu?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/gym.png"
                title="Rocket Gym"
                description="Aplicativo para gerenciamento de treinos e exercícios físicos, feito em React Native, GlueStack e Expo"
                link="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7401705225805402112-_w_q?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
            <ProjectCard 
                image="/projects/marketspace.png"
                title="Marketspace"
                description="Aplicativo de anúncios de produtos no estilo OLX, feito em React Native e Expo"
                link="https://www.linkedin.com/posts/remersonmonteiro_react-reactnative-expo-activity-7414352602391568384-zaiu?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs7WUAB_j1c6JbXQnWOeUad8CEdhnoGNkM"
            />
          </ProjectGroup>
      
          <ProjectGroup title='Html, Css e Javascript'>
            <ProjectCard 
                image="/projects/acorddion.jpg"
                title="Accordion, FAQ"
                description="Página de FAQ, criada usando html, css e javascript"
                link="https://faq-accordion-card-nine-theta.vercel.app/"
            />
            <ProjectCard 
                image="/projects/intro-component.jpg"
                title="Página de Registro"
                description="Página de registro feita com Html e Css e Javascript, com verificação dos dados."
                link="https://intro-component-with-signup-form-master-steel-gamma.vercel.app/"
            />
            <ProjectCard 
                image="/projects/pricing.jpg"
                title="Página de Preços"
                description="Página de Preços feita com Html e Css e Javascript, com botão toggle."
                link="https://pricing-component-with-toggle-two-zeta.vercel.app/"
            />
            <ProjectCard 
                image="/projects/fylo-dark-theme.jpg"
                title="Fylo Landing Page "
                description="Landing page feita com Html e Css e Javascript."
                link="https://fylo-dark-theme-landing-page-lake.vercel.app/"
            />
            <ProjectCard 
                image="/projects/huddlelanding.jpg"
                title="Hunddle Landing Page "
                description="Landing page feita com Html e Css e Javascript."
                link="https://huddle-landing-page-with-alternating-feature-rho.vercel.app/"
            />
            <ProjectCard 
                image="/projects/fylo-two-columns.jpg"
                title="Landing Page "
                description="Landing page feita com Html e Css e Javascript."
                link="https://fylo-landing-page-with-two-column-layout-khaki.vercel.app/"
            />
            <ProjectCard 
                image="/projects/blogr.jpg"
                title="Blogr Landing Page"
                description="Landing page feita com Html e Css e Javascript."
                link="https://blogr-landing-page-main-zeta.vercel.app/"
            />
          </ProjectGroup>

    </section>
  );
}
