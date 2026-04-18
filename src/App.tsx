import React, { useEffect, useRef, useState, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useInView, useSpring, useTransform, useScroll } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Orb = ({ colors, size, className = '' }: { colors: string[], size: string, className?: string }) => {
  return (
    <div className={cn("orb-container relative rounded-full", className)} style={{ width: size, height: size }}>
      <div 
        className="orb-pulse absolute inset-0 rounded-full w-full h-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]} 40%, ${colors[2]} 80%, transparent)`,
          filter: 'blur(30px) saturate(1.1)',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />
    </div>
  );
};

const MagneticButton = ({ children, className = '', variant = 'solid' }: { children: ReactNode, className?: string, variant?: 'solid' | 'ghost' }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-full px-[28px] py-[14px] text-[14px] font-medium tracking-wide transition-colors duration-300 pointer-events-auto",
        variant === 'solid' ? "bg-[#FF4D2E] text-[#FFFFFF] hover:bg-[#E63D20]" : "border border-[var(--theme-color-border)] text-[var(--theme-color-primary)] hover:border-[var(--theme-color-primary)]",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

const SplitText = ({ text, className = '', as: Component = 'div' }: { text: string, className?: string, as?: any }) => {
  return (
    <Component className={cn("flex flex-wrap", className)}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-flex mr-[0.25em] overflow-hidden">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

const NumberTicker = ({ value, suffix = '', className = '' }: { value: number | string, suffix?: string, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
  const target = typeof value === 'string' ? parseFloat(value) : value;

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      if (progress < 1) {
        setCount(Math.floor(easeOut * target));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestAnimationFrame(updateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .product-card')) setIsHovering(true);
      else setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={cn(
        "fixed top-0 left-0 w-2 h-2 bg-[var(--theme-color-accent)] rounded-full pointer-events-none z-50 -ml-1 -mt-1 transition-all duration-300 ease-out hidden md:block",
        isHovering ? "scale-[5] bg-white mix-blend-difference" : ""
      )}
    />
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(245, 243, 237, 0)", "rgba(245, 243, 237, 0.8)"]);
  const navBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const products = [
    { id: '01', category: 'ROSTRO', name: 'Vitaly Face', desc: 'Máscara LED clínica. Colágeno diario.', price: '€349', colors: ['#FF6B4A', '#FFB4A8', '#FFE8D6'] },
    { id: '02', category: 'CABELLO', name: 'Vitaly Cap', desc: '120 diodos. Densidad visible en 12 semanas.', price: '€289', colors: ['#8B7FFF', '#D4CFFF', '#F2EEFF'] },
    { id: '03', category: 'CUERO CABELLUDO', name: 'Vitaly Halo', desc: 'Casco médico. Alopecia androgénica.', price: '€599', colors: ['#FFB347', '#FF8C42', '#FFE0B2'] },
    { id: '04', category: 'PIES', name: 'Vitaly Step', desc: 'Zapatillas FIR. Circulación en reposo.', price: '€149', colors: ['#5EEAD4', '#A7F3D0', '#ECFDF5'] },
    { id: '05', category: 'NÚCLEO', name: 'Vitaly Core', desc: 'Vitalización celular. 9 min al día.', price: '€459', colors: ['#FF6FD8', '#FFB8E6', '#FFE4F4'] },
    { id: '06', category: 'PORTÁTIL', name: 'Vitaly Lite', desc: 'LED de mano. Terapia puntual.', price: '€189', colors: ['#4A9FFF', '#7DD3FC', '#DBEAFE'] },
    { id: '07', category: 'CABELLO', name: 'Vitaly Brush', desc: 'Cepillo fotobiomodulación. Cada pasada trata.', price: '€129', colors: ['#FDB022', '#FEF3C7', '#FFFBEB'] },
    { id: '08', category: 'CERVICAL', name: 'Vitaly Neck', desc: 'Collar infrarrojo. Tensión cervical.', price: '€179', colors: ['#A78BFA', '#E9D5FF', '#F3EBFF'] },
  ];

  return (
    <>
      <CustomCursor />

      {/* 1. NAV */}
      <motion.nav 
        style={{ backgroundColor: navBg, backdropFilter: navBlur }}
        className="fixed top-0 left-0 right-0 h-[72px] z-40 flex items-center justify-between px-10 border-b border-[var(--theme-color-border)]"
      >
        <div className="text-[16px] font-medium tracking-[0.2em]">VITALY</div>
        <div className="hidden md:flex items-center gap-[32px] text-[13px] text-secondary">
          <a href="#" className="hover:text-primary transition-colors">Dispositivos</a>
          <a href="#" className="hover:text-primary transition-colors">Tecnología</a>
          <a href="#" className="hover:text-primary transition-colors">Ciencia</a>
          <a href="#" className="hover:text-primary transition-colors">Diario</a>
        </div>
        <div className="flex items-center gap-[24px] text-[13px]">
          <span className="text-secondary hover:text-primary transition-colors cursor-pointer tracking-wider">Carrito (0)</span>
          <button className="rounded-full bg-[#FF4D2E] text-[#FFFFFF] px-[18px] py-[8px] text-[12px] font-medium transition-colors hover:bg-[#E63D20] tracking-wide">Acceder</button>
        </div>
      </motion.nav>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 flex flex-col items-center mt-12 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-[24px] tracking-[0.14em]"
          >
            Light Therapy × 2026
          </motion.div>
          <SplitText text="Tu cuerpo. A la velocidad de la luz." as="h1" className="text-[clamp(56px,6vw,84px)] font-medium tracking-[-0.04em] leading-[0.95] text-wrap-balance max-w-[1000px] justify-center mb-[24px]" />
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="text-[18px] text-[var(--theme-color-secondary)] max-w-[540px] leading-[1.6] mb-[32px]"
          >
            Ocho dispositivos de fotobiomodulación clínica. Una marca. Resultados medibles desde la primera semana.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-[16px]"
          >
            <MagneticButton variant="solid">Ver dispositivos</MagneticButton>
            <MagneticButton variant="ghost">Cómo funciona</MagneticButton>
          </motion.div>
        </div>
        <div className="absolute bottom-[85px] flex flex-col items-center gap-2">
          <motion.div 
            className="w-[1px] h-[40px] bg-[var(--theme-color-primary)] opacity-20 overflow-hidden"
          >
            <motion.div 
              className="w-full h-full bg-[var(--theme-color-primary)]"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.1em] text-[#6B6A66] opacity-50">desliza</span>
        </div>
      </section>

      {/* 3. MARQUEE INFINITO */}
      <div className="h-[60px] border-y border-[var(--theme-color-border)] flex items-center overflow-hidden bg-base relative z-10">
        <div className="whitespace-nowrap flex text-[13px] tracking-wide text-[var(--theme-color-secondary)] relative w-[200%]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex"
          >
            <span className="px-[20px]">660nm + 850nm certificado · Prueba 60 días · Envío 24h España peninsular · 2 años de garantía · Diseñado en Valencia · Fabricado en Europa · Dosimetría real · </span>
            <span className="px-[20px]">660nm + 850nm certificado · Prueba 60 días · Envío 24h España peninsular · 2 años de garantía · Diseñado en Valencia · Fabricado en Europa · Dosimetría real · </span>
          </motion.div>
        </div>
      </div>

      {/* 4. MANIFIESTO */}
      <section className="min-h-[90vh] flex flex-col md:flex-row relative z-10 bg-[var(--theme-color-base)]">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="eyebrow mb-6">
              POR QUÉ VITALY
            </motion.div>
            <motion.h2 variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-h2 mb-8">
              La biología es la nueva tecnología.
            </motion.h2>
            <motion.p variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-[17px] leading-relaxed max-w-[440px] text-[var(--theme-color-secondary)]">
              No inventamos la fotobiomodulación — la llevamos a tu mesilla de noche. Luz roja 660nm e infrarroja 850nm en formatos que puedes usar mientras te cepillas los dientes. Ciencia silenciosa, diaria, medible.
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center gap-12 border-t md:border-t-0 md:border-l border-[var(--theme-color-border)]">
          <div className="border-t border-[var(--theme-color-border)] pt-4">
            <div className="text-[56px] font-medium text-[#0A0906] leading-none mb-2"><NumberTicker value={660} suffix="nm" /></div>
            <div className="text-[13px] text-[var(--theme-color-secondary)]">longitud de onda roja certificada</div>
          </div>
          <div className="border-t border-[var(--theme-color-border)] pt-4">
            <div className="text-[56px] font-medium text-[#0A0906] leading-none mb-2"><NumberTicker value={9} suffix=" min" /></div>
            <div className="text-[13px] text-[var(--theme-color-secondary)]">duración óptima por sesión</div>
          </div>
          <div className="border-t border-[var(--theme-color-border)] pt-4">
            <div className="text-[56px] font-medium text-[#0A0906] leading-none mb-2"><NumberTicker value={98} suffix="%" /></div>
            <div className="text-[13px] text-[var(--theme-color-secondary)]">absorción mitocondrial medida</div>
          </div>
        </div>
      </section>

      {/* 5. GRID DE PRODUCTOS */}
      <section className="pt-[120px] pb-24 px-4 md:px-12 bg-base z-10 relative">
        <div className="mb-16">
          <div className="eyebrow mb-6">CATÁLOGO 2026</div>
          <SplitText text="Ocho aplicaciones. Un principio físico." as="h2" className="text-h2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-16">
          {products.map((prod, i) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="product-card group relative h-[440px] rounded-[20px] border border-[var(--theme-color-border)] bg-[#FAF8F2] overflow-hidden p-[24px] flex flex-col justify-end"
            >
              <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none scale-[1.4]">
                <Orb 
                  colors={prod.colors} 
                  size="240px" 
                  className="transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.15] [&>div]:group-hover:blur-[15px]" 
                />
              </div>
              
              <div className="relative z-10 flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                <div className="eyebrow text-[11px] uppercase tracking-[0.14em] mb-2">{prod.id} · {prod.category}</div>
                <h3 className="text-[24px] font-medium tracking-tight mb-2">{prod.name}</h3>
                <p className="text-[14px] text-[var(--theme-color-secondary)] mb-4 line-clamp-2">{prod.desc}</p>
                <div className="text-[18px] font-medium text-[var(--theme-color-accent)]">{prod.price}</div>
              </div>
              
              <div className="absolute top-6 right-6 w-[32px] h-[32px] rounded-full border border-[var(--theme-color-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--theme-color-primary)] text-[14px]">
                →
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a href="#" className="text-[14px] font-medium text-[var(--theme-color-primary)] hover:text-[#E63D20] transition-colors">
            Comparar dispositivos →
          </a>
        </div>
      </section>

      {/* 6. TECNOLOGÍA */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center bg-[var(--theme-color-base)] z-10 relative">
        <SplitText text="La luz que tu mitocondria entiende." as="h2" className="text-h2 justify-center mb-6 max-w-[800px]" />
        <p className="text-[16px] text-[#6B6A66] max-w-[520px] mb-20 leading-relaxed">
          La fotobiomodulación es un fenómeno físico, no marketing. El citocromo c oxidasa absorbe longitudes de onda específicas y libera ATP. Es literalmente energía.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-[1000px] text-left md:text-center pt-8 border-t border-[rgba(10,9,6,0.08)]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="eyebrow mb-6">01</div>
            <div className="flex flex-col items-start md:items-center mb-6">
              <div className="text-[120px] font-medium text-[var(--theme-color-accent)] leading-none tracking-tighter"><NumberTicker value={660} /></div>
              <div className="text-[14px] text-[var(--theme-color-secondary)] mt-2 font-mono">nm</div>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6B6A66]">Rojo visible. Penetra dermis, activa fibroblastos, sintetiza colágeno.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="eyebrow mb-6">02</div>
            <div className="flex flex-col items-start md:items-center mb-6">
              <div className="text-[120px] font-medium text-[var(--theme-color-accent)] leading-none tracking-tighter"><NumberTicker value={850} /></div>
              <div className="text-[14px] text-[#6B6A66] mt-2 font-mono">nm</div>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6B6A66]">Infrarrojo cercano. Alcanza músculo y articulación. Recuperación profunda.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="eyebrow mb-6">03</div>
            <div className="flex flex-col items-start md:items-center mb-6">
              <div className="text-[120px] font-medium text-[#FF4D2E] leading-none tracking-tighter"><NumberTicker value={9} /></div>
              <div className="text-[14px] text-[var(--theme-color-secondary)] mt-2 font-mono">min</div>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6B6A66]">Sesión diaria. La dosis que tu cuerpo absorbe sin saturarse.</p>
          </motion.div>
        </div>
      </section>

      {/* 7. ONDA SVG + EVIDENCIA */}
      <section className="min-h-[80vh] flex flex-col md:flex-row border-y border-[var(--theme-color-border)] bg-[var(--theme-color-base)] z-10 relative">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-[var(--theme-color-border)] relative">
          <svg width="100%" height="200" viewBox="0 0 800 200" className="opacity-80">
            <motion.path 
              d="M0 100 Q 100 0, 200 100 T 400 100 T 600 100 T 800 100" 
              fill="none" 
              stroke="#FF4D2E" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path 
              d="M0 100 Q 150 200, 300 100 T 600 100 T 900 100" 
              fill="none" 
              stroke="#8B7FFF" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <div className="eyebrow mb-6">EVIDENCIA CIENTÍFICA</div>
          <h3 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-16 text-wrap-balance leading-tight">
            Publicado. Replicado. Certificado.
          </h3>
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-[56px] font-medium tracking-tighter leading-none mb-2"><NumberTicker value={340} suffix="+" /></div>
              <div className="text-[15px] text-[#6B6A66]">estudios clínicos revisados</div>
            </div>
            <div>
              <div className="text-[56px] font-medium tracking-tighter leading-none mb-2"><NumberTicker value={27} /></div>
              <div className="text-[15px] text-[var(--theme-color-secondary)]">centros de investigación referenciados</div>
            </div>
            <div>
              <div className="text-[56px] font-medium tracking-tighter leading-none mb-2"><NumberTicker value={100} suffix="%" /></div>
              <div className="text-[15px] text-[#6B6A66]">fabricación europea certificada</div>
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
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border-b md:border-b-0 md:border-r border-[var(--theme-color-border)] last:border-r-0 lg:border-b-0"
            >
              <div className="eyebrow mb-6">0{i + 1}</div>
              <p className="text-[15px] leading-relaxed max-w-[240px] text-[var(--theme-color-primary)]">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIAL + PRENSA */}
      <section className="py-32 px-4 bg-[var(--theme-color-base)] flex flex-col items-center justify-center text-center z-10 relative">
        <div className="eyebrow mb-12">MENCIONADOS EN</div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[12px] md:text-[14px] tracking-[0.3em] text-[#6B6A66] mb-24 font-mono">
          <span>VOGUE</span>
          <span className="hidden md:inline">·</span>
          <span>WIRED</span>
          <span className="hidden md:inline">·</span>
          <span>MEN'S HEALTH</span>
          <span className="hidden md:inline">·</span>
          <span>MONOCLE</span>
        </div>
        
        <div className="pt-20 border-t border-[var(--theme-color-border)] w-full max-w-[1000px] flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[28px] md:text-[36px] font-[Instrument_Serif] italic max-w-[720px] mb-8 leading-snug"
          >
            "Por fin un dispositivo de light therapy donde entiendo exactamente por qué funciona."
          </motion.div>
          <div className="text-[13px] text-[var(--theme-color-secondary)] tracking-wide">
            — Dra. Elena Marín · Dermatóloga, Hospital Clínic
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="min-h-[90vh] pt-[120px] relative flex flex-col items-center justify-center text-center px-4 overflow-hidden border-t border-[rgba(10,9,6,0.08)] bg-[var(--theme-color-base)] z-20">
        <div className="absolute inset-0 gradient-mesh" style={{ opacity: 0.7 }} />
        <div className="absolute inset-0 bg-[#F5F3ED]/30 backdrop-blur-[2px]" />
        
        <div className="relative z-10 flex flex-col items-center pointer-events-none">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="eyebrow mb-8">
            EMPIEZA HOY
          </motion.div>
          <SplitText text="Menos promesas. Más fotones." as="h2" className="text-[48px] md:text-[80px] lg:text-[100px] font-medium tracking-tight mb-12 max-w-[900px] justify-center leading-none text-primary" />
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="pointer-events-auto">
            <MagneticButton variant="solid" className="mb-6 px-10 py-5 text-[15px]">
              Explorar catálogo completo
            </MagneticButton>
            <div className="text-[12px] text-primary/70 tracking-wide mt-2">
              Envío gratis · Prueba 60 días · Devolución sin preguntas
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="pt-[120px] px-6 md:px-12 bg-base relative overflow-hidden z-10 flex flex-col border-t border-[var(--theme-color-border)]">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-12 mb-32 z-10 relative">
          <div className="col-span-2 md:col-span-2 flex flex-col">
            <div className="text-[14px] font-medium tracking-widest mb-12">VITALY</div>
            <div className="relative w-full max-w-[300px]">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-transparent border-b border-[rgba(10,9,6,0.08)] py-4 text-[13px] outline-none focus:border-[var(--theme-color-primary)] transition-colors text-primary placeholder:text-[var(--theme-color-secondary)]"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] text-primary hover:text-accent transition-colors font-medium">
                Suscribirme →
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 text-[13px]">
            <span className="font-medium mb-2">Dispositivos</span>
            <a href="#" className="text-[#6B6A66] hover:text-[var(--theme-color-primary)] transition-colors">Vitaly Face</a>
            <a href="#" className="text-[#6B6A66] hover:text-[#0A0906] transition-colors">Vitaly Cap</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Vitaly Core</a>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Ver todos</a>
          </div>
          
          <div className="flex flex-col gap-4 text-[13px]">
            <span className="font-medium mb-2">Tecnología</span>
            <a href="#" className="text-secondary hover:text-[#0A0906] transition-colors">Fotobiomodulación</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Dosimetría</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Certificaciones</a>
          </div>
          
          <div className="flex flex-col gap-4 text-[13px]">
            <span className="font-medium mb-2">Empresa</span>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Nosotros</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Prensa</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Carreras</a>
          </div>

          <div className="flex flex-col gap-4 text-[13px]">
            <span className="font-medium mb-2">Marca</span>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Manifiesto</a>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Historia</a>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Diseño</a>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Sostenibilidad</a>
          </div>
          
          <div className="flex flex-col gap-4 text-[13px]">
            <span className="font-medium mb-2">Soporte</span>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">FAQ</a>
            <a href="#" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Envíos</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Garantía</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none opacity-[0.04] z-0">
          <div className="text-[clamp(120px,18vw,220px)] font-bold tracking-tight leading-none text-[var(--theme-color-primary)]">VITALY</div>
        </div>
        
        <div className="border-t border-[rgba(10,9,6,0.08)] py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[var(--theme-color-secondary)] z-10 relative">
          <div>© 2026 Vitaly S.L. · Alboraia, València</div>
          <div className="text-center md:text-right">Vitaly no sustituye consejo médico. Dispositivos registrados en AEMPS.</div>
        </div>
      </footer>
    </>
  );
}
