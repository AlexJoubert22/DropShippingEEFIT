import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SplitText, Orb } from '../components/Shared';

const ARTICLES = [
  {
    id: 1,
    title: "La rutina matinal de tres minutos que estamos recomendando",
    category: "Rutina",
    readTime: "4 min",
    summary: "Cómo integramos Vitaly Lite en el café de la mañana sin fricción ninguna.",
    colors: ["#FFA300", "#FFB938", "#FF8600"] // amber
  },
  {
    id: 2,
    title: "¿Envejece la luz roja la piel? El mito del LED",
    category: "Ciencia",
    readTime: "7 min",
    summary: "Spoiler: no. Pero merece la pena entender por qué mucha gente lo cree.",
    colors: ["#4D9FFF", "#1A8CFF", "#0066CC"] // azul
  },
  {
    id: 3,
    title: "Por qué no prometemos curar la alopecia",
    category: "Ética",
    readTime: "6 min",
    summary: "Lo que la fotobiomodulación puede hacer por tu pelo, y lo que nunca te vamos a decir que hace.",
    colors: ["#B84DFF", "#9900FF", "#7A00CC"] // purple
  },
  {
    id: 4,
    title: "Fotobiomodulación en deportistas: ¿antes, durante o después?",
    category: "Ciencia",
    readTime: "9 min",
    summary: "Timing óptimo según tipo de esfuerzo, basado en la literatura actual.",
    colors: ["#00CC88", "#00E699", "#00B377"] // green
  },
  {
    id: 5,
    title: "Cómo limpiamos y cuidamos los dispositivos Vitaly",
    category: "Mantenimiento",
    readTime: "3 min",
    summary: "Pequeñas cosas que alargan la vida de los LEDs. Gesto diario.",
    colors: ["#00CCCC", "#00E6E6", "#00B3B3"] // teal
  },
  {
    id: 6,
    title: "Entrevista: Dra. Elena Marín habla de luz roja y dermatología",
    category: "Entrevista",
    readTime: "14 min",
    summary: "Conversación honesta con una dermatóloga del Hospital Clínic sobre pros, contras y moda del momento.",
    colors: ["#FF4D94", "#FF1A75", "#CC0052"] // pink
  }
];

export const DiarioPage = () => {
  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen relative z-10 flex flex-col pb-24">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] w-full pt-[100px] flex-1">
        {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide mb-12">
        <Link to="/" className="text-[var(--theme-color-secondary)] hover:text-primary transition-colors hover:border-b hover:border-[var(--theme-color-secondary)] border-b border-transparent">Inicio</Link>
        <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
        <span className="text-primary">Diario</span>
      </div>

      {/* HERO */}
      <section className="h-[30vh] min-h-[300px] flex flex-col justify-center max-w-[900px] relative mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
          <div className="eyebrow">DIARIO</div>
        </motion.div>
        
        <SplitText text="Notas desde el laboratorio." as="h1" className="text-[clamp(44px,6vw,84px)] font-medium tracking-tight leading-[0.95] mb-6 [text-wrap:balance]" />
        
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-[18px] text-[var(--theme-color-secondary)] max-w-[640px] leading-[1.6]">
          Ensayos, tutoriales y reflexiones sobre luz y cuerpo. Sin prisa, sin clickbait.
        </motion.p>
      </section>

      {/* FEATURED */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row border border-[rgba(10,9,6,0.08)] rounded-[24px] overflow-hidden bg-white hover:border-[rgba(10,9,6,0.15)] transition-colors mb-12 group cursor-pointer"
      >
        <div className="relative overflow-hidden w-full md:w-1/2 aspect-square md:aspect-auto md:h-[440px] bg-[#FAF8F2] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[130%] aspect-square flex items-center justify-center -translate-y-[10%] blur-[50px] saturate-[1.2] group-hover:scale-105 transition-transform duration-700 ease-out">
              <Orb colors={['#FF6B4A', '#FFB4A8', '#FFE8D6']} size="100%" />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 bg-white">
          <div className="text-[11px] font-medium tracking-widest uppercase text-[var(--theme-color-accent)] mb-6">
            GUÍA · 12 MIN
          </div>
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight leading-[1.1] mb-4 group-hover:text-[var(--theme-color-accent)] transition-colors">
            Qué esperar en tus primeras cuatro semanas con Vitaly Face
          </h2>
          <p className="text-[15px] text-secondary leading-relaxed mb-10 max-w-[400px]">
            Cronología honesta de qué notarás, cuándo, y qué no deberías esperar. Escrita para evitar abandonos por expectativas mal calibradas.
          </p>
          <div className="mt-auto md:mt-0">
            <span className="text-[14px] font-medium text-primary border-b border-transparent group-hover:border-[var(--theme-color-accent)] group-hover:text-[var(--theme-color-accent)] transition-all pb-1 inline-flex items-center gap-1">
              Leer el artículo <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {ARTICLES.map((article, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={article.id}
            className="group h-[360px] flex flex-col border border-[rgba(10,9,6,0.08)] rounded-[20px] overflow-hidden bg-white hover:-translate-y-1 hover:border-[rgba(10,9,6,0.15)] hover:shadow-lg transition-all duration-400 cursor-pointer"
          >
            <div className="h-[55%] w-full bg-[#FAF8F2] relative overflow-hidden flex items-center justify-center rounded-t-[20px]">
              <div className="scale-[1.5] w-full h-full flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-[1.6] transition-all duration-700 ease-out">
                <Orb colors={article.colors} size="150%" />
              </div>
              <div className="absolute inset-0 backdrop-blur-[50px] bg-white/20" />
            </div>
            
            <div className="h-[45%] w-full p-[20px] flex flex-col bg-white z-10 border-t border-[rgba(10,9,6,0.04)]">
              <div className="text-[10px] font-medium tracking-widest uppercase text-secondary mb-3 flex items-center gap-2">
                <span className="text-primary">{article.category}</span>
                <span className="opacity-40">•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-[20px] font-medium tracking-tight mb-2 leading-[1.2] group-hover:text-primary line-clamp-2">
                {article.title}
              </h3>
              <p className="text-[13px] text-secondary leading-relaxed line-clamp-2">
                {article.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NEWSLETTER */}
      <div className="py-24 border-t border-[rgba(10,9,6,0.08)] flex flex-col items-center justify-center text-center max-w-[500px] mx-auto w-full">
        <h3 className="text-[32px] font-medium tracking-tight mb-4">Una carta al mes.</h3>
        <p className="text-[15px] text-secondary mb-10 text-balance">
          Cuando hay algo que merece la pena contar. Sin spam, sin urgencias falsas.
        </p>
        
        <div className="relative w-full mb-8">
          <input 
            type="email" 
            placeholder="Tu dirección de correo" 
            className="w-full bg-transparent border-b border-[rgba(10,9,6,0.15)] py-4 text-[14px] outline-none focus:border-[var(--theme-color-primary)] transition-colors text-primary placeholder:text-[var(--theme-color-secondary)]"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[14px] text-primary hover:text-accent transition-colors font-medium">
            Suscribirme →
          </button>
        </div>
        <div className="text-[11px] text-secondary opacity-60">
          Al suscribirte aceptas nuestra política de privacidad.
        </div>
      </div>
      </div>
    </div>
  );
};
