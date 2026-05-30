// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// interface FeaturedBannerProps {
//   backgroundImage?: string;
//   label?: string;
//   title?: string;
//   description?: string;
//   ctaText?: string;
//   onCtaClick?: () => void;
// }

// export const ArtSection: React.FC<FeaturedBannerProps> = ({
//   backgroundImage = '/assets/maroonbg.png',
// //   label = 'FEATURED MASTERPIECE',
// //   title = 'Radiance',
// //   description = 'An extraordinary creation that captures grace,\nfemininity and timeless sophistication.',
// label = 'THE ART OF PERFECTION',
//   title = 'Where Tradition Meets Mastery',
//   description = 'An extraordinary creation that captures grace,\nfemininity and timeless sophistication.',
//   ctaText = 'VIEW MASTERPIECE',
//   onCtaClick,
// }) => {
//   const labelRef = useRef<HTMLSpanElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const dividerRef = useRef<HTMLDivElement>(null);
//   const descRef = useRef<HTMLParagraphElement>(null);
//   const btnRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(labelRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
//       );
//       gsap.fromTo(titleRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' }
//       );
//       gsap.fromTo(dividerRef.current,
//         { opacity: 0, scaleX: 0 },
//         { opacity: 1, scaleX: 1, duration: 0.6, delay: 0.3, ease: 'power2.out', transformOrigin: 'center' }
//       );
//       gsap.fromTo(descRef.current,
//         { opacity: 0, y: 14 },
//         { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
//       );
//       gsap.fromTo(btnRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.7, delay: 0.55, ease: 'power3.out' }
//       );
//     });
//     return () => ctx.revert();
//   }, []);
// // min-h-[450px]
//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200 font-['Cormorant_Garamond']">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />
      
//       {/* Gradient Overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
//       <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />

//       {/* Inner Container */}
//       <div className="relative z-10 w-full h-full flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
//         <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
//           {/* Label */}
//           <span 
//             ref={labelRef} 
//             className="text-[10px] sm:text-xs tracking-[0.3em] text-rose-800 uppercase mb-2 opacity-0 font-['Cormorant_SC']"
//           >
//             {label}
//           </span>

//           {/* Title */}
//           <h2 
//             ref={titleRef} 
//             className="text-4xl sm:text-5xl lg:text-6xl font-semibold  text-[#e0aa89] leading-tight mb-3 opacity-0"
//           >
//             {title}
//           </h2>

//           {/* Divider */}
//           <div 
//             ref={dividerRef} 
//             className="flex items-center gap-2 mb-4 opacity-0"
//           >
//             <div className="w-8 h-px bg-rose-700/50" />
//             <div className="w-1.5 h-1.5 bg-rose-700/60 rotate-45" />
//             <div className="w-8 h-px bg-rose-700/50" />
//           </div>

//           {/* Description */}
//           <p 
//             ref={descRef} 
//             className="text-base sm:text-lg text-[#e0cdaf] leading-relaxed max-w-md mb-6 opacity-0 whitespace-pre-line"
//           >
//             {description}
//           </p>

//           {/* CTA Button */}
//           <button
//             ref={btnRef}
//             className="group relative inline-flex items-center gap-3 bg-rose-900 hover:bg-rose-950 px-6 py-3 sm:px-8 sm:py-3.5  transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 overflow-hidden"
//             onClick={onCtaClick}
//           >
//             {/* Button Shine Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
//             <span className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-50 uppercase font-sans font-medium">
//               {ctaText}
//             </span>
//             {/* <span className="fb-btn-icon" aria-hidden="true" /> */}
//             <svg 
//               className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform duration-300" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Decorative Corner Elements */}
//       <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-rose-700/20 rounded-tl-2xl" />
//       <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-rose-700/20 rounded-tr-2xl" />
//       <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-rose-700/20 rounded-bl-2xl" />
//       <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-rose-700/20 rounded-br-2xl" />
//     </section>
//   );
// };

// export default ArtSection;


// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// interface FeaturedBannerProps {
//   backgroundImage?: string;
//   mobileBackgroundImage?: string;
//   label?: string;
//   title?: string;
//   description?: string;
//   ctaText?: string;
//   onCtaClick?: () => void;
// }

