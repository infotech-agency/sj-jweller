// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';

// // interface FeaturedBannerProps {
// //   backgroundImage?: string;
// //   label?: string;
// //   title?: string;
// //   description?: string;
// //   ctaText?: string;
// //   onCtaClick?: () => void;
// // }

// // export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
// //   backgroundImage = '/assets/feature.png',
// //   label = 'FEATURED MASTERPIECE',
// //   title = 'Radiance',
// //   description = 'An extraordinary creation that captures grace,\nfemininity and timeless sophistication.',
// //   ctaText = 'VIEW MASTERPIECE',
// //   onCtaClick,
// // }) => {
// //   const labelRef = useRef<HTMLSpanElement>(null);
// //   const titleRef = useRef<HTMLHeadingElement>(null);
// //   const dividerRef = useRef<HTMLDivElement>(null);
// //   const descRef = useRef<HTMLParagraphElement>(null);
// //   const btnRef = useRef<HTMLButtonElement>(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       gsap.fromTo(labelRef.current,
// //         { opacity: 0, y: 10 },
// //         { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
// //       );
// //       gsap.fromTo(titleRef.current,
// //         { opacity: 0, y: 20 },
// //         { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' }
// //       );
// //       gsap.fromTo(dividerRef.current,
// //         { opacity: 0, scaleX: 0 },
// //         { opacity: 1, scaleX: 1, duration: 0.6, delay: 0.3, ease: 'power2.out', transformOrigin: 'center' }
// //       );
// //       gsap.fromTo(descRef.current,
// //         { opacity: 0, y: 14 },
// //         { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
// //       );
// //       gsap.fromTo(btnRef.current,
// //         { opacity: 0, y: 10 },
// //         { opacity: 1, y: 0, duration: 0.7, delay: 0.55, ease: 'power3.out' }
// //       );
// //     });
// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cormorant+SC:wght@300;400&display=swap');

// //         .fb-root {
// //           position: relative;
// //           width: 100%;
// //           height: 450px;
// //           overflow: hidden;
// //           background-color: #f0c4aa;
// //         }

// //         .fb-bg {
// //           position: absolute;
// //           inset: 0;
// //           background-size: cover;
// //           background-position: center center;
// //           background-repeat: no-repeat;
// //           z-index: 0;
// //         }

// //         .fb-inner {
// //           position: relative;
// //           z-index: 10;
// //           width: 100%;
// //           height: 100%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .fb-content {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //           gap: 0;
// //         }

// //         .fb-label {
// //           font-family: 'Cormorant SC', 'Cormorant Garamond', serif;
// //           font-size: 0.6rem;
// //           font-weight: 400;
// //           letter-spacing: 0.3em;
// //           color: #5c2030;
// //           text-transform: uppercase;
// //           margin-bottom: 6px;
// //           opacity: 0;
// //         }

// //         .fb-title {
// //           font-family: 'Cormorant Garamond', Georgia, serif;
// //           font-size: clamp(2.4rem, 5vw, 3.6rem);
// //           font-weight: 400;
// //           font-style: italic;
// //           color: #3a1020;
// //           line-height: 1.1;
// //           margin: 0 0 10px 0;
// //           letter-spacing: 0.01em;
// //           opacity: 0;
// //         }

// //         /* Divider: ——◆—— */
// //         .fb-divider {
// //           display: flex;
// //           align-items: center;
// //           gap: 6px;
// //           margin-bottom: 12px;
// //           opacity: 0;
// //         }

// //         .fb-divider-line {
// //           width: 32px;
// //           height: 1px;
// //           background: #8b3042;
// //           opacity: 0.6;
// //         }

// //         .fb-divider-diamond {
// //           width: 5px;
// //           height: 5px;
// //           background: #8b3042;
// //           transform: rotate(45deg);
// //           opacity: 0.8;
// //           flex-shrink: 0;
// //         }

// //         .fb-desc {
// //           font-family: 'Cormorant Garamond', Georgia, serif;
// //           font-size: clamp(0.8rem, 1.4vw, 0.95rem);
// //           font-weight: 300;
// //           color: #4a1e28;
// //           line-height: 1.65;
// //           letter-spacing: 0.02em;
// //           margin: 0 0 18px 0;
// //           white-space: pre-line;
// //           opacity: 0;
// //         }

// //         /* CTA Button — dark maroon filled */
// //         .fb-btn {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 10px;
// //           background: #5c1f2e;
// //           border: none;
// //           padding: 10px 22px;
// //           cursor: pointer;
// //           font-family: 'Cormorant SC', 'Cormorant Garamond', serif;
// //           font-size: 0.62rem;
// //           font-weight: 400;
// //           letter-spacing: 0.25em;
// //           color: #f5e6dc;
// //           text-transform: uppercase;
// //           transition: background 0.3s ease, transform 0.2s ease;
// //           opacity: 0;
// //         }

// //         .fb-btn:hover {
// //           background: #3d1020;
// //           transform: translateY(-1px);
// //         }

