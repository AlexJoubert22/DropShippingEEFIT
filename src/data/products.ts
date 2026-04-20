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
    tagline: 'Máscara LED clínica. Colágeno diario.',
    description: 'Máscara facial con LEDs de tres longitudes visibles (630nm rojo, 590nm ámbar, 460nm azul) y emisión FIR. Diez minutos al día. El rojo estimula colágeno en la dermis superficial. El ámbar mejora luminosidad y tono. El azul actúa sobre imperfecciones. El FIR añade efecto circulatorio profundo. No la vendemos como producto médico. La vendemos como cuidado diario con respaldo físico.',
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
      { title: 'Estimula colágeno celular', description: 'La luz penetra en la dermis y activa los fibroblastos. Reduce las arrugas finas y restaura el volumen facial.' },
      { title: 'Reduce inflamación y rojeces', description: 'Calma la piel reactiva desde la primera sesión. Usa frecuencias probadas contra afecciones como la rosácea.' },
      { title: 'Mejora textura visible', description: 'Cierra poros y mejora el brillo general. Consigues un efecto glow sano sin ácidos ni despigmentantes.' }
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
    tagline: '120 diodos. Densidad visible en 12 semanas.',
    description: 'La ciencia del FIR dentro de una gorra. Vitaly Cap utiliza FIR y luz roja a 660nm. Quince minutos al día. Esta combinación aumenta el riego sanguíneo directamente en el folículo. Prolonga la fase de crecimiento natural de tu pelo. Es tu aliado contra la caída estacional y pérdida de volumen.',
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
      { title: 'Aumenta el grosor folicular', description: 'El estímulo celular engrosa el tallo capilar. Notarás tu pelo visualmente más fuerte tras unas doce semanas.' },
      { title: 'Frena la caída temporal', description: 'Cortocircuita el efluvio telógeno. Muy útil para recuperar densidad tres meses después de sufrir estrés fuerte o parto.' },
      { title: 'Calma el cuero cabelludo', description: 'Baja la inflamación alrededor de cada folículo. Un microbioma folicular sano es imprescindible para crear pelo nuevo.' }
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
    tagline: 'Casco médico. Alopecia androgénica.',
    description: 'Batería pesada contra la caída capilar severa. Combina FIR, luz roja 660nm e infrarroja 850nm con 272 diodos de alta irradiancia. Ocho minutos al día. Diseñado específicamente para fases iniciales y medias de alopecia androgénica. Estimulación clínica sin necesidad de fármacos orales.',
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
      { title: 'Alarga el ciclo anágeno', description: 'Mantiene los folículos pilosos produciendo cabello más meses de su ciclo natural. Evita su miniaturización clínica irremediable.' },
      { title: 'Aporte de nutrientes +25%', description: 'Su altísima irradiancia bombea sangre fresca y nutrientes al folículo. Repara zonas mal vascularizadas en la coronilla.' },
      { title: 'Alternativa libre de fármacos', description: 'Consigue estimulación celular real, de grado médico clínico. Ahorras los efectos secundarios hormonales de muchos tratamientos.' }
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
    tagline: 'Zapatillas FIR. Circulación en reposo.',
    description: 'La recuperación silenciosa de atletas y teletrabajadores. Estas zapatillas integran placas térmicas FIR sólidas bajo tu planta. Veinte minutos de uso relajado en casa. Generan vaso-dilatación periférica rápida, drenaje linfático sin movimiento y eliminan retención en tren inferior. No son de andar. Son de descansar.',
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
      { title: 'Alivio miofascial agudo', description: 'Descomprime fascias castigadas por correr o estar de pie. El calor radiante depura metabolitos musculares generados al caminar.' },
      { title: 'Piernas ligeras como plumas', description: 'Al potenciar el retorno venoso periférico, mitigas radicalmente la retención de líquido en tobillos y gemelos.' },
      { title: 'Sistema parasimpático ON', description: 'El calor plantar térmico es el interruptor físico del sueño. Baja tus niveles de cortisol antes de domir.' }
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
    tagline: 'Vitalización celular. 9 min al día.',
    description: 'El motor central del ecosistema. Un bloque macizo de diodos emisores de campo FIR de alta densidad. Nueve minutos al día bastan. Lo aplicas directamente en dolor articular sordo (cervicales, lumbares, rotuliano). Lo usas a media distancia cada mañana para reglar ritmos circadianos. Potencia pura.',
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
      { title: 'Sincroniza tus circadianos', description: 'Exposición ocular indirecta matutina (sin radiación UV). Le grita a tus células que arranquen su ciclo metabólico diario.' },
      { title: 'Alivio de dolor ortopédico', description: 'Por saturación de 200 diodos, el FIR profundo desinflama las facetas vertebrales y articulaciones de carga grandes (rodilla, sacro).' },
      { title: 'Regeneración post-entreno ATP', description: 'Recupera tus roturas de fibra post-gimnasio forzando una mayor producción enzimática de ATP directamente en esa región corporal.' }
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
    tagline: 'LED de mano. Terapia puntual.',
    description: 'Potencia FIR ultraconcentrada dentro de un puntero de aluminio quirúrgico. Lo llevas en el bolsillo. Lo aplicas un minuto exacto contra espinillas molestas, aftas bucales dolorosas o ese tendón inflamado por jugar padel. Tecnología de alto impacto puntual libre de baterías monstruosas.',
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
      { title: 'Línea de fuego milimétrica', description: 'Apuntas a la lesión concreta in vivo. El ratio vatios/cm2 aquí supera paneles grandes porque lo pegas literalmente contra tu piel.' },
      { title: 'Reanimador dérmico S.O.S', description: 'Espinilla enorme o herpes visible antes de evento. Lo desinflama y cauteriza el proceso en tiempo récord.' },
      { title: 'Diseño ultra transportable', description: 'Te lo llevas en bolso. Ideal para contracturas cervicales sobremeseras o síndrome túnel carpiano trabajando nómada.' }
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
    tagline: 'Cepillo FIR. Cada pasada trata.',
    description: 'Hemos combinado cinco años de I+D FIR con un gesto preexistente: pasarte el peine de toda la vida. Nódulos suaves de silicona integrados emiten campo FIR microvibracional cada vez que te cepillas el cabello. Cinco minutos diarios sin detener tu rutina actual mejora el riego capilar y sebo residual.',
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
      { title: 'Domestica tu manto hídrico capilar', description: 'El haz Iónico/FIR cierra la cutícula del cabello oxidada. El roce natural lubrifica y elimina frizz molesto.' },
      { title: 'Costo de oportunidad cero minutos', description: 'Peinarte por las mañanas ya formaba parte de tu horario. Ahora introduces prevención sin dedicarle extra rutinas raras.' },
      { title: 'Vibrato de tensión intracraneal', description: 'Activa el motor háptico de masaje. Libera las fascias superficiales del cráneo saturadas por tensiones mandibulares nerviosas.' }
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
    tagline: 'Collar infrarrojo. Tensión cervical.',
    description: 'Sesenta diodos FIR inyectados sobre goma clínica flexible acunan tu cuello tensionado. Diez minutos cada tarde revierte el síndrome biomecánico del trabajador digital. El haz radiante afloja mecánicamente nudos fibróticos crónicos. Póntelo contestando emails e ignóralo conscientemente un rato.',
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
      { title: 'Erradica el cuello de texto', description: 'Invertimos el espasmo cervicodorsal provocado horas enteras bajando agachados la cabeza escrolleando un móvil diminuto.' },
      { title: 'Calor profundo restaurador', description: 'Las ondas FIR causan una vaso-expansión calida silenciosa. Alimento biológico para recuperar fascículos en permanente contractura severa.' },
      { title: 'Anatomía resiliente al doblez', description: 'Goma moldeable con "memory retain". Se abraza y ancla ergonómico a físicos gruesos musculados o cuellos extremadamente cisnes finos.' }
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
