// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { useState } from 'react';
// // // // import { X } from 'lucide-react';

// // // // const galleryImages = [
// // // //   {
// // // //     id: 1,
// // // //     src: 'https://i.pinimg.com/1200x/8b/43/bb/8b43bbd980bdeeff58d2c5874ebf3340.jpg',
// // // //     category: 'Rings',
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     src: 'https://t4.ftcdn.net/jpg/11/68/40/39/240_F_1168403949_13Glph4RGJd8RnyiiecKdwU7XIByfG08.jpg',
// // // //     category: 'Necklaces',
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     src: 'https://i.pinimg.com/736x/0d/f8/df/0df8df39cd8f27dfc7e0cf8f676235fe.jpg',
// // // //     category: 'Bracelets',
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     src: 'https://i.pinimg.com/736x/55/26/5c/55265c125a443f2f7bb29aef3e06b015.jpg',
// // // //     category: 'Earrings',
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     src: 'https://i.pinimg.com/1200x/3f/75/37/3f7537617344e1e8804346d16b2e28bf.jpg',
// // // //     category: 'Rings',
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     src: 'https://i.pinimg.com/736x/70/1a/9a/701a9abbb87a021731bee406c574099a.jpg',
// // // //     category: 'Necklaces',
// // // //   },
// // // // ];

// // // // export function GallerySection() {
// // // //   const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

// // // //   return (
// // // //     <section
// // // //       id="gallery"
// // // //       className="relative py-20 md:py-32 px-4 bg-[#fdd6bf] sm:px-6 lg:px-8"
// // // //     >
// // // //       {/* Background */}
// // // //       <div className="absolute inset-0 -z-10">
// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{
// // // //             background: `linear-gradient(135deg, hsl(var(--theme-background)) 0%, hsl(var(--theme-light-bg)) 100%)`,
// // // //           }}
// // // //         />
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Header */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           className="text-center mb-16"
// // // //         >
// // // //           <motion.div className="flex items-center justify-center gap-3 mb-4">
// // // //             <div
// // // //               className="w-8 h-0.5"
// // // //               style={{ background: 'hsl(var(--theme-accent))' }}
// // // //             />
// // // //             <span
// // // //               className="text-xs font-semibold tracking-widest uppercase"
// // // //               style={{ color: 'hsl(var(--theme-accent))' }}
// // // //             >
// // // //               Portfolio
// // // //             </span>
// // // //             <div
// // // //               className="w-8 h-0.5"
// // // //               style={{ background: 'hsl(var(--theme-accent))' }}
// // // //             />
// // // //           </motion.div>

// // // //           <h2
// // // //             className="text-4xl md:text-5xl font-light mb-4"
// // // //             style={{ color: 'hsl(var(--theme-primary))' }}
// // // //           >
// // // //             Gallery
// // // //           </h2>
// // // //         </motion.div>

// // // //         {/* Masonry Gallery */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {galleryImages.map((image, idx) => (
// // // //             <motion.div
// // // //               key={image.id}
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true }}
// // // //               transition={{ delay: idx * 0.1 }}
// // // //               whileHover={{ y: -4 }}
// // // //               className="group cursor-pointer"
// // // //               onClick={() => setSelectedImage(image)}
// // // //             >
// // // //               <div
// // // //                 className="relative h-64 md:h-80 rounded-xl overflow-hidden glass shadow-luxury"
// // // //               >
// // // //                 <img
// // // //                   src={image.src}
// // // //                   alt={image.category}
// // // //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// // // //                 />

// // // //                 {/* Overlay */}
// // // //                 <div
// // // //                   className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-start p-6"
// // // //                   style={{
// // // //                     background: `linear-gradient(135deg, hsl(var(--theme-primary))/80, hsl(var(--theme-accent))/60)`,
// // // //                   }}
// // // //                 >
// // // //                   <motion.div
// // // //                     initial={{ y: 20, opacity: 0 }}
// // // //                     whileHover={{ y: 0, opacity: 1 }}
// // // //                     transition={{ duration: 0.3 }}
// // // //                   >
// // // //                     <p className="text-white text-lg font-light">
// // // //                       {image.category}
// // // //                     </p>
// // // //                     <p className="text-white text-sm opacity-80">
// // // //                       Click to view
// // // //                     </p>
// // // //                   </motion.div>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Modal */}
// // // //       {selectedImage && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           exit={{ opacity: 0 }}
// // // //           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
// // // //           onClick={() => setSelectedImage(null)}
// // // //         >
// // // //           <motion.div
// // // //             initial={{ scale: 0.9, opacity: 0 }}
// // // //             animate={{ scale: 1, opacity: 1 }}
// // // //             exit={{ scale: 0.9, opacity: 0 }}
// // // //             className="relative max-w-4xl w-full"
// // // //             onClick={(e) => e.stopPropagation()}
// // // //           >
// // // //             <button
// // // //               onClick={() => setSelectedImage(null)}
// // // //               className="absolute -top-12 right-0 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
// // // //             >
// // // //               <X size={24} />
// // // //             </button>

