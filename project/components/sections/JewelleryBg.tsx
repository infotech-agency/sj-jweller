// 'use client';

// import React from 'react';

// interface CollectionItem {
//   id: number;
//   title: string;
//   imageUrl: string;
//   description?: string;
// }

// interface BackgroundImageProps {
//   imageUrl?: string;
//   className?: string;
//   children?: React.ReactNode;
// }

// const collectionItems: CollectionItem[] = [
//   {
//     id: 1,
//     title: 'Rings',
//     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-necklace-exact-VdxWZEbnckNqbHfdexukAB.webp',
//     description: 'Elegant rings for every occasion'
//   },
//   {
//     id: 2,
//     title: 'Necklace',
//     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-earrings-exact-G2UDL3NM9oTbpCvWbh6gaY.webp',
//     description: 'Stunning necklaces to elevate your style'
//   },
//   {
//     id: 3,
//     title: 'Bracelet',
//     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
//     description: 'Beautiful bracelets for every wrist'
//   },
//   {
//     id: 4,
//     title: 'Earrings',
//     imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-haars-exact-MCa2LCdFxKA3DNgWujzo4C.webp',
//     description: 'Gorgeous earrings to complete your look'
//   },
// ];

// export const BackgroundImage: React.FC<BackgroundImageProps> = ({
//   imageUrl = '/assets/refined_dark_red_silk_banner.png',
//   className = '',
//   children,
// }) => {
//   return (
//     <>
//       <h1 className='text-center text-white text-4xl md:text-5xl font-serif tracking-wider pt-8 pb-4 bg-[#310205]'>
//         THE COLLECTIONS
//       </h1>
//       <div 
//         className={`w-full min-h-screen bg-cover bg-[#310205] flex items-center justify-center bg-center bg-no-repeat ${className}`}
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       >
//         <div className="flex flex-wrap gap-6 justify-center p-8">
//           {collectionItems.map((item) => (
//             <div 
//               key={item.id}
//               className="group relative w-64 h-80 overflow-hidden rounded-2xl border border-yellow-500 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
//             >
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Golden Overlay Effect */}
//               <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 via-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               {/* Border glow effect on hover */}
//               <div className="absolute inset-0 border-2 border-yellow-500/0 rounded-2xl group-hover:border-yellow-500/50 transition-all duration-300 pointer-events-none"></div>

//               {/* Title */}
//               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
//                 <h2 className="text-white text-xl tracking-[0.2em] uppercase font-serif group-hover:tracking-[0.3em] transition-all duration-300">
//                   {item.title}
//                 </h2>
//                 <p className="text-yellow-500/0 text-sm mt-1 group-hover:text-yellow-500/80 transition-all duration-300">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         {children}
//       </div>
//     </>
//   );
// };

// export default BackgroundImage;


'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface CollectionItem {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

interface BackgroundImageProps {
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

const collectionItems: CollectionItem[] = [
  {
    id: 1,
    title: 'Rings',
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-necklace-exact-VdxWZEbnckNqbHfdexukAB.webp',
    description: 'Elegant rings for every occasion'
  },
  {
    id: 2,
    title: 'Necklace',
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-earrings-exact-G2UDL3NM9oTbpCvWbh6gaY.webp',
    description: 'Stunning necklaces to elevate your style'
  },
  {
    id: 3,
    title: 'Bracelet',
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-choker-exact-Lw3h6HgLJefHr78mCXEVrF.webp',
    description: 'Beautiful bracelets for every wrist'
  },
  {
    id: 4,
    title: 'Earrings',
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679179830/JwdWCWQMmEPJ54yMjpaAGJ/bridal-haars-exact-MCa2LCdFxKA3DNgWujzo4C.webp',
    description: 'Gorgeous earrings to complete your look'
  },
];

// Inject premium fonts
const PremiumFonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
    
