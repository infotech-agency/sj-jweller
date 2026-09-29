

'use client';

import { motion } from 'framer-motion';
import { slideInLeftVariants, staggerContainerVariants, fadeUpVariants } from '@/lib/animations';
import Link from 'next/link';

const PILLARS = [
  'Three generations of unwavering honesty, purity, and exceptional craftsmanship',
  'Hallmark Gold Jewellery with secure, verifiable HUID Certification',
  'Certified Diamond Jewellery and premium Hallmark Silver collections',
  'Preserving rich family traditions while embracing modern, contemporary designs',
];

const STATS = [
  { value: '1960s', label: 'Legacy Start' },
  { value: '3', label: 'Generations' },
  { value: '60+', label: 'Years of Trust' },
  { value: '100%', label: 'HUID Certified' },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/assets/modified_banner.png')" }}
      />
      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(135deg, rgba(41,1,2,0.82) 0%, rgba(10,5,5,0.45) 60%, rgba(41,1,2,0.6) 100%)',
        }}
      />

      {/* Top decorative line */}
      <div className="relative z-10 flex items-center justify-center mb-14">
        <div className="h-px w-16 bg-amber-500/50" />
        <div className="mx-3 w-1.5 h-1.5 rotate-45 bg-amber-500/70" />
        <div className="h-px w-16 bg-amber-500/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Image Panel ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
            className="relative"
          >
            <div
              className="relative w-full h-[420px] md:h-[520px] overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(218,165,32,0.18)' }}
            >
              <img
                src="/assets/earing.png"
                alt="Soni Jewellery Craftsmanship"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(18%) contrast(1.05) brightness(0.92)' }}
              />
              {/* Warm colour wash */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(123,31,42,0.18) 0%, rgba(41,1,2,0.35) 100%)',
                }}
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 px-5 py-4 shadow-xl text-center"
                style={{
                  backgroundColor: "#f2d2bf",
                  border: '1px solid rgba(218,165,32,0.35)',
                }}
              >
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Cinzel', serif", color: '#1e0204', fontSize: 10 }}
                >
                  Since the
                </p>
                <p
                  className="text-3xl font-semibold mt-0.5 leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#290102' }}
                >
                  1960s
                </p>
              </motion.div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-amber-500/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-amber-500/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-amber-500/30" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-amber-500/30" />
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-4 mt-4 divide-x divide-amber-500/20"
              style={{ border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(41,1,2,0.55)' }}
            >
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center py-4 px-2 text-center">
                  <span
                    className="text-xl md:text-2xl font-semibold text-amber-400 leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {value}
                  </span>
                  <span
                    className="mt-1 text-[11px] tracking-[0.14em] uppercase text-white"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
            className="space-y-7"
          >
            {/* Accent label */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
              <div className="w-8 h-px bg-amber-500" />
              <p
                className="text-2xl tracking-[0.28em] uppercase text-amber-400"
                style={{ fontFamily: "'Cinzel', serif", fontSize: 10 }}
              >
                Our Legacy
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUpVariants}
              className="leading-tight text-[#f5e6d8]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              <span className="block text-4xl md:text-5xl">A Legacy of Trust,</span>
              <span
                className="block italic text-5xl md:text-6xl text-amber-400 mt-1"
                style={{ fontWeight: 400 }}
              >
                Purity & Craftsmanship
              </span>
            </motion.h2>

            {/* Ornament */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-2">
              <div className="w-10 h-px bg-amber-500/40" />
              <div className="w-1 h-1 rotate-45 bg-amber-500/60" />
              <div className="w-6 h-px bg-amber-500/40" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="text-lg md:text-xl leading-relaxed text-zinc-200 "
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The journey of <span className='font-semibold text-amber-500 text-[24px]'>Soni Jewellers<sup className=''>®</sup></span> began in the <b>1960s</b> when the <span className='font-semibold text-amber-500 text-[24px]'>
                Late Shri Bhori Lal Soni</span> arrived in Delhi with a vision of exceptional craftsmanship and an unwavering commitment to honesty. For over <span className='font-semibold text-amber-500 text-[24px]'>six decades</span>, spanning three generations, we have remained committed to offering genuine products and maintaining the highest standards of purity, never compromising on the faith our families place in us.
            </motion.p>

            {/* Pillars */}
            <motion.div variants={fadeUpVariants} className="space-y-3.5">
              {PILLARS.map((point, idx) => (
                <motion.div key={idx} whileHover={{ x: 5 }} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-[9px]">
                    <div className="w-1.5 h-1.5 rotate-45 bg-amber-500 group-hover:bg-amber-300 transition-colors duration-300" />
                  </div>
                  <p
                    className="text-xl md:text-base text-white group-hover:text-white/95 transition-colors duration-300 leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUpVariants}>
              <Link href="/about" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block relative overflow-hidden group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg cursor-pointer"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background: 'linear-gradient(135deg, #7B1F2A 0%, #9B3040 100%)',
                    border: '1px solid rgba(218,165,32,0.3)',
                  }}
                >
                  <span className="relative z-10">Discover Our Full Journey</span>
                  <span
                    className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                    style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                  />
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative diamonds */}
      <div className="relative z-10 flex items-center justify-center gap-3 mt-16">
        {[0, 0.15, 0.3].map((delay, i) => (
          <div key={i} className="w-1.5 h-1.5 rotate-45 bg-amber-500/35" />
        ))}
      </div>
    </section>
  );
}

export default AboutSection;