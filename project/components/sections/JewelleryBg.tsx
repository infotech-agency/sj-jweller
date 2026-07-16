// // // 'use client';

// // // import React from 'react';

// // // interface CollectionItem {
// // //   id: number;
// // //   title: string;
// // //   imageUrl: string;
// // //   description?: string;
// // // }

// // // interface BackgroundImageProps {
// // //   imageUrl?: string;
// // //   className?: string;
// // //   children?: React.ReactNode;
// // // }

// // // const collectionItems: CollectionItem[] = [
// // //   {
// // //     id: 1,
// // //     title: 'Rings',
// // //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-necklace-exact-VdxWZEbnckNqbHfdexukAB.webp',
// // //     description: 'Elegant rings for every occasion'
// // //   },
// // //   {
// // //     id: 2,
// // //     title: 'Necklace',
// // //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-earrings-exact-G2UDL3NM9oTbpCvWbh6gaY.webp',
// // //     description: 'Stunning necklaces to elevate your style'
// // //   },
// // //   {
// // //     id: 3,
// // //     title: 'Bracelet',
// // //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
// // //     description: 'Beautiful bracelets for every wrist'
// // //   },
// // //   {
// // //     id: 4,
// // //     title: 'Earrings',
// // //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-haars-exact-MCa2LCdFxKA3DNgWujzo4C.webp',
// // //     description: 'Gorgeous earrings to complete your look'
// // //   },
// // // ];

// // // export const BackgroundImage: React.FC<BackgroundImageProps> = ({
// // //   imageUrl = '/assets/refined_dark_red_silk_banner.png',
// // //   className = '',
// // //   children,
// // // }) => {
// // //   return (
// // //     <>
// // //       <h1 className='text-center text-white text-4xl md:text-5xl font-serif tracking-wider pt-8 pb-4 bg-[#310205]'>
// // //         THE COLLECTIONS
// // //       </h1>
// // //       <div 
// // //         className={`w-full min-h-screen bg-cover bg-[#310205] flex items-center justify-center bg-center bg-no-repeat ${className}`}
// // //         style={{ backgroundImage: `url(${imageUrl})` }}
// // //       >
// // //         <div className="flex flex-wrap gap-6 justify-center p-8">
// // //           {collectionItems.map((item) => (
// // //             <div 
// // //               key={item.id}
// // //               className="group relative w-64 h-80 overflow-hidden rounded-2xl border border-yellow-500 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
// // //             >
// // //               <img
// // //                 src={item.imageUrl}
// // //                 alt={item.title}
// // //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// // //               />

// // //               {/* Golden Overlay Effect */}
// // //               <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 via-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

// // //               {/* Border glow effect on hover */}
// // //               <div className="absolute inset-0 border-2 border-yellow-500/0 rounded-2xl group-hover:border-yellow-500/50 transition-all duration-300 pointer-events-none"></div>

// // //               {/* Title */}
// // //               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
// // //                 <h2 className="text-white text-xl tracking-[0.2em] uppercase font-serif group-hover:tracking-[0.3em] transition-all duration-300">
// // //                   {item.title}
// // //                 </h2>
// // //                 <p className="text-yellow-500/0 text-sm mt-1 group-hover:text-yellow-500/80 transition-all duration-300">
// // //                   {item.description}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         {children}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default BackgroundImage;


// // 'use client';

// // import React from 'react';
// // import { motion, useInView } from 'framer-motion';

// // interface CollectionItem {
// //   id: number;
// //   title: string;
// //   imageUrl: string;
// //   description?: string;
// // }

// // interface BackgroundImageProps {
// //   imageUrl?: string;
// //   className?: string;
// //   children?: React.ReactNode;
// // }

// // const collectionItems: CollectionItem[] = [
// //   {
// //     id: 1,
// //     title: 'Rings',
// //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-necklace-exact-VdxWZEbnckNqbHfdexukAB.webp',
// //     description: 'Elegant rings for every occasion'
// //   },
// //   {
// //     id: 2,
// //     title: 'Necklace',
// //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-earrings-exact-G2UDL3NM9oTbpCvWbh6gaY.webp',
// //     description: 'Stunning necklaces to elevate your style'
// //   },
// //   {
// //     id: 3,
// //     title: 'Bracelet',
// //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
// //     description: 'Beautiful bracelets for every wrist'
// //   },
// //   {
// //     id: 4,
// //     title: 'Earrings',
// //     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-haars-exact-MCa2LCdFxKA3DNgWujzo4C.webp',
// //     description: 'Gorgeous earrings to complete your look'
// //   },
// // ];

