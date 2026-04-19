import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SplitText } from '../components/Shared';

const CATEGORIES = ["Todos", "Piel", "Cabello", "Muscular", "Cognitivo", "Seguridad", "Revisiones"];

const STUDIES = [
  {
    id: 1,
    year: "2014",
    journal: "Seminars in Cutaneous Medicine and Surgery",
    title: "Low-level laser (light) therapy (LLLT) in skin: stimulating, healing, restoring",
    authors: "Avci et al.",
    summary: "Revisión exhaustiva de los efectos de la luz roja e infrarroja sobre piel: colágeno, cicatrización, inflamación.",
    category: "Piel"
  },
  {
    id: 2,
    year: "2017",
    journal: "Photomedicine and Laser Surgery",
    title: "Efficacy of low-level laser therapy in the treatment of androgenetic alopecia",
    authors: "Afifi et al.",
    summary: "Metanálisis de 11 ensayos clínicos. Mejora estadísticamente significativa en densidad capilar tras 16 semanas.",
    category: "Cabello"
  },
  {
    id: 3,
    year: "2016",
    journal: "British Journal of Sports Medicine",
    title: "Phototherapy in skeletal muscle performance and recovery",
    authors: "Ferraresi et al.",
    summary: "Revisión sobre el uso pre y post-ejercicio de luz roja. Reducción de daño muscular y mejora en rendimiento.",
    category: "Muscular"
  },
  {
    id: 4,
    year: "2013",
    journal: "Journal of Biophotonics",
    title: "Mechanisms of low-level light therapy",
    authors: "Hamblin et al.",
    summary: "Mecanismo de acción molecular: citocromo c oxidasa, óxido nítrico, ATP, especies reactivas de oxígeno.",
    category: "Revisiones"
  },
  {
    id: 5,
    year: "2018",
    journal: "Dermatologic Surgery",
    title: "A controlled trial to determine the efficacy of red and near-infrared light treatment in patient satisfaction",
    authors: "Wunsch & Matuschka",
    summary: "136 participantes, 30 sesiones. Mejora medida en densidad de colágeno por ultrasonido.",
    category: "Piel"
  },
  {
    id: 6,
    year: "2014",
    journal: "American Journal of Clinical Dermatology",
    title: "Low-level laser therapy for androgenetic alopecia",
    authors: "Jimenez et al.",
    summary: "Ensayo aleatorizado con 128 hombres. Incremento del 35% en recuento de pelos terminales tras 26 semanas.",
    category: "Cabello"
  },
  {
    id: 7,
    year: "2019",
    journal: "Lasers in Medical Science",
    title: "Safety of photobiomodulation therapy: a review",
    authors: "Zein et al.",
    summary: "Revisión de eventos adversos reportados en 40 años de uso clínico. Perfil de seguridad robusto.",
    category: "Seguridad"
  },
  {
    id: 8,
    year: "2020",
    journal: "Photobiomodulation, Photomedicine, and Laser Surgery",
    title: "The effect of 850nm near-infrared light on muscle recovery",
    authors: "Leal-Junior et al.",
    summary: "Ensayo aleatorizado con 30 atletas. Reducción de marcadores de daño muscular tras ejercicio excéntrico.",
    category: "Muscular"
  },
  {
    id: 9,
    year: "2017",
    journal: "Photomedicine and Laser Surgery",
    title: "Low-level laser therapy in acne vulgaris",
    authors: "Keshri et al.",
    summary: "Revisión sistemática. Combinación de luz azul y roja muestra eficacia moderada en acné inflamatorio.",
    category: "Piel"
  },
  {
    id: 10,
    year: "2016",
    journal: "Journal of Cosmetic and Laser Therapy",
    title: "Wrinkle reduction using 660nm and 850nm LED",
    authors: "Barolet et al.",
    summary: "Estudio controlado. Reducción medida de arrugas finas y mejora en textura tras 12 semanas de uso doméstico.",
    category: "Piel"
  },
  {
    id: 11,
    year: "2019",
    journal: "Neuropsychiatric Disease and Treatment",
    title: "Transcranial photobiomodulation: a review of clinical applications",
    authors: "Salehpour et al.",
    summary: "Revisión de aplicaciones neurológicas emergentes. Evidencia preliminar pero prometedora.",
    category: "Cognitivo"
  },
  {
    id: 12,
    year: "2021",
    journal: "International Journal of Molecular Sciences",
    title: "Biological effects of red light therapy on mitochondrial function",
    authors: "Hamblin",
    summary: "Actualización del mecanismo molecular con nuevas evidencias sobre melanopsina y opsinas.",
    category: "Revisiones"
  }
];

