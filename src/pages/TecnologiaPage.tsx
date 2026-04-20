import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SplitText, MagneticButton } from '../components/Shared';

const sections = [
  { id: 'seccion-01', num: '01', title: '¿Qué es el infrarrojo lejano?', label: '¿Qué es el infrarrojo lejano?' },
  { id: 'seccion-02', num: '02', title: 'El mecanismo celular', label: 'El mecanismo celular' },
  { id: 'seccion-03', num: '03', title: 'La ventana biológica 4-14 μm', label: 'La ventana biológica 4-14 μm' },
  { id: 'seccion-04', num: '04', title: 'Dosis y tiempo', label: 'Dosis y tiempo' },
  { id: 'seccion-05', num: '05', title: 'Qué sabemos (y qué no)', label: 'Qué sabemos (y qué no)' },
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
    <div className="bg-[var(--theme-color-base)] min-h-screen relative z-10 flex flex-col">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] w-full pt-[100px] flex-1">
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
          
          <SplitText text="Infrarrojo lejano, explicado con honestidad." as="h1" className="text-[clamp(44px,6vw,84px)] font-medium tracking-tight leading-[0.95] mb-6 [text-wrap:balance]" />
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[18px] text-[var(--theme-color-secondary)] max-w-[640px] leading-[1.6]">
            Qué es el FIR, qué evidencia tiene, dónde funciona y dónde no. Sin palabras mágicas.
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
            <div className="eyebrow mb-4">01 · ¿Qué es el infrarrojo lejano?</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">La parte del espectro que no ves pero que sientes.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>El infrarrojo lejano (FIR por sus siglas en inglés, "Far-Infrared Radiation") es una banda de radiación electromagnética con longitud de onda entre 4 y 1000 micrómetros. Está justo después del rojo visible en el espectro, invisible al ojo humano pero presente constantemente a nuestro alrededor.</p>
              <p>El cuerpo humano emite su propio FIR en la banda estrecha de 4 a 14 micras, con un pico alrededor de 9,4 μm. Esa es nuestra huella térmica. Y esa es, no casualmente, la banda en la que más eficazmente absorbemos radiación FIR externa.</p>
              <p>Los materiales cerámicos funcionales, ciertos textiles avanzados y emisores electrónicos pueden producir FIR en esta "ventana de resonancia humana". Al aplicarlo sobre la piel, la molécula de agua celular —que representa el 60% de tu cuerpo— entra en vibración rotacional. Esa vibración es el mecanismo físico del que derivan los efectos biológicos estudiados.</p>
              
              <div className="bg-[rgba(255,77,46,0.05)] border border-[rgba(255,77,46,0.1)] p-6 md:p-8 rounded-[20px] mt-6 flex items-start gap-4">
                <div className="text-[var(--theme-color-accent)] text-[24px]">✦</div>
                <p className="text-primary font-medium text-[16px] leading-[1.6]">No es calor radiante convencional. No es láser. No es luz visible. Es resonancia molecular en la misma banda que emite tu propio cuerpo.</p>
              </div>

              <p className="mt-4">
                Los dispositivos Vitaly son fabricados por eefit (Yubo Technology Limited, Hong Kong), compañía pionera con más de veinte años de desarrollo en tecnología FIR. Su laboratorio colabora con la Escuela de Medicina China de la Universidad China de Hong Kong y con el Dr. Neher's Biophysics Laboratory de la Universidad de Ciencia y Tecnología de Macao. Los papers que encontrarás en la sección de Ciencia están firmados por su equipo de I+D liderado por el Prof. Nick Wang.
              </p>
            </div>
          </section>

          {/* SEC 2 */}
          <section id="seccion-02" className="content-section">
            <div className="eyebrow mb-4">02 · El mecanismo celular</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Mitocondria, microcirculación, reparación.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>La literatura científica ha identificado tres efectos principales del FIR terapéutico a nivel celular, todos publicados en revistas peer-reviewed.</p>
              <p>Primero: restauración de la dinámica mitocondrial. Un estudio publicado en Neural Regeneration Research demostró que la irradiación FIR restaura la función mitocondrial alterada en modelos de isquemia cerebral. Las mitocondrias son las plantas energéticas de la célula, y cuando su dinámica se restablece, la producción de ATP se normaliza.</p>
              <p>Segundo: modulación de vías inflamatorias y antioxidantes. Publicado en NeuroMolecular Medicine en 2025, se describe cómo el FIR modula las vías Jak-2/Stat3 y Nrf-2/HO-1 —implicadas en inflamación crónica y estrés oxidativo— en modelos de deterioro cognitivo.</p>
              <p>Tercero: mejora de la microcirculación local. El calor vibracional del FIR dilata capilares y aumenta el flujo sanguíneo en el tejido irradiado. Es el mecanismo más inmediato y perceptible: por eso se siente una sensación de "calor interno" al poco de empezar la sesión.</p>
              
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
                <div className="text-[12px] font-mono text-secondary tracking-widest uppercase">FIR → agua celular → mitocondria → ATP</div>
              </div>
            </div>
          </section>

          {/* SEC 3 */}
          <section id="seccion-03" className="content-section">
            <div className="eyebrow mb-4">03 · La ventana biológica 4-14 μm</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">La banda que tu cuerpo reconoce.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>Dentro del espectro infrarrojo, solo una fracción tiene relevancia terapéutica documentada. La banda entre 4 y 14 micrómetros coincide con los modos vibracionales de la molécula de agua, con el pico de emisión térmica del cuerpo humano, y con la ventana de absorción máxima de los tejidos blandos.</p>
              <p>Fuera de esa banda, el infrarrojo se comporta como calor superficial —se absorbe en la epidermis y se disipa. Dentro de esa banda, penetra 3 a 5 centímetros y activa procesos moleculares. Esta es la diferencia entre una manta eléctrica y un emisor FIR de grado médico.</p>
              <p>Los dispositivos Vitaly usan emisores cerámicos funcionales calibrados para emitir en el rango 6-14 μm, con pico cercano a los 9 μm. Es la misma banda que emplean las unidades de fisioterapia profesional y las cápsulas de recuperación usadas por equipos deportivos.</p>
              
              <div className="w-full border border-[rgba(10,9,6,0.08)] rounded-[20px] overflow-hidden mt-6 bg-white">
                <div className="grid grid-cols-2 text-[12px] uppercase tracking-wider font-mono bg-[#FAF8F2] border-b border-[rgba(10,9,6,0.08)]">
                  <div className="p-4 border-r border-[rgba(10,9,6,0.08)] text-center text-[#FF4D2E]">IR cercano (700nm-1400nm)</div>
                  <div className="p-4 text-center text-primary">FIR (4-14 μm)</div>
                </div>
                <div className="grid grid-cols-2 text-[14px]">
                  <div className="p-6 border-r border-[rgba(10,9,6,0.08)] flex flex-col gap-3">
                    <div className="font-medium">2–3 mm penetración</div>
                    <div className="text-secondary">Objetivo: superficial y músculo cerca.</div>
                    <div className="text-secondary">Aplicación: arrugas, piel.</div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="font-medium">3–5 cm penetración</div>
                    <div className="text-secondary">Objetivo: agua celular, vascular, profundo.</div>
                    <div className="text-secondary">Aplicación: recuperación, sistémico.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEC 4 */}
          <section id="seccion-04" className="content-section">
            <div className="eyebrow mb-4">04 · Dosis y tiempo</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Más no siempre es mejor.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>Como toda terapia por energía, el FIR tiene una curva de dosis-respuesta. Dosis bajas estimulan, dosis moderadas son óptimas, dosis muy altas pueden ser contraproducentes. La ventana terapéutica para la mayoría de aplicaciones está entre 3 y 25 J/cm² por sesión.</p>
              <p>Cada dispositivo Vitaly está calibrado para entregar la dosis óptima en su tiempo de sesión recomendado —entre 8 y 20 minutos según producto. No hay ninguna ganancia real en dejarlo puesto más tiempo. Los efectos son acumulativos con el uso diario, no con la sesión más larga.</p>
              <p>La respuesta también depende de la persona. Piel más fina absorbe más rápido; tejido con más masa necesita un poco más. La regla general: sigue el tiempo indicado, úsalo todos los días, no lo fuerces.</p>
            </div>
          </section>

          {/* SEC 5 */}
          <section id="seccion-05" className="content-section">
            <div className="eyebrow mb-4">05 · Qué sabemos (y qué no)</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">La evidencia, ordenada.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-8">
              <p>El FIR terapéutico tiene un cuerpo de evidencia creciente pero no uniforme. Aquí está ordenada por nivel de solidez:</p>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] text-primary font-medium">EVIDENCIA SÓLIDA en humanos y animales:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Mejora de microcirculación periférica</li>
                  <li>Reducción de dolor musculoesquelético crónico</li>
                  <li>Modulación de inflamación en artritis experimental (Journal of Advanced Research, 2022)</li>
                  <li>Aceleración de cicatrización tisular</li>
                  <li>Efectos ansiolíticos y mejora de calidad de sueño</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] text-primary font-medium">EVIDENCIA EMERGENTE (estudios recientes, mecanismo plausible):</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Protección neuronal en modelos de ictus (Neural Regeneration Research)</li>
                  <li>Mejora de función cognitiva en modelos de Alzheimer (NeuroMolecular Medicine, 2025)</li>
                  <li>Modulación de microbiota intestinal (Journal of Advanced Research, 2020)</li>
                  <li>Aplicaciones en medicina regenerativa (Pharmacological Research, 2024)</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] text-[#FF4D2E] font-medium">EVIDENCIA DÉBIL O INEXISTENTE:</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Detoxificación</li>
                  <li>Pérdida de peso directa</li>
                  <li>Curación de enfermedades degenerativas</li>
                  <li>Beneficios sistémicos por uso puntual</li>
                </ul>
              </div>

              <p className="text-primary font-medium italic">En Vitaly solo afirmamos lo primero con seguridad. Lo segundo lo mencionamos como campo de investigación activo. Lo tercero no lo vamos a decir nunca.</p>
            </div>
          </section>

          {/* SEC 6 */}
          <section id="seccion-06" className="content-section">
            <div className="eyebrow mb-4">06 · Límites y contraindicaciones</div>
            <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-8">Quién debería consultar antes.</h2>
            <div className="text-body text-[var(--theme-color-secondary)] flex flex-col gap-6">
              <p>El FIR tiene uno de los mejores perfiles de seguridad entre las terapias físicas. No es ionizante, no daña ADN, no es UV. Dicho esto, hay casos donde conviene consultar con un profesional médico antes:</p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Embarazo y lactancia:</strong> hay datos limitados, precaución especialmente sobre abdomen bajo.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Hemorragias activas o heridas abiertas recientes:</strong> el FIR aumenta circulación local, lo que puede prolongar sangrado.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Marcapasos e implantes electrónicos activos:</strong> consultar con el cardiólogo. La interferencia es improbable pero no imposible.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Fiebre alta o procesos infecciosos agudos:</strong> mejor esperar.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Medicación fotosensibilizante:</strong> algunos retinoides orales pueden aumentar sensibilidad térmica.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Cáncer activo en la zona de tratamiento:</strong> el aumento de metabolismo celular y vascularización es indeseable.</span></li>
                <li className="flex gap-4"><span className="text-primary">—</span><span><strong className="text-primary font-medium">Zonas con anestesia local o pérdida de sensibilidad:</strong> no podrás notar un sobrecalentamiento.</span></li>
              </ul>

              <p className="text-primary font-medium mt-4">Vitaly no sustituye consejo médico. Si tienes dudas, pregunta al que tiene la bata blanca.</p>
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
              <Link to="/checkout">Empezar el test →</Link>
            </MagneticButton>
          </div>
        </section>
      </div>
    </div>
  );
};

