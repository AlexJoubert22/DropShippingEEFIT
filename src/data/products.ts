export type Product = {
  id: string;
  slug: string;
  number: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  orbColors: string[];
  image: string | null;
  specs: {
    wavelengths: string[];
    diodes: number;
    sessionMinutes: number;
    weightGrams: number;
    batteryMinutes?: number;
    certifications: string[];
    warranty: string;
  };
  benefits: { title: string; description: string }[];
  useCases: string[];
  targetArea: string;
  bestFor: string[];
  recommendedFrequency: string;
  faq: { q: string; a: string }[];
  relatedProductIds: string[];
  quizTags: {
    area: string[];
    time: string;
    mobility: string;
  };
};

export const products: Product[] = [
  {
    id: 'vitaly-face',
    slug: 'vitaly-face',
    number: '01',
    category: 'Rostro',
    name: 'Vitaly Face',
    tagline: 'Máscara LED clínica. Colágeno diario.',
    description: 'Nuestra máscara más avanzada combina 150 diodos de grado médico (rojo e infrarrojo cercano) para estimular la producción natural de colágeno a nivel celular. Diseñada para un uso diario de 10 minutos desde la comodidad de casa.',
    price: 349,
    currency: 'EUR',
    orbColors: ['#FF6B4A', '#FFB4A8', '#FFE8D6'],
    image: null,
    specs: {
      wavelengths: ['660nm', '850nm'],
      diodes: 150,
      sessionMinutes: 10,
      weightGrams: 380,
      batteryMinutes: 120,
      certifications: ['CE', 'FDA Class II'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Estimula producción de colágeno', description: 'La luz penetra hasta la dermis para activar los fibroblastos, reduciendo visiblemente las arrugas finas y restaurando el volumen facial.' },
      { title: 'Reduce inflamación y enrojecimiento', description: 'Calma la piel reactiva desde la primera sesión con frecuencias clínicamente probadas contra la rosácea.' },
      { title: 'Mejora textura y tono', description: 'Cierra poros dilatados e ilumina la tez general, logrando ese efecto "glow" orgánico sin cosméticos agresivos.' }
    ],
    useCases: ['antiedad', 'marcas', 'post-tratamiento'],
    targetArea: 'facial',
    bestFor: ['arrugas finas', 'falta de luminosidad', 'inflamación'],
    recommendedFrequency: '3 a 5 sesiones por semana',
    faq: [
      { q: '¿Es seguro para piel sensible y rosácea?', a: 'Sí. La fotobiomodulación no emite calor ni rayos UV. De hecho, su principal beneficio es la fuerte reducción de la inflamación, lo que ayuda a calmar pieles reactivas y rosácea.' },
      { q: '¿Cuándo empezaré a notar resultados?', a: 'El aumento de ATP (energía celular) ocurre en la primera sesión, notando la piel más descansada. A partir de las 4-6 semanas de uso constante notarás mejoras en la textura y jugosidad.' },
      { q: '¿Puedo usar mi rutina de skincare antes de la máscara?', a: 'Recomendamos usarla sobre la piel limpia y seca para máxima penetración de luz. Los serums (idealmente ácido hialurónico) se aplican justo después para potenciar su absorción.' }
    ],
    relatedProductIds: ['vitaly-core', 'vitaly-lite', 'vitaly-cap'],
    quizTags: { area: ['face'], time: 'medium', mobility: 'static' }
  },
  {
    id: 'vitaly-cap',
    slug: 'vitaly-cap',
    number: '02',
    category: 'Cabello',
    name: 'Vitaly Cap',
    tagline: '120 diodos. Densidad visible en 12 semanas.',
    description: 'La ciencia de la fotobiomodulación llevada al folículo. Vitaly Cap utiliza luz roja específica de 650nm para aumentar el riego sanguíneo en el cuero cabelludo, prolongar la fase anágena y fomentar una densidad capilar óptima.',
    price: 289,
    currency: 'EUR',
    orbColors: ['#8B7FFF', '#D4CFFF', '#F2EEFF'],
    image: null,
    specs: {
      wavelengths: ['660nm', '850nm'],
      diodes: 120,
      sessionMinutes: 15,
      weightGrams: 210,
      batteryMinutes: 150,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Aumenta el grosor del tallo', description: 'Revitaliza los folículos debilitados aportando energía directa (ATP), lo que produce un cabello notablemente más grueso y resistente.' },
      { title: 'Minimiza la caída temporal', description: 'Ayuda a regular ciclos de muda excesiva (efluvio telógeno) tras periodos de estrés, enfermedades o post-parto.' },
      { title: 'Mejora la salud del cuero cabelludo', description: 'Disminuye la inflamación peri-folicular y reequilibra el microbioma del cuero cabelludo creando un entorno ideal para el crecimiento capilar.' }
    ],
    useCases: ['caída estacional', 'pérdida de volumen', 'post-parto'],
    targetArea: 'cuero cabelludo',
    bestFor: ['pelo fino', 'caída', 'pérdida de densidad'],
    recommendedFrequency: '15 minutos diarios',
    faq: [
      { q: '¿Se usa con el pelo seco o mojado?', a: 'Siempre con el cabello completamente seco, ya que el agua interfiere y refracta la luz. Puedes usarlo a cualquier hora del día.' },
      { q: '¿Funciona para alopecia genética?', a: 'Está diseñado para potenciar folículos vivos y debilitaos. Para alopecia androgénica avanzada recomendamos nuestro modelo clínico Vitaly Halo.' },
      { q: '¿Es pesado o incómodo?', a: 'No, pesa solo 210 gramos, puede llevarse debajo de tu gorra favorita y la batería integrada permite moverte por casa sin cables.' }
    ],
    relatedProductIds: ['vitaly-halo', 'vitaly-brush', 'vitaly-face'],
    quizTags: { area: ['hair'], time: 'medium', mobility: 'static' }
  },
  {
    id: 'vitaly-halo',
    slug: 'vitaly-halo',
    number: '03',
    category: 'Cuero Cabelludo',
    name: 'Vitaly Halo',
    tagline: 'Casco médico. Alopecia androgénica.',
    description: 'Nuestro dispositivo capilar de grado clínico definitivo. Con una mayor concentración de diodos láser y LED (650nm), Vitaly Halo proporciona una cobertura craneal completa para tratar las fases iniciales y medias de la alopecia, promoviendo el despertar folicular.',
    price: 599,
    currency: 'EUR',
    orbColors: ['#FFB347', '#FF8C42', '#FFE0B2'],
    image: null,
    specs: {
      wavelengths: ['660nm', '850nm'],
      diodes: 272,
      sessionMinutes: 8,
      weightGrams: 450,
      certifications: ['CE', 'FDA Clearance'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Prolonga la fase anágena', description: 'Mantiene a los folículos pilosos en su fase productiva durante más tiempo, evitando la miniaturización progresiva.' },
      { title: 'Flujo sanguíneo +25%', description: 'Los diodos láser de 650nm penetran con alta irradiancia, estimulando masivamente la oxigenación en áreas con mala vascularización.' },
      { title: 'Alternativa libre de fármacos', description: 'Tratamiento clínico no invasivo, sin los efectos secundarios hormonales habituales en medicaciones tradicionales.' }
    ],
    useCases: ['alopecia androgénica', 'retroceso capilar', 'pérdida severa'],
    targetArea: 'cuero cabelludo',
    bestFor: ['caída severa', 'miniaturización del cabello'],
    recommendedFrequency: '3 sesiones semanales de 8 min',
    faq: [
      { q: '¿Qué diferencia hay con Vitaly Cap?', a: 'Vitaly Halo incorpora tecnología mixta de diodos láser y LED, con más del doble de fuentes de luz (272 vs 120), cubriendo más área con mayor penetración. Está orientado a tratamientos más clínicos.' },
      { q: '¿Requiere estar enchufado?', a: 'No, cuenta con un battery pack externo potente que conectas mediante un cable trenzado, permitiendo autonomía de hasta 8 tratamientos sin recargar.' },
      { q: '¿Puedo combinarlo con finasteride o minoxidil?', a: 'Sí, la terapia LLLT es un excelente complemento potenciador para los tratamientos tópicos u orales pautados por tu dermatólogo.' }
    ],
    relatedProductIds: ['vitaly-cap', 'vitaly-brush', 'vitaly-core'],
    quizTags: { area: ['hair'], time: 'short', mobility: 'static' }
  },
  {
    id: 'vitaly-step',
    slug: 'vitaly-step',
    number: '04',
    category: 'Pies',
    name: 'Vitaly Step',
    tagline: 'Zapatillas FIR. Circulación en reposo.',
    description: 'La recuperación comienza por la base. Vitaly Step integra paneles de luz roja (660nm) localizados en la planta y un diseño de infrarrojo térmico suave, favoreciendo un efecto relajante, reducción de fatiga plantar y sensación de ligereza tras jornadas intensas.',
    price: 149,
    currency: 'EUR',
    orbColors: ['#5EEAD4', '#A7F3D0', '#ECFDF5'],
    image: null,
    specs: {
      wavelengths: ['850nm'],
      diodes: 80,
      sessionMinutes: 20,
      weightGrams: 300,
      batteryMinutes: 60,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Alivio miofascial plantar', description: 'Ayuda a descomprimir la fascia aportando una suave vasodilatación que limpia metabolitos acumulados durante el día.' },
      { title: 'Sensación de ligereza', description: 'Disminuye la retención de líquidos superficial y esa sensación de "piernas pesadas" gracias al riego mejorado.' },
      { title: 'Termoterapia envolvente', description: 'Su suave calor térmico genera una respuesta del sistema nervioso parasimpático perfecta para desconectar.' }
    ],
    useCases: ['post-entreno', 'pie cansado', 'sedentarismo'],
    targetArea: 'plantar',
    bestFor: ['tensión en pies', 'deportistas', 'trabajo de pie'],
    recommendedFrequency: '20 min / 3 veces por semana',
    faq: [
      { q: '¿Puedo caminar con ellas puestas?', a: 'No están pensadas para caminar activamente, sino para usarlas en reposo: en el sofá viendo tu serie favorita o teletrabajando sentado.' },
      { q: '¿El infrarrojo da mucho calor?', a: 'Es un calor sutil y muy confortable. No quema en absoluto, simplemente notas una vasodilatación relajante y envolvente.' },
      { q: '¿Qué tallas cubren?', a: 'El modelo es "one size fits most", cubriendo desde una talla 38 a una 45 cómodamente, ajustables con su cierre elástico adaptativo.' }
    ],
    relatedProductIds: ['vitaly-neck', 'vitaly-core', 'vitaly-lite'],
    quizTags: { area: ['muscle'], time: 'long', mobility: 'static' }
  },
  {
    id: 'vitaly-core',
    slug: 'vitaly-core',
    number: '05',
    category: 'Núcleo',
    name: 'Vitaly Core',
    tagline: 'Vitalización celular. 9 min al día.',
    description: 'El núcleo central de nuestro ecosistema. Un panel de sobremesa ultra-denso que entrega 660nm y 850nm simultáneamente. Diseñado para optimizar tu ciclo circadiano por la mañana o promover energía ATP focalizada en articulaciones o abdomen.',
    price: 459,
    currency: 'EUR',
    orbColors: ['#FF6FD8', '#FFB8E6', '#FFE4F4'],
    image: null,
    specs: {
      wavelengths: ['630nm', '660nm', '830nm', '850nm'],
      diodes: 200,
      sessionMinutes: 9,
      weightGrams: 2800,
      certifications: ['CE', 'FCC', 'Irradiance Class III'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Regulación circadiana', description: 'Emula el espectro de luz natural matutina, bloqueando la melatonina inerte para activarte naturalmente sin cafeína.' },
      { title: 'Aporte sistémico celular', description: 'Satura grandes grupos musculares con fotones que las mitocondrias convierten en energía pura y utilizable de inmediato.' },
      { title: 'Alivio de dolor profundo', description: 'El infrarrojo de 850nm penetra hasta los cartílagos, reduciendo inflamaciones persistentes en lumbares o rodillas.' }
    ],
    useCases: ['biohacking matutino', 'recuperación deportiva', 'sueño'],
    targetArea: 'cuerpo completo',
    bestFor: ['falta de energía', 'dolor lumbar', 'jetlag'],
    recommendedFrequency: '1 sesión diaria de 9 minutos',
    faq: [
      { q: '¿Qué distancia de uso es la óptima?', a: 'Aconsejamos entre 15 y 30 centímetros de la piel para beneficios musculares/piel, y a unos 40-60 centímetros de distancia indirecta por las mañanas para regular tus ritmos circadianos.' },
      { q: '¿Daña la vista la potencia de los LEDs?', a: 'No, pero para exposiciones frontales directas recomendamos usar las gafas de protección incluidas, especialmente si activas el infrarrojo 850nm invisible.' },
      { q: '¿Ocupa mucho espacio?', a: 'Mide solo 30cm de alto por 20cm de ancho con un soporte trasero estable de acero. Entra perfectamente en un rincón del escritorio, tocador o mesilla.' }
    ],
    relatedProductIds: ['vitaly-face', 'vitaly-step', 'vitaly-neck', 'vitaly-halo'],
    quizTags: { area: ['core', 'muscle'], time: 'short', mobility: 'static' }
  },
  {
    id: 'vitaly-lite',
    slug: 'vitaly-lite',
    number: '06',
    category: 'Portátil',
    name: 'Vitaly Lite',
    tagline: 'LED de mano. Terapia puntual.',
    description: 'El poder de la fotobiomodulación concentrado en un dispositivo de aluminio anodizado que cabe en tu bolso. Trata de forma precisa arrugas de expresión, rojeces ocasionales o dolor puntual en muñecas y codos allí donde vayas.',
    price: 189,
    currency: 'EUR',
    orbColors: ['#4A9FFF', '#7DD3FC', '#DBEAFE'],
    image: null,
    specs: {
      wavelengths: ['660nm', '850nm'],
      diodes: 3,
      sessionMinutes: 3,
      weightGrams: 150,
      batteryMinutes: 180,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Irradiancia concentrada', description: 'Al aplicarse en contacto directo cutáneo, su poder lumínico erradica inflamaciones puntuales más rápido que superficies lejanas.' },
      { title: 'Portabilidad absoluta', description: 'Llévalo en tu neceser y mantén tu rutina de wellness tecnológico aunque estés durmiendo fuera de casa en viajes de trabajo.' },
      { title: 'Recuperación SOS', description: 'Ideal para ese asomo de grano ocasional, picadura molesta o ligera sobrecarga de túnel carpiano tras usar el portátil.' }
    ],
    useCases: ['labios', 'frente', 'codo y muñeca', 'viajes'],
    targetArea: 'zonas focales',
    bestFor: ['dolor articular menor', 'granos ocasionales', 'viajes'],
    recommendedFrequency: '3 minutos directamente sobre el foco',
    faq: [
      { q: '¿Cuánta potencia tiene frente a un panel?', a: 'Muchísima. Al tocar directamente la piel, los picos de irradiancia superan los 150mW/cm2, haciendo que sesiones de solo 3 minutos sean suficientes.' },
      { q: '¿Cómo se carga?', a: 'Se recarga con cualquier cable USB-C estándar, e incluye una batería de alto rendimiento (18650) fácilmente reemplazable y un puerto tapado elegante.' },
      { q: '¿Sirve para el acné?', a: 'Ayuda significativamente acelerando el proceso autocurativo de una mancha roja y calmando la inflamación profunda de forma puntual e indolora.' }
    ],
    relatedProductIds: ['vitaly-face', 'vitaly-neck', 'vitaly-core'],
    quizTags: { area: ['face', 'muscle'], time: 'short', mobility: 'portable' }
  },
  {
    id: 'vitaly-brush',
    slug: 'vitaly-brush',
    number: '07',
    category: 'Cabello',
    name: 'Vitaly Brush',
    tagline: 'Cepillo fotobiomodulación. Cada pasada trata.',
    description: 'Fusionamos un gesto cotidiano con ciencia avanzada. Vitaly Brush emite luz roja directamente a través de sus cerdas siliconadas suaves, aportando estimulación folicular y masaje micro-oscilatorio mientras peinas tu melena en menos de 5 minutos.',
    price: 129,
    currency: 'EUR',
    orbColors: ['#FDB022', '#FEF3C7', '#FFFBEB'],
    image: null,
    specs: {
      wavelengths: ['660nm'],
      diodes: 18,
      sessionMinutes: 5,
      weightGrams: 195,
      batteryMinutes: 90,
      certifications: ['CE'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Optimiza la textura capilar', description: 'El paso regular oxigena el cuero cabelludo, ayudando a que el sebo natural recubra el pelo y dejándolo brillante sin productos químicos.' },
      { title: 'Cero minutos extra a tu rutina', description: 'Conviértelo en tu peine habitual y estarás recibiendo fotobiomodulación todos los días sin perder un segundo extra.' },
      { title: 'Microvibraciones relajantes', description: 'Opcionalmente activa su oscilación de alta frecuencia para desatar nudos tensionales en la aponeurosis craneal (estrés acumulado).' }
    ],
    useCases: ['rutina de belleza diaria', 'estrés capilar'],
    targetArea: 'cuero cabelludo',
    bestFor: ['cabello sin brillo', 'mantenimiento general'],
    recommendedFrequency: 'Diario, 5 pasadas lentas por la cabeza',
    faq: [
      { q: '¿Tira del pelo?', a: 'No. Las cerdas son flexibles, redondeadas y diseñadas específicamente para no producir enganches mecánicos, respetando el ciclo de vida de tu melena.' },
      { q: '¿Es lavable?', a: 'El cabezal base donde van insertados los LEDs se puede limpiar con un paño húmedo. No debe sumergirse totalmente bajo el agua.' },
      { q: '¿Sirve si tengo alopecia severa?', a: 'Para ese caso médico, recomendamos Vitaly Halo o Cap como terapias estáticas. Vitaly Brush es un estimulador y mantenedor vitamínico estupendo.' }
    ],
    relatedProductIds: ['vitaly-cap', 'vitaly-halo', 'vitaly-face'],
    quizTags: { area: ['hair'], time: 'short', mobility: 'portable' }
  },
  {
    id: 'vitaly-neck',
    slug: 'vitaly-neck',
    number: '08',
    category: 'Cervical',
    name: 'Vitaly Neck',
    tagline: 'Collar infrarrojo. Tensión cervical.',
    description: 'El antídoto para el síndrome del escritorio. Un collar de silicona médica ultra flexible con luz infrarroja profunda y luz roja que libera de forma natural la constricción en trapecios y cervicales de forma pasiva mientras lees o trabajas.',
    price: 179,
    currency: 'EUR',
    orbColors: ['#A78BFA', '#E9D5FF', '#F3EBFF'],
    image: null,
    specs: {
      wavelengths: ['850nm'],
      diodes: 60,
      sessionMinutes: 15,
      weightGrams: 180,
      batteryMinutes: 180,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Relajación trapecial sostenida', description: 'Sus diodos infrarrojos se focalizan en el vientre muscular del trapecio, disolviendo nudos por exceso de uso del ratón y teclado.' },
      { title: 'Aporte térmico calmante', description: 'Los fotones aceleran el riego local e imitan el efecto reconfortante de un paño caliente, de forma ininterrumpida.' },
      { title: 'Compensa la postura cifótica', description: 'Ayuda a oxigenar la zona posterior del cuello que se acorta e inflama diariamente por mirar pantallas pequeñas (cuello de texto).' }
    ],
    useCases: ['cuello de texto', 'estrés de oficina', 'tensión trapecios'],
    targetArea: 'cervicales y trapecio alto',
    bestFor: ['dolor de cuello cervical', 'rigidez', 'migrañas tensionales'],
    recommendedFrequency: 'Sesiones de 15 min / 3-4 veces semanales',
    faq: [
      { q: '¿Lleva vibración o es solo luz?', a: 'Pura fotobiomodulación clínica con efecto térmico subyacente. No hay motores. Es totalmente silencioso. La relajación muscular ocurre por la respuesta celular.' },
      { q: '¿Se adapta a mi cuello?', a: 'Sí. El núcleo interno moldeable permite abrir o cerrar el diámetro para que descanse sobre la curvatura de tus hombros envolviendo perfectamente la nuca.' },
      { q: '¿Se puede usar tumbado?', a: 'Sí. Es ideal ponérselo en la cama justo antes de dormir. Hemos eliminado botones duros en la zona occipital por esta razón.' }
    ],
    relatedProductIds: ['vitaly-step', 'vitaly-core', 'vitaly-lite'],
    quizTags: { area: ['neck', 'muscle'], time: 'medium', mobility: 'static' }
  }
];
