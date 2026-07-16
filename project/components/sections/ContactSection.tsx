// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { Mail, Phone, MapPin, Send } from 'lucide-react';
// // // import { useState } from 'react';
// // // import { containerVariants, itemVariants } from '@/lib/animations';

// // // export function ContactSection() {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     subject: '',
// // //     message: '',
// // //   });

// // //   const [isSubmitting, setIsSubmitting] = useState(false);

// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// // //   ) => {
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [e.target.name]: e.target.value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);

// // //     setTimeout(() => {
// // //       setIsSubmitting(false);
// // //       setFormData({ name: '', email: '', subject: '', message: '' });
// // //     }, 1500);
// // //   };

// // //   const contactInfo = [
// // //     {
// // //       icon: Mail,
// // //       label: 'Email',
// // //       value: 'hello@sonijewellery.com',
// // //     },
// // //     {
// // //       icon: Phone,
// // //       label: 'Phone',
// // //       value: '+1 (800) 234-5678',
// // //     },
// // //     {
// // //       icon: MapPin,
// // //       label: 'Location',
// // //       value: 'New York, USA',
// // //     },
// // //   ];

// // //   return (
// // //     <section
// // //       id="contact"
// // //       className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
// // //     >
// // //       {/* Background */}
// // //       <div className="absolute inset-0 -z-10">
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background: `linear-gradient(135deg, hsl(var(--theme-background)) 0%, hsl(var(--theme-light-bg)) 100%)`,
// // //           }}
// // //         />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h2
// // //             className="text-4xl md:text-5xl font-light mb-4"
// // //             style={{ color: 'hsl(var(--theme-primary))' }}
// // //           >
// // //             Get In Touch
// // //           </h2>
// // //           <p
// // //             className="text-lg max-w-2xl mx-auto"
// // //             style={{ color: 'hsl(var(--theme-muted))' }}
// // //           >
// // //             We'd love to hear from you. Reach out with any inquiries or to
// // //             schedule a consultation.
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
// // //           {/* Contact Info Cards */}
// // //           <motion.div
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="space-y-6"
// // //           >
// // //             {contactInfo.map((info, idx) => {
// // //               const Icon = info.icon;

// // //               return (
// // //                 <motion.div
// // //                   key={idx}
// // //                   variants={itemVariants}
// // //                   whileHover={{ x: 4 }}
// // //                   className="flex gap-4 items-start"
// // //                 >
// // //                   <div
// // //                     className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
// // //                     style={{
// // //                       background: `linear-gradient(135deg, hsl(var(--theme-secondary)), hsl(var(--theme-accent)))`,
// // //                     }}
// // //                   >
// // //                     <Icon size={24} className="text-white" />
// // //                   </div>
// // //                   <div>
// // //                     <p
// // //                       className="text-sm font-semibold"
// // //                       style={{ color: 'hsl(var(--theme-primary))' }}
// // //                     >
// // //                       {info.label}
// // //                     </p>
// // //                     <p
// // //                       className="text-sm mt-1"
// // //                       style={{ color: 'hsl(var(--theme-muted))' }}
// // //                     >
// // //                       {info.value}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               );
// // //             })}
// // //           </motion.div>

// // //           {/* Form */}
// // //           <motion.form
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             onSubmit={handleSubmit}
// // //             className="lg:col-span-2 space-y-6"
// // //           >
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <motion.input
// // //                 whileFocus={{ scale: 1.02 }}
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Your Name"
// // //                 value={formData.name}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="px-6 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
// // //                 style={{
// // //                   borderColor: 'hsl(var(--theme-border))',
// // //                   color: 'hsl(var(--theme-primary))',
// // //                 } as React.CSSProperties}
// // //               />
// // //               <motion.input
// // //                 whileFocus={{ scale: 1.02 }}
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Your Email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="px-6 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
// // //                 style={{
// // //                   borderColor: 'hsl(var(--theme-border))',
// // //                   color: 'hsl(var(--theme-primary))',
// // //                 }}
// // //               />
// // //             </div>

// // //             <motion.input
// // //               whileFocus={{ scale: 1.02 }}
// // //               type="text"
// // //               name="subject"
// // //               placeholder="Subject"
// // //               value={formData.subject}
// // //               onChange={handleChange}
// // //               required
// // //               className="w-full px-6 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
// // //               style={{
// // //                 borderColor: 'hsl(var(--theme-border))',
// // //                 color: 'hsl(var(--theme-primary))',
// // //               }}
// // //             />

// // //             <motion.textarea
// // //               whileFocus={{ scale: 1.02 }}
// // //               name="message"
// // //               placeholder="Your Message"
// // //               value={formData.message}
// // //               onChange={handleChange}
// // //               required
// // //               rows={5}
// // //               className="w-full px-6 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none"
// // //               style={{
// // //                 borderColor: 'hsl(var(--theme-border))',
// // //                 color: 'hsl(var(--theme-primary))',
// // //               }}
// // //             />

// // //             <motion.button
// // //               whileHover={{ scale: 1.02 }}
// // //               whileTap={{ scale: 0.98 }}
// // //               type="submit"
// // //               disabled={isSubmitting}
// // //               className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium tracking-wide text-white transition-all"
// // //               style={{
// // //                 background: isSubmitting
// // //                   ? 'hsl(var(--theme-muted))'
// // //                   : 'hsl(var(--theme-primary))',
// // //               }}
// // //             >
// // //               {isSubmitting ? (
// // //                 <motion.div
// // //                   animate={{ rotate: 360 }}
// // //                   transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
// // //                 >
// // //                   <Send size={18} />
// // //                 </motion.div>
// // //               ) : (
// // //                 <>
// // //                   <Send size={18} />
// // //                   Send Message
// // //                 </>
// // //               )}
// // //             </motion.button>
// // //           </motion.form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // 'use client';

// // import { useState, useEffect, useRef } from 'react';
// // import { motion, useInView, AnimatePresence } from 'framer-motion';
// // import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// // /* ─────────────────────────────────────────────
// //    Inline styles for custom fonts & textures
// //    (Tailwind can't handle @import / CSS vars easily
// //    for custom Google Fonts, so we inject a style tag)
// // ───────────────────────────────────────────── */
// // const GlobalStyles = () => (
// //   <style>{`
// //     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;500;600&family=Nunito+Sans:wght@300;400;500&display=swap');

