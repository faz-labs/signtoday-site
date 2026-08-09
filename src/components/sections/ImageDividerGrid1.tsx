'use client';

import React from 'react';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';

export const ImageDividerGrid1: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 overflow-hidden p-0 m-0">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0 w-full p-0 m-0">
        {IMAGES.gridDivider1.map((src, idx) => (
          <div key={idx} className="overflow-hidden group flex justify-center items-center p-0 m-0">
            <SafeImage
              src={src}
              alt={`Sign Showcase ${idx + 1}`}
              fallbackCategory="acrylic"
              className="w-full aspect-[343/412] max-w-[343px] max-h-[412px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-none border-0 p-0 m-0 shadow-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
