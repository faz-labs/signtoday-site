'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { setIsStudioModalOpen } = useApp();

  const handleScrollToSigns = () => {
    const foamexSection = document.getElementById('foamex-boards');
    if (foamexSection) {
      foamexSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] md:h-[600px] bg-cover bg-center flex items-center py-12 md:py-0 overflow-hidden"
      style={{ backgroundImage: `url('${IMAGES.heroBg}')` }}
    >
      <div className="absolute inset-0 hero-overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-5 sm:px-10 md:px-20 max-w-2xl text-white w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
          CUSTOM SIGNS, VINYL
          <br />
          GRAPHICS &amp; MORE
        </h1>

        <p className="mb-4 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
          Beautifully designed, well thought-out shop signs displayed across your business can have
          a huge impact on customer experience. A custom sign outside of your entrance will give a
          great first impression to passers-by and customers entering your premises. Once inside,
          wall and floor vinyl graphics can create amazing spaces for customers and employees
          alike. Way-finding signs can make it easier for customers to navigate, whether that&apos;s
          to a particular department, office or just the restrooms.
        </p>

        <p className="mb-6 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
          For best results, your custom sign needs to be manufactured to a high quality and be fit for
          purpose. We can help you plan your next project, to choose the right type of signage and
          graphics for your business, and we&apos;ll make it look amazing too.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => setIsStudioModalOpen(true)}
            className="w-full sm:w-auto border border-white py-3 sm:py-2 px-6 rounded hover:bg-white hover:text-black transition cursor-pointer font-semibold text-sm text-center"
          >
            Find a Studio
          </button>
          <button
            onClick={handleScrollToSigns}
            className="w-full sm:w-auto btn-purple py-3 sm:py-2 px-6 rounded text-sm cursor-pointer font-semibold text-center"
          >
            View all Signs
          </button>
        </div>
      </motion.div>
    </section>
  );
};
