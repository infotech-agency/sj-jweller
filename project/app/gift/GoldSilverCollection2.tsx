// import React from 'react';

// const collectionData = [
//   {
//     id: 1,
//     title: '24K Gold Coins',
//     subtitle: 'Assay Pack',
//     imageSrc: '/coins/images/sj_24k_gold_coin_assay.png', // Replace with your image path
//   },
//   {
//     id: 2,
//     title: '999 Silver Coins',
//     subtitle: 'Assay Pack',
//     imageSrc: '/coins/images/sj_999_silver_coin_assay.png',
//   },
//   {
//     id: 3,
//     title: 'Lakshmi Gold Coin',
//     subtitle: '24K • Assay Pack',
//     imageSrc: '/coins/images/sj_lakshmi_gold_coin_box.png',
//   },
//   {
//     id: 4,
//     title: 'Ganesh Silver Coin',
//     subtitle: '999 • Assay Pack',
//     imageSrc: '/coins/images/sj_ganesh_silver_coin_box.png',
//   },
//   {
//     id: 5,
//     title: 'Corporate Gift Set',
//     subtitle: 'Coin with Luxury Pen',
//     imageSrc: '/coins/images/sj_corporate_gift_set_pen.png',
//   },
//   {
//     id: 6,
//     title: 'Coin with Dry Fruits',
//     subtitle: 'Premium Gift Box',
//     imageSrc: '/coins/images/sj_coin_dry_fruits_box.png',
//   },
//   {
//     id: 7,
//     title: 'Gold & Silver Set',
//     subtitle: '24K & 999 • Assay Pack',
//     imageSrc: '/coins/images/sj_gold_silver_set_box.png',
//   },
//   {
//     id: 8,
//     title: 'Custom Branded Coin',
//     subtitle: 'Personalized for You',
//     imageSrc: '/coins/images/sj_custom_branded_coin.png',
//   },
// ];

// export default function GoldSilverCollection2() {
//   return (
//     <section 
//       className="relative w-full py-16 px-4 md:px-8 bg-cover bg-center min-h-screen flex flex-col items-center select-none"
//       style={{ 
//         backgroundImage: "url('/coins/images/banner.png')", // Path to your background image
//         backgroundColor: '#fbead2' // Fallback matching the warm tone
//       }}
//     >
//       {/* Section Header */}
//       <div className="text-center mb-10 max-w-2xl mx-auto flex items-center justify-center gap-4">
//         {/* Decorative Left Flourish */}
//         <span className="hidden sm:inline-block text-[#820720] opacity-70">✦ ———</span>
        
//         <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-[#FEFEFE] uppercase font-bold">
//           The Gold & Silver Collection
//         </h2>
        
//         {/* Decorative Right Flourish */}
//         <span className="hidden sm:inline-block text-[#820720] opacity-70">——— ✦</span>
//       </div>

//       {/* 4x2 Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
//         {collectionData.map((item) => (
//           <div 
//             key={item.id} 
//             className="flex flex-col bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-[#e6cbb1] shadow-sm hover:shadow-md transition-shadow duration-300 group"
//           >
//             {/* Image Container */}
//             <div className="w-full aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center bg-transparent mb-4">
//               <img 
//                 src={item.imageSrc} 
//                 alt={item.title} 
//                 className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
//             </div>

//             {/* Content Container */}
//             <div className="mt-auto text-center border-t border-[#f0ded0]/60 pt-3">
//               <h3 className="text-base md:text-lg font-medium text-[#4a2e1b] font-serif">
//                 {item.title}
//               </h3>
//               <p className="text-xs md:text-sm text-[#8c6239] mt-0.5">
//                 {item.subtitle}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from 'react';

