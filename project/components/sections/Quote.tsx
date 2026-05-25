// // // 'use client';

// // // import React from 'react';

// // // interface BackgroundImageProps {
// // //   imageUrl?: string;
// // //   className?: string;
// // //   children?: React.ReactNode;
// // // }

// // // export const QuoteBg: React.FC<BackgroundImageProps> = ({
// // //   imageUrl = '/assets/quote.png',
// // //   className = '',
// // //   children,
// // // }) => {
// // //   return (
// // //     <div 
// // //       className={`w-full h-screen bg-cover bg-center bg-no-repeat ${className}`}
// // //       style={{ backgroundImage: `url(${imageUrl})` }}
// // //     >
// // //       {children}
// // //     </div>
// // //   );
// // // };

// // // export default QuoteBg;
// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';

// // interface QuoteBgProps {
// //   imageUrl?: string;
// //   className?: string;
// //   quote?: string;
// //   author?: string;
// // }

// // const QuoteStyles = () => (
// //   <style>{`
// //     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400;1,500&family=Cinzel:wght@400;500&display=swap');

// //     @keyframes quote-shimmer {
// //       0%   { background-position: -200% center; }
// //       100% { background-position: 200% center; }
// //     }

// //     @keyframes gem-glow {
// //       0%, 100% { box-shadow: 0 0 0 0 rgba(159,53,70,0.5), 0 0 8px 2px rgba(159,53,70,0.2); }
// //       50%       { box-shadow: 0 0 0 8px rgba(159,53,70,0), 0 0 18px 6px rgba(232,160,168,0.3); }
// //     }

// //     @keyframes line-expand {
// //       0%   { transform: scaleX(0); opacity: 0; }
// //       100% { transform: scaleX(1); opacity: 1; }
// //     }

// //     @keyframes float-subtle {
// //       0%, 100% { transform: translateY(0px); }
// //       50%       { transform: translateY(-6px); }
// //     }

// //     .quote-shimmer-text {
// //       background: linear-gradient(
// //         90deg,
// //         #7B1F2A 0%, #C06070 30%, #F5D5CC 50%, #C06070 70%, #7B1F2A 100%
// //       );
// //       background-size: 200% auto;
// //       -webkit-background-clip: text;
// //       -webkit-text-fill-color: transparent;
// //       background-clip: text;
// //       animation: quote-shimmer 5s linear infinite;
// //     }

// //     .centre-gem { animation: gem-glow 2.5s ease-in-out infinite; }

// //     .quote-float { animation: float-subtle 5s ease-in-out infinite; }

// //     .ornament-line {
// //       transform-origin: center;
// //       animation: line-expand 0.8s cubic-bezier(0.4,0,0.2,1) both;
// //     }
// //   `}</style>
// // );

// // /* ── Jewel ornament (same language as HeroBanner) ── */
// // const QuoteOrnament = () => (
// //   <div className="flex items-center justify-center gap-0 my-4" aria-hidden="true">
// //     <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg,transparent,rgba(192,96,112,0.7))', flexShrink: 0 }} />
// //     <div style={{ width: 5, height: 5, background: '#C06070', transform: 'rotate(45deg)', margin: '0 8px', flexShrink: 0 }} />
// //     <div style={{ width: 20, height: 1, background: 'rgba(192,96,112,0.6)', flexShrink: 0 }} />
// //     {/* Centre gem */}
// //     <div className="mx-2 relative flex items-center justify-center" style={{ flexShrink: 0 }}>
// //       <div style={{ position:'absolute', width:22, height:22, border:'1px solid rgba(159,53,70,0.35)', transform:'rotate(45deg)', borderRadius:2 }} />
// //       <div style={{ position:'absolute', width:15, height:15, border:'1px solid rgba(159,53,70,0.55)', transform:'rotate(45deg)', borderRadius:1 }} />
// //       <div className="centre-gem" style={{ width:9, height:9, background:'linear-gradient(135deg,#7B1F2A,#C06070)', transform:'rotate(45deg)', borderRadius:1, zIndex:1 }} />
// //     </div>
// //     <div style={{ width: 20, height: 1, background: 'rgba(192,96,112,0.6)', flexShrink: 0 }} />
// //     <div style={{ width: 5, height: 5, background: '#C06070', transform: 'rotate(45deg)', margin: '0 8px', flexShrink: 0 }} />
// //     <div style={{ width: 40, height: 1, background: 'linear-gradient(270deg,transparent,rgba(192,96,112,0.7))', flexShrink: 0 }} />
// //   </div>
// // );

