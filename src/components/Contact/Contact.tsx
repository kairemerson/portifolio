"use client";

import Link from "next/link";
import {  GithubLogoIcon, LinkedinLogoIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section className="w-full min-h-[800px] py-20 bg-bgDark flex flex-col justify-center items-center text-center px-4" id="contact">
      <h2 className="text-4xl font-semibold text-white">Entre em contato</h2>

      <p className="text-gray-300 max-w-xl mt-4">
        Abaixo tem os links de algumas redes sociais, e o link do whatsapp,
        mande uma mensagem que assim que possível retornarei.
      </p>

      <div className="flex items-center gap-8 mt-10">
        <IconLink href="https://github.com/kairemerson" >
          <GithubLogoIcon size={34} weight="duotone"/>
        </IconLink>

        <IconLink href="https://www.linkedin.com/in/remersonmonteiro/">
          <LinkedinLogoIcon size={34} weight="duotone" />
          
        </IconLink>

        <IconLink href="https://www.instagram.com/remersonmonteiro/">
          <InstagramLogoIcon size={34} weight="duotone" />
        </IconLink>

        <IconLink href="https://api.whatsapp.com/send?phone=5575991746972&text=Deixe%20sua%20mensagem%20assim%20que%20poss%C3%ADvel%20responderemos!">
          <WhatsappLogoIcon size={34} weight="duotone" />
        </IconLink>
      </div>
    </section>
  );
}

/* Componente para aplicar hover e animação */
function IconLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        text-white/80 hover:text-primary transition
        hover:scale-110 duration-200 ease-out
      "
    >
      {children}
    </Link>
  );
}