// // // //             <img
// // // //               src={selectedImage.src}
// // // //               alt={selectedImage.category}
// // // //               className="w-full rounded-xl shadow-luxury-xl"
// // // //             />

// // // //             <motion.div
// // // //               initial={{ y: 20, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               transition={{ delay: 0.2 }}
// // // //               className="mt-6 text-center"
// // // //             >
// // // //               <p
// // // //                 className="text-2xl font-light"
// // // //                 style={{ color: 'hsl(var(--theme-primary))' }}
// // // //               >
// // // //                 {selectedImage.category}
// // // //               </p>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { useState } from 'react';
// // // import { X } from 'lucide-react';

// // // const galleryImages = [
// // //   {
// // //     id: 1,
// // //     src: 'https://i.pinimg.com/1200x/8b/43/bb/8b43bbd980bdeeff58d2c5874ebf3340.jpg',
// // //     category: 'Rings',
// // //   },
// // //   {
// // //     id: 2,
// // //     src: 'https://t4.ftcdn.net/jpg/11/68/40/39/240_F_1168403949_13Glph4RGJd8RnyiiecKdwU7XIByfG08.jpg',
// // //     category: 'Necklaces',
// // //   },
// // //   {
// // //     id: 3,
// // //     src: 'https://i.pinimg.com/736x/0d/f8/df/0df8df39cd8f27dfc7e0cf8f676235fe.jpg',
// // //     category: 'Bracelets',
// // //   },
// // //   {
// // //     id: 4,
// // //     src: 'https://i.pinimg.com/736x/55/26/5c/55265c125a443f2f7bb29aef3e06b015.jpg',
// // //     category: 'Earrings',
// // //   },
// // //   {
// // //     id: 5,
// // //     src: 'https://i.pinimg.com/1200x/3f/75/37/3f7537617344e1e8804346d16b2e28bf.jpg',
// // //     category: 'Rings',
// // //   },
// // //   {
// // //     id: 6,
// // //     src: 'https://i.pinimg.com/736x/70/1a/9a/701a9abbb87a021731bee406c574099a.jpg',
// // //     category: 'Necklaces',
// // //   },
// // // ];

// // // export function GallerySection() {
// // //   const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

// // //   return (
// // //     <section
// // //       id="gallery"
// // //       className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
// // //     >
// // //       {/* Background Image */}
// // //       <div 
// // //         className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
// // //         style={{ 
// // //           backgroundImage: "url('/assets/floral_banner.png')",
// // //           backgroundSize: 'cover',
// // //           backgroundPosition: 'center',
// // //         }}
// // //       />
      
// // //       {/* Light Overlay for subtle depth */}
// // //       <div 
// // //         className="absolute inset-0 z-[1]"
// // //         style={{
// // //           background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)',
// // //         }}
// // //       />

// // //       {/* Decorative Pattern Overlay - Light */}
// // //       <div 
// // //         className="absolute inset-0 z-[1] opacity-5"
// // //         style={{
// // //           backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(255,215,0,0.05) 28px, rgba(255,215,0,0.05) 29px)`,
// // //         }}
// // //       />

// // //       <div className="relative z-10 max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-16"
// // //         >
// // //           <motion.div className="flex items-center justify-center gap-3 mb-4">
// // //             <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
// // //             <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
// // //               Portfolio
// // //             </span>
// // //             <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
// // //           </motion.div>

// // //           <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
// // //             Our <span className="font-['Cormorant_Garamond'] italic text-amber-600">Gallery</span>
// // //           </h2>
          
// // //           <p className="text-gray-600 text-sm max-w-md mx-auto">
// // //             Discover our exquisite collection of handcrafted masterpieces
// // //           </p>
// // //         </motion.div>

