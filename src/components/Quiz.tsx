import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';
import { Orb, MagneticButton, cn } from './Shared';
import { useCart } from '../context/CartContext';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Answers {
  area: string;
  time: string;
  mobility: string;
  budget: number;
}

const QUESTIONS = [
  {
    step: 0,
    title: '¿Qué quieres mejorar?',
    field: 'area',
    options: [
      { label: 'Rostro y piel', value: 'face' },
      { label: 'Cabello y cuero cabelludo', value: 'hair' },
      { label: 'Recuperación muscular y articular', value: 'muscle' },
      { label: 'Cervical y postura', value: 'neck' },
      { label: 'Energía general y bienestar', value: 'core' },
      { label: 'Todavía no lo tengo claro', value: 'any' }
    ],
    cols: 2
  },
  {
    step: 1,
    title: '¿Cuánto tiempo puedes dedicarle al día?',
    field: 'time',
    options: [
      { label: 'Menos de 5 minutos — quiero algo rápido', value: 'short' },
      { label: 'Entre 5 y 15 minutos — puedo tener una rutina', value: 'medium' },
      { label: 'Más de 15 minutos — soy constante', value: 'long' }
    ],
    cols: 1
  },
  {
    step: 2,
    title: '¿Dónde vas a usarlo?',
    field: 'mobility',
    options: [
      { label: 'En casa, en un sitio fijo', value: 'static' },
      { label: 'Me muevo, necesito algo portátil', value: 'portable' },
      { label: 'Me da igual, lo adapto', value: 'any' }
    ],
    cols: 2
  },
  {
    step: 3,
    title: '¿Qué presupuesto tienes en mente?',
    field: 'budget',
    options: [
      { label: 'Hasta 150 €', value: 150 },
      { label: 'De 150 a 300 €', value: 300 },
      { label: 'De 300 a 500 €', value: 500 },
      { label: 'Más de 500 €', value: 999 }
    ],
    cols: 2
  }
];

function recommendProducts(answers: Answers): Product[] {
  const scores = products.map(p => {
    let score = 0;
    
    if (answers.area === 'any') {
      score += 20;
    } else if (p.quizTags.area.includes(answers.area)) {
      score += 50;
    }
    
    if (p.quizTags.time === answers.time) {
      score += 20;
    }
    
    if (answers.mobility === 'any') {
      score += 10;
    } else if (p.quizTags.mobility === answers.mobility) {
      score += 15;
    }
    
    if (p.price <= answers.budget) {
      score += 25;
    } else if (p.price <= answers.budget * 1.2) {
      score += 10;
    } else {
      score -= 30;
    }
    
    return { product: p, score };
  });

  scores.sort((a, b) => b.score - a.score);
  
  const top1 = scores[0];
  const top2 = scores[1];
  
  if (top2 && top2.score >= top1.score * 0.6 && top2.score > 0) {
    return [top1.product, top2.product];
  }
  return [top1.product];
}