// // // Inject premium fonts
// // const PremiumFonts = () => (
// //   <style jsx global>{`
// //     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
    
// //     @keyframes shimmer-gold {
// //       0% { background-position: -200% center; }
// //       100% { background-position: 200% center; }
// //     }
    
// //     @keyframes borderPulse {
// //       0%, 100% { border-color: rgba(234, 179, 8, 0.3); }
// //       50% { border-color: rgba(234, 179, 8, 0.8); }
// //     }
    
// //     .shimmer-gold {
// //       background: linear-gradient(90deg, #D4AF37 0%, #FFD700 40%, #FFF8DC 50%, #FFD700 60%, #D4AF37 100%);
// //       background-size: 200% auto;
// //       -webkit-background-clip: text;
// //       -webkit-text-fill-color: transparent;
// //       background-clip: text;
// //       animation: shimmer-gold 3s linear infinite;
// //     }
// //   `}</style>
// // );

// // export const BackgroundImage: React.FC<BackgroundImageProps> = ({
// //   imageUrl = '/assets/refined_dark_red_silk_banner.png',
// //   className = '',
// //   children,
// // }) => {
// //   const headingRef = React.useRef(null);
// //   const headingInView = useInView(headingRef, { once: true });

// //   return (
// //     <>
// //       <PremiumFonts />
      
// //       <div 
// //         className={`relative w-full min-h-screen bg-cover bg-center bg-fixed bg-no-repeat ${className}`}
// //         style={{ backgroundImage: `url(${imageUrl})` }}
// //       >
// //         {/* Dark overlay for better text readability */}
// //         <div className="absolute inset-0 bg-black/30" />
        
// //         {/* Content wrapper */}
// //         <div className="relative z-10 w-full min-h-screen flex flex-col">
          
// //           {/* Heading Section - Top Center */}
// //           <motion.div 
// //             ref={headingRef}
// //             initial={{ opacity: 0, y: -30 }}
// //             animate={headingInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             className="w-full pt-10 md:pt-20 pb-2 md:pb-8"
// //           >
// //             {/* Top Ornamental Line */}
// //             <div className="flex items-center justify-center gap-3 mb-6">
// //               <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
// //               <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
// //               <div className="w-2.5 h-2.5 rotate-45 bg-amber-400" />
// //               <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
// //               <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
// //             </div>

// //             {/* Main Title */}
// //             <h1 className="text-center font-['Playfair_Display'] font-bold 
// //                            text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider
// //                            shimmer-gold
// //                            drop-shadow-2xl">
// //               THE COLLECTIONS
// //             </h1>

// //             {/* Subtitle */}
// //             <p className="text-center font-['Cinzel'] text-amber-400/80 
// //                           text-xs md:text-sm tracking-[0.3em] uppercase mt-4
// //                           font-light">
// //               TIMELESS ELEGANCE • EXQUISITE CRAFTSMANSHIP
// //             </p>

// //             {/* Bottom Ornamental Line */}
// //             <div className="flex items-center justify-center gap-3 mt-6">
// //               <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
// //               <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
// //               <div className="w-2 h-2 rotate-45 bg-amber-400" />
// //               <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
// //               <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
// //             </div>
// //           </motion.div>

// //           {/* Cards Grid */}
// //           <div className="w-full flex justify-center pt-2 pb-10 md:py-1">
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 md:gap-8 px-4 sm:px-6 max-w-7xl mx-auto w-full">
// //               {collectionItems.map((item, index) => (
// //                 <motion.div 
// //                   // key={item.id}
// //                   // initial={{ opacity: 0, y: 50 }}
// //                   // animate={headingInView ? { opacity: 1, y: 0 } : {}}
// //                   // transition={{ duration: 0.6, delay: index * 0.1 }}
// //                   // whileHover={{ y: -8 }}
// //                    key={item.id}
// //   initial={{ 
// //     opacity: 0,
// //     y: 60
// //   }}
// //   whileInView={{ 
// //     opacity: 1,
// //     y: 0
// //   }}
// //   viewport={{ once: true, amount: 0.25 }}
// //   transition={{ 
// //     duration: 0.8,
// //     delay: index * 0.12,
// //     ease: "easeOut"
// //   }}
// //   whileHover={{ y: -8 }}
// //                   className="group relative w-full max-w-[300px] sm:max-w-[320px] 
// //            h-[380px] sm:h-[420px] md:w-72 md:h-96 
// //            overflow-hidden rounded-2xl
// //            border border-amber-500/30 cursor-pointer 
// //            transition-all duration-500 hover:shadow-2xl 
// //            hover:shadow-amber-500/30 hover:border-amber-500/80
// //            backdrop-blur-sm"
// //                 >
// //                   <img
// //                     src={item.imageUrl}
// //                     alt={item.title}
// //                     className="w-full h-full object-cover transition-transform 
// //                                duration-700 group-hover:scale-110"
// //                   />

