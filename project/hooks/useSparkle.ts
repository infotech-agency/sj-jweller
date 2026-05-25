'use client';

import { useEffect, useState } from 'react';

export interface Sparkle {
  id: string;
  x: number;
  y: number;
  angle: number;
  distance: number;
}

const createSparkles = (
  e: MouseEvent,
  count: number = 12
): Sparkle[] => {
  const sparkles: Sparkle[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const distance = 50 + Math.random() * 100;

    sparkles.push({
      id: `${e.clientX}-${e.clientY}-${i}`,
      x: e.clientX,
      y: e.clientY,
      angle,
      distance,
    });
  }

  return sparkles;
};

export const useSparkle = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparkles = createSparkles(e);
      setSparkles((prev) => [...prev, ...newSparkles]);

      setTimeout(() => {
        setSparkles((prev) =>
          prev.filter((s) => !newSparkles.some((ns) => ns.id === s.id))
        );
      }, 800);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return sparkles;
};
