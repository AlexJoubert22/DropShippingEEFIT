import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { SplitText, Orb, MagneticButton } from '../components/Shared';

export const ComparatorPage = () => {
  const tableRows = [
    { label: 'Precio', getValue: (p: any) => `€${p.price}` },
    { label: 'Categoría', getValue: (p: any) => p.category },
    { label: 'Longitudes de onda', getValue: (p: any) => p.specs.wavelengths.join(' + ') },
    { label: 'Nº de diodos', getValue: (p: any) => p.specs.diodes },
    { label: 'Duración sesión', getValue: (p: any) => `${p.specs.sessionMinutes} min` },
    { label: 'Frecuencia recomendada', getValue: (p: any) => p.recommendedFrequency },
    { label: 'Autonomía', getValue: (p: any) => p.specs.batteryMinutes ? `${p.specs.batteryMinutes} min` : 'Corriente / Batería externa' },
    { label: 'Peso', getValue: (p: any) => `${p.specs.weightGrams}g` },
    { label: 'Certificaciones', getValue: (p: any) => p.specs.certifications.join(' · ') },
    { label: 'Garantía', getValue: (p: any) => p.specs.warranty },
    { label: 'Para qué es mejor', getValue: (p: any) => p.bestFor.join(' · ') },
  ];

  return (
    <div className="bg-[#FAF8F2] min-h-screen pt-[72px] relative z-10">
      {/* HERO */}
      <section className="h-[40vh] min-h-[350px] flex flex-col items-center justify-center text-center px-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow mb-6">COMPARAR</motion.div>
        <SplitText text="Ocho dispositivos. Elige el tuyo." as="h1" className="text-[clamp(44px,5vw,72px)] font-medium tracking-tight mb-4 justify-center" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[17px] text-[var(--theme-color-secondary)] max-w-[520px]">
          Todas las especificaciones, lado a lado. Sin marketing, solo números.
        </motion.p>
      </section>

      {/* TABLA */}
      <section className="relative w-full max-w-[1400px] mx-auto pb-24 px-4 sm:px-6">
        {/* Mobile Swipe Hint */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="md:hidden text-center text-[11px] text-[var(--theme-color-secondary)] tracking-widest uppercase mb-4"
        >
          desliza para ver más →
        </motion.div>
        
        <div className="overflow-x-auto custom-scrollbar border border-[rgba(10,9,6,0.08)] bg-white rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-[72px] z-30 shadow-[0_1px_0_rgba(10,9,6,0.08)] bg-white">
              <tr>
                <th className="sticky left-0 bg-white z-40 w-[180px] p-6 text-[11px] uppercase tracking-widest text-[var(--theme-color-secondary)] whitespace-nowrap min-w-[180px]">
                  {/* Empty corner header */}
                </th>
                {products.map((p) => (
                  <th key={p.id} className="p-6 text-center min-w-[220px] max-w-[260px] bg-white group">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-[80px] h-[80px] flex items-center justify-center pointer-events-none relative rounded-full bg-[#FAF8F2] overflow-hidden">
                         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 scale-[0.6]">
                           <Orb colors={p.orbColors} size="160px" />
                         </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[18px] font-medium tracking-tight whitespace-nowrap">{p.name}</span>
                        <Link to={`/producto/${p.slug}`} className="text-[13px] text-[var(--theme-color-accent)] hover:opacity-80 transition-opacity mt-2 font-medium">
                          Ver ficha →
                        </Link>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, index) => (
                <tr key={index} className="group hover:bg-[rgba(255,77,46,0.03)] transition-colors">
                  <th className="sticky left-0 bg-white group-hover:bg-[#FFF9F8] transition-colors z-20 p-6 border-t border-[rgba(10,9,6,0.08)] text-[12px] font-medium uppercase tracking-[0.1em] text-[#0A0906]">
                    {row.label}
                  </th>
                  {products.map((p) => (
                    <td key={p.id} className="p-6 border-t border-[rgba(10,9,6,0.08)] text-[14px] text-[#6B6A66] text-center">
                      <span className={row.label === 'Precio' ? 'text-[var(--theme-color-accent)] font-medium text-[16px]' : ''}>
                        {row.getValue(p)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24 flex flex-col items-center justify-center text-center px-4 border-t border-[var(--theme-color-border)]">
        <h3 className="text-[28px] font-medium mb-10 tracking-tight">¿Sigues sin saber cuál es para ti?</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <MagneticButton variant="solid" onClick={() => {}}>Haz el test (próximamente) →</MagneticButton>
          <Link to="/" className="text-[14px] font-medium text-[var(--theme-color-secondary)] hover:text-[#0A0906] transition-colors border-b border-transparent hover:border-[#0A0906] pb-1">
            Ver catálogo completo →
          </Link>
        </div>
      </section>
    </div>
  );
};
