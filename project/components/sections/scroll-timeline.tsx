


// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";

// // ─── Inline cn utility ───────────────────────────────────────────────────────
// function cn(...classes: (string | undefined | null | false)[]) {
//   return classes.filter(Boolean).join(" ");
// }

// // ─── Inline Card components ───────────────────────────────────────────────────
// const Card = ({ className, children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
//   <div className={cn("rounded-xl overflow-hidden", className)} style={style}>{children}</div>
// );

// const CardContent = ({ className, children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) => (
//   <div className={cn("p-6", className)} style={style}>{children}</div>
// );

// // ─── Types ────────────────────────────────────────────────────────────────────
// export interface TimelineEvent {
//   id?: string;
//   year: string;
//   title: string;
//   subtitle?: string;
//   description: string;
//   icon?: React.ReactNode;
//   color?: string;
// }

// export interface ScrollTimelineProps {
//   events?: TimelineEvent[];
//   title?: string;
//   subtitle?: string;
//   animationOrder?: "sequential" | "staggered" | "simultaneous";
//   cardAlignment?: "alternating" | "left" | "right";
//   progressIndicator?: boolean;
//   cardVariant?: "default" | "elevated" | "outlined" | "filled";
//   cardEffect?: "none" | "glow" | "shadow" | "bounce";
//   parallaxIntensity?: number;
//   progressLineWidth?: number;
//   progressLineCap?: "round" | "square";
//   dateFormat?: "text" | "badge";
//   className?: string;
//   revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
//   connectorStyle?: "dots" | "line" | "dashed";
//   perspective?: boolean;
//   smoothScroll?: boolean;
// }

// // ─── Default events ───────────────────────────────────────────────────────────
// const DEFAULT_EVENTS: TimelineEvent[] = [
//   {
//     year: "1975",
//     title: "Foundation of SJ Jewels",
//     subtitle: "Mumbai, India",
//     description:
//       "SJ Jewels was established with a single vision — crafting jewellery that celebrates the timeless beauty of gold and the trust of generations.",
//   },
//   {
//     year: "1988",
//     title: "BIS Hallmarking Pioneer",
//     subtitle: "Certified Excellence",
//     description:
//       "Among the first jewellers to adopt BIS hallmarking standards, reinforcing our lifelong commitment to purity and authenticity.",
//   },
//   {
//     year: "2001",
//     title: "Gold Coin Collection Launch",
//     subtitle: "Investment & Tradition",
//     description:
//       "Launched our signature 24K pure gold coin range — blending investment value with sacred Lakshmi motifs cherished across generations.",
//   },
//   {
//     year: "2010",
//     title: "Pan-India Expansion",
//     subtitle: "50+ Showrooms",
//     description:
//       "Expanded to over 50 showrooms across India, bringing the legacy of fine jewellery craftsmanship closer to every family.",
//   },
//   {
//     year: "2024",
//     title: "Digital Gold Platform",
//     subtitle: "Modern Heritage",
//     description:
//       "Launched our digital gold investment platform, making certified gold coins and jewellery accessible to 100,000+ customers nationwide.",
//   },
// ];

// // ─── Jewellery theme tokens ───────────────────────────────────────────────────
// const GOLD = "#c8933a";
// const GOLD_LIGHT = "#f5d887";
// const GOLD_PALE = "#e8b84b";
// const MAROON = "#6b0f27";
// const MAROON_MID = "#8b1a35";
// const CREAM = "#fdf3e6";
// const CREAM_DARK = "#f0d8b8";
// const TEXT_DARK = "#3d1208";
// const TEXT_MID = "#6b4226";
// const TEXT_LIGHT = "#9a5c2a";

// // ─── Sparkle SVG ─────────────────────────────────────────────────────────────
// const SparkleIcon = ({ size = 14 }: { size?: number }) => (
//   <svg width={size} height={size} viewBox="0 0 14 14">
//     <path
//       d="M7 0.5L8.2 5.5 13 7 8.2 8.5 7 13.5 5.8 8.5 1 7 5.8 5.5Z"
//       fill={GOLD_PALE}
//     />
//   </svg>
// );

// // ─── Calendar icon ────────────────────────────────────────────────────────────
// const CalendarIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="4" width="18" height="18" rx="2" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//   </svg>
// );

// // ─── Decorative divider ───────────────────────────────────────────────────────
// const Divider = () => (
//   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "8px 0" }}>
//     <div style={{ width: 48, height: 1, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
//     <svg width="10" height="10" viewBox="0 0 10 10">
//       <circle cx="5" cy="5" r="2" fill={GOLD} />
//       <circle cx="5" cy="5" r="4" fill="none" stroke={GOLD} strokeWidth="0.8" />
//     </svg>
//     <div style={{ width: 48, height: 1, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
//   </div>
// );

// // ─── Main Component ───────────────────────────────────────────────────────────
// export const ScrollTimeline = ({
//   events = DEFAULT_EVENTS,
//   title = "Our Golden Legacy",
//   subtitle = "A journey of trust, purity and timeless craftsmanship",
//   animationOrder = "sequential",
//   cardAlignment = "alternating",
//   progressIndicator = true,
//   cardVariant = "default",
//   cardEffect = "shadow",
//   parallaxIntensity = 0.15,
//   progressLineWidth = 3,
//   progressLineCap = "round",
//   dateFormat = "badge",
//   revealAnimation = "slide",
//   className = "",
//   connectorStyle = "line",
//   perspective = false,
//   smoothScroll = true,
// }: ScrollTimelineProps) => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // ── Mobile detection ──────────────────────────────────────────────────────
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const newIndex = Math.floor(v * events.length);
//       if (newIndex !== activeIndex && newIndex >= 0 && newIndex < events.length) {
//         setActiveIndex(newIndex);
//       }
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress, events.length, activeIndex]);

