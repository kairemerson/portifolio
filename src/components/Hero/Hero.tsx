"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SlideOnScroll from "../SlideOnScroll/SlideOnScroll";

export function Hero() {
  const text = "Desenvolvedor Frontend";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-background flex items-center justify-center py-10 px-6 md:px-16" id="hero">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(_var(--primary))_0%,_transparent_70%)] opacity-20" />


        <SlideOnScroll from="left" distance={32}>
          <div>
           
            <p className="text-xl text-muted-foreground mb-2 mt-16 md:mt-0" >
              Olá, meu nome é
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
              <span className="text-primary">Remerson Monteiro</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-8">
              {displayed}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-muted-foreground max-w-xl mb-10 md:mb-16 text-lg">
              Eu sou um Desenvolvedor Frontend, especializado na criação e desenvolvimento
              de interfaces de usuário, aplicações e páginas web!
            </p>

            <a
              href="/Remerson do Nascimento Monteiro frontend.pdf"
              target="_blank"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
              >
              Baixar currículo
            </a>
          </div>
        </SlideOnScroll>

        <SlideOnScroll from="right" distance={32}>
          <div className=" relative flex justify-center md:justify-end">
            <div
              className="
                absolute
                -top-20
                -right-20
                w-[600px] h-[600px]
                bg-blue-500
                animate-blob-solid
                hidden
                md:block
              "
            />
        
            <Image
              src="/perfil.jpg"
              width={380}
              height={400}
              alt="Illustration"
              className="relative rounded-2xl object-cover shadow-xl mt-2 md:mt-6 md:mr-10"
            />
          </div>

        </SlideOnScroll>
      </div>
    </section>
  );
}
