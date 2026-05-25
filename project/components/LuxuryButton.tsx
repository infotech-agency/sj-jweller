// 'use client';

// import { motion } from 'framer-motion';
// import React from 'react';

// interface LuxuryButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
//   variant?: 'primary' | 'secondary' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
//   icon?: React.ReactNode;
// }

// const sizeClasses = {
//   sm: 'px-4 py-2 text-sm',
//   md: 'px-6 py-3 text-base',
//   lg: 'px-8 py-4 text-lg',
// };

// const variantClasses = {
//   primary: 'bg-primary text-white',
//   secondary: 'bg-accent text-primary',
//   outline: 'bg-transparent text-primary border-2 border-primary',
// };

// export const LuxuryButton = React.forwardRef<
//   HTMLButtonElement,
//   LuxuryButtonProps
// >(
//   (
//     {
//       children,
//       variant = 'primary',
//       size = 'md',
//       icon,
//       className = '',
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <motion.button
//         ref={ref}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className={`relative overflow-hidden rounded-md font-medium tracking-wide transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//         style={{
//           background:
//             variant === 'primary' ? 'hsl(var(--theme-primary))' : undefined,
//           borderColor:
//             variant === 'outline' ? 'hsl(var(--theme-primary))' : undefined,
//           color:
//             variant === 'secondary' ? 'hsl(var(--theme-primary))' : undefined,
//         } as React.CSSProperties}
//         {...(props as any)}
//       >
//         {/* Shimmer Effect */}
//         <motion.div
//           className="absolute inset-0 opacity-0"
//           whileHover={{
//             opacity: 1,
//             transition: {
//               duration: 0.5,
//             },
//           }}
//           style={{
//             background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
//             backgroundSize: '200% 100%',
//           }}
//         />

//         {/* Glow Effect */}
//         <div
//           className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 blur"
//           style={{
//             background: 'hsl(var(--theme-primary))',
//           }}
//         />

//         {/* Content */}
//         <span className="relative flex items-center justify-center gap-2">
//           {icon}
//           {children}
//         </span>
//       </motion.button>
//     );
//   }
// );

// LuxuryButton.displayName = 'LuxuryButton';
'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useState } from 'react';

interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

const variantStyles: Record<
  NonNullable<LuxuryButtonProps['variant']>,
  { bg: string; color: string; border: string; glow: string; shimmer: string }
> = {
  primary: {
    bg: 'linear-gradient(135deg, #8B2E13 0%, #C1502A 50%, #8B2E13 100%)',
    color: '#FDF6F0',
    border: '1px solid rgba(212,169,106,0.35)',
    glow: 'rgba(193,80,42,0.55)',
    shimmer: 'rgba(255,220,180,0.4)',
  },
  gold: {
    bg: 'linear-gradient(135deg, #7A5C1E 0%, #D4A96A 40%, #F5DF90 60%, #D4A96A 80%, #7A5C1E 100%)',
    color: '#3D1A0E',
    border: '1px solid rgba(255,220,120,0.5)',
    glow: 'rgba(212,169,106,0.65)',
    shimmer: 'rgba(255,255,200,0.55)',
  },
  secondary: {
    bg: 'linear-gradient(135deg, #F2D9CC 0%, #EBC5B0 50%, #F2D9CC 100%)',
    color: '#3D1A0E',
    border: '1px solid rgba(139,46,19,0.2)',
    glow: 'rgba(193,80,42,0.2)',
    shimmer: 'rgba(255,255,255,0.5)',
  },
  outline: {
    bg: 'transparent',
    color: '#8B2E13',
    border: '1.5px solid #8B2E13',
    glow: 'rgba(139,46,19,0.2)',
    shimmer: 'rgba(139,46,19,0.08)',
  },
};

export const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ children, variant = 'primary', size = 'md', icon, className = '', disabled, ...props }, ref) => {
    const [hovered, setHovered] = useState(false);
    const [shimmerX, setShimmerX] = useState(50);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    const v = variantStyles[variant];

    const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width - 0.5);
      mouseY.set((e.clientY - r.top) / r.height - 0.5);
      setShimmerX(((e.clientX - r.left) / r.width) * 100);
    };

    const onMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setHovered(false);
    };

    return (
      <div style={{ position: 'relative', display: 'inline-block', perspective: 600 }}>
        {/* Outer glow halo */}
        <motion.div
          animate={hovered && !disabled ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: -8, borderRadius: 8,
            background: v.glow, filter: 'blur(16px)', pointerEvents: 'none',
          }}
        />

        <motion.button
          ref={ref}
          disabled={disabled}
          onMouseMove={onMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onMouseLeave}
          className={`relative overflow-hidden font-semibold uppercase tracking-widest ${sizeClasses[size]} ${className}`}
          style={{
            background: v.bg,
            color: v.color,
            border: v.border,
            borderRadius: 6,
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            fontFamily: "'Jost', sans-serif",
            boxShadow: hovered && !disabled
              ? `0 8px 28px ${v.glow}, 0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)`
              : `0 2px 10px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)`,
            transition: 'box-shadow 0.3s ease',
            rotateX, rotateY,
            transformStyle: 'preserve-3d',
          } as any}
          {...(props as any)}
        >
          {/* Sweep shimmer on hover */}
          <motion.div
            animate={hovered && !disabled ? { opacity: 1, backgroundPosition: '200% 0' } : { opacity: 0, backgroundPosition: '-100% 0' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `linear-gradient(90deg, transparent, ${v.shimmer}, transparent)`,
              backgroundSize: '200% 100%',
            }}
          />

          {/* Cursor radial glow */}
          <div
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `radial-gradient(ellipse 50px 100% at ${shimmerX}% 50%, ${v.shimmer}, transparent)`,
              opacity: hovered && !disabled ? 1 : 0,
              transition: 'opacity 0.2s ease',
            }}
          />

          {/* Top highlight edge */}
          <div style={{
            position: 'absolute', top: 0, left: '8%', right: '8%', height: 1, pointerEvents: 'none',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
          }} />

          {/* Content */}
          <span className="relative flex items-center justify-center gap-2">
            {icon}
            {children}
          </span>
        </motion.button>
      </div>
    );
  }
);

LuxuryButton.displayName = 'LuxuryButton';