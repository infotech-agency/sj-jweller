// import { useState, useEffect, useRef } from "react";

// const FontLoader = () => {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//     return () => document.head.removeChild(link);
//   }, []);
//   return null;
// };

// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
//       },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView(0.1);
//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const step = target / 60;
//     const interval = setInterval(() => {
//       start += step;
//       if (start >= target) { setCount(target); clearInterval(interval); }
//       else setCount(Math.floor(start));
//     }, 16);
//     return () => clearInterval(interval);
//   }, [inView, target]);
//   return <span ref={ref}>{count}{suffix}</span>;
// }

// function Divider() {
//   return (
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, margin: "8px 0" }}>
//       <div style={{ width: 40, height: 1, background: "linear-gradient(to right, transparent, #c8933a)" }} />
//       <svg width="10" height="10" viewBox="0 0 10 10">
//         <circle cx="5" cy="5" r="2" fill="#c8933a" />
//         <circle cx="5" cy="5" r="4" fill="none" stroke="#c8933a" strokeWidth="0.8" />
//       </svg>
//       <div style={{ width: 40, height: 1, background: "linear-gradient(to left, transparent, #c8933a)" }} />
//     </div>
//   );
// }

// function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
//   const { ref, inView } = useInView();
//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(28px)",
//         transition: `all 0.7s ease ${delay}ms`,
//         background: "rgba(255,255,255,0.55)",
//         backdropFilter: "blur(6px)",
//         border: "1px solid rgba(200,147,58,0.2)",
//         borderRadius: 14,
//         padding: "20px 16px",
//         display: "flex",
//         flexDirection: "column" as const,
//         alignItems: "center",
//         textAlign: "center" as const,
//         boxShadow: "0 2px 18px rgba(180,120,20,0.07)",
//       }}
//     >
//       <div style={{ marginBottom: 12, color: "#7a3a2a" }}>{icon}</div>
//       <div style={{ fontFamily: "Cinzel, serif", fontSize: 11, letterSpacing: "0.2em", fontWeight: 600, color: "#7a3a2a", marginBottom: 6 }}>
//         {title}
//       </div>
//       <p style={{ fontFamily: "Lato, sans-serif", fontSize: 12, lineHeight: 1.7, color: "#5c3d2e", fontWeight: 300 }}>
//         {desc}
//       </p>
//     </div>
//   );
// }

// function StepItem({ num, title, desc, delay }: { num: string; title: string; desc: string; delay: number }) {
//   const { ref, inView } = useInView();
//   return (
//     <div
//       ref={ref}
//       style={{
//         display: "flex",
//         gap: 16,
//         alignItems: "flex-start",
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateX(0)" : "translateX(-30px)",
//         transition: `all 0.7s ease ${delay}ms`,
//       }}
//     >
//       <div
//         style={{
//           flexShrink: 0,
//           width: 42,
//           height: 42,
//           borderRadius: 10,
//           background: "linear-gradient(135deg, #f5d887, #c8933a)",
//           color: "#3d1a08",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontFamily: "Cinzel, serif",
//           fontSize: 13,
//           fontWeight: 700,
//           boxShadow: "0 2px 14px rgba(200,147,58,0.35)",
//           border: "1px solid rgba(255,255,255,0.4)",
//         }}
//       >
//         {num}
//       </div>
//       <div>
//         <div style={{ fontFamily: "Cinzel, serif", fontSize: 11, letterSpacing: "0.18em", fontWeight: 600, color: "#7a3a2a", marginBottom: 4 }}>
//           {title}
//         </div>
//         <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#5c3d2e", fontWeight: 300 }}>
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// }

// function WhySection({ coinFloat }: { coinFloat: number }) {
//   const { ref: titleRef, inView: titleIn } = useInView();
//   const { ref: imgRef, inView: imgIn } = useInView();

//   const steps = [
//     { num: "01", title: "BACKED BY TRUST", desc: "From a legacy of fine jewellery craftsmanship that generations have trusted." },
//     { num: "02", title: "CERTIFIED AUTHENTICITY", desc: "Every coin is BIS hallmarked and comes with assured buyback value." },
//     { num: "03", title: "BEAUTY WITH SECURITY", desc: "Elegant designs that celebrate tradition while securing your tomorrow." },
//   ];