// //                   {/* Gradient Overlay */}
// //                   <div className="absolute inset-0 bg-gradient-to-t 
// //                                   from-black/80 via-black/30 to-transparent 
// //                                   opacity-60 group-hover:opacity-80 
// //                                   transition-all duration-500" />

// //                   {/* Golden Overlay Effect on Hover */}
// //                   <div className="absolute inset-0 bg-gradient-to-t 
// //                                   from-amber-500/40 via-amber-500/10 to-transparent 
// //                                   opacity-0 group-hover:opacity-100 
// //                                   transition-all duration-500" />

// //                   {/* Border glow effect on hover */}
// //                   <div className="absolute inset-0 border-2 border-amber-500/0 
// //                                   rounded-2xl group-hover:border-amber-500/60 
// //                                   transition-all duration-500 pointer-events-none" />

// //                   {/* Corner Decorations */}
// //                   <div className="absolute top-4 left-4 w-8 h-8 
// //                                   border-t-2 border-l-2 border-amber-500/0 
// //                                   group-hover:border-amber-500/60 
// //                                   transition-all duration-500" />
// //                   <div className="absolute top-4 right-4 w-8 h-8 
// //                                   border-t-2 border-r-2 border-amber-500/0 
// //                                   group-hover:border-amber-500/60 
// //                                   transition-all duration-500" />
// //                   <div className="absolute bottom-4 left-4 w-8 h-8 
// //                                   border-b-2 border-l-2 border-amber-500/0 
// //                                   group-hover:border-amber-500/60 
// //                                   transition-all duration-500" />
// //                   <div className="absolute bottom-4 right-4 w-8 h-8 
// //                                   border-b-2 border-r-2 border-amber-500/0 
// //                                   group-hover:border-amber-500/60 
// //                                   transition-all duration-500" />

// //                   {/* Title Section */}
// //                   <div className="absolute bottom-0 left-0 w-full p-6 
// //                                   bg-gradient-to-t from-black/80 to-transparent">
// //                     {/* Diamond divider */}
// //                     <div className="flex items-center justify-center gap-2 mb-3 
// //                                     opacity-0 group-hover:opacity-100 
// //                                     transition-all duration-500 
// //                                     transform translate-y-2 group-hover:translate-y-0">
// //                       <div className="w-1 h-1 rotate-45 bg-amber-500" />
// //                       <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
// //                       <div className="w-1 h-1 rotate-45 bg-amber-500" />
// //                     </div>
                    
// //                     <h2 className="text-white text-2xl tracking-[0.2em] uppercase 
// //                                    font-['Cinzel'] font-semibold text-center
// //                                    group-hover:tracking-[0.3em] 
// //                                    transition-all duration-500
// //                                    group-hover:text-amber-400">
// //                       {item.title}
// //                     </h2>
                    
// //                     <p className="text-amber-500/0 text-sm text-center mt-2 
// //                                   group-hover:text-amber-500/90 
// //                                   transition-all duration-500
// //                                   font-['Cormorant_Garamond'] font-light
// //                                   transform translate-y-4 group-hover:translate-y-0">
// //                       {item.description}
// //                     </p>
                    
// //                     {/* Bottom diamond */}
// //                     <div className="flex justify-center mt-3 
// //                                     opacity-0 group-hover:opacity-100 
// //                                     transition-all duration-500">
// //                       <div className="w-6 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           {children}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default BackgroundImage;

// 'use client';

// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { ArrowRight, Eye } from 'lucide-react';
// import { url } from 'node:inspector';

// /* --------------------------------- Types ----------------------------------- */

// type FilterKey = 'all' | 'rings' | 'necklace' | 'bracelet' | 'earrings';

// interface FilterItem {
//   key: FilterKey;
//   title: string;
//   imageUrl: string;
// }

// interface Product {
//   id: number;
//   title: string;
//   category: Exclude<FilterKey, 'all'>;
//   imageUrl: string;
//   price: string;
// }

// /* --------------------------------- Data ------------------------------------ */

