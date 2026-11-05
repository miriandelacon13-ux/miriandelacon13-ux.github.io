// Todo el contenido del sitio sale de este archivo. Los colores están en src/styles/global.css (@theme).

export type IconoEnlace = "codigo" | "dashboard" | "video" | "documento";

export interface EnlaceProyecto {
  etiqueta: string;
  url: string;
  icono: IconoEnlace;
}

export interface Proyecto {
  titulo: string; // dice qué hiciste, no el nombre del repo
  repositorio: string; // nombre exacto del repo en GitHub (sirve para comprobar que el catálogo esté completo)
  resumen: string; // descripción breve
  pregunta?: string; // obligatoria en los destacados
  resultado?: { cifra: string; texto: string; fuente?: string }; // obligatorio en los destacados
  imagen?: {
    src: string;
    alt: string;
    ancho: number;
    alto: number;
    // opcional: otra imagen para escritorio (≥1024 px), p. ej. vertical para llenar el panel de la tarjeta destacada
    escritorio?: { src: string; ancho: number; alto: number };
  };
  etiquetas?: string[];
  enlaces: EnlaceProyecto[];
  destacado?: boolean; // los destacados se muestran en grande y primero
  materialDelCurso?: boolean; // forks o copias de material de clase: van en «Material del curso»
  procedencia?: string; // de dónde viene el material (obligatorio si materialDelCurso)
}

export interface Experiencia {
  cargo: string;
  organizacion: string;
  periodo: string;
  logros: string[];
}

export interface Formacion {
  titulo: string;
  institucion: string;
  periodo?: string;
  detalles: string[];
}

export interface Video {
  titulo: string;
  descripcion: string;
  aviso: string; // aviso obligatorio si la voz es generada con IA
  creditos?: string;
  miniatura: { src: string; alt: string; ancho: number; alto: number };
  youtubeId?: string; // cuando el reel esté en YouTube, pega aquí su identificador y se embebe solo
  mp4?: { src: string; ancho: number; alto: number }; // video propio servido desde public/video (si no hay youtubeId)
  enlaces: { etiqueta: string; url: string }[];
}

