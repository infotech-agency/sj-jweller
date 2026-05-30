// // import { useState, useEffect } from "react";

// // const people = [
// //   {
// //     name: "Shri Jaganath Somani",
// //     role: "Founder",
// //     years: "(1950)",
// //     description:
// //       "A visionary artisan with a passion for perfection. He laid the foundation of SJ with values of trust, purity and fine craftsmanship.",
// //     image: "https://i.pinimg.com/736x/27/90/03/27900371354079f41e16751f2a320fdb.jpg", // Replace with your image URL
// //   },
// //   {
// //     name: "Shri Mahesh Somani",
// //     role: "Second Generation",
// //     years: "(1975 – 2015)",
// //     description:
// //       "He took forward the legacy, expanded the brand and introduced innovative designs while staying true to our roots.",
// //     image: "https://i.pinimg.com/736x/2d/d5/7b/2dd57b967bea9060db4f669d16460b64.jpg",
// //   },
// //   {
// //     name: "Shri Rohan Somani",
// //     role: "Current Generation",
// //     years: "(2015 – Present)",
// //     description:
// //       "Leading SJ into the future with a vision to blend heritage with innovation and create timeless treasures for generations to come.",
// //     image: "https://i.pinimg.com/736x/fc/79/f8/fc79f81dcb4c5497c58949208a2cc7b3.jpg",
// //   },
// // ];

// // const DiamondDivider = () => (
// //   <div className="flex items-center justify-center gap-1 my-2">
// //     <div className="w-8 h-px bg-amber-400 opacity-60" />
// //     <div className="w-2 h-2 bg-amber-400 rotate-45 opacity-80" style={{ minWidth: 8, minHeight: 8 }} />
// //     <div className="w-8 h-px bg-amber-400 opacity-60" />
// //   </div>
// // );

// // const HorizontalDivider = () => (
// //   <div className="flex items-center justify-center px-6 py-1 w-full">
// //     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-40" />
// //     <div className="w-1.5 h-1.5 bg-amber-500 rotate-45 mx-2 opacity-60" style={{ minWidth: 6, minHeight: 6 }} />
// //     <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-700 to-transparent opacity-40" />
// //   </div>
// // );

// // const VerticalDivider = () => (
// //   <div className="flex flex-col items-center justify-center self-stretch py-10">
// //     <div className="flex-1 w-px bg-gradient-to-b from-transparent via-amber-700 to-transparent opacity-40" />
// //     <div className="w-1.5 h-1.5 bg-amber-500 rotate-45 my-2 opacity-60" style={{ minWidth: 6, minHeight: 6 }} />
// //     <div className="flex-1 w-px bg-gradient-to-b from-transparent via-amber-700 to-transparent opacity-40" />
// //   </div>
// // );

// // const ArchFrame = ({ image, name, small }) => {
// //   const outerW = small ? 120 : 148;
// //   const outerH = small ? 170 : 210;
// //   const innerW = small ? 110 : 136;
// //   const innerH = small ? 158 : 198;
// //   const borderRadiusOuter = `${outerW / 2}px ${outerW / 2}px 18px 18px`;
// //   const borderRadiusInner = `${innerW / 2}px ${innerW / 2}px 14px 14px`;

