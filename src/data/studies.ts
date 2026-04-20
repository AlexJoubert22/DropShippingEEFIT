export type StudySection = {
  heading: string;
  content: string;
};

export type Study = {
  id: string;
  year: number;
  journal: string;
  title: string;
  authorsDetailed?: string;
  authorsShort: string;
  institutions?: string;
  category: string;
  categoryColor?: string;
  summaryCard: string;
  isOfficial: boolean;
  doi?: string;
  url?: string;
  fullArticle?: {
    verdict: string;
    sections: StudySection[];
  };
};

export const STUDIES: Study[] = [
  // === PAPERS OFICIALES eefit (5 primarios) ===
  {
    id: "fir-regenerative-medicine-2024",
    year: 2024,
    journal: "Pharmacological Research",
    title: "Far-infrared radiation and its therapeutic parameters: A superior alternative for future regenerative medicine?",
    authorsDetailed: "Qin B, Fu SJ, Xu XF, et al. (incluye Prof. Nick Wang de eefit)",
    authorsShort: "Qin et al.",
    institutions: "Macau University of Science and Technology · Dr. Neher's Biophysics Laboratory",
    category: "Revisiones",
    categoryColor: "#FF6B4A",
    summaryCard: "Revisión sistemática de los parámetros terapéuticos del FIR: longitud de onda, densidad de potencia, tiempo de irradiación y distancia. Firmado por el equipo de I+D de eefit.",
    isOfficial: true,
    doi: "10.1016/j.phrs.2024.107349",
    url: "https://www.sciencedirect.com/science/article/pii/S1043661824002949",
    fullArticle: {
      verdict: "El FIR puede convertirse en un pilar de la medicina regenerativa del futuro.",
      sections: [
        {
          heading: "¿Qué preguntaron?",
          content: "Los autores se plantearon una pregunta sencilla pero crítica: existen cientos de estudios sobre los efectos del FIR en enfermedades crónicas, inflamación, dolor y regeneración tisular, pero no hay consenso sobre los parámetros óptimos de uso. ¿Cuál es la longitud de onda ideal? ¿Cuánta potencia hay que aplicar? ¿Cuánto tiempo? ¿A qué distancia? Sin un estándar, la tecnología no puede escalar a la práctica clínica."
        },
        {
          heading: "¿Qué encontraron?",
          content: "Tras revisar la literatura disponible, los autores proponen un marco de referencia: longitudes de onda efectivas entre 3 y 12 micras, densidades de potencia bajas (entre 10 y 50 mW/cm²), sesiones de 20 a 40 minutos, y distancia variable según profundidad tisular objetivo. Confirman tres mecanismos principales: estimulación mitocondrial, mejora de microcirculación por dilatación vascular, y modulación de vías anti-inflamatorias (notablemente, supresión de TNF-α y elevación de IL-10)."
        },
        {
          heading: "¿Qué implica para Vitaly?",
          content: "Los dispositivos eefit están calibrados dentro de los rangos terapéuticos que esta revisión considera óptimos. Vitaly Face, por ejemplo, opera con FIR en el rango 4-20 micras combinado con LEDs cromáticos de baja intensidad, y con tiempos de sesión de 10 a 20 minutos según producto. No es casualidad: eefit participó en esta revisión."
        },
        {
          heading: "Limitaciones honestas",
          content: "Esta es una revisión de literatura, no un ensayo clínico controlado. Los autores reconocen que faltan estudios multicéntricos a largo plazo en humanos. El consenso sobre parámetros óptimos aún está en construcción."
        }
      ]
    }
  },
  {
    id: "fir-alzheimer-2025",
    year: 2025,
    journal: "NeuroMolecular Medicine",
    title: "Far-Infrared Radiation Ameliorates the Cognitive Dysfunction in an Alzheimer's Disease Transgenic Mouse via Modulating Jak-2/Stat3 and Nrf-2/HO-1 Pathways",
    authorsDetailed: "Yang W, Yu Q, Wang N, Lam KK, Lin ZX, Xian YF",
    authorsShort: "Yang et al.",
    institutions: "Chinese University of Hong Kong · eefit R&D",
    category: "Cognitivo",
    categoryColor: "#8B7FFF",
    summaryCard: "Estudio en ratones transgénicos: el FIR reduce marcadores de Alzheimer y mejora función cognitiva. Colaboración directa eefit + Universidad China de Hong Kong.",
    isOfficial: true,
    doi: "10.1007/s12017-025-08860-2",
    url: "https://link.springer.com/article/10.1007/s12017-025-08860-2",
    fullArticle: {
      verdict: "Primer estudio que demuestra que el FIR puede actuar simultáneamente sobre dos patologías del Alzheimer a través de intervención física, sin fármacos.",
      sections: [
        {
          heading: "¿Qué preguntaron?",
          content: "El Alzheimer es la principal causa de demencia en adultos mayores, y los tratamientos actuales son limitados y con efectos secundarios. El equipo se preguntó si el FIR, una terapia física no invasiva, podría modular dos de las características patológicas más importantes del Alzheimer: el depósito de proteína beta-amiloide y la hiperfosforilación de la proteína tau. Ambas son responsables del deterioro cognitivo."
        },
        {
          heading: "Cómo lo estudiaron",
          content: "Utilizaron ratones transgénicos TgCRND8, un modelo animal reconocido de Alzheimer, y los expusieron a sesiones diarias de FIR de eefit (rango 4-20 micras) durante 28 días. Midieron su capacidad cognitiva con el Morris Water Maze (prueba estándar de memoria espacial), y analizaron muestras de hipocampo y corteza cerebral por inmunohistoquímica y Western blot."
        },
        {
          heading: "¿Qué encontraron?",
          content: "Los ratones tratados con FIR mostraron mejoras significativas: reducción de los depósitos de beta-amiloide (Aβ40 y Aβ42), reducción de hiperfosforilación de tau en múltiples sitios (Thr205, Ser369, Ser404, Thr181), supresión de citoquinas inflamatorias (TNF-α, IL-1β), elevación de IL-4 (antiinflamatoria), y activación de la vía antioxidante Nrf-2/HO-1. En términos prácticos: su memoria espacial mejoró de forma medible frente al grupo control."
        },
        {
          heading: "Por qué importa",
          content: "Es el primer estudio que demuestra que el FIR puede atacar simultáneamente las dos patologías centrales del Alzheimer sin fármacos. Según el Decano de la Facultad de Medicina China de la Universidad China de Hong Kong, citado en el comunicado oficial, la terapia FIR podría retrasar varios años la progresión en pacientes con deterioro cognitivo leve."
        },
        {
          heading: "Limitaciones honestas",
          content: "El estudio es en ratones transgénicos, no en humanos. Aunque los mecanismos identificados son prometedores, hacen falta ensayos clínicos en pacientes antes de hacer afirmaciones terapéuticas. Vitaly no vende este producto como tratamiento del Alzheimer."
        }
      ]
    }
  },
  {
    id: "fir-ischemic-stroke-2024",
    year: 2024,
    journal: "Neural Regeneration Research",
    title: "Far-infrared irradiation restores mitochondrial dynamics to ameliorate ischemic stroke",
    authorsShort: "Equipo eefit + Hong Kong",
    institutions: "Chinese University of Hong Kong · eefit R&D",
    category: "Cognitivo",
    categoryColor: "#8B7FFF",
    summaryCard: "FIR protege las mitocondrias neuronales durante el ictus isquémico. Reducción de infarto cerebral y mejora de función neurológica en modelo animal.",
    isOfficial: true,
    url: "https://journals.lww.com/nrronline/abstract/9900/far_infrared_irradiation_restores_mitochondrial.1147.aspx",
    fullArticle: {
      verdict: "El FIR estabiliza la función mitocondrial en neuronas dañadas por isquemia, reduciendo el daño cerebral tras un ictus en ratas.",
      sections: [
        {
          heading: "¿Qué preguntaron?",
          content: "Durante un ictus isquémico, las mitocondrias de las neuronas se desestabilizan: se rompen, pierden su membrana potencial, y dejan de producir ATP. Sin ATP, las neuronas mueren. Los autores preguntaron si el FIR podía proteger las mitocondrias durante este proceso y limitar el daño neurológico."
        },
        {
          heading: "Cómo lo estudiaron",
          content: "Usaron un modelo de oclusión de arteria cerebral media en ratas (el estándar para simular ictus isquémico) y células neuronales sometidas a privación de oxígeno y glucosa. Aplicaron FIR diariamente durante 30 minutos y midieron volumen de infarto cerebral, edema, función neurológica, y parámetros mitocondriales."
        },
        {
          heading: "¿Qué encontraron?",
          content: "El FIR redujo el volumen de infarto cerebral, alivió el edema y mejoró la función neurológica. A nivel molecular, identificaron que el FIR aumenta la expresión de Opa1 (optic atrophy 1), una proteína clave para la fusión mitocondrial. Al mejorar la dinámica mitocondrial, las neuronas mantienen su producción de energía y sobreviven. Cuando eliminaron Opa1 experimentalmente, los efectos protectores del FIR desaparecieron: prueba directa del mecanismo."
        },
        {
          heading: "Por qué importa",
          content: "El ictus es una de las principales causas de discapacidad en adultos. Las opciones de rehabilitación neurológica son limitadas. Este estudio abre una vía terapéutica física, no invasiva y sin efectos secundarios, que podría complementar la rehabilitación clásica."
        }
      ]
    }
  },
  {
    id: "fir-arthritis-2022",
    year: 2022,
    journal: "Journal of Advanced Research",
    title: "Far infrared irradiation suppresses experimental arthritis in rats by down-regulation of genes involved in inflammatory response and autoimmunity",
    authorsShort: "Equipo FIR",
    category: "Muscular",
    categoryColor: "#5EEAD4",
    summaryCard: "FIR reduce marcadores inflamatorios y autoinmunes en modelo experimental de artritis. Mecanismo: supresión de genes pro-inflamatorios.",
    isOfficial: true,
    url: "https://www.sciencedirect.com/science/article/pii/S2090123221001685",
    fullArticle: {
      verdict: "El FIR reduce significativamente la inflamación articular y la actividad autoinmune en ratas con artritis experimental.",
      sections: [
        {
          heading: "¿Qué preguntaron?",
          content: "La artritis reumatoide es una enfermedad autoinmune donde el sistema inmune ataca el propio tejido articular. Los tratamientos actuales son inmunosupresores con efectos secundarios importantes. Los autores estudiaron si el FIR podía modular la respuesta inflamatoria sin comprometer la inmunidad general."
        },
        {
          heading: "Cómo lo estudiaron",
          content: "Modelo de artritis inducida por adyuvante en ratas. Grupo tratado con FIR diariamente, grupo control sin tratamiento. Midieron inflamación articular, análisis de expresión génica en tejido sinovial, marcadores inflamatorios en sangre."
        },
        {
          heading: "¿Qué encontraron?",
          content: "Reducción significativa de la inflamación articular macroscópica. A nivel molecular, observaron down-regulación (disminución) de múltiples genes implicados en respuesta inflamatoria y autoinmunidad. El FIR no solo alivia el síntoma (hinchazón), actúa sobre la causa a nivel de expresión génica."
        },
        {
          heading: "Aplicación en Vitaly",
          content: "Este mecanismo es relevante para nuestros productos de aplicación articular y muscular (Vitaly Neck, Vitaly Core). Las personas con dolor articular crónico de baja intensidad pueden beneficiarse del uso regular, aunque Vitaly no sustituye tratamiento médico prescrito."
        }
      ]
    }
  },
  {
    id: "fir-microbiota-2020",
    year: 2020,
    journal: "Journal of Advanced Research",
    title: "Far infrared radiation induces changes in gut microbiota and activates GPCRs in mice",
    authorsShort: "Equipo FIR",
    category: "Metabolismo",
    categoryColor: "#FDB022",
    summaryCard: "FIR modula la microbiota intestinal y activa receptores celulares (GPCRs). Posible mecanismo sistémico más allá del efecto local.",
    isOfficial: true,
    url: "https://www.sciencedirect.com/science/article/pii/S2090123219302012",
    fullArticle: {
      verdict: "El FIR puede tener efectos sistémicos a través de la microbiota intestinal, no solo efectos locales sobre el tejido irradiado.",
      sections: [
        {
          heading: "¿Qué preguntaron?",
          content: "Toda la literatura previa del FIR se centraba en efectos locales: donde apuntas la luz, actúa. Pero observaciones clínicas sugerían efectos sistémicos inexplicables: mejoras en sueño, energía general, digestión. Los autores exploraron si el FIR podía modular la microbiota intestinal, que actúa como 'segundo cerebro' con influencia sistémica."
        },
        {
          heading: "Cómo lo estudiaron",
          content: "Ratones expuestos a FIR durante varias semanas. Análisis metagenómico de microbiota fecal antes y después. Medición de activación de receptores GPCR (receptores acoplados a proteína G, implicados en comunicación celular sistémica)."
        },
        {
          heading: "¿Qué encontraron?",
          content: "Cambios medibles en la composición de la microbiota intestinal tras exposición repetida a FIR: aumento de familias bacterianas asociadas a metabolismo saludable, reducción de familias pro-inflamatorias. Activación demostrada de GPCRs en tejidos distantes del punto de irradiación. Primer mecanismo plausible para efectos sistémicos del FIR."
        },
        {
          heading: "Aplicación en Vitaly",
          content: "Muchos usuarios de FIR reportan mejoras en sueño y sensación de energía general que el uso local no podría explicar directamente. Este estudio propone un mecanismo. Cautela: es un estudio en ratones, con exposición sistémica, no equivalente al uso de un dispositivo localizado en humanos."
        }
      ]
    }
  },
  // === REFERENCIAS COMPLEMENTARIAS (7 adicionales de literatura FIR general, no eefit) ===
  {
    id: "ref-1",
    year: 2022,
    journal: "Photodermatology",
    title: "Physical properties and biological effects of ceramic materials emitting infrared radiation",
    authorsShort: "Literatura FIR general",
    category: "Revisiones",
    summaryCard: "Mecanismos de materiales cerámicos emisores de FIR y su interacción con tejidos blandos.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: "ref-2",
    year: 2017,
    journal: "Complementary Therapies in Medicine",
    title: "Far-infrared ray patches relieve pain and improve skin sensitivity in myofascial pain syndrome",
    authorsShort: "Literatura FIR general",
    category: "Muscular",
    summaryCard: "Reducción de dolor miofascial mediante exposición localizada al infrarrojo lejano.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: "ref-3",
    year: 2019,
    journal: "Scientific Reports",
    title: "Detecting the limits of the biological effects of far-infrared radiation on epithelial cells",
    authorsShort: "Literatura FIR general",
    category: "Piel",
    summaryCard: "Análisis celular in vitro sobre la ventana terapéutica segura y eficaz de irradiación FIR en epidermis.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: "ref-4",
    year: 2024,
    journal: "Scientific Reports",
    title: "Far-infrared therapy promotes exercise capacity and glucose metabolism in mice",
    authorsShort: "Literatura FIR general",
    category: "Metabolismo",
    summaryCard: "Mejora del metabolismo basal y la capacidad de ejercicio bajo tratamiento FIR sistémico.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: "ref-5",
    year: 2022,
    journal: "Journal of Neuroinflammation",
    title: "Far infrared light irradiation enhances Aβ clearance via increased exocytotic microglial ATP",
    authorsShort: "Literatura FIR general",
    category: "Cognitivo",
    summaryCard: "Mecanismo por el que el FIR incrementa la limpieza de beta-amiloide acelerando metabolismo microglial.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: "ref-6",
    year: 2025,
    journal: "International Journal of Molecular Sciences",
    title: "Therapeutic Potential of Infrared and Related Light Therapies in Metabolic Diseases",
    authorsShort: "Literatura FIR general",
    category: "Revisiones",
    summaryCard: "El papel neuro y metabólicamente activo del infrarrojo frente a síndromes metabólicos.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: "ref-7",
    year: 2012,
    journal: "Photonics & Lasers in Medicine",
    title: "Far infrared radiation: its biological effects and medical applications",
    authorsShort: "Vatansever F, Hamblin MR.",
    category: "Revisiones",
    summaryCard: "Revisión histórica fundamental del equipo del Dr. Hamblin, decano de la terapia luminínica de Harvard.",
    isOfficial: false,
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  }
];
