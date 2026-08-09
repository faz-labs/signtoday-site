'use client';

import React, { useState, useEffect } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackCategory?: string;
}

const DEFAULT_FALLBACKS: Record<string, string> = {
  foamex: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  acrylic: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=800&q=80',
  vinyl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
  correx: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80',
  metal: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
  eco: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
  hero: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80',
  default: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
};

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory = 'default',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      const fallback = DEFAULT_FALLBACKS[fallbackCategory] || DEFAULT_FALLBACKS.default;
      setImgSrc(fallback);
    }
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};