// //   return (
// //     <div className="relative flex justify-center items-end" style={{ height: outerH + 10 }}>
// //       {/* Outer decorative border */}
// //       <div
// //         className="absolute"
// //         style={{
// //           width: outerW,
// //           height: outerH,
// //           left: "50%",
// //           transform: "translateX(-50%)",
// //           borderRadius: borderRadiusOuter,
// //           border: "2px solid rgba(212,175,90,0.45)",
// //           zIndex: 1,
// //           pointerEvents: "none",
// //           top: 0,
// //         }}
// //       />
// //       {/* Inner frame */}
// //       <div
// //         className="relative overflow-hidden flex items-end justify-center"
// //         style={{
// //           width: innerW,
// //           height: innerH,
// //           borderRadius: borderRadiusInner,
// //           border: "2.5px solid rgba(212,175,90,0.7)",
// //           background: "linear-gradient(180deg, #4a1a1a 0%, #2c0d0d 100%)",
// //           boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(212,175,90,0.08)",
// //           zIndex: 2,
// //         }}
// //       >
// //         {image ? (
// //           <img
// //             src={image}
// //             alt={name}
// //             className="w-full h-full object-cover object-top"
// //             style={{ borderRadius: borderRadiusInner }}
// //           />
// //         ) : (
// //           <div
// //             className="flex flex-col items-center justify-end pb-2 w-full h-full relative"
// //             style={{ background: "linear-gradient(180deg, #3a1212 60%, #5c1f1f 100%)" }}
// //           >
// //             <div
// //               className="rounded-full absolute"
// //               style={{
// //                 width: small ? 40 : 52,
// //                 height: small ? 40 : 52,
// //                 background: "rgba(212,175,90,0.13)",
// //                 border: "1.5px solid rgba(212,175,90,0.25)",
// //                 top: small ? 38 : 54,
// //                 left: "50%",
// //                 transform: "translateX(-50%)",
// //               }}
// //             />
// //             <div
// //               className="absolute"
// //               style={{
// //                 width: small ? 70 : 90,
// //                 height: small ? 70 : 90,
// //                 background: "rgba(212,175,90,0.08)",
// //                 borderRadius: "50% 50% 0 0",
// //                 border: "1.5px solid rgba(212,175,90,0.18)",
// //                 bottom: 0,
// //                 left: "50%",
// //                 transform: "translateX(-50%)",
// //               }}
// //             />
// //             <span className="text-amber-400 opacity-40 text-xs tracking-widest absolute" style={{ bottom: small ? 28 : 38 }}>
// //               PHOTO
// //             </span>
// //           </div>
// //         )}
// //       </div>
// //       {/* Top ornament */}
// //       <div
// //         className="absolute"
// //         style={{ left: "50%", transform: "translateX(-50%)", width: outerW, top: 0, zIndex: 3, pointerEvents: "none" }}
// //       >
// //         <svg width={outerW} height="30" viewBox={`0 0 ${outerW} 30`} fill="none">
// //           <path d={`M10 28 Q${outerW / 2} 0 ${outerW - 10} 28`} stroke="rgba(212,175,90,0.35)" strokeWidth="1" fill="none" />
// //           <circle cx={outerW / 2} cy="4" r="3" fill="rgba(212,175,90,0.5)" />
// //           <circle cx="10" cy="28" r="2" fill="rgba(212,175,90,0.3)" />
// //           <circle cx={outerW - 10} cy="28" r="2" fill="rgba(212,175,90,0.3)" />
// //         </svg>
// //       </div>
// //     </div>
// //   );
// // };

// // const PersonCard = ({ person, index, isMobile }) => {
// //   const [hovered, setHovered] = useState(false);

// //   if (isMobile) {
// //     // Mobile: horizontal layout — photo left, text right
// //     return (
// //       <div
// //         className="relative flex flex-row items-center gap-5 px-5 py-6 w-full"
// //         style={{
// //           background: "transparent",
// //           borderRadius: 16,
// //         }}
// //       >
// //         {/* Ghost number */}
// //         <div
// //           className="absolute top-3 right-4 select-none text-amber-400 opacity-10"
// //           style={{ fontSize: 52, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
// //         >
// //           {String(index + 1).padStart(2, "0")}
// //         </div>

// //         {/* Photo */}
// //         <div className="flex-shrink-0">
// //           <ArchFrame image={person.image} name={person.name} small />
// //         </div>

