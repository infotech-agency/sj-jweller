// 'use client';

// import { motion } from 'framer-motion';
// import { Instagram, Facebook, Share2, Mail, Heart } from 'lucide-react';
// import Link from 'next/link';

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     collections: [
//       { label: 'Rings', href: '#' },
//       { label: 'Necklaces', href: '#' },
//       { label: 'Bracelets', href: '#' },
//       { label: 'Earrings', href: '#' },
//     ],
//     company: [
//       { label: 'About Us', href: '#about' },
//       { label: 'Contact', href: '#contact' },
//       { label: 'Careers', href: '#' },
//       { label: 'Blog', href: '#' },
//     ],
//     legal: [
//       { label: 'Privacy Policy', href: '#' },
//       { label: 'Terms & Conditions', href: '#' },
//       { label: 'Shipping Policy', href: '#' },
//       { label: 'Return Policy', href: '#' },
//     ],
//   };

//   const socialLinks = [
//     { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
//     { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
//     { icon: Share2, label: 'Pinterest', href: 'https://pinterest.com' },
//     { icon: Mail, label: 'Email', href: 'mailto:hello@sonijewellery.com' },
//   ];

//   return (
//     <footer
//       className="relative pt-20 md:pt-32 pb-8 px-4 sm:px-6 lg:px-8"
//       style={{
//         background: `linear-gradient(135deg, hsl(var(--theme-primary)), hsl(var(--theme-accent)))`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Newsletter Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 pb-16 border-b"
//           style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
//         >
//           <div className="max-w-2xl">
//             <h3 className="text-3xl font-light text-white mb-4">
//               Stay Connected
//             </h3>
//             <p className="text-white/80 mb-6">
//               Subscribe to our newsletter for exclusive updates and special
//               offers.
//             </p>

//             <div className="flex gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-3 rounded-lg bg-white/20 backdrop-blur text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors"
//               >
//                 Subscribe
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Footer Links */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
//         >
//           {/* Brand */}
//           <motion.div
//             whileHover={{ x: 4 }}
//             className="space-y-4"
//           >
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary text-xl font-bold">
//                 S
//               </div>
//               <div>
//                 <p className="font-semibold text-white">Soni</p>
//                 <p className="text-xs text-white/80">JEWELLERY</p>
//               </div>
//             </div>
//             <p className="text-sm text-white/80">
//               Luxury jewelry for the discerning soul. Handcrafted excellence
//               since 2008.
//             </p>
//           </motion.div>

//           {/* Collections */}
//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
//               Collections
//             </h4>
//             <div className="space-y-2">
//               {footerLinks.collections.map((link, idx) => (
//                 <motion.a
//                   key={idx}
//                   href={link.href}
//                   whileHover={{ x: 4 }}
//                   className="block text-sm text-white/80 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
//               Company
//             </h4>
//             <div className="space-y-2">
//               {footerLinks.company.map((link, idx) => (
//                 <motion.a
//                   key={idx}
//                   href={link.href}
//                   whileHover={{ x: 4 }}
//                   className="block text-sm text-white/80 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
//               Legal
//             </h4>
//             <div className="space-y-2">
//               {footerLinks.legal.map((link, idx) => (
//                 <motion.a
//                   key={idx}
//                   href={link.href}
//                   whileHover={{ x: 4 }}
//                   className="block text-sm text-white/80 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="pb-8 border-b"
//           style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
//         >
//           <div className="flex justify-center gap-4">
//             {socialLinks.map((social, idx) => {
//               const Icon = social.icon;

//               return (
//                 <motion.a
//                   key={idx}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2, y: -4 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                   aria-label={social.label}
//                 >
//                   <Icon size={20} />
//                 </motion.a>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="pt-8 text-center text-white/80 text-sm"
//         >
//           <p className="flex items-center justify-center gap-1">
//             Crafted with{' '}
//             <Heart size={16} className="text-red-300 fill-red-300" /> by Soni
//             Jewellery © {currentYear}. All rights reserved.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

'use client';
import { AnimatePresence } from 'framer-motion';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram, Facebook, Share2, Mail, Heart, Sparkles, Diamond, Shield, Truck, Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    collections: [
      { label: 'Rings', href: '#collections', icon: '💍' },
      { label: 'Necklaces', href: '#collections', icon: '📿' },
      { label: 'Bracelets', href: '#collections', icon: '✨' },
      { label: 'Earrings', href: '#collections', icon: '💎' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    support: [
      { label: 'FAQs', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Track Order', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: '#E4405F' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', color: '#1877F2' },
    { icon: Share2, label: 'Pinterest', href: 'https://pinterest.com', color: '#BD081C' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@sonijewellery.com', color: '#EA4335' },
  ];

  const perks = [
    { icon: Diamond, title: 'Authenticity Guaranteed', desc: '100% certified genuine' },
    { icon: Truck, title: 'Free Worldwide Shipping', desc: 'On orders over $500' },
    { icon: Shield, title: 'Lifetime Warranty', desc: 'Against manufacturing defects' },
    { icon: Clock, title: '24/7 Concierge', desc: 'Personal shopping assistance' },
  ];

  return (
    <footer className="relative pt-24 md:pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(170,82,60,0.3) 0%, transparent 70%)',
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 50, -50, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Perks Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 pb-8 border-b border-white/10"
        >
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{perk.title}</h4>
                  <p className="text-xs text-white/50">{perk.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Newsletter Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 pb-12 border-b border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-rose-500/20 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-amber-400" />
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-light text-white mb-4">
              Join the <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">Inner Circle</span>
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Subscribe to receive exclusive access to new collections, private sales, and jewellery care tips.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 backdrop-blur text-white placeholder:text-white/40 border border-white/10 focus:border-amber-500/50 focus:outline-none transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Subscribe</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-sm text-green-400"
                >
                  ✨ Thanks for subscribing! Check your inbox for a special welcome gift.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
        >
          {/* Brand Column */}
          <motion.div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center">
                  <Diamond className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 rounded-full border border-amber-500/30"
                />
              </div>
              <div>
                <p className="text-xl font-light text-white tracking-wide">SONI</p>
                <p className="text-[10px] tracking-[0.2em] text-white/50">JEWELLERY</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Crafting timeless masterpieces for those who appreciate the extraordinary.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-white/40">5th Avenue, New York</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-white/40">+1 (212) 555-7890</span>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider relative inline-block">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3 }}
                />
              </h4>
              <div className="space-y-3">
                {links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="block text-sm text-white/50 hover:text-amber-400 transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon && <span className="text-xs">{link.icon}</span>}
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social & Payment Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-y border-white/10 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-all duration-300">
                      <Icon size={18} className="text-white/70 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <motion.div
                      className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4">
              {['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-white/40 text-xs font-mono tracking-wider"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-4 text-center"
        >
          <p className="text-white/40 text-sm flex items-center justify-center gap-1 flex-wrap">
            <span>© {currentYear} SONI JEWELLERY</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart size={12} className="text-rose-400 fill-rose-400" /> for eternity
            </span>
          </p>
          <p className="text-white/30 text-xs mt-2">
            All our diamonds are ethically sourced and conflict-free certified
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

// Add AnimatePresence import at the top