// const filterItems: FilterItem[] = [
//   {
//     key: 'rings',
//     title: 'Rings',
//     imageUrl:
//       'https://media.istockphoto.com/id/469421498/photo/isolated-image-of-a-diamond-ring-on-a-white-background.jpg?s=612x612&w=0&k=20&c=t-pKUmi8yKLxpuhULX9qXH6W3ZzCapjwZNVexBYjsRI=',
//   },
//   {
//     key: 'necklace',
//     title: 'Necklace',
//     imageUrl:
//       'https://media.istockphoto.com/id/1658696488/photo/close-up-of-gold-and-diamond-necklace-with-pair-of-earrings.jpg?s=612x612&w=0&k=20&c=HSj4vHTEUU3mjBYyhJN7OcXyBZr9iCYIrcbQ06lM4iI=',
//   },
//   // {
//   //   key: 'bracelet',
//   //   title: 'Bracelet',
//   //   imageUrl:
//   //     'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
//   // },
//   {
//     key: 'earrings',
//     title: 'Earrings',
//     imageUrl:
//       'https://media.istockphoto.com/id/1350815428/photo/earrings-with-emerald.jpg?s=612x612&w=0&k=20&c=kOU7THyczk-TjsPGKXtONaHQ7pJsgxtmQEIUmAZiMCs=',
//   },
// ];

// const products: Product[] = [
//   {
//     id: 1,
//     title: 'Aurelia Statement Ring',
//     category: 'rings',
//     price: '₹48,500',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-necklace-exact-VdxWZEbnckNqbHfdexukAB.webp',
//   },
//   {
//     id: 2,
//     title: 'Royal Heritage Necklace',
//     category: 'necklace',
//     price: '₹1,82,000',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-earrings-exact-G2UDL3NM9oTbpCvWbh6gaY.webp',
//   },
//   {
//     id: 3,
//     title: 'Lustre Charm Bracelet',
//     category: 'bracelet',
//     price: '₹32,900',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
//   },
//   {
//     id: 4,
//     title: 'Ivory Pearl Drop Earrings',
//     category: 'earrings',
//     price: '₹24,400',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-haars-exact-MCa2LCdFxKA3DNgWujzo4C.webp',
//   },
//   {
//     id: 5,
//     title: 'Regal Cocktail Ring',
//     category: 'rings',
//     price: '₹56,200',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-necklace-exact-VdxWZEbnckNqbHfdexukAB.webp',
//   },
//   {
//     id: 6,
//     title: 'Antique Choker Necklace',
//     category: 'necklace',
//     price: '₹2,14,500',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
//   },
//   {
//     id: 7,
//     title: 'Whisper Tennis Bracelet',
//     category: 'bracelet',
//     price: '₹38,800',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
//   },
//   {
//     id: 8,
//     title: 'Moonlit Drop Earrings',
//     category: 'earrings',
//     price: '₹28,700',
//     imageUrl:
//       'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-haars-exact-MCa2LCdFxKA3DNgWujzo4C.webp',
//   },
// ];

// /* ------------------------------- Premium Fonts ------------------------------ */

// const PremiumFonts = () => (
//   <style jsx global>{`
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

//     @keyframes shimmer-gold {
//       0% {
//         background-position: -200% center;
//       }
//       100% {
//         background-position: 200% center;
//       }
//     }

//     .shimmer-gold {
//       background: linear-gradient(
//         90deg,
//         #d4af37 0%,
//         #ffd700 40%,
//         #fff8dc 50%,
//         #ffd700 60%,
//         #d4af37 100%
//       );
//       background-size: 200% auto;
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       animation: shimmer-gold 3s linear infinite;
//     }
//   `}</style>
// );

// /* --------------------------------- Component -------------------------------- */

// export const CollectionFilterSection: React.FC = () => {
//   const headingRef = React.useRef(null);
//   const headingInView = useInView(headingRef, { once: true });
//   const [active, setActive] = useState<FilterKey>('all');

//   const visibleProducts = useMemo(() => {
//     if (active === 'all') return products;
//     return products.filter((p) => p.category === active);
//   }, [active]);

//   return (
//     <>
//       <PremiumFonts />