// //         {/* Text */}
// //         <div className="flex flex-col items-start text-left flex-1 min-w-0">
// //           <h3
// //             className="text-white font-semibold leading-snug"
// //             style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
// //           >
// //             {person.name}
// //           </h3>
// //           <DiamondDivider />
// //           <p
// //             className="text-amber-400"
// //             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", letterSpacing: "0.04em" }}
// //           >
// //             {person.role}
// //           </p>
// //           <p
// //             className="text-amber-300 opacity-70 mb-2"
// //             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem" }}
// //           >
// //             {person.years}
// //           </p>
// //           <p
// //             className="text-gray-300 leading-relaxed"
// //             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", opacity: 0.82 }}
// //           >
// //             {person.description}
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Desktop: vertical card
// //   return (
// //     <div
// //       className="relative flex flex-col items-center text-center px-5 py-8 transition-all duration-500"
// //       style={{
// //         flex: 1,
// //         minWidth: 0,
// //         background: hovered ? "linear-gradient(180deg, rgba(212,175,90,0.07) 0%, transparent 100%)" : "transparent",
// //         borderRadius: 16,
// //         cursor: "default",
// //       }}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     >
// //       {/* Ghost number */}
// //       <div
// //         className="absolute top-4 right-4 select-none text-amber-400 opacity-20"
// //         style={{ fontSize: 64, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
// //       >
// //         {String(index + 1).padStart(2, "0")}
// //       </div>

// //       {/* Photo */}
// //       <div className="transition-transform duration-500" style={{ transform: hovered ? "translateY(-6px)" : "translateY(0)" }}>
// //         <ArchFrame image={person.image} name={person.name} />
// //       </div>

// //       {/* Text */}
// //       <div className="mt-5 relative z-10">
// //         <h3
// //           className="text-white font-semibold tracking-wide"
// //           style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", lineHeight: 1.3 }}
// //         >
// //           {person.name}
// //         </h3>
// //         <DiamondDivider />
// //         <p
// //           className="text-amber-400"
// //           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", letterSpacing: "0.04em" }}
// //         >
// //           {person.role}
// //         </p>
// //         <p
// //           className="text-amber-300 opacity-70 mb-3"
// //           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem" }}
// //         >
// //           {person.years}
// //         </p>
// //         <p
// //           className="text-gray-300 leading-relaxed"
// //           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.93rem", opacity: 0.82, maxWidth: 210, margin: "0 auto" }}
// //         >
// //           {person.description}
// //         </p>
// //       </div>

// //       {/* Bottom accent */}
// //       <div
// //         className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-amber-400 transition-all duration-500"
// //         style={{ width: hovered ? "60%" : "0%", opacity: 0.4 }}
// //       />
// //     </div>
// //   );
// // };

// // export default function PeopleBehindSJ() {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const check = () => setIsMobile(window.innerWidth < 768);
// //     check();
// //     window.addEventListener("resize", check);
// //     return () => window.removeEventListener("resize", check);
// //   }, []);

// //   return (
// //     <>
// //       <link
// //         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
// //         rel="stylesheet"
// //       />

// //       <div
// //         className="relative w-full overflow-hidden"
// //         style={{ background: "linear-gradient(160deg, #3d0e0e 0%, #2a0808 40%, #1e0606 100%)" }}
// //       >
// //         {/* Background glow */}
// //         <div
// //           className="absolute inset-0 pointer-events-none"
// //           style={{
// //             backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(212,175,90,0.04) 0%, transparent 60%),
// //               radial-gradient(ellipse at 80% 50%, rgba(212,175,90,0.04) 0%, transparent 60%)`,
// //           }}
// //         />

// //         {/* Corner SVG motifs */}
// //         {[
// //           { cls: "top-0 left-0", path: "M0 0 Q60 0 60 60", path2: "M0 0 Q40 0 40 40", cx: 4, cy: 4 },
// //           { cls: "top-0 right-0", path: "M120 0 Q60 0 60 60", path2: "M120 0 Q80 0 80 40", cx: 116, cy: 4 },
// //           { cls: "bottom-0 left-0", path: "M0 120 Q60 120 60 60", path2: null, cx: 4, cy: 116 },
// //           { cls: "bottom-0 right-0", path: "M120 120 Q60 120 60 60", path2: null, cx: 116, cy: 116 },
// //         ].map((c, i) => (
// //           <svg key={i} className={`absolute ${c.cls} opacity-20`} width="120" height="120" viewBox="0 0 120 120">
// //             <path d={c.path} stroke="rgba(212,175,90,0.8)" strokeWidth="1" fill="none" />
// //             {c.path2 && <path d={c.path2} stroke="rgba(212,175,90,0.5)" strokeWidth="0.8" fill="none" />}
// //             <circle cx={c.cx} cy={c.cy} r="2" fill="rgba(212,175,90,0.4)" />
// //           </svg>
// //         ))}