// //     .font-display { font-family: 'Cormorant Garamond', serif; }
// //     .font-cinzel  { font-family: 'Cinzel', serif; }
// //     .font-body    { font-family: 'Nunito Sans', sans-serif; }

// //     /* Diamond lattice bg */
// //     .diamond-lattice {
// //       background-image:
// //         repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(120,20,30,0.07) 28px, rgba(120,20,30,0.07) 29px),
// //         repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(120,20,30,0.07) 28px, rgba(120,20,30,0.07) 29px);
// //     }

// //     /* Chain texture */
// //     .chain-texture {
// //       background-image:
// //         repeating-linear-gradient(60deg, transparent, transparent 6px, rgba(120,20,30,0.06) 6px, rgba(120,20,30,0.06) 7px),
// //         repeating-linear-gradient(-60deg, transparent, transparent 6px, rgba(120,20,30,0.06) 6px, rgba(120,20,30,0.06) 7px);
// //     }

// //     /* Gold shimmer text */
// //     @keyframes shimmer-text {
// //       0%   { background-position: -200% center; }
// //       100% { background-position: 200% center; }
// //     }
// //     .shimmer-maroon {
// //       background: linear-gradient(90deg, #7B1F2A 0%, #C06070 40%, #E8A0A8 50%, #C06070 60%, #7B1F2A 100%);
// //       background-size: 200% auto;
// //       -webkit-background-clip: text;
// //       -webkit-text-fill-color: transparent;
// //       background-clip: text;
// //       animation: shimmer-text 4s linear infinite;
// //     }

// //     /* Underline slide animation for inputs */
// //     .input-underline {
// //       position: relative;
// //     }
// //     .input-underline::after {
// //       content: '';
// //       position: absolute;
// //       bottom: 0; left: 0;
// //       width: 0; height: 1px;
// //       background: #7B1F2A;
// //       transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
// //     }
// //     .input-underline:focus-within::after {
// //       width: 100%;
// //     }

// //     /* Floating particles */
// //     @keyframes float-particle {
// //       0%   { opacity: 0; transform: rotate(45deg) translateY(0)   scale(0.5); }
// //       20%  { opacity: 0.5; }
// //       80%  { opacity: 0.2; }
// //       100% { opacity: 0; transform: rotate(45deg) translateY(-100px) scale(1.2); }
// //     }
// //     .particle { animation: float-particle var(--dur) ease-in var(--delay) infinite; }

// //     /* Button sweep */
// //     .btn-sweep {
// //       position: relative; overflow: hidden;
// //       transition: color 0.4s ease;
// //     }
// //     .btn-sweep::before {
// //       content: '';
// //       position: absolute; inset: 0;
// //       background: linear-gradient(135deg, #7B1F2A, #4A0D14);
// //       transform: translateX(-101%);
// //       transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
// //       z-index: 0;
// //     }
// //     .btn-sweep:hover::before { transform: translateX(0); }
// //     .btn-sweep:hover { color: #FAEAE8 !important; }
// //     .btn-sweep > * { position: relative; z-index: 1; }

// //     /* Spin */
// //     @keyframes spin { to { transform: rotate(360deg); } }
// //     .spin { animation: spin 1s linear infinite; }

// //     /* Corner brackets */
// //     .bracket-tl { border-top: 1px solid #C06070; border-left: 1px solid #C06070; }
// //     .bracket-tr { border-top: 1px solid #C06070; border-right: 1px solid #C06070; }
// //     .bracket-bl { border-bottom: 1px solid #C06070; border-left: 1px solid #C06070; }
// //     .bracket-br { border-bottom: 1px solid #C06070; border-right: 1px solid #C06070; }
// //   `}</style>
// // );

// // /* ─── Ornament Components ─── */
// // const DiamondDot = ({ size = 8, color = '#7B1F2A' }) => (
// //   <div
// //     style={{
// //       width: size, height: size,
// //       background: color,
// //       transform: 'rotate(45deg)',
// //       flexShrink: 0,
// //     }}
// //   />
// // );

// // const OrnamentLine = () => (
// //   <div className="flex items-center justify-center gap-4 mb-5">
// //     <div className="h-px w-16" style={{ background: 'linear-gradient(90deg,transparent,#C06070)' }} />
// //     <DiamondDot size={5} color="#C06070" />
// //     <DiamondDot size={9} color="#7B1F2A" />
// //     <DiamondDot size={5} color="#C06070" />
// //     <div className="h-px w-16" style={{ background: 'linear-gradient(270deg,transparent,#C06070)' }} />
// //   </div>
// // );

// // const ChainBar = () => (
// //   <div className="flex items-center justify-center gap-0 my-8 opacity-30">
// //     {Array.from({ length: 18 }).map((_, i) => (
// //       <div
// //         key={i}
// //         style={{
// //           width: i % 2 === 0 ? 12 : 6,
// //           height: i % 2 === 0 ? 6 : 12,
// //           border: '1px solid #7B1F2A',
// //           borderRadius: 3,
// //           flexShrink: 0,
// //         }}
// //       />
// //     ))}
// //   </div>
// // );

// // /* ─── Particle Field ─── */
// // const Particles = () => {
// //   const particles = Array.from({ length: 16 }, (_, i) => ({
// //     id: i,
// //     left: `${Math.random() * 100}%`,
// //     bottom: `${Math.random() * 40}%`,
// //     dur: `${4 + Math.random() * 6}s`,
// //     delay: `${Math.random() * 8}s`,
// //     opacity: 0.2 + Math.random() * 0.4,
// //   }));

