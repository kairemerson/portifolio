"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    <section className="w-full min-h-screen bg-bgDark flex items-center justify-center px-6 md:px-16" id="hero">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="text-xl text-white/60 mb-2" >
            Olá, meu nome é
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            <span className="text-primary">Remerson Monteiro</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            {displayed}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-white/70 max-w-xl mb-16 text-lg">
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

        <div className=" relative flex justify-center md:justify-end">
           <div
            className="
              absolute
              -top-20
              -right-20
              w-[600px] h-[600px]
              bg-blue-500
              animate-blob-solid
            "
          />
       
          <Image
            src="/perfil.jpg"
            width={400}
            height={450}
            alt="Illustration"
            className="relative rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
