export type Product = {
  id: string;
  slug: string;
  number: string;
  category: string;
  name: string;
  originalName: string;
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
    originalName: 'eefit Energy Therapy Face Mask',
    tagline: 'Máscara LED. Diez minutos, rutina completa.',
    description: 'La máscara facial oficial de eefit combina tres longitudes de onda visibles (630nm rojo, 590nm ámbar, 460nm azul) con emisión FIR de fondo. Cada color trabaja una capa distinta de la piel. Diez minutos al día. Sin cremas milagrosas, sin promesas vacías. La investigación publicada por el equipo de I+D de eefit hace el trabajo silencioso.',
    price: 349,
    currency: 'EUR',
    orbColors: ['#FF6B4A', '#FFB4A8', '#FFE8D6'],
    image: null,
    specs: {
      wavelengths: ['FIR', '630nm rojo', '590nm ámbar', '460nm azul'],
      diodes: 150,
      sessionMinutes: 10,
      weightGrams: 380,
      batteryMinutes: 120,
      certifications: ['CE', 'FDA Class II'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Estimula colágeno en capas profundas', description: 'La luz roja de 630nm penetra en la dermis y activa los fibroblastos. En ocho semanas notas menos arrugas finas y piel más densa.' },
      { title: 'Calma rojeces y piel reactiva', description: 'La luz ámbar de 590nm reduce inflamación superficial. Útil si tienes rosácea leve o tendencia a rojeces persistentes.' },
      { title: 'Cierra poros y mejora tono', description: 'El azul 460nm actúa sobre la oleosidad y pequeñas imperfecciones. Piel más uniforme sin productos agresivos.' }
    ],
    useCases: ['antiedad', 'marcas', 'post-tratamiento'],
    targetArea: 'facial',
    bestFor: ['arrugas finas', 'falta de luminosidad', 'inflamación'],
    recommendedFrequency: '3 a 5 sesiones por semana',
    faq: [
      { q: '¿Es seguro para piel sensible y rosácea?', a: 'Sí. La terapia de infrarrojo lejano no emite calor dañino ni rayos UV. De hecho, su principal beneficio es reducir inflamación celular.' },
      { q: '¿Cuándo empezaré a notar resultados?', a: 'Sientes la piel más relajada en la primera sesión. A las 4-6 semanas de uso constante ves mejoras reales en textura.' },
      { q: '¿Puedo usar mi rutina de skincare antes de la máscara?', a: 'Úsala sobre la piel limpia y seca. Así aseguras máxima penetración térmica. Aplica tus serums después para potenciar su absorción.' }
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
    originalName: 'eefit Energy Smart Cap',
    tagline: 'Gorra FIR. Pelo más fuerte. Sin fármacos.',
    description: 'La gorra de eefit combina FIR con LEDs rojos de 660nm en un array circular de 120 diodos distribuidos sobre todo el cuero cabelludo. Sin minoxidil, sin finasterida. Quince minutos al día mientras desayunas. Los estudios muestran mejoras visibles entre las semanas 12 y 16 de uso constante.',
    price: 289,
    currency: 'EUR',
    orbColors: ['#8B7FFF', '#D4CFFF', '#F2EEFF'],
    image: null,
    specs: {
      wavelengths: ['FIR', '660nm rojo'],
      diodes: 120,
      sessionMinutes: 15,
      weightGrams: 210,
      batteryMinutes: 150,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Más densidad capilar visible', description: 'Los LEDs rojos activan los folículos en fase de crecimiento. La mayoría de usuarios nota cambios hacia la semana 12 con uso diario.' },
      { title: 'Útil tras estrés o parto', description: 'Acelera la recuperación capilar en caídas por cambios hormonales o momentos de estrés fuerte. El FIR mejora el riego sanguíneo local.' },
      { title: 'Reduce inflamación del cuero cabelludo', description: 'Un cuero cabelludo menos inflamado produce cabello más sano. El FIR calma el microambiente folicular de forma no agresiva.' }
    ],
    useCases: ['caída estacional', 'pérdida de volumen', 'post-parto'],
    targetArea: 'cuero cabelludo',
    bestFor: ['pelo fino', 'caída', 'pérdida de densidad'],
    recommendedFrequency: '15 minutos diarios',
    faq: [
      { q: '¿Se usa con el pelo seco o mojado?', a: 'Úsala con el cabello 100% seco. El agua actúa como barrera y refracta la luz LED disminuyendo su penetración celular.' },
      { q: '¿Funciona para alopecia genética?', a: 'Revive folículos debilitados, pero no resucita folículos muertos. Para alopecia androgénica diagnosticada recomendamos nuestro casco médico Vitaly Halo.' },
      { q: '¿Es pesado o incómodo?', a: 'Pesa solo 210 gramos. Llévala bajo tu gorra favorita. Funciona con batería interna, muévete por casa libremente.' }
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
    originalName: 'eefit Luminous Energy Helmet',
    tagline: 'Casco capilar clínico. Alopecia androgénica.',
    description: 'El casco premium de eefit integra 272 LEDs de 660nm y 850nm para tratar la alopecia androgénica desde casa. Es el dispositivo más potente del catálogo: irradiancia de grado médico, certificación CE, diseñado para usos prolongados. Alternativa no hormonal a los tratamientos convencionales.',
    price: 599,
    currency: 'EUR',
    orbColors: ['#FFB347', '#FF8C42', '#FFE0B2'],
    image: null,
    specs: {
      wavelengths: ['FIR', '660nm rojo', '850nm infrarrojo cercano'],
      diodes: 272,
      sessionMinutes: 8,
      weightGrams: 450,
      certifications: ['CE', 'FDA Clearance'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Mantiene tus folículos activos más tiempo', description: 'La luz roja prolonga la fase de crecimiento del pelo y retrasa la miniaturización del folículo, uno de los marcadores de la alopecia androgénica.' },
      { title: 'Riego sanguíneo mejorado en zonas críticas', description: 'La combinación de 660nm y 850nm llega a capas profundas del cuero cabelludo. Aumenta la llegada de oxígeno y nutrientes en zonas con poca vascularización.' },
      { title: 'Alternativa sin efectos hormonales', description: 'Muchos usuarios buscan opciones sin los efectos secundarios de tratamientos orales. La fotoestimulación actúa localmente, sin interferir con tu sistema hormonal.' }
    ],
    useCases: ['alopecia androgénica', 'retroceso capilar', 'pérdida severa'],
    targetArea: 'cuero cabelludo',
    bestFor: ['caída severa', 'miniaturización del cabello'],
    recommendedFrequency: '3 sesiones semanales de 8 min',
    faq: [
      { q: '¿Qué diferencia hay con Vitaly Cap?', a: 'Halo lleva el triple de potencia y diodos infrarrojos profundos (850nm). Orientado a alopecia severa y usuarios clínicos.' },
      { q: '¿Requiere estar enchufado?', a: 'Se usa con batería externa portátil (incluida) conectada por cable. Ofrece autonomía para ocho tratamientos enteros sin recarga.' },
      { q: '¿Puedo combinarlo con Minoxidil?', a: 'Sí. El FIR produce vasodilatación profunda. Al aplicarlo antes, la absorción percutánea del tratamiento topico es muy superior.' }
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
    originalName: 'eefit Energy Support Room Shoes',
    tagline: 'Zapatillas FIR. Pies descansados. Todo el día.',
    description: 'Las zapatillas interiores de eefit integran emisores cerámicos de infrarrojo lejano en la plantilla. Las llevas puestas mientras trabajas, lees o descansas. El calor profundo FIR mejora la circulación de los pies y reduce la sensación de cansancio. Veinte minutos al día transforman cómo terminas la jornada.',
    price: 149,
    currency: 'EUR',
    orbColors: ['#5EEAD4', '#A7F3D0', '#ECFDF5'],
    image: null,
    specs: {
      wavelengths: ['FIR'],
      diodes: 80,
      sessionMinutes: 20,
      weightGrams: 300,
      batteryMinutes: 60,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Adiós a pies cansados por la noche', description: 'El FIR aumenta el riego sanguíneo periférico en las extremidades inferiores. Notas menos pesadez después de ocho horas de pie.' },
      { title: 'Calor profundo sin electricidad', description: 'La cerámica funcional absorbe el calor que ya emites y lo devuelve como radiación terapéutica. No necesitan enchufe, no se calientan de más.' },
      { title: 'Ideal en invierno y en trabajos de pie', description: 'Particularmente útil si tienes tendencia a manos y pies fríos, o si pasas muchas horas en posturas estáticas.' }
    ],
    useCases: ['post-entreno', 'pie cansado', 'sedentarismo'],
    targetArea: 'plantar',
    bestFor: ['tensión en pies', 'deportistas', 'trabajo de pie'],
    recommendedFrequency: '20 min / 3 veces por semana',
    faq: [
      { q: '¿Puedo caminar por toda la casa con ellas?', a: 'No las uses para fregar. Son zapatillas de recuperación activa pasiva: póntelas sentado al trabajar o tirado en tu sofá.' },
      { q: '¿El infrarrojo da excesivo calor?', a: 'Nunca quema. Sientes una envoltura térmica progresiva, profunda y cómoda. Trabajan el riego sanguíneo, no tuestan tu piel superficial.' },
      { q: '¿Y con las tallas cómo hacemos?', a: 'Es una zapatilla de contorno envolvente suave ("onesize fits all"). Abarcan de la talla 38 a la 45 firmemente.' }
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
    originalName: 'eefit Chi Vitaliser 2',
    tagline: 'Panel de sobremesa. Nueve minutos. Cuerpo completo.',
    description: 'El panel de sobremesa de eefit emite a cuatro longitudes de onda simultáneas (630, 660, 830, 850nm) a través de 200 LEDs de alta irradiancia. Es el dispositivo más versátil del catálogo: rostro, cuello, articulaciones, musculatura. Nueve minutos de sesión, calibrados para no pasarse de dosis.',
    price: 459,
    currency: 'EUR',
    orbColors: ['#FF6FD8', '#FFB8E6', '#FFE4F4'],
    image: null,
    specs: {
      wavelengths: ['FIR', 'campo electromagnético suave'],
      diodes: 200,
      sessionMinutes: 9,
      weightGrams: 2800,
      certifications: ['CE', 'FCC', 'Irradiance Class III'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Sirve para casi todo', description: 'Trabaja arrugas faciales, dolor articular, recuperación muscular post-entreno, calidad de sueño. Un solo dispositivo, cuatro longitudes de onda, múltiples aplicaciones.' },
      { title: 'Recuperación muscular más rápida', description: 'Estudios en deportistas muestran reducción del daño muscular y aceleración de recuperación entre uno y tres días cuando se aplica post-entreno.' },
      { title: 'Nueve minutos, dosis calibrada', description: 'No es más tiempo, más efecto. La sesión de nueve minutos entrega exactamente la dosis óptima. Pasarse puede revertir el efecto.' }
    ],
    useCases: ['biohacking matutino', 'recuperación deportiva', 'sueño'],
    targetArea: 'cuerpo completo',
    bestFor: ['falta de energía', 'dolor lumbar', 'jetlag'],
    recommendedFrequency: '1 sesión diaria de 9 minutos',
    faq: [
      { q: '¿Qué distancia de uso recomienda el estudio?', a: 'Pon tu zona muscular afectada a 15 cm. Para biohacking metabólico o higiene del sueño, tenlo enfrente en mesa a 50cm.' },
      { q: '¿Daña mis ojos este brillo artificial?', a: 'No requiere láser médico, no daña córnea. Pero trae unas gafas opacas certificadas que debes ponerte si irradiación es frente a tu cara.' },
      { q: '¿Pesa mucho para guardarlo?', a: 'Pesa tres kilos, pero el bracket metálico la hace muy estable en vertical o colgando. Es un electrodoméstico robusto y pulido.' }
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
    originalName: 'eefit Lite Premium',
    tagline: 'LED de mano. Terapia puntual. Donde la necesites.',
    description: 'El dispositivo portátil de eefit concentra la tecnología FIR y LED rojo en un formato tamaño móvil que cabe en el cajón de la mesilla. Para aplicar sobre zonas concretas: una cicatriz, un dolor localizado, una mancha. Tres minutos por zona. Es el complemento perfecto al dispositivo principal del ecosistema.',
    price: 189,
    currency: 'EUR',
    orbColors: ['#4A9FFF', '#7DD3FC', '#DBEAFE'],
    image: null,
    specs: {
      wavelengths: ['FIR', 'LED rojo puntual'],
      diodes: 3,
      sessionMinutes: 3,
      weightGrams: 150,
      batteryMinutes: 180,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Terapia focalizada sobre un punto', description: 'Ideal para aplicar sobre zonas pequeñas donde necesitas estímulo concentrado: cicatrices, articulaciones menores, manchas.' },
      { title: 'Fácil de llevar contigo', description: 'Tamaño bolsillo, batería 180 minutos, USB-C. Entra en la maleta del deporte, del trabajo, del viaje.' },
      { title: 'Complemento del Vitaly Core', description: 'Muchos usuarios usan el Core para sesiones generales y el Lite para retoques puntuales. Los dos se entienden perfectamente.' }
    ],
    useCases: ['labios', 'frente', 'codo y muñeca', 'viajes'],
    targetArea: 'zonas focales',
    bestFor: ['dolor articular menor', 'granos ocasionales', 'viajes'],
    recommendedFrequency: '1-3 minutos directamente sobre el foco',
    faq: [
      { q: '¿Tiene tanta luz y potencia curativa que el Lite Core?', a: 'Al apoyarlo directo en piel rozando 0 cm, sus limitados fotones penetran sin ruido. Logran intensidades altísimas muy seguras puntualmente.' },
      { q: '¿Cuanto aguanta y cómo es su conector?', a: 'Incorpora USB-C y batería Li-Ion 18650 potente pero fácilmente reemplazable en 5 años si fallece de desgaste. Eco-lógico.' },
      { q: '¿Lo recomiendan como tratamiento principal anti-edad facial?', a: 'Para full-face arrugas necesitas Vitaly Face. El Lite repasa arrugas de contorno labial persistentes. Son totalmente complementarios.' }
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
    originalName: 'eefit Energy Power Hair Brush',
    tagline: 'Cepillo FIR. Rutina capilar potenciada.',
    description: 'El cepillo de eefit incorpora cerámica emisora de infrarrojo lejano y liberación de iones negativos en las púas. No hace peinados milagrosos. Hace que una cosa que ya haces cada mañana sume beneficio capilar real. Cinco minutos de cepillado se convierten en cinco minutos de terapia pasiva.',
    price: 129,
    currency: 'EUR',
    orbColors: ['#FDB022', '#FEF3C7', '#FFFBEB'],
    image: null,
    specs: {
      wavelengths: ['FIR', 'iones negativos'],
      diodes: 18,
      sessionMinutes: 5,
      weightGrams: 195,
      batteryMinutes: 90,
      certifications: ['CE'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Brillo y frizz controlado', description: 'Los iones negativos cierran la cutícula del pelo. Menos frizz, más brillo natural, sin productos térmicos agresivos.' },
      { title: 'Rutina que ya tienes, ahora con más utilidad', description: 'Si ya te cepillas el pelo cada mañana, ahora sumas estímulo FIR al cuero cabelludo sin añadir un paso más a tu día.' },
      { title: 'Masaje capilar mejorado', description: 'El diseño de las púas distribuye la presión y estimula la microcirculación del cuero cabelludo. Relajante y útil a la vez.' }
    ],
    useCases: ['rutina de belleza diaria', 'estrés capilar'],
    targetArea: 'cuero cabelludo',
    bestFor: ['cabello sin brillo', 'mantenimiento general'],
    recommendedFrequency: 'Diario, 5 pasadas lentas por la cabeza',
    faq: [
      { q: '¿Tirará pelos este cacharro por dentro?', a: 'Las cerdas son blanditas pero recias, en terminación esférica pulida. No arranca cabello vivo ni lo encalla dolorosamente.' },
      { q: '¿Cómo mantengo limpio estos diodos y ranuras?', a: 'El cojín principal se desmonta limpiamente rápido pulsando atrás. Se lava. Ojo: nunca sumergir el mango entero (electrónica).' },
      { q: '¿Sustituye la potencia del Halo si pierdo cabello ya grueso?', a: 'Halo y Cap son "Heavy Duty". Este cepillo mantiene el riego al día. Mantenedor orgánico. Para calvicies, vete al láser o halo siempre.' }
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
    originalName: 'eefit Energy Neck Comfort',
    tagline: 'Collar FIR. Tensión cervical. Quince minutos.',
    description: 'El collar anatómico de eefit aplica infrarrojo lejano directamente sobre la zona cervical, donde más tensión acumulas si trabajas con pantallas. Forma ergonómica en silicona médica, sesiones de quince minutos, resultado percibido inmediato. Es el producto con más reviews positivas del catálogo para quien tiene tensión crónica de cuello.',
    price: 179,
    currency: 'EUR',
    orbColors: ['#A78BFA', '#E9D5FF', '#F3EBFF'],
    image: null,
    specs: {
      wavelengths: ['FIR'],
      diodes: 60,
      sessionMinutes: 15,
      weightGrams: 180,
      batteryMinutes: 180,
      certifications: ['CE', 'RoHS'],
      warranty: '24 meses'
    },
    benefits: [
      { title: 'Alivio rápido de tensión cervical', description: 'El FIR penetra en la musculatura profunda del cuello. Muchos usuarios reportan alivio desde la primera sesión.' },
      { title: 'Forma ergonómica, no se mueve', description: 'Diseñado por fisioterapeutas, se ajusta a la curvatura cervical sin presionar carótida ni tráquea.' },
      { title: 'Ideal si trabajas con pantalla', description: 'Diez horas al día de portátil generan tensión acumulada. Quince minutos al final del día reducen dolor cervical y dolores de cabeza tensionales.' }
    ],
    useCases: ['cuello de texto', 'estrés de oficina', 'tensión trapecios'],
    targetArea: 'cervicales y trapecio alto',
    bestFor: ['dolor de cuello cervical', 'rigidez', 'migrañas tensionales'],
    recommendedFrequency: 'Sesiones de 15 min / 3-4 veces semanales',
    faq: [
      { q: '¿Trae martillos mecánicos clásicos para aporrear los cuellos?', a: 'Cero partes móviles vibratorias. Tecnología infrarroja calmada, silenciosa térmica. Destensa internamente músculos sin producir magullamiento externo.' },
      { q: '¿Puede dormir uno tranquilamente usándolo reclinado?', a: 'Hemos ahuecado el soporte occípito-parietal precisamente ex profeso. Recuéstate atrás mirando el techo, o te quedas profundamente dormido.' },
      { q: '¿Quema el dispositivo Neck la nuca como las mantas?', a: 'Imposible fisiológicamente. Logra calor interno suave dilatorio. Se autoapaga por hardware tras sus minutos recetados de timer.' }
    ],
    relatedProductIds: ['vitaly-step', 'vitaly-core', 'vitaly-lite'],
    quizTags: { area: ['neck', 'muscle'], time: 'medium', mobility: 'static' }
  }
];
