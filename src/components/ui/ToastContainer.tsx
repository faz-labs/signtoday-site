'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toastMessage } = useApp();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 border border-gray-700"
        >
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
