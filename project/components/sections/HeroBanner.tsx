
// // // 'use client';

// // // import React, { useEffect, useRef } from 'react';
// // // import gsap from 'gsap';
// // // import SplitType from 'split-type';

// // // interface HeroBannerProps {
// // //   backgroundImage?: string;
// // //   jewelryImage?: string;
// // //   logo?: string;
// // //   onCtaClick?: () => void;
// // // }

// // // export const HeroBanner: React.FC<HeroBannerProps> = ({
// // //   backgroundImage = '/assets/herobg2.png',
// // //   jewelryImage = '/assets/jewelry.png',
// // //   logo = '/assets/logo.png',
// // //   onCtaClick,
// // // }) => {
// // //   const titleRef = useRef<HTMLHeadingElement>(null);
// // //   const subtitleRef = useRef<HTMLParagraphElement>(null);
// // //   const ctaRef = useRef<HTMLDivElement>(null);
// // //   const logoRef = useRef<HTMLDivElement>(null);
// // //   const decorRef = useRef<HTMLDivElement>(null);
// // //   const rightRef = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     let split: SplitType | null = null;
// // //     const ctx = gsap.context(() => {
// // //       if (logoRef.current) {
// // //         gsap.fromTo(logoRef.current,
// // //           { opacity: 0, y: -16 },
// // //           { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
// // //         );
// // //       }
// // //       if (titleRef.current) {
// // //         split = new SplitType(titleRef.current, { types: 'chars' });
// // //         gsap.fromTo(split.chars,
// // //           { opacity: 0, y: 28 },
// // //           { opacity: 1, y: 0, duration: 0.85, stagger: 0.018, delay: 0.2, ease: 'power3.out' }
// // //         );
// // //       }
// // //       if (decorRef.current) {
// // //         gsap.fromTo(decorRef.current,
// // //           { scaleX: 0, opacity: 0 },
// // //           { scaleX: 1, opacity: 1, duration: 0.7, delay: 0.6, ease: 'power2.out', transformOrigin: 'center' }
// // //         );
// // //       }
// // //       if (subtitleRef.current) {
// // //         gsap.fromTo(subtitleRef.current,
// // //           { opacity: 0, y: 16 },
// // //           { opacity: 1, y: 0, duration: 0.9, delay: 0.75, ease: 'power3.out' }
// // //         );
// // //       }
// // //       if (ctaRef.current) {
// // //         gsap.fromTo(ctaRef.current,
// // //           { opacity: 0, y: 12 },
// // //           { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: 'power3.out' }
// // //         );
// // //       }
// // //       if (rightRef.current) {
// // //         gsap.fromTo(rightRef.current,
// // //           { opacity: 0, x: 40 },
// // //           { opacity: 1, x: 0, duration: 1.1, delay: 0.3, ease: 'power3.out' }
// // //         );
// // //       }
// // //     });
// // //     return () => { ctx.revert(); split?.revert(); };
// // //   }, []);

// // //   return (
// // //     <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100 font-['Cormorant_Garamond']">
// // //       {/* Background Image with Overlay */}
// // //       <div 
// // //         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// // //         style={{ backgroundImage: `url(${backgroundImage})` }}
// // //       />
      
// // //       {/* Gradient Overlays for Depth */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-amber-900/10" />
// // //       <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      
// // //       {/* Warm Vignette for Jewelry Pop */}
// // //       <div className="absolute inset-0 bg-radial-gradient from-transparent via-amber-900/5 to-amber-900/20 pointer-events-none" />

// // //       {/* Main Layout */}
// // //      <div className="relative text-center z-10 w-full h-full flex items-center px-4 sm:px-8 lg:px-12 xl:px-16 gap-8 lg:gap-12 flex-col lg:flex-row justify-center lg:justify-between">
  
// // //   {/* LEFT CONTENT - Now centered within itself */}
// // //   <div className="flex-1 max-w-2xl flex flex-col items-center justify-center text-center px-4 lg:px-8">
// // //     {/* Logo Medallion */}
// // //     {/* <div ref={logoRef} className="mb-6 lg:mb-8 opacity-0">
// // //       <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-rose-700/30 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
// // //         <img src={logo} alt="Logo" className="w-12 h-12 lg:w-14 lg:h-14 object-contain" />
// // //       </div>
// // //     </div> */}

// // //     {/* Title */}
// // //     <h1 
// // //       ref={titleRef} 
// // //       className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold  text-rose-950 leading-tight lg:leading-snug mb-4 lg:mb-6"
// // //     >
// // //       Timeless Elegance.
// // //       <br />
// // //       <span className="font-semibold">Crafted for Eternity.</span>
// // //     </h1>

// // //     {/* Decorative Divider */}
// // //     <div ref={decorRef} className="flex items-center justify-center gap-3 mb-4 lg:mb-6 opacity-0">
// // //       <div className="w-12 h-px bg-rose-900" />
// // //       <div className="w-1.5 h-1.5 bg-rose-900 rotate-45" />
// // //       <div className="w-12 h-px bg-rose-900" />
// // //     </div>

// // //     {/* Subtitle */}
// // //     <p 
// // //       ref={subtitleRef} 
// // //       className="text-base sm:text-lg lg:text-xl text-rose-900 leading-relaxed mb-6 lg:mb-8 max-w-md opacity-0"
// // //     >
// // //       A celebration of heritage, artistry
// // //       <br />
// // //       and unmatched beauty.
// // //     </p>

// // //     {/* CTA Button */}
// // //     <div
// // //       ref={ctaRef}
// // //       className="group flex items-center gap-3 cursor-pointer opacity-0 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
// // //       onClick={onCtaClick}
// // //       role="button"
// // //       tabIndex={0}
// // //       onKeyDown={(e) => e.key === 'Enter' && onCtaClick?.()}
// // //     >
// // //       <span className="text-xs sm:text-sm tracking-[0.2em] text-rose-900 font-medium uppercase group-hover:text-rose-700 transition-colors">
// // //         DISCOVER OUR COLLECTIONS
// // //       </span>
// // //       <div className="w-8 h-px bg-rose-800 group-hover:w-12 transition-all duration-300" />
// // //       <span className="text-rose-800 group-hover:translate-x-1 transition-transform duration-300">
// // //         →
// // //       </span>
// // //     </div>
// // //   </div>

// // //   {/* RIGHT - Jewelry Showcase */}
// // //   {/* <div className="flex-1">Your jewelry image here</div> */}
// // // </div>

// // //       {/* Scroll Indicator */}
      
// // //     </section>
// // //   );
// // // };

// // // export default HeroBanner;

// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import SplitType from 'split-type';

// // interface HeroBannerProps {
// //   backgroundImage?: string;
// //   jewelryImage?: string;
// //   logo?: string;
// //   onCtaClick?: () => void;
// // }

// // /* ─────────────────────────────────────────
// //    Inline CSS injected once for custom fonts
// //    and ornament keyframes
// // ───────────────────────────────────────────*/
// // const OrnamentStyles = () => (
// //   <style>{`
// //     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;500;600&display=swap');

// //     /* Shimmer sweep across the full ornament */
// //     @keyframes ornament-shimmer {
// //       0%   { background-position: -300% center; }
// //       100% { background-position: 300% center; }
// //     }

// //     /* Pulse glow on the centre gem */
// //     @keyframes gem-pulse {
// //       0%, 100% { box-shadow: 0 0 0 0 rgba(159,53,70,0.45), 0 0 6px 2px rgba(159,53,70,0.2); }
// //       50%       { box-shadow: 0 0 0 6px rgba(159,53,70,0), 0 0 14px 4px rgba(232,160,168,0.35); }
// //     }

// //     /* Slow rotation for the side diamonds */
// //     @keyframes diamond-spin {
// //       0%   { transform: rotate(45deg) scale(1); }
// //       50%  { transform: rotate(45deg) scale(1.25); }
// //       100% { transform: rotate(45deg) scale(1); }
// //     }

