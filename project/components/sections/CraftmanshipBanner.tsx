/**
 * CraftsmanshipBanner Component
 * 
 * Design Philosophy: Luxury Craftsmanship
 * - Dark maroon background (#4a1f1f) with jewelry artisan imagery
 * - Golden accents and elegant typography
 * - Four distinct sections highlighting quality pillars
 * - Serif fonts (Playfair Display for headers, Lora for body)
 * - Subtle dividers between sections
 * - High contrast white/cream text on dark background
 */

// import React from 'react';

// interface BannerSection {
//   icon: string;
//   title: string;
//   description: string;
// }

// const CraftsmanshipBanner: React.FC = () => {
//   const sections: BannerSection[] = [
//     {
//       icon: 'https://private-us-east-1.manuscdn.com/sessionFile/HW3pNQ0fLvtsKZrX6QJdME/sandbox/J1mVhvNlLvez61H78kXJ4I_1779272326939_na1fn_L2hvbWUvdWJ1bnR1L2ljb25fZGlhbW9uZA.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFczcE5RMGZMdnRzS1pyWDZRSmRNRS9zYW5kYm94L0oxbVZodk5sTHZlejYxSDc4a1hKNElfMTc3OTI3MjMyNjkzOV9uYTFmbl9MMmh2YldVdmRXSjFiblIxTDJsamIyNWZaR2xoYlc5dVpBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y7vCKW2p8ekiuRBbR6FdmsFwkaoCS0zAaxOsVuCecTXaT9KdZLX-VeIA9gUqd39zlDLwpacrSbhNQd3~wzHFaBxI5A-7S365xC63iyGFFZ10YCXB~Fn2rV9ElRQoNNdZRGclkNT6JigDgmf-13uTOyexwgltZBUDcvUNVPJPJMxVMRdZAoDsGByh4AeslGwEn~R23A-Y-ST1~4OSNTfwoZgUrVTciH89S1xxz29hgyAr1dkqI4tM-blZnFQEHrHUO6XoL98~OPPReNp1TaV6Jgpsj1sB97PiO9JDXx0TbUsLj-kzGLjOE8zjDmh0CWjls2xnq7Qq9cc29ILG2lcWHg__',
//       title: 'EXQUISITE MATERIALS',
//       description: 'Only the finest gemstones and metals are chosen for their purity and brilliance.'
//     },
//     {
//       icon: 'https://private-us-east-1.manuscdn.com/sessionFile/HW3pNQ0fLvtsKZrX6QJdME/sandbox/J1mVhvNlLvez61H78kXJ4I_1779272326939_na1fn_L2hvbWUvdWJ1bnR1L2ljb25fbWFuZGFsYQ.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFczcE5RMGZMdnRzS1pyWDZRSmRNRS9zYW5kYm94L0oxbVZodk5sTHZlejYxSDc4a1hKNElfMTc3OTI3MjMyNjkzOV9uYTFmbl9MMmh2YldVdmRXSjFiblIxTDJsamIyNWZiV0Z1WkdGc1lRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HRPfoSUEhaCZCn7zMZJAFT0Li3jnWODZoThzMIUsvSLKiz0U55tuurlT~yMLvxv6F88ioQmb5WPz-zQ599TZ8K3WjxsiIYdNbyzWbNHw7uwI0ZEC6X99Jm71M6qBMCud2OHQnzb4kUll0XiIl~janYCdwtZ54ya34n55UUgGS20CRGkH6gcflEbhOsjI9O7rwh-~dUAfMEsQkSKMg7FqqOQg3Rb9FcmBTryLT4572fKuCqhjuc2fAdIIoV0mESOO2vrClohAARKvm7pyFauEvRtTeS6GbE9dmh6j3wEkIaDOpXKI0SgVMb4c7YvAj743D4JkWhKF6j0MF3vYvLcq6Q__',
//       title: 'MASTER ARTISANS',
//       description: 'Handcrafted by skilled artisans with generations of expertise and passion.'
//     },
//     {
//       icon: 'https://private-us-east-1.manuscdn.com/sessionFile/HW3pNQ0fLvtsKZrX6QJdME/sandbox/J1mVhvNlLvez61H78kXJ4I_1779272326939_na1fn_L2hvbWUvdWJ1bnR1L2ljb25faGFuZHM.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFczcE5RMGZMdnRzS1pyWDZRSmRNRS9zYW5kYm94L0oxbVZodk5sTHZlejYxSDc4a1hKNElfMTc3OTI3MjMyNjkzOV9uYTFmbl9MMmh2YldVdmRXSjFiblIxTDJsamIyNWZhR0Z1WkhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VgmxmWZTMEplPMAgE-1NrrzwY2rMFlmOYLtWp2W~uMKOKWGxvn11GFM2E2YRwsfga-NE9W6D6aB1ql25gjqscEHreiMdUDqM3QLLQs8hK09T51np-xoIuapbVCp8G2nM9sgvL2Gt-lf3ZxQ8bHY4b-zwWNjUw2JdH~TExOx-3xbXm3id0HOZKhzTfmmPdU4R0~0sHiDhLqlL97lnafr4okJ1jlbj4qlgfAWpizYZY9AnzxHX6ptjlF4zbSxiZ2~3ix7n5dgRFd8ZIe6V0gZKYJLj71wi5zZBDZHF1frTFY7HJAEcYE08-SFdoZX3MzIsks9DSK9W6~UgDIHNIF-enA__',
//       title: 'TIME HONORED TECHNIQUES',
//       description: 'Blending traditional techniques with modern innovation for timeless beauty.'
//     },
//     {
//       icon: 'https://private-us-east-1.manuscdn.com/sessionFile/HW3pNQ0fLvtsKZrX6QJdME/sandbox/J1mVhvNlLvez61H78kXJ4I_1779272326939_na1fn_L2hvbWUvdWJ1bnR1L2ljb25fc2hpZWxk.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFczcE5RMGZMdnRzS1pyWDZRSmRNRS9zYW5kYm94L0oxbVZodk5sTHZlejYxSDc4a1hKNElfMTc3OTI3MjMyNjkzOV9uYTFmbl9MMmh2YldVdmRXSjFiblIxTDJsamIyNWZjMmhwWld4ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd180MDk2LGhfNDA5Ni9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=akKJwuweDC8YisJorJM0egnkG~C3OAm6HacXwpRkjBDk8NeNgmWl74DsJeDINkZkIDp1~cS72sCEfsQoXi5RXfpIikOA2zCo0z5IfwyxUhOzD8xeOe2MxHFZ5rqJ7GB4X9l4xbbm6uypgb~QwG00TuydOZl8lRmPwJvLNZdv~2h-dQsVOEe-4jXbFC8pJS4VraDkxYpO7xyYF2lptbs5Bbczen9YERlx1m6XqZM8qIWG4bBYiTWGEVhBqrqoViOvS~0T1an5lQJDOi4BoNTeM3sOEly6i9uukgjCe8ShcJiZ~BF26QLe~fktP6JseBrsmoe1RLFvaDfGZQvA7xEkdA__',
//       title: 'QUALITY ASSURED',
//       description: 'Every piece passes through rigorous quality checks to ensure perfection.'
//     }
//   ];

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/HW3pNQ0fLvtsKZrX6QJdME/sandbox/J1mVhvNlLvez61H78kXJ4I_1779272326939_na1fn_L2hvbWUvdWJ1bnR1L2pld2VscnlfYXJ0aXNhbl9iZw.jpg?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSFczcE5RMGZMdnRzS1pyWDZRSmRNRS9zYW5kYm94L0oxbVZodk5sTHZlejYxSDc4a1hKNElfMTc3OTI3MjMyNjkzOV9uYTFmbl9MMmh2YldVdmRXSjFiblIxTDJwbGQyVnNjbmxmWVhKMGFYTmhibDlpWncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfNDA5NixoXzQwOTYvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n3iybu~55v-Jyx4SQr7VOLZodhnVRQiXiBcTf5PcAWBkYniPNfa~AfP0yDxkNJM8c7sAcRbZWgKw7ye9yt6saM5jbobDOuye8bMSCI68PlNPs-QsosEf0bk7JF1XEJxawvrEuKTW-sD2l4IOHIRTnZ3PeCA-8CxwcF0Tuu7kalyQshGppJT8HdSutK9jPaMvbM2bPkyT-M-DSwpM4wGZqld-BNRbQ-5PtsB1eBMrB3Fngt1p7f8gbzpJOrIWHsj2ov8vIqK6hJluj~C1~xAtCxCPal1Xu4WOLzL4HDxuBN3l1QET~g2lqzCrJX5OKF0t9J1q-lOKOtsM~A4EGIBdfA__)',
//           backgroundPosition: 'right center'
//         }}
//       >
//         {/* Dark maroon overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#2c0407] via-[#2c0407] to-[#4a1f1f]/70"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-[#d4af37] mb-2">
//             THE CRAFTSMANSHIP
//           </h1>
//           <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
//         </div>

