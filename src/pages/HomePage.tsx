import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { faqs } from '../data/faqs';
import { Orb, MagneticButton, SplitText, NumberTicker, Accordion } from '../components/Shared';
import { useCart } from '../context/CartContext';

export const HomePage = () => {
  const { setIsQuizOpen } = useCart();

  return (
    <div className="bg-[var(--theme-color-base)]">
      {/* 2. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-[72px]">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 flex flex-col items-center mt-12 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-[24px] tracking-[0.14em]"
          >
            Light Therapy × 2026
          </motion.div>
          <SplitText text="El calor que tu cuerpo reconoce." as="h1" className="text-[clamp(44px,6vw,84px)] font-medium tracking-tight leading-[0.95] [text-wrap:balance] max-w-[1000px] justify-center mb-[24px]" />
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="text-[18px] text-[var(--theme-color-secondary)] max-w-[540px] leading-[1.6] mb-[32px]"
          >
            Ocho dispositivos basados en evidencia física y calor radiante. Una marca. Resultados medibles desde la primera semana.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-[16px] items-center pointer-events-auto"
          >
            <div className="flex flex-col sm:flex-row gap-[16px]">
              <MagneticButton variant="solid" onClick={() => { document.getElementById('dispositivos')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Ver dispositivos
              </MagneticButton>
              <Link to="/tecnologia">
                <MagneticButton variant="ghost" onClick={() => {}}>
                  Cómo funciona
                </MagneticButton>
              </Link>
            </div>
            <button onClick={() => setIsQuizOpen(true)} className="text-[13px] text-secondary hover:text-primary transition-colors hover:border-b hover:border-primary border-b border-transparent pb-0.5 mt-2">
              ¿No sabes cuál? Hacer el test (2 min) →
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-[85px] flex flex-col items-center gap-2">
          <motion.div className="w-[1px] h-[40px] bg-[var(--theme-color-primary)] opacity-20 overflow-hidden">
            <motion.div className="w-full h-full bg-[var(--theme-color-primary)]" animate={{ y: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.1em] text-[#6B6A66] opacity-50">desliza</span>
        </div>
      </section>

      {/* 3. MARQUEE INFINITO */}
      <div className="h-[60px] border-y border-[var(--theme-color-border)] flex items-center overflow-hidden bg-base relative z-10">
        <div className="whitespace-nowrap flex text-[13px] tracking-wide text-[var(--theme-color-secondary)] relative w-[200%]">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} className="flex">
            <span className="px-[20px]">FIR + LEDs cromáticos · Prueba 60 días · Envío 24h España peninsular · 2 años de garantía · Diseñado en Valencia · Fabricado en Europa · Dosimetría real · </span>
            <span className="px-[20px]">FIR + LEDs cromáticos · Prueba 60 días · Envío 24h España peninsular · 2 años de garantía · Diseñado en Valencia · Fabricado en Europa · Dosimetría real · </span>
          </motion.div>
        </div>
      </div>

      {/* 4. MANIFIESTO */}
      <section className="min-h-[90vh] flex flex-col md:flex-row relative z-10 bg-[var(--theme-color-base)]">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="eyebrow mb-6">POR QUÉ VITALY</motion.div>
            <motion.h2 variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-[clamp(44px,6vw,80px)] font-medium leading-[0.95] tracking-tight mb-8">La biología es la nueva tecnología.</motion.h2>
            <motion.p variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-[17px] leading-relaxed max-w-[440px] text-[var(--theme-color-secondary)]">No inventamos la terapia de infrarrojo lejano — la llevamos a tu mesilla de noche. FIR + LEDs cromáticos en formatos que puedes usar mientras te cepillas los dientes. Ciencia silenciosa, diaria, medible.</motion.p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center gap-12 border-t md:border-t-0 md:border-l border-[var(--theme-color-border)]">
          <div className="border-t border-[var(--theme-color-border)] pt-4">
            <div className="text-[56px] font-medium text-[#0A0906] leading-none mb-2"><NumberTicker value={4} />-<NumberTicker value={14} /></div>
            <div className="text-[13px] text-[var(--theme-color-secondary)]">micrómetros (FIR) y LEDs cromáticos</div>
          </div>
          <div className="border-t border-[var(--theme-color-border)] pt-4">
            <div className="text-[56px] font-medium text-[#0A0906] leading-none mb-2"><NumberTicker value={9} suffix=" min" /></div>
            <div className="text-[13px] text-[var(--theme-color-secondary)]">duración óptima por sesión</div>
          </div>
          <div className="border-t border-[var(--theme-color-border)] pt-4">
            <div className="text-[56px] font-medium text-[#0A0906] leading-none mb-2"><NumberTicker value={98} suffix="%" /></div>
            <div className="text-[13px] text-[var(--theme-color-secondary)]">absorción celular medida</div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE RESPIRACIÓN (MOMENTO HERO GIGANTE) */}
      <section className="h-[100vh] bg-[#0A0906] flex flex-col items-center justify-center text-center px-4 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[clamp(56px,6vw,72px)] text-[#F6F4EF] font-medium tracking-tight mb-6">Lo que tu cuerpo ya emite, a mayor escala.</h2>
          <div className="text-[11px] text-[#F6F4EF] opacity-60 uppercase tracking-widest font-medium">4-14 MICRAS. RESONANCIA HUMANA.</div>
        </motion.div>
      </section>

      {/* 5. GRID DE PRODUCTOS */}
      <section id="dispositivos" className="pt-[120px] pb-24 px-4 md:px-12 bg-base z-10 relative scroll-mt-[72px]">
        <div className="mb-16">
          <SplitText text="Ocho aplicaciones. Un principio físico." as="h2" className="text-[clamp(44px,6vw,80px)] font-medium leading-[0.95] tracking-tight" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-16">
          {products.map((prod, i) => (
            <Link
              to={`/producto/${prod.slug}`}
              key={prod.id}
              className="block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-color-accent)] rounded-[20px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="product-card group relative h-[440px] rounded-[20px] border border-[var(--theme-color-border)] bg-[#FAF8F2] overflow-hidden p-[24px] flex flex-col justify-end hover:shadow-[0_20px_40px_rgba(10,9,6,0.06)] transition-shadow duration-500"
              >
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none scale-[1.4]">
                  <Orb colors={prod.orbColors} size="240px" className="transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.15] [&>div]:group-hover:blur-[15px]" />
                </div>
                
                <div className="relative z-10 flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                  <div className="eyebrow text-[11px] uppercase tracking-[0.14em] mb-2">{prod.number} · {prod.category}</div>
                  <h3 className="text-[24px] font-medium tracking-tight mb-2 text-primary">{prod.name}</h3>
                  <p className="text-[14px] text-[var(--theme-color-secondary)] mb-4 line-clamp-2">{prod.description}</p>
                  <div className="text-[18px] font-medium text-[var(--theme-color-accent)]">€{prod.price}</div>
                </div>
                
                <div className="absolute top-6 right-6 w-[32px] h-[32px] rounded-full border border-[var(--theme-color-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--theme-color-primary)] text-[14px]">
                  →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5.5 TEASER COMPARADOR */}
      <section className="py-[120px] bg-[#FAF8F2] border-y border-[var(--theme-color-border)] relative z-10 overflow-hidden px-4 md:px-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <div className="eyebrow mb-6">NO SABES CUÁL ELEGIR</div>
          <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight mb-4">Compara los ocho.</h2>
          <p className="text-[17px] text-[var(--theme-color-secondary)] mb-10 max-w-[400px]">Todas las specs, un solo vistazo.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/comparador">
              <MagneticButton variant="solid">Abrir comparador →</MagneticButton>
            </Link>
            <MagneticButton variant="ghost" onClick={() => setIsQuizOpen(true)}>Hacer el test →</MagneticButton>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:flex items-center justify-end pr-0 md:pr-12 relative opacity-70 pointer-events-none mt-20 md:mt-0">
          <div className="bg-white border border-[rgba(10,9,6,0.08)] rounded-xl shadow-lg w-full max-w-[600px] overflow-hidden flex flex-col">
            <div className="flex border-b border-[rgba(10,9,6,0.08)]">
              <div className="w-[120px] p-4 bg-[#FAF8F2]"></div>
              {[products[0], products[1], products[2]].map(p => (
                <div key={p.id} className="flex-1 p-4 flex flex-col items-center justify-center border-l border-[rgba(10,9,6,0.08)]">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F2] mb-3 flex items-center justify-center overflow-hidden relative">
                    <div className="scale-[0.4] absolute"><Orb colors={p.orbColors} size="100px" /></div>
                  </div>
                  <div className="text-[11px] font-medium text-primary tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">{p.name}</div>
                </div>
              ))}
            </div>
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="flex border-b border-[rgba(10,9,6,0.08)] last:border-0 hover:bg-[#FAF8F2] transition-colors">
                <div className="w-[120px] p-3 border-r border-[rgba(10,9,6,0.08)] flex items-center justify-start pl-4">
                  <div className="h-1.5 w-16 bg-[rgba(10,9,6,0.05)] rounded-full"></div>
                </div>
                {[1, 2, 3].map(col => (
                  <div key={col} className="flex-1 p-3 flex justify-center items-center">
                    <div className={`h-1.5 rounded-full bg-[rgba(10,9,6,0.03)] ${col === 1 ? 'w-10' : col === 2 ? 'w-14' : 'w-8'}`}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECNOLOGÍA */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center bg-[var(--theme-color-base)] z-10 relative scroll-mt-[72px]">
        <SplitText text="Infrarrojo lejano. La longitud de onda del cuerpo humano." as="h2" className="text-[clamp(44px,6vw,80px)] font-medium leading-[0.95] tracking-tight justify-center mb-6 max-w-[800px]" />
        <p className="text-[16px] text-[#6B6A66] max-w-[540px] mb-20 leading-relaxed text-balance">
          El cuerpo humano emite y absorbe radiación FIR en el rango 4-14 micras. La misma banda en la que trabajan nuestros dispositivos. No es magia: es resonancia física.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-[1000px] text-left md:text-center pt-8 border-t border-[rgba(10,9,6,0.08)]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="eyebrow mb-6">01</div>
            <div className="flex flex-col items-start md:items-center mb-6">
              <div className="text-[90px] lg:text-[120px] font-medium text-[var(--theme-color-accent)] leading-none tracking-tighter"><NumberTicker value={4} />-<NumberTicker value={14} /></div>
              <div className="text-[14px] text-[var(--theme-color-secondary)] mt-2 font-mono">μm</div>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6B6A66]">Banda de resonancia con el cuerpo humano. Absorción selectiva por moléculas de agua celular.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="eyebrow mb-6">02</div>
            <div className="flex flex-col items-start md:items-center mb-6">
              <div className="text-[90px] lg:text-[120px] font-medium text-[var(--theme-color-accent)] leading-none tracking-tighter"><NumberTicker value={40} suffix="+" /></div>
              <div className="text-[14px] text-[#6B6A66] mt-2 font-mono">factor</div>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6B6A66]">Factor de impacto acumulado de la literatura peer-reviewed sobre FIR terapéutico.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="eyebrow mb-6">03</div>
            <div className="flex flex-col items-start md:items-center mb-6">
              <div className="text-[90px] lg:text-[120px] font-medium text-[#FF4D2E] leading-none tracking-tighter"><NumberTicker value={9} /></div>
              <div className="text-[14px] text-[var(--theme-color-secondary)] mt-2 font-mono">min</div>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6B6A66]">Sesión estándar recomendada. Dosis diaria sin saturar respuesta celular.</p>
          </motion.div>
        </div>
      </section>

      {/* 7. ONDA SVG + EVIDENCIA */}
      <section className="min-h-[80vh] flex flex-col md:flex-row border-y border-[var(--theme-color-border)] bg-[var(--theme-color-base)] z-10 relative scroll-mt-[72px]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-[var(--theme-color-border)] relative">
          <svg width="100%" height="200" viewBox="0 0 800 200" className="opacity-80">
            <motion.path d="M0 100 Q 100 0, 200 100 T 400 100 T 600 100 T 800 100" fill="none" stroke="#FF4D2E" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            <motion.path d="M0 100 Q 150 200, 300 100 T 600 100 T 900 100" fill="none" stroke="#8B7FFF" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }} />
          </svg>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <div className="eyebrow mb-6">EVIDENCIA CIENTÍFICA</div>
          <h3 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-16 text-wrap-balance leading-tight">Publicado. Replicado. Certificado.</h3>
          <div className="flex flex-col gap-10">
            <div><div className="text-[56px] font-medium tracking-tighter leading-none mb-2"><NumberTicker value={340} suffix="+" /></div><div className="text-[15px] text-[#6B6A66]">estudios clínicos revisados</div></div>
            <div><div className="text-[56px] font-medium tracking-tighter leading-none mb-2"><NumberTicker value={27} /></div><div className="text-[15px] text-[var(--theme-color-secondary)]">centros de investigación referenciados</div></div>
            <div>
              <Link to="/ciencia" className="text-[14px] font-medium text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent pb-1 inline-block mt-8">
                Leer la ciencia detrás de Vitaly →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIFERENCIADORES */}
      <section className="py-32 px-4 md:px-12 bg-base z-10 relative">
        <h2 className="text-[32px] md:text-[48px] font-medium text-center mb-16 tracking-tight">Otros lo prometen. Vitaly lo mide.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[rgba(10,9,6,0.08)] w-full">
          {[
            "Dosimetría real por sesión, no estimada",
            "App nativa con histórico y métricas",
            "Longitudes certificadas por laboratorio independiente",
            "Garantía 24 meses, devolución 60 días"
          ].map((text, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="p-8 border-b md:border-b-0 md:border-r border-[var(--theme-color-border)] last:border-r-0 lg:border-b-0">
              <div className="eyebrow mb-6">0{i + 1}</div>
              <p className="text-[15px] leading-relaxed max-w-[240px] text-[var(--theme-color-primary)]">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8.5 TEASER FAQ */}
      <section className="py-[100px] px-4 md:px-12 bg-[#FAF8F2] border-y border-[var(--theme-color-border)] z-10 relative">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <div className="eyebrow mb-6">DUDAS FRECUENTES</div>
            <h2 className="text-[40px] md:text-[48px] font-medium tracking-tight">Respuestas claras.</h2>
          </div>
          
          <div className="flex flex-col mb-12">
            {[7, 8, 4, 16].map((id) => {
              const faq = faqs.find(f => f.id === id);
              if (!faq) return null;
              return (
                <Accordion key={id} title={faq.q}>
                  {faq.a}
                </Accordion>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/faq" className="text-[14px] font-medium text-[var(--theme-color-primary)] border-b border-[#0A0906] pb-1 hover:opacity-70 transition-opacity">
              Ver todas las preguntas →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL + PRENSA */}
      <section className="py-32 px-4 bg-[var(--theme-color-base)] flex flex-col items-center justify-center text-center z-10 relative">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[12px] md:text-[14px] tracking-[0.3em] text-[#6B6A66] mb-24 font-mono">
          <span>VOGUE</span><span className="hidden md:inline">·</span><span>WIRED</span><span className="hidden md:inline">·</span><span>MEN'S HEALTH</span><span className="hidden md:inline">·</span><span>MONOCLE</span>
        </div>
        
        <div className="pt-20 border-t border-[var(--theme-color-border)] w-full max-w-[1000px] flex flex-col items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-[28px] md:text-[36px] font-[Instrument_Serif] italic max-w-[720px] mb-8 leading-snug">
            "Por fin un dispositivo de light therapy donde entiendo exactamente por qué funciona."
          </motion.div>
          <div className="text-[13px] text-[var(--theme-color-secondary)] tracking-wide">— Dra. Elena Marín · Dermatóloga, Hospital Clínic</div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="min-h-[90vh] pt-[120px] relative flex flex-col items-center justify-center text-center px-4 overflow-hidden border-t border-[rgba(10,9,6,0.08)] bg-[var(--theme-color-base)] z-20">
        <div className="absolute inset-0 gradient-mesh" style={{ opacity: 0.7 }} />
        <div className="absolute inset-0 bg-[#F5F3ED]/30 backdrop-blur-[2px]" />
        
        <div className="relative z-10 flex flex-col items-center pointer-events-none">
          <SplitText text="Menos promesas. Más tecnología FIR." as="h2" className="text-[48px] md:text-[80px] lg:text-[100px] font-medium tracking-tight mb-12 max-w-[900px] justify-center leading-none text-primary" />
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="pointer-events-auto">
            <MagneticButton variant="solid" className="mb-6 px-10 py-5 text-[15px]" onClick={() => { document.getElementById('dispositivos')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Explorar catálogo completo
            </MagneticButton>
            <div className="text-[12px] text-primary/70 tracking-wide mt-2">Envío gratis · Prueba 60 días · Devolución sin preguntas</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