// //     /* Breathing for wing lines */
// //     @keyframes line-breathe {
// //       0%, 100% { opacity: 0.5; transform: scaleX(1); }
// //       50%       { opacity: 1;   transform: scaleX(1.04); }
// //     }

// //     /* Twinkle for tiny accent dots */
// //     @keyframes twinkle {
// //       0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(0.8); }
// //       50%       { opacity: 1;   transform: rotate(45deg) scale(1.3); }
// //     }

// //     .ornament-shimmer-line {
// //       background: linear-gradient(
// //         90deg,
// //         #9B3040 0%,
// //         #C06070 25%,
// //         #E8D0C0 45%,
// //         #F5E6E0 50%,
// //         #E8D0C0 55%,
// //         #C06070 75%,
// //         #9B3040 100%
// //       );
// //       background-size: 300% auto;
// //       animation: ornament-shimmer 4s linear infinite;
// //     }

// //     .gem-centre {
// //       animation: gem-pulse 2.4s ease-in-out infinite;
// //     }

// //     .diamond-accent {
// //       animation: diamond-spin 3s ease-in-out infinite;
// //     }

// //     .diamond-accent-2 {
// //       animation: diamond-spin 3s ease-in-out infinite;
// //       animation-delay: 1.5s;
// //     }

// //     .wing-line {
// //       animation: line-breathe 3s ease-in-out infinite;
// //       transform-origin: center;
// //     }

// //     .twinkle-dot {
// //       animation: twinkle 2s ease-in-out infinite;
// //     }
// //     .twinkle-dot-2 { animation-delay: 0.7s; }
// //     .twinkle-dot-3 { animation-delay: 1.4s; }

// //     /* CTA underline slide */
// //     .cta-underline {
// //       position: relative;
// //       display: inline-block;
// //     }
// //     .cta-underline::after {
// //       content: '';
// //       position: absolute;
// //       left: 0; bottom: -2px;
// //       width: 0; height: 1px;
// //       background: #9B3040;
// //       transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
// //     }
// //     .cta-wrap:hover .cta-underline::after { width: 100%; }
// //   `}</style>
// // );

// // /* ─────────────────────────────────────────
// //    The luxury ornament divider
// // ───────────────────────────────────────────*/
// // const JewelOrnament = React.forwardRef<HTMLDivElement>((_, ref) => (
// //   <div
// //     ref={ref}
// //     className="flex items-center justify-center gap-0 my-5 lg:my-6 opacity-0"
// //     aria-hidden="true"
// //   >
// //     {/* ── Far left thin line ── */}
// //     <div
// //       className="wing-line ornament-shimmer-line"
// //       style={{ width: 48, height: 1, borderRadius: 1 }}
// //     />

// //     {/* ── Twinkle dot ── */}
// //     <div
// //       className="twinkle-dot mx-2"
// //       style={{ width: 4, height: 4, background: '#C06070', transform: 'rotate(45deg)' }}
// //     />

// //     {/* ── Mid line ── */}
// //     <div
// //       className="wing-line ornament-shimmer-line"
// //       style={{ width: 28, height: 1, borderRadius: 1 }}
// //     />

// //     {/* ── Small side diamond ── */}
// //     <div className="mx-2 relative flex items-center justify-center">
// //       <div
// //         className="diamond-accent"
// //         style={{
// //           width: 10, height: 10,
// //           background: '#9B3040',
// //           transform: 'rotate(45deg)',
// //           boxShadow: '0 0 4px rgba(159,53,70,0.4)',
// //         }}
// //       />
// //     </div>

// //     {/* ── Inner line left ── */}
// //     <div
// //       className="ornament-shimmer-line"
// //       style={{ width: 18, height: 1 }}
// //     />

// //     {/* ── CENTRE GEM (multi-layered) ── */}
// //     <div className="mx-2 relative flex items-center justify-center">
// //       {/* Outer ring */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: 28, height: 28,
// //           border: '1px solid rgba(159,53,70,0.3)',
// //           transform: 'rotate(45deg)',
// //           borderRadius: 2,
// //         }}
// //       />
// //       {/* Middle ring */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           width: 20, height: 20,
// //           border: '1px solid rgba(159,53,70,0.5)',
// //           transform: 'rotate(45deg)',
// //           borderRadius: 1,
// //         }}
// //       />
// //       {/* Solid gem */}
// //       <div
// //         className="gem-centre"
// //         style={{
// //           width: 13, height: 13,
// //           background: 'linear-gradient(135deg, #7B1F2A 0%, #C06070 50%, #9B3040 100%)',
// //           transform: 'rotate(45deg)',
// //           borderRadius: 1,
// //           zIndex: 1,
// //         }}
// //       />
// //     </div>

// //     {/* ── Inner line right ── */}
// //     <div
// //       className="ornament-shimmer-line"
// //       style={{ width: 18, height: 1 }}
// //     />

// //     {/* ── Small side diamond right ── */}
// //     <div className="mx-2 relative flex items-center justify-center">
// //       <div
// //         className="diamond-accent-2"
// //         style={{
// //           width: 10, height: 10,
// //           background: '#9B3040',
// //           transform: 'rotate(45deg)',
// //           boxShadow: '0 0 4px rgba(159,53,70,0.4)',
// //         }}
// //       />
// //     </div>

// //     {/* ── Mid line right ── */}
// //     <div
// //       className="wing-line ornament-shimmer-line"
// //       style={{ width: 28, height: 1, borderRadius: 1 }}
// //     />

// //     {/* ── Twinkle dot right ── */}
// //     <div
// //       className="twinkle-dot twinkle-dot-2 mx-2"
// //       style={{ width: 4, height: 4, background: '#C06070', transform: 'rotate(45deg)' }}
// //     />

// //     {/* ── Far right line ── */}
// //     <div
// //       className="wing-line ornament-shimmer-line"
// //       style={{ width: 48, height: 1, borderRadius: 1 }}
// //     />
// //   </div>
// // ));
// // JewelOrnament.displayName = 'JewelOrnament';

// // /* ─────────────────────────────────────────
// //    Main HeroBanner
// // ───────────────────────────────────────────*/
// // export const HeroBanner: React.FC<HeroBannerProps> = ({
// //   backgroundImage = '/assets/herobg2.png',
// //   jewelryImage = '/assets/jewelry.png',
// //   logo = '/assets/logo.png',
// //   onCtaClick,
// // }) => {
// //   const titleRef   = useRef<HTMLHeadingElement>(null);
// //   const subtitleRef = useRef<HTMLParagraphElement>(null);
// //   const ctaRef     = useRef<HTMLDivElement>(null);
// //   const logoRef    = useRef<HTMLDivElement>(null);
// //   const decorRef   = useRef<HTMLDivElement>(null);
// //   const rightRef   = useRef<HTMLDivElement>(null);
// //   const taglineRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     let split: SplitType | null = null;

// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

// //       /* Logo */
// //       if (logoRef.current) {
// //         tl.fromTo(logoRef.current,
// //           { opacity: 0, y: -16 },
// //           { opacity: 1, y: 0, duration: 0.9 },
// //           0
// //         );
// //       }

// //       /* Title char-by-char */
// //       if (titleRef.current) {
// //         split = new SplitType(titleRef.current, { types: 'chars,words' });
// //         tl.fromTo(split.chars,
// //           { opacity: 0, y: 32, rotateX: -30 },
// //           { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.018 },
// //           0.1
// //         );
// //       }

// //       /* Ornament: scale up from centre with a bounce */
// //       if (decorRef.current) {
// //         tl.fromTo(decorRef.current,
// //           { scaleX: 0, opacity: 0 },
// //           {
// //             scaleX: 1, opacity: 1, duration: 0.9,
// //             ease: 'elastic.out(1, 0.55)',
// //             transformOrigin: 'center',
// //           },
// //           0.65
// //         );
// //       }