export const CienciaPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredStudies = activeCategory === "Todos" 
    ? STUDIES 
    : STUDIES.filter(s => s.category === activeCategory);

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen pt-[100px] relative z-10 px-6 md:px-12 flex flex-col pb-24">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide mb-12">
        <Link to="/" className="text-[var(--theme-color-secondary)] hover:text-primary transition-colors hover:border-b hover:border-[var(--theme-color-secondary)] border-b border-transparent">Inicio</Link>
        <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
        <span className="text-primary">Ciencia</span>
      </div>

      {/* HERO */}
      <section className="h-[40vh] min-h-[350px] flex flex-col justify-center max-w-[900px] relative mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
          <div className="eyebrow">CIENCIA</div>
        </motion.div>
        
        <SplitText text="La literatura. Sin atajos." as="h1" className="text-[clamp(44px,6vw,84px)] font-medium tracking-tight leading-[0.95] mb-6 [text-wrap:balance]" />
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[18px] text-[var(--theme-color-secondary)] max-w-[700px] leading-[1.6]">
          Más de 7000 estudios revisados por pares sobre fotobiomodulación. Aquí están los que sostienen cada claim de Vitaly.
        </motion.p>
      </section>

      {/* TABS */}
      <div className="flex items-center flex-wrap gap-2 md:gap-4 mb-16 border-b border-[rgba(10,9,6,0.08)] pb-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-[13px] font-medium rounded-full transition-colors ${
              activeCategory === cat 
                ? 'bg-primary text-white' 
                : 'bg-transparent text-secondary hover:text-primary hover:bg-[rgba(10,9,6,0.05)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <AnimatePresence mode="popLayout">
          {filteredStudies.map(study => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              key={study.id}
              className="group border border-[rgba(10,9,6,0.08)] rounded-[20px] p-8 flex flex-col bg-white hover:border-[rgba(10,9,6,0.2)] transition-colors h-full"
            >
              <div className="text-[11px] font-medium text-secondary tracking-widest uppercase mb-4">
                {study.year} · <span className="text-primary opacity-80">{study.journal}</span>
              </div>
              <h3 className="text-[18px] font-medium tracking-tight leading-[1.3] mb-3 text-primary">
                {study.title}
              </h3>
              <div className="text-[13px] text-secondary italic mb-6">
                {study.authors}
              </div>
              <p className="text-[14px] text-secondary leading-relaxed mb-10 flex-1">
                "{study.summary}"
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-medium text-[var(--theme-color-accent)] uppercase tracking-widest px-3 py-1 bg-[rgba(255,77,46,0.05)] rounded-full">
                  {study.category}
                </span>
                <a href="#" className="text-[13px] font-medium text-primary hover:text-[var(--theme-color-accent)] transition-colors border-b border-transparent hover:border-[var(--theme-color-accent)] pb-0.5 inline-flex items-center gap-1">
                  Leer abstract →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* FOOTER BLOCK */}
      <div className="py-24 border-t border-[rgba(10,9,6,0.08)] flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full border border-[rgba(10,9,6,0.08)] flex items-center justify-center text-[24px] mb-6">?</div>
        <h3 className="text-[24px] font-medium tracking-tight mb-4">¿Quieres profundizar?</h3>
        <p className="text-[15px] text-secondary mb-8">Contacta con nuestro equipo médico y solicita la bibliografía completa.</p>
        <a href="mailto:ciencia@vitaly.com" className="text-[14px] font-medium text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent pb-1">
          ciencia@vitaly.com
        </a>
      </div>
    </div>
  );
};
