export interface Faq {
  id: number;
  category: string;
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { id: 1, category: 'Envíos', q: '¿Cuánto tarda en llegar mi pedido?', a: 'En España peninsular, 24-48 horas laborables. Baleares 3-4 días. Canarias, Ceuta y Melilla 5-7 días. Europa 4-6 días. Recibirás número de seguimiento en cuanto salga de nuestro almacén en Alboraia, Valencia.' },
  { id: 2, category: 'Envíos', q: '¿El envío es gratis?', a: 'Sí, envío gratuito en toda España peninsular y Baleares. Para Canarias, Ceuta, Melilla y Europa, el coste se calcula en el checkout.' },
  { id: 3, category: 'Envíos', q: '¿Puedo cambiar la dirección de envío después de comprar?', a: 'Si el pedido no ha salido de almacén, sí. Escríbenos a soporte en menos de 12 horas tras la compra.' },
  { id: 4, category: 'Devoluciones', q: '¿Cuántos días tengo para devolver?', a: 'Sesenta días desde la recepción. Sin preguntas, sin letra pequeña. Si el producto no es para ti, lo recogemos y reembolsamos el 100%.' },
  { id: 5, category: 'Devoluciones', q: '¿Quién paga la recogida en una devolución?', a: 'Nosotros. La recogida a domicilio es gratuita dentro de España peninsular.' },
  { id: 6, category: 'Devoluciones', q: '¿Y si el dispositivo llega defectuoso?', a: 'Envío de reemplazo en 24h y recogida del defectuoso sin coste. Si prefieres reembolso, también.' },
  { id: 7, category: 'Uso', q: '¿Cuántos minutos al día debo usarlo?', a: 'Depende del dispositivo. La sesión recomendada viene en la ficha técnica de cada producto — típicamente entre 9 y 15 minutos. Más tiempo no mejora resultados, solo satura la respuesta celular.' },
  { id: 8, category: 'Uso', q: '¿Cuándo empezaré a notar resultados?', a: 'En piel y cabello, entre 4 y 12 semanas de uso consistente. La terapia de infrarrojo lejano trabaja a nivel celular: los cambios son acumulativos, no instantáneos.' },
  { id: 9, category: 'Uso', q: '¿Puedo usarlo embarazada o dando el pecho?', a: 'No hay contraindicación documentada, pero recomendamos consultar con tu médico antes de empezar cualquier terapia durante el embarazo o lactancia.' },
  { id: 10, category: 'Uso', q: '¿Puedo usarlo si tomo medicación?', a: 'Algunos medicamentos son fotosensibilizantes (ciertos antibióticos, retinoides, antiinflamatorios). Consulta con tu médico si estás en tratamiento.' },
  { id: 11, category: 'Uso', q: '¿Puedo combinarlo con mi rutina de skincare / minoxidil / otros tratamientos?', a: 'Sí. El infrarrojo lejano y los LEDs son complementarios a la mayoría de tratamientos dermatológicos y capilares. De hecho, muchos profesionales los recomiendan como sinergia.' },
  { id: 12, category: 'Garantía', q: '¿Qué cubre la garantía de 24 meses?', a: 'Defectos de fabricación, fallos de los diodos, problemas eléctricos y desgaste prematuro en uso normal. No cubre daños por uso indebido, caídas o inmersión en agua.' },
  { id: 13, category: 'Garantía', q: '¿Cómo activo la garantía?', a: 'Se activa automáticamente con tu compra. Guarda tu email de confirmación — es tu comprobante.' },
  { id: 14, category: 'Pagos', q: '¿Qué métodos de pago aceptáis?', a: 'Tarjeta (Visa, Mastercard, Amex), Apple Pay, Google Pay, Bizum, PayPal, y pago a plazos sin intereses con Klarna a partir de 100€.' },
  { id: 15, category: 'Pagos', q: '¿La web es segura para pagar?', a: 'Sí. Usamos Stripe como procesador, con encriptación TLS y certificación PCI DSS nivel 1. Nunca almacenamos datos de tu tarjeta.' },
  { id: 16, category: 'Técnica', q: '¿Qué longitudes de onda usa Vitaly?', a: 'Espectro de Infrarrojo Lejano (FIR) centrado en la ventana de 4-14 micras, combinado con LEDs cromáticos específicos según dispositivo. Son las frecuencias físicas de resonancia del agua celular.' },
  { id: 17, category: 'Técnica', q: '¿Cuál es la diferencia entre LEDs y FIR?', a: 'Los LEDs trabajan en capas tisulares específicas mediante fotones de longitud de onda precisa, mientras que el FIR penetra en profundidad provocando una suave oscilación y resonancia del agua celular e intersticial.' },
  { id: 18, category: 'Técnica', q: '¿Es lo mismo que el láser?', a: 'No. El láser concentra la luz en un punto y requiere indicación médica. La terapia FIR genera una envolvente térmica suave y segura sobre un área amplia — sin dolor, y compatible con uso doméstico diario.' },
  { id: 19, category: 'Técnica', q: '¿Emite radiación UV?', a: 'No. Las longitudes de onda de Vitaly están en el espectro rojo e infrarrojo cercano, fuera del UV. No provoca daño solar ni fotoenvejecimiento.' },
  { id: 20, category: 'Técnica', q: '¿Puedo usarlo si tengo implantes, marcapasos o prótesis?', a: 'La luz roja no interfiere con dispositivos médicos implantados. Aún así, si tienes un marcapasos o similar, consulta con tu cardiólogo antes de empezar.' }
];