//   return (
//     <section style={{ background: "linear-gradient(160deg, #f5e8d0 0%, #ede0cc 100%)", borderTop: "1px solid rgba(200,147,58,0.2)", borderBottom: "1px solid rgba(200,147,58,0.2)" }}>
//       <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px", display: "flex", flexWrap: "wrap" as const, gap: 48, alignItems: "center" }}>
//         {/* Steps */}
//         <div style={{ flex: "1 1 280px" }}>
//           <div
//             ref={titleRef}
//             style={{
//               fontSize: 34,
//               fontFamily: "Cormorant Garamond, serif",
//               fontWeight: 600,
//               color: "#5c2d0e",
//               opacity: titleIn ? 1 : 0,
//               transform: titleIn ? "translateY(0)" : "translateY(20px)",
//               transition: "all 0.8s ease",
//               marginBottom: 4,
//               lineHeight: 1.2,
//             }}
//           >
//             Why Gold Coins from{" "}
//             <span className="shimmer-text" style={{ fontFamily: "Cormorant Garamond, serif" }}>SJ Jewels?</span>
//           </div>
//           <Divider />
//           <div style={{ display: "flex", flexDirection: "column" as const, gap: 28, marginTop: 24, position: "relative" as const }}>
//             <div style={{ position: "absolute", left: 20, top: 5, bottom: 5, width: 1, background: "linear-gradient(to bottom, #e8b84b, transparent)", opacity: 0.4 }} />
//             {steps.map((s, i) => <StepItem key={i} {...s} delay={i * 180} />)}
//           </div>
//         </div>

//         {/* Coin image */}
//         <div
//           ref={imgRef}
//           style={{
//             flex: "1 1 240px",
//             display: "flex",
//             justifyContent: "center",
//             opacity: imgIn ? 1 : 0,
//             transform: imgIn ? "scale(1)" : "scale(0.88)",
//             transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 width: 250,
//                 background: "linear-gradient(160deg, #f8e8cc, #f0d8b8)",
//                 border: "1.5px solid rgba(200,147,58,0.3)",
//                 padding: "24px 24px 0",
//                 boxShadow: "0 8px 40px rgba(150,90,20,0.12)",
//                 borderRadius: "140px 140px 0 0",
//               }}
//             >
//               <div style={{ height: 180, position: "relative" as const, display: "flex", justifyContent: "center" }}>
//                 {[
//                   { size: 108, offsetX: -28, offsetY: 18, floatMult: 1, zIndex: 2 },
//                   { size: 86, offsetX: 28, offsetY: 38, floatMult: 0.7, zIndex: 1 },
//                 ].map((c, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       position: "absolute",
//                       width: c.size,
//                       height: c.size,
//                       borderRadius: "50%",
//                       background: "radial-gradient(circle at 35% 32%, #f8e89a, #e8b84b 38%, #b07010 100%)",
//                       border: "2px solid #c8933a",
//                       boxShadow: "0 6px 24px rgba(0,0,0,0.25), inset 0 2px 5px rgba(255,255,255,0.25)",
//                       left: `calc(50% + ${c.offsetX}px - ${c.size / 2}px)`,
//                       top: c.offsetY,
//                       zIndex: c.zIndex,
//                       transform: `translateY(${coinFloat * c.floatMult}px)`,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <svg width={c.size * 0.72} height={c.size * 0.72} viewBox="0 0 70 70" style={{ opacity: 0.82 }}>
//                       {[0, 60, 120, 180, 240, 300].map((deg, j) => (
//                         <ellipse key={j} cx="35" cy="20" rx="4" ry="7" fill="#7a4a10" opacity="0.7"
//                           transform={`rotate(${deg} 35 35)`} />
//                       ))}
//                       <circle cx="35" cy="35" r="8" fill="#7a4a10" opacity="0.65" />
//                       <text x="35" y="39" textAnchor="middle" fontSize="8" fill="#f5d887" fontFamily="serif">ॐ</text>
//                     </svg>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div style={{
//               display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
//               padding: "12px 16px", fontFamily: "Cinzel, serif", fontSize: 10,
//               letterSpacing: "0.18em", fontWeight: 600,
//               background: "linear-gradient(90deg, #6b0f27, #8b1a35, #6b0f27)",
//               color: "#f5d887", borderRadius: "0 0 10px 10px",
//             }}>
//               <span style={{ opacity: 0.6 }}>✦</span>
//               WEALTH YOU HOLD. LEGACY YOU LEAVE.
//               <span style={{ opacity: 0.6 }}>✦</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FooterCTA() {
//   const { ref, inView } = useInView();
//   return (
//     <section
//       ref={ref}
//       style={{
//         padding: "56px 24px",
//         textAlign: "center" as const,
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(24px)",
//         transition: "all 0.8s ease",
//       }}
//     >
//       <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 38, fontWeight: 600, color: "#5c2d0e", marginBottom: 4 }}>
//         Begin Your Golden Journey
//       </div>
//       <Divider />
//       <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, color: "#7a5030", fontWeight: 300, lineHeight: 1.8, maxWidth: 280, margin: "12px auto 28px" }}>
//         Every coin is a step toward timeless wealth. Invest with trust today.
//       </p>
//       <button
//         style={{
//           padding: "14px 40px", fontFamily: "Cinzel, serif", fontSize: 12, letterSpacing: "0.2em", fontWeight: 600,
//           background: "linear-gradient(135deg, #e8b84b, #c8933a, #a0681a)",
//           color: "#fff", border: "none", borderRadius: 100,
//           boxShadow: "0 6px 28px rgba(200,147,58,0.45)", cursor: "pointer",
//           transition: "transform 0.2s ease, box-shadow 0.2s ease",
//         }}
//         onMouseOver={e => { (e.target as HTMLElement).style.transform = "scale(1.05)"; }}
//         onMouseOut={e => { (e.target as HTMLElement).style.transform = "scale(1)"; }}
//       >
//         BUY NOW
//       </button>
//     </section>
//   );
// }

