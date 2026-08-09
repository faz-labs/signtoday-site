'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const CorrexSection: React.FC = () => {
  const { openQuoteForProduct } = useApp();

  return (
    <section id="correx-boards" className="py-12 sm:py-16 section-bg-light text-center px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Correx Boards</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 leading-relaxed px-2">
          Correx boards are constructed of twin-walled polypropylene, which gives a tough, durable and
          impact resistant material. This waterproof material is available in 4mm or 6mm, and is
          suitable for all types of internal and external site boards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Correx Card 1 */}
          <div className="bg-white p-5 sm:p-6 shadow-md rounded-lg flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <SafeImage
                src={IMAGES.correx.card1}
                alt="Correx Signs"
                fallbackCategory="correx"
                className="w-full aspect-square max-w-[500px] mb-4 object-cover border-0 p-0 shadow-none rounded-none"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 w-full text-left">Correx Signs</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 w-full text-left leading-relaxed">
                For a lightweight yet sturdy wall structure that can be installed quickly, choose one of
                our strong correx boards.
              </p>
            </div>
            <div className="text-left w-full">
              <button
                onClick={() => openQuoteForProduct('Correx Signs', 'Correx Boards')}
                className="w-full sm:w-auto btn-outline py-2 sm:py-1 px-4 rounded text-sm font-semibold cursor-pointer text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Correx Card 2 */}
          <div className="bg-white p-5 sm:p-6 shadow-md rounded-lg flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col items-center">
              <SafeImage
                src={IMAGES.correx.card2}
                alt="Shaped Correx Signs"
                fallbackCategory="correx"
                className="w-full aspect-square max-w-[500px] mb-4 object-cover border-0 p-0 shadow-none rounded-none"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 w-full text-left">Shaped Correx Signs</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 w-full text-left leading-relaxed">
                Shaped correx boards are a great solution when you want to create a really eye-catching
                display, inside or outside.
              </p>
            </div>
            <div className="text-left w-full">
              <button
                onClick={() => openQuoteForProduct('Shaped Correx Signs', 'Correx Boards')}
                className="w-full sm:w-auto btn-outline py-2 sm:py-1 px-4 rounded text-sm font-semibold cursor-pointer text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