//   const getCardVariants = (index: number) => {
//     const baseDelay =
//       animationOrder === "simultaneous" ? 0
//       : animationOrder === "staggered" ? index * 0.2
//       : index * 0.3;

//     // Mobile pe sab cards left se slide karein
//     const side = isMobile
//       ? -60
//       : cardAlignment === "left" ? -100
//       : cardAlignment === "right" ? 100
//       : index % 2 === 0 ? -100 : 100;

//     const initialStates: Record<string, object> = {
//       fade: { opacity: 0, y: 24 },
//       slide: { x: side, opacity: 0 },
//       scale: { scale: 0.82, opacity: 0 },
//       flip: { rotateY: 90, opacity: 0 },
//       none: { opacity: 1 },
//     };

//     return {
//       initial: initialStates[revealAnimation],
//       whileInView: {
//         opacity: 1, y: 0, x: 0, scale: 1, rotateY: 0,
//         transition: {
//           duration: 0.75,
//           delay: baseDelay,
//           ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
//         },
//       },
//       viewport: { once: false, margin: "-100px" },
//     };
//   };

//   const getConnectorStyle = (): React.CSSProperties => {
//     // Mobile: line left pe, Desktop: line center pe
//     const leftPos = isMobile ? "20px" : "50%";
//     const transform = isMobile ? "none" : "translateX(-50%)";

//     const base: React.CSSProperties = {
//       position: "absolute",
//       left: leftPos,
//       transform: transform,
//       width: progressLineWidth,
//       top: 0,
//       height: "100%",
//       background: `rgba(200,147,58,0.18)`,
//       zIndex: 10,
//     };
//     if (connectorStyle === "dots") return { ...base, borderRadius: 99 };
//     if (connectorStyle === "dashed") return {
//       ...base,
//       background: "none",
//       borderLeft: `${progressLineWidth}px dashed rgba(200,147,58,0.3)`,
//     };
//     return { ...base, borderRadius: progressLineCap === "round" ? 99 : 0 };
//   };

//   const getCardEffect = (): React.CSSProperties => {
//     if (cardEffect === "glow") return { boxShadow: `0 0 20px rgba(200,147,58,0.25)` };
//     if (cardEffect === "shadow") return { boxShadow: `0 4px 28px rgba(100,50,10,0.12)` };
//     return {};
//   };

//   const getCardBg = (): React.CSSProperties => {
//     if (cardVariant === "outlined") return { background: "rgba(253,243,230,0.6)", backdropFilter: "blur(8px)", border: `1.5px solid rgba(200,147,58,0.35)` };
//     if (cardVariant === "filled") return { background: `rgba(200,147,58,0.08)`, border: `1px solid rgba(200,147,58,0.3)` };
//     if (cardVariant === "elevated") return { background: CREAM, border: `1px solid rgba(200,147,58,0.2)`, boxShadow: "0 6px 30px rgba(100,50,10,0.1)" };
//     return { background: CREAM, border: `1px solid rgba(200,147,58,0.22)` };
//   };

//   // Desktop alignment — mobile pe yeh ignore hoga
//   const desktopAlignmentStyle = (index: number): React.CSSProperties => {
//     if (cardAlignment === "alternating") {
//       return index % 2 === 0
//         ? { marginRight: "calc(50% + 48px)" }
//         : { marginLeft: "calc(50% + 48px)" };
//     }
//     if (cardAlignment === "left") return { marginRight: "auto", maxWidth: "46%" };
//     return { marginLeft: "auto", maxWidth: "46%" };
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400&display=swap');

//         @keyframes shimmer {
//           0%{background-position:-200% center}
//           100%{background-position:200% center}
//         }
//         @keyframes gold-pulse {
//           0%,100%{box-shadow:0 0 0 0 rgba(200,147,58,0.4)}
//           50%{box-shadow:0 0 0 6px rgba(200,147,58,0)}
//         }
//         .shimmer-text {
//           background: linear-gradient(90deg,#8b4513 0%,${GOLD} 28%,${GOLD_LIGHT} 50%,${GOLD} 72%,#8b4513 100%);
//           background-size:200% auto;
//           -webkit-background-clip:text;
//           -webkit-text-fill-color:transparent;
//           background-clip:text;
//           animation:shimmer 4s linear infinite;
//         }
//         .dot-pulse { animation: gold-pulse 2s ease-in-out infinite; }
//         .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
//         .card-hover:hover { transform: translateY(-4px); }

//         /* ── Mobile layout ── */
//         @media (max-width: 767px) {
//           .timeline-row {
//             flex-direction: column !important;
//             align-items: flex-start !important;
//             padding-left: 44px !important;
//           }
//           .timeline-dot {
//             left: 20px !important;
//             top: 24px !important;
//             transform: translate(-50%, 0) !important;
//           }
//           .timeline-year-label {
//             display: none !important;
//           }
//           .timeline-card {
//             width: 100% !important;
//             margin-left: 0 !important;
//             margin-right: 0 !important;
//             max-width: 100% !important;
//           }
//           .progress-line {
//             left: 20px !important;
//             transform: none !important;
//           }
//           .connector-line {
//             left: 20px !important;
//             transform: none !important;
//           }
//           .comet-head {
//             left: 20px !important;
//           }
//         }
//       `}</style>

