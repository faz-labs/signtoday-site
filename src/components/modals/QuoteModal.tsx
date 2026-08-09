'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { X, Send, CheckCircle2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, setIsQuoteModalOpen, selectedProductForQuote, showToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    signType: 'Foamex Signs',
    width: '',
    height: '',
    notes: '',
  });

  useEffect(() => {
    if (selectedProductForQuote) {
      setFormData((prev) => ({
        ...prev,
        signType: selectedProductForQuote.name,
        notes: `Inquiry for ${selectedProductForQuote.name} (${selectedProductForQuote.category})`,
      }));
    }
  }, [selectedProductForQuote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      showToast('Quote request submitted successfully!');
      setSubmitted(false);
      setIsQuoteModalOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQuoteModalOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="bg-[#4a148c] text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-300" />
                  <h3 className="font-bold text-lg">Request a Custom Quote</h3>
                </div>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="p-12 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600 text-sm">
                    Your quote request has been received. A Sign Today specialist will get back to
                    you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                  <p className="text-sm text-gray-600">
                    Tell us about your project dimensions, substrate requirements, and timeline.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0330 010 3521"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Selected Sign / Substrate
                      </label>
                      <input
                        type="text"
                        value={formData.signType}
                        onChange={(e) => setFormData({ ...formData, signType: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Width (mm)
                      </label>
                      <input
                        type="text"
                        value={formData.width}
                        onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                        placeholder="e.g. 1200"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Height (mm)
                      </label>
                      <input
                        type="text"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        placeholder="e.g. 2400"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Project Notes / Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe your design specifications, fixing options or installation needs..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-purple py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-4 h-4" /> Submit Quote Request
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
