// import { Variants } from 'framer-motion';

// export const fadeUpVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// export const fadeInVariants: Variants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// export const blurRevealVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     filter: 'blur(10px)',
//   },
//   visible: {
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 1,
//       ease: 'easeOut',
//     },
//   },
// };

// export const slideInRightVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 100,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// export const slideInLeftVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -100,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// export const scaleInVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// export const floatVariants: Variants = {
//   animate: {
//     y: [0, -20, 0],
//     transition: {
//       duration: 4,
//       ease: 'easeInOut',
//       repeat: Infinity,
//     },
//   },
// };

// export const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// export const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// export const hoverScaleVariants: Variants = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.05,
//     transition: {
//       duration: 0.3,
//       ease: 'easeOut',
//     },
//   },
// };

// export const tapVariants: Variants = {
//   tap: { scale: 0.95 },
// };

// export const rotateVariants: Variants = {
//   animate: {
//     rotate: 360,
//     transition: {
//       duration: 20,
//       ease: 'linear',
//       repeat: Infinity,
//     },
//   },
// };

// export const pulseGlowVariants: Variants = {
//   animate: {
//     opacity: [0.5, 1, 0.5],
//     transition: {
//       duration: 2,
//       ease: 'easeInOut',
//       repeat: Infinity,
//     },
//   },
// };

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};