export const siteConfig = {
  nombre: "Mirian de la Cruz Condori",
  nombreCorto: "Mirian",
  iniciales: "MC",
  encabezado: "Economía aplicada y análisis de datos",
  descripcion:
    "Portafolio de Mirian de la Cruz Condori, egresada de Economía de la PUCP: economía aplicada y análisis de datos para políticas públicas e inclusión financiera.",
  bio: "Soy egresada de Economía de la Pontificia Universidad Católica del Perú. Me interesa usar los datos para entender problemas económicos y aportar a proyectos de políticas públicas e inclusión financiera.",
  // Foto recortada en círculo. Vacío = espacio reservado con iniciales.
  foto: "/images/foto.webp",
  // Copia PÚBLICA del CV, sin teléfono (el original queda intacto fuera del repo).
  cv: "/cv/Mirian-de-la-Cruz-Condori-CV.pdf",
  // Canales de contacto por ahora: solo GitHub y LinkedIn.
  redes: {
    github: "https://github.com/miriandelacon13-ux",
    linkedin: "https://www.linkedin.com/in/mirian-de-la-cruz/",
  },

  // Catálogo = TODOS los repositorios públicos de github.com/miriandelacon13-ux (8 al 2026-11-04).
  // Cifras verificadas con los datos publicados de cada repo.
  //  - destacado: true → tarjeta grande (imagen, pregunta, resultado y enlaces), en este orden.
  //  - sin destacado → «Todos mis proyectos»: tarjeta compacta (título, descripción, imagen o demo si hay, repositorio).
  //  - materialDelCurso: true → «Material del curso», con su procedencia.
  // Pendientes hasta tener material publicable: valorización de Aceros Arequipa, ENAHO en Stata, ACB de la Ley 30299.
  proyectos: [
    // ---------- Destacados ----------
    {
      titulo: "Dashboard de la pobreza monetaria en el Perú, 2024",
      repositorio: "pobreza-peru-dashboard",
      resumen:
        "Estimé la pobreza total y extrema de los 25 departamentos con los microdatos de la ENAHO 2024 y la presenté en un dashboard interactivo y un reel.",
      pregunta:
        "¿Cómo se distribuye la pobreza monetaria entre los departamentos del Perú y qué brecha existe entre las áreas urbana y rural en 2024?",
      resultado: {
        cifra: "14.5 puntos",
        texto:
          "de brecha: la pobreza rural (39.3\u00a0%) supera a la urbana (24.8\u00a0%), con un IC 95\u00a0% de 12.4 a 16.6 puntos. Por departamento, va de 6.0\u00a0% en Ica a 45.0\u00a0% en Cajamarca.",
        fuente: "INEI, ENAHO 2024 · cálculos propios",
      },
      imagen: {
        src: "/images/proyectos/pobreza-dashboard.webp",
        alt: "Captura del dashboard: mapa del Perú coloreado según la tasa de pobreza de cada departamento en 2024.",
        ancho: 1200,
        alto: 809,
        escritorio: { src: "/images/proyectos/pobreza-mapa.webp", ancho: 1012, alto: 1234 },
      },
      etiquetas: ["Python", "pandas", "Plotly", "ENAHO 2024", "GitHub Pages"],
      enlaces: [
        { etiqueta: "Repositorio", url: "https://github.com/miriandelacon13-ux/pobreza-peru-dashboard", icono: "codigo" },
        { etiqueta: "Dashboard", url: "https://miriandelacon13-ux.github.io/pobreza-peru-dashboard/web/", icono: "dashboard" },
        {
          etiqueta: "Reel",
          url: "https://www.linkedin.com/posts/mirian-de-la-cruz_anaerlisisdedatos-python-enaho-ugcPost-7522723990654844928-Lm8-/",
          icono: "video",
        },
      ],
      destacado: true,
    },
    {
      titulo: "Un servidor MCP que conecta a Claude con las series oficiales del BCRP",
      repositorio: "mcp-bcrp",
      resumen:
        "Construí un servidor MCP en Python que busca y descarga las 17,167 series del BCRP y calcula variaciones y correlaciones; luego medí si Claude acierta más cifras con él.",
      pregunta: "¿Acierta Claude más cifras oficiales del BCRP cuando consulta un servidor MCP propio?",
      resultado: {
        cifra: "10 de 10",
        texto:
          "cifras correctas con el MCP, frente a 0 de 10 solo con memoria (respondió «no sé» en las 10) y 9 de 10 con búsqueda web.",
        fuente: "resultados_web.csv · 10 preguntas evaluadas con Claude Haiku el 28 de octubre de 2026",
      },
      imagen: {
        // en celular, solo el panel principal del gráfico (se lee mejor); en escritorio, el gráfico completo con los tiempos
        src: "/images/proyectos/mcp-bcrp-resultados-celular.webp",
        alt: "Gráfico de barras: solo con memoria Claude no sabe las 10 cifras, con búsqueda web acierta 9 y con el MCP del BCRP acierta 10.",
        ancho: 1400,
        alto: 680,
        escritorio: { src: "/images/proyectos/mcp-bcrp-resultados.webp", ancho: 1600, alto: 576 },
      },
      etiquetas: ["Python", "FastMCP", "API del BCRP", "pytest", "Claude Code"],
      enlaces: [
        { etiqueta: "Repositorio", url: "https://github.com/miriandelacon13-ux/mcp-bcrp", icono: "codigo" },
        { etiqueta: "Informe", url: "https://github.com/miriandelacon13-ux/mcp-bcrp/blob/main/informe.md", icono: "documento" },
      ],
      destacado: true,
    },
    {
      titulo: "Área quemada en el incendio de Chichas y Toro (Arequipa) con imágenes Sentinel-2",
      repositorio: "Incendios-Peru",
      resumen:
        "Ubiqué el incendio con focos de calor VIIRS, delimité el área quemada con el índice dNBR de Sentinel-2 y la crucé con la cobertura del suelo de ESA WorldCover.",
      pregunta: "¿Cuántas hectáreas se quemaron en el incendio de octubre de 2026 y qué coberturas del suelo fueron afectadas?",
      resultado: {
        cifra: "1,495.6 ha",
        texto:
          "quemadas entre el 13 y el 20 de octubre: 70.3\u00a0% pastizal y 29.2\u00a0% matorral, sin bosques ni cultivos. Según el umbral elegido, el rango va de 215.6 a 1,618.8 ha.",
        fuente: "results/tables · Sentinel-2 L2A y ESA WorldCover",
      },
      imagen: {
        // en celular, el panel «después» (se ve mejor la cicatriz); en escritorio, antes y después lado a lado
        src: "/images/proyectos/incendios-despues-celular.webp",
        alt: "Imágenes Sentinel-2 en falso color del incendio de Chichas y Toro, con el contorno blanco del área quemada.",
        ancho: 840,
        alto: 860,
        escritorio: { src: "/images/proyectos/incendios-antes-despues.webp", ancho: 1400, alto: 685 },
      },
      etiquetas: ["Python", "Sentinel-2", "rasterio", "GeoPandas", "NASA FIRMS"],
      enlaces: [
        { etiqueta: "Repositorio", url: "https://github.com/miriandelacon13-ux/Incendios-Peru", icono: "codigo" },
        {
          etiqueta: "Tablas de resultados",
          url: "https://github.com/miriandelacon13-ux/Incendios-Peru/tree/main/results/tables",
          icono: "documento",
        },
      ],
      destacado: true,
    },

    // ---------- Todos mis proyectos ----------
    {
      titulo: "Tres skills de Claude Code para la ENAHO 2024",
      repositorio: "enaho-skills",
      resumen:
        "Skills que limpian, grafican y mapean la pobreza de la ENAHO 2024 siempre de la misma forma. Replican la cifra oficial: 27.58\u00a0% frente al 27.6\u00a0% del INEI, con los 25 departamentos iguales a la referencia del curso.",
      imagen: {
        src: "/images/proyectos/enaho-mapa.webp",
        alt: "Mapa de la pobreza monetaria por departamento del Perú en 2024, generado por la skill de mapas.",
        ancho: 1000,
        alto: 1301,
      },
      enlaces: [{ etiqueta: "Repositorio", url: "https://github.com/miriandelacon13-ux/enaho-skills", icono: "codigo" }],
    },
    {
      titulo: "OCR y transcripción de documentos y audios peruanos",
      repositorio: "tarea-2-voces-documentos-peruanos",
      resumen:
        "Texto de 25 documentos escaneados y 30 clips de audio, con datos personales seudonimizados y calidad medida contra referencias revisadas a mano. PaddleOCR logró un CER de 0.295, frente a 0.659 de Tesseract.",
      imagen: {
        src: "/images/proyectos/tarea2-dashboard.webp",
        alt: "Captura del dashboard en Streamlit: error de OCR por tipo de documento y error de transcripción por clip de audio.",
        ancho: 1400,
        alto: 877,
      },
      enlaces: [
        { etiqueta: "Repositorio", url: "https://github.com/miriandelacon13-ux/tarea-2-voces-documentos-peruanos", icono: "codigo" },
        { etiqueta: "Demo", url: "https://tarea-2-voces-documentos-peruanos-r8jc6xclfjwul2hee65ex2.streamlit.app/", icono: "dashboard" },
      ],
    },
    {
      titulo: "Clasificador de titulares de noticias peruanas",
      repositorio: "Repository-name-Tarea1_Noticias_Peruanas",
      resumen:
        "360 titulares de El Comercio en cuatro categorías, clasificados de tres formas. El LLM local Qwen 2.5 3B (Ollama) logró 73.3\u00a0% de accuracy, frente a 65.0\u00a0% del zero-shot y 64.8\u00a0% de DistilBERT afinado.",
      enlaces: [
        {
          etiqueta: "Repositorio",
          url: "https://github.com/miriandelacon13-ux/Repository-name-Tarea1_Noticias_Peruanas/tree/main/tarea_1",
          icono: "codigo",
        },
      ],
    },
    {
      titulo: "Ingresos de los organismos públicos descentralizados del Perú, 2025",
      repositorio: "TAREA1",
      resumen:
        "Análisis con pandas de los ingresos presupuestales de 2025 por departamento y entidad ejecutora. Lima recaudó 885.4 millones, más de 11 veces lo de La Libertad, el segundo departamento.",
      enlaces: [{ etiqueta: "Repositorio", url: "https://github.com/miriandelacon13-ux/TAREA1", icono: "codigo" }],
    },

    // ---------- Material del curso ----------
    {
      titulo: "Diplomado PUCP: material del curso de Python",
      repositorio: "Diplomado_PUCP",
      resumen:
        "Copia (fork) de los materiales del curso intensivo de programación en Python de la PUCP. Es material de clase: no contiene cambios propios.",
      procedencia: "Fork de alexanderquispe/Diplomado_PUCP",
      enlaces: [
        { etiqueta: "Mi copia", url: "https://github.com/miriandelacon13-ux/Diplomado_PUCP", icono: "codigo" },
        { etiqueta: "Repositorio original", url: "https://github.com/alexanderquispe/Diplomado_PUCP", icono: "codigo" },
      ],
      materialDelCurso: true,
    },
  ] as Proyecto[],

  video: {
    titulo: "Reel: ¿dónde está la pobreza en el Perú?",
    descripcion:
      "En 65 segundos cuento los tres hallazgos del dashboard de pobreza monetaria 2024, con los mapas y gráficos del tablero.",
    aviso: "La narración es mi voz clonada con IA (Qwen3-TTS) a partir de una grabación propia.",
    creditos: "Música: «Dreamer», de Kevin MacLeod (CC BY 4.0).",
    miniatura: {
      src: "/images/video/reel-pobreza.webp",
      alt: "Portada del reel: 27.6\u00a0% de pobreza monetaria en el Perú en 2024, sobre un mapa por departamento.",
      ancho: 540,
      alto: 960,
    },
    youtubeId: "",
    // MP4 final aprobado (copia byte a byte de pobreza-peru-dashboard/reel/reel.mp4, 8 MB, 65 s, 1080×1920, H.264 + AAC)
    mp4: { src: "/video/reel-pobreza.mp4", ancho: 1080, alto: 1920 },
    enlaces: [
      {
        etiqueta: "Ver el reel en LinkedIn",
        url: "https://www.linkedin.com/posts/mirian-de-la-cruz_anaerlisisdedatos-python-enaho-ugcPost-7522723990654844928-Lm8-/",
      },
      { etiqueta: "Ver el archivo en GitHub", url: "https://github.com/miriandelacon13-ux/pobreza-peru-dashboard/blob/main/reel/reel.mp4" },
    ],
  } as Video,

  // Textos breves que complementan el CV. Pichincha y las actividades extracurriculares quedan solo en el PDF.
  experiencia: [
    {
      cargo: "Practicante de Productos e Inclusión Financiera",
      organizacion: "Banco de la Nación · Banca y Seguros",
      periodo: "Mayo – octubre de 2026",
      logros: [
        "Hice seguimiento de indicadores de gestión: tiempos de atención, productividad, eficiencia e incidencias.",
        "Analicé incidencias operativas de los productos de seguros y ayudé a identificar errores en los sistemas.",
        "Apoyé la validación de procesos y la búsqueda de mejoras en tiempos de atención, calidad y eficiencia.",
      ],
    },
    {
      cargo: "Coordinadora de Finanzas · Área de eventos",
      organizacion: "COREPUCP · Experiencia universitaria",
      periodo: "Agosto – diciembre de 2024",
      logros: [
        "Planifiqué el presupuesto y la asignación de recursos materiales y financieros de los eventos, dentro de los montos establecidos.",
        "Analicé los patrones de consumo del público para asignar mejor los recursos y mejorar la captación de fondos.",
      ],
    },
  ] as Experiencia[],

  formacion: [
    {
      titulo: "Economía (egresada)",
      institucion: "Pontificia Universidad Católica del Perú",
      detalles: ["Tercio superior.", "Rendimiento destacado en Análisis Financiero y Econometría."],
    },
  ] as Formacion[],

  // Herramientas que figuran en el CV
  herramientas: ["Stata", "R", "Python", "Excel", "SQL Server", "Power BI"],
  idiomas: ["Inglés avanzado (Idiomas Católica)"],
};
