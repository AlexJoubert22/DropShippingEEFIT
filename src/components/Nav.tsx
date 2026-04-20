import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from './Shared';

export const Nav = () => {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(245, 243, 237, 0)", "rgba(245, 243, 237, 0.8)"]);
  const navBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);

  const { items, setIsDrawerOpen, setIsQuizOpen } = useCart();
  const [bounce, setBounce] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (totalItems > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav 
        style={{ backgroundColor: navBg, backdropFilter: navBlur }}
        className="fixed top-0 left-0 right-0 h-[72px] z-40 flex items-center justify-between px-6 md:px-10 border-b border-[var(--theme-color-border)]"
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6 z-50 text-primary"
          >
            <div className="w-full h-[1.5px] bg-current"></div>
            <div className="w-full h-[1.5px] bg-current"></div>
          </button>
          
          <Link to="/" className="flex items-center gap-1.5 group z-50" title="Distribuidor oficial en Europa">
            <span className="text-[15px] font-medium tracking-[0.2em] transform translate-y-px">VITALY</span>
            <span className="text-[12px] opacity-40 tracking-[0.3em]">×</span>
            <span className="text-[15px] font-medium tracking-[0.15em] text-[var(--theme-color-accent)] transform translate-y-px">eefit</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-[32px] text-[13px] text-secondary">
          <Link to="/#dispositivos" className="hover:text-primary transition-colors">Dispositivos</Link>
          <Link to="/comparador" className="hover:text-primary transition-colors">Comparar</Link>
          <Link to="/tecnologia" className="hover:text-primary transition-colors">Tecnología</Link>
          <button onClick={() => setIsQuizOpen(true)} className="hover:text-primary transition-colors cursor-pointer">Test</button>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link to="/ciencia" className="hover:text-primary transition-colors">Ciencia</Link>
          <Link to="/diario" className="hover:text-primary transition-colors">Diario</Link>
        </div>

        <div className="flex items-center gap-[24px] text-[13px]">
          <motion.button 
            onClick={() => setIsDrawerOpen(true)}
            animate={bounce ? { scale: [1, 1.05, 1], color: ['var(--theme-color-accent)', 'var(--theme-color-accent)', 'var(--theme-color-secondary)'] } : { scale: 1, color: 'var(--theme-color-secondary)' }}
            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.27, 1.55] }}
            className="hover:text-primary transition-colors cursor-pointer tracking-wider flex items-center font-medium"
          >
            {`Carrito (${totalItems})`}
          </motion.button>
          <Link to="/productos" className="rounded-full bg-[#FF4D2E] text-[#FFFFFF] px-[18px] py-[8px] text-[12px] font-medium transition-colors hover:bg-[#E63D20] tracking-wide hidden sm:block">
            Comprar
          </Link>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-[#FAF8F2] shadow-2xl flex flex-col z-[101]"
            >
              <div className="h-[72px] flex items-center px-6 border-b border-[rgba(10,9,6,0.08)]">
                <button onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium">✕ Cerrar</button>
              </div>
              <div className="flex flex-col p-6 gap-6 text-[18px] font-medium mt-4">
                <Link to="/#dispositivos" onClick={() => setMobileMenuOpen(false)}>Dispositivos</Link>
                <Link to="/comparador" onClick={() => setMobileMenuOpen(false)}>Comparar</Link>
                <Link to="/tecnologia" onClick={() => setMobileMenuOpen(false)}>Tecnología</Link>
                <button onClick={() => { setIsQuizOpen(true); setMobileMenuOpen(false); }} className="text-left">Test</button>
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                <Link to="/ciencia" onClick={() => setMobileMenuOpen(false)}>Ciencia</Link>
                <Link to="/diario" onClick={() => setMobileMenuOpen(false)}>Diario</Link>
              </div>
              <div className="mt-auto p-6 border-t border-[rgba(10,9,6,0.08)]">
                <Link to="/productos" className="w-full flex rounded-full bg-[#FF4D2E] text-[#FFFFFF] py-4 text-[14px] font-medium transition-colors hover:bg-[#E63D20] tracking-wide justify-center">
                  Comprar
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