// export default function GoldCoinsPage() {
//   const [heroIn, setHeroIn] = useState(false);
//   const [coinFloat, setCoinFloat] = useState(0);

//   useEffect(() => {
//     const t1 = setTimeout(() => setHeroIn(true), 120);
//     let frame: number;
//     let t = 0;
//     const animate = () => {
//       t += 0.018;
//       setCoinFloat(Math.sin(t) * 9);
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => { clearTimeout(t1); cancelAnimationFrame(frame); };
//   }, []);

//   const features = [
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//           <path d="M16 4C8 4 4 10 4 16S8 28 16 28 28 22 28 16 24 4 16 4Z" stroke="#c8933a" strokeWidth="1.2" fill="none" />
//           <path d="M16 9L17.5 14H22L18.5 17L20 22L16 19L12 22L13.5 17L10 14H14.5Z" fill="#c8933a" opacity="0.9" />
//         </svg>
//       ),
//       title: "24K PURE GOLD",
//       desc: "Crafted in 24K (999) purity for true value and authenticity.",
//     },
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//           <path d="M16 4L6 8V18C6 23 10 27 16 29C22 27 26 23 26 18V8Z" stroke="#c8933a" strokeWidth="1.2" fill="none" />
//           <path d="M11 16L14 19L21 12" stroke="#c8933a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       ),
//       title: "HALLMARK ASSURED",
//       desc: "BIS hallmarked for guaranteed purity and trust.",
//     },
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//           <rect x="8" y="10" width="16" height="14" rx="2" stroke="#c8933a" strokeWidth="1.2" />
//           <path d="M12 10V8C12 6 14 5 16 5C18 5 20 6 20 8V10" stroke="#c8933a" strokeWidth="1.2" strokeLinecap="round" />
//           <circle cx="16" cy="17" r="2" fill="#c8933a" opacity="0.9" />
//         </svg>
//       ),
//       title: "PERFECT FOR EVERY OCCASION",
//       desc: "Ideal for gifting, celebrations, festivals and long-term wealth creation.",
//     },
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//           <rect x="5" y="22" width="4" height="6" rx="1" fill="#c8933a" opacity="0.5" />
//           <rect x="11" y="18" width="4" height="10" rx="1" fill="#c8933a" opacity="0.7" />
//           <rect x="17" y="13" width="4" height="15" rx="1" fill="#c8933a" opacity="0.85" />
//           <rect x="23" y="8" width="4" height="20" rx="1" fill="#c8933a" />
//           <path d="M7 20L13 16L19 11L25 6" stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round" />
//         </svg>
//       ),
//       title: "SMART INVESTMENT",
//       desc: "Gold coins hold timeless value and secure your financial future.",
//     },
//   ];

//   return (
//     <>
//       <FontLoader />
//       <style>{`
//         @keyframes shimmer { 0%{background-position:-200% center}100%{background-position:200% center} }
//         @keyframes glow-pulse {
//           0%,100%{box-shadow:0 0 20px rgba(232,184,75,0.3),0 0 40px rgba(200,147,58,0.15)}
//           50%{box-shadow:0 0 40px rgba(232,184,75,0.6),0 0 80px rgba(200,147,58,0.3)}
//         }
//         @keyframes sparkle-spin {
//           0%{transform:rotate(0deg) scale(1);opacity:0.6}
//           50%{transform:rotate(180deg) scale(1.3);opacity:1}
//           100%{transform:rotate(360deg) scale(1);opacity:0.6}
//         }
//         .shimmer-text {
//           background: linear-gradient(90deg,#8b4513 0%,#c8933a 30%,#f5d887 50%,#c8933a 70%,#8b4513 100%);
//           background-size:200% auto;
//           -webkit-background-clip:text;
//           -webkit-text-fill-color:transparent;
//           background-clip:text;
//           animation:shimmer 4s linear infinite;
//         }
//         .coin-glow{animation:glow-pulse 3s ease-in-out infinite}
//         .sparkle-1{animation:sparkle-spin 4s linear infinite}
//         .sparkle-2{animation:sparkle-spin 5.5s linear infinite reverse}
//         .sparkle-3{animation:sparkle-spin 6.5s linear infinite}
//       `}</style>

//       <div style={{ background: "linear-gradient(160deg,#fdf0e0 0%,#f8e0c8 40%,#fcebd8 100%)", minHeight: "100vh", fontFamily: "Cormorant Garamond, serif" }}>

