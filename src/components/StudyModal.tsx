import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Orb } from './Shared';
import type { Study } from '../data/studies';

export const StudyModal = ({ study, onClose }: { study: Study | null; onClose: () => void }) => {
  useEffect(() => {
    if (study) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [study, onClose]);

  if (!study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.4 }} 
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#0A0906]"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#F5F3ED] w-full max-w-[720px] max-h-[85vh] rounded-[24px] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* GIGANTIC BLURRED ORB */}
          <div className="absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] pointer-events-none opacity-20" style={{ filter: 'blur(120px) saturate(0.8)' }}>
             <Orb colors={[study.categoryColor || '#FF4D2E', '#F5F3ED', '#0A0906']} size="100%" />
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto">
            {/* HEADER STICKY */}
            <div className="sticky top-0 bg-[#F5F3ED]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-[rgba(10,9,6,0.08)] z-20">
              <div className="flex gap-4 items-center">
                <span className={`text-[10px] font-medium uppercase tracking-[0.1em] px-2 py-1 rounded-sm ${study.isOfficial ? 'bg-[#FF4D2E] text-white' : 'bg-[#E5E1D8] text-secondary'}`}>
                  {study.isOfficial ? 'PAPER OFICIAL eefit' : 'REFERENCIA'}
                </span>
                <span className="text-[13px] font-medium text-secondary">{study.year} · {study.journal}</span>
              </div>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[rgba(10,9,6,0.05)] transition-colors text-xl">
                ×
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 md:p-10 flex flex-col gap-8">
              <h1 className="text-[28px] font-medium leading-[1.1] tracking-tight">{study.title}</h1>
              
              <div className="flex flex-col gap-1 text-[14px]">
                <div className="font-medium text-primary">{study.authorsDetailed || study.authorsShort}</div>
                {study.institutions && <div className="text-secondary">{study.institutions}</div>}
              </div>

              {study.fullArticle ? (
                <>
                  <div className="bg-[#FAF8F2] border-l-[3px] border-[var(--theme-color-accent)] p-6 rounded-r-[12px]">
                    <div className="text-[18px] italic leading-[1.5] text-primary">
                      {study.fullArticle.verdict}
                    </div>
                  </div>

                  <div className="flex flex-col gap-10 mt-4">
                    {study.fullArticle.sections.map((sec, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + (i * 0.08), duration: 0.5 }}
                      >
                        <div className="eyebrow mb-4 text-[11px]">{sec.heading}</div>
                        <p className="text-[15px] leading-[1.6] text-secondary">
                          {sec.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-[#FAF8F2] border border-[rgba(10,9,6,0.08)] p-6 rounded-[12px]">
                  <p className="text-[15px] leading-[1.6] text-secondary mb-4">{study.summaryCard}</p>
                  <p className="text-[13px] text-secondary italic">Este es un estudio de referencia independiente, no patrocinado ni realizado por eefit.</p>
                </div>
              )}

              {study.url && (
                <div className="mt-8 pt-8 border-t border-[rgba(10,9,6,0.08)]">
                  <a href={study.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-[var(--theme-color-accent)] transition-colors border-b border-primary hover:border-transparent pb-0.5">
                    Leer paper original en {study.journal} →
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
