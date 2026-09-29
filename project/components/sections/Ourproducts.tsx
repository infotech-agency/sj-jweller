'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Cormorant_Garamond } from "next/font/google";


/**
 * OurProducts — royal maroon / antique-gold luxury section
 * Requires: framer-motion
 *   npm install framer-motion
 *
 * Uses the CSS custom properties already defined in your globals.css
 * (--theme-primary, --theme-gold, --theme-background, etc.)
 * and the Cormorant Garamond / Great Vibes / Inter fonts loaded there.
 *
 * Drop your product photos into /public/images/products/ using the
 * filenames below (or point `image` at whatever path/CDN URL you use).
 */

const PRODUCTS = [
  { title: 'Gold Coins / Bars', tag: '999.9 Fine', image: '/products/gold.png' },
  { title: 'Silver Coins / Bars', tag: '999.9 Fine', image: '/products/silver.png' },
  // { title: 'Gold Pendants', tag: 'Deity Series', image: '/products/pendant.png' },
//   { title: 'Silver Colour Coins', tag: 'Hand Enamelled', image: '/products/.jpg' },
//   { title: 'Acrylic Series', tag: 'Display Edition', image: '/images/products/acrylic-series.jpg' },
  // { title: 'Customised Coins', tag: 'Made For You', image: '/products/custom.png' },
  { title: 'Silver Cast Bar', tag: 'Investment Grade', image: '/coins/images/sj_silver_cast_bar.png' },
   { title: 'Gold Cast Bar', tag: 'Investment Grade', image: '/coins/images/sj_gold_cast_bar.png' },
//   { title: 'Frame', tag: 'Heirloom Edition', image: '/images/products/frame.jpg' },
];

function ProductFrame({ image, title }) {
  return (
    <div className="relative mx-auto mb-6 aspect-square w-full max-w-[220px]">
      {/* outer rotating foil ring, sits behind the frame */}
      <motion.div
        className="absolute -inset-[3px] rounded-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, hsl(var(--theme-gold)), hsl(24 100% 96%) 20%, hsl(var(--theme-gold)) 40%, hsl(345 42% 34%) 60%, hsl(var(--theme-gold)) 80%, hsl(var(--theme-gold)))',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* gold bezel */}
      <div
        className="absolute inset-0 rounded-2xl p-[5px]"
        style={{ background: 'linear-gradient(145deg, hsl(var(--theme-gold)), hsl(35 85% 68%))' }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[13px]"
          style={{ background: 'hsl(var(--theme-card))' }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* subtle vignette so every photo reads consistently */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, hsla(348,52%,20%,0) 55%, hsla(348,52%,15%,0.35) 100%)',
            }}
          />

          {/* glass reflection sweep on hover */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -inset-y-10 -left-1/2 w-1/3 -skew-x-12 bg-white/50 opacity-0 blur-sm transition-all duration-700 group-hover:left-[130%] group-hover:opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl border p-7 pt-8 text-center transition-shadow duration-500"
      style={{
        borderColor: 'hsl(var(--theme-border))',
        background:
          'linear-gradient(180deg, hsl(var(--theme-card)) 0%, hsl(var(--theme-light-bg)) 100%)',
        boxShadow: '0 6px 24px hsla(348,52%,28%,0.08)',
      }}
    >
      {/* hover gold glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: 'inset 0 0 0 1px hsl(var(--theme-gold)), 0 18px 40px hsla(42,78%,58%,0.3)',
        }}
      />

      {/* corner accents */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 opacity-70" style={{ borderColor: 'hsl(var(--theme-gold))' }} />
      <span className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 opacity-70" style={{ borderColor: 'hsl(var(--theme-gold))' }} />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 opacity-70" style={{ borderColor: 'hsl(var(--theme-gold))' }} />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 opacity-70" style={{ borderColor: 'hsl(var(--theme-gold))' }} />

      <ProductFrame image={product.image} title={product.title} />

      <h3
        className="mb-1.5 text-xl tracking-wide"
        style={{ color: 'hsl(var(--theme-primary))', fontFamily: "'Cormorant Garamond', serif" }}
      >
        {product.title}
      </h3>

      {/* plaque-style tag, like a museum/jeweller's label */}
      <div className="inline-flex items-center gap-2">
        <span className="h-px w-4" style={{ background: 'hsl(var(--theme-gold))' }} />
        <p className="script-font text-lg leading-none" style={{ color: 'hsl(var(--theme-gold))' }}>
          {product.tag}
        </p>
        <span className="h-px w-4" style={{ background: 'hsl(var(--theme-gold))' }} />
      </div>
    </motion.div>
  );
}

export default function OurProducts() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20"
      style={{ background: 'hsl(var(--theme-background))' }}
    >
      {/* ambient background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, hsl(var(--theme-gold)) 0, transparent 45%), radial-gradient(circle at 85% 75%, hsl(var(--theme-primary)) 0, transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p
            className="script-font mb-2 text-2xl"
            style={{ color: 'hsl(var(--theme-gold))' }}
          >
            Purity you can trust
          </p>

          <h2
            className="text-4xl tracking-[0.08em] md:text-5xl"
            style={{ color: 'hsl(var(--theme-primary))', fontFamily: "'Cormorant Garamond', serif" }}
          >
            OUR PRODUCTS
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span
              className="h-px w-16"
              style={{ background: 'hsl(var(--theme-gold))' }}
            />
            <span
              className="h-2 w-2 rotate-45"
              style={{ background: 'hsl(var(--theme-gold))' }}
            />
            <span
              className="h-px w-16"
              style={{ background: 'hsl(var(--theme-gold))' }}
            />
          </div>

          <p
            className="mx-auto mt-6 max-w-3xl text-base  leading-relaxed md:text-lg"
            style={{ color: 'hsl(var(--theme-text))', fontFamily: "'Cormorant Garamond', serif" }}
          >
            Soni Jewellers Refinery is famed for its wide range of gold and silver coins and
            bars, marking the purest form of the metal. Every piece is struck in
            999.9 purity, and every batch is tested at our NABL-certified labs for
            complete authenticity. Backed by a 100% buy-back promise, Soni Jewellers remains
            a name customers can trust for generations.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}