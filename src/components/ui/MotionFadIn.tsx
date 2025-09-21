// src/components/ui/MotionFadeIn.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function MotionFadeIn({ children, delay = 0 }: MotionFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
