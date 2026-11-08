import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('anita_currency');
      if (saved && (saved === 'INR' || saved === 'USD')) {
        setCurrency(saved);
      }
    } catch (e) {}
  }, []);

  const toggleCurrency = () => {
    const next = currency === 'INR' ? 'USD' : 'INR';
    setCurrency(next);
    try {
      localStorage.setItem('anita_currency', next);
    } catch (e) {}
  };

  const formatPrice = (inrVal, usdVal) => {
    if (currency === 'INR') {
      return `₹${inrVal.toLocaleString('en-IN')}`;
    }
    return `$${usdVal} USD`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    return {
      currency: 'INR',
      setCurrency: () => {},
      toggleCurrency: () => {},
      formatPrice: (inrVal, usdVal) => `₹${inrVal?.toLocaleString('en-IN')}`
    };
  }
  return context;
}
