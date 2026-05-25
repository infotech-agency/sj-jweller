// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// interface FloatingLeavesProps {
//   count?: number;        // kitne leaves (default 18)
//   color?: string;        // petal color (default pink)
//   zIndex?: number;       // z-index (default 50)
//   className?: string;
// }

// /* ── Single petal SVG (organic leaf / sakura shape) ── */
// const PetalSVG = ({
//   size,
//   color,
//   opacity,
// }: {
//   size: number;
//   color: string;
//   opacity: number;
// }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 40 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={{ opacity, display: 'block' }}
//   >
//     {/* Organic teardrop / leaf shape */}
//     <path
//       d="M20 4 C28 4, 36 12, 36 22 C36 30, 28 38, 20 38 C12 38, 6 32, 6 22 C6 12, 12 4, 20 4Z"
//       fill={color}
//       fillOpacity="0.82"
//     />
//     {/* Centre vein */}
//     <path
//       d="M20 8 Q21 22 20 36"
//       stroke="white"
//       strokeWidth="0.8"
//       strokeOpacity="0.35"
//       fill="none"
//     />
//     {/* Side vein left */}
//     <path
//       d="M20 14 Q14 20 10 28"
//       stroke="white"
//       strokeWidth="0.5"
//       strokeOpacity="0.25"
//       fill="none"
//     />
//     {/* Side vein right */}
//     <path
//       d="M20 14 Q26 20 30 28"
//       stroke="white"
//       strokeWidth="0.5"
//       strokeOpacity="0.25"
//       fill="none"
//     />
//   </svg>
// );

// /* ── Seeded random (consistent between renders) ── */
// const seededRand = (seed: number) => {
//   const x = Math.sin(seed + 1) * 10000;
//   return x - Math.floor(x);
// };

// export const FloatingLeaves: React.FC<FloatingLeavesProps> = ({
//   count = 18,
//   color = '#E8A0B0',
//   zIndex = 50,
//   className = '',
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   /* Build leaf data once */
//   const leaves = Array.from({ length: count }, (_, i) => ({
//     id: i,
//     x: seededRand(i * 3) * 100,          // start x %
//     size: 14 + seededRand(i * 7) * 18,   // 14–32px
//     opacity: 0.45 + seededRand(i * 11) * 0.45,
//     delay: seededRand(i * 5) * 6,        // 0–6s stagger
//     dur: 6 + seededRand(i * 13) * 6,     // 6–12s fall
//     spin: (seededRand(i * 17) > 0.5 ? 1 : -1) * (180 + seededRand(i * 19) * 360),
//     swing: (seededRand(i * 23) - 0.5) * 120, // horizontal drift px
//   }));

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const els = containerRef.current.querySelectorAll<HTMLElement>('.leaf');

//     const animations: gsap.core.Tween[] = [];

//     els.forEach((el, i) => {
//       const leaf = leaves[i];

//       /* Reset to top */
//       gsap.set(el, {
//         y: -60,
//         x: 0,
//         rotation: seededRand(i * 29) * 360,
//         opacity: 0,
//       });

//       /* Infinite fall loop */
//       const anim = gsap.to(el, {
//         y: '110vh',
//         x: leaf.swing,
//         rotation: `+=${leaf.spin}`,
//         opacity: leaf.opacity,
//         duration: leaf.dur,
//         delay: leaf.delay,
//         ease: 'none',
//         repeat: -1,
//         repeatDelay: seededRand(i * 31) * 3,
//         onRepeat: () => {
//           /* Re-randomize x position on each loop */
//           gsap.set(el, {
//             x: (seededRand(i + performance.now() * 0.0001) - 0.5) * 80,
//             left: `${seededRand(i + performance.now() * 0.00013) * 100}%`,
//             opacity: 0,
//           });
//         },
//       });

//       /* Subtle sideways sway on top of the fall */
//       gsap.to(el, {
//         x: `+=${(seededRand(i * 37) - 0.5) * 60}`,
//         duration: leaf.dur * 0.4,
//         ease: 'sine.inOut',
//         yoyo: true,
//         repeat: -1,
//         delay: leaf.delay,
//       });

//       animations.push(anim);
//     });

//     return () => animations.forEach((a) => a.kill());
//   }, []);  // eslint-disable-line

//   return (
//     <div
//       ref={containerRef}
//       className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
//       style={{ zIndex }}
//       aria-hidden="true"
//     >
//       {leaves.map((leaf) => (
//         <div
//           key={leaf.id}
//           className="leaf absolute"
//           style={{
//             left: `${leaf.x}%`,
//             top: 0,
//             width: leaf.size,
//             height: leaf.size,
//             willChange: 'transform, opacity',
//           }}
//         >
//           <PetalSVG
//             size={leaf.size}
//             color={color}
//             opacity={1}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloatingLeaves;

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FloatingLeavesProps {
  count?: number;        // Number of leaves (default 25 for more density)
  color?: string;        // Petal color (default a more natural pink/red)
  zIndex?: number;       // z-index (default 50)
  className?: string;
}

