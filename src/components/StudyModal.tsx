import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  const content = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 9, 6, 0.65)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#F5F3ED] w-[1080px] max-w-[92vw] h-[90vh] rounded-[24px] overflow-hidden flex flex-col md:flex-row z-[101]"
          style={{ boxShadow: '0 24px 64px rgba(10, 9, 6, 0.2)' }}
        >
          {/* HEADER ABSOLUTO START (Cerrar) */}
          <div className="absolute top-0 right-0 p-6 z-10 bg-gradient-to-b from-[#F5F3ED] to-transparent pointer-events-none md:bg-none">
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-[var(--theme-color-border)] flex items-center justify-center bg-[#F5F3ED] md:bg-transparent md:hover:bg-[var(--theme-color-border)] transition-colors pointer-events-auto"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* PANEL IZQ: 40% DESKTOP / TOP MOBILE */}
          <div className="w-full h-[280px] md:h-full md:w-[40%] bg-[#0A0906] text-[#F5F3ED] p-8 md:p-12 relative overflow-hidden shrink-0">
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ filter: 'blur(80px)' }}>
               <Orb colors={[study.categoryColor || '#FF4D2E', '#F5F3ED', '#0A0906']} size="150%" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className={`inline-block text-[10px] font-medium uppercase tracking-[0.1em] px-3 py-1.5 rounded-sm mb-6 ${study.isOfficial ? 'bg-[#FF4D2E] text-white' : 'bg-[#E5E1D8] text-[#0A0906]'}`}>
                  {study.isOfficial ? 'PAPER OFICIAL EEFIT' : 'REFERENCIA EXTERNA'}
                </span>
                
                <div className="text-[64px] font-medium leading-none mb-6 font-['Instrument_Serif'] italic tracking-tight">
                  {study.year}
                </div>
                
                <div className="text-[14px] uppercase tracking-wider opacity-70 mb-2">Publicado en:</div>
                <div className="text-[18px] font-medium mb-8 leading-snug font-serif">
                  {study.journal}
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="flex flex-col gap-1 text-[13px] opacity-80 leading-relaxed mb-6">
                  <div className="font-medium text-white">{study.authorsDetailed || study.authorsShort}</div>
                  {study.institutions && <div>{study.institutions}</div>}
                </div>
                <div className="inline-block border border-[rgba(245,243,237,0.2)] rounded-full px-4 py-1.5 text-[11px] uppercase tracking-wider">
                  {study.category}
                </div>
              </div>
            </div>
          </div>

          {/* PANEL DER: 60% DESKTOP / BOTTOM MOBILE */}
          <div className="w-full h-full md:w-[60%] bg-[#F5F3ED] overflow-y-auto px-8 py-10 md:px-12 md:py-16">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[28px] md:text-[36px] font-medium leading-[1.1] tracking-tight mb-8"
            >
              {study.title}
            </motion.h1>

            <div className="md:hidden mb-8">
                <div className="flex flex-col gap-1 text-[13px] text-secondary leading-relaxed mb-4">
                  <div className="font-medium">{study.authorsDetailed || study.authorsShort}</div>
                  {study.institutions && <div>{study.institutions}</div>}
                </div>
            </div>

            {study.fullArticle ? (
              <>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5, type: 'spring', bounce: 0.4 }}
                  className="bg-white border border-[var(--theme-color-border)] p-6 md:p-8 rounded-[16px] mb-12 shadow-[0_8px_32px_rgba(10,9,6,0.04)]"
                >
                  <div className="text-[11px] uppercase tracking-[0.1em] text-primary mb-3">VERDICT BOX</div>
                  <div className="text-[18px] md:text-[22px] italic leading-[1.5] text-primary font-['Instrument_Serif']">
                    "{study.fullArticle.verdict}"
                  </div>
                </motion.div>

                <div className="flex flex-col gap-10 md:gap-14 border-l border-[var(--theme-color-border)] pl-6 md:pl-8 ml-2">
                  {study.fullArticle.sections.map((sec, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                      className="relative"
                    >
                      <div className="absolute -left-[25px] md:-left-[33px] top-1.5 w-2 h-2 rounded-full bg-[#0A0906]" />
                      <div className="text-[11px] uppercase tracking-[0.1em] text-primary mb-3 font-medium">{sec.heading}</div>
                      <p className="text-[15px] md:text-[16px] leading-[1.6] text-secondary max-w-[500px]">
                        {sec.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white border border-[rgba(10,9,6,0.08)] p-8 rounded-[16px]">
                <div className="text-[11px] uppercase tracking-[0.1em] text-primary mb-3">RESUMEN METODOLÓGICO</div>
                <p className="text-[16px] leading-[1.6] text-secondary mb-6 max-w-[500px]">{study.summaryCard}</p>
                <div className="text-[13px] px-4 py-3 bg-[#FAF8F2] rounded-[8px] text-secondary font-medium inline-block border border-[var(--theme-color-border)]">💡 Estudio de referencia independiente</div>
              </div>
            )}

            {study.url && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="mt-14 pt-8 border-t border-[rgba(10,9,6,0.08)]"
              >
                <a href={study.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A0906] text-white rounded-full text-[13px] font-medium hover:bg-[#FF4D2E] transition-colors">
                  Leer el paper original ↗
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};