//       <div
//         ref={scrollRef}
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           width: "100%",
//           overflow: "hidden",
//           background: `linear-gradient(160deg, #fdf0e0 0%, #f8e0c8 40%, #fcebd8 100%)`,
//           fontFamily: "Cormorant Garamond, serif",
//         }}
//         className={className}
//       >
//         {/* ── Header ── */}
//         <div style={{ textAlign: "center", padding: "64px 24px 48px" }}>
//           <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
//             <SparkleIcon size={16} />
//             <div style={{ width: 60, height: 1, background: `linear-gradient(to right, transparent, ${GOLD})`, margin: "auto 10px" }} />
//             <SparkleIcon size={22} />
//             <div style={{ width: 60, height: 1, background: `linear-gradient(to left, transparent, ${GOLD})`, margin: "auto 10px" }} />
//             <SparkleIcon size={16} />
//           </div>

//           <div style={{ fontFamily: "Cinzel, serif", fontSize: 11, letterSpacing: "0.3em", color: TEXT_LIGHT, marginBottom: 8, fontWeight: 500 }}>
//             EST. 1975 · SJ JEWELS
//           </div>

//           <h2
//             className="shimmer-text"
//             style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 10 }}
//           >
//             {title}
//           </h2>

//           <Divider />

//           <p style={{ fontFamily: "Lato, sans-serif", fontSize: 15, color: TEXT_MID, fontWeight: 300, maxWidth: 480, margin: "10px auto 0", lineHeight: 1.8 }}>
//             {subtitle}
//           </p>
//         </div>

//         {/* ── Timeline Body ── */}
//         <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", padding: "0 16px 96px" }}>
//           <div style={{ position: "relative" }}>

//             {/* Background connector line */}
//             <div className="connector-line" style={getConnectorStyle()} />

//             {/* Gold progress line */}
//             {progressIndicator && (
//               <>
//                 <motion.div
//                   className="progress-line"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: isMobile ? "20px" : "50%",
//                     translateX: isMobile ? "-50%" : "-50%",
//                     height: progressHeight,
//                     width: progressLineWidth,
//                     borderRadius: progressLineCap === "round" ? 99 : 0,
//                     background: `linear-gradient(to bottom, ${GOLD_LIGHT}, ${GOLD}, ${MAROON_MID})`,
//                     boxShadow: `0 0 12px rgba(200,147,58,0.45), 0 0 28px rgba(200,147,58,0.2)`,
//                     zIndex: 11,
//                   }}
//                 />
//                 {/* Traveling comet head */}
//                 <motion.div
//                   className="comet-head"
//                   style={{
//                     position: "absolute",
//                     left: isMobile ? "20px" : "50%",
//                     top: progressHeight,
//                     translateX: "-50%",
//                     translateY: "-50%",
//                     zIndex: 22,
//                   }}
//                 >
//                   <motion.div
//                     style={{
//                       width: 20,
//                       height: 20,
//                       borderRadius: "50%",
//                       background: `radial-gradient(circle, ${GOLD_LIGHT} 0%, ${GOLD} 40%, transparent 70%)`,
//                       boxShadow: `0 0 14px 5px rgba(200,147,58,0.65), 0 0 28px 10px rgba(200,147,58,0.3), 0 0 50px 18px rgba(200,147,58,0.12)`,
//                     }}
//                     animate={{ scale: [1, 1.35, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                   />
//                 </motion.div>
//               </>
//             )}

//             {/* Events */}
//             <div style={{ position: "relative", zIndex: 20 }}>
//               {events.map((event, index) => {
//                 const yOffset = useTransform(
//                   smoothProgress,
//                   [0, 1],
//                   [parallaxIntensity * 80, -parallaxIntensity * 80]
//                 );

//                 const isLeft = cardAlignment === "alternating"
//                   ? index % 2 === 0
//                   : cardAlignment === "left";

//                 return (
//                   <div
//                     key={event.id || index}
//                     ref={(el) => { timelineRefs.current[index] = el; }}
//                     className="timeline-row"
//                     style={{
//                       position: "relative",
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: 80,
//                       paddingTop: 16,
//                       paddingBottom: 16,
//                       flexDirection: "row",
//                     }}
//                   >
//                     {/* ── Timeline dot ── */}
//                     <div
//                       className="timeline-dot"
//                       style={{
//                         position: "absolute",
//                         left: "50%",
//                         top: "50%",
//                         transform: "translate(-50%, -50%)",
//                         zIndex: 30,
//                       }}
//                     >
//                       {/* Mobile: year badge shown next to dot */}
//                       {isMobile && (
//                         <div style={{
//                           position: "absolute",
//                           left: 28,
//                           top: "50%",
//                           transform: "translateY(-50%)",
//                           whiteSpace: "nowrap",
//                         }}>
//                           <span style={{
//                             fontFamily: "Cinzel, serif",
//                             fontSize: 10,
//                             letterSpacing: "0.18em",
//                             color: TEXT_LIGHT,
//                             fontWeight: 700,
//                             background: `rgba(253,243,230,0.95)`,
//                             padding: "2px 8px",
//                             borderRadius: 99,
//                             border: `1px solid rgba(200,147,58,0.35)`,
//                           }}>
//                             {event.year}
//                           </span>
//                         </div>
//                       )}