// // //         {/* Masonry Gallery */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {galleryImages.map((image, idx) => (
// // //             <motion.div
// // //               key={image.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ delay: idx * 0.1 }}
// // //               whileHover={{ y: -8 }}
// // //               className="group cursor-pointer"
// // //               onClick={() => setSelectedImage(image)}
// // //             >
// // //               <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 bg-white/10 backdrop-blur-sm">
// // //                 <img
// // //                   src={image.src}
// // //                   alt={image.category}
// // //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // //                 />

// // //                 {/* Gradient Overlay - Lighter */}
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

// // //                 {/* Hover Overlay */}
// // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6 bg-gradient-to-t from-amber-700/70 via-amber-600/30 to-transparent">
// // //                   <motion.div
// // //                     initial={{ y: 20, opacity: 0 }}
// // //                     whileHover={{ y: 0, opacity: 1 }}
// // //                     transition={{ duration: 0.3 }}
// // //                     className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
// // //                   >
// // //                     <p className="text-amber-300 text-lg font-semibold font-['Cinzel'] tracking-wide">
// // //                       {image.category}
// // //                     </p>
// // //                     <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
// // //                       Click to view
// // //                       <span className="w-4 h-px bg-amber-300" />
// // //                     </p>
// // //                   </motion.div>
// // //                 </div>

// // //                 {/* Corner Decoration */}
// // //                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />
// // //                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />

// // //                 {/* Category Badge */}
// // //                 <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
// // //                   <span className="text-amber-300 text-xs font-['Cinzel'] tracking-wide">
// // //                     {image.category}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Modal */}
// // //       {selectedImage && (
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           exit={{ opacity: 0 }}
// // //           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
// // //           onClick={() => setSelectedImage(null)}
// // //         >
// // //           <motion.div
// // //             initial={{ scale: 0.9, opacity: 0 }}
// // //             animate={{ scale: 1, opacity: 1 }}
// // //             exit={{ scale: 0.9, opacity: 0 }}
// // //             className="relative max-w-4xl w-full"
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             <button
// // //               onClick={() => setSelectedImage(null)}
// // //               className="absolute -top-12 right-0 text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
// // //             >
// // //               <X size={24} />
// // //             </button>

// // //             <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
// // //               <img
// // //                 src={selectedImage.src}
// // //                 alt={selectedImage.category}
// // //                 className="w-full rounded-xl"
// // //               />
              
// // //               {/* Modal Gradient Overlay */}
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
// // //             </div>

// // //             <motion.div
// // //               initial={{ y: 20, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               transition={{ delay: 0.2 }}
// // //               className="mt-6 text-center"
// // //             >
// // //               <div className="flex items-center justify-center gap-3 mb-2">
// // //                 <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500" />
// // //                 <p className="text-2xl font-light text-amber-600 font-['Cinzel'] tracking-wide">
// // //                   {selectedImage.category}
// // //                 </p>
// // //                 <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500" />
// // //               </div>
// // //               <p className="text-gray-600 text-sm">Exquisite Handcrafted Piece</p>
// // //             </motion.div>
// // //           </motion.div>
// // //         </motion.div>
// // //       )}

// // //       {/* Decorative Bottom Element */}
// // //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
// // //         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
// // //         <div className="w-2 h-2 rotate-45 bg-amber-500" />
// // //         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { useState } from 'react';
// // // import { X } from 'lucide-react';

// // // const galleryImages = [
// // //   { id: 1, src: 'https://i.pinimg.com/1200x/8b/43/bb/8b43bbd980bdeeff58d2c5874ebf3340.jpg', category: 'Rings' },
// // //   { id: 2, src: 'https://t4.ftcdn.net/jpg/11/68/40/39/240_F_1168403949_13Glph4RGJd8RnyiiecKdwU7XIByfG08.jpg', category: 'Necklaces' },
// // //   { id: 3, src: 'https://i.pinimg.com/736x/0d/f8/df/0df8df39cd8f27dfc7e0cf8f676235fe.jpg', category: 'Bracelets' },
// // //   { id: 4, src: 'https://i.pinimg.com/736x/55/26/5c/55265c125a443f2f7bb29aef3e06b015.jpg', category: 'Earrings' },
// // //   { id: 5, src: 'https://i.pinimg.com/1200x/3f/75/37/3f7537617344e1e8804346d16b2e28bf.jpg', category: 'Rings' },
// // //   { id: 6, src: 'https://i.pinimg.com/736x/70/1a/9a/701a9abbb87a021731bee406c574099a.jpg', category: 'Necklaces' },
// // // ];