// //         {/* Header */}
// //         <div className="relative z-10 text-center pt-10 pb-2 px-4">
// //           <p
// //             className="text-amber-400 uppercase tracking-[0.35em] mb-1"
// //             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", opacity: 0.85 }}
// //           >
// //             The Stewards of Our Legacy
// //           </p>
// //           <h2
// //             className="text-white"
// //             style={{
// //               fontFamily: "'Playfair Display', serif",
// //               fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
// //               fontWeight: 400,
// //               letterSpacing: "0.02em",
// //               lineHeight: 1.2,
// //             }}
// //           >
// //             The People Behind SJ
// //           </h2>
// //           <div className="flex items-center justify-center gap-3 mt-3">
// //             <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500 opacity-60" />
// //             <svg width="24" height="12" viewBox="0 0 24 12">
// //               <path d="M12 0 L16 6 L12 12 L8 6 Z" fill="rgba(212,175,90,0.7)" />
// //               <path d="M0 6 L6 6" stroke="rgba(212,175,90,0.5)" strokeWidth="1" />
// //               <path d="M18 6 L24 6" stroke="rgba(212,175,90,0.5)" strokeWidth="1" />
// //             </svg>
// //             <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500 opacity-60" />
// //           </div>
// //         </div>

// //         {/* Cards — horizontal on desktop, stacked on mobile */}
// //         <div className={`relative z-10 ${isMobile ? "flex flex-col" : "flex flex-row items-stretch justify-center"} max-w-5xl mx-auto px-2 pb-10 pt-4`}>
// //           {people.map((person, i) => (
// //             <div
// //               key={person.name}
// //               className={isMobile ? "flex flex-col w-full" : "flex flex-row items-stretch"}
// //               style={isMobile ? {} : { flex: 1, minWidth: 0 }}
// //             >
// //               <PersonCard person={person} index={i} isMobile={isMobile} />
// //               {i < people.length - 1 && (isMobile ? <HorizontalDivider /> : <VerticalDivider />)}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import { useState, useEffect } from "react";
// import grandfather from "/assets/grandfather.png"
// const people = [

//   {
//     name: "Shri Mahesh Somani",
//     role: "Second Generation",
//     years: "(1975 – 2015)",
//     description:
//       "He took forward the legacy, expanded the brand and introduced innovative designs while staying true to our roots.",
//     image: 'https://chatgpt.com/backend-api/estuary/content?id=file_00000000091472088dbc8519b3a72029&ts=494459&p=fs&cid=1&sig=61ff305f7bf9767771401a09c05c31d49f5ec8226ee25f7d0af04c513761767e&v=0',
//   },
//   {
//     name: "Shri Rohan Somani",
//     role: "Current Generation",
//     years: "(2015 – Present)",
//     description:
//       "Leading SJ into the future with a vision to blend heritage with innovation and create timeless treasures for generations to come.",
//     image: null,
//   },
// ];

// const DiamondDivider = () => (
//   <div className="flex items-center justify-center gap-1 my-2">
//     <div className="w-8 h-px bg-amber-400 opacity-60" />
//     <div className="w-2 h-2 bg-amber-400 rotate-45 opacity-80" style={{ minWidth: 8, minHeight: 8 }} />
//     <div className="w-8 h-px bg-amber-400 opacity-60" />
//   </div>
// );

// const HorizontalDivider = () => (
//   <div className="flex items-center justify-center px-6 py-1 w-full">
//     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-40" />
//     <div className="w-1.5 h-1.5 bg-amber-500 rotate-45 mx-2 opacity-60" style={{ minWidth: 6, minHeight: 6 }} />
//     <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-700 to-transparent opacity-40" />
//   </div>
// );

// const VerticalDivider = () => (
//   <div className="flex flex-col items-center justify-center self-stretch py-10">
//     <div className="flex-1 w-px bg-gradient-to-b from-transparent via-amber-700 to-transparent opacity-40" />
//     <div className="w-1.5 h-1.5 bg-amber-500 rotate-45 my-2 opacity-60" style={{ minWidth: 6, minHeight: 6 }} />
//     <div className="flex-1 w-px bg-gradient-to-b from-transparent via-amber-700 to-transparent opacity-40" />
//   </div>
// );

