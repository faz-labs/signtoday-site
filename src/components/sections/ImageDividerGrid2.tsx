'use client';

import React from 'react';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';

export const ImageDividerGrid2: React.FC = () => {
  return (
    <div className="w-full bg-white overflow-hidden py-4 sm:py-6 px-2 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-2 w-full max-w-[1800px] mx-auto">
        {IMAGES.gridDivider2.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden group flex justify-center items-center p-0 m-0 last:sm:col-span-2 lg:last:col-span-1 justify-self-center w-full"
          >
            <SafeImage
              src={src}
              alt={`Sign Showcase Divider ${idx + 1}`}
              fallbackCategory="metal"
              className="w-full aspect-[343/412] max-w-[343px] max-h-[412px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-none border-0 p-0 m-0 shadow-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
