import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SplitText, MagneticButton } from '../components/Shared';

const sections = [
  { id: 'seccion-01', num: '01', title: '¿Qué es la fotobiomodulación?', label: '¿Qué es la fotobiomodulación?' },
  { id: 'seccion-02', num: '02', title: 'El mecanismo celular', label: 'El mecanismo celular' },
  { id: 'seccion-03', num: '03', title: '660nm y 850nm explicado', label: '660nm y 850nm explicado' },
  { id: 'seccion-04', num: '04', title: 'Dosimetría: cuánta luz y cuándo', label: 'Dosimetría: cuánta luz y cuándo' },
  { id: 'seccion-05', num: '05', title: 'Evidencia y estudios', label: 'Evidencia y estudios' },
  { id: 'seccion-06', num: '06', title: 'Límites y contraindicaciones', label: 'Límites y contraindicaciones' },
];

export const TecnologiaPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 200) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen pt-[100px] relative z-10 px-6 md:px-12">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide mb-12">
        <Link to="/" className="text-[var(--theme-color-secondary)] hover:text-primary transition-colors hover:border-b hover:border-[var(--theme-color-secondary)] border-b border-transparent">Inicio</Link>
        <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
        <span className="text-primary">Tecnología</span>
      </div>

      {/* HERO */}
      <section className="h-[60vh] min-h-[400px] flex flex-col justify-center max-w-[900px] relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
          <div className="eyebrow">TECNOLOGÍA</div>
          <div className="text-[11px] text-[var(--theme-color-secondary)] px-2 py-1 bg-[rgba(10,9,6,0.05)] rounded-full">8 min de lectura</div>
        </motion.div>
        
        <SplitText text="La luz que tu mitocondria entiende." as="h1" className="text-[clamp(44px,6vw,84px)] font-medium tracking-tight leading-[0.95] mb-6 [text-wrap:balance]" />
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[18px] text-[var(--theme-color-secondary)] max-w-[640px] leading-[1.6]">
          Un resumen honesto de la fotobiomodulación: qué es, cómo funciona, qué evidencia tiene y dónde están sus límites.
        </motion.p>
      </section>

      {/* MAIN CONTENT WITH SIDEBAR */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative pb-[120px]">
        {/* SIDEBAR */}
        <div className="w-full md:w-[240px] md:sticky md:top-[120px] self-start hidden md:flex flex-col gap-4">
          {sections.map((sec) => (
            <button 
              key={sec.id} 
              onClick={() => document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-left text-[13px] font-medium transition-colors py-1 pl-4 border-l-2 ${activeSection === sec.id ? 'text-primary border-[var(--theme-color-accent)]' : 'text-secondary border-transparent hover:text-primary'}`}
            >
              <span className="opacity-50 mr-2 font-mono text-[11px]">{sec.num}</span> {sec.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-24 max-w-[720px]">
          {/* SEC 1 */}
          <section id="seccion-01" className="content-section">
            <div className="eyebrow mb-4">01 · El Origen</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Cuatro décadas después, la luz sigue siendo medicina.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>La fotobiomodulación es la aplicación de luz roja visible e infrarroja cercana sobre el cuerpo humano para estimular procesos celulares. No es un concepto nuevo. La descubrió por accidente el médico húngaro Endre Mester en 1967, cuando intentaba ver si un láser podía provocar cáncer en ratones. No solo no lo hizo — los ratones irradiados cicatrizaron más rápido y les creció más pelo. Desde entonces se han publicado más de 7000 estudios.</p>
              <p>Durante décadas quedó relegada a consultas fisioterapéuticas y deportivas. La llegada de los LEDs de alta irradiancia y bajo coste en los 2010s democratizó la tecnología. Hoy existen dispositivos de uso doméstico con las mismas longitudes de onda que se usan en hospitales.</p>
              <p>En Vitaly trabajamos exclusivamente con dos bandas: 660 nanómetros (rojo visible) y 850 nanómetros (infrarrojo cercano). Son las longitudes con más literatura científica detrás y las que mejor atraviesan piel y tejido blando.</p>
              
              <div className="bg-[rgba(255,77,46,0.05)] border border-[rgba(255,77,46,0.1)] p-6 md:p-8 rounded-[20px] mt-6 flex items-start gap-4">
                <div className="text-[var(--theme-color-accent)] text-[24px]">✦</div>
                <p className="text-primary font-medium text-[16px] leading-[1.6]">La fotobiomodulación no es calor, no es láser, no es UV. Es luz específica absorbida por una molécula específica.</p>
              </div>
            </div>
          </section>

          {/* SEC 2 */}
          <section id="seccion-02" className="content-section">
            <div className="eyebrow mb-4">02 · Biología Celular</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Todo empieza en la mitocondria.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>Dentro de cada célula de tu cuerpo hay entre 100 y 2000 mitocondrias. Son las plantas de energía celular. Su función es producir ATP, la molécula que literalmente mueve todo lo que haces: pensar, respirar, regenerar tejido.</p>
              <p>Las mitocondrias tienen una enzima llamada <span className="text-primary font-medium">citocromo c oxidasa</span> en su membrana interna. Esta enzima absorbe luz de forma selectiva: tiene picos de absorción en 620-680nm y en 820-870nm. Casualmente, las mismas longitudes que usa Vitaly.</p>
              <p>Cuando la luz incide sobre esta enzima, se acelera el transporte de electrones y aumenta la producción de ATP. También se libera óxido nítrico, que mejora la circulación local. El efecto neto: más energía disponible, mejor oxigenación, menos inflamación.</p>
              <p>Esto no es especulación ni marketing. Es bioquímica publicada en revistas como Photomedicine and Laser Surgery y el Journal of Biophotonics desde hace 20 años.</p>
              
              <div className="border border-[rgba(10,9,6,0.08)] p-12 rounded-[20px] mt-6 flex flex-col items-center justify-center bg-white gap-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <ellipse cx="12" cy="12" rx="10" ry="6" />
                  <path d="M6 12c2-1 4 1 6 1s4-2 6-1" />
                  <path d="M12 3v3" />
                  <path d="M18 6l-2 2" />
                  <path d="M6 6l2 2" />
                  <path d="M22 12h-3" />
                  <path d="M2 12h3" />
                  <path d="M18 18l-2-2" />
                  <path d="M6 18l2-2" />
                  <path d="M12 21v-3" />
                </svg>
                <div className="text-[12px] font-mono text-secondary tracking-widest uppercase">Fotón → Citocromo C → ATP</div>
              </div>
            </div>
          </section>

          {/* SEC 3 */}
          <section id="seccion-03" className="content-section">
            <div className="eyebrow mb-4">03 · Nanómetros</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Dos longitudes, dos trabajos distintos.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>La luz de <span className="text-primary font-medium">660nm</span> es rojo visible — la que ves encendida en el dispositivo. Penetra entre 1 y 3 milímetros en el cuerpo. Su dominio es la piel: dermis, fibroblastos, producción de colágeno, pigmentación, cicatrización.</p>
              <p>La luz de <span className="text-primary font-medium">850nm</span> es infrarrojo cercano — invisible al ojo humano. Penetra entre 3 y 5 centímetros. Alcanza músculo, tendón, articulación, hueso superficial, folículo capilar profundo. Es la responsable de los efectos en recuperación muscular y alopecia.</p>
              <p>Por eso la mayoría de dispositivos Vitaly combinan ambas. Vitaly Face lleva las dos porque la piel se beneficia de 660 y la musculatura facial profunda de 850. Vitaly Step lleva solo 850 porque trabaja planta del pie y no necesitamos iluminar solo epidermis.</p>
              
              <div className="w-full border border-[rgba(10,9,6,0.08)] rounded-[20px] overflow-hidden mt-6 bg-white">
                <div className="grid grid-cols-2 text-[12px] uppercase tracking-wider font-mono bg-[#FAF8F2] border-b border-[rgba(10,9,6,0.08)]">
                  <div className="p-4 border-r border-[rgba(10,9,6,0.08)] text-center text-[#FF4D2E]">660nm (Rojo Visible)</div>
                  <div className="p-4 text-center text-primary">850nm (Infrarrojo Cercano)</div>
                </div>
                <div className="grid grid-cols-2 text-[14px]">
                  <div className="p-6 border-r border-[rgba(10,9,6,0.08)] flex flex-col gap-3">
                    <div className="font-medium">1–3 mm profundidad</div>
                    <div className="text-secondary">Dermis, capilares, fibroblastos.</div>
                    <div className="text-secondary">Skincare, cicatrización, arrugas.</div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="font-medium">3–5 cm profundidad</div>
                    <div className="text-secondary">Músculo, hueso, articulaciones.</div>
                    <div className="text-secondary">Recuperación, dolor, alopecia.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEC 4 */}
          <section id="seccion-04" className="content-section">
            <div className="eyebrow mb-4">04 · La Dosis</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">La dosis hace el veneno — y también la medicina.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>Un error común es pensar que más luz es mejor. No lo es. La fotobiomodulación sigue la curva bifásica de Arndt-Schulz: dosis bajas estimulan, dosis medias son óptimas, dosis altas inhiben.</p>
              <p>La unidad que importa es el <span className="text-primary font-medium">J/cm²</span> (julios por centímetro cuadrado). Para la mayoría de aplicaciones terapéuticas, la ventana útil está entre 3 y 30 J/cm² por sesión. Por encima de 60 J/cm², los efectos se revierten.</p>
              <p>Cada dispositivo Vitaly está calibrado para entregar la dosis óptima en la sesión recomendada. Si tu ficha dice "10 minutos", no son 10 minutos arbitrarios: es el tiempo que tarda la irradiancia de ese dispositivo concreto en alcanzar la ventana terapéutica sin pasarse.</p>
              <p className="text-primary font-medium">Por eso no recomendamos dejarlo puesto "un rato más". No acelera resultados. Los ralentiza.</p>
            </div>
          </section>

          {/* SEC 5 */}
          <section id="seccion-05" className="content-section">
            <div className="eyebrow mb-4">05 · Evidencia Científica</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Qué sabemos con certeza.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-8">
              <p>No todos los claims sobre luz roja están respaldados. Algunos sí lo están con ensayos clínicos randomizados de buena calidad. Otros son preliminares. Otros son simplemente marketing.</p>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] text-primary font-medium">Lo que tiene evidencia sólida en humanos:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Mejora de apariencia cutánea (reducción de arrugas finas, tono): múltiples RCTs</li>
                  <li>Crecimiento capilar en alopecia androgénica: FDA clearance para varios dispositivos LLLT desde 2007</li>
                  <li>Recuperación muscular post-ejercicio: metanálisis publicados en British Journal of Sports Medicine</li>
                  <li>Reducción de dolor articular crónico: revisiones Cochrane con efecto moderado</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] text-primary font-medium">Lo que está en investigación pero aún no concluyente:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Mejora cognitiva aplicada en cráneo</li>
                  <li>Pérdida de grasa localizada</li>
                  <li>Efectos sistémicos de la terapia corporal completa</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] text-[#FF4D2E] font-medium">Lo que NO tiene evidencia pese a lo que lean por ahí:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Tratamiento de cáncer</li>
                  <li>Cura de enfermedades autoinmunes</li>
                  <li>Detoxificación</li>
                </ul>
              </div>

              <p className="text-primary font-medium italic">En Vitaly solo afirmamos lo primero. Las otras dos categorías las dejamos donde están: en los estudios y en la honestidad.</p>
            </div>
          </section>

          {/* SEC 6 */}
          <section id="seccion-06" className="content-section">
            <div className="eyebrow mb-4">06 · Seguridad</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Quién debería pensárselo dos veces.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>La fotobiomodulación es una de las terapias con mejor perfil de seguridad documentado. No es calor que queme, no es UV que dañe ADN, no es radiación ionizante. Dicho eso, hay casos donde hay que consultar con tu médico antes:</p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Embarazo y lactancia:</strong> no hay evidencia de daño, pero tampoco estudios suficientes.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Medicación fotosensibilizante:</strong> ciertos antibióticos, retinoides orales, antiinflamatorios. La luz roja no es UV pero aún puede interactuar.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Epilepsia fotosensible:</strong> las luces parpadeantes pueden ser trigger. Los dispositivos Vitaly no parpadean, pero conviene saberlo.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Cáncer activo en zona de tratamiento:</strong> la fotobiomodulación acelera metabolismo celular. En tejido tumoral puede acelerar lo que no interesa acelerar.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Tatuajes recientes:</strong> la tinta absorbe luz y puede calentarse.</span></li>
              </ul>

              <p className="text-primary font-medium mt-4">No somos médicos. Si tienes dudas, pregunta al que lo es.</p>
            </div>
          </section>
        </div>
      </div>
      
      {/* FINAL CTA */}
      <section className="py-24 border-t border-[rgba(10,9,6,0.08)] flex flex-col items-center justify-center text-center gap-8">
        <h3 className="text-[32px] font-medium tracking-tight">Pasa a la práctica.</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <MagneticButton variant="ghost" onClick={() => {}}>
            <Link to="/#dispositivos">Ver los dispositivos →</Link>
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => {}}>
            <button>Empezar el test →</button>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