const collectionData = [
  {
    id: 0,
    title: '24K Gold Coins',
    subtitle: 'Assay Pack',
    imageSrc: '/coins/images/sj_24k_gold_coin_assay.png',
  },
  {
    id: 1,
    title: 'Swastik Coin',
    subtitle: 'Assay Pack',
    imageSrc: '/coins/swastik.png',
  },
  {
    id: 2,
    title: '999 Silver Coins',
    subtitle: 'Assay Pack',
    imageSrc: '/coins/om.png',
  },
  {
    id: 3,
    title: 'Lakshmi Gold Coin',
    subtitle: '24K • Assay Pack',
    imageSrc: '/coins/images/sj_lakshmi_gold_coin_box.png',
  },
  {
    id: 4,
    title: 'Ganesh Silver Coin',
    subtitle: '999 • Assay Pack',
    imageSrc: '/coins/images/sj_ganesh_silver_coin_box.png',
  },
   {
    id: 4,
    title: 'Ganesh Gold Coin',
    subtitle: '999 • Assay Pack',
    imageSrc: '/coins/ganesha.png',
  },
  // {
  //   id: 5,
  //   title: 'Corporate Gift Set',
  //   subtitle: 'Coin with Luxury Pen',
  //   imageSrc: '/coins/images/sj_corporate_gift_set_pen.png',
  // },
 
  {
    id: 7,
    title: 'Gold & Silver Set',
    subtitle: '24K & 999 • Assay Pack',
    imageSrc: '/coins/images/sj_gold_silver_set_box.png',
  },
  {
    id: 8,
    title: 'Custom Branded Coin',
    subtitle: 'Personalized for You',
    imageSrc: '/coins/images/sj_custom_branded_coin.png',
  },
];

export default function GoldSilverCollection2() {
  return (
    <section
      className="relative w-full py-20 px-4 md:px-10 bg-cover bg-center min-h-screen flex flex-col items-center select-none overflow-hidden"
      style={{
        backgroundImage: "url('/coins/images/banner.png')",
        backgroundColor: '#2a0d13',
      }}
    >
      {/* Google Fonts: elegant serif display + refined sans for labels */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@400;500&display=swap');
        .luxury-serif { font-family: 'Cormorant Garamond', serif; }
        .luxury-sans { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Ambient vignette so the backdrop reads dark and rich regardless of the source banner */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-14 max-w-2xl mx-auto">
        <p className="luxury-sans text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#e3c589] mb-3">
          Certified Assay Collection
        </p>

        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-[#d4af37] shrink-0">
            <path d="M7 0L8.6 5.4L14 7L8.6 8.6L7 14L5.4 8.6L0 7L5.4 5.4Z" fill="currentColor" />
          </svg>
          <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        <h2 className="luxury-serif text-4xl md:text-5xl font-semibold tracking-wide text-[#fbf1de]">
          The Gold &amp; Silver Collection
        </h2>
        <p className="luxury-sans text-xs md:text-sm text-[#d9c6a8] mt-4 tracking-wide">
          Hallmarked purity, presented in heirloom-worthy packaging
        </p>
      </div>

      {/* 4x2 Responsive Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7 w-full max-w-6xl mx-auto">
        {collectionData.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col bg-gradient-to-b from-[#fdf8ee] to-[#f6ecd7] rounded-sm p-5 transition-all duration-500 hover:-translate-y-1"
            style={{
              boxShadow:
                '0 1px 0 rgba(255,255,255,0.6) inset, 0 0 0 1px rgba(212,175,55,0.35), 0 12px 24px -12px rgba(0,0,0,0.55)',
            }}
          >
            {/* Corner flourishes */}
            <svg className="absolute top-2 left-2 w-4 h-4 text-[#c9a24b]/70 opacity-80" viewBox="0 0 20 20" fill="none">
              <path d="M1 8V3a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg className="absolute top-2 right-2 w-4 h-4 text-[#c9a24b]/70 opacity-80 rotate-90" viewBox="0 0 20 20" fill="none">
              <path d="M1 8V3a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg className="absolute bottom-2 left-2 w-4 h-4 text-[#c9a24b]/70 opacity-80 -rotate-90" viewBox="0 0 20 20" fill="none">
              <path d="M1 8V3a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg className="absolute bottom-2 right-2 w-4 h-4 text-[#c9a24b]/70 opacity-80 rotate-180" viewBox="0 0 20 20" fill="none">
              <path d="M1 8V3a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Image Container with soft radial glow behind the coin */}
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden flex items-center justify-center mb-4">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(212,175,55,0.22), transparent 70%)',
                }}
              />
              <img
                src={item.imageSrc}
                alt={item.title}
                className="relative max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>

            {/* Content Container */}
            <div className="mt-auto text-center pt-3 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-0 h-px w-10 bg-[#c9a24b]/60" />
              <h3 className="luxury-serif text-lg md:text-xl font-semibold text-[#5a2a1f] tracking-wide">
                {item.title}
              </h3>
              <p className="luxury-sans text-[11px] md:text-xs text-[#a17a3f] mt-1 tracking-[0.15em] uppercase">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}