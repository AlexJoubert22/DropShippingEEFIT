import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Orb } from './Shared';

export const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isDrawerOpen, setIsDrawerOpen } = useCart();
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsDrawerOpen(false);
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isDrawerOpen, setIsDrawerOpen]);

  const content = (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, exit: { duration: 0.25 } }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: 'rgba(10, 9, 6, 0.55)', backdropFilter: 'blur(8px)' }}
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], exit: { duration: 0.35 } }}
            className="fixed top-0 right-0 bottom-0 w-[440px] max-w-[calc(100vw-32px)] bg-[#F5F3ED] z-[101] flex flex-col"
            style={{ boxShadow: '-8px 0 32px rgba(10, 9, 6, 0.12)' }}
          >
            {/* HEADER */}
            <div className="h-[80px] px-6 border-b border-[rgba(10,9,6,0.08)] flex justify-between items-center bg-[#F5F3ED] z-10 shrink-0">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--theme-color-secondary)]">
                  Tu carrito
                </span>
                <span className="text-[20px] font-medium leading-tight">
                  {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                </span>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)} 
                className="w-10 h-10 rounded-full border border-[var(--theme-color-border)] flex items-center justify-center hover:bg-[var(--theme-color-accent)] hover:text-white hover:border-transparent transition-colors group"
                aria-label="Cerrar carrito"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-[120px] h-[120px] mb-6 opacity-60">
                     <Orb colors={['#E5E1D8', '#D6D1C4', '#F5F3ED']} size="100%" />
                  </div>
                  <p className="text-[16px] text-secondary mb-2">Tu carrito está vacío</p>
                  <p className="text-[13px] text-[rgba(10,9,6,0.5)] mb-8">La terapia de infrarrojo lejano te espera.</p>
                  <button 
                    onClick={() => {
                      setIsDrawerOpen(false);
                      navigate('/productos');
                    }}
                    className="mt-4 px-6 py-3 border border-[var(--theme-color-border)] rounded-full text-[13px] font-medium hover:border-[var(--theme-color-accent)] hover:text-[var(--theme-color-accent)] transition-colors"
                  >
                    Ver dispositivos
                  </button>
                </div>
              ) : (
                items.map(({ product, quantity }) => (
                  <div key={product.id} className="min-h-[120px] bg-white border border-[var(--theme-color-border)] rounded-[16px] p-4 flex gap-4">
                    {/* IZQ */}
                    <div className="w-[80px] h-[80px] bg-[#FAF8F2] rounded-[12px] flex items-center justify-center relative overflow-hidden shrink-0 self-start">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <Orb colors={product.orbColors} size="100%" />
                      )}
                    </div>
                    {/* CENTRO */}
                    <div className="flex flex-col flex-1 pb-1">
                      <div className="mb-auto">
                        <div className="text-[16px] font-medium leading-tight">{product.name}</div>
                        <div className="text-[12px] italic text-[var(--theme-color-secondary)] leading-snug mt-0.5 line-clamp-1">
                          {product.originalName}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--theme-color-secondary)] mt-1">
                          {product.category}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center">
                           <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-7 h-7 rounded-full border border-[var(--theme-color-border)] flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-colors text-lg leading-none cursor-pointer pb-[2px]">−</button>
                           <span className="text-[13px] w-8 text-center font-medium">{quantity}</span>
                           <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-7 h-7 rounded-full border border-[var(--theme-color-border)] flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-colors text-lg leading-none cursor-pointer pb-[2px]">+</button>
                        </div>
                      </div>
                    </div>
                    {/* DERECHA */}
                    <div className="flex flex-col items-end justify-between self-stretch pb-1">
                      <div className="text-[18px] font-medium text-[var(--theme-color-accent)]">€{product.price * quantity}</div>
                      <button onClick={() => removeItem(product.id)} className="text-[12px] text-[var(--theme-color-secondary)] hover:text-primary hover:underline underline-offset-4 transition-all pb-1">
                        Quitar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[rgba(10,9,6,0.08)] bg-[#F5F3ED] shrink-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[14px]">Subtotal</span>
                  <span className="text-[14px] font-medium">€{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[14px]">Envío</span>
                  <span className="text-[14px]">Gratis en península</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[13px] text-secondary">IVA incluido</span>
                  <span className="text-[28px] font-medium text-[var(--theme-color-accent)] leading-none mt-1">€{totalPrice}</span>
                </div>
                
                <Link 
                  to="/checkout"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full h-[56px] flex items-center justify-center bg-[#FF4D2E] text-white rounded-full text-[16px] font-medium transition-colors hover:bg-[#E63D20] mb-4"
                >
                  Finalizar compra
                </Link>
                <div className="text-center">
                  <button 
                    onClick={() => {
                      setIsDrawerOpen(false);
                      navigate('/');
                    }} 
                    className="text-[13px] text-secondary hover:text-primary transition-colors inline-block"
                  >
                    Seguir comprando →
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};
