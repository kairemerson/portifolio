"use client";

import { useEffect, useRef, useState } from "react";

interface SlideOnScrollProps {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  distance?: 8 | 16 | 24 | 32 | 40 | 48;
  delay?: number; // em ms
}

export default function SlideOnScroll({
  children,
  from = "left",
  distance = 16,
  delay = 0,
}: SlideOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  // -------------------------------
  // DIREÇÕES
  // -------------------------------
  const directions = {
    left: `-translate-x-${distance}`,
    right: `translate-x-${distance}`,
    top: `-translate-y-${distance}`,
    bottom: `translate-y-${distance}`,
  };

  const hiddenClass = `opacity-0 ${directions[from]}`;
  const visibleClass = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out transform
        ${visible ? visibleClass : hiddenClass}
      `}
    >
      {children}
    </div>
  );
}
