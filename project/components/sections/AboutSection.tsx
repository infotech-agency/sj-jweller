// 'use client';

// import { motion } from 'framer-motion';
// import { slideInLeftVariants, slideInRightVariants } from '@/lib/animations';

// export function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="relative bg-[#290102] py-20 md:py-32 px-4 sm:px-6 lg:px-8"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(180deg, hsl(var(--theme-light-bg)) 0%, hsl(var(--theme-background)) 100%)`,
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Image */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={slideInLeftVariants}
//             className="relative h-96 md:h-full min-h-96"
//           >
//             <div
//               className="relative w-full h-full rounded-2xl overflow-hidden glass shadow-luxury-xl"
//               style={{
//                 background:
//                   'linear-gradient(135deg, hsl(var(--theme-secondary)) 0%, hsl(var(--theme-accent)) 100%)',
//               }}
//             >
//               <img
//                 src="https://t4.ftcdn.net/jpg/18/07/68/05/360_F_1807680503_au4MMBPButjY3HfddHDhf8pybU4CeKDB.jpg"
//                 alt="Craftsmanship"
//                 className="w-full h-full object-cover"
//               />

//               {/* Floating Info Card */}
//               <motion.div
//                 animate={{ y: [0, 20, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute top-8 right-8 glass rounded-lg p-6"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   border: '1px solid rgba(255, 255, 255, 0.3)',
//                 }}
//               >
//                 <p
//                   className="text-sm font-semibold"
//                   style={{ color: 'hsl(var(--theme-primary))' }}
//                 >
//                   Established 2008
//                 </p>
//                 <p
//                   className="text-xs text-muted mt-1"
//                   style={{ color: 'hsl(var(--theme-muted))' }}
//                 >
//                   15+ years of excellence
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right - Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.2,
//                 },
//               },
//             }}
//             className="space-y-8"
//           >
//             {/* Accent Label */}
//             <motion.div
//               variants={slideInRightVariants}
//               className="flex items-center gap-3"
//             >
//               <div
//                 className="w-8 h-0.5"
//                 style={{ background: 'hsl(var(--theme-accent))' }}
//               />
//               <span
//                 className="text-xs font-semibold tracking-widest uppercase"
//                 style={{ color: 'hsl(var(--theme-accent))' }}
//               >
//                 About Us
//               </span>
//             </motion.div>

//             {/* Heading */}
//             <motion.h2
//               variants={slideInRightVariants}
//               className="text-4xl md:text-5xl text-[#f9dbcb] font-light leading-tight"
              
//             >
//               A Legacy of <br />
//               <span className="script-font text-5xl italic">Luxury</span>
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               variants={slideInRightVariants}
//               className="text-lg text-white leading-relaxed"
             
//             >
//               For over fifteen years, Soni Jewellery has been synonymous with
//               timeless elegance and exceptional craftsmanship. Each piece in our
//               collection is a testament to our commitment to quality, creativity,
//               and the art of luxury jewelry design.
//             </motion.p>

//             {/* Key Points */}
//             <motion.div
//               variants={slideInRightVariants}
//               className="space-y-4"
//             >
//               {[
//                 'Handcrafted by master artisans with decades of experience',
//                 'Premium materials including gold, platinum, and ethically-sourced gemstones',
//                 'Every piece undergoes rigorous quality inspections',
//                 'Lifetime authenticity guarantee and complimentary maintenance',
//               ].map((point, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ x: 4 }}
//                   className="flex gap-4"
//                 >
//                   <div
//                     className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
//                     style={{
//                       background: 'hsl(var(--theme-accent))',
//                     }}
//                   />
//                   <p className="text-sm text-white">{point}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Button */}
//             <motion.button
//               variants={slideInRightVariants}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-3 bg-[#e09b3d] font-medium tracking-wide transition-all"
             
//             >
//               Learn More
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { motion } from 'framer-motion';
// import { slideInLeftVariants, slideInRightVariants } from '@/lib/animations';

// export function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
//     >
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
//         style={{ 
//           backgroundImage: "url('/assets/modified_banner.png')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       />
      
//       {/* Dark Overlay for better text readability */}
//       <div className="absolute inset-0 z-[1] bg-black/60" />
      
//       {/* Gradient Overlay for depth */}
//       <div 
//         className="absolute inset-0 z-[1]"
//         style={{
//           background: 'linear-gradient(135deg, rgba(41,1,2,0.8) 0%, rgba(0,0,0,0.4) 100%)',
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Image */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={slideInLeftVariants}
//             className="relative h-96 md:h-full min-h-96"
//           >
//             <div
//               className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
//               style={{
//                 background: 'linear-gradient(135deg, rgba(123,31,42,0.3) 0%, rgba(41,1,2,0.3) 100%)',
//                 backdropFilter: 'blur(2px)',
//               }}
//             >
//               <img
//                 src="https://t4.ftcdn.net/jpg/18/07/68/05/360_F_1807680503_au4MMBPButjY3HfddHDhf8pybU4CeKDB.jpg"
//                 alt="Craftsmanship"
//                 className="w-full h-full object-cover mix-blend-overlay"
//               />

//               {/* Floating Info Card */}
//               <motion.div
//                 animate={{ y: [0, 20, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute top-8 right-8 backdrop-blur-md  p-6 shadow-xl"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   border: '1px solid rgba(218, 165, 32, 0.3)',
//                 }}
//               >
//                 <p
//                   className="text-sm font-semibold"
//                   style={{ color: '#7B1F2A' }}
//                 >
//                   Established 2008
//                 </p>
//                 <p
//                   className="text-xs mt-1"
//                   style={{ color: '#666' }}
//                 >
//                   15+ years of excellence
//                 </p>
//               </motion.div>