//       <section className="relative w-full bg-black py-14 md:py-20" 
//        style={{
//     backgroundImage: "url('/assets/refined_dark_red_silk_banner.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
//       >
//         {/* ---------------- Compact Heading ---------------- */}
//         <motion.div
//           ref={headingRef}
//           initial={{ opacity: 0, y: -20 }}
//           animate={headingInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//           className="w-full px-4"
//         >
//           <div className="flex items-center justify-center gap-2.5 mb-3">
//             <div className="h-px w-8 md:w-14 bg-gradient-to-r from-transparent to-amber-500/60" />
//             <div className="w-1 h-1 rotate-45 bg-amber-500" />
//             <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
//             <div className="w-1 h-1 rotate-45 bg-amber-500" />
//             <div className="h-px w-8 md:w-14 bg-gradient-to-l from-transparent to-amber-500/60" />
//           </div>

//           <h2
//             className="text-center font-['Playfair_Display'] font-bold
//                        text-2xl sm:text-3xl md:text-4xl tracking-wider
//                        shimmer-gold drop-shadow-2xl"
//           >
//             THE COLLECTIONS
//           </h2>

//           <p
//             className="text-center font-['Cinzel'] text-amber-400/80
//                        text-[10px] md:text-xs tracking-[0.25em] uppercase mt-2
//                        font-light"
//           >
//             Timeless Elegance • Exquisite Craftsmanship
//           </p>
//         </motion.div>

//         {/* ---------------- Mini Filter Cards ---------------- */}
//         <div className="w-full flex justify-center mt-8 md:mt-10 px-4">
//           <div className="flex flex-wrap justify-center gap-3.5 md:gap-5 max-w-3xl">
//             {/* All filter */}
//             <FilterCard
//               title="All"
//                imageUrl="" 
//               isActive={active === 'all'}
//               onClick={() => setActive('all')}
//               fallbackGradient
//             />
//             {filterItems.map((item) => (
//               <FilterCard
//                 key={item.key}
//                 title={item.title}
//                 imageUrl={item.imageUrl}
//                 isActive={active === item.key}
//                 onClick={() => setActive(item.key)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* ---------------- Product Grid ---------------- */}
//         <div className="w-full flex justify-center pt-10 md:pt-14 px-4 sm:px-6">
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//               key={active}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
//               transition={{ duration: 0.3, ease: 'easeInOut' }}
//               className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 max-w-7xl w-full items-start"
//             >
//               {visibleProducts.map((p, index) => (
//                 <motion.div
//                   key={p.id}
//                   initial={{ opacity: 0, scale: 0.94 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{
//                     duration: 0.4,
//                     delay: 0.1 + index * 0.05,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   whileHover={{ y: -8 }}
//                   className="group relative w-full
//                              h-[280px] sm:h-[340px] md:h-[400px]
//                              overflow-hidden rounded-2xl
//                              border border-amber-500/30 cursor-pointer
//                              transition-all duration-500 hover:shadow-2xl
//                              hover:shadow-amber-500/30 hover:border-amber-500/80
//                              backdrop-blur-sm"
//                 >
//                   <img
//                     src={p.imageUrl}
//                     alt={p.title}
//                     className="w-full h-full object-cover transition-transform
//                                duration-700 group-hover:scale-110"
//                   />

//                   {/* Gradient Overlay */}
//                   <div
//                     className="absolute inset-0 bg-gradient-to-t
//                                from-black/80 via-black/30 to-transparent
//                                opacity-70 group-hover:opacity-90
//                                transition-all duration-500"
//                   />

//                   {/* Golden hover wash */}
//                   <div
//                     className="absolute inset-0 bg-gradient-to-t
//                                from-amber-500/40 via-amber-500/10 to-transparent
//                                opacity-0 group-hover:opacity-100
//                                transition-all duration-500"
//                   />

//                   {/* Corner decorations */}
//                   <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
//                   <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
//                   <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
//                   <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />

//                   {/* Category badge */}
//                   <span
//                     className="absolute top-3 left-3 translate-x-1 translate-y-1
//                                rounded-full px-2.5 py-1 text-[9px] font-medium
//                                uppercase tracking-widest text-black bg-amber-400/90
//                                shadow-md"
//                   >
//                     {p.category}
//                   </span>

//                   {/* Quick view */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
//                     <span className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-black bg-amber-400/95 shadow-lg">
//                       <Eye className="h-3 w-3" />
//                       Quick View
//                     </span>
//                   </div>