/* ── Single petal SVG (more detailed organic leaf shape) ── */
const PetalSVG = ({
  size,
  color,
  opacity,
}: {
  size: number;
  color: string;
  opacity: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity, display: 'block' }}
  >
    {/* Organic teardrop / leaf shape with subtle shading for depth */}
    <path
      d="M20 4 C28 4, 36 12, 36 22 C36 30, 28 38, 20 38 C12 38, 6 32, 6 22 C6 12, 12 4, 20 4Z"
      fill={color}
      fillOpacity="0.9"
    />
    {/* Inner highlight for realism */}
    <path
      d="M20 6 Q25 15 20 25 Q15 15 20 6Z"
      fill="white"
      fillOpacity="0.15"
    />
    {/* Centre vein */}
    <path
      d="M20 8 Q21 22 20 36"
      stroke="white"
      strokeWidth="0.8"
      strokeOpacity="0.35"
      fill="none"
    />
    {/* Side vein left */}
    <path
      d="M20 14 Q14 20 10 28"
      stroke="white"
      strokeWidth="0.5"
      strokeOpacity="0.25"
      fill="none"
    />
    {/* Side vein right */}
    <path
      d="M20 14 Q26 20 30 28"
      stroke="white"
      strokeWidth="0.5"
      strokeOpacity="0.25"
      fill="none"
    />
  </svg>
);

/* ── Seeded random (consistent between renders) ── */
const seededRand = (seed: number) => {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
};

export const FloatingLeaves: React.FC<FloatingLeavesProps> = ({
  count = 25, // Increased count for a denser, more premium feel
  color = '#D87093', // A slightly richer, more natural pink/red
  zIndex = 50,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Build leaf data once */
  const leaves = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRand(i * 3) * 100,          // start x %
    size: 16 + seededRand(i * 7) * 24,   // 16–40px for more visual variety
    opacity: 0.5 + seededRand(i * 11) * 0.5, // Wider opacity range
    delay: seededRand(i * 5) * 8,        // 0–8s stagger for more natural flow
    dur: 8 + seededRand(i * 13) * 8,     // 8–16s fall duration for slower, more graceful fall
    spin: (seededRand(i * 17) > 0.5 ? 1 : -1) * (360 + seededRand(i * 19) * 720), // More spin variation
    swing: (seededRand(i * 23) - 0.5) * 180, // Increased horizontal drift px
    scale: 0.8 + seededRand(i * 27) * 0.4, // Add scale variation
  }));

  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll<HTMLElement>('.leaf');

    const animations: gsap.core.Tween[] = [];

    els.forEach((el, i) => {
      const leaf = leaves[i];

      /* Reset to top with initial scale and rotation */
      gsap.set(el, {
        y: -60,
        x: 0,
        rotation: seededRand(i * 29) * 360,
        scale: leaf.scale,
        opacity: 0,
      });

      /* Infinite fall loop with more realistic easing */
      const anim = gsap.to(el, {
        y: '110vh',
        x: leaf.swing,
        rotation: `+=${leaf.spin}`,
        opacity: leaf.opacity,
        duration: leaf.dur,
        delay: leaf.delay,
        ease: 'power1.inOut', // More natural easing for fall
        repeat: -1,
        repeatDelay: seededRand(i * 31) * 4, // Increased repeat delay variation
        onRepeat: () => {
          /* Re-randomize x position and rotation on each loop for variety */
          gsap.set(el, {
            x: (seededRand(i + performance.now() * 0.0001) - 0.5) * 100, // Wider x reset range
            left: `${seededRand(i + performance.now() * 0.00013) * 100}%`,
            rotation: seededRand(i * 33) * 360, // New random rotation on repeat
            opacity: 0,
          });
        },
      });

      /* More pronounced and varied sideways sway on top of the fall */
      gsap.to(el, {
        x: `+=${(seededRand(i * 37) - 0.5) * 100}`, // Increased sway magnitude
        duration: leaf.dur * 0.6, // Longer sway duration
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: leaf.delay,
      });

      animations.push(anim);
    });

    return () => animations.forEach((a) => a.kill());
  }, [count, color, zIndex, className, leaves]); // Added dependencies for useEffect

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex }}
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf absolute"
          style={{
            left: `${leaf.x}%`,
            top: 0,
            width: leaf.size,
            height: leaf.size,
            willChange: 'transform, opacity',
          }}
        >
          <PetalSVG
            size={leaf.size}
            color={color}
            opacity={1} // Opacity controlled by GSAP animation
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;
