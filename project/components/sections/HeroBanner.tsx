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
  backgroundImage = '/hero/hero4.png',
  mobileBackgroundImage = '/hero/mobile1.png',
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

           
           <h1
  ref={titleRef}
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug mb-1 md:mb-2 text-[#FCE7DD] md:text-[#3A1520]"
>
  <span className="">Welcome To </span>{" "}
  <span className="font-semibold text-[#FCE7DD] md:text-[#7B1F2A] mt-1">
    Soni Jewellers<sup className='text-3xl'>®</sup>
  </span>
</h1>
<span className="block font-['Cinzel'] text-[20px] font-semibold text-[#FCE7DD] md:text-[#7B1F2A] mt-1">
  Kotla
</span>
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

            {/* <div ref={ctaRef} className="opacity-0">
              <button
                onClick={onCtaClick}
                style={{
                   fontFamily: "'Cinzel', serif",
                }}
                className="group relative bg-rose-900 text-[#f9dbcb] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 overflow-hidden transition-all duration-500 hover:bg-rose-800 hover:tracking-wider text-sm sm:text-base md:text-lg"
              >
                <span className="relative z-10 font-sans">Explore Our Collections</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div> */}
            <div ref={ctaRef} className="opacity-0">
  <button
    onClick={onCtaClick}
    style={{
      fontFamily: "'Cinzel', serif",
    }}
    className="group relative bg-rose-900 text-[#f9dbcb] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 overflow-hidden transition-all duration-500 hover:bg-rose-800 hover:tracking-wider text-sm sm:text-base md:text-lg"
  >
    <span className="relative z-10">
      Explore Our Collections
    </span>

    <span className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
  </button>
</div>
          </div>

          
        </div>
      </section>

      
    </>
  );
};

export default HeroBanner;