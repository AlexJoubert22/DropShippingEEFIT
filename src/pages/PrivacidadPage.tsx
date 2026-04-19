import React from 'react';
import { LegalLayout } from './LegalLayout';

export const PrivacidadPage = () => {
  return (
    <LegalLayout title="Política de Privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>
        [RAZÓN SOCIAL], con CIF [CIF], domicilio en [DIRECCIÓN]. Delegado de Protección de Datos: dpd@vitalylab.com
      </p>

      <h2>Datos que recopilamos</h2>
      <p>
        Recopilamos datos personales cuando te registras, compras, te suscribes a nuestra newsletter o contactas con soporte. Estos incluyen: nombre y apellidos, email, dirección postal de envío, teléfono, datos de facturación, historial de compras e interacciones con la web.
      </p>

      <h2>Finalidad del tratamiento</h2>
      <p>
        Tratamos tus datos para: (1) procesar pedidos y facturación, (2) atención al cliente y soporte, (3) envío de comunicaciones comerciales si has dado consentimiento, (4) mejora del Sitio mediante análisis agregados, (5) cumplimiento de obligaciones legales y fiscales.
      </p>

      <h2>Base legal</h2>
      <p>
        La base jurídica del tratamiento es la ejecución del contrato de compraventa, el cumplimiento de obligaciones legales, y tu consentimiento expreso para comunicaciones comerciales.
      </p>

      <h2>Conservación</h2>
      <p>
        Conservamos tus datos durante la relación contractual y los plazos legalmente exigibles tras su finalización (hasta 10 años para datos fiscales). Los datos de marketing se conservan hasta que revocas el consentimiento.
      </p>

      <h2>Destinatarios</h2>
      <p>
        Compartimos datos estrictamente necesarios con: proveedor logístico (para envíos), pasarela de pago (Stripe Payments Europe Ltd.), proveedor de email marketing, y administración pública cuando sea legalmente requerido. Ningún dato se transfiere fuera del Espacio Económico Europeo sin garantías adecuadas.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Tienes derecho a acceder, rectificar, suprimir, limitar, oponerte al tratamiento y portar tus datos. Puedes ejercerlos escribiendo a dpd@vitalylab.com adjuntando copia de DNI. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).
      </p>

      <h2>Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos: cifrado TLS, control de acceso, copias de seguridad y auditorías periódicas.
      </p>
    </LegalLayout>
  );
};