// //   return (
// //     <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //       {particles.map((p) => (
// //         <div
// //           key={p.id}
// //           className="particle absolute w-1.5 h-1.5"
// //           style={{
// //             left: p.left,
// //             bottom: p.bottom,
// //             background: '#C06070',
// //             transform: 'rotate(45deg)',
// //             '--dur': p.dur,
// //             '--delay': p.delay,
// //             opacity: 0,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // /* ─── Contact Info Item ─── */
// // const InfoItem = ({ icon: Icon, label, value, delay }) => {
// //   const ref = useRef(null);
// //   const inView = useInView(ref, { once: true });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, x: -20 }}
// //       animate={inView ? { opacity: 1, x: 0 } : {}}
// //       transition={{ duration: 0.6, delay }}
// //       whileHover={{ x: 4 }}
// //       className="group flex flex-col gap-1 pl-4 mb-7 cursor-default transition-all duration-300"
// //       style={{ borderLeft: '1px solid rgba(192,96,112,0.3)' }}
// //       onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = '#7B1F2A')}
// //       onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'rgba(192,96,112,0.3)')}
// //     >
// //       <div className="flex items-center gap-2">
// //         <Icon
// //           size={13}
// //           className="transition-all duration-300 group-hover:scale-110"
// //           style={{ color: '#7B1F2A' }}
// //         />
// //         <span
// //           className="font-cinzel text-[9px] tracking-[3px] uppercase"
// //           style={{ color: '#7B1F2A' }}
// //         >
// //           {label}
// //         </span>
// //       </div>
// //       <p
// //         className="font-display text-sm pl-5"
// //         style={{ color: '#3A1520', letterSpacing: '0.3px' }}
// //       >
// //         {value}
// //       </p>
// //     </motion.div>
// //   );
// // };

// // /* ─── Luxury Input ─── */
// // const LuxuryInput = ({ label, ...props }) => (
// //   <div className="flex flex-col gap-1.5 w-full">
// //     <label
// //       className="font-cinzel text-[9px] tracking-[3px] uppercase"
// //       style={{ color: '#9B3040' }}
// //     >
// //       {label}
// //     </label>
// //     <div className="input-underline" style={{ borderBottom: '1px solid rgba(192,96,112,0.25)' }}>
// //       {props.as === 'textarea' ? (
// //         <textarea
// //           {...props}
// //           as={undefined}
// //           className="font-display w-full bg-transparent outline-none text-base resize-none pt-1 pb-2 placeholder-[#C0909880]"
// //           style={{ color: '#3A1520', fontStyle: 'italic', fontSize: 15 }}
// //         />
// //       ) : (
// //         <input
// //           {...props}
// //           className="font-display w-full bg-transparent outline-none text-base pt-1 pb-2 placeholder-[#C0909880]"
// //           style={{ color: '#3A1520', fontStyle: 'italic', fontSize: 15 }}
// //         />
// //       )}
// //     </div>
// //   </div>
// // );

// // /* ─── Main Component ─── */
// // export function ContactSection() {
// //   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
// //   const [status, setStatus] = useState('idle'); // idle | sending | sent

// //   const sectionRef = useRef(null);
// //   const inView = useInView(sectionRef, { once: true, margin: '-80px' });

// //   const handleChange = (e) =>
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setStatus('sending');
// //     setTimeout(() => {
// //       setStatus('sent');
// //       setFormData({ name: '', email: '', subject: '', message: '' });
// //     }, 1800);
// //   };

// //   const contactInfo = [
// //     { icon: Mail,   label: 'Email',   value: 'hello@sonijewellery.com' },
// //     { icon: Phone,  label: 'Phone',   value: '+1 (800) 234-5678' },
// //     { icon: MapPin, label: 'Atelier', value: 'New York, USA' },
// //   ];

// //   return (
// //     <>
// //       <GlobalStyles />

// //       <section
// //         ref={sectionRef}
// //         id="contact"
// //         className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
// //         style={{ background: '#FDF5F0' }}
// //       >
// //         {/* Background layers */}
// //         <div className="diamond-lattice absolute inset-0 z-0" />
// //         {/* Radial glow */}
// //         <div
// //           className="absolute inset-0 z-0 pointer-events-none"
// //           style={{
// //             background:
// //               'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(123,31,42,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(232,160,168,0.1) 0%, transparent 60%)',
// //           }}
// //         />
// //         <Particles />

// //         <div className="relative z-10 max-w-5xl mx-auto">

// //           {/* ── HEADER ── */}
// //           <motion.div
// //             initial={{ opacity: 0, y: -28 }}
// //             animate={inView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
// //             className="text-center mb-20"
// //           >
// //             <OrnamentLine />

// //             <p
// //               className="font-cinzel text-[10px] tracking-[6px] uppercase mb-4"
// //               style={{ color: '#9B3040' }}
// //             >
// //               Private Consultation
// //             </p>

// //             <h2
// //               className="font-display font-light leading-tight mb-4"
// //               style={{ fontSize: 'clamp(42px,7vw,68px)', color: '#3A1520' }}
// //             >
// //               Get In{' '}
// //               <em className="shimmer-maroon not-italic">Touch</em>
// //             </h2>

// //             <p
// //               className="font-body font-light text-sm tracking-wide max-w-sm mx-auto leading-relaxed"
// //               style={{ color: '#9B6070' }}
// //             >
// //               Every extraordinary piece begins with a conversation.
// //               <br />Reach out to begin your journey.
// //             </p>

// //             <ChainBar />
// //           </motion.div>

// //           {/* ── GRID ── */}
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">

// //             {/* ── LEFT: INFO ── */}
// //             <div>
// //               <p
// //                 className="font-cinzel text-[9px] tracking-[4px] uppercase mb-7 pb-3"
// //                 style={{ color: '#9B3040', borderBottom: '1px solid rgba(192,96,112,0.25)' }}
// //               >
// //                 Our Atelier
// //               </p>

// //               {contactInfo.map((item, i) => (
// //                 <InfoItem key={i} {...item} delay={0.2 + i * 0.1} />
// //               ))}

// //               {/* Quote block w/ chain texture */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 16 }}
// //                 animate={inView ? { opacity: 1, y: 0 } : {}}
// //                 transition={{ duration: 0.7, delay: 0.6 }}
// //                 className="chain-texture mt-8 p-5 relative"
// //                 style={{ border: '1px solid rgba(192,96,112,0.2)' }}
// //               >
// //                 {/* tiny corner jewels */}
// //                 {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
// //                   <div
// //                     key={i}
// //                     className={`absolute ${pos} w-1.5 h-1.5`}
// //                     style={{ background: '#C06070', transform: 'rotate(45deg)' }}
// //                   />
// //                 ))}
// //                 <p
// //                   className="font-display text-sm leading-relaxed"
// //                   style={{ color: '#9B6070', fontStyle: 'italic' }}
// //                 >
// //                   "Crafting timeless elegance since 1987. Each creation is a testament to uncompromising artistry."
// //                 </p>
// //               </motion.div>
// //             </div>