export const Quiz = ({ isOpen, onClose }: QuizProps) => {
  const [step, setStep] = useState(0); // 0-3 questions, 4 result
  const [answers, setAnswers] = useState<Answers>({ area: '', time: '', mobility: '', budget: 0 });
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  
  const { addItem, setIsDrawerOpen } = useCart();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap / body scroll / session check
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const saved = sessionStorage.getItem('vitaly_quiz');
      if (saved && step === 0) {
        const parsed = JSON.parse(saved);
        if (parsed.step > 0 && parsed.step < 4) {
          setShowResumePrompt(true);
        }
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Keyboard Nav
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (showResumePrompt || step === 4 || isCalculating) return;
      
      const q = QUESTIONS[step];
      
      if (e.key === 'ArrowLeft' && step > 0) {
        setStep(s => s - 1);
      } else if (e.key === 'ArrowRight' && answers[q.field as keyof Answers] !== '') {
        handleNext();
      } else if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key) - 1;
        if (idx < q.options.length) {
          handleSelect(q.field, q.options[idx].value);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, step, answers, showResumePrompt, isCalculating]);

  const saveProgress = (newStep: number, newAnswers: Answers) => {
    sessionStorage.setItem('vitaly_quiz', JSON.stringify({ step: newStep, answers: newAnswers }));
  };

  const handleSelect = (field: string, value: any) => {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
    saveProgress(step, newAnswers);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      saveProgress(step + 1, answers);
    } else {
      setStep(4); // result
      setIsCalculating(true);
      const recs = recommendProducts(answers);
      setRecommendations(recs);
      
      // Fake calc time
      setTimeout(() => {
        setIsCalculating(false);
        console.log("quiz_completed", { answers, recommendation: recs.map(r => r.name) });
        // TODO: reemplazar por call a analytics real cuando se integre GA4
      }, 1500);
      sessionStorage.removeItem('vitaly_quiz');
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({ area: '', time: '', mobility: '', budget: 0 });
    setRecommendations([]);
    sessionStorage.removeItem('vitaly_quiz');
    setShowResumePrompt(false);
  };

  const resume = () => {
    const saved = sessionStorage.getItem('vitaly_quiz');
    if (saved) {
      const parsed = JSON.parse(saved);
      setStep(parsed.step);
      setAnswers(parsed.answers);
    }
    setShowResumePrompt(false);
  };

  const renderResumePrompt = () => (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-[500px] mx-auto px-4">
      <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight mb-4">Empezaste un test.</h2>
      <p className="text-[16px] text-secondary mb-10">Tienes respuestas guardadas. ¿Quieres retomar donde lo dejaste?</p>
      <div className="flex gap-4">
        <MagneticButton variant="ghost" onClick={reset}>Empezar de cero</MagneticButton>
        <MagneticButton variant="solid" onClick={resume}>Continuar test →</MagneticButton>
      </div>
    </div>
  );

  const getMatchReason = () => {
    const p1 = QUESTIONS[0].options.find(o => o.value === answers.area)?.label.split(' ')[0] || '';
    const p2 = QUESTIONS[1].options.find(o => o.value === answers.time)?.label.split('—')[0].trim() || '';
    const p3 = QUESTIONS[2].options.find(o => o.value === answers.mobility)?.label.split(',')[0].trim() || '';
    const p4 = `€${answers.budget} presupuesto`;
    return `Match basado en: [${p1} · ${p2} · ${p3} · ${p4}]`;
  };

  const quizContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#F5F3ED] flex flex-col"
          ref={modalRef}
        >
          {/* HEADER */}
          <header className="h-[72px] flex items-center justify-between px-6 border-b border-[rgba(10,9,6,0.08)] flex-shrink-0 relative">
            <div className="text-[14px] font-medium tracking-[0.2em] relative z-10 w-[80px]">VITALY · TEST</div>
            
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-1 items-center z-10">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="h-[2px] bg-[rgba(10,9,6,0.12)] relative overflow-hidden flex-shrink-0 w-[60px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: (step > i || step === 4) || (step === i && showResumePrompt === false) ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-[var(--theme-color-accent)]"
                  />
                </div>
              ))}
            </div>

            <button onClick={onClose} className="w-[32px] h-[32px] rounded-full border border-[rgba(10,9,6,0.15)] flex items-center justify-center text-[16px] hover:border-[var(--theme-color-primary)] transition-colors focus:outline-none relative z-10">
              ×
            </button>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1 flex flex-col items-center justify-center max-w-[720px] w-full mx-auto px-6 overflow-y-auto overflow-x-hidden relative">
            {showResumePrompt ? renderResumePrompt() : (
              step < 4 ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.3, staggerChildren: 0.05 }}
                    className="w-full flex flex-col py-10"
                  >
                    <div className="eyebrow text-secondary mb-4">PREGUNTA {String(step + 1).padStart(2, '0')} DE 04</div>
                    <h2 className="text-[32px] md:text-[48px] font-medium leading-[1.1] text-balance mb-12 tracking-tight">
                      {QUESTIONS[step].title}
                    </h2>
                    
                    <div className={cn("grid gap-3", QUESTIONS[step].cols === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
                      {QUESTIONS[step].options.map((opt, i) => {
                        const isSelected = answers[QUESTIONS[step].field as keyof Answers] === opt.value;
                        return (
                          <motion.button
                            key={opt.value}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelect(QUESTIONS[step].field, opt.value)}
                            className={cn(
                              "w-full min-h-[80px] p-5 rounded-[var(--border-radius-lg)] border flex items-center justify-between text-left transition-all duration-300",
                              isSelected ? "border-[var(--theme-color-accent)] border-[2px] bg-[rgba(255,77,46,0.03)]" : "border-[rgba(10,9,6,0.15)] hover:border-[var(--theme-color-primary)] bg-transparent"
                            )}
                          >
                            <div className="flex gap-4 items-center">
                              <span className="text-[12px] text-secondary font-mono">0{i + 1}</span>
                              <span className={cn("text-[16px] font-medium tracking-tight", isSelected ? "text-primary" : "text-secondary hover:text-primary")}>{opt.label}</span>
                            </div>
                            <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center transition-colors", isSelected ? "border-[var(--theme-color-accent)] bg-[var(--theme-color-accent)]" : "border-transparent")}>
                              {isSelected && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <AnimatePresence mode="wait">
                  {isCalculating ? (
                    <motion.div
                      key="calc"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center text-center py-20"
                    >
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-12 h-12 rounded-full border-2 border-[var(--theme-color-border)] border-t-[var(--theme-color-accent)] mb-8" />
                      <h2 className="text-[32px] font-medium tracking-tight relative overflow-hidden">
                        Encontrando tu Vitaly...
                        <motion.div 
                          initial={{ left: '-100%' }} animate={{ left: '100%' }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(10,9,6,0.1)] to-transparent" 
                        />
                      </h2>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="res"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full flex flex-col items-center py-10"
                    >
                      <div className="eyebrow text-secondary mb-4">TU RECOMENDACIÓN</div>
                      <h2 className="text-[40px] md:text-[48px] font-medium tracking-tight mb-12 text-center text-balance">
                        {recommendations.length > 1 ? "Dos dispositivos para ti." : "Has conectado con..."}
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10 max-w-[800px] justify-center" style={{ display: recommendations.length === 1 ? 'flex' : 'grid' }}>
                        {recommendations.map((p, i) => (
                          <div key={p.id} className={cn("relative rounded-[20px] border border-[var(--theme-color-border)] bg-[#FAF8F2] overflow-hidden p-[32px] flex flex-col h-[500px] w-full", recommendations.length === 1 && "max-w-[400px]")}>
                            <motion.div 
                              initial={{ scale: 0 }} animate={{ scale: [0, 1.1, 1] }} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                              className="w-[200px] h-[200px] mx-auto mb-[32px] flex items-center justify-center pointer-events-none"
                            >
                              <Orb colors={p.orbColors} size="100%" />
                            </motion.div>
                            
                            <div className="mt-auto relative z-10 flex flex-col">
                              <h3 className="text-[28px] font-medium tracking-tight mb-2 text-primary">{p.name}</h3>
                              <p className="text-[15px] text-secondary mb-6">{p.tagline}</p>
                              <div className="text-[24px] font-medium text-[var(--theme-color-accent)] mb-8">€{p.price}</div>
                              <div className="flex flex-col gap-3">
                                <button
                                  onClick={() => { onClose(); navigate(`/producto/${p.slug}`); }}
                                  className="w-full rounded-full border border-transparent bg-[#FF4D2E] text-white py-3 text-[14px] font-medium hover:bg-[#E63D20] transition-colors"
                                >
                                  Ver ficha →
                                </button>
                                <button
                                  onClick={() => {
                                    addItem({ ...p, quantity: 1 });
                                    onClose();
                                    setIsDrawerOpen(true);
                                  }}
                                  className="w-full rounded-full border border-[rgba(10,9,6,0.15)] text-[var(--theme-color-primary)] py-3 text-[14px] font-medium hover:border-[var(--theme-color-primary)] transition-colors bg-transparent"
                                >
                                  Añadir al carrito
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="text-[13px] text-secondary mb-8 text-center">{getMatchReason()}</div>
                      
                      <button onClick={reset} className="text-[13px] font-medium text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                        Empezar el test de nuevo
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              )
            )}
          </main>

          {/* FOOTER */}
          {step < 4 && !showResumePrompt && (
            <footer className="h-[80px] border-t border-[rgba(10,9,6,0.08)] px-6 flex items-center justify-between flex-shrink-0">
              <button 
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className="text-[14px] font-medium disabled:opacity-30 disabled:pointer-events-none hover:text-[var(--theme-color-accent)] transition-colors"
              >
                ← Anterior
              </button>
              
              <button 
                onClick={handleNext}
                disabled={answers[QUESTIONS[step].field as keyof Answers] === '' || answers[QUESTIONS[step].field as keyof Answers] === 0}
                className={cn(
                  "rounded-full px-[24px] py-[12px] text-[14px] font-medium transition-colors",
                  answers[QUESTIONS[step].field as keyof Answers] === '' || answers[QUESTIONS[step].field as keyof Answers] === 0 
                    ? "bg-[rgba(10,9,6,0.05)] text-[rgba(10,9,6,0.3)] pointer-events-none" 
                    : "bg-[#0A0906] text-white hover:bg-[var(--theme-color-accent)]"
                )}
              >
                {step === 3 ? "Ver resultado →" : "Siguiente →"}
              </button>
            </footer>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(quizContent, document.body);
};