//                   {/* Title section */}
//                   <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 bg-gradient-to-t from-black/85 to-transparent">
//                     <h3
//                       className="text-white text-base md:text-lg tracking-[0.12em] uppercase
//                                  font-['Cinzel'] font-semibold text-center
//                                  group-hover:text-amber-400 transition-all duration-500"
//                     >
//                       {p.title}
//                     </h3>
//                     <div className="flex items-center justify-center gap-2 mt-1.5">
//                       <span className="text-amber-400 text-sm font-medium font-['Cormorant_Garamond']">
//                         {p.price}
//                       </span>
//                       <ArrowRight className="h-3.5 w-3.5 text-amber-400/80 transition-transform group-hover:translate-x-1" />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {visibleProducts.length === 0 && (
//           <p className="text-center text-amber-400/70 py-16 font-['Cormorant_Garamond']">
//             No pieces found in this category yet.
//           </p>
//         )}
//       </section>
//     </>
//   );
// };

// /* ----------------------------- Mini Filter Card ----------------------------- */

// interface FilterCardProps {
//   title: string;
//   imageUrl?: string;
//   isActive: boolean;
//   onClick: () => void;
//   fallbackGradient?: boolean;
// }

// const FilterCard: React.FC<FilterCardProps> = ({
//   title,
//   imageUrl,
//   isActive,
//   onClick,
//   fallbackGradient,
// }) => {
//   return (
//     <button onClick={onClick} className="group flex flex-col items-center gap-2 focus:outline-none">
//       <span
//         className={`relative block w-[72px] h-[88px] sm:w-20 sm:h-24 md:w-[92px] md:h-[110px]
//                     overflow-hidden rounded-xl border transition-all duration-400
//                     ${
//                       isActive
//                         ? 'border-amber-400 shadow-lg shadow-amber-500/40 scale-105'
//                         : 'border-amber-500/25 opacity-80 group-hover:opacity-100 group-hover:border-amber-500/60 group-hover:scale-105'
//                     }`}
//       >
//         {fallbackGradient ? (
//           <span className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-black to-black" />
//         ) : (
//           <img
//             src={imageUrl}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         )}

//         <span
//           className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
//             isActive
//               ? 'from-black/70 via-black/10 to-transparent'
//               : 'from-black/80 via-black/20 to-transparent'
//           }`}
//         />

//         {isActive && (
//           <motion.span
//             layoutId="mini-filter-glow"
//             className="absolute inset-0 rounded-xl"
//             style={{ boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.55)' }}
//           />
//         )}
//       </span>

//       <span
//         className={`text-[11px] md:text-xs font-['Cinzel'] tracking-[0.15em] uppercase transition-colors duration-300 ${
//           isActive ? 'text-amber-400' : 'text-amber-200/60 group-hover:text-amber-300'
//         }`}
//       >
//         {title}
//       </span>

//       {isActive && (
//         <motion.span
//           layoutId="mini-filter-underline"
//           className="h-[2px] w-5 rounded-full bg-amber-400"
//         />
//       )}
//     </button>
//   );
// };

// export default CollectionFilterSection;

'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

/* --------------------------------- Types ----------------------------------- */

type FilterKey = 'all' | 'rings' | 'necklace' | 'bracelet' | 'earrings';

interface FilterItem {
  key: FilterKey;
  title: string;
  imageUrl: string;
}

interface Product {
  id: number;
  title: string;
  category: Exclude<FilterKey, 'all'>;
  imageUrl: string;
  price: string;
}

/* --------------------------------- Data ------------------------------------ */

/**
 * PLACEHOLDER IMAGES — replace every imageUrl below with your own product photos.
 * Suggested folder structure in your /public directory:
 *   public/images/collection/filters/   -> filter thumbnail images
 *   public/images/collection/products/  -> product grid images
 */

const PLACEHOLDER_IMG = '/images/collection/placeholder.jpg';

const filterItems: FilterItem[] = [
  {
    key: 'rings',
    title: 'Rings',
    imageUrl: 'https://media.istockphoto.com/id/157185375/photo/three-diamonds-set-in-a-white-gold-ring-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AGUN2NdvrdIuKTm9ai8s4ZMQS0oDe2_qqQnhUNFTFhY=', // TODO: replace with rings filter thumbnail
  },
  {
    key: 'necklace',
    title: 'Necklace',
    imageUrl: 'https://www.darjewellery.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MTYyMDc2MDQ5MTAuanBn', // TODO: replace with necklace filter thumbnail
  },
  // {
  //   key: 'bracelet',
  //   title: 'Bracelet',
  //   imageUrl: '/images/collection/filters/bracelet.jpg', // TODO: replace with bracelet filter thumbnail
  // },
  {
    key: 'earrings',
    title: 'Earrings',
    imageUrl: 'https://media.istockphoto.com/id/1145185972/photo/pair-of-emerald-earrings-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rsjDhlUeccYv7J7kpy44PnuDTAT5PqlauW7Vdixuxkk=', // TODO: replace with earrings filter thumbnail
  },
];

