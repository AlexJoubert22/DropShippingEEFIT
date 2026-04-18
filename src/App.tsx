import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import { CartProvider } from './context/CartContext';
import { CustomCursor } from './components/Shared';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

// Scroll restoration for nested routes or link clicks
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
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

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <Nav />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:slug" element={<ProductPage />} />
          <Route path="/tecnologia" element={<HomePage />} /> {/* Placeholder to loop back to home tech section basically */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center pt-20"><h1 className="text-2xl">404 - Página no encontrada</h1></div>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
