'use client';

import { useSparkle } from '@/hooks/useSparkle';
import { motion } from 'framer-motion';

export function Sparkles() {
  const sparkles = useSparkle();

  return (
    <div className="fixed inset-0 pointer-events-none">
      {sparkles.map((sparkle) => {
        const tx = Math.cos(sparkle.angle) * sparkle.distance;
        const ty = Math.sin(sparkle.angle) * sparkle.distance;

        return (
          <motion.div
            key={sparkle.id}
            initial={{ x: sparkle.x, y: sparkle.y, opacity: 1, scale: 1 }}
            animate={{
              x: sparkle.x + tx,
              y: sparkle.y + ty,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed w-1 h-1 rounded-full"
            style={{
              background: `hsl(var(--theme-accent))`,
              boxShadow: `0 0 8px hsl(var(--theme-accent))`,
            }}
          />
        );
      })}
    </div>
  );
}
