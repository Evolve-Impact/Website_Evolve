// "use client";

// import createGlobe from "cobe";
// import { useMotionValue, useSpring } from "motion/react";
// import { useEffect, useRef } from "react";
// import type { COBEOptions } from "cobe";
// import { cn } from "@/lib/utils";

// const MOVEMENT_DAMPING = 1400;

// const MARKERS = [
//   { location: [30.3753, 69.3451], size: 0.12, label: "Pakistan" },
//   { location: [4.2105, 101.9758], size: 0.12, label: "Malaysia" },
//   { location: [53.3331, -6.2489], size: 0.12, label: "Ireland" },
// ];

// const GLOBE_CONFIG: COBEOptions = {
//   width: 800,
//   height: 800,
//   onRender: () => {},
//   devicePixelRatio: 2,
//   phi: 0,
//   theta: 0.3,
//   dark: 1,
//   diffuse: 0.4,
//   mapSamples: 16000,
//   mapBrightness: 6,
//   baseColor:  [0.1, 0.15, 0.25],
//   markerColor:  [22 / 255, 37 / 255, 86 / 255],
//   glowColor: [0.8, 0.85, 1],
//   markers: MARKERS.map(({ location, size }) => ({ location, size })),
//   // onRender: () => {}, // we’ll override this in useEffect
// };

// export function Globe({
//   className,
//   config = GLOBE_CONFIG,
// }: {
//   className?: string;
//   config?: COBEOptions;
// }) {
//   let phi = 0;
//   let width = 0;
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const pointerInteracting = useRef<number | null>(null);
//   const pointerInteractionMovement = useRef(0);

//   const r = useMotionValue(0);
//   const rs = useSpring(r, {
//     mass: 1,
//     damping: 30,
//     stiffness: 100,
//   });

//   const updatePointerInteraction = (value: number | null) => {
//     pointerInteracting.current = value;
//     if (canvasRef.current) {
//       canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
//     }
//   };

//   const updateMovement = (clientX: number) => {
//     if (pointerInteracting.current !== null) {
//       const delta = clientX - pointerInteracting.current;
//       pointerInteractionMovement.current = delta;
//       r.set(r.get() + delta / MOVEMENT_DAMPING);
//     }
//   };

//   useEffect(() => {
//     const onResize = () => {
//       if (canvasRef.current) {
//         width = canvasRef.current.offsetWidth;
//       }
//     };

//     window.addEventListener("resize", onResize);
//     onResize();

//     const globe = createGlobe(canvasRef.current!, {
//       ...config,
//       width: width * 2,
//       height: width * 2,
//       onRender: (state) => {
//         if (!pointerInteracting.current) phi += 0.005;
//         state.phi = phi + rs.get();
//         state.width = width * 2;
//         state.height = width * 2;
//       },
//     });

//     setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
//     return () => {
//       globe.destroy();
//       window.removeEventListener("resize", onResize);
//     };
//   }, [rs, config]);

//   return (
//     <div
//       className={cn(
//         "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
//         className,
//       )}
//     >
//       <canvas
//         className={cn(
//           "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
//         )}
//         ref={canvasRef}
//         onPointerDown={(e) => {
//           pointerInteracting.current = e.clientX;
//           updatePointerInteraction(e.clientX);
//         }}
//         onPointerUp={() => updatePointerInteraction(null)}
//         onPointerOut={() => updatePointerInteraction(null)}
//         onMouseMove={(e) => updateMovement(e.clientX)}
//         onTouchMove={(e) =>
//           e.touches[0] && updateMovement(e.touches[0].clientX)
//         }
//       />
//     </div>
//   );
// }

"use client";

import createGlobe from "cobe";
import type { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
const MOVEMENT_DAMPING = 1400;

const MARKERS: any[] = [
  { location: [30.3753, 69.3451], size: 0.12, label: "Pakistan" },
  { location: [4.2105, 101.9758], size: 0.12, label: "Malaysia" },
  { location: [53.3331, -6.2489], size: 0.12, label: "Ireland" },
];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.1, 0.15, 0.25],
  markerColor: [22 / 255, 37 / 255, 86 / 255], // #162556
  glowColor: [0.8, 0.85, 1],
  markers: MARKERS.map(({ location, size, label }) => ({
    location,
    size,
    label,
  })),
  onRender: () => {}, // we’ll override this in useEffect
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.03;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;

        // Draw country names on top of markers
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.save();
          ctx.font = "14px sans-serif";
          ctx.fillStyle = "#ffffff"; // text color
          ctx.textAlign = "center";

          MARKERS.forEach((marker) => {
            const x = state.project(marker.location)[0] * state.width;
            const y = state.project(marker.location)[1] * state.height;
            ctx.fillText(marker.label, x, y - 10); // place text above marker
          });

          ctx.restore();
        }
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => (pointerInteracting.current = e.clientX)}
        onPointerUp={() => (pointerInteracting.current = null)}
        onPointerOut={() => (pointerInteracting.current = null)}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            r.set(r.get() + delta / MOVEMENT_DAMPING);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            r.set(r.get() + delta / MOVEMENT_DAMPING);
          }
        }}
      />
    </div>
  );
}
