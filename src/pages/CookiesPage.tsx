import React from 'react';
import { LegalLayout } from './LegalLayout';

export const CookiesPage = () => {
  return (
    <LegalLayout title="Política de Cookies">
      <h2>Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que se almacenan en tu dispositivo al visitar una web. Sirven para recordar tus preferencias, mejorar tu experiencia y recopilar información estadística.
      </p>

      <h2>Cookies que utilizamos</h2>
      
      <h3>Técnicas (imprescindibles, no requieren consentimiento):</h3>
      <ul>
        <li>Sesión de carrito de compra</li>
        <li>Preferencia de idioma</li>
        <li>Autenticación de usuario registrado</li>
      </ul>

      <h3>De análisis (requieren consentimiento):</h3>
      <ul>
        <li>Google Analytics 4 (análisis de tráfico y comportamiento)</li>
        <li>Hotjar (mapas de calor y grabaciones anónimas)</li>
      </ul>

      <h3>De marketing (requieren consentimiento):</h3>
      <ul>
        <li>Meta Pixel (Facebook/Instagram Ads)</li>
        <li>Google Ads Conversion Tracking</li>
      </ul>

      <h2>Cómo gestionarlas</h2>
      <p>
        Puedes aceptar, rechazar o configurar cookies desde nuestro banner al entrar en el Sitio. También puedes modificar tus preferencias en cualquier momento en el enlace "Configurar cookies" del footer. Tu navegador también permite bloquearlas o eliminarlas.
      </p>

      <h2>Vida útil</h2>
      <p>
        Las cookies técnicas se eliminan al cerrar sesión. Las analíticas y de marketing tienen duración variable, entre 30 días y 2 años.
      </p>
    </LegalLayout>
  );
};
