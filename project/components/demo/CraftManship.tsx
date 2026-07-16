// 'use client';

// import React from 'react';

// interface BackgroundImageProps {
//   imageUrl?: string;
//   className?: string;
//   children?: React.ReactNode;
// }

// export const CraftBg: React.FC<BackgroundImageProps> = ({
//   imageUrl = '/assets/jalwa.png',
//   className = '',
//   children,
// }) => {
//   return (
//     <div 
//       className={`w-full h-screen bg-cover bg-center bg-no-repeat ${className}`}
//       style={{ backgroundImage: `url(${imageUrl})` }}
//     >
//       {children}
//     </div>
//   );
// };

// export default CraftBg;

// 'use client';

// import React from 'react';
// import { motion, useInView } from 'framer-motion';

// interface CraftCardProps {
//   title: string;
//   description: string;
//   iconUrl?: string;
//   delay?: number;
// }

// const CraftCard: React.FC<CraftCardProps> = ({ title, description, iconUrl, delay = 0 }) => {
//   const ref = React.useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay }}
//       whileHover={{ y: -8 }}
//       className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 
//                  border border-amber-500/30 hover:border-amber-500/60 
//                  transition-all duration-500 cursor-pointer
//                  shadow-lg hover:shadow-2xl hover:shadow-amber-500/20"
//     >
//       {/* Corner decorations */}
//       <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/50 group-hover:border-amber-500 transition-all duration-300" />
//       <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/50 group-hover:border-amber-500 transition-all duration-300" />
//       <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/50 group-hover:border-amber-500 transition-all duration-300" />
//       <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/50 group-hover:border-amber-500 transition-all duration-300" />

//       {/* Icon */}
//       {iconUrl && (
//         <div className="flex justify-center mb-6">
//           <div className="relative">
//             <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//             <img 
//               src={iconUrl} 
//               alt={title}
//               className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 
//                          transition-transform duration-500 group-hover:scale-110 
//                          group-hover:rotate-3"
//             />
//           </div>
//         </div>
//       )}

//       {/* Title */}
//       <h3 className="text-center text-amber-400 text-xl md:text-2xl font-serif mb-3 
//                      tracking-wide group-hover:tracking-wider transition-all duration-300">
//         {title}
//       </h3>

//       {/* Divider */}
//       <div className="w-12 h-px bg-amber-500/50 mx-auto my-4 group-hover:w-24 transition-all duration-500" />

//       {/* Description */}
//       <p className="text-white/80 text-sm md:text-base text-center leading-relaxed 
//                     font-light group-hover:text-white transition-colors duration-300">
//         {description}
//       </p>

//       {/* Hover glow effect */}
//       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
//                       transition-opacity duration-500 pointer-events-none
//                       bg-gradient-to-t from-amber-500/5 via-transparent to-transparent" />
//     </motion.div>
//   );
// };

// interface CraftBgProps {
//   imageUrl?: string;
//   className?: string;
//   children?: React.ReactNode;
// }

// export const CraftBg: React.FC<CraftBgProps> = ({
//   imageUrl = '/assets/jalwa.png',
//   className = '',
//   children,
// }) => {
//   const headingRef = React.useRef(null);
//   const headingInView = useInView(headingRef, { once: true });

//   const craftData = [
//     {
//       id: 1,
//       title: "EXQUISITE MATERIALS",
//       description: "Only the finest gemstones and metals are chosen for their purity and brilliance.",
//       iconUrl: "/assets/icon_diamond.png" // Replace with your actual icon path
//     },
//     {
//       id: 2,
//       title: "MASTER ARTISANS",
//       description: "Handcrafted by skilled artisans with generations of expertise and passion.",
//       iconUrl: "/assets/icon_shield.png" // Replace with your actual icon path
//     },
//     {
//       id: 3,
//       title: "TIME HONORED TECHNIQUES",
//       description: "Blending traditional techniques with modern innovation for timeless beauty.",
//       iconUrl: "/assets/icon_hands.png" // Replace with your actual icon path
//     },
//     {
//       id: 4,
//       title: "QUALITY ASSURED",
//       description: "Every piece passes through rigorous quality checks to ensure perfection.",
//       iconUrl: "/assets/icon_mandala.png" // Replace with your actual icon path
//     }
//   ];