// export const ArtSection: React.FC<FeaturedBannerProps> = ({
//   backgroundImage = '/assets/maroonbg.png',
//   mobileBackgroundImage = '/assets/featuremob3.jpeg',
//   label = 'THE ART OF PERFECTION',
//   title = 'Where Tradition\nMeets Mastery',
//   description = 'An extraordinary creation that captures grace,\nfemininity and timeless sophistication.',
//   ctaText = 'VIEW MASTERPIECE',
//   onCtaClick,
// }) => {
//   const labelRef = useRef<HTMLSpanElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const dividerRef = useRef<HTMLDivElement>(null);
//   const descRef = useRef<HTMLParagraphElement>(null);
//   const btnRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(labelRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
//       );
//       gsap.fromTo(titleRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' }
//       );
//       gsap.fromTo(dividerRef.current,
//         { opacity: 0, scaleX: 0 },
//         { opacity: 1, scaleX: 1, duration: 0.6, delay: 0.3, ease: 'power2.out', transformOrigin: 'center' }
//       );
//       gsap.fromTo(descRef.current,
//         { opacity: 0, y: 14 },
//         { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
//       );
//       gsap.fromTo(btnRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.7, delay: 0.55, ease: 'power3.out' }
//       );
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200 font-['Cormorant_Garamond']">

//       {/* Desktop background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Mobile background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
//         style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
//       />

//       {/* Shared gradient overlays */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
//       <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />

//       {/* Mobile: strong bottom vignette so text stays readable over any image */}
//       <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1a0005]/75 via-[#1a0005]/30 to-transparent sm:hidden" />

//       {/* Content */}
//       <div className="relative z-10 w-full h-full flex items-end sm:items-center justify-center px-5 sm:px-4 pb-14 sm:pb-0 sm:py-20">
//         <div className="w-full max-w-xs sm:max-w-3xl mx-auto flex flex-col items-center text-center translate-y-12 sm:translate-y-0 translate-y-12 sm:translate-y-0">

//           {/* Label */}
//           <span
//             ref={labelRef}
//             className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#e0c9b0] sm:text-rose-800 uppercase mb-2 opacity-0 font-['Cormorant_SC']"
//           >
//             {label}
//           </span>

//           {/* Title */}
//           <h2
//             ref={titleRef}
//             className="text-[2rem] leading-snug sm:text-5xl lg:text-6xl font-semibold text-[#f5dfc8] sm:text-[#e0aa89] mb-3 opacity-0 whitespace-pre-line"
//           >
//             {title}
//           </h2>

//           {/* Divider */}
//           <div
//             ref={dividerRef}
//             className="flex items-center gap-2 mb-4 opacity-0"
//           >
//             <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
//             <div className="w-1.5 h-1.5 bg-rose-300/70 sm:bg-rose-700/60 rotate-45" />
//             <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
//           </div>

//           {/* Description */}
//           <p
//             ref={descRef}
//             className="text-sm sm:text-lg text-[#e8d5be]/90 sm:text-[#e0cdaf] leading-relaxed max-w-[280px] sm:max-w-md mb-6 opacity-0 whitespace-pre-line"
//           >
//             {description}
//           </p>

//           {/* CTA Button */}
//           <button
//             ref={btnRef}
//             className="group relative inline-flex items-center gap-3 bg-rose-900 hover:bg-rose-950 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 overflow-hidden"
//             onClick={onCtaClick}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <span className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-50 uppercase font-sans font-medium">
//               {ctaText}
//             </span>
//             <svg
//               className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Decorative corners — desktop only */}
//       <div className="hidden sm:block absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-rose-700/20 rounded-tl-2xl" />
//       <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-rose-700/20 rounded-tr-2xl" />
//       <div className="hidden sm:block absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-rose-700/20 rounded-bl-2xl" />
//       <div className="hidden sm:block absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-rose-700/20 rounded-br-2xl" />
//     </section>
//   );
// };

// export default ArtSection;

// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// interface FeaturedBannerProps {
//   backgroundImage?: string;
//   mobileBackgroundImage?: string;
//   label?: string;
//   title?: string;
//   description?: string;
//   ctaText?: string;
//   onCtaClick?: () => void;
// }

