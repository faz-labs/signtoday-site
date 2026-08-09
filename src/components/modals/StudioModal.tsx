'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { X, MapPin, Mail, ExternalLink, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const STUDIO_DETAILS = {
  name: 'Sign Today Studio',
  address: '75 Green Street, London E7 8JF',
  mapLink: 'https://maps.app.goo.gl/jCYCSyXUeCzuHgBh9',
  email: 'info@signttoday.co.uk',
  whatsapp: '+44 7969 559746',
  whatsappLink: 'https://wa.me/447969559746',
  phoneTel: 'tel:+447969559746',
};

export const StudioModal: React.FC = () => {
  const { isStudioModalOpen, setIsStudioModalOpen } = useApp();

  return (
    <AnimatePresence>
      {isStudioModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsStudioModalOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#4a148c] text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-300" />
                  <h3 className="font-bold text-lg">Our Studio Location</h3>
                </div>
                <button
                  onClick={() => setIsStudioModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block">
                        Main Head Studio
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mt-0.5">
                        {STUDIO_DETAILS.name}
                      </h4>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Open Now
                    </span>
                  </div>

                  <div className="space-y-2.5 text-sm text-gray-700 pt-1">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#6a1b9a] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 block">Address:</span>
                        <span>{STUDIO_DETAILS.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#6a1b9a] shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Email: </span>
                        <a
                          href={`mailto:${STUDIO_DETAILS.email}`}
                          className="text-purple-700 font-medium hover:underline"
                        >
                          {STUDIO_DETAILS.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-green-600 shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">WhatsApp: </span>
                        <a
                          href={STUDIO_DETAILS.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 font-semibold hover:underline"
                        >
                          {STUDIO_DETAILS.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={STUDIO_DETAILS.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-purple py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-md text-white"
                  >
                    <MapPin className="w-4 h-4" /> Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={STUDIO_DETAILS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
