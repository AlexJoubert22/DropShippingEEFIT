import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SplitText } from '../components/Shared';
import { STUDIES, Study } from '../data/studies';
import { StudyModal } from '../components/StudyModal';

const CATEGORIES = ["Todos", "Revisiones", "Cognitivo", "Muscular", "Metabolismo", "Piel"];

export const CienciaPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  const officialStudies = STUDIES.filter(s => s.isOfficial && (activeCategory === "Todos" || s.category === activeCategory));
  const complementaryStudies = STUDIES.filter(s => !s.isOfficial && (activeCategory === "Todos" || s.category === activeCategory));

  return (
    <div className="bg-[#FAF8F2] min-h-screen pt-[72px] relative z-10 w-full overflow-x-hidden">
      {/* BREADCRUMB */}
      <div className="absolute top-[100px] left-6 md:left-12 z-20">
        <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
          <Link to="/" className="text-[var(--theme-color-secondary)] hover:text-primary transition-colors hover:border-b hover:border-[var(--theme-color-secondary)]">Inicio</Link>
          <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
          <span className="text-primary">Ciencia</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-12 w-full">
        {/* HERO */}
        <section className="pt-[160px] pb-[80px]">
          <div className="eyebrow mb-6">CIENCIA</div>
          <SplitText text="La ciencia detrás de cada producto." as="h1" className="text-[48px] md:text-[80px] font-medium tracking-tight mb-8 leading-[0.95] max-w-[800px] text-wrap-balance" />
          <p className="text-[17px] text-[var(--theme-color-secondary)] max-w-[540px] leading-relaxed">
            Cinco papers peer-reviewed firmados por el equipo de I+D de eefit en colaboración con la Universidad China de Hong Kong y la Universidad de Ciencia y Tecnología de Macao. Más siete referencias complementarias de literatura FIR independiente. Todos los enlaces llevan a las publicaciones originales.
          </p>
        </section>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-2 mb-12 sticky top-[72px] bg-[#FAF8F2]/90 backdrop-blur-md py-4 z-30 -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors border ${activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-transparent text-secondary border-[rgba(10,9,6,0.1)] hover:border-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID OFICIALES */}
        {officialStudies.length > 0 && (
          <div className="mb-24">
            <div className="inline-block bg-[#FF4D2E] text-white text-[11px] font-medium uppercase tracking-[0.1em] px-3 py-1.5 rounded-sm mb-6">
              PAPERS OFICIALES eefit
            </div>
            
            {/* 3 columns but we want to flow as 2 top, 3 bottom (which automatically happens with grid if we have 5 items) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officialStudies.map((study, idx) => (
                <motion.div 
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedStudy(study)}
                  className="bg-white border border-[rgba(10,9,6,0.08)] rounded-[20px] p-8 flex flex-col hover:border-[var(--theme-color-accent)] transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span 
                      className="text-[10px] uppercase font-medium tracking-wider px-2 py-1 rounded-sm"
                      style={{ backgroundColor: `${study.categoryColor}20`, color: study.categoryColor }}
                    >
                      {study.category}
                    </span>
                    <span className="text-[12px] font-mono text-secondary">{study.year}</span>
                  </div>
                  <h3 className="text-[20px] font-medium leading-[1.2] mb-3 group-hover:text-[var(--theme-color-accent)] transition-colors line-clamp-3">{study.title}</h3>
                  <div className="text-[13px] text-secondary mb-6">{study.journal}</div>
                  
                  <p className="text-[14px] text-secondary leading-relaxed flex-1">{study.summaryCard}</p>
                  
                  <div className="mt-8 text-[13px] font-medium text-primary flex items-center gap-2 group-hover:text-[var(--theme-color-accent)] transition-colors">
                    Leer el estudio completo <span className="text-lg">→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* COMPLEMENTARIOS */}
        {complementaryStudies.length > 0 && (
          <div className="mb-32">
            <div className="border-t border-[rgba(10,9,6,0.1)] pt-12 mb-8">
              <h2 className="text-[24px] font-medium">Referencias complementarias de literatura FIR</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complementaryStudies.map((study, idx) => (
                <motion.div 
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedStudy(study)}
                  className="border border-[rgba(10,9,6,0.1)] rounded-[16px] p-6 flex flex-col hover:bg-white transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase font-medium tracking-wider px-2 py-1 bg-[rgba(10,9,6,0.05)] text-secondary rounded-sm">
                      {study.category}
                    </span>
                    <span className="text-[12px] font-mono text-secondary">{study.year}</span>
                  </div>
                  <h3 className="text-[16px] font-medium leading-[1.3] mb-2">{study.title}</h3>
                  <div className="text-[12px] text-secondary mb-4">{study.journal}</div>
                  
                  <p className="text-[13px] text-secondary leading-relaxed flex-1 line-clamp-3">{study.summaryCard}</p>
                  
                  <div className="mt-6 text-[12px] font-medium text-secondary group-hover:text-primary transition-colors">
                    Leer resumen <span className="">→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedStudy && (
        <StudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </div>
  );
};
