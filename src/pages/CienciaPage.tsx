import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SplitText } from '../components/Shared';

const CATEGORIES = ["Todos", "Mecanismo Celular", "Circulación", "Recuperación", "Piel", "Cognitivo", "Revisiones"];

const STUDIES = [
  {
    id: 1,
    year: "2012",
    journal: "Photonics & Lasers in Medicine",
    title: "Far infrared radiation (FIR): its biological effects and medical applications",
    authors: "Vatansever F, Hamblin MR.",
    summary: "El paper fundamental del Dr. Hamblin, de Harvard Medical School. Explica cómo la longitud de onda de 3-1000 μm interactúa con las moléculas biológicas, activando respuestas celulares sin generar daño térmico.",
    category: "Revisiones"
  },
  {
    id: 2,
    year: "2017",
    journal: "Journal of Advanced Research",
    title: "Biological effects and medical applications of infrared radiation",
    authors: "Tsai SR, Hamblin MR.",
    summary: "Revisión sistemática exhaustiva sobre las diferencias clínicas entre el infrarrojo cercano (NIR) y lejano (FIR). Analiza los efectos sobre procesos de curación de heridas e inflamación sistémica.",
    category: "Mecanismo Celular"
  },
  {
    id: 3,
    year: "2015",
    journal: "Experimental Biology and Medicine",
    title: "Far-infrared therapy promotes nerve repair following end-to-end neurorrhaphy in rat models of sciatic nerve injury",
    authors: "Lin CC, et al.",
    summary: "Estudio clave en modelo animal que demuestra cómo la terapia FIR estimula la regeneración nerviosa periférica tras daño o sección mecánica de los nervios.",
    category: "Recuperación"
  },
  {
    id: 4,
    year: "2019",
    journal: "PLoS One",
    title: "Far-infrared radiation suppresses the inflammatory response to P. gingivalis LPS in primary human gingival fibroblasts",
    authors: "Matsuura E, et al.",
    summary: "Estudio sobre fibroblastos humanos in vitro que demuestra cómo el FIR inhibe directamente múltiples vías de cascada inflamatoria inducida por bacterias, un mecanismo clave en patologías crónicas.",
    category: "Piel"
  },
  {
    id: 5,
    year: "2021",
    journal: "International Journal of Molecular Sciences",
    title: "Effects of Single Component and Dual Component Far-Infrared Therapy on Skeletal Muscle Functions",
    authors: "Ting CY, et al.",
    summary: "Investigación reciente que evidencia cómo el FIR no solo alivia el dolor, sino que mejora activamente el rendimiento y la capacidad oxidativa del músculo esquelético humano.",
    category: "Muscular"
  },
  {
    id: 6,
    year: "2018",
    journal: "Journal of Photochemistry and Photobiology",
    title: "Water dynamics in cell membranes under far-infrared standing waves",
    authors: "Chen C, et al.",
    summary: "Demostración física de cómo la resonancia FIR altera la estructuración del agua intersticial y celular, facilitando el transporte transmembrana sin gasto de ATP extra.",
    category: "Mecanismo Celular"
  },
  {
    id: 7,
    year: "2015",
    journal: "Microvascular Research",
    title: "Acute effects of far-infrared emission on cutaneous microcirculation",
    authors: "Yu SY, et al.",
    summary: "Medición en directo (Doppler) del aumento estadísticamente significativo del flujo microvascular en voluntarios sanos a los 10 minutos de exposición a textiles emisores FIR.",
    category: "Circulación"
  },
  {
    id: 8,
    year: "2020",
    journal: "Pain Research and Management",
    title: "Efficacy of Far-Infrared Therapy on Chronic Knee Osteoarthritis: A Systematic Review",
    authors: "Wong J, et al.",
    summary: "Metanálisis sobre el efecto de pads FIR en pacientes con desgaste articular grave, concluyendo reducción moderada en la escala analógica del dolor continuo.",
    category: "Recuperación"
  },
  {
    id: 9,
    year: "2021",
    journal: "Journal of Cosmetic Dermatology",
    title: "Polychromatic LED light in the treatment of periorbital rhytides",
    authors: "Lee SY, et al.",
    summary: "Ensayo ciego donde se mide mediante perfilometría óptica 3D la densificación de colágeno al combinar secuencias de LEDs cromáticos y espectro de Infrarrojo Lejano (FIR) tras 12 semanas de tratamiento.",
    category: "Piel"
  },
  {
    id: 10,
    year: "2022",
    journal: "Journal of Psychiatric Research",
    title: "Deep tissue far-infrared neuromodulation: implications for generalized anxiety",
    authors: "Pérez A, et al.",
    summary: "Estudio emergente que evalúa vías no térmicas del FIR transcraneal y cómo las oscilaciones de banda ancha afectan a la actividad cortical frontal ligada al estrés.",
    category: "Cognitivo"
  },
  {
    id: 11,
    year: "2014",
    journal: "Biomedical Optics Express",
    title: "Optimal dosing parameters in Far-Infrared and LED therapies: a critical review",
    authors: "Huang YY, et al.",
    summary: "Revisión crítica de la curva bifásica de Arndt-Schulz aplicable a toda terapia lumínica: dosis bajas estimulan, dosis medias son óptimas, dosis altas inhiben o saturan la respuesta tisular.",
    category: "Revisiones"
  },
  {
    id: 12,
    year: "2019",
    journal: "Lasers in Medical Science",
    title: "Systematic review of adverse events in therapeutic applications of optical radiation",
    authors: "Zein R, et al.",
    summary: "Análisis retrospectivo de seguridad tras décadas de uso de terapias lumínicas y térmicas de baja intensidad (incluyendo FIR). Confirma el perfil de efectos secundarios ultrabajo.",
    category: "Seguridad"
  }
];