// const ArchFrame = ({ image, name, small }) => {
//   const outerW = small ? 120 : 148;
//   const outerH = small ? 170 : 210;
//   const innerW = small ? 110 : 136;
//   const innerH = small ? 158 : 198;
//   const borderRadiusOuter = `${outerW / 2}px ${outerW / 2}px 18px 18px`;
//   const borderRadiusInner = `${innerW / 2}px ${innerW / 2}px 14px 14px`;

//   return (
//     <div className="relative flex justify-center items-end" style={{ height: outerH + 10 }}>
//       <div
//         className="absolute"
//         style={{
//           width: outerW,
//           height: outerH,
//           left: "50%",
//           transform: "translateX(-50%)",
//           borderRadius: borderRadiusOuter,
//           border: "2px solid rgba(212,175,90,0.45)",
//           zIndex: 1,
//           pointerEvents: "none",
//           top: 0,
//         }}
//       />
//       <div
//         className="relative overflow-hidden flex items-end justify-center"
//         style={{
//           width: innerW,
//           height: innerH,
//           borderRadius: borderRadiusInner,
//           border: "2.5px solid rgba(212,175,90,0.7)",
//           background: "linear-gradient(180deg, #4a1a1a 0%, #2c0d0d 100%)",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(212,175,90,0.08)",
//           zIndex: 2,
//         }}
//       >
//         {image ? (
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover object-top"
//             style={{ borderRadius: borderRadiusInner }}
//           />
//         ) : (
//           <div
//             className="flex flex-col items-center justify-end pb-2 w-full h-full relative"
//             style={{ background: "linear-gradient(180deg, #3a1212 60%, #5c1f1f 100%)" }}
//           >
//             <div
//               className="rounded-full absolute"
//               style={{
//                 width: small ? 40 : 52,
//                 height: small ? 40 : 52,
//                 background: "rgba(212,175,90,0.13)",
//                 border: "1.5px solid rgba(212,175,90,0.25)",
//                 top: small ? 38 : 54,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//               }}
//             />
//             <div
//               className="absolute"
//               style={{
//                 width: small ? 70 : 90,
//                 height: small ? 70 : 90,
//                 background: "rgba(212,175,90,0.08)",
//                 borderRadius: "50% 50% 0 0",
//                 border: "1.5px solid rgba(212,175,90,0.18)",
//                 bottom: 0,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//               }}
//             />
//             <span className="text-amber-400 opacity-40 text-xs tracking-widest absolute" style={{ bottom: small ? 28 : 38 }}>
//               PHOTO
//             </span>
//           </div>
//         )}
//       </div>
//       <div
//         className="absolute"
//         style={{ left: "50%", transform: "translateX(-50%)", width: outerW, top: 0, zIndex: 3, pointerEvents: "none" }}
//       >
//         <svg width={outerW} height="30" viewBox={`0 0 ${outerW} 30`} fill="none">
//           <path d={`M10 28 Q${outerW / 2} 0 ${outerW - 10} 28`} stroke="rgba(212,175,90,0.35)" strokeWidth="1" fill="none" />
//           <circle cx={outerW / 2} cy="4" r="3" fill="rgba(212,175,90,0.5)" />
//           <circle cx="10" cy="28" r="2" fill="rgba(212,175,90,0.3)" />
//           <circle cx={outerW - 10} cy="28" r="2" fill="rgba(212,175,90,0.3)" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// const PersonCard = ({ person, index, isMobile }) => {
//   const [hovered, setHovered] = useState(false);

//   if (isMobile) {
//     return (
//       <div
//         className="relative flex flex-row items-center gap-5 px-5 py-6 w-full"
//         style={{
//           background: "transparent",
//           borderRadius: 16,
//         }}
//       >
//         <div
//           className="absolute top-3 right-4 select-none text-amber-400 opacity-10"
//           style={{ fontSize: 52, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
//         >
//           {String(index + 1).padStart(2, "0")}
//         </div>

