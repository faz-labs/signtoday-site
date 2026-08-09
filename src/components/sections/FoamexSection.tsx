'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const FoamexSection: React.FC = () => {
  const { openQuoteForProduct } = useApp();

  return (
    <section id="foamex-boards" className="py-12 sm:py-16 section-bg-light text-center px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Foamex Boards</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 leading-relaxed px-2">
          Foamex is an extremely smooth PVC sheet material that has a brilliant white face. It&apos;s
          also fabrication friendly, which means it&apos;s easy to bend, cut, drill and glue. We&apos;re
          able to print high quality full colour images to one, or both sides, of foamex board.
          <br />
          <br />
          It&apos;s a great substrate to use for short to medium term applications – indoors or
          outdoors – like billboards, cut out figures, graphic panels, interior signage, retail signs,
          menu boards and exhibition graphics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Foamex Card 1 */}
          <div className="bg-white p-5 sm:p-6 shadow-md rounded-lg flex flex-col justify-between items-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-full flex flex-col items-center">
              <SafeImage
                src={IMAGES.foamex.card1}
                alt="Foamex Signs"
                fallbackCategory="foamex"
                className="w-full aspect-square max-w-[500px] mb-4 object-cover border-0 p-0 shadow-none rounded-none"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Foamex Signs</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                A rigid and lightweight, flat sign. Choose from four thicknesses - 1mm, 3mm, 5mm and
                10mm depending on the use.
              </p>
            </div>
            <button
              onClick={() => openQuoteForProduct('Foamex Signs', 'Foamex Boards')}
              className="w-full sm:w-auto btn-outline py-2 sm:py-1.5 px-6 rounded text-sm font-semibold cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Foamex Card 2 */}
          <div className="bg-white p-5 sm:p-6 shadow-md rounded-lg flex flex-col justify-between items-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-full flex flex-col items-center">
              <SafeImage
                src={IMAGES.foamex.card2}
                alt="Shaped Foamex Signs"
                fallbackCategory="foamex"
                className="w-full aspect-square max-w-[500px] mb-4 object-cover border-0 p-0 shadow-none rounded-none"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Shaped Foamex Signs</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                Let your imagination run wild and create a unique display piece for your business with
                a shaped foamex sign.
              </p>
            </div>
            <button
              onClick={() => openQuoteForProduct('Shaped Foamex Signs', 'Foamex Boards')}
              className="w-full sm:w-auto btn-outline py-2 sm:py-1.5 px-6 rounded text-sm font-semibold cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