// //             {/* ── RIGHT: FORM ── */}
// //             <motion.div
// //               className="lg:col-span-2"
// //               initial={{ opacity: 0, x: 30 }}
// //               animate={inView ? { opacity: 1, x: 0 } : {}}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //             >
// //               {/* Frame with corner brackets */}
// //               <div
// //                 className="relative p-8 md:p-10"
// //                 style={{
// //                   background: 'rgba(255,255,255,0.6)',
// //                   border: '1px solid rgba(192,96,112,0.2)',
// //                   backdropFilter: 'blur(8px)',
// //                 }}
// //               >
// //                 {/* Corner brackets */}
// //                 <div className="bracket-tl absolute top-3 left-3 w-5 h-5" />
// //                 <div className="bracket-tr absolute top-3 right-3 w-5 h-5" />
// //                 <div className="bracket-bl absolute bottom-3 left-3 w-5 h-5" />
// //                 <div className="bracket-br absolute bottom-3 right-3 w-5 h-5" />

// //                 <AnimatePresence mode="wait">
// //                   {status === 'sent' ? (
// //                     <motion.div
// //                       key="success"
// //                       initial={{ opacity: 0, scale: 0.9 }}
// //                       animate={{ opacity: 1, scale: 1 }}
// //                       exit={{ opacity: 0 }}
// //                       className="flex flex-col items-center justify-center py-16 gap-4"
// //                     >
// //                       {/* Diamond check */}
// //                       <div
// //                         className="w-14 h-14 flex items-center justify-center"
// //                         style={{ border: '1px solid #7B1F2A', transform: 'rotate(45deg)' }}
// //                       >
// //                         <div style={{ transform: 'rotate(-45deg)' }}>
// //                           <CheckCircle size={24} style={{ color: '#7B1F2A' }} />
// //                         </div>
// //                       </div>
// //                       <p
// //                         className="font-display text-2xl"
// //                         style={{ color: '#3A1520', fontStyle: 'italic' }}
// //                       >
// //                         Message Received
// //                       </p>
// //                       <p
// //                         className="font-cinzel text-[10px] tracking-[3px] uppercase"
// //                         style={{ color: '#9B6070' }}
// //                       >
// //                         We'll be in touch within 24 hours
// //                       </p>
// //                     </motion.div>
// //                   ) : (
// //                     <motion.form
// //                       key="form"
// //                       onSubmit={handleSubmit}
// //                       className="flex flex-col gap-6"
// //                       initial={{ opacity: 1 }}
// //                       exit={{ opacity: 0 }}
// //                     >
// //                       {/* Row 1 */}
// //                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                         <LuxuryInput
// //                           label="Your Name"
// //                           type="text"
// //                           name="name"
// //                           placeholder="Full name"
// //                           value={formData.name}
// //                           onChange={handleChange}
// //                           required
// //                         />
// //                         <LuxuryInput
// //                           label="Email Address"
// //                           type="email"
// //                           name="email"
// //                           placeholder="your@email.com"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           required
// //                         />
// //                       </div>

// //                       <LuxuryInput
// //                         label="Subject"
// //                         type="text"
// //                         name="subject"
// //                         placeholder="Custom commission, general inquiry…"
// //                         value={formData.subject}
// //                         onChange={handleChange}
// //                         required
// //                       />

// //                       <LuxuryInput
// //                         label="Your Message"
// //                         as="textarea"
// //                         name="message"
// //                         placeholder="Describe your vision…"
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         rows={5}
// //                         required
// //                       />

// //                       {/* Submit row */}
// //                       <div
// //                         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5"
// //                         style={{ borderTop: '1px solid rgba(192,96,112,0.2)' }}
// //                       >
// //                         <p
// //                           className="font-display text-sm"
// //                           style={{ color: '#9B6070', fontStyle: 'italic' }}
// //                         >
// //                           We respond within 24 hours
// //                         </p>

// //                         <motion.button
// //                           type="submit"
// //                           disabled={status === 'sending'}
// //                           whileTap={{ scale: 0.97 }}
// //                           className="btn-sweep flex items-center gap-3 px-7 py-3 font-cinzel text-[10px] tracking-[4px] uppercase"
// //                           style={{
// //                             border: '1px solid #7B1F2A',
// //                             color: '#7B1F2A',
// //                             background: 'transparent',
// //                             cursor: status === 'sending' ? 'not-allowed' : 'pointer',
// //                           }}
// //                         >
// //                           <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
// //                           <Send
// //                             size={13}
// //                             className={status === 'sending' ? 'spin' : ''}
// //                           />
// //                         </motion.button>
// //                       </div>
// //                     </motion.form>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* ── BOTTOM ORNAMENT ── */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={inView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.7, delay: 0.9 }}
// //             className="flex items-center justify-center gap-3 mt-20"
// //           >
// //             <div className="h-px w-20" style={{ background: 'linear-gradient(90deg,transparent,rgba(192,96,112,0.5))' }} />
// //             <DiamondDot size={5} color="#C06070" />
// //             <DiamondDot size={9} color="#7B1F2A" />
// //             <DiamondDot size={5} color="#C06070" />
// //             <div className="h-px w-20" style={{ background: 'linear-gradient(270deg,transparent,rgba(192,96,112,0.5))' }} />
// //           </motion.div>

// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // export default ContactSection;


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// /* ─────────────────────────────────────────────
//    Custom CSS for animations & complex effects
// ───────────────────────────────────────────── */
// const CustomStyles = () => (
//   <style jsx global>{`
//     @keyframes shimmer-text {
//       0%   { background-position: -200% center; }
//       100% { background-position: 200% center; }
//     }
    
//     @keyframes float-particle {
//       0%   { opacity: 0; transform: rotate(45deg) translateY(0) scale(0.5); }
//       20%  { opacity: 0.5; }
//       80%  { opacity: 0.2; }
//       100% { opacity: 0; transform: rotate(45deg) translateY(-100px) scale(1.2); }
//     }
    