// // export const QuoteBg: React.FC<QuoteBgProps> = ({
// //   imageUrl = '/assets/quote.png',
// //   className = '',
// //   quote = 'Where every jewel tells a story of love, legacy, and timeless grace.',
// //   author = '— Soni Jewellery',
// // }) => {
// //   const boxRef    = useRef<HTMLDivElement>(null);
// //   const iconRef   = useRef<HTMLDivElement>(null);
// //   const textRef   = useRef<HTMLParagraphElement>(null);
// //   const authorRef = useRef<HTMLSpanElement>(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 });

// //       if (iconRef.current) {
// //         tl.fromTo(iconRef.current,
// //           { opacity: 0, scale: 0.6, rotate: -15 },
// //           { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.8)' },
// //           0
// //         );
// //       }
// //       if (boxRef.current) {
// //         tl.fromTo(boxRef.current,
// //           { opacity: 0, y: 30, scale: 0.97 },
// //           { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' },
// //           0.15
// //         );
// //       }
// //       if (textRef.current) {
// //         tl.fromTo(textRef.current,
// //           { opacity: 0, y: 16 },
// //           { opacity: 1, y: 0, duration: 0.9 },
// //           0.45
// //         );
// //       }
// //       if (authorRef.current) {
// //         tl.fromTo(authorRef.current,
// //           { opacity: 0, letterSpacing: '0.5em' },
// //           { opacity: 1, letterSpacing: '0.25em', duration: 0.8 },
// //           0.75
// //         );
// //       }
// //     });
// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <>
// //       <QuoteStyles />
// //       <div
// //         className={`w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden ${className}`}
// //         style={{ backgroundImage: `url(${imageUrl})` }}
// //       >
// //         {/* Dark vignette overlay */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(30,8,12,0.45) 0%, rgba(30,8,12,0.72) 100%)',
// //           }}
// //         />

// //         {/* ── Centred quote card ── */}
// //         <div className="absolute inset-0 flex items-center justify-center px-4">

// //           <div
// //             ref={boxRef}
// //             className="quote-float relative flex flex-col items-center text-center max-w-2xl w-full opacity-0"
// //             style={{ padding: '48px 40px' }}
// //           >
// //             {/* Corner brackets */}
// //             {[
// //               'top-0 left-0 border-t border-l',
// //               'top-0 right-0 border-t border-r',
// //               'bottom-0 left-0 border-b border-l',
// //               'bottom-0 right-0 border-b border-r',
// //             ].map((cls, i) => (
// //               <div
// //                 key={i}
// //                 className={`absolute ${cls} w-8 h-8`}
// //                 style={{ borderColor: 'rgba(192,96,112,0.55)' }}
// //               />
// //             ))}

// //             {/* Subtle card bg */}
// //             <div
// //               className="absolute inset-0"
// //               style={{
// //                 background: 'rgba(20,5,8,0.3)',
// //                 backdropFilter: 'blur(2px)',
// //                 border: '1px solid rgba(192,96,112,0.18)',
// //               }}
// //             />

// //             {/* ── Big quotation mark icon ── */}
// //             <div
// //               ref={iconRef}
// //               className="relative z-10 mb-4 flex items-center justify-center opacity-0"
// //               style={{
// //                 width: 56, height: 56,
// //                 border: '1px solid rgba(192,96,112,0.45)',
// //                 transform: 'rotate(45deg)',
// //                 flexShrink: 0,
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   transform: 'rotate(-45deg)',
// //                   fontFamily: "'Cormorant Garamond', serif",
// //                   fontSize: 42,
// //                   lineHeight: 1,
// //                   color: '#C06070',
// //                   marginTop: -6,
// //                   userSelect: 'none',
// //                 }}
// //               >
// //                 "
// //               </div>
// //             </div>