// //       /* Subtitle words stagger */
// //       if (subtitleRef.current) {
// //         const words = subtitleRef.current.querySelectorAll('span');
// //         tl.fromTo(words.length ? words : [subtitleRef.current],
// //           { opacity: 0, y: 14 },
// //           { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 },
// //           0.85
// //         );
// //       }

// //       /* Tagline */
// //       if (taglineRef.current) {
// //         tl.fromTo(taglineRef.current,
// //           { opacity: 0, letterSpacing: '0.4em' },
// //           { opacity: 1, letterSpacing: '0.2em', duration: 0.8 },
// //           0.95
// //         );
// //       }

// //       /* CTA */
// //       if (ctaRef.current) {
// //         tl.fromTo(ctaRef.current,
// //           { opacity: 0, y: 12 },
// //           { opacity: 1, y: 0, duration: 0.8 },
// //           1.05
// //         );
// //       }

// //       /* Right jewelry image */
// //       if (rightRef.current) {
// //         tl.fromTo(rightRef.current,
// //           { opacity: 0, x: 50, scale: 0.96 },
// //           { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
// //           0.3
// //         );
// //       }
// //     });

// //     return () => { ctx.revert(); split?.revert(); };
// //   }, []);

// //   return (
// //     <>
// //       <OrnamentStyles />

// //       <section
// //         className="relative w-full h-screen overflow-hidden"
// //         style={{ fontFamily: "'Cormorant Garamond', serif" }}
// //       >
// //         {/* Background */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //           style={{ backgroundImage: `url(${backgroundImage})` }}
// //         />

// //         {/* Gradient overlays */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-amber-900/10" />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
// //         <div className="absolute inset-0 pointer-events-none"
// //           style={{
// //             background:
// //               'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(159,53,70,0.04) 0%, transparent 70%),' +
// //               'radial-gradient(ellipse 50% 50% at 80% 100%, rgba(232,160,168,0.08) 0%, transparent 60%)',
// //           }}
// //         />

// //         {/* ── Main Layout ── */}
// //         <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-8 lg:px-12 xl:px-16 gap-8 lg:gap-12 flex-col lg:flex-row justify-center lg:justify-between">

// //           {/* LEFT CONTENT */}
// //           <div className="flex-1 max-w-2xl flex flex-col items-center justify-center text-center px-4 lg:px-8">

// //             {/* Optional Logo */}
// //             <div ref={logoRef} className="mb-6 lg:mb-8 opacity-0" />

// //             {/* Title */}
// //             <h1
// //               ref={titleRef}
// //               className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight lg:leading-snug mb-2 lg:mb-3"
// //               style={{ color: '#3A1520' }}
// //             >
// //               Timeless Elegance.
// //               <br />
// //               <span className="font-semibold" style={{ color: '#7B1F2A' }}>
// //                 Crafted for Eternity.
// //               </span>
// //             </h1>

// //             {/* ── JEWEL ORNAMENT DIVIDER ── */}
// //             <JewelOrnament ref={decorRef} />

// //             {/* Subtitle — each word wrapped for stagger */}
// //             <p
// //               ref={subtitleRef}
// //               className="text-base sm:text-lg lg:text-xl leading-relaxed mb-2 lg:mb-3 max-w-md opacity-0"
// //               style={{ color: '#9B3040' }}
// //             >
// //               {'A celebration of heritage, artistry and unmatched beauty.'
// //                 .split(' ')
// //                 .map((w, i) => (
// //                   <span
// //                     key={i}
// //                     style={{ display: 'inline-block', marginRight: '0.28em' }}
// //                   >
// //                     {w}
// //                   </span>
// //                 ))}
// //             </p>

// //             {/* Tagline / edition label */}
// //             <div
// //               ref={taglineRef}
// //               className="opacity-0 mb-8 lg:mb-10"
// //             >
// //               <span className='text-[#290102]'
// //                 style={{
// //                   fontFamily: "'Cinzel', serif",
// //                   fontSize: 12,
// //                   letterSpacing: '0.2em',
                  
// //                   textTransform: 'uppercase',
// //                 }}
// //               >
// //                 Est. 1987 &nbsp;·&nbsp; Haute Joaillerie
// //               </span>
// //             </div>

// //             {/* CTA Button */}
// //            <button className="bg-rose-900 text-xl font-['Cormorant_SC']   text-[#f9dbcb] px-10 py-2">
// //             Explore Our Collections
// //            </button>
// //           </div>

// //           {/* RIGHT — Jewelry Showcase placeholder */}
// //           <div ref={rightRef} className="flex-1 opacity-0">
// //             {/* jewelry image goes here */}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default HeroBanner;



// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import SplitType from 'split-type';

// // interface HeroBannerProps {
// //   backgroundImage?: string;
// //   jewelryImage?: string;
// //   logo?: string;
// //   onCtaClick?: () => void;
// // }

// // /* ─────────────────────────────────────────
// //    Custom CSS for complex animations only
// // ───────────────────────────────────────────*/
// // const AnimationStyles = () => (
// //   <style jsx global>{`
// //     @keyframes ornament-shimmer {
// //       0%   { background-position: -300% center; }
// //       100% { background-position: 300% center; }
// //     }

// //     @keyframes gem-pulse {
// //       0%, 100% { box-shadow: 0 0 0 0 rgba(159,53,70,0.45), 0 0 6px 2px rgba(159,53,70,0.2); }
// //       50%       { box-shadow: 0 0 0 6px rgba(159,53,70,0), 0 0 14px 4px rgba(232,160,168,0.35); }
// //     }

// //     @keyframes diamond-spin {
// //       0%   { transform: rotate(45deg) scale(1); }
// //       50%  { transform: rotate(45deg) scale(1.25); }
// //       100% { transform: rotate(45deg) scale(1); }
// //     }

// //     @keyframes line-breathe {
// //       0%, 100% { opacity: 0.5; transform: scaleX(1); }
// //       50%       { opacity: 1;   transform: scaleX(1.04); }
// //     }

// //     @keyframes twinkle {
// //       0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(0.8); }
// //       50%       { opacity: 1;   transform: rotate(45deg) scale(1.3); }
// //     }

// //     .ornament-shimmer-line {
// //       background: linear-gradient(
// //         90deg,
// //         #9B3040 0%,
// //         #C06070 25%,
// //         #E8D0C0 45%,
// //         #F5E6E0 50%,
// //         #E8D0C0 55%,
// //         #C06070 75%,
// //         #9B3040 100%
// //       );
// //       background-size: 300% auto;
// //       animation: ornament-shimmer 4s linear infinite;
// //     }

// //     .gem-centre {
// //       animation: gem-pulse 2.4s ease-in-out infinite;
// //     }

// //     .diamond-accent {
// //       animation: diamond-spin 3s ease-in-out infinite;
// //     }

// //     .diamond-accent-2 {
// //       animation: diamond-spin 3s ease-in-out infinite;
// //       animation-delay: 1.5s;
// //     }

// //     .wing-line {
// //       animation: line-breathe 3s ease-in-out infinite;
// //       transform-origin: center;
// //     }

// //     .twinkle-dot {
// //       animation: twinkle 2s ease-in-out infinite;
// //     }
// //     .twinkle-dot-2 { animation-delay: 0.7s; }
// //     .twinkle-dot-3 { animation-delay: 1.4s; }
// //   `}</style>
// // );

// // /* ─────────────────────────────────────────
// //    The luxury ornament divider
// // ───────────────────────────────────────────*/
// // const JewelOrnament = React.forwardRef<HTMLDivElement>((_, ref) => (
// //   <div
// //     ref={ref}
// //     className="flex items-center justify-center gap-0 my-5 lg:my-6 opacity-0"
// //     aria-hidden="true"
// //   >
// //     {/* Far left thin line */}
// //     <div className="wing-line ornament-shimmer-line w-12 h-px rounded-full" />

// //     {/* Twinkle dot */}
// //     <div className="twinkle-dot mx-2 w-1 h-1 bg-[#C06070] rotate-45" />

