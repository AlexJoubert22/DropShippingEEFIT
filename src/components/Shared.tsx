import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import CountUp from 'react-countup';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Accordion: React.FC<{ 
  title: string, 
  children: React.ReactNode, 
  defaultOpen?: boolean, 
  isOpen?: boolean, 
  onToggle?: () => void 
}> = ({ title, children, defaultOpen = false, isOpen: controlledIsOpen, onToggle }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    if (onToggle) onToggle();
    if (!isControlled) setInternalIsOpen(!internalIsOpen);
  };

  return (
    <div className="border-b border-[var(--theme-color-border)] last:border-b-0">
      <button 
        onClick={handleClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-[15px] font-medium tracking-tight pr-8">{title}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }} 
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-6 h-6 rounded-full border border-[var(--theme-color-border)] flex items-center justify-center flex-shrink-0"
        >
          <span className="text-[10px] leading-none text-[var(--theme-color-primary)]">+</span>
        </motion.div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-8 text-[14px] text-[var(--theme-color-secondary)] leading-relaxed pr-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const Orb = ({ colors, size, className = '' }: { colors: string[], size: string, className?: string }) => {
  return (
    <div className={cn("orb-container relative rounded-full", className)} style={{ width: size, height: size, flexShrink: 0 }}>
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

export const MagneticButton = ({ children, className = '', variant = 'solid', onClick }: { children: ReactNode, className?: string, variant?: 'solid' | 'ghost', onClick?: () => void }) => {
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
      onClick={onClick}
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

export const SplitText = ({ text, className = '', as: Component = 'div' }: { text: string, className?: string, as?: any }) => {
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

export const NumberTicker = ({ value, suffix = '', className = '' }: { value: number | string, suffix?: string, className?: string }) => {
  const target = typeof value === 'string' ? parseFloat(value) : value;

  return (
    <span className={className}>
      <CountUp
        start={0}
        end={target}
        duration={2.5}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        separator=","
      />
      {suffix}
    </span>
  );
};

export const CustomCursor = () => {
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
