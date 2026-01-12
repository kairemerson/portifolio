import { Variants } from 'framer-motion';


export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


export const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(12px)',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.2,
    },
  },
};

export const menuVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1], // ✅ cubic-bezier (SAFE)
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    y: 12,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