// //     {/* Mid line */}
// //     <div className="wing-line ornament-shimmer-line w-7 h-px rounded-full" />

// //     {/* Small side diamond */}
// //     <div className="mx-2 relative flex items-center justify-center">
// //       <div className="diamond-accent w-2.5 h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
// //     </div>

// //     {/* Inner line left */}
// //     <div className="ornament-shimmer-line w-[18px] h-px" />

// //     {/* CENTRE GEM (multi-layered) */}
// //     <div className="mx-2 relative flex items-center justify-center">
// //       {/* Outer ring */}
// //       <div className="absolute w-7 h-7 border border-[#9B3040]/30 rotate-45 rounded-sm" />
// //       {/* Middle ring */}
// //       <div className="absolute w-5 h-5 border border-[#9B3040]/50 rotate-45 rounded-[1px]" />
// //       {/* Solid gem */}
// //       <div className="gem-centre w-[13px] h-[13px] bg-gradient-to-br from-[#7B1F2A] via-[#C06070] to-[#9B3040] rotate-45 rounded-[1px] z-10" />
// //     </div>

// //     {/* Inner line right */}
// //     <div className="ornament-shimmer-line w-[18px] h-px" />

// //     {/* Small side diamond right */}
// //     <div className="mx-2 relative flex items-center justify-center">
// //       <div className="diamond-accent-2 w-2.5 h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
// //     </div>

// //     {/* Mid line right */}
// //     <div className="wing-line ornament-shimmer-line w-7 h-px rounded-full" />

// //     {/* Twinkle dot right */}
// //     <div className="twinkle-dot twinkle-dot-2 mx-2 w-1 h-1 bg-[#C06070] rotate-45" />

// //     {/* Far right line */}
// //     <div className="wing-line ornament-shimmer-line w-12 h-px rounded-full" />
// //   </div>
// // ));
// // JewelOrnament.displayName = 'JewelOrnament';

// // /* ─────────────────────────────────────────
// //    Main HeroBanner
// // ───────────────────────────────────────────*/
// // export const HeroBanner: React.FC<HeroBannerProps> = ({
// //   backgroundImage = '/assets/herobg2.png',
// //   jewelryImage = '/assets/jewelry.png',
// //   logo = '/assets/logo.png',
// //   onCtaClick,
// // }) => {
// //   const titleRef = useRef<HTMLHeadingElement>(null);
// //   const subtitleRef = useRef<HTMLParagraphElement>(null);
// //   const ctaRef = useRef<HTMLDivElement>(null);
// //   const logoRef = useRef<HTMLDivElement>(null);
// //   const decorRef = useRef<HTMLDivElement>(null);
// //   const rightRef = useRef<HTMLDivElement>(null);
// //   const taglineRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     let split: SplitType | null = null;

// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

// //       /* Logo */
// //       if (logoRef.current) {
// //         tl.fromTo(logoRef.current,
// //           { opacity: 0, y: -16 },
// //           { opacity: 1, y: 0, duration: 0.9 },
// //           0
// //         );
// //       }

// //       /* Title char-by-char */
// //       if (titleRef.current) {
// //         split = new SplitType(titleRef.current, { types: 'chars,words' });
// //         tl.fromTo(split.chars,
// //           { opacity: 0, y: 32, rotateX: -30 },
// //           { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.018 },
// //           0.1
// //         );
// //       }

// //       /* Ornament: scale up from centre with a bounce */
// //       if (decorRef.current) {
// //         tl.fromTo(decorRef.current,
// //           { scaleX: 0, opacity: 0 },
// //           {
// //             scaleX: 1, opacity: 1, duration: 0.9,
// //             ease: 'elastic.out(1, 0.55)',
// //             transformOrigin: 'center',
// //           },
// //           0.65
// //         );
// //       }

// //       /* Subtitle words stagger */
// //       if (subtitleRef.current) {
// //         const words = subtitleRef.current.querySelectorAll('span');
// //         tl.fromTo(words.length ? words : [subtitleRef.current],
// //           { opacity: 0, y: 14 },
// //           { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 },
// //           0.85
// //         );
// //       }

// //       /* Tagline */
// //       if (taglineRef.current) {
// //         tl.fromTo(taglineRef.current,
// //           { opacity: 0, letterSpacing: '0.4em' },
// //           { opacity: 1, letterSpacing: '0.2em', duration: 0.8 },
// //           0.95
// //         );
// //       }

// //       /* CTA */
// //       if (ctaRef.current) {
// //         tl.fromTo(ctaRef.current,
// //           { opacity: 0, y: 12 },
// //           { opacity: 1, y: 0, duration: 0.8 },
// //           1.05
// //         );
// //       }

// //       /* Right jewelry image */
// //       if (rightRef.current) {
// //         tl.fromTo(rightRef.current,
// //           { opacity: 0, x: 50, scale: 0.96 },
// //           { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
// //           0.3
// //         );
// //       }
// //     });

// //     return () => { ctx.revert(); split?.revert(); };
// //   }, []);

// //   return (
// //     <>
// //       <AnimationStyles />

// //       <section className="relative w-full h-screen overflow-hidden font-['Cormorant_Garamond']">
// //         {/* Background */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //           style={{ backgroundImage: `url(${backgroundImage})` }}
// //         />

// //         {/* Gradient overlays */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-amber-900/10" />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
// //         <div 
// //           className="absolute inset-0 pointer-events-none"
// //           style={{
// //             background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(159,53,70,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 100%, rgba(232,160,168,0.08) 0%, transparent 60%)'
// //           }}
// //         />

// //         {/* Main Layout */}
// //         <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-8 lg:px-12 xl:px-16 gap-8 lg:gap-12 flex-col lg:flex-row justify-center lg:justify-between">

// //           {/* LEFT CONTENT */}
// //           <div className="flex-1 max-w-2xl flex flex-col items-center justify-center text-center px-4 lg:px-8">

// //             {/* Optional Logo */}
// //             <div ref={logoRef} className="mb-6 lg:mb-8 opacity-0" />

// //             {/* Title */}
// //             <h1
// //               ref={titleRef}
// //               className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight lg:leading-snug mb-2 lg:mb-3 text-[#3A1520]"
// //             >
// //               Timeless Elegance.
// //               <br />
// //               <span className="font-semibold text-[#7B1F2A]">
// //                 Crafted for Eternity.
// //               </span>
// //             </h1>

// //             {/* Jewel Ornament Divider */}
// //             <JewelOrnament ref={decorRef} />

// //             {/* Subtitle */}
// //             <p
// //               ref={subtitleRef}
// //               className="text-base sm:text-lg lg:text-xl leading-relaxed mb-2 lg:mb-3 max-w-md opacity-0 text-[#9B3040]"
// //             >
// //               {'A celebration of heritage, artistry and unmatched beauty.'
// //                 .split(' ')
// //                 .map((w, i) => (
// //                   <span
// //                     key={i}
// //                     className="inline-block mr-[0.28em]"
// //                   >
// //                     {w}
// //                   </span>
// //                 ))}
// //             </p>

// //             {/* Tagline / edition label */}
// //             <div
// //               ref={taglineRef}
// //               className="opacity-0 mb-8 lg:mb-10"
// //             >
// //               <span className="text-[#290102] font-['Cinzel'] text-xs tracking-[0.2em] uppercase">
// //                 Est. 1987 &nbsp;·&nbsp; Haute Joaillerie
// //               </span>
// //             </div>

// //             {/* CTA Button */}
// //             <div ref={ctaRef} className="opacity-0">
// //               <button 
// //                 onClick={onCtaClick}
// //                 className="group relative bg-rose-900 text-xl font-['Cormorant_SC'] text-[#f9dbcb] px-10 py-2 overflow-hidden transition-all duration-500 hover:bg-rose-800 hover:px-12 hover:tracking-wider"
// //               >
// //                 <span className="relative z-10">Explore Our Collections</span>
// //                 <span className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
// //               </button>
// //             </div>
// //           </div>

         
// //         </div>
// //       </section>