// // // export function GallerySection() {
// // //   const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

// // //   return (
// // //     <section
// // //       id="gallery"
// // //       className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
// // //     >
// // //       {/* Background Image — no overlay, no dark effect */}
// // //       <div
// // //         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
// // //         style={{
// // //           backgroundImage: "url('/assets/floral_banner.png')",
// // //         }}
// // //       />

// // //       {/* Subtle diamond pattern — very light, no darkness */}
// // //       <div
// // //         className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
// // //         style={{
// // //           // backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(255,215,0,0.05) 28px, rgba(255,215,0,0.05) 29px)`,
// // //            backgroundImage: "url('/assets/floral_banner.png')",
// // //           backgroundSize: 'cover',
// // //           backgroundPosition: 'center',
// // //         }}
// // //       />

// // //       <div className="relative z-10 max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-16"
// // //         >
// // //           <motion.div className="flex items-center justify-center gap-3 mb-4">
// // //             <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
// // //             <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
// // //               Portfolio
// // //             </span>
// // //             <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
// // //           </motion.div>

// // //           <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
// // //             Our <span className="font-['Cormorant_Garamond'] italic text-amber-600">Gallery</span>
// // //           </h2>

// // //           <p className="text-gray-600 text-sm max-w-md mx-auto">
// // //             Discover our exquisite collection of handcrafted masterpieces
// // //           </p>
// // //         </motion.div>

// // //         {/* Masonry Gallery */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {galleryImages.map((image, idx) => (
// // //             <motion.div
// // //               key={image.id}
// // //               initial={{ opacity: 0, y: 30 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ delay: idx * 0.1 }}
// // //               whileHover={{ y: -8 }}
// // //               className="group cursor-pointer"
// // //               onClick={() => setSelectedImage(image)}
// // //             >
// // //               <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
// // //                 <img
// // //                   src={image.src}
// // //                   alt={image.category}
// // //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // //                 />

// // //                 {/* Hover Overlay */}
// // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6 bg-gradient-to-t from-amber-700/70 via-amber-600/30 to-transparent">
// // //                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// // //                     <p className="text-amber-300 text-lg font-semibold font-['Cinzel'] tracking-wide">
// // //                       {image.category}
// // //                     </p>
// // //                     <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
// // //                       Click to view
// // //                       <span className="w-4 h-px bg-amber-300" />
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Corner Decoration */}
// // //                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />
// // //                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />

// // //                 {/* Category Badge */}
// // //                 <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
// // //                   <span className="text-amber-300 text-xs font-['Cinzel'] tracking-wide">
// // //                     {image.category}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Modal */}
// // //       {selectedImage && (
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           exit={{ opacity: 0 }}
// // //           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
// // //           onClick={() => setSelectedImage(null)}
// // //         >
// // //           <motion.div
// // //             initial={{ scale: 0.9, opacity: 0 }}
// // //             animate={{ scale: 1, opacity: 1 }}
// // //             exit={{ scale: 0.9, opacity: 0 }}
// // //             className="relative max-w-4xl w-full"
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             <button
// // //               onClick={() => setSelectedImage(null)}
// // //               className="absolute -top-12 right-0 text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
// // //             >
// // //               <X size={24} />
// // //             </button>

// // //             <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
// // //               <img
// // //                 src={selectedImage.src}
// // //                 alt={selectedImage.category}
// // //                 className="w-full rounded-xl"
// // //               />
// // //             </div>

// // //             <motion.div
// // //               initial={{ y: 20, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               transition={{ delay: 0.2 }}
// // //               className="mt-6 text-center"
// // //             >
// // //               <div className="flex items-center justify-center gap-3 mb-2">
// // //                 <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500" />
// // //                 <p className="text-2xl font-light text-amber-600 font-['Cinzel'] tracking-wide">
// // //                   {selectedImage.category}
// // //                 </p>
// // //                 <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500" />
// // //               </div>
// // //               <p className="text-gray-600 text-sm">Exquisite Handcrafted Piece</p>
// // //             </motion.div>
// // //           </motion.div>
// // //         </motion.div>
// // //       )}

