'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const EcoBannersSection: React.FC = () => {
  const { openQuoteForProduct } = useApp();

  const cards = [
    {
      title: 'PVC-Free Banners',
      desc: 'Durable 150gsm PVC-Free Banners are recyclable and significantly better for the planet than PVC. After use, they can be disposed of safely without harm to the environment.',
      img: IMAGES.eco.card1,
    },
    {
      title: 'PVC-Free Mesh Banners',
      desc: 'Our 300gsm PVC-Free Mesh Banners have the strength, performance, look, and feel of PVC mesh banners, with only half the weight. Suitable for all types of internal and external signs.',
      img: IMAGES.eco.card2,
    },
    {
      title: 'Recyclable Event Boards',
      desc: 'Save money with our cost-effective twin pack of Event Boards. Printed on 100% fibre based pulp display board, they can be recycled with normal cardboard waste after use.',
      img: IMAGES.eco.card3,
    },
    {
      title: 'Eco Banners',
      desc: 'Designed with the eco-conscious exhibitor in mind, the Tension X Eco Banner is easy to assemble and very sturdy, folding down into an ultra compact carry bag.',
      img: IMAGES.eco.card4,
    },
  ];

  return (
    <section id="eco-banners" className="py-12 sm:py-16 section-bg-light text-center px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Eco Banners &amp; Boards</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base mb-6 leading-relaxed px-2">
          Eco-friendly printing doesn&apos;t have to be limited to small, paper-based marketing. We&apos;ve got a
          whole range of large signage style products that are equally as green.
          <br />
          <br />
          Our range of PVC Free Banners and Eco Banners offer display options whose performance are
          equal to, if not superior to their PVC counterparts. These products offer a neat way to
          increase your eco credentials without compromising on quality.
        </p>

        <button
          onClick={() => openQuoteForProduct('Eco Banners & Boards', 'Eco Signage')}
          className="w-full sm:w-auto btn-purple py-3 sm:py-2 px-8 rounded mb-8 sm:mb-12 uppercase tracking-wider font-semibold cursor-pointer text-xs sm:text-sm"
        >
          ALL ECO SIGNAGE QUOTE
        </button>

        <div id="eco-cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 shadow-md rounded-lg text-left flex flex-col justify-between items-center transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-full flex flex-col items-center">
                <SafeImage
                  src={card.img}
                  alt={card.title}
                  fallbackCategory="eco"
                  className="w-full aspect-square max-w-[500px] object-cover mb-4 border-0 p-0 shadow-none rounded-none"
                />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 w-full">{card.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed w-full">{card.desc}</p>
              </div>
              <div className="w-full">
                <button
                  onClick={() => openQuoteForProduct(card.title, 'Eco Banners & Boards')}
                  className="w-full sm:w-auto btn-outline py-2 sm:py-1 px-4 rounded text-xs sm:text-sm uppercase font-semibold cursor-pointer"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