// //       {/* Add floating animation for jewelry image */}
// //       <style jsx global>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-10px); }
// //         }
// //         .animate-float {
// //           animation: float 4s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default HeroBanner;



// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import SplitType from 'split-type';

// // interface HeroBannerProps {
// //   backgroundImage?: string;
// //   mobileBackgroundImage?: string;
// //   jewelryImage?: string;
// //   logo?: string;
// //   onCtaClick?: () => void;
// // }

// // /* ─────────────────────────────────────────
// //    Custom CSS for complex animations only
// // ───────────────────────────────────────────*/
// // const AnimationStyles = () => (
// //   <style jsx global>{`
// //     @keyframes ornament-shimmer {
// //       0%   { background-position: -300% center; }
// //       100% { background-position: 300% center; }
// //     }

// //     @keyframes gem-pulse {
// //       0%, 100% { box-shadow: 0 0 0 0 rgba(159,53,70,0.45), 0 0 6px 2px rgba(159,53,70,0.2); }
// //       50%       { box-shadow: 0 0 0 6px rgba(159,53,70,0), 0 0 14px 4px rgba(232,160,168,0.35); }
// //     }

// //     @keyframes diamond-spin {
// //       0%   { transform: rotate(45deg) scale(1); }
// //       50%  { transform: rotate(45deg) scale(1.25); }
// //       100% { transform: rotate(45deg) scale(1); }
// //     }

// //     @keyframes line-breathe {
// //       0%, 100% { opacity: 0.5; transform: scaleX(1); }
// //       50%       { opacity: 1;   transform: scaleX(1.04); }
// //     }

// //     @keyframes twinkle {
// //       0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(0.8); }
// //       50%       { opacity: 1;   transform: rotate(45deg) scale(1.3); }
// //     }

// //     .ornament-shimmer-line {
// //       background: linear-gradient(
// //         90deg,
// //         #9B3040 0%,
// //         #C06070 25%,
// //         #E8D0C0 45%,
// //         #F5E6E0 50%,
// //         #E8D0C0 55%,
// //         #C06070 75%,
// //         #9B3040 100%
// //       );
// //       background-size: 300% auto;
// //       animation: ornament-shimmer 4s linear infinite;
// //     }

// //     .gem-centre {
// //       animation: gem-pulse 2.4s ease-in-out infinite;
// //     }

// //     .diamond-accent {
// //       animation: diamond-spin 3s ease-in-out infinite;
// //     }

// //     .diamond-accent-2 {
// //       animation: diamond-spin 3s ease-in-out infinite;
// //       animation-delay: 1.5s;
// //     }

// //     .wing-line {
// //       animation: line-breathe 3s ease-in-out infinite;
// //       transform-origin: center;
// //     }

// //     .twinkle-dot {
// //       animation: twinkle 2s ease-in-out infinite;
// //     }
// //     .twinkle-dot-2 { animation-delay: 0.7s; }
// //     .twinkle-dot-3 { animation-delay: 1.4s; }
// //   `}</style>
// // );

// // /* ─────────────────────────────────────────
// //    The luxury ornament divider
// // ───────────────────────────────────────────*/
// // const JewelOrnament = React.forwardRef<HTMLDivElement>((_, ref) => (
// //   <div
// //     ref={ref}
// //     className="flex items-center justify-center gap-0 my-3 sm:my-4 md:my-5 lg:my-6 opacity-0"
// //     aria-hidden="true"
// //   >
// //     {/* Far left thin line */}
// //     <div className="wing-line ornament-shimmer-line w-6 sm:w-8 md:w-12 h-px rounded-full" />

// //     {/* Twinkle dot */}
// //     <div className="twinkle-dot mx-0.5 sm:mx-1 md:mx-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#C06070] rotate-45" />

// //     {/* Mid line */}
// //     <div className="wing-line ornament-shimmer-line w-4 sm:w-5 md:w-7 h-px rounded-full" />

// //     {/* Small side diamond */}
// //     <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
// //       <div className="diamond-accent w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
// //     </div>

// //     {/* Inner line left */}
// //     <div className="ornament-shimmer-line w-2 sm:w-3 md:w-[18px] h-px" />

// //     {/* CENTRE GEM (multi-layered) */}
// //     <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
// //       {/* Outer ring */}
// //       <div className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 border border-[#9B3040]/30 rotate-45 rounded-sm" />
// //       {/* Middle ring */}
// //       <div className="absolute w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 border border-[#9B3040]/50 rotate-45 rounded-[1px]" />
// //       {/* Solid gem */}
// //       <div className="gem-centre w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-[13px] md:h-[13px] bg-gradient-to-br from-[#7B1F2A] via-[#C06070] to-[#9B3040] rotate-45 rounded-[1px] z-10" />
// //     </div>

// //     {/* Inner line right */}
// //     <div className="ornament-shimmer-line w-2 sm:w-3 md:w-[18px] h-px" />

// //     {/* Small side diamond right */}
// //     <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
// //       <div className="diamond-accent-2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
// //     </div>

// //     {/* Mid line right */}
// //     <div className="wing-line ornament-shimmer-line w-4 sm:w-5 md:w-7 h-px rounded-full" />

// //     {/* Twinkle dot right */}
// //     <div className="twinkle-dot twinkle-dot-2 mx-0.5 sm:mx-1 md:mx-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#C06070] rotate-45" />

// //     {/* Far right line */}
// //     <div className="wing-line ornament-shimmer-line w-6 sm:w-8 md:w-12 h-px rounded-full" />
// //   </div>
// // ));
// // JewelOrnament.displayName = 'JewelOrnament';

// // /* ─────────────────────────────────────────
// //    Main HeroBanner
// // ───────────────────────────────────────────*/
// // export const HeroBanner: React.FC<HeroBannerProps> = ({
// //   backgroundImage = '/assets/herobg2.png',
// //   mobileBackgroundImage = '/assets/hero-mobile.jpeg',
// //   jewelryImage = '/assets/jewelry.png',
// //   logo = '/assets/logo.png',
// //   onCtaClick,
// // }) => {
// //   const titleRef = useRef<HTMLHeadingElement>(null);
// //   const subtitleRef = useRef<HTMLParagraphElement>(null);
// //   const ctaRef = useRef<HTMLDivElement>(null);
// //   const logoRef = useRef<HTMLDivElement>(null);
// //   const decorRef = useRef<HTMLDivElement>(null);
// //   const rightRef = useRef<HTMLDivElement>(null);
// //   const taglineRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     let split: SplitType | null = null;

// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

// //       /* Logo */
// //       if (logoRef.current) {
// //         tl.fromTo(logoRef.current,
// //           { opacity: 0, y: -16 },
// //           { opacity: 1, y: 0, duration: 0.9 },
// //           0
// //         );
// //       }

// //       /* Title char-by-char */
// //       if (titleRef.current) {
// //         split = new SplitType(titleRef.current, { types: 'chars,words' });
// //         tl.fromTo(split.chars,
// //           { opacity: 0, y: 32, rotateX: -30 },
// //           { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.018 },
// //           0.1
// //         );
// //       }

// //       /* Ornament: scale up from centre with a bounce */
// //       if (decorRef.current) {
// //         tl.fromTo(decorRef.current,
// //           { scaleX: 0, opacity: 0 },
// //           {
// //             scaleX: 1, opacity: 1, duration: 0.9,
// //             ease: 'elastic.out(1, 0.55)',
// //             transformOrigin: 'center',
// //           },
// //           0.65
// //         );
// //       }

// //       /* Subtitle words stagger */
// //       if (subtitleRef.current) {
// //         const words = subtitleRef.current.querySelectorAll('span');
// //         tl.fromTo(words.length ? words : [subtitleRef.current],
// //           { opacity: 0, y: 14 },
// //           { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 },
// //           0.85
// //         );
// //       }