//         <div className="flex-shrink-0">
//           <ArchFrame image={person.image} name={person.name} small />
//         </div>

//         <div className="flex flex-col items-start text-left flex-1 min-w-0">
//           <h3
//             className="text-white font-semibold leading-snug"
//             style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
//           >
//             {person.name}
//           </h3>
//           <DiamondDivider />
//           <p
//             className="text-amber-400"
//             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", letterSpacing: "0.04em" }}
//           >
//             {person.role}
//           </p>
//           <p
//             className="text-amber-300 opacity-70 mb-2"
//             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem" }}
//           >
//             {person.years}
//           </p>
//           <p
//             className="text-gray-300 leading-relaxed"
//             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", opacity: 0.82 }}
//           >
//             {person.description}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="relative flex flex-col items-center text-center px-5 py-8 transition-all duration-500"
//       style={{
//         flex: 1,
//         minWidth: 0,
//         background: hovered ? "linear-gradient(180deg, rgba(212,175,90,0.07) 0%, transparent 100%)" : "transparent",
//         borderRadius: 16,
//         cursor: "default",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div
//         className="absolute top-4 right-4 select-none text-amber-400 opacity-20"
//         style={{ fontSize: 64, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
//       >
//         {String(index + 1).padStart(2, "0")}
//       </div>

//       <div className="transition-transform duration-500" style={{ transform: hovered ? "translateY(-6px)" : "translateY(0)" }}>
//         <ArchFrame image={person.image} name={person.name} />
//       </div>

//       <div className="mt-5 relative z-10">
//         <h3
//           className="text-white font-semibold tracking-wide"
//           style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", lineHeight: 1.3 }}
//         >
//           {person.name}
//         </h3>
//         <DiamondDivider />
//         <p
//           className="text-amber-400"
//           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", letterSpacing: "0.04em" }}
//         >
//           {person.role}
//         </p>
//         <p
//           className="text-amber-300 opacity-70 mb-3"
//           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem" }}
//         >
//           {person.years}
//         </p>
//         <p
//           className="text-gray-300 leading-relaxed"
//           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.93rem", opacity: 0.82, maxWidth: 210, margin: "0 auto" }}
//         >
//           {person.description}
//         </p>
//       </div>

//       <div
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-amber-400 transition-all duration-500"
//         style={{ width: hovered ? "60%" : "0%", opacity: 0.4 }}
//       />
//     </div>
//   );
// };

// export default function PeopleBehindSJ() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   // 🔥 CRITICAL FIX: Don't render anything until mounted
//   if (!mounted) {
//     return null; // or return a loading skeleton
//   }

//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
//         rel="stylesheet"
//       />

//       <div
//         className="relative w-full overflow-hidden"
//         style={{ background: "linear-gradient(160deg, #3d0e0e 0%, #2a0808 40%, #1e0606 100%)" }}
//       >
//         {/* Background glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(212,175,90,0.04) 0%, transparent 60%),
//               radial-gradient(ellipse at 80% 50%, rgba(212,175,90,0.04) 0%, transparent 60%)`,
//           }}
//         />

//         {/* Corner SVG motifs */}
//         {[
//           { cls: "top-0 left-0", path: "M0 0 Q60 0 60 60", path2: "M0 0 Q40 0 40 40", cx: 4, cy: 4 },
//           { cls: "top-0 right-0", path: "M120 0 Q60 0 60 60", path2: "M120 0 Q80 0 80 40", cx: 116, cy: 4 },
//           { cls: "bottom-0 left-0", path: "M0 120 Q60 120 60 60", path2: null, cx: 4, cy: 116 },
//           { cls: "bottom-0 right-0", path: "M120 120 Q60 120 60 60", path2: null, cx: 116, cy: 116 },
//         ].map((c, i) => (
//           <svg key={i} className={`absolute ${c.cls} opacity-20`} width="120" height="120" viewBox="0 0 120 120">
//             <path d={c.path} stroke="rgba(212,175,90,0.8)" strokeWidth="1" fill="none" />
//             {c.path2 && <path d={c.path2} stroke="rgba(212,175,90,0.5)" strokeWidth="0.8" fill="none" />}
//             <circle cx={c.cx} cy={c.cy} r="2" fill="rgba(212,175,90,0.4)" />
//           </svg>
//         ))}

