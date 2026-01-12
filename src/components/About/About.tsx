"use client";

import Image from "next/image";
import SlideOnScroll from "../SlideOnScroll/SlideOnScroll";

export function About() {
 

  return (
    <section className="bg-section py-10 md:py-20 min-h-screen px-6 md:px-0" id="about" >
        <div className="container mx-auto my-20 grid md:grid-cols-2 gap-10">
            <SlideOnScroll distance={40}>
              <div className="flex justify-center">
                  <Image
                    src="/illustration.webp"
                    width={550}
                    height={500}
                    alt="Illustration"
                    className="select-none md:h-[450px]"
                  />
              </div>
            </SlideOnScroll>

            <SlideOnScroll from="right" distance={40}>
              <div className="pt-10 text-center md:text-start">
                <h2 className="text-4xl text-foreground font-semibold mb-6">Um pouco sobre mim</h2>
                <p className="md:w-[85%] text-gray-400 text-lg leading-7 mb-3">
                    Sou formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Desenvolvimento Frontend. Há mais de três anos venho me dedicando intensamente à área de Frontend, impulsionado pela minha paixão por tecnologia e pela vontade de criar interfaces que entreguem valor real para as pessoas.
                </p>

                <p className="md:w-[85%] text-gray-400 text-lg leading-7 mb-3">
                  Tenho experiência e foco em React, além de grande interesse em construir soluções modernas, performáticas e voltadas à melhor experiência do usuário. Busco continuamente aprimorar minhas habilidades estudando tecnologias como TypeScript, Styled Components, Tailwind CSS, React Native, NextJS,  consumo de APIs REST, entre outras ferramentas que fortalecem meu ecossistema de desenvolvimento.
                </p>

                <p className="md:w-[85%] text-gray-400 text-lg leading-7">
                  Meu objetivo é somar em projetos que valorizem inovação, qualidade e boas práticas, contribuindo com código limpo, interfaces bem pensadas e uma mentalidade sempre orientada ao aprendizado e à evolução constante.
                </p>
              </div>

            </SlideOnScroll>
        </div>
    </section>

  );
}