//         {/* Sections Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4 max-w-7xl mx-auto">
//           {sections.map((section, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               {/* Icon */}
//               <div className="mb-6 h-16 w-16 flex items-center justify-center">
//                 <img
//                   src={section.icon}
//                   alt={section.title}
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="font-display text-lg md:text-xl font-semibold tracking-widest text-[#d4af37] mb-3">
//                 {section.title}
//               </h3>

//               {/* Divider */}
//               {index < sections.length - 1 && (
//                 <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-[#d4af37]/30"></div>
//               )}

//               {/* Description */}
//               <p className="font-serif text-sm md:text-base text-[#e8d5c4] leading-relaxed">
//                 {section.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CraftsmanshipBanner;

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Inline SVG Icons (no external URLs) ──────────────────────────
const DiamondIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <polygon points="32,4 58,22 48,58 16,58 6,22" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <polygon points="32,4 6,22 16,58 48,58 58,22" stroke="#d4af37" strokeWidth="0.5" fill="rgba(212,175,55,0.06)" strokeLinejoin="round"/>
    <line x1="6" y1="22" x2="58" y2="22" stroke="#d4af37" strokeWidth="1" opacity="0.6"/>
    <line x1="32" y1="4" x2="32" y2="22" stroke="#d4af37" strokeWidth="1" opacity="0.7"/>
    <line x1="6" y1="22" x2="32" y2="58" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
    <line x1="58" y1="22" x2="32" y2="58" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

const ArtisanIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <circle cx="32" cy="32" r="26" stroke="#d4af37" strokeWidth="1.5" fill="none"/>
    <circle cx="32" cy="32" r="18" stroke="#d4af37" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <circle cx="32" cy="32" r="3" fill="#d4af37" opacity="0.8"/>
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const x = 32 + 18 * Math.cos((angle * Math.PI) / 180);
      const y = 32 + 18 * Math.sin((angle * Math.PI) / 180);
      return <circle key={i} cx={x} cy={y} r="1.5" fill="#d4af37" opacity="0.6" />;
    })}
    <path d="M32 14 L34 28 L32 32 L30 28 Z" fill="#d4af37" opacity="0.5"/>
    <path d="M50 32 L36 34 L32 32 L36 30 Z" fill="#d4af37" opacity="0.5"/>
  </svg>
);

const HeritageTechIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <rect x="12" y="28" width="40" height="24" rx="1" stroke="#d4af37" strokeWidth="1.5" fill="none"/>
    <path d="M20 28 V20 Q32 10 44 20 V28" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <line x1="32" y1="28" x2="32" y2="52" stroke="#d4af37" strokeWidth="1" opacity="0.5"/>
    <line x1="12" y1="40" x2="52" y2="40" stroke="#d4af37" strokeWidth="0.8" opacity="0.4"/>
    <circle cx="32" cy="20" r="2.5" stroke="#d4af37" strokeWidth="1" fill="rgba(212,175,55,0.2)"/>
    <rect x="26" y="40" width="12" height="12" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.6"/>
  </svg>
);

const HallmarkIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <path d="M32 6 L38 18 L52 20 L42 30 L44 44 L32 38 L20 44 L22 30 L12 20 L26 18 Z"
      stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <path d="M32 12 L36 21 L46 22.5 L39 29 L40.5 39 L32 35 L23.5 39 L25 29 L18 22.5 L28 21 Z"
      stroke="#d4af37" strokeWidth="0.5" fill="rgba(212,175,55,0.07)" strokeLinejoin="round"/>
    <path d="M25 32 L30 37 L40 26" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────

interface PillarItem {
  Icon: React.FC;
  title: string;
  description: string;
}

const PILLARS: PillarItem[] = [
  {
    Icon: DiamondIcon,
    title: 'FINEST MATERIALS',
    description: 'Only BIS-hallmarked 22kt & 24kt gold, certified diamonds, and ethically sourced gemstones grace every creation.',
  },
  {
    Icon: ArtisanIcon,
    title: 'MASTER KARIGARS',
    description: 'Handcrafted by artisans whose mastery has been passed down across three generations of Indian jewellery tradition.',
  },
  {
    Icon: HeritageTechIcon,
    title: 'TIMELESS HERITAGE',
    description: 'Ancient kundan, meenakari and filigree techniques woven with refined modern sensibility for eternal beauty.',
  },
  {
    Icon: HallmarkIcon,
    title: 'QUALITY ASSURED',
    description: 'Every piece passes a seven-stage quality inspection and bears our lifetime authenticity certificate.',
  },
];

const CraftsmanshipBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animates first
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      );

      // Cards stagger in
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/craftsmanship-bg.jpg')", backgroundPosition: 'right center' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0205] via-[#2c0407]/95 to-[#3d1010]/80" />
      {/* subtle gold noise texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#d4af37 0,#d4af37 1px,transparent 0,transparent 50%)', backgroundSize: '6px 6px' }} />

      <div className="relative z-10 px-6 py-16 md:px-10 md:py-24 lg:px-16 lg:py-28">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 opacity-0">
          <span className="block text-[9px] tracking-[0.4em] text-amber-400/70 uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}>
            Since 1987 · Soni Jewellery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.12em] text-[#d4af37] mb-4"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}>
            The Art of Craftsmanship
          </h2>
          <p className="text-base md:text-lg text-[#e8d5c4]/70 max-w-xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Every jewel we create is a quiet vow — of purity, devotion, and the timeless grace
            of India's finest artisanal tradition.
          </p>
          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-amber-500/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
            <div className="w-6 h-px bg-amber-500/40" />
            <div className="w-2.5 h-2.5 border border-amber-500/50 rotate-45" />
            <div className="w-6 h-px bg-amber-500/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
            <div className="w-12 h-px bg-amber-500/40" />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {PILLARS.map(({ Icon, title, description }, index) => (
            <div key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className="group relative flex flex-col items-center text-center px-4 py-6 opacity-0"
              style={{ border: '1px solid rgba(212,175,55,0.12)' }}
            >
              {/* Gold radial glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

              {/* Icon */}
              <div className="relative mb-6 h-14 w-14 transition-transform duration-500 group-hover:scale-110">
                <Icon />
              </div>

              {/* Mini divider */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-6 h-px bg-amber-500/50" />
                <div className="w-1 h-1 rotate-45 bg-amber-500/70" />
                <div className="w-6 h-px bg-amber-500/50" />
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-[11px] tracking-[0.28em] text-[#d4af37] mb-3 uppercase"
                style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}>
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-[#e8d5c4]/75 leading-relaxed font-light group-hover:text-[#e8d5c4]/95 transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {description}
              </p>

              {/* Vertical separator between cards on desktop */}
              {index < PILLARS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-amber-500/15" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <span className="text-[9px] tracking-[0.35em] uppercase text-amber-500/40"
            style={{ fontFamily: "'Cinzel', serif" }}>
            Hallmarked · Certified · Lifetime Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipBanner;