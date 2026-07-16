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
                className="relative overflow-hidden  group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg"
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
        {/* <div className="flex flex-row md:flex-col flex-wrap justify-center gap-3 md:gap-2 px-0 md:pl-12">
          {['Collections', 'Our Story', 'Contact', 'Privacy Policy'].map((item) => (
            <button
              key={item}
              className="text-xs sm:text-sm tracking-[0.22em] text-rose-800 hover:text-rose-950 uppercase font-['Cormorant_SC'] transition-colors duration-300 hover:translate-x-1 md:hover:translate-x-0 md:hover:translate-y-[-2px] transition-transform"
              onClick={() => onNav?.(item)}
            >
              {item}
            </button>
          ))}
        </div> */}
        <div className="max-w-sm text-center md:text-left px-4 md:px-0 md:pl-12">
  <p className="text-sm md:text-base text-rose-800 italic leading-relaxed font-['Cormorant_Garamond']">
    "Jewelry is more than an accessory — it is a reflection of timeless beauty,
    cherished memories, and personal elegance."
  </p>
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