//               {/* Decorative corner elements */}
//               <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/50" />
//               <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/50" />
//             </div>
//           </motion.div>

//           {/* Right - Content */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.2,
//                 },
//               },
//             }}
//             className="space-y-8"
//           >
//             {/* Accent Label */}
//             <motion.div
//               variants={slideInRightVariants}
//               className="flex items-center gap-3"
//             >
//               <div
//                 className="w-8 h-0.5 bg-amber-500"
//               />
//               <span
//                 className="text-xs font-semibold  font-['Cormorant_Garamond'] text-xl tracking-widest uppercase text-amber-400"
//               >
//                 Our Story
//               </span>
//             </motion.div>

//             {/* Heading */}
//             <motion.h2
//               variants={slideInRightVariants}
//               className="text-4xl md:text-5xl text-[#f9dbcb] font-light leading-tight"
//             >
//               A Legacy of <br />
//               <span className="font-['Cormorant_Garamond'] text-5xl md:text-6xl italic text-amber-400">
//                 Luxury
//               </span>
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               variants={slideInRightVariants}
//               className="text-lg text-white/90 font-['Cormorant_Garamond'] leading-relaxed"
//             >
//               For over fifteen years, Soni Jewellery has been synonymous with
//               timeless elegance and exceptional craftsmanship. Each piece in our
//               collection is a testament to our commitment to quality, creativity,
//               and the art of luxury jewelry design.
//             </motion.p>

//             {/* Key Points */}
//             <motion.div
//               variants={slideInRightVariants}
//               className="space-y-4"
//             >
//               {[
//                 'Handcrafted by master artisans with decades of experience',
//                 'Premium materials including gold, platinum, and ethically-sourced gemstones',
//                 'Every piece undergoes rigorous quality inspections',
//                 'Lifetime authenticity guarantee and complimentary maintenance',
//               ].map((point, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ x: 4 }}
//                   className="flex gap-4 group"
//                 >
//                   <div className="flex-shrink-0 mt-2">
//                     <div className="w-2 h-2 rotate-45 bg-amber-500 group-hover:bg-amber-400 transition-colors duration-300" />
//                   </div>
//                   <p className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
//                     {point}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Button */}
//             <motion.button
//               variants={slideInRightVariants}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="relative overflow-hidden group px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
//             >
//               <span className="relative z-10">Learn More</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative bottom element */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="w-1 h-6 rotate-45 bg-amber-500/40"
//             style={{ animationDelay: `${i * 0.2}s` }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { slideInLeftVariants, staggerContainerVariants, fadeUpVariants } from '@/lib/animations';

const PILLARS = [
  'Handcrafted by master karigars with over three decades of inherited expertise',
  'Finest 22kt & 24kt gold, certified diamonds, and ethically-sourced precious gemstones',
  'Every creation passes our seven-stage quality inspection before leaving our atelier',
  'Lifetime authenticity certificate, complimentary polishing & maintenance assured',
];

const STATS = [
  { value: '1987', label: 'Est.' },
  { value: '37+', label: 'Years of Legacy' },
  { value: '10K+', label: 'Families Adorned' },
  { value: '100%', label: 'Hallmarked Gold' },
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
                src="https://t4.ftcdn.net/jpg/18/07/68/05/360_F_1807680503_au4MMBPButjY3HfddHDhf8pybU4CeKDB.jpg"
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
                  // background: 'rgba(255,252,245,0.97)',
                  backgroundColor:"#f2d2bf",
                  border: '1px solid rgba(218,165,32,0.35)',
                }}
              >
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Cinzel', serif", color: '#1e0204', fontSize: 10 }}
                >
                  Established
                </p>
                <p
                  className="text-3xl font-semibold mt-0.5 leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#290102' }}
                >
                  1987
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
                    className="mt-1 text-[9px] tracking-[0.14em] uppercase text-white"
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
              <span
                className="text-xs tracking-[0.28em] uppercase text-amber-400"
                style={{ fontFamily: "'Cinzel', serif", fontSize: 10 }}
              >
                Our Story
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUpVariants}
              className="leading-tight text-[#f5e6d8]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              <span className="block text-4xl md:text-5xl">A Legacy Written</span>
              <span
                className="block italic text-5xl md:text-6xl text-amber-400 mt-1"
                style={{ fontWeight: 400 }}
              >
                in Gold & Gemstones
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
              className="text-lg md:text-xl leading-relaxed text-zinc-300"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Since 1987, Soni Jewellery has graced generations of families with pieces that
              transcend time. Born in the heart of India's finest jewellery tradition, every
              creation from our atelier carries the soul of master craftsmanship — where
              heritage meets the whisper of eternity.
            </motion.p>

            {/* Pillars */}
            <motion.div variants={fadeUpVariants} className="space-y-3.5">
              {PILLARS.map((point, idx) => (
                <motion.div key={idx} whileHover={{ x: 5 }} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-[9px]">
                    <div className="w-1.5 h-1.5 rotate-45 bg-amber-500 group-hover:bg-amber-300 transition-colors duration-300" />
                  </div>
                  <p
                    className="text-sm md:text-base text-white/75 group-hover:text-white/95 transition-colors duration-300 leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUpVariants}>
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
                <span className="relative z-10">Discover Our Legacy</span>
                <span
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                  style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                />
              </motion.button>
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