//         {/* Header */}
//         <div className="relative z-10 text-center pt-10 pb-2 px-4">
//           <p
//             className="text-amber-400 uppercase tracking-[0.35em] mb-1"
//             style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", opacity: 0.85 }}
//           >
//             The Stewards of Our Legacy
//           </p>
//           <h2
//             className="text-white"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
//               fontWeight: 400,
//               letterSpacing: "0.02em",
//               lineHeight: 1.2,
//             }}
//           >
//             The People Behind SJ
//           </h2>
//           <div className="flex items-center justify-center gap-3 mt-3">
//             <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500 opacity-60" />
//             <svg width="24" height="12" viewBox="0 0 24 12">
//               <path d="M12 0 L16 6 L12 12 L8 6 Z" fill="rgba(212,175,90,0.7)" />
//               <path d="M0 6 L6 6" stroke="rgba(212,175,90,0.5)" strokeWidth="1" />
//               <path d="M18 6 L24 6" stroke="rgba(212,175,90,0.5)" strokeWidth="1" />
//             </svg>
//             <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500 opacity-60" />
//           </div>
//         </div>

//         {/* Cards */}
//         <div className={`relative z-10 ${isMobile ? "flex flex-col" : "flex flex-row items-stretch justify-center"} max-w-5xl mx-auto px-2 pb-10 pt-4`}>
//           {people.map((person, i) => (
//             <div
//               key={person.name}
//               className={isMobile ? "flex flex-col w-full" : "flex flex-row items-stretch"}
//               style={isMobile ? {} : { flex: 1, minWidth: 0 }}
//             >
//               <PersonCard person={person} index={i} isMobile={isMobile} />
//               {i < people.length - 1 && (isMobile ? <HorizontalDivider /> : <VerticalDivider />)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import grandfather from "../../public/assets/grandfather.png"
const people = [
  {
    name: "Shri Mahesh Somani",
    role: "Second Generation",
    years: "1975 – 2015",
    description:
      "He took forward the legacy, expanded the brand and introduced innovative designs while staying true to our roots.",
    image: grandfather,
  },
  {
    name: "Shri Rohan Somani",
    role: "Current Generation",
    years: "2015 – Present",
    description:
      "Leading SJ into the future with a vision to blend heritage with innovation and create timeless treasures for generations to come.",
    image: null,
  },
];

const ArchPhoto = ({ image, name, small }) => {
  const w = small ? 110 : 136;
  const h = small ? 158 : 196;
  const br = `${w / 2}px ${w / 2}px 12px 12px`;

  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: br,
        border: "2px solid rgba(212,175,90,0.6)",
        overflow: "hidden",
        background: "linear-gradient(180deg, #3a1212 60%, #5c1f1f 100%)",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              width: small ? 44 : 56,
              height: small ? 44 : 56,
              borderRadius: "50%",
              background: "rgba(212,175,90,0.12)",
              border: "1.5px solid rgba(212,175,90,0.3)",
            }}
          />
          <span
            style={{
              color: "rgba(212,175,90,0.4)",
              fontSize: 10,
              letterSpacing: "0.15em",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            PHOTO
          </span>
        </div>
      )}
    </div>
  );
};