//     @keyframes spin { 
//       to { transform: rotate(360deg); } 
//     }
    
//     .shimmer-maroon {
//       background: linear-gradient(90deg, #7B1F2A 0%, #C06070 40%, #E8A0A8 50%, #C06070 60%, #7B1F2A 100%);
//       background-size: 200% auto;
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       animation: shimmer-text 4s linear infinite;
//     }
    
//     .spin { 
//       animation: spin 1s linear infinite; 
//     }
//   `}</style>
// );

// /* ─── Ornament Components ─── */
// const DiamondDot = ({ size = 8, color = '#7B1F2A' }) => (
//   <div
//     className="flex-shrink-0 rotate-45"
//     style={{ width: size, height: size, background: color }}
//   />
// );

// const OrnamentLine = () => (
//   <div className="flex items-center justify-center gap-4 mb-5">
//     <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f55c75]" />
//     <DiamondDot size={5} color="#C06070" />
//     <DiamondDot size={9} color="#7B1F2A" />
//     <DiamondDot size={5} color="#C06070" />
//     <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#fdd6bf]" />
//   </div>
// );

// const ChainBar = () => (
//   <div className="flex items-center justify-center gap-0 my-8 opacity-30">
//     {Array.from({ length: 18 }).map((_, i) => (
//       <div
//         key={i}
//         className="flex-shrink-0 border border-[#7B1F2A] rounded-sm"
//         style={{
//           width: i % 2 === 0 ? 12 : 6,
//           height: i % 2 === 0 ? 6 : 12,
//         }}
//       />
//     ))}
//   </div>
// );

// /* ─── Particle Field ─── */
// const Particles = () => {
//   const particles = Array.from({ length: 16 }, (_, i) => ({
//     id: i,
//     left: `${Math.random() * 100}%`,
//     bottom: `${Math.random() * 40}%`,
//     dur: `${4 + Math.random() * 6}s`,
//     delay: `${Math.random() * 8}s`,
//   }));

//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {particles.map((p) => (
//         <div
//           key={p.id}
//           className="absolute w-1.5 h-1.5 rotate-45"
//           style={{
//             left: p.left,
//             bottom: p.bottom,
//             background: '#C06070',
//             animation: `float-particle ${p.dur} ease-in ${p.delay} infinite`,
//             opacity: 0,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// /* ─── Contact Info Item ─── */
// const InfoItem = ({ icon: Icon, label, value, delay }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -20 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6, delay }}
//       whileHover={{ x: 4 }}
//       className="group flex flex-col gap-1 pl-4 mb-7 cursor-default transition-all duration-300 border-l border-[#C06070]/30 hover:border-[#7B1F2A]"
//     >
//       <div className="flex items-center gap-2">
//         <Icon size={13} className="transition-all duration-300 group-hover:scale-110 text-[#7B1F2A]" />
//         <span className="font-['Cinzel'] text-[9px] tracking-[3px] uppercase text-[#7B1F2A]">
//           {label}
//         </span>
//       </div>
//       <p className="font-['Cormorant_Garamond'] text-sm pl-5 text-[#3A1520] tracking-[0.3px]">
//         {value}
//       </p>
//     </motion.div>
//   );
// };

// /* ─── Luxury Input ─── */
// const LuxuryInput = ({ label, ...props }) => (
//   <div className="flex flex-col gap-1.5 w-full">
//     <label className="font-['Cinzel'] text-[9px] tracking-[3px] uppercase text-[#9B3040]">
//       {label}
//     </label>
//     <div className="relative border-b border-[#C06070]/25 focus-within:after:w-full after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#7B1F2A] after:transition-all after:duration-500 after:w-0">
//       {props.as === 'textarea' ? (
//         <textarea
//           {...props}
//           as={undefined}
//           className="font-['Cormorant_Garamond'] w-full bg-transparent outline-none text-base resize-none pt-1 pb-2 placeholder:text-[#C09098]/50 text-[#3A1520] italic text-[15px]"
//         />
//       ) : (
//         <input
//           {...props}
//           className="font-['Cormorant_Garamond'] w-full bg-transparent outline-none text-base pt-1 pb-2 placeholder:text-[#C09098]/50 text-[#3A1520] italic text-[15px]"
//         />
//       )}
//     </div>
//   </div>
// );

// /* ─── Main Component ─── */
// export function ContactSection() {
//   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
//   const [status, setStatus] = useState('idle');

//   const sectionRef = useRef(null);
//   const inView = useInView(sectionRef, { once: true, margin: '-80px' });

//   const handleChange = (e) =>
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus('sending');
//     setTimeout(() => {
//       setStatus('sent');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setTimeout(() => setStatus('idle'), 3000);
//     }, 1800);
//   };

//   const contactInfo = [
//     { icon: Mail, label: 'Email', value: 'hello@sonijewellery.com' },
//     { icon: Phone, label: 'Phone', value: '+1 (800) 234-5678' },
//     { icon: MapPin, label: 'Atelier', value: 'New York, USA' },
//   ];

//   return (
//     <>
//       <CustomStyles />
      
//       <section
//         ref={sectionRef}
//         id="contact"
//         className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#FFF5F0] to-[#FDE8E0]"
//       >
//         {/* Diamond Lattice Pattern */}
//         <div 
//           className="absolute inset-0 z-0 opacity-30"
//           style={{
//             backgroundImage: `
//               repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(120,20,30,0.05) 28px, rgba(120,20,30,0.05) 29px),
//               repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(120,20,30,0.05) 28px, rgba(120,20,30,0.05) 29px)
//             `
//           }}
//         />
        
//         {/* Chain Texture */}
//         <div 
//           className="absolute inset-0 z-0 opacity-20"
//           style={{
//             backgroundImage: `
//               repeating-linear-gradient(60deg, transparent, transparent 6px, rgba(120,20,30,0.04) 6px, rgba(120,20,30,0.04) 7px),
//               repeating-linear-gradient(-60deg, transparent, transparent 6px, rgba(120,20,30,0.04) 6px, rgba(120,20,30,0.04) 7px)
//             `
//           }}
//         />
        