// //       /* Tagline */
// //       if (taglineRef.current) {
// //         tl.fromTo(taglineRef.current,
// //           { opacity: 0, letterSpacing: '0.4em' },
// //           { opacity: 1, letterSpacing: '0.2em', duration: 0.8 },
// //           0.95
// //         );
// //       }

// //       /* CTA */
// //       if (ctaRef.current) {
// //         tl.fromTo(ctaRef.current,
// //           { opacity: 0, y: 12 },
// //           { opacity: 1, y: 0, duration: 0.8 },
// //           1.05
// //         );
// //       }

// //       /* Right jewelry image */
// //       if (rightRef.current) {
// //         tl.fromTo(rightRef.current,
// //           { opacity: 0, x: 50, scale: 0.96 },
// //           { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
// //           0.3
// //         );
// //       }
// //     });

// //     return () => { ctx.revert(); split?.revert(); };
// //   }, []);

// //   return (
// //     <>
// //       <AnimationStyles />

// //       <section className="relative w-full min-h-screen h-auto md:h-screen overflow-hidden font-['Cormorant_Garamond']">
// //         {/* Background - Desktop */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
// //           style={{ backgroundImage: `url(${backgroundImage})` }}
// //         />

// //         {/* Background - Mobile */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
// //           style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
// //         />

// //         {/* Gradient overlays */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-amber-900/5 md:from-white/30" />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent md:from-black/5" />
// //         <div 
// //           className="absolute inset-0 pointer-events-none"
// //           style={{
// //             background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(159,53,70,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 100%, rgba(232,160,168,0.08) 0%, transparent 60%)'
// //           }}
// //         />

// //         {/* Main Layout */}
// //         <div className="relative z-10 w-full min-h-screen h-auto md:h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-6 md:gap-8 lg:gap-12 flex-col lg:flex-row justify-center lg:justify-between py-12 md:py-0">

// //           {/* LEFT CONTENT */}
// //           <div className="flex-1 max-w-2xl flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-8 mt-8 sm:mt-12 md:mt-0">

// //             {/* Optional Logo */}
// //             <div ref={logoRef} className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 opacity-0">
// //               {logo && (
// //                 <img 
// //                   src={logo} 
// //                   alt="Logo" 
// //                   className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto"
// //                 />
// //               )}
// //             </div>

// //             {/* Title - Optimized for mobile */}
// //             <h1
// //               ref={titleRef}
// //               className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:leading-snug mb-2 md:mb-3 text-[#3A1520] px-2"
// //             >
// //               <span className="block">Timeless Elegance.</span>
// //               <span className="block font-semibold text-[#7B1F2A] mt-1 sm:mt-2">
// //                 Crafted for Eternity.
// //               </span>
// //             </h1>

// //             {/* Jewel Ornament Divider */}
// //             <JewelOrnament ref={decorRef} />

// //             {/* Subtitle - Better mobile spacing */}
// //             <p
// //               ref={subtitleRef}
// //               className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed sm:leading-relaxed mb-3 md:mb-4 max-w-md opacity-0 text-[#9B3040] px-3 sm:px-4"
// //             >
// //               {'A celebration of heritage, artistry and unmatched beauty.'
// //                 .split(' ')
// //                 .map((w, i) => (
// //                   <span
// //                     key={i}
// //                     className="inline-block mr-[0.28em]"
// //                   >
// //                     {w}
// //                   </span>
// //                 ))}
// //             </p>

// //             {/* Tagline / edition label */}
// //             <div
// //               ref={taglineRef}
// //               className="opacity-0 mb-5 sm:mb-6 md:mb-8 lg:mb-10"
// //             >
// //               <span className="text-[#290102] font-['Cinzel'] text-[8px] sm:text-[10px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase">
// //                 Est. 1987 &nbsp;·&nbsp; Haute Joaillerie
// //               </span>
// //             </div>

// //             {/* CTA Button - Responsive sizing */}
// //             <div ref={ctaRef} className="opacity-0 w-full sm:w-auto">
// //               <button 
// //                 onClick={onCtaClick}
// //                 className="group relative bg-rose-900 text-base sm:text-lg md:text-xl font-['Cormorant_SC'] text-[#f9dbcb] px-5 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 md:py-2.5 overflow-hidden transition-all duration-500 hover:bg-rose-800 hover:px-6 sm:hover:px-8 md:hover:px-12 hover:tracking-wider w-full sm:w-auto whitespace-nowrap sm:whitespace-normal"
// //               >
// //                 <span className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl">
// //                   Explore Our Collections
// //                 </span>
// //                 <span className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* RIGHT CONTENT - Optional jewelry image (hidden on mobile if needed) */}
// //           {jewelryImage && (
// //             <div 
// //               ref={rightRef}
// //               className="hidden lg:block flex-1 max-w-md opacity-0"
// //             >
// //               <img 
// //                 src={jewelryImage} 
// //                 alt="Featured jewelry piece" 
// //                 className="w-full h-auto object-contain animate-float"
// //               />
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* Add floating animation for jewelry image */}
// //       <style jsx global>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-10px); }
// //         }
// //         .animate-float {
// //           animation: float 4s ease-in-out infinite;
// //         }
        
// //         /* Mobile-specific adjustments */
// //         @media (max-width: 640px) {
// //           .font-['Cormorant_Garamond'] h1 {
// //             font-size: 1.25rem;
// //             line-height: 1.4;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default HeroBanner;


// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import SplitType from 'split-type';

// interface HeroBannerProps {
//   backgroundImage?: string;
//   mobileBackgroundImage?: string;
//   jewelryImage?: string;
//   logo?: string;
//   onCtaClick?: () => void;
// }

// const AnimationStyles = () => (
//   <style>{`
//     @keyframes ornament-shimmer {
//       0%   { background-position: -300% center; }
//       100% { background-position: 300% center; }
//     }
//     @keyframes gem-pulse {
//       0%, 100% { box-shadow: 0 0 0 0 rgba(159,53,70,0.45), 0 0 6px 2px rgba(159,53,70,0.2); }
//       50%       { box-shadow: 0 0 0 6px rgba(159,53,70,0), 0 0 14px 4px rgba(232,160,168,0.35); }
//     }
//     @keyframes diamond-spin {
//       0%   { transform: rotate(45deg) scale(1); }
//       50%  { transform: rotate(45deg) scale(1.25); }
//       100% { transform: rotate(45deg) scale(1); }
//     }
//     @keyframes line-breathe {
//       0%, 100% { opacity: 0.5; transform: scaleX(1); }
//       50%       { opacity: 1;   transform: scaleX(1.04); }
//     }
//     @keyframes twinkle {
//       0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(0.8); }
//       50%       { opacity: 1;   transform: rotate(45deg) scale(1.3); }
//     }
//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50%       { transform: translateY(-10px); }
//     }
//     .ornament-shimmer-line {
//       background: linear-gradient(90deg,#9B3040 0%,#C06070 25%,#E8D0C0 45%,#F5E6E0 50%,#E8D0C0 55%,#C06070 75%,#9B3040 100%);
//       background-size: 300% auto;
//       animation: ornament-shimmer 4s linear infinite;
//     }
//     .gem-centre      { animation: gem-pulse 2.4s ease-in-out infinite; }
//     .diamond-accent  { animation: diamond-spin 3s ease-in-out infinite; }
//     .diamond-accent-2{ animation: diamond-spin 3s ease-in-out infinite; animation-delay: 1.5s; }
//     .wing-line       { animation: line-breathe 3s ease-in-out infinite; transform-origin: center; }
//     .twinkle-dot     { animation: twinkle 2s ease-in-out infinite; }
//     .twinkle-dot-2   { animation-delay: 0.7s; }
//     .twinkle-dot-3   { animation-delay: 1.4s; }
//     .animate-float   { animation: float 4s ease-in-out infinite; }
//   `}</style>
// );