//   return (
//     <div 
//       className={`relative w-full min-h-screen bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden ${className}`}
//       style={{ backgroundImage: `url(${imageUrl})` }}
//     >
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/40" />
      
//       {/* Content container */}
//       <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        
//         {/* Header Section */}
//         <motion.div 
//           ref={headingRef}
//           initial={{ opacity: 0, y: -30 }}
//           animate={headingInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16 md:mb-20"
//         >
//           {/* Ornamental line top */}
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
//             <div className="w-2 h-2 rotate-45 bg-amber-500" />
//             <div className="w-3 h-3 rotate-45 bg-amber-400" />
//             <div className="w-2 h-2 rotate-45 bg-amber-500" />
//             <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
//           </div>

//           {/* Main Title */}
//           <h1 className="text-amber-400 text-3xl md:text-7xl lg:text-5xl font-serif 
//                          tracking-wider mb-4 shimmer-text"
//               style={{
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                 fontFamily: "'Cormorant Garamond', serif"
//               }}>
//             THE CRAFTSMANSHIP
//           </h1>

//           {/* Subtitle */}
//           <p className="text-amber-300/80 text-sm md:text-base tracking-[0.3em] uppercase 
//                         font-light mt-4">
//             Where Art Meets Excellence
//           </p>

//           {/* Ornamental line bottom */}
//           <div className="flex items-center justify-center gap-4 mt-6">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
//             <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
//             <div className="w-2 h-2 rotate-45 bg-amber-400" />
//             <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
//             <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
//           </div>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {craftData.map((item, index) => (
//             <CraftCard
//               key={item.id}
//               title={item.title}
//               description={item.description}
//               iconUrl={item.iconUrl}
//               delay={index * 0.15}
//             />
//           ))}
//         </div>

//         {/* Decorative bottom element */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={headingInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex justify-center mt-16"
//         >
//           <div className="flex gap-2">
//             {[...Array(3)].map((_, i) => (
//               <div
//                 key={i}
//                 className="w-1 h-8 rotate-45 bg-amber-500/40"
//                 style={{ animationDelay: `${i * 0.2}s` }}
//               />
//             ))}
//           </div>
//         </motion.div>

//         {children}
//       </div>
//     </div>
//   );
// };

// // Add this style to your global CSS or in a style tag
// const styles = `
//   @keyframes shimmer {
//     0% { background-position: -200% center; }
//     100% { background-position: 200% center; }
//   }
  
//   .shimmer-text {
//     background: linear-gradient(90deg, #FFD700 0%, #FFA500 40%, #FFD700 50%, #FFA500 60%, #FFD700 100%);
//     background-size: 200% auto;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     animation: shimmer 3s linear infinite;
//   }
// `;

// // Inject styles
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }

// export default CraftBg;

'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Inline SVG Icons (no external URLs) ──────────────────────────
const DiamondSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <polygon points="32,4 58,22 48,58 16,58 6,22" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <polygon points="32,4 6,22 16,58 48,58 58,22" stroke="#d4af37" strokeWidth="0.5" fill="rgba(212,175,55,0.07)" strokeLinejoin="round"/>
    <line x1="6" y1="22" x2="58" y2="22" stroke="#d4af37" strokeWidth="1" opacity="0.6"/>
    <line x1="32" y1="4" x2="32" y2="22" stroke="#d4af37" strokeWidth="1" opacity="0.7"/>
    <line x1="6" y1="22" x2="32" y2="58" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
    <line x1="58" y1="22" x2="32" y2="58" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

const MandalaWheelSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="26" stroke="#d4af37" strokeWidth="1.2" fill="none"/>
    <circle cx="32" cy="32" r="18" stroke="#d4af37" strokeWidth="0.7" fill="none" opacity="0.55"/>
    <circle cx="32" cy="32" r="9"  stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.4"/>
    <circle cx="32" cy="32" r="2.5" fill="#d4af37" opacity="0.85"/>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => {
      const x1 = 32 + 10 * Math.cos((a * Math.PI) / 180);
      const y1 = 32 + 10 * Math.sin((a * Math.PI) / 180);
      const x2 = 32 + 17 * Math.cos((a * Math.PI) / 180);
      const y2 = 32 + 17 * Math.sin((a * Math.PI) / 180);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d4af37" strokeWidth="0.8" opacity="0.5"/>;
    })}
    {[0,45,90,135,180,225,270,315].map((a, i) => {
      const x = 32 + 26 * Math.cos((a * Math.PI) / 180);
      const y = 32 + 26 * Math.sin((a * Math.PI) / 180);
      return <circle key={i} cx={x} cy={y} r="1.2" fill="#d4af37" opacity="0.6"/>;
    })}
  </svg>
);

const ArchTemplateSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <rect x="10" y="30" width="44" height="26" rx="1" stroke="#d4af37" strokeWidth="1.4" fill="none"/>
    <path d="M18 30 V20 Q32 7 46 20 V30" stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
    <line x1="32" y1="30" x2="32" y2="56" stroke="#d4af37" strokeWidth="0.8" opacity="0.5"/>
    <line x1="10" y1="42" x2="54" y2="42" stroke="#d4af37" strokeWidth="0.6" opacity="0.4"/>
    <circle cx="32" cy="18" r="3" stroke="#d4af37" strokeWidth="1" fill="rgba(212,175,55,0.18)"/>
    <rect x="26" y="42" width="12" height="14" stroke="#d4af37" strokeWidth="0.8" fill="none" opacity="0.55"/>
  </svg>
);

const StarSealSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <path d="M32 6 L38 20 L54 22 L43 33 L46 49 L32 42 L18 49 L21 33 L10 22 L26 20 Z"
      stroke="#d4af37" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
    <path d="M32 12 L36.5 22 L48 23.5 L40 31 L41.5 43 L32 38 L22.5 43 L24 31 L16 23.5 L27.5 22 Z"
      stroke="#d4af37" strokeWidth="0.5" fill="rgba(212,175,55,0.06)" strokeLinejoin="round"/>
    <path d="M24 32 L29.5 38 L41 25" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Gold shimmer CSS ──────────────────────────────────────────────
const SHIMMER_STYLE = `
  @keyframes gold-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .gold-shimmer-text {
    background: linear-gradient(90deg, #c9973a 0%, #f0d080 30%, #fffacd 50%, #f0d080 70%, #c9973a 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gold-shimmer 4s linear infinite;
  }
`;
if (typeof document !== 'undefined') {
  if (!document.getElementById('craft-bg-styles')) {
    const el = document.createElement('style');
    el.id = 'craft-bg-styles';
    el.textContent = SHIMMER_STYLE;
    document.head.appendChild(el);
  }
}

// ── Pillar data ───────────────────────────────────────────────────
const PILLARS = [
  {
    Icon: DiamondSVG,
    title: 'FINEST MATERIALS',
    description: 'BIS-hallmarked 22kt & 24kt gold, GIA-certified diamonds, and ethically sourced precious gemstones — chosen only for their purity and brilliance.',
  },
  {
    Icon: MandalaWheelSVG,
    title: 'MASTER KARIGARS',
    description: "Every creation is handcrafted by artisans whose expertise spans three generations of India's most revered jewellery tradition.",
  },
  {
    Icon: ArchTemplateSVG,
    title: 'TIMELESS HERITAGE',
    description: 'Ancient kundan, meenakari and filigree techniques blend with refined modern sensibility to produce jewels that outlast time.',
  },
  {
    Icon: StarSealSVG,
    title: 'QUALITY ASSURED',
    description: 'A rigorous seven-stage quality inspection and our lifetime authenticity certificate ensure every piece is flawless before it reaches you.',
  },
];

