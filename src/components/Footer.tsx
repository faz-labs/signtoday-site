'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { STUDIO_DETAILS } from '@/components/modals/StudioModal';
import { Globe, ArrowUp, MapPin, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsStudioModalOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4a148c] text-white py-10 sm:py-12 text-center px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Talk to an expert</h2>
        <p className="mb-6 text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl mx-auto px-2">
          If you need help planning your next sign or graphics project, contact our Sign Today studio team
          who&apos;ll be thrilled to offer their expert advice.
        </p>

        {/* Studio Info Card in Footer */}
        <div className="bg-purple-950/60 border border-purple-400/20 rounded-xl p-5 mb-8 max-w-lg mx-auto text-left space-y-3 backdrop-blur-xs">
          <div className="flex items-center gap-2 text-purple-300 font-bold text-sm border-b border-purple-800/60 pb-2">
            <MapPin className="w-4 h-4 text-green-400" />
            <span>Sign Today Studio</span>
          </div>

          <p className="text-xs sm:text-sm text-gray-200 flex items-start gap-2">
            <span className="font-semibold text-white">Address:</span> {STUDIO_DETAILS.address}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
            <a
              href={`mailto:${STUDIO_DETAILS.email}`}
              className="flex items-center gap-1.5 text-purple-200 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" /> {STUDIO_DETAILS.email}
            </a>

            <a
              href={STUDIO_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-400 font-semibold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp: {STUDIO_DETAILS.whatsapp}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-8">
          <button
            onClick={() => setIsStudioModalOpen(true)}
            className="w-full sm:w-auto border border-white py-3 sm:py-2.5 px-6 rounded-lg hover:bg-white hover:text-[#4a148c] transition text-xs sm:text-sm font-semibold cursor-pointer"
          >
            Find a studio
          </button>
          <a
            href={STUDIO_DETAILS.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-3 sm:py-2.5 px-6 rounded-lg transition text-xs sm:text-sm font-semibold cursor-pointer inline-flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-4 h-4" /> View Map
          </a>
        </div>
      </div>

      {/* Back to top button */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <button
          onClick={scrollToTop}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 transition border border-white/20 flex items-center gap-1.5 text-xs font-medium"
          title="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" /> Back to top
        </button>
      </div>

      <div className="mt-6 sm:mt-8 text-xs text-purple-200 border-t border-purple-800/80 pt-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4 text-center md:text-left">
        <p className="leading-relaxed">© Copyright - 2026 Sign Today Terms &amp; Conditions | Privacy Policy | Press &amp; Media</p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a className="hover:text-white transition py-1 sm:py-0" href="#">
            Become a Sign Today Partner
          </a>
          <a className="hover:text-white transition py-1 sm:py-0" href="#">
            Sell to our network
          </a>
          <a className="hover:text-white transition py-1 sm:py-0" href="#">
            Sign In
          </a>
          <span className="flex items-center gap-1 font-semibold text-white py-1 sm:py-0">
            <Globe className="w-3.5 h-3.5" /> UK
          </span>
        </div>
      </div>
    </footer>
  );
};