// const JewelOrnament = React.forwardRef<HTMLDivElement>((_, ref) => (
//   <div
//     ref={ref}
//     className="flex items-center justify-center gap-0 my-2 sm:my-3 md:my-5 lg:my-6 opacity-0"
//     aria-hidden="true"
//   >
//     <div className="wing-line ornament-shimmer-line w-5 sm:w-8 md:w-12 h-px rounded-full" />
//     <div className="twinkle-dot mx-0.5 sm:mx-1 md:mx-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#C06070] rotate-45" />
//     <div className="wing-line ornament-shimmer-line w-3 sm:w-5 md:w-7 h-px rounded-full" />
//     <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
//       <div className="diamond-accent w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
//     </div>
//     <div className="ornament-shimmer-line w-1.5 sm:w-3 md:w-[18px] h-px" />
//     <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
//       <div className="absolute w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 border border-[#9B3040]/30 rotate-45 rounded-sm" />
//       <div className="absolute w-2 h-2 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 border border-[#9B3040]/50 rotate-45 rounded-[1px]" />
//       <div className="gem-centre w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-[13px] md:h-[13px] bg-gradient-to-br from-[#7B1F2A] via-[#C06070] to-[#9B3040] rotate-45 rounded-[1px] z-10" />
//     </div>
//     <div className="ornament-shimmer-line w-1.5 sm:w-3 md:w-[18px] h-px" />
//     <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
//       <div className="diamond-accent-2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
//     </div>
//     <div className="wing-line ornament-shimmer-line w-3 sm:w-5 md:w-7 h-px rounded-full" />
//     <div className="twinkle-dot twinkle-dot-2 mx-0.5 sm:mx-1 md:mx-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#C06070] rotate-45" />
//     <div className="wing-line ornament-shimmer-line w-5 sm:w-8 md:w-12 h-px rounded-full" />
//   </div>
// ));
// JewelOrnament.displayName = 'JewelOrnament';

// export const HeroBanner: React.FC<HeroBannerProps> = ({
//   backgroundImage = '/assets/herobg2.png',
//   mobileBackgroundImage = '/assets/hero-mobile.jpeg',
//   jewelryImage = '/assets/jewelry.png',
//   logo = '/assets/logo.png',
//   onCtaClick,
// }) => {
//   const titleRef    = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef      = useRef<HTMLDivElement>(null);
//   const logoRef     = useRef<HTMLDivElement>(null);
//   const decorRef    = useRef<HTMLDivElement>(null);
//   const rightRef    = useRef<HTMLDivElement>(null);
//   const taglineRef  = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let split: SplitType | null = null;
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//       if (logoRef.current)
//         tl.fromTo(logoRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.9 }, 0);

//       if (titleRef.current) {
//         split = new SplitType(titleRef.current, { types: 'chars,words' });
//         tl.fromTo(split.chars,
//           { opacity: 0, y: 32, rotateX: -30 },
//           { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.018 }, 0.1);
//       }

//       if (decorRef.current)
//         tl.fromTo(decorRef.current,
//           { scaleX: 0, opacity: 0 },
//           { scaleX: 1, opacity: 1, duration: 0.9, ease: 'elastic.out(1,0.55)', transformOrigin: 'center' }, 0.65);

//       if (subtitleRef.current) {
//         const words = subtitleRef.current.querySelectorAll('span');
//         tl.fromTo(words.length ? words : [subtitleRef.current],
//           { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 }, 0.85);
//       }

//       if (taglineRef.current)
//         tl.fromTo(taglineRef.current,
//           { opacity: 0, letterSpacing: '0.4em' },
//           { opacity: 1, letterSpacing: '0.2em', duration: 0.8 }, 0.95);

//       if (ctaRef.current)
//         tl.fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 1.05);

//       if (rightRef.current)
//         tl.fromTo(rightRef.current,
//           { opacity: 0, x: 50, scale: 0.96 },
//           { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' }, 0.3);
//     });

//     return () => { ctx.revert(); split?.revert(); };
//   }, []);

//   return (
//     <>
//       <AnimationStyles />

//       <section className="relative w-full h-auto md:h-[100dvh] overflow-hidden font-['Cormorant_Garamond']">

//         {/* Desktop background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />

//         {/* Mobile background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
//           style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
//         />

//         {/* Gradient overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-amber-900/5 md:from-white/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent md:from-black/5" />
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(159,53,70,0.04) 0%,transparent 70%), radial-gradient(ellipse 50% 50% at 80% 100%,rgba(232,160,168,0.08) 0%,transparent 60%)',
//           }}
//         />

//         {/* pt-20 on mobile = pushes content below fixed navbar (64px) */}
//         <div className="relative z-10 w-full md:h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 sm:px-8 md:px-10 lg:px-16 gap-4 lg:gap-12 pt-20 pb-12 md:py-0">

//           {/* LEFT CONTENT */}
//           <div className="flex-1 max-w-xl lg:max-w-2xl flex flex-col items-center justify-center text-center">

//             <div ref={logoRef} className="mb-2 sm:mb-3 md:mb-6 opacity-0">
//               {logo && (
//                 <img src={logo} alt="Logo" className="h-7 sm:h-9 md:h-12 lg:h-14 w-auto mx-auto" />
//               )}
//             </div>