//                       <motion.div
//                         className={index <= activeIndex ? "dot-pulse" : ""}
//                         style={{
//                           width: 22,
//                           height: 22,
//                           borderRadius: "50%",
//                           background: index <= activeIndex
//                             ? `radial-gradient(circle, ${GOLD_LIGHT}, ${GOLD})`
//                             : CREAM_DARK,
//                           border: `3px solid ${index <= activeIndex ? GOLD : "rgba(200,147,58,0.3)"}`,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           boxShadow: index <= activeIndex
//                             ? `0 0 0 4px rgba(200,147,58,0.15)`
//                             : "none",
//                           transition: "all 0.4s ease",
//                         }}
//                       >
//                         {index <= activeIndex && (
//                           <div style={{ width: 6, height: 6, borderRadius: "50%", background: MAROON }} />
//                         )}
//                       </motion.div>
//                     </div>

//                     {/* ── Year label — Desktop only (hidden on mobile via CSS) ── */}
//                     <div
//                       className="timeline-year-label"
//                       style={{
//                         position: "absolute",
//                         left: isLeft ? "calc(50% + 36px)" : "auto",
//                         right: isLeft ? "auto" : "calc(50% + 36px)",
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                         zIndex: 15,
//                         textAlign: isLeft ? "left" : "right",
//                       }}
//                     >
//                       <span style={{
//                         fontFamily: "Cinzel, serif",
//                         fontSize: 11,
//                         letterSpacing: "0.2em",
//                         color: TEXT_LIGHT,
//                         fontWeight: 600,
//                         background: `rgba(253,243,230,0.9)`,
//                         padding: "3px 10px",
//                         borderRadius: 99,
//                         border: `1px solid rgba(200,147,58,0.3)`,
//                       }}>
//                         {event.year}
//                       </span>
//                     </div>

//                     {/* ── Card ── */}
//                     <motion.div
//                       className="timeline-card card-hover"
//                       variants={getCardVariants(index)}
//                       initial="initial"
//                       whileInView="whileInView"
//                       viewport={{ once: false, margin: "-100px" }}
//                       style={
//                         isMobile
//                           ? {
//                               // Mobile: full width, card starts after dot gap
//                               width: "100%",
//                               marginTop: 40,
//                               ...(parallaxIntensity > 0 ? { y: yOffset } : {}),
//                             }
//                           : {
//                               // Desktop: alternating left/right
//                               width: "calc(50% - 48px)",
//                               ...desktopAlignmentStyle(index),
//                               ...(parallaxIntensity > 0 ? { y: yOffset } : {}),
//                             }
//                       }
//                     >
//                       <Card
//                         style={{
//                           ...getCardBg(),
//                           ...getCardEffect(),
//                           borderRadius: 14,
//                           overflow: "visible",
//                           position: "relative",
//                         }}
//                       >
//                         {/* Decorative corner accent */}
//                         <div style={{
//                           position: "absolute",
//                           top: -1, left: -1,
//                           width: 36, height: 36,
//                           borderTop: `2px solid ${GOLD}`,
//                           borderLeft: `2px solid ${GOLD}`,
//                           borderRadius: "14px 0 0 0",
//                           opacity: 0.6,
//                         }} />
//                         <div style={{
//                           position: "absolute",
//                           bottom: -1, right: -1,
//                           width: 36, height: 36,
//                           borderBottom: `2px solid ${GOLD}`,
//                           borderRight: `2px solid ${GOLD}`,
//                           borderRadius: "0 0 14px 0",
//                           opacity: 0.6,
//                         }} />

//                         <CardContent style={{ padding: "20px 22px" }}>
//                           {/* Date badge */}
//                           {dateFormat === "badge" ? (
//                             <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                               {event.icon || <CalendarIcon />}
//                               <span style={{
//                                 fontFamily: "Cinzel, serif",
//                                 fontSize: 11,
//                                 fontWeight: 700,
//                                 letterSpacing: "0.15em",
//                                 color: GOLD,
//                               }}>
//                                 {event.year}
//                               </span>
//                             </div>
//                           ) : (
//                             <p style={{ fontFamily: "Cinzel, serif", fontSize: 16, fontWeight: 700, color: GOLD, marginBottom: 6 }}>
//                               {event.year}
//                             </p>
//                           )}

//                           <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 700, color: TEXT_DARK, marginBottom: 2, lineHeight: 1.2 }}>
//                             {event.title}
//                           </h3>

//                           {event.subtitle && (
//                             <p style={{ fontFamily: "Cinzel, serif", fontSize: 10, letterSpacing: "0.15em", color: TEXT_LIGHT, marginBottom: 8, fontWeight: 500 }}>
//                               {event.subtitle}
//                             </p>
//                           )}

//                           <div style={{ width: 32, height: 1, background: `linear-gradient(to right, ${GOLD}, transparent)`, marginBottom: 10, opacity: 0.7 }} />