    @keyframes shimmer-gold {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    @keyframes borderPulse {
      0%, 100% { border-color: rgba(234, 179, 8, 0.3); }
      50% { border-color: rgba(234, 179, 8, 0.8); }
    }
    
    .shimmer-gold {
      background: linear-gradient(90deg, #D4AF37 0%, #FFD700 40%, #FFF8DC 50%, #FFD700 60%, #D4AF37 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer-gold 3s linear infinite;
    }
  `}</style>
);

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl = '/assets/refined_dark_red_silk_banner.png',
  className = '',
  children,
}) => {
  const headingRef = React.useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <>
      <PremiumFonts />
      
      <div 
        className={`relative w-full min-h-screen bg-cover bg-center bg-fixed bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content wrapper */}
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          
          {/* Heading Section - Top Center */}
          <motion.div 
            ref={headingRef}
            initial={{ opacity: 0, y: -30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full pt-10 md:pt-20 pb-2 md:pb-8"
          >
            {/* Top Ornamental Line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
              <div className="w-2.5 h-2.5 rotate-45 bg-amber-400" />
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>

            {/* Main Title */}
            <h1 className="text-center font-['Playfair_Display'] font-bold 
                           text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider
                           shimmer-gold
                           drop-shadow-2xl">
              THE COLLECTIONS
            </h1>

            {/* Subtitle */}
            <p className="text-center font-['Cinzel'] text-amber-400/80 
                          text-xs md:text-sm tracking-[0.3em] uppercase mt-4
                          font-light">
              TIMELESS ELEGANCE • EXQUISITE CRAFTSMANSHIP
            </p>

            {/* Bottom Ornamental Line */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
              <div className="w-2 h-2 rotate-45 bg-amber-400" />
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-500" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="w-full flex justify-center pt-2 pb-10 md:py-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 md:gap-8 px-4 sm:px-6 max-w-7xl mx-auto w-full">
              {collectionItems.map((item, index) => (
                <motion.div 
                  // key={item.id}
                  // initial={{ opacity: 0, y: 50 }}
                  // animate={headingInView ? { opacity: 1, y: 0 } : {}}
                  // transition={{ duration: 0.6, delay: index * 0.1 }}
                  // whileHover={{ y: -8 }}
                   key={item.id}
  initial={{ 
    opacity: 0,
    y: 60
  }}
  whileInView={{ 
    opacity: 1,
    y: 0
  }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ 
    duration: 0.8,
    delay: index * 0.12,
    ease: "easeOut"
  }}
  whileHover={{ y: -8 }}
                  className="group relative w-full max-w-[300px] sm:max-w-[320px] 
           h-[380px] sm:h-[420px] md:w-72 md:h-96 
           overflow-hidden rounded-2xl
           border border-amber-500/30 cursor-pointer 
           transition-all duration-500 hover:shadow-2xl 
           hover:shadow-amber-500/30 hover:border-amber-500/80
           backdrop-blur-sm"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform 
                               duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t 
                                  from-black/80 via-black/30 to-transparent 
                                  opacity-60 group-hover:opacity-80 
                                  transition-all duration-500" />

                  {/* Golden Overlay Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t 
                                  from-amber-500/40 via-amber-500/10 to-transparent 
                                  opacity-0 group-hover:opacity-100 
                                  transition-all duration-500" />

                  {/* Border glow effect on hover */}
                  <div className="absolute inset-0 border-2 border-amber-500/0 
                                  rounded-2xl group-hover:border-amber-500/60 
                                  transition-all duration-500 pointer-events-none" />

                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 
                                  border-t-2 border-l-2 border-amber-500/0 
                                  group-hover:border-amber-500/60 
                                  transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 
                                  border-t-2 border-r-2 border-amber-500/0 
                                  group-hover:border-amber-500/60 
                                  transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 
                                  border-b-2 border-l-2 border-amber-500/0 
                                  group-hover:border-amber-500/60 
                                  transition-all duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 
                                  border-b-2 border-r-2 border-amber-500/0 
                                  group-hover:border-amber-500/60 
                                  transition-all duration-500" />

                  {/* Title Section */}
                  <div className="absolute bottom-0 left-0 w-full p-6 
                                  bg-gradient-to-t from-black/80 to-transparent">
                    {/* Diamond divider */}
                    <div className="flex items-center justify-center gap-2 mb-3 
                                    opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 
                                    transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-1 h-1 rotate-45 bg-amber-500" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
                      <div className="w-1 h-1 rotate-45 bg-amber-500" />
                    </div>
                    
                    <h2 className="text-white text-2xl tracking-[0.2em] uppercase 
                                   font-['Cinzel'] font-semibold text-center
                                   group-hover:tracking-[0.3em] 
                                   transition-all duration-500
                                   group-hover:text-amber-400">
                      {item.title}
                    </h2>
                    
                    <p className="text-amber-500/0 text-sm text-center mt-2 
                                  group-hover:text-amber-500/90 
                                  transition-all duration-500
                                  font-['Cormorant_Garamond'] font-light
                                  transform translate-y-4 group-hover:translate-y-0">
                      {item.description}
                    </p>
                    
                    {/* Bottom diamond */}
                    <div className="flex justify-center mt-3 
                                    opacity-0 group-hover:opacity-100 
                                    transition-all duration-500">
                      <div className="w-6 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default BackgroundImage;