// //         .fb-btn-icon {
// //           width: 14px;
// //           height: 14px;
// //           border: 1px solid #c9a080;
// //           transform: rotate(45deg);
// //           flex-shrink: 0;
// //           display: inline-block;
// //         }

// //         @media (max-width: 640px) {
// //           .fb-root { height: auto; min-height: 200px; padding: 2.5rem 1rem; }
// //           .fb-desc { white-space: normal; }
// //         }
// //       `}</style>

// //       <section className="fb-root">
// //         <div
// //           className="fb-bg"
// //           style={{ backgroundImage: `url(${backgroundImage})` }}
// //         />

// //         <div className="fb-inner">
// //           <div className="fb-content">
// //             <span ref={labelRef} className="fb-label">{label}</span>

// //             <h2 ref={titleRef} className="fb-title">{title}</h2>

// //             <div ref={dividerRef} className="fb-divider">
// //               <div className="fb-divider-line" />
// //               <div className="fb-divider-diamond" />
// //               <div className="fb-divider-line" />
// //             </div>

// //             <p ref={descRef} className="fb-desc">{description}</p>

// //             <button
// //               ref={btnRef}
// //               className="fb-btn"
// //               onClick={onCtaClick}
// //             >
// //               {ctaText}
// //               {/* <span className="fb-btn-icon" aria-hidden="true" /> */}
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default FeaturedBanner;


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

// export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
//   backgroundImage = '/assets/feature.png',
//   label = 'FEATURED MASTERPIECE',
//   title = 'Radiance',
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
//             className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-rose-950 leading-tight mb-3 opacity-0"
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
//             className="text-base sm:text-lg text-rose-800/80 leading-relaxed max-w-md mb-6 opacity-0 whitespace-pre-line"
//           >
//             {description}
//           </p>

//           {/* CTA Button */}
//           <button
//             ref={btnRef}
//             className="group relative inline-flex items-center gap-3 bg-rose-900 hover:bg-rose-950 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 overflow-hidden"
//             onClick={onCtaClick}
//           >
//             {/* Button Shine Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
//             <span className="text-[10px] sm:text-xs tracking-[0.25em] font-sans text-amber-50 uppercase font-['Cormorant_SC'] font-medium">
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

// export default FeaturedBanner;

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

// export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
//   backgroundImage = '/assets/feature.png',
//   mobileBackgroundImage = '/assets/featuremob4.jpeg',
//   label = 'FEATURED MASTERPIECE',
//   title = 'Radiance',
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

//       {/* Mobile: strong bottom vignette for text contrast */}
//       <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-rose-950/65 via-rose-950/25 to-transparent sm:hidden" />

//       {/* Content — bottom-anchored on mobile, centered on desktop */}
//       <div className="relative z-10 w-full h-full flex items-end sm:items-center justify-center px-5 sm:px-4 pb-14 sm:pb-0 sm:py-20">
//         <div className="w-full max-w-xs sm:max-w-3xl mx-auto flex flex-col items-center text-center translate-y-10 sm:translate-y-0">

//           {/* Label */}
//           <span
//             ref={labelRef}
//             className="text-[9px] sm:text-[10px] tracking-[0.3em] text-rose-200 sm:text-rose-800 uppercase mb-2 opacity-0 font-['Cormorant_SC']"
//           >
//             {label}
//           </span>

//           {/* Title */}
//           <h2
//             ref={titleRef}
//             className="text-5xl sm:text-5xl lg:text-6xl font-semibold text-white sm:text-rose-950 leading-tight mb-3 opacity-0"
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
//             className="text-sm sm:text-lg text-rose-100/90 sm:text-rose-800/80 leading-relaxed max-w-[270px] sm:max-w-md mb-6 opacity-0 whitespace-pre-line"
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
//             <span className="text-[10px] sm:text-xs tracking-[0.25em] font-sans text-amber-50 uppercase font-['Cormorant_SC'] font-medium">
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

// export default FeaturedBanner;

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

// export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
//   backgroundImage = '/assets/feature.png',
//   mobileBackgroundImage = '/assets/featuremob4.jpeg',
//   label = 'FEATURED MASTERPIECE',
//   title = 'Radiance',
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
//       <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-rose-950/65 via-rose-950/25 to-transparent sm:hidden" />

//       {/* Content — absolutely overlaid on mobile, flex-center on desktop */}
//       <div className="absolute inset-0 z-10 flex sm:static sm:relative sm:z-10 sm:w-full sm:h-full items-end sm:items-center justify-center px-5 sm:px-4 pb-14 pt-24 sm:pt-0 sm:pb-0 sm:py-20">
//         <div className="w-full max-w-xs sm:max-w-3xl mx-auto flex flex-col items-center text-center">

//           <span ref={labelRef} className="text-[9px] sm:text-[10px] tracking-[0.3em] text-rose-200 sm:text-rose-800 uppercase mb-2 opacity-0 font-['Cormorant_SC']">
//             {label}
//           </span>

