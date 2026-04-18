import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
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
          <Link to="/producto/vitaly-face" className="text-[#6B6A66] hover:text-[var(--theme-color-primary)] transition-colors">Vitaly Face</Link>
          <Link to="/producto/vitaly-cap" className="text-[#6B6A66] hover:text-[#0A0906] transition-colors">Vitaly Cap</Link>
          <Link to="/producto/vitaly-core" className="text-secondary hover:text-primary transition-colors">Vitaly Core</Link>
          <Link to="/" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Ver todos</Link>
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
          <Link to="/faq" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">FAQ</Link>
          <Link to="/faq" className="text-secondary hover:text-[var(--theme-color-primary)] transition-colors">Envíos</Link>
          <Link to="/faq" className="text-secondary hover:text-primary transition-colors">Garantía</Link>
          <a href="mailto:soporte@vitalylab.com" className="text-secondary hover:text-primary transition-colors">Contacto</a>
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
  );
};
