'use client';

import React from 'react';

interface BackgroundImageProps {
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export const AnotherBg: React.FC<BackgroundImageProps> = ({
  imageUrl = '/assets/jewelry_banner_hd.png',
  className = '',
  children,
}) => {
  return (
    <div 
      className={`w-full h-screen bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default AnotherBg;