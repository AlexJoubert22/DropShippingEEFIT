import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Orb } from './Shared';

export const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isDrawerOpen, setIsDrawerOpen } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-[var(--theme-color-base)] z-[101] shadow-2xl p-[32px] flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[20px] font-medium tracking-tight">Tu carrito</h2>
              <button onClick={() => setIsDrawerOpen(false)} className="text-[13px] text-secondary hover:text-primary transition-colors flex items-center gap-2">
                Seguir comprando <span className="text-[16px] leading-none">✕</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[var(--theme-color-secondary)]">
                  <p>Tu carrito está vacío.</p>
                  <p className="mt-2 text-[13px] opacity-80">La terapia de infrarrojo lejano te espera.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex gap-4">
                      <div className="w-[80px] h-[80px] bg-[#FAF8F2] rounded-[12px] flex items-center justify-center border border-[var(--theme-color-border)] relative overflow-hidden flex-shrink-0">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        ) : (
                          <Orb colors={product.orbColors} size="60px" />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-[14px] font-medium">{product.name}</div>
                            <div className="text-[12px] text-[var(--theme-color-secondary)] mt-1">{product.category}</div>
                          </div>
                          <button onClick={() => removeItem(product.id)} className="text-[12px] text-[var(--theme-color-secondary)] hover:text-[#0A0906] underline decoration-[rgba(10,9,6,0.2)] underline-offset-4">Quitar</button>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border border-[var(--theme-color-border)] rounded-full px-3 py-1">
                            <button onClick={() => updateQuantity(product.id, quantity - 1)} className="text-[16px] text-secondary hover:text-primary leading-none px-1">−</button>
                            <span className="text-[13px] w-[30px] text-center">{quantity}</span>
                            <button onClick={() => updateQuantity(product.id, quantity + 1)} className="text-[16px] text-secondary hover:text-primary leading-none px-1">+</button>
                          </div>
                          <div className="text-[14px] font-medium">€{product.price * quantity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[var(--theme-color-border)] mt-auto">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-[16px] font-medium">Subtotal</div>
                  <div className="text-[12px] text-[var(--theme-color-secondary)] mt-1">Impuestos incluidos. Envío gratuito.</div>
                </div>
                <div className="text-[24px] font-medium leading-none">€{totalPrice}</div>
              </div>
              <Link 
                to="/checkout"
                onClick={() => setIsDrawerOpen(false)}
                className={`w-full block text-center bg-[#FF4D2E] text-[#FFFFFF] py-[16px] rounded-full text-[14px] font-medium transition-colors ${items.length === 0 ? 'opacity-50 pointer-events-none' : 'hover:bg-[#E63D20]'}`}
              >
                Finalizar compra
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