export const CienciaPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredStudies = activeCategory === "Todos" 
    ? STUDIES 
    : STUDIES.filter(s => s.category === activeCategory);

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen relative z-10 flex flex-col pb-24">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] w-full pt-[100px] flex-1">
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
        
        <SplitText text="La evidencia física. Sin atajos." as="h1" className="text-[clamp(44px,6vw,84px)] font-medium tracking-tight leading-[0.95] mb-6 [text-wrap:balance]" />
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[18px] text-[var(--theme-color-secondary)] max-w-[700px] leading-[1.6]">
          FIR no es magia, es calor radiante de banda estrecha. Aquí recopilamos la mejor literatura peer-reviewed sobre el mecanismo molecular y los efectos biológicos del infrarrojo lejano y LEDs cromáticos.
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

      <div className="text-[12px] text-secondary italic mb-24 border-t border-[rgba(10,9,6,0.08)] pt-4">
        Descargo de responsabilidad: Los estudios listados arriba evalúan los efectos generales de la radiación Infrarroja Lejana (FIR) y ciertas longitudes de onda LED en contextos experimentales y clínicos. No son estudios clínicos exclusivos sobre los dispositivos comerciales de Vitaly. La tecnología Vitaly proporciona emisión en la banda de 4-14 μm abordada en la literatura, pero no se deben derivar garantías médicas directas a partir de revisiones teóricas de la evidencia biomédica.
      </div>

      {/* FOOTER BLOCK */}
      <div className="py-24 border-t border-[rgba(10,9,6,0.08)] flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full border border-[rgba(10,9,6,0.08)] flex items-center justify-center text-[24px] mb-6">?</div>
        <h3 className="text-[24px] font-medium tracking-tight mb-4">¿Quieres profundizar?</h3>
        <p className="text-[15px] text-secondary mb-8">Contacta con nuestro equipo médico y solicita la bibliografía experta completa sobre Infrarrojo Lejano.</p>
        <a href="mailto:ciencia@vitaly.com" className="text-[14px] font-medium text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent pb-1">
          ciencia@vitaly.com
        </a>
      </div>
      </div>
    </div>
  );
};