//         {/* Radial Glow */}
//         <div 
//           className="absolute inset-0 z-0 pointer-events-none bg-radial-glow"
//           style={{
//             background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(123,31,42,0.06) 0%, transparent 70%),
//                         radial-gradient(ellipse 50% 40% at 80% 100%, rgba(232,160,168,0.1) 0%, transparent 60%)`
//           }}
//         />
        
//         <Particles />

//         <div className="relative z-10 max-w-5xl mx-auto">
//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: -28 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
//             className="text-center mb-20"
//           >
//             <OrnamentLine />

//             <p className="font-['Cinzel'] text-[10px] tracking-[6px] uppercase mb-4 text-[#9B3040]">
//               Private Consultation
//             </p>

//             <h2 className="font-['Cormorant_Garamond'] font-light leading-tight mb-4 text-[#3A1520]" style={{ fontSize: 'clamp(42px,7vw,68px)' }}>
//               Get In{' '}
//               <em className="shimmer-maroon not-italic">Touch</em>
//             </h2>

//             <p className="font-['Nunito_Sans'] font-light text-sm tracking-wide max-w-sm mx-auto leading-relaxed text-[#9B6070]">
//               Every extraordinary piece begins with a conversation.
//               <br />Reach out to begin your journey.
//             </p>

//             <ChainBar />
//           </motion.div>

//           {/* GRID */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
//             {/* LEFT: INFO */}
//             <div>
//               <p className="font-['Cinzel'] text-[9px] tracking-[4px] uppercase mb-7 pb-3 text-[#9B3040] border-b border-[#C06070]/25">
//                 Our Atelier
//               </p>

//               {contactInfo.map((item, i) => (
//                 <InfoItem key={i} {...item} delay={0.2 + i * 0.1} />
//               ))}

//               {/* Quote Block */}
//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.7, delay: 0.6 }}
//                 className="relative mt-8 p-5 border border-[#C06070]/20 bg-[#C06070]/5"
//                 style={{
//                   backgroundImage: `
//                     repeating-linear-gradient(60deg, transparent, transparent 6px, rgba(120,20,30,0.03) 6px, rgba(120,20,30,0.03) 7px),
//                     repeating-linear-gradient(-60deg, transparent, transparent 6px, rgba(120,20,30,0.03) 6px, rgba(120,20,30,0.03) 7px)
//                   `
//                 }}
//               >
//                 {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
//                   <div
//                     key={i}
//                     className={`absolute ${pos} w-1.5 h-1.5 rotate-45 bg-[#C06070]`}
//                   />
//                 ))}
//                 <p className="font-['Cormorant_Garamond'] text-sm leading-relaxed text-[#9B6070] italic">
//                   "Crafting timeless elegance since 1987. Each creation is a testament to uncompromising artistry."
//                 </p>
//               </motion.div>
//             </div>

//             {/* RIGHT: FORM */}
//             <motion.div
//               className="lg:col-span-2"
//               initial={{ opacity: 0, x: 30 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <div className="relative p-8 md:p-10 bg-white/60 backdrop-blur-sm border border-[#C06070]/20">
//                 {/* Corner Brackets */}
//                 <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C06070]" />
//                 <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C06070]" />
//                 <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C06070]" />
//                 <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C06070]" />

//                 <AnimatePresence mode="wait">
//                   {status === 'sent' ? (
//                     <motion.div
//                       key="success"
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="flex flex-col items-center justify-center py-16 gap-4"
//                     >
//                       <div className="w-14 h-14 flex items-center justify-center border border-[#7B1F2A] rotate-45">
//                         <div className="-rotate-45">
//                           <CheckCircle size={24} className="text-[#7B1F2A]" />
//                         </div>
//                       </div>
//                       <p className="font-['Cormorant_Garamond'] text-2xl text-[#3A1520] italic">
//                         Message Received
//                       </p>
//                       <p className="font-['Cinzel'] text-[10px] tracking-[3px] uppercase text-[#9B6070]">
//                         We'll be in touch within 24 hours
//                       </p>
//                     </motion.div>
//                   ) : (
//                     <motion.form
//                       key="form"
//                       onSubmit={handleSubmit}
//                       className="flex flex-col gap-6"
//                       initial={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     >
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <LuxuryInput
//                           label="Your Name"
//                           type="text"
//                           name="name"
//                           placeholder="Full name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                         />
//                         <LuxuryInput
//                           label="Email Address"
//                           type="email"
//                           name="email"
//                           placeholder="your@email.com"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>

//                       <LuxuryInput
//                         label="Subject"
//                         type="text"
//                         name="subject"
//                         placeholder="Custom commission, general inquiry…"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                       />

//                       <LuxuryInput
//                         label="Your Message"
//                         as="textarea"
//                         name="message"
//                         placeholder="Describe your vision…"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={5}
//                         required
//                       />

//                       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-[#C06070]/20">
//                         <p className="font-['Cormorant_Garamond'] text-sm text-[#9B6070] italic">
//                           We respond within 24 hours
//                         </p>

//                         <motion.button
//                           type="submit"
//                           disabled={status === 'sending'}
//                           whileTap={{ scale: 0.97 }}
//                           className="relative overflow-hidden flex items-center gap-3 px-7 py-3 font-['Cinzel'] text-[10px] tracking-[4px] uppercase border border-[#7B1F2A] text-[#7B1F2A] bg-transparent hover:text-[#FAEAE8] transition-colors duration-400 disabled:cursor-not-allowed group"
//                         >
//                           <span className="absolute inset-0 bg-gradient-to-br from-[#7B1F2A] to-[#4A0D14] -translate-x-full group-hover:translate-x-0 transition-transform duration-450 ease-[cubic-bezier(0.4,0,0.2,1)]" />
//                           <span className="relative z-10">{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
//                           <Send
//                             size={13}
//                             className={`relative z-10 ${status === 'sending' ? 'spin' : ''}`}
//                           />
//                         </motion.button>
//                       </div>
//                     </motion.form>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           </div>