//                           <p style={{ fontFamily: "Lato, sans-serif", fontSize: 13, lineHeight: 1.8, color: TEXT_MID, fontWeight: 300 }}>
//                             {event.description}
//                           </p>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ── End marker ── */}
//           <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "center", paddingLeft: isMobile ? "9px" : 0, gap: 8 }}>
//             <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 0 6px rgba(200,147,58,0.15), 0 0 0 12px rgba(200,147,58,0.06)` }}>
//               <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1L9.2 6 14 8 9.2 10 8 15 6.8 10 2 8 6.8 6Z" fill={MAROON} /></svg>
//             </div>
//             <p style={{ fontFamily: "Cinzel, serif", fontSize: isMobile ? 8 : 10, letterSpacing: "0.2em", color: TEXT_LIGHT, fontWeight: 600, textAlign: isMobile ? "left" : "center" }}>WEALTH YOU HOLD. LEGACY YOU LEAVE.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScrollTimeline;




"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

// ─── Inline cn utility ───────────────────────────────────────────────────────
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Inline Card components ───────────────────────────────────────────────────
const Card = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div className={cn("rounded-xl overflow-hidden", className)} style={style}>
    {children}
  </div>
);

const CardContent = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div className={cn("p-6", className)} style={style}>
    {children}
  </div>
);

// ─── Types ────────────────────────────────────────────────────────────────────
export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ScrollTimelineProps {
  events?: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  smoothScroll?: boolean;
}

// ─── Default events ───────────────────────────────────────────────────────────
const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "1975",
    title: "Foundation of SJ Jewels",
    subtitle: "Mumbai, India",
    description:
      "SJ Jewels was established with a single vision — crafting jewellery that celebrates the timeless beauty of gold and the trust of generations.",
  },
  {
    year: "1988",
    title: "BIS Hallmarking Pioneer",
    subtitle: "Certified Excellence",
    description:
      "Among the first jewellers to adopt BIS hallmarking standards, reinforcing our lifelong commitment to purity and authenticity.",
  },
  {
    year: "2001",
    title: "Gold Coin Collection Launch",
    subtitle: "Investment & Tradition",
    description:
      "Launched our signature 24K pure gold coin range — blending investment value with sacred Lakshmi motifs cherished across generations.",
  },
  {
    year: "2010",
    title: "Pan-India Expansion",
    subtitle: "50+ Showrooms",
    description:
      "Expanded to over 50 showrooms across India, bringing the legacy of fine jewellery craftsmanship closer to every family.",
  },
  {
    year: "2024",
    title: "Digital Gold Platform",
    subtitle: "Modern Heritage",
    description:
      "Launched our digital gold investment platform, making certified gold coins and jewellery accessible to 100,000+ customers nationwide.",
  },
];

// ─── Jewellery theme tokens ───────────────────────────────────────────────────
const GOLD = "#c8933a";
const GOLD_LIGHT = "#f5d887";
const GOLD_PALE = "#e8b84b";
const MAROON = "#6b0f27";
const MAROON_MID = "#8b1a35";
const CREAM = "#fdf3e6";
const CREAM_DARK = "#f0d8b8";
const TEXT_DARK = "#3d1208";
const TEXT_MID = "#6b4226";
const TEXT_LIGHT = "#9a5c2a";

