"use client";

export function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-[#0a1a33]/30 backdrop-blur-xl
        border-b border-white/10
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-semibold flex items-center gap-1">
          <span className="text-primary">&lt;</span>
          <span className="text-white">Remerson</span>
          <span className="text-primary">/&gt;</span>
        </div>

        {/* MENU */}
        <nav className="flex items-center gap-10 text-white font-medium">
          <a href="#hero" className="hover:text-primary transition">Home</a>
          <a href="#About" className="hover:text-primary transition">Sobre</a>
          <a href="#tecnology" className="hover:text-primary transition">Tecnologias</a>
          <a href="#projects" className="hover:text-primary transition">Projetos</a>
          <a href="#contact" className="hover:text-primary transition">Contatos</a>
        </nav>

      </div>
    </header>
  );
}