//         {/* HERO */}
//         <section style={{ background: "linear-gradient(135deg,#fdf3e6 0%,#f5e0c3 50%,#fcebd8 100%)", borderBottom: "1px solid rgba(200,147,58,0.2)", position: "relative", overflow: "hidden" }}>
//           {/* Bg rings */}
//           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06 }}>
//             {[...Array(5)].map((_, i) => (
//               <div key={i} style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", border: "1px solid #c8933a", left: `${(i % 3) * 35}%`, top: `${Math.floor(i / 3) * 50}%`, transform: "translate(-50%,-50%)" }} />
//             ))}
//           </div>
//           {/* Sparkles */}
//           {[
//             { cls: "sparkle-1", top: "10%", left: "6%" },
//             { cls: "sparkle-2", top: "18%", right: "10%" },
//             { cls: "sparkle-3", bottom: "12%", left: "16%" },
//           ].map((s, i) => (
//             <div key={i} className={s.cls} style={{ position: "absolute", ...s }}>
//               <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1L9.2 6.5 14.5 8 9.2 9.5 8 15 6.8 9.5 1.5 8 6.8 6.5Z" fill="#e8b84b" /></svg>
//             </div>
//           ))}

//           <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap" as const, alignItems: "center", gap: 40 }}>
//             {/* Text */}
//             <div style={{ flex: "1 1 300px", opacity: heroIn ? 1 : 0, transform: heroIn ? "translateX(0)" : "translateX(-40px)", transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)" }}>
//               <div style={{ fontFamily: "Cinzel, serif", fontSize: 11, letterSpacing: "0.3em", color: "#9a5c2a", marginBottom: 6, fontWeight: 500 }}>GOLD COINS</div>
//               <Divider />
//               <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: "#5c2d0e", margin: "10px 0 16px" }}>
//                 Invest in <span className="shimmer-text" style={{ fontFamily: "Cormorant Garamond, serif" }}>Purity.</span><br />
//                 Celebrate <span className="shimmer-text" style={{ fontFamily: "Cormorant Garamond, serif" }}>Legacy.</span>
//               </h1>
//               <p style={{ fontFamily: "Lato, sans-serif", fontSize: 14, lineHeight: 1.8, color: "#6b4226", fontWeight: 300, maxWidth: 340, marginBottom: 28 }}>
//                 Our gold coins are more than just a symbol of wealth – they represent trust, tradition and timeless value. Crafted with precision and hallmarked for purity, they are the perfect blend of investment and emotion.
//               </p>
//               <button
//                 style={{ padding: "12px 32px", fontFamily: "Cinzel, serif", fontSize: 11, letterSpacing: "0.2em", fontWeight: 600, background: "linear-gradient(135deg,#e8b84b,#c8933a,#a0681a)", color: "#fff", border: "none", borderRadius: 100, boxShadow: "0 4px 20px rgba(200,147,58,0.4)", cursor: "pointer", transition: "transform 0.2s" }}
//                 onMouseOver={e => (e.target as HTMLElement).style.transform = "scale(1.05)"}
//                 onMouseOut={e => (e.target as HTMLElement).style.transform = "scale(1)"}
//               >
//                 EXPLORE COLLECTION
//               </button>
//             </div>

//             {/* Coin box */}
//             <div style={{ flex: "1 1 240px", display: "flex", justifyContent: "center", position: "relative" as const, opacity: heroIn ? 1 : 0, transform: heroIn ? "translateX(0)" : "translateX(40px)", transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.2s" }}>
//               <div
//                 className="coin-glow"
//                 style={{ position: "relative", width: 210, height: 210, borderRadius: 20, background: "linear-gradient(145deg,#8b1a35,#6b0f27,#4a0a1a)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(200,147,58,0.4)" }}
//               >
//                 <div style={{ position: "absolute", top: 14, right: 18, fontFamily: "Cinzel, serif", fontSize: 17, fontWeight: 700, color: "#e8b84b", letterSpacing: "0.05em" }}>SJ</div>
//                 <div style={{ transform: `translateY(${coinFloat}px)`, transition: "transform 0.05s ease-out" }}>
//                   <div style={{ width: 128, height: 128, borderRadius: "50%", background: "radial-gradient(circle at 38% 35%,#f5d887,#e8b84b 40%,#b8790a 100%)", border: "3px solid #c8933a", boxShadow: "0 8px 30px rgba(0,0,0,0.4),inset 0 2px 6px rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <svg width="88" height="88" viewBox="0 0 90 90" style={{ opacity: 0.85 }}>
//                       <circle cx="45" cy="45" r="40" fill="none" stroke="#7a4a10" strokeWidth="1" />
//                       <circle cx="45" cy="45" r="33" fill="none" stroke="#7a4a10" strokeWidth="0.5" />
//                       {[0,60,120,180,240,300].map((deg, j) => <ellipse key={j} cx="45" cy="28" rx="5" ry="9" fill="#7a4a10" opacity="0.6" transform={`rotate(${deg} 45 45)`} />)}
//                       <circle cx="45" cy="45" r="9" fill="#7a4a10" opacity="0.7" />
//                       <text x="45" y="49" textAnchor="middle" fontSize="9" fill="#f5d887" fontFamily="serif">ॐ</text>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               {/* Side coins */}
//               {[
//                 { size: 44, left: -56, top: 70, deg: -15, mult: 0.5 },
//                 { size: 34, left: -78, top: 110, deg: 10, mult: 0.4 },
//                 { size: 50, left: 160, top: 90, deg: 20, mult: 0.6 },
//               ].map((c, i) => (
//                 <div key={i} style={{ position: "absolute", width: c.size, height: c.size, borderRadius: "50%", background: "radial-gradient(circle at 38% 35%,#f5d887,#e8b84b 40%,#b8790a 100%)", border: "2px solid #c8933a", left: c.left, top: c.top, transform: `rotate(${c.deg}deg) translateY(${coinFloat * c.mult}px)`, boxShadow: "0 4px 14px rgba(0,0,0,0.3)", opacity: heroIn ? 1 : 0, transition: `all 0.8s ease ${0.4 + i * 0.15}s` }} />
//               ))}
//             </div>
//           </div>

