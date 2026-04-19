import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LEGAL_LINKS = [
  { path: '/legal/aviso-legal', label: 'Aviso Legal' },
  { path: '/legal/privacidad', label: 'Política de Privacidad' },
  { path: '/legal/cookies', label: 'Política de Cookies' },
  { path: '/legal/terminos', label: 'Términos y Condiciones' }
];

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children }) => {
  const location = useLocation();

  return (
    <div className="bg-[var(--theme-color-base)] min-h-screen relative z-10 flex flex-col pb-32">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] w-full pt-[100px] flex-1">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide mb-12">
          <Link to="/" className="text-[var(--theme-color-secondary)] hover:text-primary transition-colors hover:border-b hover:border-[var(--theme-color-secondary)] border-b border-transparent">Inicio</Link>
          <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
          <span className="text-[var(--theme-color-secondary)]">Legal</span>
          <span className="text-[var(--theme-color-secondary)] opacity-50">/</span>
          <span className="text-primary">{title}</span>
        </div>

        {/* HERO */}
        <section className="h-[25vh] min-h-[250px] flex flex-col justify-center border-b border-[rgba(10,9,6,0.08)] mb-16">
          <div className="eyebrow mb-6">LEGAL</div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight leading-[1] mb-4 text-balance">
            {title}
          </h1>
          <div className="text-[14px] text-secondary">
            Última actualización: 19 de abril de 2026
          </div>
        </section>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32 w-full max-w-[1000px]">
          {/* SIDEBAR */}
          <div className="w-full md:w-[240px] flex-shrink-0 md:sticky md:top-[120px] self-start hidden md:flex flex-col gap-1 text-[14px]">
            {LEGAL_LINKS.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`py-2 px-4 -mx-4 rounded-[8px] transition-colors ${isActive ? 'bg-[rgba(10,9,6,0.05)] text-primary font-medium' : 'text-secondary hover:text-primary'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* DOCUMENT */}
          <div className="flex-1 w-full max-w-[680px]">
             <div className="prose prose-p:text-[16px] prose-p:leading-[1.75] prose-p:text-secondary prose-p:mb-6 prose-h2:text-[24px] prose-h2:font-medium prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-primary prose-ul:text-[16px] prose-ul:leading-[1.75] prose-ul:text-secondary prose-li:mb-2 prose-a:text-primary prose-a:border-b prose-a:border-[rgba(10,9,6,0.2)] hover:prose-a:border-primary prose-a:transition-colors">
               {children}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