// ── CraftCard ─────────────────────────────────────────────────────
interface CraftCardProps {
  Icon: React.FC;
  title: string;
  description: string;
  delay?: number;
}

const CraftCard: React.FC<CraftCardProps> = ({ Icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative flex flex-col items-center text-center px-6 py-8 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212,175,55,0.22)',
      }}
    >
      {/* Corner accents */}
      <div className="absolute top-3 left-3  w-5 h-5 border-t border-l border-amber-500/40 group-hover:border-amber-400/80 transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-amber-500/40 group-hover:border-amber-400/80 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3  w-5 h-5 border-b border-l border-amber-500/40 group-hover:border-amber-400/80 transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-amber-500/40 group-hover:border-amber-400/80 transition-colors duration-300" />

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

      {/* Icon */}
      <div className="relative mb-5 w-14 h-14 md:w-16 md:h-16">
        <div className="absolute inset-0 rounded-full blur-xl bg-amber-500/15 group-hover:bg-amber-500/28 transition-all duration-500" />
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          <Icon />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[10px] md:text-[11px] tracking-[0.28em] text-amber-400 mb-3 uppercase group-hover:tracking-[0.32em] transition-all duration-300"
        style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}>
        {title}
      </h3>

      {/* Expanding divider */}
      <div className="w-10 h-px bg-amber-500/50 mx-auto my-3 group-hover:w-20 transition-all duration-500" />

      {/* Description */}
      <p className="text-sm md:text-base text-[#e8d5c4]/75 leading-relaxed font-light group-hover:text-[#e8d5c4]/95 transition-colors duration-300"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        {description}
      </p>
    </motion.div>
  );
};

// ── CraftBg ───────────────────────────────────────────────────────
interface CraftBgProps {
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CraftBg: React.FC<CraftBgProps> = ({
  imageUrl = '/assets/jalwa.png',
  className = '',
  children,
}) => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <div className={`relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(41,1,2,0.75) 0%, rgba(0,0,0,0.3) 55%, rgba(41,1,2,0.55) 100%)' }} />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#d4af37 0,#d4af37 1px,transparent 0,transparent 50%)', backgroundSize: '6px 6px' }} />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-28">

        {/* Header */}
        <motion.div ref={headingRef}
          initial={{ opacity: 0, y: -28 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20">

          <span className="block text-[12px] tracking-[0.42em] uppercase text-amber-400 mb-5"
            style={{ fontFamily: "'Cinzel', serif" }}>
            Since 1987 · Soni Jewellery
          </span>

          {/* Top ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-500/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rotate-45 border border-amber-400/70" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/80" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          <h2 className="gold-shimmer-text text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] mb-4"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, textShadow: '2px 2px 12px rgba(0,0,0,0.5)' }}>
            The Art of Craftsmanship
          </h2>

          <p className="text-amber-300/70 text-sm md:text-lg font-light mt-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Where heritage whispers through every curve of gold.
          </p>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-500/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rotate-45 border border-amber-400/70" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/80" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
          {PILLARS.map(({ Icon, title, description }, index) => (
            <CraftCard key={title} Icon={Icon} title={title} description={description} delay={index * 0.13} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col items-center mt-16 gap-4">
          <div className="flex gap-3">
            {[0,1,2].map(i => <div key={i} className="w-1 h-7 rotate-45 bg-amber-500/35" />)}
          </div>
          <span className="text-[12px] tracking-[0.38em] uppercase text-amber-500"
            style={{ fontFamily: "'Cinzel', serif" }}>
            Hallmarked · Certified · Lifetime Guaranteed
          </span>
        </motion.div>

        {children}
      </div>
    </div>
  );
};

export default CraftBg;