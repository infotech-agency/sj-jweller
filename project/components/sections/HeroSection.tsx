'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, floatVariants } from '@/lib/animations';
import { LuxuryButton } from '@/components/LuxuryButton';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-light via-background to-light" />

        {/* Animated Background Blobs */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--theme-accent)) 0%, transparent 70%)',
          }}
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--theme-secondary)) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-8"
        >
          {/* Accent Label */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-3"
          >
            <div
              className="w-8 h-0.5"
              style={{ background: 'hsl(var(--theme-accent))' }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'hsl(var(--theme-accent))' }}
            >
              Luxury Collection
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ color: 'hsl(var(--theme-primary))' }}
          >
            Timeless <br />
            <span className="script-font text-6xl md:text-7xl italic">
              Elegance
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg max-w-md"
            style={{ color: 'hsl(var(--theme-muted))' }}
          >
            Discover our curated collection of handcrafted luxury jewellery,
            where timeless beauty meets exceptional artistry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* <LuxuryButton
              size="lg"
              onClick={() =>
                document
                  .getElementById('collections')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Collections
            </LuxuryButton>
            <LuxuryButton variant="outline" size="lg">
              Contact Us
            </LuxuryButton> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-3 gap-8 pt-12 border-t"
            style={{ borderColor: 'hsl(var(--theme-border))' }}
          >
            {[
              { number: '500+', label: 'Pieces Crafted' },
              { number: '15+', label: 'Years Legacy' },
              { number: '100%', label: 'Authentic' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p
                  className="text-2xl font-bold"
                  style={{ color: 'hsl(var(--theme-primary))' }}
                >
                  {stat.number}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative h-96 lg:h-full min-h-96"
        >
          {/* Image Container */}
          <div
            className="relative w-full h-full rounded-2xl overflow-hidden glass shadow-luxury-xl"
            style={{
              background:
                'linear-gradient(135deg, hsl(var(--theme-secondary)) 0%, hsl(var(--theme-accent)) 100%)',
            }}
          >
            {/* Placeholder for Image */}
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/42e693127435607.6141dbb950c20.jpg"
              alt="Luxury Jewelry"
              className="w-full h-full object-cover"
            />

            {/* Floating Card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute bottom-8 left-8 glass rounded-lg p-6 backdrop-blur-md"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: 'hsl(var(--theme-primary))' }}
              >
                Premium Quality
              </p>
              <p className="text-xs text-muted mt-1">
                Handcrafted with precision
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown
          size={24}
          style={{ color: 'hsl(var(--theme-accent))' }}
          className="opacity-60"
        />
      </motion.div>
    </section>
  );
}