//           {/* Stats bar */}
//           <div style={{ display: "flex", justifyContent: "center", gap: 48, padding: "18px 24px", borderTop: "1px solid rgba(200,147,58,0.15)", background: "rgba(255,255,255,0.3)", flexWrap: "wrap" as const }}>
//             {[
//               { val: 999, suffix: "", label: "Purity (‰)" },
//               { val: 50, suffix: "+", label: "Years Legacy" },
//               { val: 100, suffix: "K+", label: "Happy Customers" },
//             ].map((s, i) => (
//               <div key={i} style={{ textAlign: "center" as const }}>
//                 <div className="shimmer-text" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 26, fontWeight: 700 }}>
//                   <Counter target={s.val} suffix={s.suffix} />
//                 </div>
//                 <div style={{ fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.2em", color: "#9a5c2a", marginTop: 2 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* FEATURES */}
//         <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
//             {features.map((f, i) => <FeatureCard key={i} {...f} delay={i * 120} />)}
//           </div>
//         </section>

//         {/* WHY SJ */}
//         <WhySection coinFloat={coinFloat} />

//         {/* FOOTER CTA */}
//         <FooterCTA />
//       </div>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
};

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.1);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#c8933a]" />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <circle cx="5" cy="5" r="2" fill="#c8933a" />
        <circle cx="5" cy="5" r="4" fill="none" stroke="#c8933a" strokeWidth="0.8" />
      </svg>
      <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#c8933a]" />
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white/60 backdrop-blur-sm border border-[rgba(200,147,58,0.2)] rounded-xl p-5 flex flex-col items-center text-center shadow-[0_2px_18px_rgba(180,120,20,0.07)] transition-all duration-700 ease-out`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="mb-3 text-[#7a3a2a]">{icon}</div>
      <div className="font-['Cinzel',serif] text-[11px] tracking-[0.2em] font-semibold text-[#7a3a2a] mb-1.5">
        {title}
      </div>
      <p className="font-['Lato',sans-serif] text-xs leading-relaxed text-[#5c3d2e] font-light">
        {desc}
      </p>
    </div>
  );
}

function StepItem({ num, title, desc, delay }: { num: string; title: string; desc: string; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`flex gap-4 items-start transition-all duration-700 ease-out`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex-shrink-0 w-[42px] h-[42px] rounded-lg bg-gradient-to-br from-[#f5d887] to-[#c8933a] text-[#3d1a08] flex items-center justify-center font-['Cinzel',serif] text-[13px] font-bold shadow-[0_2px_14px_rgba(200,147,58,0.35)] border border-white/40">
        {num}
      </div>
      <div>
        <div className="font-['Cinzel',serif] text-[11px] tracking-[0.18em] font-semibold text-[#7a3a2a] mb-1">
          {title}
        </div>
        <p className="font-['Lato',sans-serif] text-[13px] leading-relaxed text-[#5c3d2e] font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

function WhySection({ coinFloat }: { coinFloat: number }) {
  const { ref: titleRef, inView: titleIn } = useInView();
  const { ref: imgRef, inView: imgIn } = useInView();

  const steps = [
    { num: "01", title: "BACKED BY TRUST", desc: "From a legacy of fine jewellery craftsmanship that generations have trusted." },
    { num: "02", title: "CERTIFIED AUTHENTICITY", desc: "Every coin is BIS hallmarked and comes with assured buyback value." },
    { num: "03", title: "BEAUTY WITH SECURITY", desc: "Elegant designs that celebrate tradition while securing your tomorrow." },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f5e8d0] to-[#ede0cc] border-y border-[rgba(200,147,58,0.2)]">
      <div className="max-w-[900px] mx-auto px-6 py-16 flex flex-wrap gap-12 items-center">
        {/* Steps */}
        <div className="flex-1 min-w-[280px]">
          <div
            ref={titleRef}
            className="text-[34px] font-['Cormorant_Garamond',serif] font-semibold text-[#5c2d0e] mb-1 leading-tight transition-all duration-800"
            style={{
              opacity: titleIn ? 1 : 0,
              transform: titleIn ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Why Gold Coins from{" "}
            <span className="shimmer-text font-['Cormorant_Garamond',serif]">SJ Jewels?</span>
          </div>
          <Divider />
          <div className="flex flex-col gap-7 mt-6 relative">
            <div className="absolute left-5 top-1.5 bottom-1.5 w-px bg-gradient-to-b from-[#e8b84b] to-transparent opacity-40" />
            {steps.map((s, i) => <StepItem key={i} {...s} delay={i * 180} />)}
          </div>
        </div>

        {/* Coin image */}
        <div
          ref={imgRef}
          className="flex-1 min-w-[240px] flex justify-center transition-all duration-900 cubic-bezier(0.22,1,0.36,1) delay-200"
          style={{
            opacity: imgIn ? 1 : 0,
            transform: imgIn ? "scale(1)" : "scale(0.88)",
          }}
        >
          <div>
            <div className="w-[250px] bg-gradient-to-br from-[#f8e8cc] to-[#f0d8b8] border border-[rgba(200,147,58,0.3)] p-6 pt-0 shadow-[0_8px_40px_rgba(150,90,20,0.12)] rounded-t-[140px]">
              <div className="h-[180px] relative flex justify-center">
                {[
                  { size: 108, offsetX: -28, offsetY: 18, floatMult: 1, zIndex: 2 },
                  { size: 86, offsetX: 28, offsetY: 38, floatMult: 0.7, zIndex: 1 },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border-2 border-[#c8933a] shadow-[0_6px_24px_rgba(0,0,0,0.25),inset_0_2px_5px_rgba(255,255,255,0.25)] flex items-center justify-center bg-gradient-radial from-[#f8e89a] via-[#e8b84b] to-[#b07010]"
                    style={{
                      width: c.size,
                      height: c.size,
                      left: `calc(50% + ${c.offsetX}px - ${c.size / 2}px)`,
                      top: c.offsetY,
                      zIndex: c.zIndex,
                      transform: `translateY(${coinFloat * c.floatMult}px)`,
                    }}
                  >
                    <svg width={c.size * 0.72} height={c.size * 0.72} viewBox="0 0 70 70" className="opacity-80">
                      {[0, 60, 120, 180, 240, 300].map((deg, j) => (
                        <ellipse key={j} cx="35" cy="20" rx="4" ry="7" fill="#7a4a10" opacity="0.7"
                          transform={`rotate(${deg} 35 35)`} />
                      ))}
                      <circle cx="35" cy="35" r="8" fill="#7a4a10" opacity="0.65" />
                      <text x="35" y="39" textAnchor="middle" fontSize="8" fill="#f5d887" fontFamily="serif">ॐ</text>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 font-['Cinzel',serif] text-[10px] tracking-[0.18em] font-semibold bg-gradient-to-r from-[#6b0f27] via-[#8b1a35] to-[#6b0f27] text-[#f5d887] rounded-b-lg">
              <span className="opacity-60">✦</span>
              WEALTH YOU HOLD. LEGACY YOU LEAVE.
              <span className="opacity-60">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref}
      className="py-14 px-6 text-center transition-all duration-800"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="font-['Cormorant_Garamond',serif] text-[38px] font-semibold text-[#5c2d0e] mb-1">
        Begin Your Golden Journey
      </div>
      <Divider />
      <p className="font-['Lato',sans-serif] text-[13px] text-[#7a5030] font-light leading-relaxed max-w-[280px] mx-auto mt-3 mb-7">
        Every coin is a step toward timeless wealth. Invest with trust today.
      </p>
      <button
        className="px-10 py-3.5 font-['Cinzel',serif] text-xs tracking-[0.2em] font-semibold text-white bg-gradient-to-br from-[#e8b84b] via-[#c8933a] to-[#260305] rounded-full shadow-[0_6px_28px_rgba(200,147,58,0.45)] cursor-pointer transition-transform duration-200 hover:scale-105"
      >
        BUY NOW
      </button>
    </section>
  );
}

export default function GoldCoinsPage() {
  const [heroIn, setHeroIn] = useState(false);
  const [coinFloat, setCoinFloat] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroIn(true), 120);
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.018;
      setCoinFloat(Math.sin(t) * 9);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { clearTimeout(t1); cancelAnimationFrame(frame); };
  }, []);

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C8 4 4 10 4 16S8 28 16 28 28 22 28 16 24 4 16 4Z" stroke="#c8933a" strokeWidth="1.2" fill="none" />
          <path d="M16 9L17.5 14H22L18.5 17L20 22L16 19L12 22L13.5 17L10 14H14.5Z" fill="#c8933a" opacity="0.9" />
        </svg>
      ),
      title: "24K PURE GOLD",
      desc: "Crafted in 24K (999) purity for true value and authenticity.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 8V18C6 23 10 27 16 29C22 27 26 23 26 18V8Z" stroke="#c8933a" strokeWidth="1.2" fill="none" />
          <path d="M11 16L14 19L21 12" stroke="#c8933a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "HALLMARK ASSURED",
      desc: "BIS hallmarked for guaranteed purity and trust.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="10" width="16" height="14" rx="2" stroke="#c8933a" strokeWidth="1.2" />
          <path d="M12 10V8C12 6 14 5 16 5C18 5 20 6 20 8V10" stroke="#c8933a" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="16" cy="17" r="2" fill="#c8933a" opacity="0.9" />
        </svg>
      ),
      title: "PERFECT FOR EVERY OCCASION",
      desc: "Ideal for gifting, celebrations, festivals and long-term wealth creation.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="5" y="22" width="4" height="6" rx="1" fill="#c8933a" opacity="0.5" />
          <rect x="11" y="18" width="4" height="10" rx="1" fill="#c8933a" opacity="0.7" />
          <rect x="17" y="13" width="4" height="15" rx="1" fill="#c8933a" opacity="0.85" />
          <rect x="23" y="8" width="4" height="20" rx="1" fill="#c8933a" />
          <path d="M7 20L13 16L19 11L25 6" stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "SMART INVESTMENT",
      desc: "Gold coins hold timeless value and secure your financial future.",
    },
  ];

  return (
    <>
      <FontLoader />
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes glow-pulse {
          0%,100%{box-shadow:0 0 20px rgba(232,184,75,0.3),0 0 40px rgba(200,147,58,0.15)}
          50%{box-shadow:0 0 40px rgba(232,184,75,0.6),0 0 80px rgba(200,147,58,0.3)}
        }
        @keyframes sparkle-spin {
          0%{transform:rotate(0deg) scale(1);opacity:0.6}
          50%{transform:rotate(180deg) scale(1.3);opacity:1}
          100%{transform:rotate(360deg) scale(1);opacity:0.6}
        }
        .shimmer-text {
          background: linear-gradient(90deg,#8b4513 0%,#c8933a 30%,#f5d887 50%,#c8933a 70%,#8b4513 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 4s linear infinite;
        }
        .coin-glow{animation:glow-pulse 3s ease-in-out infinite}
        .sparkle-1{animation:sparkle-spin 4s linear infinite}
        .sparkle-2{animation:sparkle-spin 5.5s linear infinite reverse}
        .sparkle-3{animation:sparkle-spin 6.5s linear infinite}
        .bg-gradient-radial {
          background-image: radial-gradient(circle at 35% 32%, #f8e89a, #e8b84b 38%, #b07010 100%);
        }
      `}</style>

      <div className="bg-gradient-to-br from-[#fdf0e0] via-[#f8e0c8] to-[#fcebd8] min-h-screen font-['Cormorant_Garamond',serif]">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#fdf3e6] via-[#f5e0c3] to-[#fcebd8] border-b border-[rgba(200,147,58,0.2)] relative overflow-hidden">
          {/* Bg rings */}
          <div className="absolute inset-0 pointer-events-none opacity-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute w-[200px] h-[200px] rounded-full border border-[#c8933a]" style={{ left: `${(i % 3) * 35}%`, top: `${Math.floor(i / 3) * 50}%`, transform: "translate(-50%,-50%)" }} />
            ))}
          </div>
          {/* Sparkles */}
          {[
            { cls: "sparkle-1", top: "10%", left: "6%" },
            { cls: "sparkle-2", top: "18%", right: "10%" },
            { cls: "sparkle-3", bottom: "12%", left: "16%" },
          ].map((s, i) => (
            <div key={i} className={`${s.cls} absolute`} style={s}>
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1L9.2 6.5 14.5 8 9.2 9.5 8 15 6.8 9.5 1.5 8 6.8 6.5Z" fill="#e8b84b" /></svg>
            </div>
          ))}

          <div className="max-w-[900px] mx-auto px-6 py-14 flex flex-wrap items-center gap-10">
            {/* Text */}
            <div className="flex-1 min-w-[300px] transition-all duration-900 cubic-bezier(0.22,1,0.36,1)" style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? "translateX(0)" : "translateX(-40px)" }}>
              <div className="font-['Cinzel',serif] text-[11px] tracking-[0.3em] text-[#9a5c2a] mb-1.5 font-medium">GOLD COINS</div>
              <Divider />
              <h1 className="font-['Cormorant_Garamond',serif] text-[52px] font-bold leading-[1.1] text-[#5c2d0e] my-2.5">
                Invest in <span className="shimmer-text font-['Cormorant_Garamond',serif]">Purity.</span><br />
                Celebrate <span className="shimmer-text font-['Cormorant_Garamond',serif]">Legacy.</span>
              </h1>
              <p className="font-['Lato',sans-serif] text-sm leading-relaxed text-[#6b4226] font-light max-w-[340px] mb-7">
                Our gold coins are more than just a symbol of wealth – they represent trust, tradition and timeless value. Crafted with precision and hallmarked for purity, they are the perfect blend of investment and emotion.
              </p>
              {/* <button className="px-8 py-3 font-['Cinzel',serif] text-[11px] tracking-[0.2em] font-semibold text-white bg-gradient-to-br from-[#e8b84b] via-[#c8933a] to-[#a0681a] rounded-full shadow-[0_4px_20px_rgba(200,147,58,0.4)] cursor-pointer transition-transform duration-200 hover:scale-105">
                EXPLORE COLLECTION
              </button> */}
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
          
              
                <span className="relative z-10">Discover Our Legacy</span>
           
                <span
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                  style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                />
              </motion.button>
            </motion.div>
            </div>

            {/* Coin box */}
            <div className="flex-1 min-w-[240px] flex justify-center relative transition-all duration-1000 cubic-bezier(0.22,1,0.36,1) delay-200" style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? "translateX(0)" : "translateX(40px)" }}>
              <div className="coin-glow relative w-[210px] h-[210px] rounded-3xl bg-gradient-to-br from-[#8b1a35] via-[#6b0f27] to-[#4a0a1a] flex items-center justify-center border-2 border-[rgba(200,147,58,0.4)]">
                <div className="absolute top-3.5 right-[18px] font-['Cinzel',serif] text-[17px] font-bold text-[#e8b84b] tracking-[0.05em]">SJ</div>
                <div className="transition-transform duration-[0.05s] ease-out" style={{ transform: `translateY(${coinFloat}px)` }}>
                  <div className="w-[128px] h-[128px] rounded-full bg-gradient-radial border-3 border-[#c8933a] shadow-[0_8px_30px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(255,255,255,0.3)] flex items-center justify-center">
                    <svg width="88" height="88" viewBox="0 0 90 90" className="opacity-85">
                      <circle cx="45" cy="45" r="40" fill="none" stroke="#7a4a10" strokeWidth="1" />
                      <circle cx="45" cy="45" r="33" fill="none" stroke="#7a4a10" strokeWidth="0.5" />
                      {[0,60,120,180,240,300].map((deg, j) => <ellipse key={j} cx="45" cy="28" rx="5" ry="9" fill="#7a4a10" opacity="0.6" transform={`rotate(${deg} 45 45)`} />)}
                      <circle cx="45" cy="45" r="9" fill="#7a4a10" opacity="0.7" />
                      <text x="45" y="49" textAnchor="middle" fontSize="9" fill="#f5d887" fontFamily="serif">ॐ</text>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Side coins */}
              {[
                { size: 44, left: -56, top: 70, deg: -15, mult: 0.5 },
                { size: 34, left: -78, top: 110, deg: 10, mult: 0.4 },
                { size: 50, left: 160, top: 90, deg: 20, mult: 0.6 },
              ].map((c, i) => (
                <div key={i} className="absolute rounded-full bg-gradient-radial border-2 border-[#c8933a] shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition-all duration-800" style={{ width: c.size, height: c.size, left: c.left, top: c.top, transform: `rotate(${c.deg}deg) translateY(${coinFloat * c.mult}px)`, opacity: heroIn ? 1 : 0, transitionDelay: `${0.4 + i * 0.15}s` }} />
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="flex justify-center gap-12 px-6 py-4 border-t border-[rgba(200,147,58,0.15)] bg-white/30 flex-wrap">
            {[
              { val: 999, suffix: "", label: "Purity (‰)" },
              { val: 50, suffix: "+", label: "Years Legacy" },
              { val: 100, suffix: "K+", label: "Happy Customers" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="shimmer-text font-['Cormorant_Garamond',serif] text-[26px] font-bold">
                  <Counter target={s.val} suffix={s.suffix} />
                </div>
                <div className="font-['Cinzel',serif] text-[10px] tracking-[0.2em] text-[#9a5c2a] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-[900px] mx-auto px-6 py-14">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {features.map((f, i) => <FeatureCard key={i} {...f} delay={i * 120} />)}
          </div>
        </section>

        {/* WHY SJ */}
        {/* <WhySection coinFloat={coinFloat} /> */}

        {/* FOOTER CTA */}
        {/* <FooterCTA /> */}
      </div>
    </>
  );
}