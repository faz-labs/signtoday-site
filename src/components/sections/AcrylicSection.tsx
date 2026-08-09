'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const AcrylicSection: React.FC = () => {
  const { openQuoteForProduct } = useApp();

  return (
    <section
      id="acrylic-signage"
      className="relative min-h-[800px] md:h-[800px] bg-cover bg-center flex items-center overflow-hidden py-12 md:py-0"
      style={{ backgroundImage: `url('${IMAGES.acrylic.mainDisplay}')` }}
    >
      {/* Background Overlay (80% Opacity) */}
      <div className="absolute inset-0 bg-white/55 z-0 pointer-events-none"></div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 lg:w-5/12 text-left"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#6a1b9a] mb-2 block">
            Premium Signage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Acrylic Signage
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            Beautifully rich photo-realistic images that are both scratch and shatter resistant make for
            stunning high quality, durable displays that are guaranteed to make a big impression.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
            Clear acrylics are sub-surface printed in full colour with UV inks then fully backed up in white
            giving a photo-realistic quality finish. White acrylics are printed direct to board using UV
            inks. Both are suitable for indoor and outdoor use. 16mm or 25mm fixings are available as an
            optional extra at checkout.
          </p>

          <div>
            <button
              onClick={() => openQuoteForProduct('Acrylic Signage', 'Acrylic Signage')}
              className="w-full sm:w-auto btn-purple py-3 px-8 rounded-md font-bold cursor-pointer text-sm sm:text-base shadow-lg shadow-purple-900/20 text-center"
            >
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