//             <h1
//               ref={titleRef}
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug mb-1 md:mb-2 text-[#3A1520]"
//             >
//               <span className="block">Timeless Elegance.</span>
//               <span className="block font-semibold text-[#7B1F2A] mt-1">Crafted for Eternity.</span>
//             </h1>

//             <JewelOrnament ref={decorRef} />

//             <p
//               ref={subtitleRef}
//               className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-3 md:mb-4 max-w-sm sm:max-w-md opacity-0 text-[#9B3040]"
//             >
//               {'A celebration of heritage, artistry and unmatched beauty.'
//                 .split(' ')
//                 .map((w, i) => (
//                   <span key={i} className="inline-block mr-[0.28em]">{w}</span>
//                 ))}
//             </p>

//             <div ref={taglineRef} className="opacity-0 mb-4 sm:mb-5 md:mb-8">
//               <span className="text-[#290102] font-['Cinzel'] text-[8px] sm:text-[9px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase">
//                 Est. 1987 &nbsp;·&nbsp; Haute Joaillerie
//               </span>
//             </div>

//             <div ref={ctaRef} className="opacity-0">
//               <button
//                 onClick={onCtaClick}
//                 className="group relative bg-rose-900 font-['Cormorant_SC'] text-[#f9dbcb] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 overflow-hidden transition-all duration-500 hover:bg-rose-800 hover:tracking-wider text-sm sm:text-base md:text-lg"
//               >
//                 <span className="relative z-10">Explore Our Collections</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
//               </button>
//             </div>
//           </div>

//           {/* RIGHT — jewelry image, desktop only */}
//           {jewelryImage && (
//             <div ref={rightRef} className="hidden lg:block flex-1 max-w-md opacity-0">
//               <img src={jewelryImage} alt="Featured jewelry piece" className="w-full h-auto object-contain animate-float" />
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroBanner;


'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

interface HeroBannerProps {
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  jewelryImage?: string;
  logo?: string;
  onCtaClick?: () => void;
}

const AnimationStyles = () => (
  <style>{`
    @keyframes ornament-shimmer {
      0%   { background-position: -300% center; }
      100% { background-position: 300% center; }
    }
    @keyframes gem-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(159,53,70,0.45), 0 0 6px 2px rgba(159,53,70,0.2); }
      50%       { box-shadow: 0 0 0 6px rgba(159,53,70,0), 0 0 14px 4px rgba(232,160,168,0.35); }
    }
    @keyframes diamond-spin {
      0%   { transform: rotate(45deg) scale(1); }
      50%  { transform: rotate(45deg) scale(1.25); }
      100% { transform: rotate(45deg) scale(1); }
    }
    @keyframes line-breathe {
      0%, 100% { opacity: 0.5; transform: scaleX(1); }
      50%       { opacity: 1;   transform: scaleX(1.04); }
    }
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(0.8); }
      50%       { opacity: 1;   transform: rotate(45deg) scale(1.3); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-10px); }
    }
    .ornament-shimmer-line {
      background: linear-gradient(90deg,#9B3040 0%,#C06070 25%,#E8D0C0 45%,#F5E6E0 50%,#E8D0C0 55%,#C06070 75%,#9B3040 100%);
      background-size: 300% auto;
      animation: ornament-shimmer 4s linear infinite;
    }
    .gem-centre      { animation: gem-pulse 2.4s ease-in-out infinite; }
    .diamond-accent  { animation: diamond-spin 3s ease-in-out infinite; }
    .diamond-accent-2{ animation: diamond-spin 3s ease-in-out infinite; animation-delay: 1.5s; }
    .wing-line       { animation: line-breathe 3s ease-in-out infinite; transform-origin: center; }
    .twinkle-dot     { animation: twinkle 2s ease-in-out infinite; }
    .twinkle-dot-2   { animation-delay: 0.7s; }
    .twinkle-dot-3   { animation-delay: 1.4s; }
    .animate-float   { animation: float 4s ease-in-out infinite; }
  `}</style>
);

const JewelOrnament = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="flex items-center justify-center gap-0 my-0 sm:my-0 md:my-0 lg:my-6 opacity-0"
    aria-hidden="true"
  >
    <div className="wing-line ornament-shimmer-line w-5 sm:w-8 md:w-12 h-px rounded-full" />
    <div className="twinkle-dot mx-0.5 sm:mx-1 md:mx-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#C06070] rotate-45" />
    <div className="wing-line ornament-shimmer-line w-3 sm:w-5 md:w-7 h-px rounded-full" />
    <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
      <div className="diamond-accent w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
    </div>
    <div className="ornament-shimmer-line w-1.5 sm:w-3 md:w-[18px] h-px" />
    <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
      <div className="absolute w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 border border-[#9B3040]/30 rotate-45 rounded-sm" />
      <div className="absolute w-2 h-2 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 border border-[#9B3040]/50 rotate-45 rounded-[1px]" />
      <div className="gem-centre w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-[13px] md:h-[13px] bg-gradient-to-br from-[#7B1F2A] via-[#C06070] to-[#9B3040] rotate-45 rounded-[1px] z-10" />
    </div>
    <div className="ornament-shimmer-line w-1.5 sm:w-3 md:w-[18px] h-px" />
    <div className="mx-0.5 sm:mx-1 md:mx-2 relative flex items-center justify-center">
      <div className="diamond-accent-2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#9B3040] rotate-45 shadow-[0_0_4px_rgba(159,53,70,0.4)]" />
    </div>
    <div className="wing-line ornament-shimmer-line w-3 sm:w-5 md:w-7 h-px rounded-full" />
    <div className="twinkle-dot twinkle-dot-2 mx-0.5 sm:mx-1 md:mx-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#C06070] rotate-45" />
    <div className="wing-line ornament-shimmer-line w-5 sm:w-8 md:w-12 h-px rounded-full" />
  </div>
));
JewelOrnament.displayName = 'JewelOrnament';

export const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage = '/assets/herobg2.png',
  mobileBackgroundImage = '/assets/hero-mobile.jpeg',
  jewelryImage = '/assets/jewelry.png',
  logo = '/assets/logo.png',
  onCtaClick,
}) => {
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const logoRef     = useRef<HTMLDivElement>(null);
  const decorRef    = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const taglineRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let split: SplitType | null = null;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (logoRef.current)
        tl.fromTo(logoRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.9 }, 0);

      if (titleRef.current) {
        split = new SplitType(titleRef.current, { types: 'chars,words' });
        tl.fromTo(split.chars,
          { opacity: 0, y: 32, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.018 }, 0.1);
      }

      if (decorRef.current)
        tl.fromTo(decorRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.9, ease: 'elastic.out(1,0.55)', transformOrigin: 'center' }, 0.65);

      if (subtitleRef.current) {
        const words = subtitleRef.current.querySelectorAll('span');
        tl.fromTo(words.length ? words : [subtitleRef.current],
          { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 }, 0.85);
      }

      if (taglineRef.current)
        tl.fromTo(taglineRef.current,
          { opacity: 0, letterSpacing: '0.4em' },
          { opacity: 1, letterSpacing: '0.2em', duration: 0.8 }, 0.95);

      if (ctaRef.current)
        tl.fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, 1.05);

      if (rightRef.current)
        tl.fromTo(rightRef.current,
          { opacity: 0, x: 50, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' }, 0.3);
    });

    return () => { ctx.revert(); split?.revert(); };
  }, []);

  return (
    <>
      <AnimationStyles />

      <section className="relative w-full overflow-hidden font-['Cormorant_Garamond'] md:h-[100dvh] md:flex md:items-center">

        {/* DESKTOP: absolute bg */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* MOBILE: real <img> — natural height, zero cropping */}
        <img
          src={mobileBackgroundImage}
          alt=""
          aria-hidden="true"
          className="block md:hidden w-full h-auto object-contain"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-amber-900/5 md:from-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent md:from-black/5" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(159,53,70,0.04) 0%,transparent 70%), radial-gradient(ellipse 50% 50% at 80% 100%,rgba(232,160,168,0.08) 0%,transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex md:static md:relative md:z-10 md:w-full md:h-full flex-col lg:flex-row items-end md:items-center justify-center lg:justify-between px-5 sm:px-8 md:px-10 lg:px-16 gap-4 lg:gap-12 pb-10 md:py-0 pt-40 sm:pt-36 md:pt-0">

          <div className="flex-1 max-w-xl lg:max-w-2xl flex flex-col items-center justify-center text-center">

            {/* <div ref={logoRef} className="mb-2 sm:mb-3 md:mb-6 opacity-0">
              {logo && (
                // <img src={logo} alt="Logo" className="h-7 sm:h-9 md:h-12 lg:h-14 w-auto mx-auto" />
                <img
  src={logo}
  alt="Logo"
  className="h-12 sm:h-14 md:h-20 lg:h-24 xl:h-28 w-auto mx-auto object-contain"
/>
              )}
            </div> */}

            <h1
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug mb-1 md:mb-2  text-[#3A1520]"
            >
              <span className="block">Timeless Elegance.</span>
              <span className="block font-semibold text-[#7B1F2A] mt-1">Crafted for Eternity.</span>
            </h1>

       <div className="my-0 sm:mt-0">
  <JewelOrnament ref={decorRef} />
</div>
            {/* <JewelOrnament ref={decorRef} /> */}
                
         

            <p
              ref={subtitleRef}
              className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-0 sm:mb-0  md:mb-1 max-w-sm sm:max-w-md opacity-0 text-[#9B3040]"
            >
              {'A celebration of heritage, artistry and unmatched beauty.'
                .split(' ')
                .map((w, i) => (
                  <span key={i} className="inline-block mr-[0.28em]">{w}</span>
                ))}
            </p>

            <div ref={taglineRef} className="opacity-0 mb-2  sm:mb-2 md:mb-8">
              <span className="text-[#290102] font-['Cinzel'] text-[8px] sm:text-[9px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                BIS Hallmarked Gold · Certified Craftsmanship
              </span>
            </div>

            <div ref={ctaRef} className="opacity-0">
              <button
                onClick={onCtaClick}
                className="group relative bg-rose-900 font-['Cormorant_SC'] text-[#f9dbcb] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 overflow-hidden transition-all duration-500 hover:bg-rose-800 hover:tracking-wider text-sm sm:text-base md:text-lg"
              >
                <span className="relative z-10 font-sans">Explore Our Collections</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* {jewelryImage && (
            <div ref={rightRef} className="hidden lg:block flex-1 max-w-md opacity-0">
              <img src={jewelryImage} alt="Featured jewelry piece" className="w-full h-auto object-contain animate-float" />
            </div>
          )} */}
        </div>
      </section>
    </>
  );
};

export default HeroBanner;