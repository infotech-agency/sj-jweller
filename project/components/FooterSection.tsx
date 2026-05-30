// 'use client';

// import React from 'react';
// import Logo from "/assets/logo.png";
// interface FooterProps {
//   onBookAppointment?: () => void;
//   onNav?: (item: string) => void;
// }

// export const Footer: React.FC<FooterProps> = ({
//   onBookAppointment,
//   onNav,
// }) => {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cormorant+SC:wght@300;400&display=swap');

//         .ft-root {
//           width: 100%;
//           background-color: #f2cdb8;
//           font-family: 'Cormorant Garamond', Georgia, serif;
//         }

//         /* ── Main footer body ── */
//         .ft-body {
//           display: grid;
//           grid-template-columns: 1fr 1px 1fr 1px 1fr;
//           align-items: center;
//           padding: 36px 5vw 28px;
//           gap: 0;
//         }

//         /* Vertical dividers */
//         .ft-divider-v {
//           width: 1px;
//           height: 100px;
//           background: rgba(90, 28, 42, 0.25);
//           justify-self: center;
//         }

//         /* ── LEFT column ── */
//         .ft-left {
//           padding-right: 4vw;
//         }

//         .ft-left-title {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           font-size: clamp(1.3rem, 2.5vw, 1.9rem);
//           font-weight: 400;
//           font-style: italic;
//           color: #3a1020;
//           line-height: 1.2;
//           margin: 0 0 8px 0;
//         }

//         .ft-left-desc {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           font-size: clamp(0.75rem, 1.2vw, 0.88rem);
//           font-weight: 300;
//           color: #5a2030;
//           line-height: 1.6;
//           margin: 0 0 20px 0;
//           letter-spacing: 0.01em;
//         }

//         .ft-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           background: #5c1f2e;
//           border: none;
//           padding: 11px 22px;
//           cursor: pointer;
//           font-family: 'Cormorant SC', serif;
//           font-size: 0.6rem;
//           font-weight: 400;
//           letter-spacing: 0.28em;
//           color: #f5e6dc;
//           text-transform: uppercase;
//           transition: background 0.3s ease;
//         }

//         .ft-btn:hover { background: #3d1020; }

//         .ft-btn-diamond {
//           width: 10px;
//           height: 10px;
//           border: 1px solid #c9a080;
//           transform: rotate(45deg);
//           flex-shrink: 0;
//           display: inline-block;
//         }

//         /* ── CENTER column ── */
//         .ft-center {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           padding: 0 2vw;
//         }

//         .ft-logo-circle {
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           border: 1.5px solid #7a2535;
//           background: rgba(255,255,255,0.15);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .ft-logo-text {
//           font-family: 'Cormorant SC', serif;
//           font-size: 22px;
//           font-weight: 400;
//           color: #6b1f30;
//           letter-spacing: 0.05em;
//           line-height: 1;
//           user-select: none;
//         }

//         .ft-logo-text sup {
//           font-size: 11px;
//           vertical-align: super;
//           color: #8b3042;
//         }

//         .ft-tagline {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           font-size: clamp(0.78rem, 1.3vw, 0.92rem);
//           font-weight: 300;
//           font-style: italic;
//           color: #4a1e28;
//           text-align: center;
//           line-height: 1.5;
//           letter-spacing: 0.02em;
//         }

//         /* Social icons */
//         .ft-socials {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-top: 4px;
//         }

//         .ft-social-btn {
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           border: 1px solid rgba(90, 28, 42, 0.4);
//           background: transparent;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: border-color 0.3s, background 0.3s;
//           padding: 0;
//         }

//         .ft-social-btn:hover {
//           border-color: #5c1f2e;
//           background: rgba(92, 31, 46, 0.08);
//         }

//         .ft-social-btn svg {
//           width: 13px;
//           height: 13px;
//           fill: #5c1f2e;
//         }

//         /* ── RIGHT column ── */
//         .ft-right {
//           padding-left: 4vw;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .ft-nav-item {
//           font-family: 'Cormorant SC', serif;
//           font-size: clamp(0.62rem, 1vw, 0.72rem);
//           font-weight: 400;
//           letter-spacing: 0.22em;
//           color: #5c1f2e;
//           text-transform: uppercase;
//           cursor: pointer;
//           background: none;
//           border: none;
//           padding: 2px 0;
//           text-align: left;
//           transition: color 0.2s;
//           line-height: 1.8;
//         }

//         .ft-nav-item:hover { color: #3a1020; }

//         /* ── Copyright bar ── */
//         .ft-bar {
//           background: #5c1f2e;
//           text-align: center;
//           padding: 9px 1rem;
//         }

//         .ft-bar-text {
//           font-family: 'Cormorant SC', serif;
//           font-size: 0.55rem;
//           letter-spacing: 0.22em;
//           color: #f5e6dc;
//           text-transform: uppercase;
//           opacity: 0.9;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .ft-body {
//             grid-template-columns: 1fr;
//             gap: 28px;
//             padding: 32px 6vw 24px;
//           }
//           .ft-divider-v { display: none; }
//           .ft-left { padding: 0; }
//           .ft-right { padding: 0; flex-direction: row; flex-wrap: wrap; gap: 8px 20px; }
//           .ft-center { padding: 0; }
//         }
//       `}</style>

//       <footer className="ft-root">
//         <div className="ft-body">

//           {/* LEFT */}
//           <div className="ft-left">
//             <h3 className="ft-left-title">Experience the Art<br />of Fine Jewelry</h3>
//             <p className="ft-left-desc">
//               We welcome you to explore our world of timeless elegance<br />
//               and exceptional craftsmanship.
//             </p>
//             <button className="ft-btn" onClick={onBookAppointment}>
//               BOOK AN APPOINTMENT
//               <span className="ft-btn-diamond" aria-hidden="true" />
//             </button>
//           </div>

//           <div className="ft-divider-v" />

//           {/* CENTER */}
//           <div className="ft-center">
//             <div className="ft-logo-circle">
//               {/* <span className="ft-logo-text">S<sup>J</sup></span> */}
//               {/* <img src={Logo}/> */}
//             </div>
//             <p className="ft-tagline">Let's Create Something<br />Timeless Together.</p>
//             <div className="ft-socials">
//               {/* Instagram */}
//               <button className="ft-social-btn" aria-label="Instagram">
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </button>
//               {/* Facebook */}
//               <button className="ft-social-btn" aria-label="Facebook">
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </button>
//               {/* Pinterest */}
//               <button className="ft-social-btn" aria-label="Pinterest">
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="ft-divider-v" />

//           {/* RIGHT */}
//           <div className="ft-right">
//             {['Collections', 'Our Story', 'Contact', 'Privacy Policy'].map((item) => (
//               <button
//                 key={item}
//                 className="ft-nav-item"
//                 onClick={() => onNav?.(item)}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//         </div>

//         {/* Copyright bar */}
//         <div className="ft-bar">
//           <span className="ft-bar-text">© 2024 SJ Jewels. All Rights Reserved.</span>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
'use client';

import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
interface FooterProps {
  onBookAppointment?: () => void;
  onNav?: (item: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onBookAppointment,
  onNav,
}) => {
  return (
    <footer className="w-full bg-gradient-to-br from-amber-100 via-rose-100 to-stone-200 font-['Cormorant_Garamond']">
      {/* Main Footer Body */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-8 md:gap-0 px-6 sm:px-8 md:px-12 py-9 md:py-10">
        
        {/* LEFT COLUMN */}
        <div className="text-center md:text-left px-0 md:pr-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light italic text-rose-950 leading-tight mb-2">
            Experience the Art<br />of Fine Jewelry
          </h3>
          <p className="text-sm sm:text-base text-rose-800/70 leading-relaxed mb-5 max-w-md mx-auto md:mx-0">
            We welcome you to explore our world of timeless elegance
            and exceptional craftsmanship.
          </p>
          <motion.div >
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
          
              
                <span className="relative z-10">BOOK AN APPOINTMENT</span>
           
                <span
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                  style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                />
              </motion.button>
            </motion.div>
        </div>

        {/* Vertical Divider 1 - Hidden on mobile */}
        <div className="hidden md:block w-px h-24 bg-rose-700/25 justify-self-center" />

        {/* CENTER COLUMN */}
        <div className="flex flex-col items-center gap-3 px-0 md:px-6">
          {/* Logo Circle - Using public folder path */}
          {/* <div className="w-20 h-20 sm:w-[72px] sm:h-[72px] rounded-full border-2 border-rose-700/30 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md">
            
          </div> */}
          <Image 
              src="/assets/logo.png"  // Changed from import to direct path
              alt="Logo" 
              width={46} 
              height={46} 
              className="w-24 h-24 object-contain"
            />
          <p className="text-sm sm:text-base text-rose-800/80 italic text-center leading-relaxed">
            Let's Create Something<br />Timeless Together.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3.5 mt-1">
            {/* Instagram */}
            <button 
              className="w-8 h-8 rounded-full border border-rose-700/40 flex items-center justify-center hover:border-rose-700 hover:bg-rose-700/5 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-rose-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
            
            {/* Facebook */}
            <button 
              className="w-8 h-8 rounded-full border border-rose-700/40 flex items-center justify-center hover:border-rose-700 hover:bg-rose-700/5 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-rose-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            
            {/* Pinterest */}
            <button 
              className="w-8 h-8 rounded-full border border-rose-700/40 flex items-center justify-center hover:border-rose-700 hover:bg-rose-700/5 transition-all duration-300 hover:scale-110"
              aria-label="Pinterest"
            >
              <svg className="w-3.5 h-3.5 fill-rose-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Vertical Divider 2 - Hidden on mobile */}
        <div className="hidden md:block w-px h-24 bg-rose-700/25 justify-self-center" />

        {/* RIGHT COLUMN */}
        <div className="flex flex-row md:flex-col flex-wrap justify-center gap-3 md:gap-2 px-0 md:pl-12">
          {['Collections', 'Our Story', 'Contact', 'Privacy Policy'].map((item) => (
            <button
              key={item}
              className="text-xs sm:text-sm tracking-[0.22em] text-rose-800 hover:text-rose-950 uppercase font-['Cormorant_SC'] transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-0 md:hover:translate-y-[-2px] transition-transform"
              onClick={() => onNav?.(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#290102] text-center py-2.5 px-4">
        <span className="text-[10px] sm:text-xs tracking-[0.22em] text-amber-50/90 uppercase font-['Cormorant_SC']">
          © 2026 SJ Jewels. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;