'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

import { GallerySection } from '@/components/sections/GallerySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { Sparkles } from '@/components/Sparkles';
import { initTheme } from '@/lib/theme';

import HeritageSection from '@/components/sections/HeritageSection';
import FooterSection from '@/components/FooterSection';

import HeroBanner from '@/components/sections/HeroBanner';
import FeaturedBanner from '@/components/sections/FeaturedBanner';
import FeatureSecond from '@/components/sections/FeaturedSecond';
import ArtSection from '@/components/sections/ArtSection';
import CraftsmanshipBanner from '@/components/sections/CraftmanshipBanner';
import BackgroundImage from '@/components/sections/JewelleryBg';
import CraftBg from '@/components/demo/CraftManship';
import AnotherBg from '@/components/demo/AnotherBg';
import { QuoteBg } from '@/components/sections/Quote';
import FloatingLeaves from '@/components/FloatingLeaves';
import GoldCoinsPage from '@/components/sections/GoldCoins';
import { CollapsibleContent } from '@/components/ui/collapsible';
import AuthenticityCertificate from '@/components/sections/AuthenticityCertificate';
import OurProducts from '@/components/sections/OurProducts';
// import PeopleBehindSJ from '@/components/sections/PeopleBehindSj';


// export default function Home() {
//   useEffect(() => {
//     initTheme();
//   }, []);

//   return (
//     <div className="min-h-screen">
   
//       <Sparkles />

//       <Navigation />
//     <div id="home" className="sm:mt-0">
//   <HeroBanner />
// </div>

// <div id="story">
//   <AboutSection />
// </div>

// <div id="collections">
//   <BackgroundImage />
// </div>
  
// <GoldCoinsPage/>

// <div id="craftsmanship">
//   <CraftBg />
// </div>

// <div id="gallery">
//   <GallerySection />
// </div>

// <div id="featured">
//   <FeatureSecond />
// </div>

// <div id="art">
//   <ArtSection />
// </div>

// {/* <div id="banner">
//   <FeaturedBanner />
// </div> */}

// <div id="testimonial">
//   <QuoteBg />
// </div>

// <div id="contact">
//   <ContactSection />
// </div>
//     {/* <FooterSection/> */}
//     </div>
//   );
// }

export default function Home() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="min-h-screen">
      <Sparkles />
      <Navigation />
      
      <div id="home" className="sm:mt-0" data-dark-section>
        <HeroBanner />
      </div>

      {/* ✅ DARK - data-dark-section add kiya */}
      <div id="story" data-dark-section>
        <AboutSection />
      </div>

      {/* ✅ DARK - data-dark-section add kiya */}
      <div id="collections" data-dark-section>
        <BackgroundImage />
      </div>

     
       <OurProducts/>
      {/* ✅ DARK - data-dark-section add kiya */}
      <div id="craftsmanship" data-dark-section>
        <CraftBg />
      </div>

      <div id="gallery">
        <GallerySection />
        {/* <CollapsibleContent/> */}
      </div>

      {/* <div id="featured">
        <FeatureSecond />
      </div> */}

      {/* ✅ DARK - data-dark-section add kiya */}
      {/* <div id="art" data-dark-section>
        <ArtSection />
      </div>
     

      <div id="testimonial">
        <QuoteBg />
      </div> */}

      <div id="contact">
        <ContactSection />
      </div>
      
    </div>
  );
}
