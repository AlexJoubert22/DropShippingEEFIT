import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from './Shared';

export const Nav = () => {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(245, 243, 237, 0)", "rgba(245, 243, 237, 0.8)"]);
  const navBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);

  const { items, setIsDrawerOpen, setIsQuizOpen } = useCart();
  const [bounce, setBounce] = useState(false);
  const location = useLocation();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (totalItems > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 600);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <motion.nav 
      style={{ backgroundColor: navBg, backdropFilter: navBlur }}
      className="fixed top-0 left-0 right-0 h-[72px] z-40 flex items-center justify-between px-6 md:px-10 border-b border-[var(--theme-color-border)]"
    >
      <Link to="/" className="text-[16px] font-medium tracking-[0.2em] z-50">VITALY</Link>
      
      <div className="hidden md:flex items-center gap-[32px] text-[13px] text-secondary">
        <Link to="/#dispositivos" className="hover:text-primary transition-colors">Dispositivos</Link>
        <Link to="/comparador" className="hover:text-primary transition-colors">Comparar</Link>
        <Link to="/#tecnologia" className="hover:text-primary transition-colors">Tecnología</Link>
        <button onClick={() => setIsQuizOpen(true)} className="hover:text-primary transition-colors cursor-pointer">Test</button>
        <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        <Link to="/#ciencia" className="hover:text-primary transition-colors">Ciencia</Link>
      </div>

      <div className="flex items-center gap-[24px] text-[13px]">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="text-secondary hover:text-primary transition-colors cursor-pointer tracking-wider flex items-center"
        >
          <span>Carrito (</span>
          <motion.span
            animate={bounce ? { scale: [1, 1.3, 1], color: ['var(--theme-color-accent)', 'var(--theme-color-accent)', 'currentColor'] } : { scale: 1, color: 'currentColor' }}
            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.27, 1.55] }}
            className="inline-block font-medium px-0 mx-0"
          >
            {totalItems}
          </motion.span>
          <span>)</span>
        </button>
        <button className="rounded-full bg-[#FF4D2E] text-[#FFFFFF] px-[18px] py-[8px] text-[12px] font-medium transition-colors hover:bg-[#E63D20] tracking-wide hidden sm:block">
          Acceder
        </button>
      </div>
    </motion.nav>
  );
};