//           {/* BOTTOM ORNAMENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.9 }}
//             className="flex items-center justify-center gap-3 mt-20"
//           >
//             <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C06070]/50" />
//             <DiamondDot size={5} color="#C06070" />
//             <DiamondDot size={9} color="#7B1F2A" />
//             <DiamondDot size={5} color="#C06070" />
//             <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C06070]/50" />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ContactSection;



'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const CustomStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;500;600&family=Nunito+Sans:wght@300;400;500&display=swap');

    @keyframes shimmer-text {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes float-particle {
      0%   { opacity: 0; transform: rotate(45deg) translateY(0) scale(0.5); }
      20%  { opacity: 0.5; }
      80%  { opacity: 0.2; }
      100% { opacity: 0; transform: rotate(45deg) translateY(-100px) scale(1.2); }
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes map-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(123,31,42,0.3); }
      50%       { box-shadow: 0 0 0 10px rgba(123,31,42,0); }
    }

    .shimmer-maroon {
      background: linear-gradient(90deg, #7B1F2A 0%, #C06070 40%, #E8A0A8 50%, #C06070 60%, #7B1F2A 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer-text 4s linear infinite;
    }
    .spin { animation: spin 1s linear infinite; }
    .map-pin-pulse { animation: map-pulse 2s ease-in-out infinite; }

    /* map iframe border glow */
    .map-frame {
      transition: box-shadow 0.4s ease;
    }
    .map-frame:hover {
      box-shadow: 0 8px 40px rgba(123,31,42,0.18);
    }
  `}</style>
);

/* ── Ornament pieces ── */
const DiamondDot = ({ size = 8, color = '#7B1F2A' }) => (
  <div className="flex-shrink-0 rotate-45" style={{ width: size, height: size, background: color }} />
);

const OrnamentLine = () => (
  <div className="flex items-center justify-center gap-4 mb-5">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f55c75]" />
    <DiamondDot size={5} color="#C06070" />
    <DiamondDot size={9} color="#7B1F2A" />
    <DiamondDot size={5} color="#C06070" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#fdd6bf]" />
  </div>
);

const ChainBar = () => (
  <div className="flex items-center justify-center gap-0 my-8 opacity-30">
    {Array.from({ length: 18 }).map((_, i) => (
      <div
        key={i}
        className="flex-shrink-0 border border-[#7B1F2A] rounded-sm"
        style={{ width: i % 2 === 0 ? 12 : 6, height: i % 2 === 0 ? 6 : 12 }}
      />
    ))}
  </div>
);

const Particles = () => {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${(i * 6.25) % 100}%`,
    bottom: `${(i * 7) % 40}%`,
    dur: `${4 + (i % 6)}s`,
    delay: `${(i % 8) * 0.5}s`,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1.5 h-1.5 rotate-45"
          style={{
            left: p.left, bottom: p.bottom, background: '#C06070',
            animation: `float-particle ${p.dur} ease-in ${p.delay} infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

/* ── Info Item ── */
const InfoItem = ({ icon: Icon, label, value, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ x: 4 }}
      className="group flex flex-col gap-1 pl-4 mb-6 cursor-default border-l border-[#C06070]/30 hover:border-[#7B1F2A] transition-colors duration-300"
    >
      <div className="flex items-center gap-2">
        <Icon size={13} className="text-[#7B1F2A] group-hover:scale-110 transition-transform duration-300" />
        <span className="font-['Cinzel'] text-[9px] tracking-[3px] uppercase text-[#7B1F2A] ">{label}</span>
      </div>
      <p className="font-['Cormorant_Garamond'] font-semibold text-[22px] pl-5 text-[#3A1520] tracking-[0.3px]">{value}</p>
    </motion.div>
  );
};

/* ── Luxury Input ── */
const LuxuryInput = ({ label, ...props }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="font-['Cinzel'] text-[14px] tracking-[3px] uppercase text-[#9B3040]">{label}</label>
    <div className="relative border-b border-[#C06070]/25 focus-within:after:w-full after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#7B1F2A] after:transition-all after:duration-500 after:w-0">
      {props.as === 'textarea' ? (
        <textarea
          {...props} as={undefined}
          className="font-['Cormorant_Garamond'] w-full bg-transparent outline-none resize-none pt-1 pb-2 placeholder:text-[#C09098]/50 text-[#3A1520] italic text-[15px]"
        />
      ) : (
        <input
          {...props}
          className="font-['Cormorant_Garamond'] w-full bg-transparent outline-none pt-1 pb-2 placeholder:text-[#C09098]/50 text-[#3A1520] italic text-[15px]"
        />
      )}
    </div>
  </div>
);

/* ── Google Map embed ── */
const MapEmbed = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex flex-col gap-4 h-full"
  >
    {/* Label */}
    <p className="font-['Cinzel'] text-[12px] tracking-[4px] uppercase pb-3 text-[#9B3040] border-b border-[#C06070]/25">
      Our Location
    </p>

    {/* Map wrapper */}
    <div className="relative flex-1 min-h-[320px]" >
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#C06070] z-10 pointer-events-none" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#C06070] z-10 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#C06070] z-10 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#C06070] z-10 pointer-events-none" />

      {/* <iframe
        title="Soni Jewellery Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.90932130252!2d-74.1197628!3d40.6974034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          filter: 'sepia(20%) hue-rotate(300deg) saturate(0.8) brightness(0.95)',
          minHeight: 320,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-frame w-full h-full"
      /> */}
     <iframe 
     title="Soni Jewellery Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8292393274455!2d77.22304087495465!3d28.574889986696935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a4266f1201%3A0xd474a42c913604a4!2sSoni%20Jewellers!5e0!3m2!1sen!2sin!4v1780465738342!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Soni Jewellers Location"
/>

      {/* Tinted overlay — matches peach theme, non-blocking pointer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(123,31,42,0.04)' }}
      />
    </div>

    {/* Address pill below map */}
    <div className="flex items-center gap-2 px-3 py-2 border border-[#C06070]/20 bg-[#C06070]/5">
      <MapPin size={14} className="text-[#7B1F2A] flex-shrink-0" />
      <span className="font-['Cormorant_Garamond'] text-xl font-semibold italic text-[#3A1520]">
        K/19, 3-4, Kotla Mubarkhpur,Punjabi
Bazar, New Delhi- 110003
      </span>
    </div>
  </motion.div>
);

/* ── Main Export ── */
export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1800);
  };

  const contactInfo = [
    { icon: Mail,   label: 'Email',   value: 'sonijewellers19@yahoo.com' },
    { icon: Phone,  label: 'Phone',   value: '011-42637373'       },
    { icon: MapPin, label: 'Atelier', value: 'K/19, 3-4, Kotla Mubarkhpur,Punjabi Bazar, New Delhi- 110003'           },
  ];

  return (
    <>
      <CustomStyles />
      <section
        ref={sectionRef}
        id="contact"
        className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#FFF5F0] to-[#FDE8E0]"
      >
        {/* Backgrounds */}
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 28px,rgba(120,20,30,0.05) 28px,rgba(120,20,30,0.05) 29px),repeating-linear-gradient(-45deg,transparent,transparent 28px,rgba(120,20,30,0.05) 28px,rgba(120,20,30,0.05) 29px)`
        }} />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%,rgba(123,31,42,0.06) 0%,transparent 70%),radial-gradient(ellipse 50% 40% at 80% 100%,rgba(232,160,168,0.1) 0%,transparent 60%)`
        }} />
        <Particles />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: -28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <OrnamentLine />
            <p className="font-['Cinzel'] text-[10px] tracking-[6px] uppercase mb-4 text-[#9B3040]">
              Private Consultation
            </p>
            <h2 className="font-['Cormorant_Garamond'] font-light leading-tight mb-4 text-[#3A1520]"
              style={{ fontSize: 'clamp(42px,7vw,68px)' }}>
              Get In <em className="shimmer-maroon not-italic">Touch</em>
            </h2>
            <p className="font-['Nunito_Sans'] font-light text-xl tracking-wide max-w-sm mx-auto leading-relaxed text-[#9B6070]">
              Every extraordinary piece begins with a conversation.<br />Reach out to begin your journey.
            </p>
            <ChainBar />
          </motion.div>

          {/* ── 3-COLUMN GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1.4fr] gap-8 lg:gap-10 items-start">

            {/* ── COL 1: INFO ── */}
            <div>
              <p className="font-['Cinzel'] text-[12px] tracking-[4px] uppercase mb-7 pb-3 text-[#9B3040] border-b border-[#C06070]/25">
                Our Atelier
              </p>

              {contactInfo.map((item, i) => (
                <InfoItem key={i} {...item} delay={0.2 + i * 0.1} />
              ))}

              {/* Quote block */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative mt-6 p-5 border border-[#C06070]/20 bg-[#C06070]/5"
                style={{
                  backgroundImage: `repeating-linear-gradient(60deg,transparent,transparent 6px,rgba(120,20,30,0.03) 6px,rgba(120,20,30,0.03) 7px),repeating-linear-gradient(-60deg,transparent,transparent 6px,rgba(120,20,30,0.03) 6px,rgba(120,20,30,0.03) 7px)`
                }}
              >
                {['top-2 left-2','top-2 right-2','bottom-2 left-2','bottom-2 right-2'].map((pos, i) => (
                  <div key={i} className={`absolute ${pos} w-1.5 h-1.5 rotate-45 bg-[#C06070]`} />
                ))}
                <p className="font-['Cormorant_Garamond']  font-semibold leading-relaxed text-[#9B6070] italic">
                  "Crafting timeless elegance since 1987. Each creation is a testament to uncompromising artistry."
                </p>
              </motion.div>
            </div>

            {/* ── COL 2: MAP ── */}
            <MapEmbed />

            {/* ── COL 3: FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative p-8 bg-white/60 backdrop-blur-sm border border-[#C06070]/20">
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C06070]" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C06070]" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C06070]" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C06070]" />

                <p className="font-['Cinzel'] text-[9px] tracking-[4px] uppercase mb-7 pb-3 text-[#9B3040] border-b border-[#C06070]/25">
                  Send A Message
                </p>

                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 gap-4"
                    >
                      <div className="w-14 h-14 flex items-center justify-center border border-[#7B1F2A] rotate-45">
                        <div className="-rotate-45">
                          <CheckCircle size={24} className="text-[#7B1F2A]" />
                        </div>
                      </div>
                      <p className="font-['Cormorant_Garamond'] text-2xl text-[#3A1520] italic">Message Received</p>
                      <p className="font-['Cinzel'] text-[10px] tracking-[3px] uppercase text-[#9B6070]">
                        We'll be in touch within 24 hours
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <LuxuryInput label="Your Name" type="text" name="name"
                          placeholder="Full name" value={formData.name} onChange={handleChange} required />
                        <LuxuryInput label="Email Address" type="email" name="email"
                          placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                      </div>

                      <LuxuryInput label="Subject" type="text" name="subject"
                        placeholder="Custom commission, inquiry…" value={formData.subject} onChange={handleChange} required />

                      <LuxuryInput label="Your Message" as="textarea" name="message"
                        placeholder="Describe your vision…" value={formData.message} onChange={handleChange} rows={4} required />

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-[#C06070]/20">
                        <p className="font-['Cormorant_Garamond'] text-sm text-[#9B6070] italic">
                          We respond within 24 hours
                        </p>
                        <motion.button
                          type="submit"
                          disabled={status === 'sending'}
                          whileTap={{ scale: 0.97 }}
                          className="relative overflow-hidden flex items-center gap-3 px-7 py-3 font-['Cinzel'] text-[10px] tracking-[4px] uppercase border border-[#7B1F2A] text-[#7B1F2A] bg-transparent hover:text-[#FAEAE8] transition-colors duration-300 disabled:cursor-not-allowed group"
                        >
                          <span className="absolute inset-0 bg-gradient-to-br from-[#7B1F2A] to-[#4A0D14] -translate-x-full group-hover:translate-x-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                          <span className="relative z-10">{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
                          <Send size={13} className={`relative z-10 ${status === 'sending' ? 'spin' : ''}`} />
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

          {/* ── BOTTOM ORNAMENT ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center justify-center gap-3 mt-20"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C06070]/50" />
            <DiamondDot size={5} color="#C06070" />
            <DiamondDot size={9} color="#7B1F2A" />
            <DiamondDot size={5} color="#C06070" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C06070]/50" />
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default ContactSection;