// // //       {/* Decorative Bottom Element */}
// // //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
// // //         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
// // //         <div className="w-2 h-2 rotate-45 bg-amber-500" />
// // //         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // 'use client';

// // import { motion } from 'framer-motion';
// // import { useState } from 'react';
// // import { X } from 'lucide-react';

// // const galleryImages = [
// //   { id: 1, src: 'https://i.pinimg.com/1200x/8b/43/bb/8b43bbd980bdeeff58d2c5874ebf3340.jpg', category: 'Rings' },
// //   { id: 2, src: 'https://t4.ftcdn.net/jpg/11/68/40/39/240_F_1168403949_13Glph4RGJd8RnyiiecKdwU7XIByfG08.jpg', category: 'Necklaces' },
// //   { id: 3, src: 'https://i.pinimg.com/736x/0d/f8/df/0df8df39cd8f27dfc7e0cf8f676235fe.jpg', category: 'Bracelets' },
// //   { id: 4, src: 'https://i.pinimg.com/736x/55/26/5c/55265c125a443f2f7bb29aef3e06b015.jpg', category: 'Earrings' },
// //   { id: 5, src: 'https://i.pinimg.com/1200x/3f/75/37/3f7537617344e1e8804346d16b2e28bf.jpg', category: 'Rings' },
// //   { id: 6, src: 'https://i.pinimg.com/736x/70/1a/9a/701a9abbb87a021731bee406c574099a.jpg', category: 'Necklaces' },
// // ];

// // export function GallerySection() {
// //   const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

// //   return (
// //     <section
// //       id="gallery"
// //       className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
// //     >
// //       {/* Background Image */}
// //       <div
// //         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
// //         style={{
// //           backgroundImage: "url('/assets/floral_banner.png')",
// //         }}
// //       />

// //       {/* Subtle background overlay map */}
// //       <div
// //         className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20"
// //         style={{
// //            backgroundImage: "url('/assets/floral_banner.png')",
// //            backgroundSize: 'cover',
// //            backgroundPosition: 'center',
// //         }}
// //       />

// //       <div className="relative z-10 max-w-7xl mx-auto">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-12"
// //         >
// //           <motion.div className="flex items-center justify-center gap-3 mb-4">
// //             <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
// //             <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
// //               Portfolio
// //             </span>
// //             <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
// //           </motion.div>

// //           <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
// //             Our <span className="font-['Cormorant_Garamond'] italic text-amber-600">Gallery</span>
// //           </h2>

// //           <p className="text-gray-600 text-sm max-w-md mx-auto">
// //             Discover our exquisite collection of handcrafted masterpieces
// //           </p>
// //         </motion.div>

// //         {/* Masonry / Symmetrical Responsive Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {galleryImages.map((image, idx) => (
// //             <motion.div
// //               key={image.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.1 }}
// //               whileHover={{ y: -6 }}
// //               className="group cursor-pointer"
// //               onClick={() => setSelectedImage(image)}
// //             >
// //               {/* FIXED HEIGHT BUG HERE: Switched to aspect ratio control */}
// //               <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
// //                 <img
// //                   src={image.src}
// //                   alt={image.category}
// //                   className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
// //                 />

// //                 {/* Hover Overlay */}
// //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6 bg-gradient-to-t from-amber-900/80 via-amber-800/20 to-transparent">
// //                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                     <p className="text-amber-300 text-lg font-semibold font-['Cinzel'] tracking-wide">
// //                       {image.category}
// //                     </p>
// //                     <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
// //                       Click to view
// //                       <span className="w-4 h-px bg-amber-300" />
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Corner Decoration */}
// //                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />
// //                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />

// //                 {/* Category Badge */}
// //                 <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                   <span className="text-amber-300 text-xs font-['Cinzel'] tracking-wide">
// //                     {image.category}
// //                   </span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Modal View Custom Layer */}
// //       {selectedImage && (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
// //           onClick={() => setSelectedImage(null)}
// //         >
// //           <motion.div
// //             initial={{ scale: 0.95, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             exit={{ scale: 0.95, opacity: 0 }}
// //             className="relative max-w-3xl w-full"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button
// //               onClick={() => setSelectedImage(null)}
// //               className="absolute -top-12 right-0 text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
// //             >
// //               <X size={24} />
// //             </button>

