import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Orb } from '../components/Shared';
import { useCart } from '../context/CartContext';

export const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellidos: '',
    direccion1: '',
    direccion2: '',
    codigoPostal: '',
    ciudad: '',
    provincia: '',
    pais: 'España',
    telefono: '',
    diferenteFacturacion: false,
    newsletter: false,
    terminos: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // @ts-ignore
    const finalValue = type === 'checkbox' ? e.target.checked : value;
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handlePayment = () => {
    console.log({ paso: "pago", datos: { ...formData, cart: items, total: totalPrice } });
    navigate('/checkout/exito');
  };

  if (items.length === 0 && step === 1) {
    return (
      <div className="min-h-screen bg-[var(--theme-color-base)] pt-[120px] flex flex-col items-center justify-center relative z-10 px-6">
        <div className="w-16 h-16 rounded-full bg-[rgba(10,9,6,0.05)] border border-[rgba(10,9,6,0.1)] flex items-center justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </div>
        <h1 className="text-[32px] font-medium tracking-tight mb-4">Tu carrito está vacío</h1>
        <p className="text-[15px] text-secondary mb-8 text-center max-w-[400px]">
          Parece que aún no has añadido ningún dispositivo a tu carrito. Explora nuestra gama de productos de fotobiomodulación.
        </p>
        <Link to="/#dispositivos" className="px-8 py-4 bg-[var(--theme-color-accent)] text-white rounded-full text-[14px] font-medium hover:bg-[#E63D20] transition-colors">
          Ver dispositivos →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen pt-[100px] relative z-10 px-6 md:px-12 pb-24">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[rgba(10,9,6,0.08)] mb-12">
          <Link to="/" className="text-[20px] font-medium tracking-[0.2em]">VITALY</Link>
          
          <div className="flex items-center gap-4 text-[12px] font-medium tracking-widest uppercase">
            <button onClick={() => setStep(1)} className={`transition-colors ${step >= 1 ? 'text-primary' : 'text-secondary opacity-50'}`}>Carrito</button>
            <span className="text-secondary opacity-30">/</span>
            <button onClick={() => step >= 2 && setStep(2)} className={`transition-colors ${step >= 2 ? 'text-primary' : 'text-secondary opacity-50'}`}>Envío</button>
            <span className="text-secondary opacity-30">/</span>
            <span className={`transition-colors ${step >= 3 ? 'text-primary' : 'text-secondary opacity-50'}`}>Pago</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* MAIN CONTENT (LEFT 65%) */}
          <div className="flex-1 w-full lg:w-[65%]">
            <AnimatePresence mode="wait">
              {/* === PASO 1: CARRITO === */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h2 className="text-[32px] font-medium tracking-tight mb-4">Revisa tu carrito</h2>
                  
                  <div className="flex flex-col gap-6">
                    {items.map(item => (
                      <div key={item.id} className="flex gap-6 py-6 border-b border-[rgba(10,9,6,0.08)] last:border-0 relative">
                        <div className="w-[80px] h-[80px] bg-[#FAF8F2] flex items-center justify-center rounded-[12px] relative overflow-hidden flex-shrink-0">
                           <div className="scale-[0.8]"><Orb colors={item.orbColors} size="100px" /></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-[16px] font-medium tracking-tight">{item.name}</div>
                              <div className="text-[12px] text-secondary tracking-widest uppercase mt-1">{item.category}</div>
                            </div>
                            <div className="text-[16px] font-medium tracking-tight">€{item.price * item.quantity}</div>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border border-[rgba(10,9,6,0.15)] rounded-full h-[36px] px-2 text-[14px]">
                                <button className="w-8 h-full flex items-center justify-center opacity-70 hover:opacity-100" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>−</button>
                                <span className="w-6 text-center font-medium">{item.quantity}</span>
                                <button className="w-8 h-full flex items-center justify-center opacity-70 hover:opacity-100" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                              </div>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="text-[12px] text-secondary hover:text-[var(--theme-color-accent)] transition-colors underline underline-offset-4">Eliminar</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border border-[rgba(10,9,6,0.08)] rounded-[12px] p-4 text-[14px]">
                    <div className="flex justify-between items-center cursor-pointer text-primary font-medium">
                      <span>¿Tienes un código promocional?</span>
                      <span>+</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* === PASO 2: ENVÍO === */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  <div>
                    <h2 className="text-[32px] font-medium tracking-tight mb-2">Datos de contacto</h2>
                    <p className="text-[14px] text-secondary">Te enviaremos el recibo e información de seguimiento aquí.</p>
                  </div>
                  
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                  
                  <div className="mt-4">
                    <h2 className="text-[32px] font-medium tracking-tight mb-6">Dirección de envío</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                      <input type="text" name="apellidos" value={formData.apellidos} onChange={handleInputChange} placeholder="Apellidos" className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                      <input type="text" name="direccion1" value={formData.direccion1} onChange={handleInputChange} placeholder="Dirección y número" className="w-full md:col-span-2 bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                      <input type="text" name="direccion2" value={formData.direccion2} onChange={handleInputChange} placeholder="Piso, puerta, etc. (Opcional)" className="w-full md:col-span-2 bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                      <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleInputChange} placeholder="Código Postal" className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                      <input type="text" name="ciudad" value={formData.ciudad} onChange={handleInputChange} placeholder="Ciudad" className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                      <select name="provincia" value={formData.provincia} onChange={handleInputChange} className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors">
                        <option value="">Provincia</option>
                        <option value="madrid">Madrid</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="valencia">Valencia</option>
                      </select>
                      <input type="text" name="pais" value={formData.pais} disabled className="w-full bg-[rgba(10,9,6,0.02)] border border-[rgba(10,9,6,0.08)] rounded-[8px] px-4 py-3 text-[14px] outline-none text-secondary" />
                      <input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} placeholder="Teléfono" className="w-full md:col-span-2 bg-white border border-[rgba(10,9,6,0.15)] rounded-[8px] px-4 py-3 text-[14px] outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" name="diferenteFacturacion" checked={formData.diferenteFacturacion} onChange={handleInputChange} className="w-4 h-4 accent-[var(--theme-color-accent)]" />
                      <span className="text-[14px]">Dirección de facturación distinta a la de envío</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4 accent-[var(--theme-color-accent)]" />
                      <span className="text-[14px]">Quiero recibir guías y novedades de Vitaly Lab.</span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-4 mt-8 pt-8 border-t border-[rgba(10,9,6,0.08)]">
                    <button onClick={() => setStep(3)} className="w-full sm:w-auto px-8 py-4 bg-[var(--theme-color-accent)] text-white rounded-full text-[14px] font-medium hover:bg-[#E63D20] transition-colors">
                      Continuar al pago →
                    </button>
                    <button onClick={() => setStep(1)} className="w-full sm:w-auto px-8 py-4 text-primary rounded-full text-[14px] font-medium hover:bg-[rgba(10,9,6,0.05)] transition-colors">
                      ← Volver al carrito
                    </button>
                  </div>
                </motion.div>
              )}

              {/* === PASO 3: PAGO === */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  <h2 className="text-[32px] font-medium tracking-tight mb-2">Método de pago</h2>
                  
                  <div className="flex flex-col gap-4">
                    <label className="border border-primary rounded-[12px] p-5 flex flex-col gap-4 bg-white cursor-pointer transition-colors relative overflow-hidden ring-1 ring-primary">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-[var(--theme-color-accent)]" />
                        <span className="font-medium text-[15px]">Tarjeta de crédito o débito</span>
                      </div>
                      <div className="flex flex-col gap-3 pl-7">
                        <input type="text" placeholder="Número de tarjeta" className="w-full border border-[rgba(10,9,6,0.15)] rounded-[6px] px-3 py-2.5 text-[14px] outline-none" />
                        <div className="flex gap-3">
                          <input type="text" placeholder="MM / AA" className="w-1/2 border border-[rgba(10,9,6,0.15)] rounded-[6px] px-3 py-2.5 text-[14px] outline-none" />
                          <input type="text" placeholder="CVC" className="w-1/2 border border-[rgba(10,9,6,0.15)] rounded-[6px] px-3 py-2.5 text-[14px] outline-none" />
                        </div>
                      </div>
                    </label>
                    
                    <label className="border border-[rgba(10,9,6,0.15)] rounded-[12px] p-5 flex items-center gap-3 bg-[rgba(10,9,6,0.02)] cursor-pointer hover:border-primary transition-colors opacity-70">
                      <input type="radio" name="payment" className="w-4 h-4 accent-[var(--theme-color-accent)] pointer-events-none" />
                      <span className="font-medium text-[15px]">Apple Pay / Google Pay</span>
                    </label>
                    <label className="border border-[rgba(10,9,6,0.15)] rounded-[12px] p-5 flex items-center gap-3 bg-[rgba(10,9,6,0.02)] cursor-pointer hover:border-primary transition-colors opacity-70">
                      <input type="radio" name="payment" className="w-4 h-4 accent-[var(--theme-color-accent)] pointer-events-none" />
                      <span className="font-medium text-[15px]">Bizum</span>
                    </label>
                    <label className="border border-[rgba(10,9,6,0.15)] rounded-[12px] p-5 flex justify-between items-center bg-[rgba(10,9,6,0.02)] cursor-pointer hover:border-primary transition-colors opacity-70">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" className="w-4 h-4 accent-[var(--theme-color-accent)] pointer-events-none" />
                        <span className="font-medium text-[15px]">Klarna (Pago a plazos)</span>
                      </div>
                      <span className="text-[12px] text-secondary">3 plazos sin intereses</span>
                    </label>
                  </div>

                  <div className="bg-[rgba(10,9,6,0.03)] p-4 rounded-[8px] flex items-center justify-center gap-2 text-secondary text-[12px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span>Pagos procesados por Stripe. Cifrado TLS. No almacenamos datos de tarjeta.</span>
                  </div>

                  <div className="flex flex-col gap-6 mt-8 pt-8 border-t border-[rgba(10,9,6,0.08)]">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="terminos" checked={formData.terminos} onChange={handleInputChange} className="w-4 h-4 mt-1 accent-[var(--theme-color-accent)]" />
                      <span className="text-[13px] text-secondary leading-relaxed">
                        He leído y acepto los <Link to="/legal/terminos" className="text-primary underline">términos y condiciones</Link> y la <Link to="/legal/privacidad" className="text-primary underline">política de privacidad</Link>. Comprendo que esto es una compra vinculante.
                      </span>
                    </label>

                    <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-4">
                      <button 
                        onClick={handlePayment} 
                        disabled={!formData.terminos}
                        className={`w-full sm:w-auto px-12 py-5 rounded-full text-[15px] font-medium transition-colors ${formData.terminos ? 'bg-[var(--theme-color-accent)] text-white hover:bg-[#E63D20]' : 'bg-[rgba(10,9,6,0.1)] text-[#6B6A66] cursor-not-allowed'}`}
                      >
                        Pagar €{totalPrice}
                      </button>
                      <button onClick={() => setStep(2)} className="w-full sm:w-auto px-8 py-4 text-primary rounded-full text-[14px] font-medium hover:bg-[rgba(10,9,6,0.05)] transition-colors">
                        ← Volver a envío
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SUMMARY (RIGHT 35% STICKY) */}
          <div className="w-full lg:w-[35%] flex-shrink-0 lg:sticky lg:top-[120px] self-start">
            <div className="bg-[#FAF8F2] border border-[rgba(10,9,6,0.08)] rounded-[20px] p-6 lg:p-8 flex flex-col gap-6">
              <h3 className="text-[18px] font-medium tracking-tight">Resumen</h3>
              
              <div className="flex flex-col gap-4 text-[14px] text-secondary">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} artículos)</span>
                  <span>€{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío (España Peninsular)</span>
                  <span className="text-[var(--theme-color-accent)]">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Impuestos incluidos (IVA 21%)</span>
                  <span>€{(totalPrice * 0.21).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-[rgba(10,9,6,0.08)] pt-6 flex justify-between items-end">
                <span className="text-[16px] font-medium">Total</span>
                <span className="text-[32px] font-medium tracking-tight leading-none text-primary">€{totalPrice}</span>
              </div>

              {step === 1 && (
                <button onClick={() => setStep(2)} className="w-full mt-4 px-8 py-4 bg-[var(--theme-color-accent)] text-white rounded-full text-[14px] font-medium hover:bg-[#E63D20] transition-colors">
                  Continuar →
                </button>
              )}
              
              {/* Mini visual summary of items for step 2 & 3 */}
              {step > 1 && (
                <div className="border-t border-[rgba(10,9,6,0.08)] pt-6 mt-2 flex flex-col gap-4">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                       <div className="w-[48px] h-[48px] bg-white rounded-[8px] flex items-center justify-center relative overflow-hidden flex-shrink-0 border border-[rgba(10,9,6,0.05)]">
                           <div className="scale-[0.5]"><Orb colors={item.orbColors} size="100px" /></div>
                        </div>
                        <div className="flex-1 text-[13px]">
                          <div className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</div>
                          <div className="text-secondary">Cant: {item.quantity} · €{item.price * item.quantity}</div>
                        </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
