'use client';

import { TechCard } from '../components/tech-card';

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="w-full min-h-screen bg-background px-6 py-20 md:py-24 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-foreground">
          Tecnologias
        </h2>

        <p className="mb-16 text-center text-muted-foreground">
          Tecnologias que utilizo no dia a dia com foco em Frontend
        </p>

        {/* Frontend base */}
        <TechGroup title="Frontend Base">
          <TechCard name="HTML" image="/logo-html-5-1536.png" />
          <TechCard name="CSS" image="/logo-css-3-2048.png" />
          <TechCard name="JavaScript" image="/javascript-logo-1.png" />
          <TechCard name="TypeScript" image="/typescript.png" highlight/>
        </TechGroup>

        {/* Frameworks */}
        <TechGroup title="Frameworks">
          <TechCard name="React" image="/react.png" highlight />
          <TechCard name="Next.js" image="/next.jpg" highlight />
        </TechGroup>

        {/* Estilização */}
        <TechGroup title="Estilização">
          <TechCard name="Tailwind CSS" image="/tailwind-css.png" />
          <TechCard name="Styled Components" image="/styledcomponents.png" />
          <TechCard name="Sass" image="/sass.png" />
        </TechGroup>

        {/* Forms & State */}
        <TechGroup title="Formulários & State">
          <TechCard name="React Query" image="/react-query.png" />
          <TechCard name="React Hook Form" image="/reacthookform.png" />
          <TechCard name="Zod" image="/zod.webp" />
        </TechGroup>
      </div>
    </section>
  );
}

function TechGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <h3 className="mb-6 text-2xl font-semibold text-primary">
        {title}
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