// //             {/* Top ornament */}
// //             <div className="relative z-10 w-full">
// //               <QuoteOrnament />
// //             </div>

// //             {/* Quote text */}
// //             <p
// //               ref={textRef}
// //               className="relative z-10 opacity-0"
// //               style={{
// //                 fontFamily: "'Cormorant Garamond', serif",
// //                 fontStyle: 'italic',
// //                 fontWeight: 300,
// //                 fontSize: 'clamp(20px, 3.5vw, 32px)',
// //                 lineHeight: 1.65,
// //                 color: '#F5E6E0',
// //                 letterSpacing: '0.02em',
// //                 margin: '12px 0 18px',
// //               }}
// //             >
// //               <span className="quote-shimmer-text">"{quote}"</span>
// //             </p>

// //             {/* Bottom ornament */}
// //             <div className="relative z-10 w-full">
// //               <QuoteOrnament />
// //             </div>

// //             {/* Author */}
// //             <span
// //               ref={authorRef}
// //               className="relative z-10 mt-4 opacity-0"
// //               style={{
// //                 fontFamily: "'Cinzel', serif",
// //                 fontSize: 11,
// //                 letterSpacing: '0.25em',
// //                 color: '#C06070',
// //                 textTransform: 'uppercase',
// //               }}
// //             >
// //               {author}
// //             </span>

// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default QuoteBg;



// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { Quote } from 'lucide-react';

// interface QuoteBgProps {
//   imageUrl?: string;
//   className?: string;
//   quote?: string;
//   author?: string;
// }

// export const QuoteBg: React.FC<QuoteBgProps> = ({
//   imageUrl = '/assets/quote.png',
//   className = '',
//   quote = 'Where every jewel tells a story of love, legacy, and timeless grace.',
//   author = '— Soni Jewellery',
// }) => {
//   const iconRef   = useRef<HTMLDivElement>(null);
//   const textRef   = useRef<HTMLParagraphElement>(null);
//   const authorRef = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 });