const products: Product[] = [
  {
    id: 1,
    title: 'Aurelia Statement Ring',
    category: 'rings',
    price: '₹48,500',
    imageUrl: 'https://www.zoya.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe7dade9d/images/ZOYA/hi-res/ZLFL24FAGAA34.jpg?sw=480&sh=480', // TODO: replace
  },
  {
    id: 2,
    title: 'Royal Heritage Necklace',
    category: 'necklace',
    price: '₹1,82,000',
    imageUrl: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/371/1779535342_0aea252b06942c27a88c.webp', // TODO: replace
  },
 
  {
    id: 4,
    title: 'Ivory Pearl Drop Earrings',
    category: 'earrings',
    price: '₹24,400',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_yJQPtyGDjhxZ8yFCTRODhgXfTnooU0bxw&s', // TODO: replace
  },
  {
    id: 5,
    title: 'Regal Cocktail Ring',
    category: 'rings',
    price: '₹56,200',
    imageUrl: 'https://www.ayaani.in/cdn/shop/files/imgi_7_SS2_15_301020251218248902589.webp?v=1775303290&width=533', // TODO: replace
  },
  {
    id: 6,
    title: 'Antique Choker Necklace',
    category: 'necklace',
    price: '₹2,14,500',
    imageUrl: 'https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/resize-w:960/oIWL5m2UP-Kundala-Velai-22-Karat-Gold-Long-Necklace.jpeg', // TODO: replace
  },
 
  {
    id: 8,
    title: 'Moonlit Drop Earrings',
    category: 'earrings',
    price: '₹28,700',
    imageUrl: 'https://rubans.in/cdn/shop/files/RW04ED412290-Model-2.jpg?v=1770111279&width=610', // TODO: replace
  },
];

/* ------------------------------- Premium Fonts ------------------------------ */

const PremiumFonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

    @keyframes shimmer-gold {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    .shimmer-gold {
      background: linear-gradient(
        90deg,
        #d4af37 0%,
        #ffd700 40%,
        #fff8dc 50%,
        #ffd700 60%,
        #d4af37 100%
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer-gold 3s linear infinite;
    }
  `}</style>
);

/* --------------------------------- Component -------------------------------- */

export const CollectionFilterSection: React.FC<{ backgroundImageUrl?: string }> = ({
  backgroundImageUrl = '/assets/refined_dark_red_silk_banner.png',
}) => {
  const headingRef = React.useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const [active, setActive] = useState<FilterKey>('all');

  const visibleProducts = useMemo(() => {
    if (active === 'all') return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PremiumFonts />

      <section
        className="relative w-full bg-black bg-cover bg-center bg-no-repeat py-14 md:py-20"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Dark overlay so text and cards stay readable over the image */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Wrap all existing content so it sits above the overlay */}
        <div className="relative z-10">
        {/* ---------------- Compact Heading ---------------- */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full px-4"
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="h-px w-8 md:w-14 bg-gradient-to-r from-transparent to-amber-500/60" />
            <div className="w-1 h-1 rotate-45 bg-amber-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
            <div className="w-1 h-1 rotate-45 bg-amber-500" />
            <div className="h-px w-8 md:w-14 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          <h2
            className="text-center font-['Playfair_Display'] font-bold
                       text-2xl sm:text-3xl md:text-4xl tracking-wider
                       shimmer-gold drop-shadow-2xl"
          >
            THE COLLECTIONS
          </h2>

          <p
            className="text-center font-['Cinzel'] text-amber-400/80
                       text-[10px] md:text-xs tracking-[0.25em] uppercase mt-2
                       font-light"
          >
            Timeless Elegance • Exquisite Craftsmanship
          </p>
        </motion.div>

        {/* ---------------- Mini Filter Cards ---------------- */}
        <div className="w-full flex justify-center mt-8 md:mt-10 px-4">
          <div className="flex flex-wrap justify-center gap-3.5 md:gap-5 max-w-3xl">
            {/* All filter */}
            <FilterCard
              title="All"
              imageUrl="https://media.istockphoto.com/id/494833184/photo/shiny-gold-and-silver-jewelery.jpg?s=612x612&w=0&k=20&c=IyxoyEJuKNpTkiuoFMsw4wJT9fI-r0MkLJ0JxOrcg44=" // TODO: replace with an image representing the full collection
              isActive={active === 'all'}
              onClick={() => setActive('all')}
            />
            {filterItems.map((item) => (
              <FilterCard
                key={item.key}
                title={item.title}
                imageUrl={item.imageUrl}
                isActive={active === item.key}
                onClick={() => setActive(item.key)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- Product Grid ---------------- */}
        <div className="w-full flex justify-center pt-10 md:pt-14 px-4 sm:px-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 max-w-7xl w-full items-start"
            >
              {visibleProducts.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative w-full
                             h-[280px] sm:h-[340px] md:h-[400px]
                             overflow-hidden rounded-2xl
                             border border-amber-500/30 cursor-pointer
                             transition-all duration-500 hover:shadow-2xl
                             hover:shadow-amber-500/30 hover:border-amber-500/80
                             backdrop-blur-sm"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.dataset.fallback) return;
                      target.dataset.fallback = 'true';
                      target.src = PLACEHOLDER_IMG;
                      target.onerror = null;
                    }}
                    className="w-full h-full object-cover transition-transform
                               duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t
                               from-black/80 via-black/30 to-transparent
                               opacity-70 group-hover:opacity-90
                               transition-all duration-500"
                  />

                  {/* Golden hover wash */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t
                               from-amber-500/40 via-amber-500/10 to-transparent
                               opacity-0 group-hover:opacity-100
                               transition-all duration-500"
                  />

                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />

                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 translate-x-1 translate-y-1
                               rounded-full px-2.5 py-1 text-[9px] font-medium
                               uppercase tracking-widest text-black bg-amber-400/90
                               shadow-md"
                  >
                    {p.category}
                  </span>

                  {/* Quick view */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-black bg-amber-400/95 shadow-lg">
                      <Eye className="h-3 w-3" />
                      Quick View
                    </span>
                  </div>

                  {/* Title section */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 bg-gradient-to-t from-black/85 to-transparent">
                    <h3
                      className="text-white text-base md:text-lg tracking-[0.12em] uppercase
                                 font-['Cinzel'] font-semibold text-center
                                 group-hover:text-amber-400 transition-all duration-500"
                    >
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <span className="text-amber-400 text-sm font-medium font-['Cormorant_Garamond']">
                        {p.price}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-amber-400/80 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {visibleProducts.length === 0 && (
          <p className="text-center text-amber-400/70 py-16 font-['Cormorant_Garamond']">
            No pieces found in this category yet.
          </p>
        )}
        </div>
      </section>
    </>
  );
};

/* ----------------------------- Mini Filter Card ----------------------------- */

interface FilterCardProps {
  title: string;
  imageUrl?: string;
  isActive: boolean;
  onClick: () => void;
  fallbackGradient?: boolean;
}

const FilterCard: React.FC<FilterCardProps> = ({
  title,
  imageUrl,
  isActive,
  onClick,
  fallbackGradient,
}) => {
  return (
    <button onClick={onClick} className="group flex flex-col items-center gap-2 focus:outline-none">
      <span
        className={`relative block w-[72px] h-[88px] sm:w-20 sm:h-24 md:w-[92px] md:h-[110px]
                    overflow-hidden rounded-xl border transition-all duration-400
                    ${
                      isActive
                        ? 'border-amber-400 shadow-lg shadow-amber-500/40 scale-105'
                        : 'border-amber-500/25 opacity-80 group-hover:opacity-100 group-hover:border-amber-500/60 group-hover:scale-105'
                    }`}
      >
        {fallbackGradient ? (
          <span className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-black to-black" />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.img-fallback-gradient')) {
                const fallback = document.createElement('span');
                fallback.className =
                  'img-fallback-gradient absolute inset-0 bg-gradient-to-br from-amber-500/30 via-black to-black';
                parent.insertBefore(fallback, parent.firstChild);
              }
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        <span
          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
            isActive
              ? 'from-black/70 via-black/10 to-transparent'
              : 'from-black/80 via-black/20 to-transparent'
          }`}
        />

        {isActive && (
          <motion.span
            layoutId="mini-filter-glow"
            className="absolute inset-0 rounded-xl"
            style={{ boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.55)' }}
          />
        )}
      </span>

      <span
        className={`text-[11px] md:text-xs font-['Cinzel'] tracking-[0.15em] uppercase transition-colors duration-300 ${
          isActive ? 'text-amber-400' : 'text-amber-200/60 group-hover:text-amber-300'
        }`}
      >
        {title}
      </span>

      {isActive && (
        <motion.span
          layoutId="mini-filter-underline"
          className="h-[2px] w-5 rounded-full bg-amber-400"
        />
      )}
    </button>
  );
};

export default CollectionFilterSection;