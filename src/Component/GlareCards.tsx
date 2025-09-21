import React from "react";
import clsx from "clsx";

interface GlareCardProps {
  children: React.ReactNode;
  width?: string; // e.g. "w-80"
  height?: string; // e.g. "h-60"
  glareColor?: string; // e.g. "from-pink-500 to-purple-500"
  glareOpacity?: string; // e.g. "opacity-40"
  borderRadius?: string; // e.g. "rounded-2xl"
  padding?: string; // e.g. "p-6"
  shadow?: string; // e.g. "shadow-xl"
}

const GlareCards: React.FC<GlareCardProps> = ({
  children,
  width = "w-80",
  height = "h-60",
  glareColor = "from-white/40 to-transparent",
  glareOpacity = "opacity-50",
  borderRadius = "rounded-xl",
  padding = "p-6",
  shadow = "shadow-lg",
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden group transition-transform duration-500 hover:scale-[1.02]",
        width,
        height,
        borderRadius,
        shadow
      )}
    >
      {/* Glare Effect */}
      <div
        className={clsx(
          "absolute inset-0 pointer-events-none bg-gradient-to-tr",
          glareColor,
          glareOpacity,
          "transition duration-500 group-hover:opacity-70"
        )}
      />

      {/* Content */}
      <div
        className={clsx(
          "relative z-10 flex items-center justify-center text-center",
          padding
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlareCards;
