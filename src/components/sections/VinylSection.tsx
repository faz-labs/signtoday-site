'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { IMAGES } from '@/lib/imagesData';
import { motion } from 'framer-motion';

export const VinylSection: React.FC = () => {
  const { openQuoteForProduct } = useApp();

  const section2Cards = [
    {
      title: 'Flat Wall Vinyl',
      desc: 'Flat wall vinyl is a great alternative to paint or wallpaper, and can quickly transform a room into a fully branded space with crisp, vivid graphics.',
      img: IMAGES.vinyl.card1,
    },
    {
      title: 'Brick Wall Vinyl',
      desc: 'Industrial spaces can benefit too. Brick wall vinyl is designed to adhere seamlessly to bare brick, uneven or textured surfaces without peeling.',
      img: IMAGES.vinyl.card2,
    },
  ];

  const section3Cards = [
    {
      title: 'Window Vinyl',
      desc: 'Choose fully printed window vinyl for privacy or shading, or cut lettering for logos.',
      img: IMAGES.vinyl.card3,
    },
    {
      title: 'Floor Vinyl',
      desc: 'Non-slip self-adhesive floor vinyl suitable for high-footfall indoor or outdoor hard floors.',
      img: IMAGES.vinyl.card4,
    },
    {
      title: 'Cut Lettering Vinyl',
      desc: 'Precision cut vinyl lettering and custom logos tailored for glass, walls, and vehicle graphics.',
      img: IMAGES.vinyl.card5,
    },
  ];

  return (
    <div id="vinyl-graphics" className="w-full">
      {/* SECTION 1: Vinyl Hero Banner (700px Height, LEFT ALIGNED TEXT, Background Overlay) */}
      <section
        className="relative min-h-[700px] md:h-[700px] bg-cover bg-center flex items-center overflow-hidden py-12 md:py-0"
        style={{ backgroundImage: `url('${IMAGES.vinyl.bannerBg}')` }}
      >
        {/* Background Overlay with Opacity */}
        <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none"></div>

        {/* Left Content Div (No Background, No Border) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 flex justify-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 lg:w-5/12 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#6a1b9a] mb-2 block">
              Custom Graphics &amp; Decals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vinyl Graphics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Vinyl graphics are a quick and effective way to bring personality to your office, store,
              classroom, gym, bar, or restaurant. Create an immersive experience with directional signage,
              motivational quotes, or custom icons that compliment your brand.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
              We&apos;ve been producing printed vinyl for years with extensive experience across diverse
              substrates. Explore our custom vinyl display options below:
            </p>
            <div>
              <button
                onClick={() => openQuoteForProduct('Vinyl Graphics', 'Vinyl Graphics')}
                className="w-full sm:w-auto btn-purple py-3 px-8 rounded-md font-bold cursor-pointer text-sm sm:text-base shadow-lg shadow-purple-900/20 text-center"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: 2 Cards Section (800px Height, 2 Cards in Center, 500x500px Images) */}
      <section className="min-h-[800px] md:h-[800px] flex flex-col justify-center items-center py-12 section-bg-light px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl mx-auto text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Featured Wall &amp; Surface Vinyl
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {section2Cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 shadow-md rounded-lg flex flex-col justify-between items-center transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-full flex flex-col items-center">
                  <SafeImage
                    src={card.img}
                    alt={card.title}
                    fallbackCategory="vinyl"
                    className="w-full aspect-square max-w-[500px] max-h-[500px] mb-4 object-cover border-0 p-0 shadow-none rounded-none"
                  />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed text-center">
                    {card.desc}
                  </p>
                </div>
                <button
                  onClick={() => openQuoteForProduct(card.title, 'Vinyl Graphics')}
                  className="w-full sm:w-auto btn-outline py-2 sm:py-1.5 px-6 rounded text-sm font-semibold cursor-pointer"
                >
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: 3 Cards Section (650px Height, 3 Cards in Center, 350x350px Images) */}
      <section className="min-h-[650px] md:h-[650px] flex flex-col justify-center items-center py-12 section-bg-white px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl mx-auto text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            Specialized Vinyl Solutions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {section3Cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between items-center rounded-md"
              >
                <div className="w-full flex flex-col items-center">
                  <SafeImage
                    src={card.img}
                    alt={card.title}
                    fallbackCategory="vinyl"
                    className="w-full aspect-square max-w-[350px] max-h-[350px] mb-3 object-cover border-0 p-0 shadow-none rounded-none"
                  />
                  <h4 className="font-bold text-gray-800 text-base mb-1.5">{card.title}</h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed text-center sm:h-12">
                    {card.desc}
                  </p>
                </div>
                <button
                  onClick={() => openQuoteForProduct(card.title, 'Vinyl Graphics')}
                  className="w-full sm:w-auto btn-outline py-1.5 px-4 text-xs rounded font-semibold cursor-pointer"
                >
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
