import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vitaly_cookies_consent');
    if (!consent) {
      // Delay showing it slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (action: 'accepted' | 'rejected' | 'configured') => {
    localStorage.setItem('vitaly_cookies_consent', action);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 w-full bg-[var(--theme-color-primary)] text-[#F5F3ED] py-[20px] px-[40px] z-[500] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
        >
          <p className="text-[14px] leading-[1.6] max-w-[800px] text-balance font-medium opacity-90">
            Usamos cookies para que esta web funcione y para entender cómo la usas. Las cookies técnicas son imprescindibles. Las de análisis y marketing las activas tú. Más información en nuestra <Link to="/legal/cookies" className="underline hover:text-[var(--theme-color-accent)] transition-colors">política de cookies</Link>.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button 
              onClick={() => handleConsent('rejected')}
              className="text-[13px] font-medium py-[10px] px-[20px] opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Rechazar
            </button>
            <button 
              onClick={() => handleConsent('configured')}
              className="text-[13px] font-medium py-[10px] px-[20px] border border-[rgba(245,243,237,0.3)] rounded-full hover:bg-[rgba(245,243,237,0.1)] transition-colors whitespace-nowrap"
            >
              Configurar
            </button>
            <button 
              onClick={() => handleConsent('accepted')}
              className="text-[13px] font-medium py-[10px] px-[24px] bg-[var(--theme-color-accent)] text-white rounded-full hover:bg-[#E63D20] transition-colors whitespace-nowrap"
            >
              Aceptar todas
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
