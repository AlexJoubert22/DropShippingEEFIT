import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // We clear the cart after they hit success
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen pt-[120px] relative z-10 px-6 flex flex-col items-center pb-24">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center mt-12 md:mt-24">
        
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.6 }}
          className="w-24 h-24 rounded-full bg-[#00CC88]/10 text-[#00CC88] flex items-center justify-center mb-8"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[40px] md:text-[56px] font-medium tracking-tight leading-[1] mb-6"
        >
          Pedido confirmado.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[16px] text-secondary leading-relaxed mb-4"
        >
          Gracias por confiar en Vitaly Lab. Tu número de pedido es <span className="font-medium text-primary">#VTL-2026-00001</span>.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[16px] text-secondary leading-relaxed mb-12"
        >
          Hemos enviado un correo de confirmación con los detalles de tu compra y la factura. Recibirás otro email cuando tu pedido sea enviado.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/" className="px-8 py-4 bg-primary text-[#F5F3ED] rounded-full text-[14px] font-medium hover:bg-[#1A1813] transition-colors w-full sm:w-auto">
            Volver a inicio
          </Link>
          <Link to="/#dispositivos" className="px-8 py-4 bg-[rgba(10,9,6,0.05)] text-primary rounded-full text-[14px] font-medium hover:bg-[rgba(10,9,6,0.1)] transition-colors w-full sm:w-auto">
            Seguir explorando
          </Link>
        </motion.div>

      </div>
    </div>
  );
};
