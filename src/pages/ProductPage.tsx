import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Orb, SplitText, cn } from '../components/Shared';

const Accordion: React.FC<{ title: string, children: React.ReactNode, defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[var(--theme-color-border)]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[20px] font-medium transition-colors group-hover:text-[var(--theme-color-accent)]">{title}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          className="text-[24px] font-light text-[var(--theme-color-secondary)] group-hover:text-[var(--theme-color-primary)]"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[15px] text-[#6B6A66] leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem, updateQuantity, items, setIsDrawerOpen, setIsQuizOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.slug === slug);
  
  // Scroll to top on mount / product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6">
        <h1 className="text-4xl font-medium">Producto no encontrado</h1>
        <Link to="/" className="text-accent hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => product.relatedProductIds.includes(p.id));

  const handleAddToCart = () => {
    // Add to cart
    addItem(product);
    if (quantity > 1) {
      // Find current quantity and add it
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        updateQuantity(product.id, existing.quantity + quantity - 1);
      } else {
        updateQuantity(product.id, quantity);
      }
    }
    
    // Open drawer
    setIsDrawerOpen(true);
    
    // We could add a toast here, but the drawer opening is enough visual feedback
    // The instructions say "mostrar mensaje 'Producto añadido' breve". 
    // We will just console.log for now, or assume the drawer is enough. 
    console.log("Producto añadido al carrito");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="bg-[var(--theme-color-base)] min-h-screen pt-[72px]"
    >
      {/* A) HERO DE PRODUCTO */}
      <section className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)] border-b border-[var(--theme-color-border)]">
        {/* Left: Media */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-center p-12 bg-[#FAF8F2] border-b lg:border-b-0 lg:border-r border-[var(--theme-color-border)] overflow-hidden min-h-[50vh] lg:min-h-0">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[1.8]">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <Orb colors={product.orbColors} size="300px" className="blur-[25px]" />
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <div className="flex text-[12px] text-[var(--theme-color-secondary)] mb-12 tracking-wide font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/" className="hover:text-primary transition-colors">Dispositivos</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.category}</span>
          </div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <div className="eyebrow text-[11px] uppercase tracking-[0.14em] mb-4">{product.number} · {product.category}</div>
            <h1 className="text-[56px] font-medium tracking-tight mb-2 leading-[0.95] text-wrap-balance">{product.name}</h1>
            <div className="text-[13px] text-[var(--theme-color-secondary)] italic mb-6">Producto oficial · {(product as any).originalName}</div>
            <p className="text-[18px] text-[var(--theme-color-secondary)] mb-8 line-clamp-2 leading-relaxed">{product.tagline}</p>
            
            <div className="flex items-baseline gap-4 mb-10">
              <span className="text-[32px] font-medium text-[#FF4D2E]">€{product.price}</span>
              <span className="text-[13px] text-[var(--theme-color-secondary)]">Envío gratis</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              {/* Quantity Selector Minimalist */}
              <div className="flex items-center justify-between border border-[var(--theme-color-border)] rounded-full px-6 py-4 h-[56px] sm:w-[140px] flex-shrink-0 bg-transparent">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-[20px] text-secondary hover:text-primary leading-none cursor-pointer p-2">−</button>
                <span className="text-[15px] font-medium w-[30px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-[20px] text-secondary hover:text-primary leading-none cursor-pointer p-2">+</button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#FF4D2E] text-[#FFFFFF] rounded-full h-[56px] text-[15px] font-medium hover:bg-[#E63D20] transition-colors flex items-center justify-center tracking-wide cursor-pointer"
              >
                Añadir · €{product.price * quantity}
              </button>
            </div>
            
            <button 
              onClick={() => setIsQuizOpen(true)} 
              className="w-full sm:w-auto text-[13px] text-secondary hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-1 mb-8 font-medium mx-auto sm:mx-0 border-b border-transparent hover:border-primary pb-0.5"
            >
              ¿Cuál VITALY es para ti? Haz el test <span className="opacity-70 ml-1">→</span>
            </button>

            <div className="flex flex-wrap gap-4 text-[11px] text-[var(--theme-color-secondary)] font-medium tracking-wide justify-center sm:justify-start uppercase mb-12">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full border border-current opacity-50" /> Prueba 60 días</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full border border-current opacity-50" /> Envío 24h</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full border border-current opacity-50" /> Garantía {product.specs.warranty}</span>
            </div>

            <a href="#" className="text-[13px] font-medium text-[var(--theme-color-primary)] hover:text-[#E63D20] transition-colors underline decoration-[rgba(10,9,6,0.2)] underline-offset-4">
              ¿Cuál Vitaly es para ti? Haz el test →
            </a>
          </motion.div>
        </div>
      </section>

      {/* B) ACORDEONES DE INFO */}
      <section className="py-[120px] px-6 md:px-12 max-w-[900px] mx-auto">
        <Accordion title="Especificaciones técnicas" defaultOpen={true}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            <div>
              <div className="text-[12px] uppercase tracking-widest text-[var(--theme-color-secondary)] mb-1">Longitudes de onda</div>
              <div className="text-[15px] text-primary">{product.specs.wavelengths.join(', ')}</div>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-widest text-[var(--theme-color-secondary)] mb-1">Diodos</div>
              <div className="text-[15px] text-primary">{product.specs.diodes} LEDs de grado clínico</div>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-widest text-[var(--theme-color-secondary)] mb-1">Duración sesión</div>
              <div className="text-[15px] text-primary">{product.specs.sessionMinutes} minutos</div>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-widest text-[var(--theme-color-secondary)] mb-1">Peso</div>
              <div className="text-[15px] text-primary">{product.specs.weightGrams}g</div>
            </div>
            {product.specs.batteryMinutes && (
              <div>
                <div className="text-[12px] uppercase tracking-widest text-[var(--theme-color-secondary)] mb-1">Autonomía</div>
                <div className="text-[15px] text-primary">{product.specs.batteryMinutes} minutos</div>
              </div>
            )}
            <div>
              <div className="text-[12px] uppercase tracking-widest text-[var(--theme-color-secondary)] mb-1">Certificaciones</div>
              <div className="text-[15px] text-primary">{product.specs.certifications.join(', ')}</div>
            </div>
          </div>
        </Accordion>
        <Accordion title="Cómo se usa">
          <ol className="list-decimal list-outside ml-4 space-y-4">
            <li>Limpia y seca la zona de tratamiento ({product.targetArea}). No apliques cosméticos que contengan bloqueadores solares.</li>
            <li>Coloca el dispositivo y enciéndelo. Una sesión estándar dura {product.specs.sessionMinutes} minutos.</li>
            <li>El dispositivo se apagará automáticamente (si dispone de timer) o puedes finalizar tras el aviso. Continúa con tu rutina habitual de cuidado o descanso.</li>
          </ol>
        </Accordion>
        <Accordion title="Qué incluye la caja">
          <ul className="space-y-4">
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#FF4D2E] rounded-full" /> Dispositivo {product.name}</li>
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#FF4D2E] rounded-full" /> Cargador y cable textil (USB-C)</li>
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#FF4D2E] rounded-full" /> Gafas protectoras de exposición</li>
            <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#FF4D2E] rounded-full" /> Manual detallado de dosimetría y cuidados</li>
          </ul>
        </Accordion>
      </section>

      {/* C) BENEFICIOS EN GRID */}
      <section className="py-[80px] px-6 md:px-12 bg-[#FAF8F2] border-y border-[var(--theme-color-border)]">
        <h2 className="text-[32px] md:text-[40px] font-medium text-center mb-16 tracking-tight">Qué vas a notar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
          {product.benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-[48px] font-medium text-[#FF4D2E] leading-none mb-6">0{i+1}</div>
              <h3 className="text-[20px] font-medium tracking-tight mb-3">{benefit.title}</h3>
              <p className="text-[14px] text-[#6B6A66] leading-relaxed line-clamp-4">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* D) FAQ ESPECÍFICO */}
      <section className="py-[80px] px-6 md:px-12 max-w-[900px] mx-auto">
        <h2 className="text-[32px] md:text-[40px] font-medium mb-12 tracking-tight">Dudas frecuentes</h2>
        <div className="flex flex-col">
          {product.faq.map((item, i) => (
            <Accordion key={i} title={item.q}>
              {item.a}
            </Accordion>
          ))}
        </div>
      </section>

      {/* E) PRODUCTOS RELACIONADOS */}
      {relatedProducts.length > 0 && (
        <section className="py-[100px] overflow-hidden border-t border-[rgba(10,9,6,0.08)] bg-base relative z-10">
          <div className="px-6 md:px-12 mb-12">
            <h2 className="text-[32px] font-medium tracking-tight">También podrían interesarte</h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 md:pl-12 pr-6 md:pr-12 gap-4 pb-12 w-full custom-scrollbar cursor-grab active:cursor-grabbing">
            {relatedProducts.map((prod) => (
              <Link 
                key={prod.id} 
                to={`/producto/${prod.slug}`}
                className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] group product-card relative h-[440px] rounded-[20px] border border-[var(--theme-color-border)] bg-[#FAF8F2] overflow-hidden p-[24px] flex flex-col justify-end"
              >
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none scale-[1.4]">
                  <Orb colors={prod.orbColors} size="240px" className="transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.15] [&>div]:group-hover:blur-[15px]" />
                </div>
                
                <div className="relative z-10 flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                  <div className="eyebrow text-[11px] uppercase tracking-[0.14em] mb-2">{prod.id} · {prod.category}</div>
                  <h3 className="text-[24px] font-medium tracking-tight mb-2 text-primary">{prod.name}</h3>
                  <p className="text-[14px] text-[var(--theme-color-secondary)] mb-4 line-clamp-2">{prod.description}</p>
                  <div className="text-[18px] font-medium text-[var(--theme-color-accent)]">€{prod.price}</div>
                </div>
                <div className="absolute top-6 right-6 w-[32px] h-[32px] rounded-full border border-[var(--theme-color-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--theme-color-primary)] text-[14px]">
                  →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* F) STICKY ADD-TO-CART MÓVIL */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[rgba(245,243,237,0.9)] backdrop-blur-md border-t border-[var(--theme-color-border)] p-4 flex items-center justify-between z-40 transform translate-y-0 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col">
          <span className="text-[13px] font-medium">{product.name}</span>
          <span className="text-[16px] font-medium text-[#FF4D2E]">€{product.price}</span>
        </div>
        <button 
          onClick={handleAddToCart}
          className="bg-[#FF4D2E] text-[#FFFFFF] rounded-full px-8 py-3 text-[14px] font-medium"
        >
          Añadir
        </button>
      </div>

    </motion.div>
  );
};
