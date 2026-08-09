'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const MetalSection: React.FC = () => {
  const { openQuoteForProduct } = useApp();

  const row1Cards = [
    {
      title: 'Aluminium Signs',
      desc: 'Use as individual signs, or join multiple aluminium panels together to create a long barrier and contain a site of any size or shape.',
      img: IMAGES.metal.card1,
    },
    {
      title: 'Shaped Aluminium Signs',
      desc: 'Aluminium signs can be shaped just like our foamex or correx boards, to add more visual interest to your signage.',
      img: IMAGES.metal.card2,
    },
  ];

  const row2Cards = [
    {
      title: 'Tray Signs',
      desc: 'Tray signs are made from aluminium and covered in full-colour laminated vinyl. A great solution for navigation and way finding signage indoors or outdoors.',
      img: IMAGES.metal.card3,
    },
    {
      title: 'Pavement Signs',
      desc: 'Our collection of pavement signs includes A-boards to hold A1 posters, swinger signs for long term messages, and spring signs for windy environments.',
      img: IMAGES.metal.card4,
    },
    {
      title: 'Magnetic Signs',
      desc: 'Magnetic signs allow you to instantly brand your car or van. Great if you change vehicles frequently or if you only want to display graphics some of the time.',
      img: IMAGES.metal.card5,
    },
  ];

  return (
    <section id="metal-signage" className="py-12 sm:py-16 section-bg-white text-center px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Metal Signage</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 leading-relaxed px-2">
          Our composite aluminium signs are a very rigid yet lightweight and hard wearing solution.
          They are very temperature-stable and offer great resistance to physical impact.
          <br />
          <br />
          Commonly used for shop fascias, wall signs, information panels or directional signage in
          museums, car parks, hospitals, residential developments and educational facilities, they can
          be fixed to posts, drilled, screwed or nailed to walls.
          <br />
          <br />
          They are ideal for indoor or outdoor use, and because they are made of aluminium, they are rust
          proof so will continue to look great for years.
        </p>

        {/* Row 1: 2 Cards in Center (500x500px images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 text-center">
          {row1Cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 shadow-md rounded-lg flex flex-col justify-between items-center transition-all hover:shadow-xl hover:-translate-y-1 h-full"
            >
              <div className="w-full flex flex-col items-center">
                <SafeImage
                  src={card.img}
                  alt={card.title}
                  fallbackCategory="metal"
                  className="w-full aspect-square max-w-[500px] max-h-[500px] mb-4 object-cover border-0 p-0 shadow-none rounded-none"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed text-center">
                  {card.desc}
                </p>
              </div>
              <button
                onClick={() => openQuoteForProduct(card.title, 'Metal Signage')}
                className="w-full sm:w-auto btn-outline py-2 sm:py-1.5 px-6 rounded text-sm font-semibold cursor-pointer mt-auto"
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Cards in Center (352x352px images render size, zero text overlap) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {row2Cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center rounded-md h-full"
            >
              <div className="w-full flex flex-col items-center">
                <SafeImage
                  src={card.img}
                  alt={card.title}
                  fallbackCategory="metal"
                  className="w-full aspect-square max-w-[352px] max-h-[352px] mb-3 object-cover border-0 p-0 shadow-none rounded-none"
                />
                <h4 className="font-bold text-gray-800 text-base mb-2">{card.title}</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed text-center min-h-[64px] flex items-center justify-center">
                  {card.desc}
                </p>
              </div>
              <button
                onClick={() => openQuoteForProduct(card.title, 'Metal Signage')}
                className="w-full sm:w-auto btn-outline py-1.5 px-4 text-xs rounded font-semibold cursor-pointer mt-auto"
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
