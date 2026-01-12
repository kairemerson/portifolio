'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp } from '@src/lib/motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      whileHover={{ y: -6 }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
    >
      {/* IMPORTANTE: relative + altura fixa */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-foreground text-lg font-semibold transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
