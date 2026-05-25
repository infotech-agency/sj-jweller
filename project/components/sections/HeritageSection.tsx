import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeritageSectionProps {
  onReady?: () => void;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ onReady }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Scroll trigger animation
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
    });

    onReady?.();
  }, [onReady]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#FDFBF7] py-20 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 600">
          <path
            d="M50,100 Q100,150 150,200 T250,300 T350,400"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Mughal Archway Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 hidden lg:block"
          >
            <div className="absolute inset-0 border-4 border-[#D4AF37] rounded-3xl overflow-hidden">
              {/* Jharokha-inspired arch */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 300 400"
              >
                <defs>
                  <pattern id="jharokha" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect x="5" y="5" width="30" height="30" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  </pattern>
                </defs>
                <path
                  d="M50,50 Q150,30 250,50 L250,350 Q150,370 50,350 Z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
              </svg>

              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[#E8D5b7] to-[#f5f1eb] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-32 bg-[#D4AF37] bg-opacity-20 rounded-lg mx-auto mb-4" />
                  <p className="text-[#2C0407] text-xs tracking-widest">Model Portrait</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Subtitle */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                The Art of Perfection
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="heading-lg text-[#2C0407]">
              Where Tradition Meets Mastery
            </h2>

            {/* Gold Divider */}
            <div className="flex items-center space-x-3 py-4">
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-lg">✦</span>
              <div className="flex-1 h-px bg-gradient-to-l from-[#D4AF37] to-transparent" />
            </div>

            {/* Description */}
            <p className="text-body text-[#2C0407] leading-relaxed">
              For generations, our master artisans have preserved the sacred art of Indian jewelry craftsmanship. Each piece is a testament to centuries of heritage, meticulous attention to detail, and an unwavering commitment to excellence. We don't just create jewelry—we craft legacies.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold tracking-widest text-sm uppercase hover:bg-[#D4AF37] hover:text-[#2C0407] transition-all duration-300"
            >
              OUR CRAFTSMANSHIP ✦
            </motion.button>
          </motion.div>

          {/* Right: Architectural Sketch */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-96 hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#f5f1eb] rounded-lg overflow-hidden border border-[#e8dcc8]">
              {/* Architectural Pattern */}
              <svg className="w-full h-full" viewBox="0 0 300 400">
                <defs>
                  <pattern id="stone" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <rect x="2" y="2" width="26" height="26" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                    <circle cx="15" cy="15" r="3" fill="#D4AF37" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="300" height="400" fill="url(#stone)" />
                <path
                  d="M50,50 L250,50 L250,350 L50,350 Z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
                <path
                  d="M80,80 Q150,100 220,80"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </section>
  );
};

export default HeritageSection;