//           <h2 ref={titleRef} className="text-5xl sm:text-5xl lg:text-6xl font-semibold text-white sm:text-rose-950 leading-tight mb-3 opacity-0">
//             {title}
//           </h2>

//           <div ref={dividerRef} className="flex items-center gap-2 mb-4 opacity-0">
//             <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
//             <div className="w-1.5 h-1.5 bg-rose-300/70 sm:bg-rose-700/60 rotate-45" />
//             <div className="w-8 h-px bg-rose-300/60 sm:bg-rose-700/50" />
//           </div>

//           <p ref={descRef} className="text-sm sm:text-lg text-rose-100/90 sm:text-rose-800/80 leading-relaxed max-w-[270px] sm:max-w-md mb-6 opacity-0 whitespace-pre-line">
//             {description}
//           </p>

//           <button
//             ref={btnRef}
//             className="group relative inline-flex items-center gap-3 bg-rose-900 hover:bg-rose-950 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 overflow-hidden"
//             onClick={onCtaClick}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//             <span className="text-[10px] sm:text-xs tracking-[0.25em] font-sans text-amber-50 uppercase font-['Cormorant_SC'] font-medium">
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

// export default FeaturedBanner;



'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
  backgroundImage = '/assets/feature.png',
  mobileBackgroundImage = '/assets/featuremob4.jpeg',
  label = 'SIGNATURE CREATION · SONI JEWELLERY',
  title = 'Eternal',
  description = 'Where the whisper of heritage meets the brilliance of pure gold —\na masterpiece handcrafted for the woman who wears legacy.',
  ctaText = 'EXPLORE THE COLLECTION',
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

      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: trigger });

      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power3.out', scrollTrigger: trigger });

      gsap.fromTo(dividerRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.6, delay: 0.3, ease: 'power2.out', transformOrigin: 'center', scrollTrigger: trigger });

      gsap.fromTo(descRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out', scrollTrigger: trigger });

      gsap.fromTo(btnRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.55, ease: 'power3.out', scrollTrigger: trigger });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200 font-['Cormorant_Garamond'] sm:h-screen sm:flex sm:items-center sm:justify-center"
    >
      {/* ── DESKTOP: absolute bg ── */}
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
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-rose-950/65 via-rose-950/25 to-transparent sm:hidden" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex sm:static sm:relative sm:z-10 sm:w-full sm:h-full items-end sm:items-center justify-center px-5 sm:px-4 pb-8 pt-44 sm:pt-0 sm:pb-0 sm:py-20">
        <div className="w-full max-w-xs sm:max-w-3xl mx-auto flex flex-col items-center text-center translate-y-10 sm:translate-y-0">

          {/* Label */}
          <span
            ref={labelRef}
            className="text-[8px] sm:text-[9px] tracking-[0.35em] text-[#250204] sm:text-rose-700 uppercase mb-3 opacity-0"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {label}
          </span>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-5xl sm:text-5xl lg:text-6xl font-light italic text-white sm:text-rose-950 leading-tight mb-3 opacity-0"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {title}
          </h2>

          {/* Divider */}
          <div ref={dividerRef} className="flex items-center gap-3 mb-5 opacity-0">
            <div className="w-10 h-px bg-rose-300/60 sm:bg-rose-700/40" />
            <div className="w-1 h-1 bg-rose-300/80 sm:bg-amber-600/70 rotate-45" />
            <div className="w-4 h-px bg-rose-300/60 sm:bg-rose-700/40" />
            <div className="w-2 h-2 border border-rose-300/60 sm:border-amber-600/60 rotate-45" />
            <div className="w-4 h-px bg-rose-300/60 sm:bg-rose-700/40" />
            <div className="w-1 h-1 bg-rose-300/80 sm:bg-amber-600/70 rotate-45" />
            <div className="w-10 h-px bg-rose-300/60 sm:bg-rose-700/40" />
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-sm sm:text-lg text-rose-100/90 sm:text-rose-800/75 leading-relaxed max-w-[280px] sm:max-w-lg mb-7 opacity-0 whitespace-pre-line font-light"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {description}
          </p>

          {/* CTA */}
          <button
            ref={btnRef}
            className="group relative inline-flex items-center gap-3 bg-rose-900 hover:bg-rose-950 px-7 py-3 sm:px-9 sm:py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 overflow-hidden"
            style={{ border: '1px solid rgba(218,165,32,0.25)' }}
            onClick={onCtaClick}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span
              className="text-[9px] sm:text-[10px] tracking-[0.3em] text-amber-50 uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {ctaText}
            </span>
            <svg
              className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Est. tagline */}
          <span
            className="mt-5 text-[8px] tracking-[0.22em] uppercase text-rose-200/50 sm:text-rose-700/50"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Est. 1987 &nbsp;·&nbsp; Haute Joaillerie
          </span>
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

export default FeaturedBanner;