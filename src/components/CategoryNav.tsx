'use client';

import React from 'react';

export const CategoryNav: React.FC = () => {
  const categories = [
    { label: 'Foamex Boards', href: '#foamex-boards' },
    { label: 'Acrylic Signage', href: '#acrylic-signage' },
    { label: 'Vinyl Graphics', href: '#vinyl-graphics' },
    { label: 'Correx Boards', href: '#correx-boards' },
    { label: 'Metal Signage', href: '#metal-signage' },
    { label: 'Eco Banners & Boards', href: '#eco-banners' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#4a148c] text-white py-3 sm:py-4 px-4 overflow-x-auto sticky top-0 z-30 shadow-md scrollbar-none">
      <ul className="flex justify-start md:justify-center min-w-max gap-6 sm:gap-8 text-xs sm:text-sm font-semibold px-2">
        {categories.map((cat) => (
          <li key={cat.href}>
            <a
              href={cat.href}
              onClick={(e) => handleScroll(e, cat.href)}
              className="hover:text-purple-200 transition-colors border-b-2 border-transparent hover:border-purple-300 pb-1 whitespace-nowrap block py-0.5"
            >
              {cat.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
