// // 'use client';
// // import { useRef } from 'react';
// // import { motion, useScroll, useTransform } from 'framer-motion';

// // export const ParallaxSection = ({ children, index }: { children: React.ReactNode, index: number }) => {
// //   const containerRef = useRef<HTMLDivElement>(null);
  
// //   // Track scroll progress of this specific section
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ['start start', 'end start']
// //   });

// //   // Scale and fade the section as it moves out of view
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
// //   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

// //   return (
// //     <motion.div
// //       ref={containerRef}
// //       style={{
// //         position: 'sticky',
// //         top: 0,
// //         zIndex: index, // Higher index for later sections
// //         scale,
// //         opacity,
// //         willChange: 'transform',
// //       }}
// //       className="h-screen w-full overflow-hidden"
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// 'use client';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export const ParallaxSection = ({ children, index }: { children: React.ReactNode, index: number }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end start']
//   });

//   // Scale/Fade only occurs when we start moving to the next section
//   const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
//   const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

//   return (
//     <motion.div
//       ref={containerRef}
//       style={{
//         position: 'sticky',
//         top: 0,
//         zIndex: index,
//         scale,
//         opacity,
//       }}
//       className="h-screen w-full overflow-hidden bg-black" // Important: bg-black to prevent bleed-through
//     >
//       {/* Internal scrollable area for content taller than screen */}
//       <div className="h-full w-full overflow-y-auto scrollbar-hide">
//         {children}
//       </div>
//     </motion.div>
//   );
// };

'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxSection = ({ children, index, disableParallax = false }: { children: React.ReactNode, index: number, disableParallax?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Scale/Fade only occurs when we start moving to the next section
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // If parallax is disabled, render without motion effects
  if (disableParallax) {
    return (
      <div ref={containerRef} className="w-full overflow-hidden bg-black">
        <div className="h-full w-full">
          {children}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: index,
        scale,
        opacity,
      }}
      className="h-screen w-full overflow-hidden bg-black"
    >
      {/* Internal scrollable area for content taller than screen */}
      <div className="h-full w-full overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </motion.div>
  );
};