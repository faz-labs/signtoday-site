'use client';

import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  isStudioModalOpen: boolean;
  setIsStudioModalOpen: (open: boolean) => void;
  selectedProductForQuote: { name: string; category: string } | null;
  setSelectedProductForQuote: (product: { name: string; category: string } | null) => void;
  openQuoteForProduct: (productName: string, categoryName: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isStudioModalOpen, setIsStudioModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<{
    name: string;
    category: string;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const openQuoteForProduct = (productName: string, categoryName: string) => {
    setSelectedProductForQuote({ name: productName, category: categoryName });
    setIsQuoteModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        isStudioModalOpen,
        setIsStudioModalOpen,
        selectedProductForQuote,
        setSelectedProductForQuote,
        openQuoteForProduct,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
