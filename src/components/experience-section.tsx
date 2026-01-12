export function ExperienceSection() {
  return (
    <section className="py-20">
      <h2 className="mb-8 text-3xl font-bold">Experiência & Stack</h2>

      <p className="max-w-2xl text-muted-foreground">
        Desenvolvedor Frontend focado em React e Next.js, com experiência
        na criação de interfaces modernas, responsivas e acessíveis.
        Busco minha primeira oportunidade profissional como desenvolvedor
        júnior, contribuindo com boas práticas e aprendizado contínuo.
      </p>

      <ul className="mt-6 flex flex-wrap gap-3">
        {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git', 'REST APIs'].map(
          tech => (
            <li
              key={tech}
              className="rounded-full border px-4 py-1 text-sm"
            >
              {tech}
            </li>
          )
        )}
      </ul>
    </section>
  );
}
