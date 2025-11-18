"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
    image: string
    title: string
    description: string
    url: string
}

export default function ProjectCard({ image, title, description, url }: Props) {
    console.log(url);
    
  return (
    <Link
      href={url}
      target="_blank"
      className="
        w-[280px]
        group relative block rounded-xl overflow-hidden
        bg-[#0f1629] border border-transparent
        hover:border-cyan-400/60
        transition-all duration-300 
        hover:shadow-[0_0_18px_rgba(0,200,255,0.25)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute inset-0 rounded-xl blur-xl
          opacity-0 group-hover:opacity-100
          bg-cyan-400/10 transition-all duration-300
        "
      />

      {/* Thumbnail */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative p-4 z-10 bg-[#121b30]/80 backdrop-blur-sm">
        <h2 className="text-white text-lg font-semibold mb-1 group-hover:text-cyan-300 transition-all">
          {title}
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
