import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import { CartProvider, useCart } from './context/CartContext';
import { CustomCursor } from './components/Shared';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Quiz } from './components/Quiz';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ProductosPage } from './pages/ProductosPage';
import { ComparatorPage } from './pages/ComparatorPage';
import { FaqPage } from './pages/FaqPage';
import { TecnologiaPage } from './pages/TecnologiaPage';
import { CienciaPage } from './pages/CienciaPage';
import { DiarioPage } from './pages/DiarioPage';
import { CookieBanner } from './components/CookieBanner';
import { AvisoLegalPage } from './pages/AvisoLegalPage';
import { PrivacidadPage } from './pages/PrivacidadPage';
import { CookiesPage } from './pages/CookiesPage';
import { TerminosPage } from './pages/TerminosPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage';

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

const QuizMount = () => {
  const { isQuizOpen, setIsQuizOpen } = useCart();
  return <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />;
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
        <QuizMount />
        <Nav />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/producto/:slug" element={<ProductPage />} />
          <Route path="/comparador" element={<ComparatorPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/tecnologia" element={<TecnologiaPage />} />
          <Route path="/ciencia" element={<CienciaPage />} />
          <Route path="/diario" element={<DiarioPage />} />
          <Route path="/legal/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/legal/privacidad" element={<PrivacidadPage />} />
          <Route path="/legal/cookies" element={<CookiesPage />} />
          <Route path="/legal/terminos" element={<TerminosPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/exito" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center pt-20"><h1 className="text-2xl">404 - Página no encontrada</h1></div>} />
        </Routes>
        <Footer />
        <CookieBanner />
      </Router>
    </CartProvider>
  );
}
