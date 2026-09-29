"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation'; 

interface NavLink {
  label: string;
  href: string;
  id?: string;
}

interface NavigationProps {
  logo?: string;
  logoText?: string;
  leftLinks?: NavLink[];
  rightLinks?: NavLink[];
  onLinkClick?: (link: NavLink) => void;
  sticky?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  logo = "/assets/logo4.png",
  logoText = 'SJ',
  leftLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'OUR STORY', href: '/about' },
    { label: 'COLLECTIONS', href: '#collections' },
  ],
  rightLinks = [
    { label: 'CORPORATE', href: '/gift' },
    { label: 'GALLERY', href: '#gallery' },
    // { label: 'CONTACT', href: '#contact' },
    { label: 'Gold & Silver', href: '/coins' },
  ],
  onLinkClick,
  sticky = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname(); // 👈 Get current route

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkDarkSection = () => {
      const darkSections = document.querySelectorAll('[data-dark-section]');
      const navbarBottom = 72;

      const isDark = Array.from(darkSections).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < navbarBottom && rect.bottom > 0;
      });

      setIsDarkBg(isDark);
    };

    window.addEventListener('scroll', checkDarkSection, { passive: true });
    checkDarkSection();

    return () => window.removeEventListener('scroll', checkDarkSection);
  }, []);

  const handleNavClick = async (link: NavLink) => {
    setIsOpen(false);
    
    // Case 1: Link is an internal route (starts with /)
    if (link.href.startsWith('/')) {
      // Agar current page same hai toh kuch mat karo ya handle karo
      if (pathname === link.href) {
        return; // Already on that page
      }
      router.push(link.href);
      return;
    }
    
    // Case 2: Link is an anchor link (starts with #)
    if (link.href.startsWith('#')) {
      const currentPathname = pathname;
      
      // Agar current page '/' (home) nahi hai, toh pehle home par jao
      if (currentPathname !== '/') {
        await router.push('/');
        // Thoda wait karo page load hone ke liye
        setTimeout(() => {
          const target = link.id
            ? document.getElementById(link.id)
            : document.querySelector(link.href);
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        // Already on home page, direct scroll
        const target = link.id
          ? document.getElementById(link.id)
          : document.querySelector(link.href);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    onLinkClick?.(link);
  };

  const linkColorClass = isDarkBg
    ? 'text-[#f5e6d8]'
    : 'text-[#5c1f2e]';

  const linkHoverLineClass = isDarkBg
    ? 'bg-[#f5e6d8]'
    : 'bg-[#5c1f2e]';

  return (
    <nav
      className={`
        ${sticky ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50
        transition-all duration-400
        ${isScrolled
          ? 'bg-[#f2cdb8]/72 backdrop-blur-lg shadow-[0_1px_0_rgba(90,28,42,0.1)]'
          : 'bg-transparent backdrop-blur-none'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[64px] md:h-[72px] flex items-center justify-between relative">

        {/* Left links */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`
                font-['Cormorant_SC',serif] text-[0.9rem] tracking-[0.22em] uppercase
                bg-transparent border-none cursor-pointer py-1
                relative group transition-colors duration-300
                ${linkColorClass}
              `}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${linkHoverLineClass}`} />
            </button>
          ))}
        </div>

        {/* Logo */}
        {/* <div className="flex items-center md:flex-shrink-0 md:justify-center md:w-32 md:mx-8">
          {logo ? (
            <img src={logo} alt="Logo" className="w-18 md:w-full object-contain" />
          )  */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1 h-full flex items-center md:w-32 justify-center pointer-events-none">
  {logo ? (
    <img
      src={logo}
      alt="Logo"
      className="h-20 md:h-28 w-auto max-w-none object-contain pointer-events-auto"
    />
  ) 
          : (
            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-400 ${isScrolled ? 'border border-[#7a2535] bg-white/15' : 'border border-white/70 bg-white/8'}`}>
              <span className={`font-['Cormorant_SC',serif] text-base md:text-lg tracking-wider leading-none transition-colors duration-400 ${isScrolled ? 'text-[#6b1f30]' : 'text-white/95'}`}>
                {logoText.charAt(0)}
         
              </span>
            </div>
          )}
        </div>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {rightLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`
                font-['Cormorant_SC',serif] text-[0.9rem] tracking-[0.22em] uppercase
                bg-transparent border-none cursor-pointer py-1
                relative group transition-colors duration-300
                ${linkColorClass}
              `}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${linkHoverLineClass}`} />
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ml-auto bg-transparent border-none cursor-pointer p-1.5 transition-colors duration-300 ${linkColorClass}`}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="flex">
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5c1f2e]/30 to-transparent transition-opacity duration-400 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: 'easeInOut' }} className="md:hidden overflow-hidden">
            <div className="bg-[#f5ddd0]/80 backdrop-blur-xl border-t border-[#5c1f2e]/15 shadow-lg">
              <div className="px-6 py-4 flex flex-col">
                {[...leftLinks, ...rightLinks].map((link, i, arr) => (
                  <motion.button
                    key={link.label}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => handleNavClick(link)}
                    className={`text-left font-['Cormorant_SC',serif] text-[0.78rem] tracking-[0.25em] uppercase text-[#5c1f2e] bg-transparent border-none cursor-pointer py-3.5 px-1 hover:text-[#3a1020] hover:pl-3 transition-all duration-200 ${i < arr.length - 1 ? 'border-b border-[#5c1f2e]/10' : ''}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;