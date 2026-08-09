'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Phone, FileText, MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { setIsQuoteModalOpen, setIsStudioModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNum = '0330 010 3521';
  const telHref = 'tel:03300103521';

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Bar with Direct Phone Call */}
      <div className="bg-[#4a148c] text-white py-2 px-3 sm:px-6 text-xs flex flex-wrap justify-between sm:justify-end items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
          <a
            href={telHref}
            className="hover:text-purple-200 transition flex items-center gap-1.5 cursor-pointer py-1 font-bold text-white bg-purple-950/40 px-2.5 py-1 rounded-md border border-purple-400/30"
          >
            <Phone className="w-3.5 h-3.5 text-green-400 fill-green-400/20 animate-pulse" />
            <span>Call us: {phoneNum}</span>
          </a>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="hover:text-purple-200 transition flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 text-xs text-white py-1"
          >
            <FileText className="w-3.5 h-3.5 text-purple-300" />
            <span className="font-medium">Request a quote</span>
          </button>
          <button
            onClick={() => setIsStudioModalOpen(true)}
            className="hover:text-purple-200 transition flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 text-xs text-white py-1"
          >
            <MapPin className="w-3.5 h-3.5 text-purple-300" />
            <span className="font-medium hidden xs:inline">Find a studio</span>
            <span className="font-medium xs:hidden">Studio</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 text-white py-3.5 px-4 sm:px-8 md:px-12 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <a href="#" className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center">
            <span className="text-green-500">Sign</span>
            <span className="text-white ml-1">Today</span>
            <span className="text-purple-400 ml-0.5">*</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a className="hover:text-gray-300 transition py-1" href="#">
            Websites
          </a>
          <a className="hover:text-gray-300 transition py-1" href="#">
            Digital Marketing
          </a>
          <a className="hover:text-gray-300 transition py-1" href="#">
            Printing
          </a>
          <a className="text-purple-400 font-bold hover:text-purple-300 transition py-1" href="#foamex-boards">
            Signs
          </a>
          <a className="hover:text-gray-300 transition py-1" href="#">
            Clothing
          </a>
          <button
            onClick={() => setIsStudioModalOpen(true)}
            className="hover:text-gray-300 transition bg-transparent border-none text-white font-semibold text-sm cursor-pointer py-1"
          >
            Find a Studio
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none transition active:scale-95"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-purple-300" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-2 text-base font-semibold shadow-2xl overflow-hidden"
          >
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-white py-2 border-b border-gray-800/60"
              href="#"
            >
              Websites
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-white py-2 border-b border-gray-800/60"
              href="#"
            >
              Digital Marketing
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-white py-2 border-b border-gray-800/60"
              href="#"
            >
              Printing
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-purple-400 py-2 border-b border-gray-800/60 font-bold"
              href="#foamex-boards"
            >
              Signs
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-white py-2 border-b border-gray-800/60"
              href="#"
            >
              Clothing
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsStudioModalOpen(true);
              }}
              className="block text-gray-200 hover:text-white py-2 text-left w-full font-semibold"
            >
              Find a Studio
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
