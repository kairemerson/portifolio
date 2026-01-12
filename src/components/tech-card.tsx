import Image from 'next/image';

interface TechCardProps {
  name: string;
  image: string;
  highlight?: boolean;
}

export function TechCard({ name, image, highlight }: TechCardProps) {
  return (
    <div
      className={`
        relative flex flex-col items-center justify-center
        rounded-2xl border bg-section p-6 text-center
        transition-all hover:-translate-y-1 hover:shadow-xl
        ${
          highlight
            ? 'border-primary shadow-primary/20'
            : 'border-border'
        }
      `}
    >
      {highlight && (
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          Principal
        </span>
      )}

      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="mb-4"
      />

      <strong className="text-foreground">{name}</strong>
    </div>
  );
}