// ─── CSS string (kept as a constant, injected client-side only) ───────────────
// FIX 1: Style string is defined as a JS constant.
// It is injected into the DOM via useEffect (client-only), which eliminates
// the SSR ↔ client HTML mismatch caused by Next.js escaping quotes/apostrophes
// in <style> tag content during server rendering.
const TIMELINE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400&display=swap');

  @keyframes shimmer {
    0%{background-position:-200% center}
    100%{background-position:200% center}
  }
  @keyframes gold-pulse {
    0%,100%{box-shadow:0 0 0 0 rgba(200,147,58,0.4)}
    50%{box-shadow:0 0 0 6px rgba(200,147,58,0)}
  }
  .shimmer-text {
    background: linear-gradient(90deg,#8b4513 0%,#c8933a 28%,#f5d887 50%,#c8933a 72%,#8b4513 100%);
    background-size:200% auto;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation:shimmer 4s linear infinite;
  }
  .dot-pulse { animation: gold-pulse 2s ease-in-out infinite; }
  .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .card-hover:hover { transform: translateY(-4px); }

  @media (max-width: 767px) {
    .timeline-row {
      flex-direction: column !important;
      align-items: flex-start !important;
      padding-left: 44px !important;
    }
    .timeline-dot {
      left: 20px !important;
      top: 24px !important;
      transform: translate(-50%, 0) !important;
    }
    .timeline-year-label {
      display: none !important;
    }
    .timeline-card {
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      max-width: 100% !important;
    }
    .progress-line {
      left: 20px !important;
      transform: none !important;
    }
    .connector-line {
      left: 20px !important;
      transform: none !important;
    }
    .comet-head {
      left: 20px !important;
    }
  }
`;

// ─── Sparkle SVG ─────────────────────────────────────────────────────────────
const SparkleIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14">
    <path
      d="M7 0.5L8.2 5.5 13 7 8.2 8.5 7 13.5 5.8 8.5 1 7 5.8 5.5Z"
      fill={GOLD_PALE}
    />
  </svg>
);

// ─── Calendar icon ────────────────────────────────────────────────────────────
const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={GOLD}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// ─── Decorative divider ───────────────────────────────────────────────────────
const Divider = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      margin: "8px 0",
    }}
  >
    <div
      style={{
        width: 48,
        height: 1,
        background: `linear-gradient(to right, transparent, ${GOLD})`,
      }}
    />
    <svg width="10" height="10" viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="2" fill={GOLD} />
      <circle
        cx="5"
        cy="5"
        r="4"
        fill="none"
        stroke={GOLD}
        strokeWidth="0.8"
      />
    </svg>
    <div
      style={{
        width: 48,
        height: 1,
        background: `linear-gradient(to left, transparent, ${GOLD})`,
      }}
    />
  </div>
);

// ─── Per-event card with its own parallax transform ──────────────────────────
// FIX 2: useTransform was being called inside .map() in the original code,
// which violates the Rules of Hooks (hooks must not be called inside loops).
// This wrapper component calls useTransform at the top level of a component,
// which is always safe regardless of how many instances are rendered.
interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  activeIndex: number;
  isMobile: boolean;
  smoothProgress: MotionValue<number>;
  cardAlignment: "alternating" | "left" | "right";
  parallaxIntensity: number;
  revealAnimation: "fade" | "slide" | "scale" | "flip" | "none";
  animationOrder: "sequential" | "staggered" | "simultaneous";
  cardVariant: "default" | "elevated" | "outlined" | "filled";
  cardEffect: "none" | "glow" | "shadow" | "bounce";
  dateFormat: "text" | "badge";
  getCardBg: () => React.CSSProperties;
  getCardEffect: () => React.CSSProperties;
  desktopAlignmentStyle: (index: number) => React.CSSProperties;
  timelineRef: (el: HTMLDivElement | null) => void;
}

const TimelineCard = ({
  event,
  index,
  activeIndex,
  isMobile,
  smoothProgress,
  cardAlignment,
  parallaxIntensity,
  revealAnimation,
  animationOrder,
  dateFormat,
  getCardBg,
  getCardEffect,
  desktopAlignmentStyle,
  timelineRef,
}: TimelineCardProps) => {
  // Safe: called at top level of this component, not inside a loop
  const yOffset = useTransform(
    smoothProgress,
    [0, 1],
    [parallaxIntensity * 80, -parallaxIntensity * 80]
  );

  const isLeft =
    cardAlignment === "alternating"
      ? index % 2 === 0
      : cardAlignment === "left";

  const baseDelay =
    animationOrder === "simultaneous"
      ? 0
      : animationOrder === "staggered"
        ? index * 0.2
        : index * 0.3;

  const side = isMobile
    ? -60
    : cardAlignment === "left"
      ? -100
      : cardAlignment === "right"
        ? 100
        : index % 2 === 0
          ? -100
          : 100;

  const initialStates: Record<string, object> = {
    fade: { opacity: 0, y: 24 },
    slide: { x: side, opacity: 0 },
    scale: { scale: 0.82, opacity: 0 },
    flip: { rotateY: 90, opacity: 0 },
    none: { opacity: 1 },
  };

  const cardVariants = {
    initial: initialStates[revealAnimation],
    whileInView: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.75,
        delay: baseDelay,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    },
  };

  return (
    <div
      ref={timelineRef}
      className="timeline-row"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginBottom: 80,
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection: "row",
      }}
    >
      {/* ── Timeline dot ── */}
      <div
        className="timeline-dot"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 30,
        }}
      >
        {isMobile && (
          <div
            style={{
              position: "absolute",
              left: 28,
              top: "50%",
              transform: "translateY(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: 10,
                letterSpacing: "0.18em",
                color: TEXT_LIGHT,
                fontWeight: 700,
                background: `rgba(253,243,230,0.95)`,
                padding: "2px 8px",
                borderRadius: 99,
                border: `1px solid rgba(200,147,58,0.35)`,
              }}
            >
              {event.year}
            </span>
          </div>
        )}

        <motion.div
          className={index <= activeIndex ? "dot-pulse" : ""}
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background:
              index <= activeIndex
                ? `radial-gradient(circle, ${GOLD_LIGHT}, ${GOLD})`
                : CREAM_DARK,
            border: `3px solid ${index <= activeIndex ? GOLD : "rgba(200,147,58,0.3)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              index <= activeIndex
                ? `0 0 0 4px rgba(200,147,58,0.15)`
                : "none",
            transition: "all 0.4s ease",
          }}
        >
          {index <= activeIndex && (
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: MAROON,
              }}
            />
          )}
        </motion.div>
      </div>

      {/* ── Year label — Desktop only ── */}
      <div
        className="timeline-year-label"
        style={{
          position: "absolute",
          left: isLeft ? "calc(50% + 36px)" : "auto",
          right: isLeft ? "auto" : "calc(50% + 36px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 15,
          textAlign: isLeft ? "left" : "right",
        }}
      >
        <span
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: TEXT_LIGHT,
            fontWeight: 600,
            background: `rgba(253,243,230,0.9)`,
            padding: "3px 10px",
            borderRadius: 99,
            border: `1px solid rgba(200,147,58,0.3)`,
          }}
        >
          {event.year}
        </span>
      </div>

      {/* ── Card ── */}
      <motion.div
        className="timeline-card card-hover"
        variants={cardVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, margin: "-100px" }}
        style={
          isMobile
            ? {
                width: "100%",
                marginTop: 40,
                ...(parallaxIntensity > 0 ? { y: yOffset } : {}),
              }
            : {
                width: "calc(50% - 48px)",
                ...desktopAlignmentStyle(index),
                ...(parallaxIntensity > 0 ? { y: yOffset } : {}),
              }
        }
      >
        <Card
          style={{
            ...getCardBg(),
            ...getCardEffect(),
            borderRadius: 14,
            overflow: "visible",
            position: "relative",
          }}
        >
          {/* Decorative corner accent */}
          <div
            style={{
              position: "absolute",
              top: -1,
              left: -1,
              width: 36,
              height: 36,
              borderTop: `2px solid ${GOLD}`,
              borderLeft: `2px solid ${GOLD}`,
              borderRadius: "14px 0 0 0",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -1,
              right: -1,
              width: 36,
              height: 36,
              borderBottom: `2px solid ${GOLD}`,
              borderRight: `2px solid ${GOLD}`,
              borderRadius: "0 0 14px 0",
              opacity: 0.6,
            }}
          />

          <CardContent style={{ padding: "20px 22px" }}>
            {dateFormat === "badge" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                {event.icon || <CalendarIcon />}
                <span
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: GOLD,
                  }}
                >
                  {event.year}
                </span>
              </div>
            ) : (
              <p
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: 6,
                }}
              >
                {event.year}
              </p>
            )}

            <h3
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 20,
                fontWeight: 700,
                color: TEXT_DARK,
                marginBottom: 2,
                lineHeight: 1.2,
              }}
            >
              {event.title}
            </h3>

            {event.subtitle && (
              <p
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  color: TEXT_LIGHT,
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                {event.subtitle}
              </p>
            )}

            <div
              style={{
                width: 32,
                height: 1,
                background: `linear-gradient(to right, ${GOLD}, transparent)`,
                marginBottom: 10,
                opacity: 0.7,
              }}
            />

            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: 13,
                lineHeight: 1.8,
                color: TEXT_MID,
                fontWeight: 300,
              }}
            >
              {event.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Our Golden Legacy",
  subtitle = "A journey of trust, purity and timeless craftsmanship",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "shadow",
  parallaxIntensity = 0.15,
  progressLineWidth = 3,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "slide",
  className = "",
  connectorStyle = "line",
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // FIX 3: isMobile starts as `false` (matching the server render),
  // then updates to the real value after mount. This prevents the
  // SSR ↔ client mismatch that occurred when the server rendered with
  // no knowledge of window.innerWidth while the client immediately
  // computed a different value.
  // const [isMobile, setIsMobile] = useState(false);
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  //   const check = () => setIsMobile(window.innerWidth < 768);
  //   check();
  //   window.addEventListener("resize", check);
  //   return () => window.removeEventListener("resize", check);
  // }, []);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
const mounted = isMobile !== null;  // single source of truth

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);
  // FIX 1: Inject styles client-side only via useEffect to avoid the
  // SSR ↔ client HTML mismatch. Next.js escapes special characters
  // (e.g. ' → &#x27;) in <style> tag text nodes during SSR, but the
  // browser renders the raw string, causing a hydration error.
  useEffect(() => {
    const styleId = "scroll-timeline-styles";
    if (document.getElementById(styleId)) return;
    const styleEl = document.createElement("style");
    styleEl.id = styleId;
    styleEl.textContent = TIMELINE_STYLES;
    document.head.appendChild(styleEl);
    return () => {
      document.getElementById(styleId)?.remove();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getConnectorStyle = (): React.CSSProperties => {
    const leftPos = isMobile ? "20px" : "50%";
    const transform = isMobile ? "none" : "translateX(-50%)";

    const base: React.CSSProperties = {
      position: "absolute",
      left: leftPos,
      transform: transform,
      width: progressLineWidth,
      top: 0,
      height: "100%",
      background: `rgba(200,147,58,0.18)`,
      zIndex: 10,
    };
    if (connectorStyle === "dots") return { ...base, borderRadius: 99 };
    if (connectorStyle === "dashed")
      return {
        ...base,
        background: "none",
        borderLeft: `${progressLineWidth}px dashed rgba(200,147,58,0.3)`,
      };
    return {
      ...base,
      borderRadius: progressLineCap === "round" ? 99 : 0,
    };
  };

  const getCardEffect = (): React.CSSProperties => {
    if (cardEffect === "glow")
      return { boxShadow: `0 0 20px rgba(200,147,58,0.25)` };
    if (cardEffect === "shadow")
      return { boxShadow: `0 4px 28px rgba(100,50,10,0.12)` };
    return {};
  };

  const getCardBg = (): React.CSSProperties => {
    if (cardVariant === "outlined")
      return {
        background: "rgba(253,243,230,0.6)",
        backdropFilter: "blur(8px)",
        border: `1.5px solid rgba(200,147,58,0.35)`,
      };
    if (cardVariant === "filled")
      return {
        background: `rgba(200,147,58,0.08)`,
        border: `1px solid rgba(200,147,58,0.3)`,
      };
    if (cardVariant === "elevated")
      return {
        background: CREAM,
        border: `1px solid rgba(200,147,58,0.2)`,
        boxShadow: "0 6px 30px rgba(100,50,10,0.1)",
      };
    return { background: CREAM, border: `1px solid rgba(200,147,58,0.22)` };
  };

  const desktopAlignmentStyle = (index: number): React.CSSProperties => {
    if (cardAlignment === "alternating") {
      return index % 2 === 0
        ? { marginRight: "calc(50% + 48px)" }
        : { marginLeft: "calc(50% + 48px)" };
    }
    if (cardAlignment === "left")
      return { marginRight: "auto", maxWidth: "46%" };
    return { marginLeft: "auto", maxWidth: "46%" };
  };

  // The outer div MUST always render with scrollRef attached so that
  // useScroll({ target: scrollRef }) finds a hydrated DOM node on mount.
  // Only the inner content that depends on `isMobile` (layout-sensitive)
  // is suppressed until after mount via the `mounted` flag.
  return (
    <div
      ref={scrollRef}
      suppressHydrationWarning 
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        // background: `linear-gradient(160deg, #fdf0e0 0%, #f8e0c8 40%, #fcebd8 100%)`,
        background: `linear-gradient(160deg, #fdf0e0 0%, #E0B195 50%, #d4a07a 100%)`,
        backgroundImage: `url('/assets/abt3bg.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll", // or "fixed" for parallax effect
    backgroundRepeat: "no-repeat",
        fontFamily: "Cormorant Garamond, serif",
      }}
      className={className}
    >
      {mounted && <>
      {/* ── Header ── */}
      <div style={{ textAlign: "center", padding: "64px 24px 48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <SparkleIcon size={16} />
          <div
            style={{
              width: 60,
              height: 1,
              background: `linear-gradient(to right, transparent, ${GOLD})`,
              margin: "auto 10px",
            }}
          />
          <SparkleIcon size={22} />
          <div
            style={{
              width: 60,
              height: 1,
              background: `linear-gradient(to left, transparent, ${GOLD})`,
              margin: "auto 10px",
            }}
          />
          <SparkleIcon size={16} />
        </div>

        <div
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 11,
            letterSpacing: "0.3em",
            color: TEXT_LIGHT,
            marginBottom: 8,
            fontWeight: 500,
          }}
        >
          EST. 1975 · SJ JEWELS
        </div>

        <h2
          className="shimmer-text"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 10,
          }}
        >
          {title}
        </h2>

        <Divider />

        <p
          style={{
            fontFamily: "Lato, sans-serif",
            fontSize: 15,
            color: TEXT_MID,
            fontWeight: 300,
            maxWidth: 480,
            margin: "10px auto 0",
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* ── Timeline Body ── */}
      <div
        style={{
          position: "relative",
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 16px 96px",
        }}
      >
        <div style={{ position: "relative" }}>
          {/* Background connector line */}
          <div className="connector-line" style={getConnectorStyle()} />

          {/* Gold progress line */}
          {progressIndicator && (
            <>
              <motion.div
                className="progress-line"
                style={{
                  position: "absolute",
                  top: 0,
                  left: isMobile ? "20px" : "50%",
                  translateX: "-50%",
                  height: progressHeight,
                  width: progressLineWidth,
                  borderRadius: progressLineCap === "round" ? 99 : 0,
                  background: `linear-gradient(to bottom, ${GOLD_LIGHT}, ${GOLD}, ${MAROON_MID})`,
                  boxShadow: `0 0 12px rgba(200,147,58,0.45), 0 0 28px rgba(200,147,58,0.2)`,
                  zIndex: 11,
                }}
              />
              {/* Traveling comet head */}
              <motion.div
                className="comet-head"
                style={{
                  position: "absolute",
                  left: isMobile ? "20px" : "50%",
                  top: progressHeight,
                  translateX: "-50%",
                  translateY: "-50%",
                  zIndex: 22,
                }}
              >
                <motion.div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${GOLD_LIGHT} 0%, ${GOLD} 40%, transparent 70%)`,
                    boxShadow: `0 0 14px 5px rgba(200,147,58,0.65), 0 0 28px 10px rgba(200,147,58,0.3), 0 0 50px 18px rgba(200,147,58,0.12)`,
                  }}
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </>
          )}

          {/* Events */}
          <div style={{ position: "relative", zIndex: 20 }}>
            {events.map((event, index) => (
              <TimelineCard
                key={event.id || index}
                event={event}
                index={index}
                activeIndex={activeIndex}
                isMobile={isMobile}
                smoothProgress={smoothProgress}
                cardAlignment={cardAlignment}
                parallaxIntensity={parallaxIntensity}
                revealAnimation={revealAnimation}
                animationOrder={animationOrder}
                cardVariant={cardVariant}
                cardEffect={cardEffect}
                dateFormat={dateFormat}
                getCardBg={getCardBg}
                getCardEffect={getCardEffect}
                desktopAlignmentStyle={desktopAlignmentStyle}
                timelineRef={(el) => {
                  timelineRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>

        {/* ── End marker ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "center",
            paddingLeft: isMobile ? "9px" : 0,
            gap: 8,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 0 6px rgba(200,147,58,0.15), 0 0 0 12px rgba(200,147,58,0.06)`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M8 1L9.2 6 14 8 9.2 10 8 15 6.8 10 2 8 6.8 6Z"
                fill={MAROON}
              />
            </svg>
          </div>
          <p
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: isMobile ? 8 : 10,
              letterSpacing: "0.2em",
              color: TEXT_LIGHT,
              fontWeight: 600,
              textAlign: isMobile ? "left" : "center",
            }}
          >
            WEALTH YOU HOLD. LEGACY YOU LEAVE.
          </p>
        </div>
      </div>
      </>}
    </div>
  );
};

export default ScrollTimeline;