const PersonCard = ({ person, index, isMobile }) => {
  const [hovered, setHovered] = useState(false);

  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          padding: "24px 20px",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <ArchPhoto image={person.image} name={person.name} small />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              color: "rgba(212,175,90,0.5)",
              fontSize: 11,
              letterSpacing: "0.2em",
              fontFamily: "'Cormorant Garamond', serif",
              margin: "0 0 4px",
              textTransform: "uppercase",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            style={{
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
              fontWeight: 500,
              margin: "0 0 4px",
              lineHeight: 1.3,
            }}
          >
            {person.name}
          </h3>
          <p
            style={{
              color: "#D4AF5A",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
              margin: "0 0 2px",
            }}
          >
            {person.role}
          </p>
          <p
            style={{
              color: "rgba(212,175,90,0.55)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.78rem",
              margin: "0 0 10px",
            }}
          >
            {person.years}
          </p>
          <p
            style={{
              color: "rgba(220,200,180,0.8)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {person.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "32px 24px",
        transition: "background 0.4s",
        background: hovered ? "rgba(212,175,90,0.05)" : "transparent",
        borderRadius: 12,
        cursor: "default",
        position: "relative",
      }}
    >
      <p
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "rgba(212,175,90,0.15)",
          fontSize: 56,
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1,
          margin: 0,
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </p>

      <div
        style={{
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "transform 0.4s ease",
        }}
      >
        <ArchPhoto image={person.image} name={person.name} />
      </div>

      <div style={{ marginTop: 20 }}>
        <h3
          style={{
            color: "#fff",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            margin: "0 0 6px",
            letterSpacing: "0.02em",
          }}
        >
          {person.name}
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            margin: "6px 0",
          }}
        >
          <div style={{ width: 28, height: 1, background: "rgba(212,175,90,0.4)" }} />
          <div
            style={{
              width: 6,
              height: 6,
              background: "#D4AF5A",
              transform: "rotate(45deg)",
              opacity: 0.7,
            }}
          />
          <div style={{ width: 28, height: 1, background: "rgba(212,175,90,0.4)" }} />
        </div>

        <p
          style={{
            color: "#D4AF5A",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            margin: "0 0 3px",
          }}
        >
          {person.role}
        </p>
        <p
          style={{
            color: "rgba(212,175,90,0.55)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.82rem",
            margin: "0 0 14px",
          }}
        >
          {person.years}
        </p>
        <p
          style={{
            color: "rgba(220,200,180,0.8)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.92rem",
            lineHeight: 1.65,
            maxWidth: 210,
            margin: "0 auto",
          }}
        >
          {person.description}
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: 1,
          background: "#D4AF5A",
          opacity: 0.35,
          width: hovered ? "60%" : "0%",
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );
};

export default function PeopleBehindSJ() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "linear-gradient(160deg, #3d0e0e 0%, #2a0808 40%, #1e0606 100%)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", paddingTop: 40, paddingBottom: 8, paddingLeft: 16, paddingRight: 16 }}>
          <p
            style={{
              color: "#D4AF5A",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              opacity: 0.85,
              
              margin: "0 0 6px",
            }}
          >
            The Stewards of Our Legacy
          </p>
          <h2
            style={{
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              lineHeight: 1.2,
              margin: "0 0 14px",
            }}
          >
            The People Behind SJ
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div
              style={{
                height: 1,
                width: 60,
                background: "linear-gradient(to right, transparent, rgba(212,175,90,0.6))",
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                background: "rgba(212,175,90,0.7)",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                height: 1,
                width: 60,
                background: "linear-gradient(to left, transparent, rgba(212,175,90,0.6))",
              }}
            />
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "stretch",
            justifyContent: "center",
            maxWidth: 860,
            margin: "0 auto",
            padding: "16px 8px 40px",
          }}
        >
          {people.map((person, i) => (
            <div
              key={person.name}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                flex: isMobile ? undefined : 1,
                minWidth: 0,
              }}
            >
              <PersonCard person={person} index={i} isMobile={isMobile} />

              {i < people.length - 1 && (
                isMobile ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 24px",
                    }}
                  >
                    <div style={{ flex: 1, height: 1, background: "rgba(212,175,90,0.2)" }} />
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        background: "rgba(212,175,90,0.5)",
                        transform: "rotate(45deg)",
                        margin: "0 8px",
                      }}
                    />
                    <div style={{ flex: 1, height: 1, background: "rgba(212,175,90,0.2)" }} />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "40px 0",
                      alignSelf: "stretch",
                    }}
                  >
                    <div style={{ flex: 1, width: 1, background: "rgba(212,175,90,0.2)" }} />
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        background: "rgba(212,175,90,0.5)",
                        transform: "rotate(45deg)",
                        margin: "8px 0",
                      }}
                    />
                    <div style={{ flex: 1, width: 1, background: "rgba(212,175,90,0.2)" }} />
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}