//       if (iconRef.current) {
//         tl.fromTo(iconRef.current,
//           { opacity: 0, scale: 0.5, y: -10 },
//           { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.6)' },
//           0
//         );
//       }
//       if (textRef.current) {
//         tl.fromTo(textRef.current,
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.9 },
//           0.35
//         );
//       }
//       if (authorRef.current) {
//         tl.fromTo(authorRef.current,
//           { opacity: 0, y: 10 },
//           { opacity: 1, y: 0, duration: 0.7 },
//           0.65
//         );
//       }
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden ${className}`}
//       style={{ backgroundImage: `url(${imageUrl})` }}
//     >
//       {/* Centred quote content */}
//       <div className="absolute inset-0 flex items-center justify-center px-4">
//         <div className="flex flex-col items-center text-center max-w-2xl w-full">

//           {/* Lucide Quote icon */}
//           <div ref={iconRef} className="mb-6 opacity-0">
//             <Quote
//               size={48}
//               strokeWidth={1.2}
//               style={{ color: '#7B1F2A' }}
//             />
//           </div>

//           {/* Quote text */}
//           <p
//             ref={textRef}
//             className="opacity-0"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               fontStyle: 'italic',
//               fontWeight: 300,
//               fontSize: 'clamp(22px, 3.5vw, 34px)',
//               lineHeight: 1.7,
//               color: '#3A1520',
//               letterSpacing: '0.02em',
//               marginBottom: 20,
//             }}
//           >
//             "{quote}"
//           </p>

//           {/* Author */}
//           <span
//             ref={authorRef}
//             className="opacity-0"
//             style={{
//               fontFamily: "'Cinzel', 'Times New Roman', serif",
//               fontSize: 11,
//               letterSpacing: '0.22em',
//               color: '#9B3040',
//               textTransform: 'uppercase',
//             }}
//           >
//             {author}
//           </span>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteBg;



// 'use client';

// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import gsap from 'gsap';
// import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// interface QuoteItem {
//   quote: string;
//   author: string;
// }

// interface QuoteBgProps {
//   imageUrl?: string;
//   mobileImageUrl?: string;
//   className?: string;
//   quotes?: QuoteItem[];
// }

// const DEFAULT_QUOTES: QuoteItem[] = [
//   {
//     quote: 'Where every jewel tells a story of love, legacy, and timeless grace.',
//     author: '— Soni Jewellery',
//   },
//   {
//     quote: 'Crafted with devotion, worn with pride — jewellery that transcends generations.',
//     author: '— Soni Jewellery',
//   },
//   {
//     quote: 'In every curve of gold, in every glint of stone, lies a promise of forever.',
//     author: '— Soni Jewellery',
//   },
// ];

// export const QuoteBg: React.FC<QuoteBgProps> = ({
//   imageUrl = '/assets/quote.png',
//   mobileImageUrl = '/assets/quotedmob.png',
//   className = '',
//   quotes = DEFAULT_QUOTES,
// }) => {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const iconRef   = useRef<HTMLDivElement>(null);
//   const textRef   = useRef<HTMLParagraphElement>(null);
//   const authorRef = useRef<HTMLSpanElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const animateIn = useCallback(() => {
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
//     if (iconRef.current) {
//       tl.fromTo(iconRef.current,
//         { opacity: 0, scale: 0.6, y: -8 },
//         { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.6)' },
//         0
//       );
//     }
//     if (textRef.current) {
//       tl.fromTo(textRef.current,
//         { opacity: 0, y: 18 },
//         { opacity: 1, y: 0, duration: 0.75 },
//         0.2
//       );
//     }
//     if (authorRef.current) {
//       tl.fromTo(authorRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.55 },
//         0.45
//       );
//     }
//     return tl;
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set([iconRef.current, textRef.current, authorRef.current], { opacity: 0 });
//       animateIn();
//     });
//     return () => ctx.revert();
//   }, [animateIn]);

//   const goTo = useCallback((next: number) => {
//     if (animating) return;
//     setAnimating(true);

//     gsap.to([textRef.current, authorRef.current, iconRef.current], {
//       opacity: 0,
//       y: -14,
//       duration: 0.3,
//       ease: 'power2.in',
//       onComplete: () => {
//         setCurrent(next);
//         gsap.set([iconRef.current, textRef.current, authorRef.current], { y: 14 });
//         animateIn().then(() => setAnimating(false));
//       },
//     });
//   }, [animating, animateIn]);

//   const prev = () => goTo((current - 1 + quotes.length) % quotes.length);
//   const next = () => goTo((current + 1) % quotes.length);

//   const { quote, author } = quotes[current];

//   return (
//     <div
//       className={`w-full h-screen relative overflow-hidden ${className}`}
//     >
//       {/* Desktop background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       />

//       {/* Mobile background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
//         style={{ backgroundImage: `url(${mobileImageUrl})` }}
//       />

//       {/* Mobile vignette for readability */}
//       <div className="absolute inset-0 bg-black/10 sm:hidden" />

//       {/* Centred quote content */}
//       <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-4">
//         <div ref={contentRef} className="flex flex-col items-center text-center max-w-2xl w-full">

//           {/* Quote icon */}
//           <div ref={iconRef} className="mb-5 sm:mb-6 opacity-0">
//             <Quote
//               size={40}
//               strokeWidth={1.2}
//               style={{ color: '#7B1F2A' }}
//             />
//           </div>

//           {/* Quote text */}
//           <p
//             ref={textRef}
//             className="opacity-0 px-2"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               fontStyle: 'italic',
//               fontWeight: 300,
//               fontSize: 'clamp(18px, 3.5vw, 34px)',
//               lineHeight: 1.7,
//               color: '#3A1520',
//               letterSpacing: '0.02em',
//               marginBottom: 18,
//             }}
//           >
//             "{quote}"
//           </p>

//           {/* Author */}
//           <span
//             ref={authorRef}
//             className="opacity-0"
//             style={{
//               fontFamily: "'Cinzel', 'Times New Roman', serif",
//               fontSize: 11,
//               letterSpacing: '0.22em',
//               color: '#9B3040',
//               textTransform: 'uppercase',
//             }}
//           >
//             {author}
//           </span>

//           {/* Slider controls */}
//           {quotes.length > 1 && (
//             <div className="flex items-center gap-6 mt-8 sm:mt-10">
//               {/* Prev */}
//               <button
//                 onClick={prev}
//                 disabled={animating}
//                 aria-label="Previous quote"
//                 className="text-[#7B1F2A]/70 hover:text-[#7B1F2A] transition-colors duration-200 disabled:opacity-30"
//               >
//                 <ChevronLeft size={22} strokeWidth={1.5} />
//               </button>

//               {/* Dots */}
//               <div className="flex items-center gap-2">
//                 {quotes.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => i !== current && goTo(i)}
//                     aria-label={`Go to quote ${i + 1}`}
//                     className="transition-all duration-300 rounded-full"
//                     style={{
//                       width: i === current ? 18 : 6,
//                       height: 6,
//                       background: i === current ? '#7B1F2A' : '#7B1F2A40',
//                     }}
//                   />
//                 ))}
//               </div>

//               {/* Next */}
//               <button
//                 onClick={next}
//                 disabled={animating}
//                 aria-label="Next quote"
//                 className="text-[#7B1F2A]/70 hover:text-[#7B1F2A] transition-colors duration-200 disabled:opacity-30"
//               >
//                 <ChevronRight size={22} strokeWidth={1.5} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteBg;

// 'use client';

// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import gsap from 'gsap';
// import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// interface QuoteItem {
//   quote: string;
//   author: string;
// }

// interface QuoteBgProps {
//   imageUrl?: string;
//   mobileImageUrl?: string;
//   className?: string;
//   quotes?: QuoteItem[];
// }

// const DEFAULT_QUOTES: QuoteItem[] = [
//   { quote: 'Where every jewel tells a story of love, legacy, and timeless grace.', author: '— Soni Jewellery' },
//   { quote: 'Crafted with devotion, worn with pride — jewellery that transcends generations.', author: '— Soni Jewellery' },
//   { quote: 'In every curve of gold, in every glint of stone, lies a promise of forever.', author: '— Soni Jewellery' },
// ];

// export const QuoteBg: React.FC<QuoteBgProps> = ({
//   imageUrl = '/assets/quote.png',
//   mobileImageUrl = '/assets/quotedmob.png',
//   className = '',
//   quotes = DEFAULT_QUOTES,
// }) => {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const iconRef    = useRef<HTMLDivElement>(null);
//   const textRef    = useRef<HTMLParagraphElement>(null);
//   const authorRef  = useRef<HTMLSpanElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const animateIn = useCallback(() => {
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
//     if (iconRef.current)
//       tl.fromTo(iconRef.current, { opacity: 0, scale: 0.6, y: -8 }, { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.6)' }, 0);
//     if (textRef.current)
//       tl.fromTo(textRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.75 }, 0.2);
//     if (authorRef.current)
//       tl.fromTo(authorRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, 0.45);
//     return tl;
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set([iconRef.current, textRef.current, authorRef.current], { opacity: 0 });
//       animateIn();
//     });
//     return () => ctx.revert();
//   }, [animateIn]);

//   const goTo = useCallback((next: number) => {
//     if (animating) return;
//     setAnimating(true);
//     gsap.to([textRef.current, authorRef.current, iconRef.current], {
//       opacity: 0, y: -14, duration: 0.3, ease: 'power2.in',
//       onComplete: () => {
//         setCurrent(next);
//         gsap.set([iconRef.current, textRef.current, authorRef.current], { y: 14 });
//         animateIn().then(() => setAnimating(false));
//       },
//     });
//   }, [animating, animateIn]);

//   const prev = () => goTo((current - 1 + quotes.length) % quotes.length);
//   const next = () => goTo((current + 1) % quotes.length);

//   const { quote, author } = quotes[current];

//   return (
//     <div className={`w-full relative overflow-hidden sm:h-screen ${className}`}>

//       {/* DESKTOP: absolute bg */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       />

//       {/* MOBILE: real <img> — natural height, zero cropping */}
//       <img
//         src={mobileImageUrl}
//         alt=""
//         aria-hidden="true"
//         className="block sm:hidden w-full h-auto object-contain"
//       />

//       {/* Mobile vignette */}
//       <div className="absolute inset-0 bg-black/10 sm:hidden" />

//       {/* Content overlay */}
//       <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-4">
//         <div ref={contentRef} className="flex flex-col items-center text-center max-w-2xl w-full">

//           <div ref={iconRef} className="mb-5 sm:mb-6 opacity-0">
//             <Quote size={40} strokeWidth={1.2} style={{ color: '#7B1F2A' }} />
//           </div>

//           <p
//             ref={textRef}
//             className="opacity-0 px-2"
//             style={{
//               fontFamily: "'Cormorant Garamond', Georgia, serif",
//               fontStyle: 'italic',
//               fontWeight: 300,
//               fontSize: 'clamp(16px, 3.5vw, 34px)',
//               lineHeight: 1.7,
//               color: '#3A1520',
//               letterSpacing: '0.02em',
//               marginBottom: 18,
//             }}
//           >
//             "{quote}"
//           </p>

//           <span
//             ref={authorRef}
//             className="opacity-0"
//             style={{
//               fontFamily: "'Cinzel', 'Times New Roman', serif",
//               fontSize: 11,
//               letterSpacing: '0.22em',
//               color: '#9B3040',
//               textTransform: 'uppercase',
//             }}
//           >
//             {author}
//           </span>

//           {quotes.length > 1 && (
//             <div className="flex items-center gap-6 mt-8 sm:mt-10">
//               <button onClick={prev} disabled={animating} aria-label="Previous quote"
//                 className="text-[#7B1F2A]/70 hover:text-[#7B1F2A] transition-colors duration-200 disabled:opacity-30">
//                 <ChevronLeft size={22} strokeWidth={1.5} />
//               </button>

//               <div className="flex items-center gap-2">
//                 {quotes.map((_, i) => (
//                   <button key={i} onClick={() => i !== current && goTo(i)}
//                     aria-label={`Go to quote ${i + 1}`}
//                     className="transition-all duration-300 rounded-full"
//                     style={{ width: i === current ? 18 : 6, height: 6, background: i === current ? '#7B1F2A' : '#7B1F2A40' }}
//                   />
//                 ))}
//               </div>

//               <button onClick={next} disabled={animating} aria-label="Next quote"
//                 className="text-[#7B1F2A]/70 hover:text-[#7B1F2A] transition-colors duration-200 disabled:opacity-30">
//                 <ChevronRight size={22} strokeWidth={1.5} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteBg;


'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface QuoteItem {
  quote: string;
  author: string;
}

interface QuoteBgProps {
  imageUrl?: string;
  mobileImageUrl?: string;
  className?: string;
  quotes?: QuoteItem[];
}

const DEFAULT_QUOTES: QuoteItem[] = [
  { quote: 'Where every jewel tells a story of love, legacy, and timeless grace.', author: '— Soni Jewellery' },
  { quote: 'Crafted with devotion, worn with pride — jewellery that transcends generations.', author: '— Soni Jewellery' },
  { quote: 'In every curve of gold, in every glint of stone, lies a promise of forever.', author: '— Soni Jewellery' },
];

export const QuoteBg: React.FC<QuoteBgProps> = ({
  imageUrl = '/assets/quote.png',
  mobileImageUrl = '/assets/quotedmob.png',
  className = '',
  quotes = DEFAULT_QUOTES,
}) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const iconRef    = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLParagraphElement>(null);
  const authorRef  = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const animateIn = useCallback(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (iconRef.current)
      tl.fromTo(iconRef.current, { opacity: 0, scale: 0.6, y: -8 }, { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.6)' }, 0);
    if (textRef.current)
      tl.fromTo(textRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.75 }, 0.2);
    if (authorRef.current)
      tl.fromTo(authorRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, 0.45);
    return tl;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([iconRef.current, textRef.current, authorRef.current], { opacity: 0 });
      animateIn();
    });
    return () => ctx.revert();
  }, [animateIn]);

  const goTo = useCallback((next: number) => {
    if (animating) return;
    setAnimating(true);
    gsap.to([textRef.current, authorRef.current, iconRef.current], {
      opacity: 0, y: -14, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        setCurrent(next);
        gsap.set([iconRef.current, textRef.current, authorRef.current], { y: 14 });
        animateIn().then(() => setAnimating(false));
      },
    });
  }, [animating, animateIn]);

  const prev = () => goTo((current - 1 + quotes.length) % quotes.length);
  const next = () => goTo((current + 1) % quotes.length);

  const { quote, author } = quotes[current];

  return (
    <div className={`w-full relative overflow-hidden sm:h-screen ${className}`}>

      {/* DESKTOP: absolute bg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* MOBILE: real <img> — natural height, zero cropping */}
      <img
        src={mobileImageUrl}
        alt=""
        aria-hidden="true"
        className="block sm:hidden w-full h-auto object-contain"
      />

      {/* Mobile vignette */}
      <div className="absolute inset-0 bg-black/10 sm:hidden" />

      {/* FIX 1: pt-16 on mobile to push content down, sm:pt-0 for desktop unchanged */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-4 pt-16 sm:pt-0">
        <div ref={contentRef} className="flex flex-col items-center text-center max-w-2xl w-full">

          <div ref={iconRef} className="mb-5 sm:mb-6 opacity-0">
            <Quote size={40} strokeWidth={1.2} style={{ color: '#7B1F2A' }} />
          </div>

          <p
            ref={textRef}
            className="opacity-0 px-2"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              /* FIX 2: fontWeight 600 on mobile via inline — bold quote */
              fontWeight: 600,
              fontSize: 'clamp(16px, 3.5vw, 34px)',
              lineHeight: 1.7,
              color: '#3A1520',
              letterSpacing: '0.02em',
              marginBottom: 18,
            }}
          >
            "{quote}"
          </p>

          <span
            ref={authorRef}
            className="opacity-0"
            style={{
              fontFamily: "'Cinzel', 'Times New Roman', serif",
              fontSize: 11,
              letterSpacing: '0.22em',
              color: '#9B3040',
              textTransform: 'uppercase',
            }}
          >
            {author}
          </span>

          {quotes.length > 1 && (
            <div className="flex items-center gap-6 mt-8 sm:mt-10">
              <button onClick={prev} disabled={animating} aria-label="Previous quote"
                className="text-[#7B1F2A]/70 hover:text-[#7B1F2A] transition-colors duration-200 disabled:opacity-30">
                <ChevronLeft size={22} strokeWidth={1.5} />
              </button>

              <div className="flex items-center gap-2">
                {quotes.map((_, i) => (
                  <button key={i} onClick={() => i !== current && goTo(i)}
                    aria-label={`Go to quote ${i + 1}`}
                    className="transition-all duration-300 rounded-full"
                    style={{ width: i === current ? 18 : 6, height: 6, background: i === current ? '#7B1F2A' : '#7B1F2A40' }}
                  />
                ))}
              </div>

              <button onClick={next} disabled={animating} aria-label="Next quote"
                className="text-[#7B1F2A]/70 hover:text-[#7B1F2A] transition-colors duration-200 disabled:opacity-30">
                <ChevronRight size={22} strokeWidth={1.5} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteBg;