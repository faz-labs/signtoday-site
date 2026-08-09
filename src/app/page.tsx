'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryNav } from '@/components/CategoryNav';
import { FoamexSection } from '@/components/sections/FoamexSection';
import { AcrylicSection } from '@/components/sections/AcrylicSection';
import { ImageDividerGrid1 } from '@/components/sections/ImageDividerGrid1';
import { VinylSection } from '@/components/sections/VinylSection';
import { ImageDividerGrid2 } from '@/components/sections/ImageDividerGrid2';
import { CorrexSection } from '@/components/sections/CorrexSection';
import { MetalSection } from '@/components/sections/MetalSection';
import { EcoBannersSection } from '@/components/sections/EcoBannersSection';
import { Footer } from '@/components/Footer';

import { QuoteModal } from '@/components/modals/QuoteModal';
import { StudioModal } from '@/components/modals/StudioModal';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Category Navigation */}
      <CategoryNav />

      {/* Main Content */}
      <main className="flex-1">
        <FoamexSection />
        <AcrylicSection />
        <ImageDividerGrid1 />
        <VinylSection />
        <ImageDividerGrid2 />
        <CorrexSection />
        <MetalSection />
        <EcoBannersSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal />
      <StudioModal />
    </div>
  );
}
