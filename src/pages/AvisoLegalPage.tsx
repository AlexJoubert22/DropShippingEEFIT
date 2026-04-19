import React from 'react';
import { LegalLayout } from './LegalLayout';

export const AvisoLegalPage = () => {
  return (
    <LegalLayout title="Aviso Legal">
      <h2>Titular</h2>
      <p>
        Esta página web es titularidad de [RAZÓN SOCIAL], con CIF [CIF], domicilio en [DIRECCIÓN], Alboraia, València (España), inscrita en el Registro Mercantil de Valencia. Email de contacto: legal@vitalylab.com
      </p>

      <h2>Objeto</h2>
      <p>
        Las presentes condiciones regulan el uso del sitio web vitalylab.com (en adelante, "el Sitio"), propiedad de la entidad indicada. El uso del Sitio atribuye al visitante la condición de Usuario e implica la aceptación de estas condiciones en su totalidad.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El Usuario se compromete a utilizar el Sitio y sus contenidos conforme a la legislación vigente, buenas costumbres y buena fe. Queda prohibido el uso del Sitio con fines ilícitos, lesivos, o que causen perjuicio al titular o a terceros.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Todos los contenidos del Sitio (textos, fotografías, gráficos, diseños, código) son propiedad del titular o de terceros que han autorizado su uso. Cualquier reproducción, distribución o modificación sin autorización expresa está prohibida.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        El titular no se responsabiliza de daños derivados de fallos técnicos ajenos, contenidos de terceros enlazados, ni del uso indebido del Sitio. Se reserva el derecho a modificar estos términos en cualquier momento.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los tribunales de Valencia, salvo que la normativa aplicable imponga otro fuero.
      </p>
    </LegalLayout>
  );
};
