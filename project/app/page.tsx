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


export default function Home() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="min-h-screen">
   
      <Sparkles />

      <Navigation />
    <div id="home" className="sm:mt-0">
  <HeroBanner />
</div>

<div id="story">
  <AboutSection />
</div>

<div id="collections">
  <BackgroundImage />
</div>

<div id="craftsmanship">
  <CraftBg />
</div>

<div id="gallery">
  <GallerySection />
</div>

<div id="featured">
  <FeatureSecond />
</div>

<div id="art">
  <ArtSection />
</div>

<div id="banner">
  <FeaturedBanner />
</div>

<div id="testimonial">
  <QuoteBg />
</div>

<div id="contact">
  <ContactSection />
</div>
    <FooterSection/>
    </div>
  );
}


// 'use client';
// import { useEffect } from 'react';
// import { Navigation } from '@/components/Navigation';
// import { HeroSection } from '@/components/sections/HeroSection';
// import { CollectionsSection } from '@/components/sections/CollectionsSection';
// import { BrandValuesSection } from '@/components/sections/BrandValuesSection';
// import { GallerySection } from '@/components/sections/GallerySection';
// import { AboutSection } from '@/components/sections/AboutSection';
// import { ContactSection } from '@/components/sections/ContactSection';
// import { Footer } from '@/components/Footer';
// import { Sparkles } from '@/components/Sparkles';
// import { initTheme } from '@/lib/theme';
// import JewelrySection from '@/components/sections/JwellerySection';
// import { CollectionsSection2 } from '@/components/sections/CollectionSection2';
// import TimelineSection from '@/components/sections/TimeLineSection';
// import BridalTrousseau from '@/components/sections/BridalTrousseau';
// import HeritageSection from '@/components/sections/HeritageSection';
// import CraftsmanshipSection from '@/components/sections/Craftmanship';
// import FooterSection from '@/components/FooterSection';
// import HeritageShowcase from '@/components/sections/HeritageShowcase';
// import HeroBanner from '@/components/sections/HeroBanner';
// import FeaturedBanner from '@/components/sections/FeaturedBanner';
// import FeatureSecond from '@/components/sections/FeaturedSecond';
// import CollectionsSection3 from '@/components/sections/CollectionSection3';
// import ArtSection from '@/components/sections/ArtSection';
// import CraftsmanshipBanner from '@/components/sections/CraftmanshipBanner';
// import BackgroundImage from '@/components/sections/JewelleryBg';
// import CraftBg from '@/components/demo/CraftManship';
// import AnotherBg from '@/components/demo/AnotherBg';
// import { QuoteBg } from '@/components/sections/Quote';
// import FloatingLeaves from '@/components/FloatingLeaves';
// // import { useEffect } from 'react';
// import { ParallaxSection } from '@/components/layout/ParallaxSection';
// // ... keep all your existing imports
// // import { Navigation } from '@/components/Navigation';
// // import { Sparkles } from '@/components/Sparkles';
// // import { initTheme } from '@/lib/theme';

// const sections = [
//   { id: 'hero', component: <HeroBanner /> },
//   { id: 'feat2', component: <FeatureSecond /> },
//   { id: 'art', component: <ArtSection /> },
//   { id: 'feat-banner', component: <FeaturedBanner /> },
//   { id: 'bg-img', component: <BackgroundImage /> },
//   { id: 'craft', component: <CraftBg /> },
//   { id: 'another', component: <AnotherBg /> },
//   { id: 'quote', component: <QuoteBg /> },
//   { id: 'gallery', component: <GallerySection /> },
//   { id: 'about', component: <AboutSection /> },
//   { id: 'contact', component: <ContactSection /> },
//   // { id: 'footer', component: <FooterSection /> },
// ];

// // export default function Home() {
// //   useEffect(() => {
// //     initTheme();
// //   }, []);

// //   return (
// //     <main className="relative bg-black text-white">
// //       <Sparkles />
// //       <Navigation />

// //       {/* {sections.map((section, index) => (
// //         <ParallaxSection key={section.id} index={index}>
// //           {section.component}
// //         </ParallaxSection>
// //       ))} */}
// //       {sections.map((section, index) => (
// //         <ParallaxSection key={section.id} index={index}>
// //           {section.component}
// //         </ParallaxSection>
// //       ))}
// //     </main>
// //   );
// // }


// export default function Home() {
//   return (
//     <main className="relative bg-black text-white">
//       {/* Navigation must be absolute/fixed with high z-index */}
//       <div className="fixed top-0 w-full z-[9999]">
//         <Navigation />
//       </div>

//       <Sparkles />

//       {sections.map((section, index) => (
//         <ParallaxSection key={section.id} index={index}>
//           {section.component}
//         </ParallaxSection>
//       ))}

//   <FooterSection />

//     </main>
//   );
// }