import React from 'react';
import { LegalLayout } from './LegalLayout';

export const TerminosPage = () => {
  return (
    <LegalLayout title="Términos y Condiciones de Venta">
      <h2>Objeto</h2>
      <p>
        Los presentes términos regulan la compraventa de productos Vitaly a través del Sitio, entre [RAZÓN SOCIAL] (en adelante, "el Vendedor") y el comprador consumidor final (en adelante, "el Cliente").
      </p>

      <h2>Productos y precios</h2>
      <p>
        Los productos mostrados incluyen descripción, imágenes y precio con IVA incluido. Los precios se expresan en euros (€). El Vendedor se reserva el derecho a modificar precios en cualquier momento, respetando los precios vigentes al momento de la compra.
      </p>

      <h2>Pedidos</h2>
      <p>
        El pedido se formaliza al aceptar estos términos en el checkout y realizar el pago. Recibirás un email de confirmación con número de pedido. El Vendedor se reserva el derecho a rechazar pedidos por motivos justificados (stock, error de precio, sospecha de fraude).
      </p>

      <h2>Pago</h2>
      <p>
        Aceptamos tarjeta de crédito/débito, Apple Pay, Google Pay, Bizum, PayPal y pago aplazado con Klarna (a partir de 100€). Los pagos se procesan a través de Stripe Payments Europe Ltd., con cifrado TLS y certificación PCI DSS nivel 1.
      </p>

      <h2>Envío</h2>
      <p>
        Envío gratuito en España peninsular y Baleares. Canarias, Ceuta, Melilla y Europa según tarifa mostrada en checkout. Plazo estimado: 24-48h peninsular, 3-7 días resto según destino. El riesgo de pérdida se transmite al Cliente con la entrega.
      </p>

      <h2>Derecho de desistimiento</h2>
      <p>
        El Cliente dispone de 60 días naturales desde la recepción para desistir sin necesidad de justificación (mejoramos los 14 días legales). Para ejercerlo, contacta a soporte@vitalylab.com indicando número de pedido. Los gastos de devolución son asumidos por el Vendedor dentro de España peninsular.
      </p>

      <h2>Garantía</h2>
      <p>
        Garantía legal de 3 años por defectos de conformidad (Ley 1/2007). Garantía comercial adicional de 24 meses sobre la garantía legal, cubriendo defectos de fabricación, fallos de LEDs y problemas eléctricos en uso normal. No cubre daños por uso indebido, caídas o inmersión.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        La responsabilidad del Vendedor se limita al valor del producto adquirido. Los productos Vitaly son dispositivos de bienestar, no sustituyen consejo ni tratamiento médico. Consulta con un profesional sanitario antes de usar si tienes condiciones médicas preexistentes.
      </p>

      <h2>Resolución de conflictos</h2>
      <p>
        Cualquier controversia se resolverá amistosamente en primera instancia. El Cliente puede acudir a la plataforma europea de resolución de litigios en línea: ec.europa.eu/consumers/odr. En caso de no resolución, tribunales de Valencia.
      </p>
    </LegalLayout>
  );
};