// //             <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white max-h-[80vh] flex items-center justify-center">
// //               <img
// //                 src={selectedImage.src}
// //                 alt={selectedImage.category}
// //                 className="w-full h-full object-contain max-h-[75vh]"
// //               />
// //             </div>

// //             <motion.div
// //               initial={{ y: 20, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               transition={{ delay: 0.15 }}
// //               className="mt-4 text-center"
// //             >
// //               <div className="flex items-center justify-center gap-3 mb-1">
// //                 <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500" />
// //                 <p className="text-xl font-light text-amber-400 font-['Cinzel'] tracking-wide">
// //                   {selectedImage.category}
// //                 </p>
// //                 <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500" />
// //               </div>
// //               <p className="text-gray-300 text-xs">Exquisite Handcrafted Piece</p>
// //             </motion.div>
// //           </motion.div>
// //         </motion.div>
// //       )}

// //       {/* Decorative Bottom Design Element */}
// //       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
// //         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
// //         <div className="w-2 h-2 rotate-45 bg-amber-500" />
// //         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { X } from 'lucide-react';

// const galleryImages = [
//   { id: 1, src: 'https://i.pinimg.com/1200x/8b/43/bb/8b43bbd980bdeeff58d2c5874ebf3340.jpg', category: 'Rings' },
//   { id: 2, src: 'https://t4.ftcdn.net/jpg/11/68/40/39/240_F_1168403949_13Glph4RGJd8RnyiiecKdwU7XIByfG08.jpg', category: 'Necklaces' },
//   { id: 3, src: 'https://i.pinimg.com/736x/0d/f8/df/0df8df39cd8f27dfc7e0cf8f676235fe.jpg', category: 'Bracelets' },
//   { id: 4, src: 'https://i.pinimg.com/736x/55/26/5c/55265c125a443f2f7bb29aef3e06b015.jpg', category: 'Earrings' },
//   { id: 5, src: 'https://i.pinimg.com/1200x/3f/75/37/3f7537617344e1e8804346d16b2e28bf.jpg', category: 'Rings' },
//   { id: 6, src: 'https://i.pinimg.com/736x/70/1a/9a/701a9abbb87a021731bee406c574099a.jpg', category: 'Necklaces' },
// ];

// export function GallerySection() {
//   const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

//   return (
//     <section
//       id="gallery"
//       className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
//     >
//       {/* Single clean floral background with low opacity */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
//         style={{
//           backgroundImage: "url('/assets/floral_banner.png')",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <motion.div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
//             <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
//               Portfolio
//             </span>
//             <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
//             Our <span className="font-['Cormorant_Garamond'] italic text-amber-600">Gallery</span>
//           </h2>

//           <p className="text-gray-600 text-sm max-w-md mx-auto">
//             Discover our exquisite collection of handcrafted masterpieces
//           </p>
//         </motion.div>

//         {/* Masonry / Symmetrical Responsive Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.map((image, idx) => (
//             <motion.div
//               key={image.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -6 }}
//               className="group cursor-pointer"
//               onClick={() => setSelectedImage(image)}
//             >
//               <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 bg-gray-100">
//                 <img
//                   src={image.src}
//                   alt={image.category}
//                   className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6 bg-gradient-to-t from-amber-900/80 via-amber-800/20 to-transparent">
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <p className="text-amber-300 text-lg font-semibold font-['Cinzel'] tracking-wide">
//                       {image.category}
//                     </p>
//                     <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
//                       Click to view
//                       <span className="w-4 h-px bg-amber-300" />
//                     </p>
//                   </div>
//                 </div>

//                 {/* Corner Decoration */}
//                 <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />
//                 <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />

//                 {/* Category Badge */}
//                 <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   <span className="text-amber-300 text-xs font-['Cinzel'] tracking-wide">
//                     {image.category}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal View Custom Layer */}
//       {selectedImage && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
//           onClick={() => setSelectedImage(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             className="relative max-w-3xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute -top-12 right-0 text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
//             >
//               <X size={24} />
//             </button>

//             <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white max-h-[80vh] flex items-center justify-center">
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.category}
//                 className="w-full h-full object-contain max-h-[75vh]"
//               />
//             </div>

//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.15 }}
//               className="mt-4 text-center"
//             >
//               <div className="flex items-center justify-center gap-3 mb-1">
//                 <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500" />
//                 <p className="text-xl font-light text-amber-400 font-['Cinzel'] tracking-wide">
//                   {selectedImage.category}
//                 </p>
//                 <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500" />
//               </div>
//               <p className="text-gray-300 text-xs">Exquisite Handcrafted Piece</p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}

