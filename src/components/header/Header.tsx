'use client';

import { useEffect, useState } from 'react';
import { ListIcon, XIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  overlayVariants,
  menuVariants,
  itemVariants,
} from '@src/lib/motion';


export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  function toggleTheme() {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <div className="text-xl font-semibold text-foreground">
            <span className="text-primary">&lt;</span>
            Remerson
            <span className="text-primary">/&gt;</span>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-10 font-medium md:flex text-foreground">
            <a href="#hero" className='hover:text-primary duration-150'>Home</a>
            <a href="#about" className='hover:text-primary duration-150'>Sobre</a>
            <a href="#technologies" className='hover:text-primary duration-150'>Tecnologias</a>
            <a href="#projects" className='hover:text-primary duration-150'>Projetos</a>
            <a href="#contact" className='hover:text-primary duration-150'>Contato</a>

            <button onClick={toggleTheme}>
              {dark ? <SunIcon size={22} className='hover:text-primary duration-150'/> : <MoonIcon size={22} className='hover:text-primary duration-150'/>}
            </button>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-foreground"
          >
            <ListIcon size={28} />
          </button>
        </div>
      </header>

      {/* MENU MOBILE (FORA DO HEADER) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute right-6 top-6 text-foreground"
              onClick={() => setOpen(false)}
            >
              <XIcon size={28} />
            </button>

            <motion.nav
              className="flex h-full flex-col items-center justify-center gap-10 text-2xl font-medium text-foreground"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {[
                ['Home', '#hero'],
                ['Sobre', '#about'],
                ['Tecnologias', '#technologies'],
                ['Projetos', '#projects'],
                ['Contato', '#contact'],
              ].map(([label, href]) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={itemVariants}
                  onClick={() => setOpen(false)}
                  className='hover:text-primary transition-colors'
                >
                  {label}
                </motion.a>
              ))}

              <motion.button
                variants={itemVariants}
                onClick={toggleTheme}
                className="mt-8 flex items-center gap-2"
              >
                {dark ? <SunIcon size={22} /> : <MoonIcon size={22} />}
                Tema
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