// export const ArtSection: React.FC<FeaturedBannerProps> = ({
//   backgroundImage = '/assets/maroonbg.png',
//   mobileBackgroundImage = '/assets/featuremob3.jpeg',
//   label = 'THE ART OF PERFECTION',
//   title = 'Where Tradition\nMeets Mastery',
//   description = 'An extraordinary creation that captures grace,\nfemininity and timeless sophistication.',
//   ctaText = 'VIEW MASTERPIECE',
//   onCtaClick,
// }) => {
//   const labelRef   = useRef<HTMLSpanElement>(null);
//   const titleRef   = useRef<HTMLHeadingElement>(null);
//   const dividerRef = useRef<HTMLDivElement>(null);
//   const descRef    = useRef<HTMLParagraphElement>(null);
//   const btnRef     = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(labelRef.current,   { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
//       gsap.fromTo(titleRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' });
//       gsap.fromTo(dividerRef.current, { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.6, delay: 0.3, ease: 'power2.out', transformOrigin: 'center' });
//       gsap.fromTo(descRef.current,    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
//       gsap.fromTo(btnRef.current,     { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.55, ease: 'power3.out' });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200 font-['Cormorant_Garamond'] sm:h-screen sm:flex sm:items-center sm:justify-center">

//       {/* ── DESKTOP: absolute bg ── */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* ── MOBILE: real <img> — natural height, zero cropping ── */}
//       <img
//         src={mobileBackgroundImage}
//         alt=""
//         aria-hidden="true"
//         className="block sm:hidden w-full h-auto object-contain"
//       />

//       {/* Shared gradient overlays */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
//       <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />

//       {/* Mobile: strong bottom vignette for text contrast */}
//       <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1a0005]/75 via-[#1a0005]/30 to-transparent sm:hidden" />

//       {/* Content — absolutely overlaid on mobile, flex-center on desktop */}
//       <div className="absolute inset-0 z-10 flex sm:static sm:relative sm:z-10 sm:w-full sm:h-full items-end sm:items-center justify-center px-5 sm:px-4 pb-14 sm:pb-0 sm:py-20">
//         <div className="w-full max-w-xs sm:max-w-3xl mx-auto flex flex-col items-center text-center translate-y-12 sm:translate-y-0">

//           <span
//             ref={labelRef}
//             className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#e0c9b0] sm:text-rose-800 uppercase mb-2 opacity-0 font-['Cormorant_SC']"
//           >
//             {label}
//           </span>

//           <h2
//             ref={titleRef}
//             className="text-[2rem] leading-snug sm:text-5xl lg:text-6xl font-semibold text-[#f5dfc8] sm:text-[#e0aa89] mb-3 opacity-0 whitespace-pre-line"
//           >
//             {title}
//           </h2>

//           <div ref={dividerRef} className="flex items-center gap-2 mb-4 opacity-0">
//             <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
//             <div className="w-1.5 h-1.5 bg-rose-300/70 sm:bg-rose-700/60 rotate-45" />
//             <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
//           </div>

//           <p
//             ref={descRef}
//             className="text-sm sm:text-lg text-[#e8d5be]/90 sm:text-[#e0cdaf] leading-relaxed max-w-[280px] sm:max-w-md mb-6 opacity-0 whitespace-pre-line"
//           >
//             {description}
//           </p>

//           <button
//             ref={btnRef}
//             className="group relative inline-flex items-center gap-3 bg-rose-900 hover:bg-rose-950 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 overflow-hidden"
//             onClick={onCtaClick}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <span className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-50 uppercase font-sans font-medium">
//               {ctaText}
//             </span>
//             <svg className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Decorative corners — desktop only */}
//       <div className="hidden sm:block absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-rose-700/20 rounded-tl-2xl" />
//       <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-rose-700/20 rounded-tr-2xl" />
//       <div className="hidden sm:block absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-rose-700/20 rounded-bl-2xl" />
//       <div className="hidden sm:block absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-rose-700/20 rounded-br-2xl" />
//     </section>
//   );
// };

// export default ArtSection;

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {motion} from "framer-motion"
gsap.registerPlugin(ScrollTrigger);

interface FeaturedBannerProps {
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  label?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const ArtSection: React.FC<FeaturedBannerProps> = ({
  backgroundImage = '/assets/maroonbg.png',
  mobileBackgroundImage = '/assets/featuremob3.jpeg',
  label = 'CRAFTED FOR ETERNITY',
  title = 'Jewellery That\nDefines Elegance',
  description = 'A curated expression of brilliance and craftsmanship,\ncreated for those who appreciate timeless beauty and refined luxury.',
  ctaText = 'DISCOVER MASTERPIECES',
  onCtaClick,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef   = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);
  const btnRef     = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      };

      gsap.fromTo(labelRef.current,   { opacity: 0, y: 10 },    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: trigger });
      gsap.fromTo(titleRef.current,   { opacity: 0, y: 20 },    { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power3.out', scrollTrigger: trigger });
      gsap.fromTo(dividerRef.current, { opacity: 0, scaleX: 0 },{ opacity: 1, scaleX: 1, duration: 0.6, delay: 0.3, ease: 'power2.out', transformOrigin: 'center', scrollTrigger: trigger });
      gsap.fromTo(descRef.current,    { opacity: 0, y: 14 },    { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out', scrollTrigger: trigger });
      gsap.fromTo(btnRef.current,     { opacity: 0, y: 10 },    { opacity: 1, y: 0, duration: 0.7, delay: 0.55, ease: 'power3.out', scrollTrigger: trigger });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200 font-['Cormorant_Garamond'] sm:h-screen sm:flex sm:items-center sm:justify-center"
    >
     
       <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* ── MOBILE: real <img> — natural height, zero cropping ── */}
      <img
        src={mobileBackgroundImage}
        alt=""
        aria-hidden="true"
        className="block sm:hidden w-full h-auto object-contain"
      />

      {/* Shared gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />

      {/* Mobile: strong bottom vignette for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1a0005]/75 via-[#1a0005]/30 to-transparent sm:hidden" />

      {/* Content — absolutely overlaid on mobile, flex-center on desktop */}
      <div className="absolute inset-0 z-10 flex sm:static sm:relative sm:z-10 sm:w-full sm:h-full items-end sm:items-center justify-center px-5 sm:px-4 pb-14 sm:pb-0 sm:py-20">
        <div className="w-full max-w-xs sm:max-w-3xl mx-auto flex flex-col items-center text-center translate-y-12 sm:translate-y-0">

          <span
            ref={labelRef}
            className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#e0c9b0] sm:text-rose-800 uppercase mb-2 opacity-0 font-['Cormorant_SC']"
          >
            {label}
          </span>

          <h2
            ref={titleRef}
            className="text-[2rem] leading-snug sm:text-5xl lg:text-6xl font-semibold text-[#f5dfc8] sm:text-[#e0aa89] mb-3 opacity-0 whitespace-pre-line"
          >
            {title}
          </h2>

          <div ref={dividerRef} className="flex items-center gap-2 mb-4 opacity-0">
            <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
            <div className="w-1.5 h-1.5 bg-rose-300/70 sm:bg-rose-700/60 rotate-45" />
            <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
          </div>

          <p
            ref={descRef}
            className="text-sm sm:text-lg text-[#e8d5be]/90 sm:text-[#e0cdaf] leading-relaxed max-w-[280px] sm:max-w-md mb-6 opacity-0 whitespace-pre-line"
          >
            {description}
          </p>

           <motion.div >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: 'linear-gradient(135deg, #7B1F2A 0%, #9B3040 100%)',
                  border: '1px solid rgba(218,165,32,0.3)',
                }}
              >
          
              
                <span className="relative z-10">{ctaText}</span>
           
                <span
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                  style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                />
              </motion.button>
            </motion.div>
        </div>
      </div>

      {/* Decorative corners — desktop only */}
      <div className="hidden sm:block absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-rose-700/20 rounded-tl-2xl" />
      <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-rose-700/20 rounded-tr-2xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-rose-700/20 rounded-bl-2xl" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-rose-700/20 rounded-br-2xl" />
    </section>
  );
};

export default ArtSection;