//       {/* Decorative Bottom Design Element */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
//         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
//         <div className="w-2 h-2 rotate-45 bg-amber-500" />
//         <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
//       </div>
//     </section>
//   );
// }



'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://i.pinimg.com/1200x/8b/43/bb/8b43bbd980bdeeff58d2c5874ebf3340.jpg', category: 'Rings' },
  { id: 2, src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRaDmbeSSi_-97m1Ls_bHqLzBvgGJNx4XopS5oux2X8PYo5JQ0Ljp92wmbZjnKuShF4ELSIda_oGUoMOJUAcocE7drcn0yi', category: 'Necklaces' },
  { id: 3, src: 'https://i.pinimg.com/736x/0d/f8/df/0df8df39cd8f27dfc7e0cf8f676235fe.jpg', category: 'Bracelets' },
  { id: 4, src: 'https://i.pinimg.com/736x/55/26/5c/55265c125a443f2f7bb29aef3e06b015.jpg', category: 'Earrings' },
  { id: 5, src: 'https://i.pinimg.com/1200x/3f/75/37/3f7537617344e1e8804346d16b2e28bf.jpg', category: 'Rings' },
  { id: 6, src: 'https://i.pinimg.com/736x/70/1a/9a/701a9abbb87a021731bee406c574099a.jpg', category: 'Necklaces' },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setActiveSlide((index + galleryImages.length) % galleryImages.length);
  };

  const prevSlide = () => goTo(activeSlide - 1, -1);
  const nextSlide = () => goTo(activeSlide + 1, 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0 }),
  };

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/assets/jewelry_banner_hd.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-xs font-semibold text-[#53020b] tracking-widest uppercase ">
              Portfolio
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-amber-500" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-light mb-4 text-[#53020b]">
            Our <span className="font-['Cormorant_Garamond'] text-[#53020b] italic">Gallery</span>
          </h2>

          <p className="text-zinc-900 font-['Cormorant_Garamond'] text-[18px] max-w-md mx-auto">
            Discover our exquisite collection of handcrafted masterpieces
          </p>
        </motion.div>

        {/* ── DESKTOP: unchanged grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 bg-gray-100">
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6 bg-gradient-to-t from-amber-900/80 via-amber-800/20 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-amber-300 text-lg font-semibold font-['Cinzel'] tracking-wide">{image.category}</p>
                    <p className="text-white/80 text-sm flex items-center gap-2 mt-1">Click to view <span className="w-4 h-px bg-amber-300" /></p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-300" />
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-amber-300 text-xs font-['Cinzel'] tracking-wide">{image.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MOBILE: full-width slider ── */}
        <div
          className="md:hidden relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
            <AnimatePresence custom={direction} initial={false} mode="popLayout">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: 'easeInOut' }}
                className="absolute inset-0"
                onClick={() => setSelectedImage(galleryImages[activeSlide])}
              >
                <img
                  src={galleryImages[activeSlide].src}
                  alt={galleryImages[activeSlide].category}
                  className="w-full h-full object-cover object-center"
                />
                {/* Bottom overlay with category */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-amber-900/75 to-transparent flex items-end p-5">
                  <div>
                    <p className="text-amber-300 text-base font-['Cinzel'] tracking-wide">{galleryImages[activeSlide].category}</p>
                    <p className="text-white/70 text-xs mt-0.5">Tap to view</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrow buttons — no background */}
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors duration-200"
            >
              <ChevronLeft size={30} strokeWidth={1.5} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white transition-colors duration-200"
            >
              <ChevronRight size={30} strokeWidth={1.5} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > activeSlide ? 1 : -1)}
                aria-label={`Slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeSlide ? 18 : 6,
                  height: 6,
                  background: i === activeSlide ? '#d97706' : '#d9770640',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              >
                <X size={24} />
              </button>
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white max-h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.category}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-1">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500" />
                  <p className="text-xl font-light text-amber-400 font-['Cinzel'] tracking-wide">{selectedImage.category}</p>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500" />
                </div>
                <p className="text-gray-300 text-xs">Exquisite Handcrafted Piece</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative bottom element */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
        <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
        <div className="w-2 h-2 rotate-45 bg-amber-500" />
        <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/60" />
      </div> */}
    </section>
  );
}
