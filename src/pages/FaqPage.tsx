import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data/faqs';
import { SplitText, cn, MagneticButton } from '../components/Shared';

const FaqAccordion: React.FC<{ 
  title: string, 
  children: React.ReactNode, 
  isOpen: boolean, 
  onToggle: () => void 
}> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-t border-[var(--theme-color-border)]">
      <button 
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[18px] md:text-[20px] font-medium transition-colors group-hover:text-[var(--theme-color-accent)] pr-8">{title}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          className="text-[24px] font-light text-[var(--theme-color-secondary)] group-hover:text-[var(--theme-color-primary)] flex-shrink-0"
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
            <div className="pb-8 text-[15px] md:text-[16px] text-[#6B6A66] leading-relaxed pr-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Todas');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ['Todas', 'Envíos', 'Devoluciones', 'Uso', 'Garantía', 'Pagos', 'Técnica'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'Todas' || faq.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const handleToggle = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen pt-[72px] relative z-10">
      {/* BREADCRUMB */}
      <div className="absolute top-[100px] left-6 md:left-12 z-20">
        <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide border-b border-transparent">
          <Link to="/" className="text-[var(--theme-color-secondary)] hover:text-primary transition-colors hover:border-b hover:border-[var(--theme-color-secondary)]">Inicio</Link>
          <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
          <span className="text-primary">Preguntas frecuentes</span>
        </div>
      </div>

      {/* HERO */}
      <section className="h-[30vh] min-h-[300px] flex flex-col items-center justify-center text-center px-4 relative mt-8 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow mb-6">PREGUNTAS FRECUENTES</motion.div>
        <SplitText text="Lo que nos preguntáis." as="h1" className="text-[clamp(40px,5vw,64px)] font-medium tracking-tight mb-4 justify-center" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[17px] text-[var(--theme-color-secondary)]">
          Respuestas honestas. Sin letra pequeña.
        </motion.p>
      </section>

      <section className="px-6 md:px-12 max-w-[800px] mx-auto pb-24 relative z-10">
        {/* BUSCADOR */}
        <div className="flex justify-center mb-16 px-4">
          <div className="relative w-full max-w-[560px]">
            <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[rgba(10,9,6,0.4)] pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input 
              type="text" 
              placeholder="Buscar en las preguntas..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[rgba(10,9,6,0.15)] rounded-md py-[14px] pl-[44px] pr-[20px] text-[16px] text-[#0A0906] placeholder-[rgba(10,9,6,0.4)] focus:outline-none focus:border-[var(--theme-color-accent)] focus:ring-2 focus:ring-[var(--theme-color-accent)]/10 transition-all text-left"
            />
          </div>
        </div>

        {/* CATEGORÍAS TABS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 border-b border-[var(--theme-color-border)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setOpenIndex(null); }}
              className={cn(
                "pb-4 text-[14px] md:text-[15px] font-medium tracking-wide transition-colors relative",
                activeTab === cat ? "text-[var(--theme-color-primary)]" : "text-[var(--theme-color-secondary)] hover:text-[var(--theme-color-primary)]"
              )}
            >
              {cat}
              {activeTab === cat && (
                <motion.div layoutId="faq-tab" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--theme-color-accent)]" />
              )}
            </button>
          ))}
        </div>

        {/* LISTA DE PREGUNTAS */}
        <div className="flex flex-col">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FaqAccordion 
                key={faq.id} 
                title={faq.q} 
                isOpen={openIndex === faq.id}
                onToggle={() => handleToggle(faq.id)}
              >
                {faq.a}
              </FaqAccordion>
            ))
          ) : (
            <div className="text-center py-16 text-[var(--theme-color-secondary)]">No hemos encontrado ninguna respuesta para tu búsqueda.</div>
          )}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 border-t border-[var(--theme-color-border)] flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-[28px] font-medium tracking-tight mb-8">¿No encuentras respuesta?</h3>
        <a href="mailto:soporte@vitalylab.com">
          <MagneticButton variant="ghost">Escríbenos a soporte@vitalylab.com</MagneticButton>
        </a>
      </section>
    </div>
  );
};
