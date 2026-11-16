/**
 * TEAM4 · Guía y Checklist ICS + QA (Kodland)
 * Aplicación Web Estática - Lógica y Gestión de Estado
 */

// =============================================================================
// 1. BANCO DE DATOS DE CRITERIOS PEDAGÓGICOS Y QA (KODLAND OFICIAL)
// =============================================================================

const CRITERIA_DATABASE = [
  // ---------------------------------------------------------------------------
  // A. CLASE NORMAL (10 Criterios)
  // ---------------------------------------------------------------------------
  {
    id: "c-norm-inicio",
    category: "Estructura y Apertura",
    title: "Inicio puntual y objetivo claro",
    description: "Conexión a tiempo, bienvenida cálida personalizada, comprobación técnica rápida y planteamiento de la meta lúdica antes del minuto 7.",
    sessionTypes: ["normal"],
    questions: [
      "¿Iniciaste en el minuto exacto programado y saludaste a cada alumno por su nombre con energía positiva?",
      "¿Comprobaste que audio, video y pantalla compartida funcionaran en todos los alumnos antes del minuto 4?",
      "¿Presentaste la misión y el objetivo tangible del día ('Hoy crearemos...') de manera comprensible antes del minuto 7?",
      "¿Recordaste las reglas de oro de forma lúdica (levantar la mano, silenciar micrófono cuando otro habla)?",
      "¿Iniciaste la primera actividad práctica o rompehielos antes del minuto 7 de la clase?"
    ],
    keywords: [
      "INICIO_PUNTUAL",
      "OBJETIVO_CLARO",
      "ONBOARDING_TECNICO",
      "REGLAS_DE_ORO",
      "ENERGIA_INICIAL"
    ],
    tipICS: "Un inicio puntual y con objetivo explícito reduce el riesgo de abandono temprano; el algoritmo ICS penaliza fuertemente inicios tardíos o silenciosos en los primeros 5 minutos donde se define la tasa de retención.",
    templates: {
      cumple: "Inicio a tiempo con 100% de asistencia verificada. Objetivo presentado con entusiasmo y aceptado por el grupo antes del min 7.",
      parcial: "Se inició puntual pero la introducción se extendió hasta el minuto 10 antes del primer bloque de código práctico.",
      nocumple: "Retraso de más de 5 minutos al iniciar la sesión o no se comunicó la misión práctica de la clase."
    },
    quickNoteTemplates: [
      "Inicio a tiempo con 100% de asistencia verificada. Objetivo presentado con entusiasmo y aceptado por el grupo antes del min 7.",
      "Se inició puntual pero la introducción se extendió hasta el minuto 10 antes del primer bloque de código práctico.",
      "Retraso de más de 5 minutos al iniciar la sesión o no se comunicó la misión práctica de la clase."
    ]
  },
  {
    id: "c-norm-explicacion",
    category: "Pedagogía y Contenido",
    title: "Explicación estructurada",
    description: "Desglose de conceptos complejos en micro-pasos comprensibles con analogías cercanas y modelado docente previo a la práctica.",
    sessionTypes: ["normal"],
    questions: [
      "¿Dividiste los conceptos complejos en pasos pequeños y fácilmente digeribles para la edad del grupo?",
      "¿Utilizaste analogías del mundo real o de videojuegos conocidos para explicar la lógica del código?",
      "¿Evitaste tecnicismos innecesarios adaptando el vocabulario a nivel escolar?",
      "¿Modelaste primero el ejemplo en tu pantalla antes de pedir a los alumnos que lo replicaran?",
      "¿Mantuviste la explicación teórica en menos de 3 minutos consecutivos antes de pasar a la acción?"
    ],
    keywords: [
      "EXPLICACION_ESTRUCTURADA",
      "PASO_A_PASO",
      "ANALOGIAS_LUDICAS",
      "MODELADO_DOCENTE",
      "MICRO_LECCIONES"
    ],
    tipICS: "Las explicaciones atomizadas (< 3 min) evitan la saturación cognitiva y mantienen el índice de atención activa, elemento nuclear medido por auditorías QA en el puntaje ICS.",
    templates: {
      cumple: "Explicación clara en micro-bloques con analogías cercanas. Los alumnos asimilaron la lógica sin confusiones conceptuales.",
      parcial: "Explicación algo extensa (> 5 min) que requirió volver a explicar la lógica de los bloques durante la práctica.",
      nocumple: "Monólogo teórico largo o uso de lenguaje abstracto que generó confusión generalizada en el alumnado."
    },
    quickNoteTemplates: [
      "Explicación clara en micro-bloques con analogías cercanas. Los alumnos asimilaron la lógica sin confusiones conceptuales.",
      "Explicación algo extensa (> 5 min) que requirió volver a explicar la lógica de los bloques durante la práctica.",
      "Monólogo teórico largo o uso de lenguaje abstracto que generó confusión generalizada en el alumnado."
    ]
  },
  {
    id: "c-norm-participacion",
    category: "Participación y Engagement",
    title: "Participación activa (micrófono, chat o reacciones)",
    description: "Cumplimiento estricto de la regla 70/30: los estudiantes programan y se expresan la mayor parte del tiempo por múltiples canales.",
    sessionTypes: ["normal"],
    questions: [
      "¿Cumpliste con la regla 70/30 donde los alumnos producen y hablan el 70% del tiempo de clase?",
      "¿Alternaste canales de participación activa (micrófono abierto, chat de texto y reacciones con emojis)?",
      "¿Llamaste por su nombre a los alumnos con baja participación para integrarlos amablemente sin presionar?",
      "¿Planteaste preguntas con opciones (A/B o verdadero/falso) para facilitar la respuesta inmediata?",
      "¿Garantizaste que todos los estudiantes tuvieran al menos 3 intervenciones significativas en la sesión?"
    ],
    keywords: [
      "PARTICIPACION_ACTIVA",
      "REGLA_70_30",
      "PARTICIPACION_CHAT",
      "ROTACION_VOCAL",
      "REACCIONES_EMOJI"
    ],
    tipICS: "La interacción bidireccional continua pondera más del 30% del score de auditoría ICS; cuando un alumno participa activamente cada 5 minutos, la probabilidad de deserción cae un 80%.",
    templates: {
      cumple: "Excelente dinamismo: todos los alumnos respondieron por voz o chat y el 75% del tiempo fue manipulado por ellos.",
      parcial: "Participación concentrada en 2 alumnos líderes; los alumnos más callados solo intervinieron tras insistencia.",
      nocumple: "Clase unidireccional tipo conferencia; los alumnos permanecieron en silencio y con escasa intervención en chat."
    },
    quickNoteTemplates: [
      "Excelente dinamismo: todos los alumnos respondieron por voz o chat y el 75% del tiempo fue manipulado por ellos.",
      "Participación concentrada en 2 alumnos líderes; los alumnos más callados solo intervinieron tras insistencia.",
      "Clase unidireccional tipo conferencia; los alumnos permanecieron en silencio y con escasa intervención en chat."
    ]
  },
  {
    id: "c-norm-acompanamiento",
    category: "Soporte Técnico y QA",
    title: "Acompañamiento y resolución de dudas",
    description: "Detección temprana de errores en pantallas compartidas y resolución socrática de bloqueos en menos de 90 segundos.",
    sessionTypes: ["normal"],
    questions: [
      "¿Detectaste bloqueos o errores de código en menos de 90 segundos mediante pantallas compartidas?",
      "¿Guiaste con preguntas socráticas en lugar de dar la solución directa o tomar el control del mouse?",
      "¿Asignaste micro-retos a los alumnos avanzados mientras ayudabas a quien se atrasó?",
      "¿Validaste la emoción del alumno ante la frustración recordándole que 'el bug es un maestro'?",
      "¿Te aseguraste de que el alumno verificara por sí mismo que su código funcionó tras la corrección?"
    ],
    keywords: [
      "ACOMPANAMIENTO_EN_VIVO",
      "RESOLUCION_DUDAS",
      "METODO_SOCRATICO",
      "MANEJO_FRUSTRACION",
      "DETECCION_BUGS"
    ],
    tipICS: "Resolver dudas en < 90s sin asumir el control directo fortalece la autoeficacia del estudiante, blindando la métrica de satisfacción reportada por los padres en el NPS e ICS.",
    templates: {
      cumple: "Dudas resueltas rápidamente guiando con pistas. Los alumnos encontraron sus errores y continuaron entusiasmados.",
      parcial: "Se resolvió la duda pero tomó más de 4 minutos, provocando que otros alumnos esperaran sin tarea alterna.",
      nocumple: "Dudas desatendidas o el tutor escribió el código por el alumno sin explicar la causa del fallo."
    },
    quickNoteTemplates: [
      "Dudas resueltas rápidamente guiando con pistas. Los alumnos encontraron sus errores y continuaron entusiasmados.",
      "Se resolvió la duda pero tomó más de 4 minutos, provocando que otros alumnos esperaran sin tarea alterna.",
      "Dudas desatendidas o el tutor escribió el código por el alumno sin explicar la causa del fallo."
    ]
  },
  {
    id: "c-norm-recursos",
    category: "Herramientas y Recursos",
    title: "Uso de recursos adecuados",
    description: "Preparación anticipada de enlaces, proyectos base, diapositivas oficiales Kodland y plan de contingencia técnico.",
    sessionTypes: ["normal"],
    questions: [
      "¿Tuviste listas y abiertas las pestañas, plataformas, enlaces y proyectos base antes de iniciar la sesión?",
      "¿Compartiste recursos por el chat de la llamada de forma limpia y accesible para todos los alumnos?",
      "¿Utilizaste material visual de apoyo (diapositivas oficiales Kodland, esquemas o pizarra virtual)?",
      "¿Verificaste que los enlaces compartidos tuvieran permisos públicos o de acceso correctos?",
      "¿Contabas con un proyecto de respaldo o plan B listo ante lentitud o caídas de la plataforma principal?"
    ],
    keywords: [
      "RECURSOS_DIDACTICOS",
      "ENLACES_VERIFICADOS",
      "MATERIAL_KODLAND",
      "PIZARRA_VIRTUAL",
      "PLAN_B_TECNICO"
    ],
    tipICS: "La fluidez en el manejo de recursos previene tiempos muertos, factor que los auditores QA castigan de inmediato por su correlación directa con la distracción y desconexión infantil.",
    templates: {
      cumple: "Plataformas y enlaces funcionaron impecables; uso acertado de recursos visuales y pizarra virtual Kodland.",
      parcial: "Un recurso no abrió inmediatamente o faltaron permisos, requiriendo 2 minutos para corregir el acceso.",
      nocumple: "Pérdida de tiempo prolongada buscando materiales durante la clase o falta de preparación previa."
    },
    quickNoteTemplates: [
      "Plataformas y enlaces funcionaron impecables; uso acertado de recursos visuales y pizarra virtual Kodland.",
      "Un recurso no abrió inmediatamente o faltaron permisos, requiriendo 2 minutos para corregir el acceso.",
      "Pérdida de tiempo prolongada buscando materiales durante la clase o falta de preparación previa."
    ]
  },
  {
    id: "c-norm-tiempo",
    category: "Gestión de Aula",
    title: "Gestión del tiempo y ritmo",
    description: "Distribución equilibrada del cronómetro en fases pedagógicas sin apresuramientos finales ni tiempos muertos.",
    sessionTypes: ["normal"],
    questions: [
      "¿Cronometraste las fases de la clase respetando los tiempos asignados a teoría, práctica y cierre?",
      "¿Ajustaste la velocidad de la sesión según el nivel real de asimilación del grupo de estudiantes?",
      "¿Evitaste desviaciones prolongadas de tema manteniendo el hilo conductor de la clase?",
      "¿Iniciaste la fase de consolidación y pruebas de proyectos a tiempo (minuto 45-50)?",
      "¿Finalizaste la sesión exactamente a la hora convenida sin recortar los minutos de cierre?"
    ],
    keywords: [
      "GESTION_TIEMPO",
      "RITMO_PEDAGOGICO",
      "CONTROL_CRONOMETRO",
      "FASES_DE_CLASE",
      "PUNTUALIDAD_SALIDA"
    ],
    tipICS: "Un ritmo equilibrado evita la prisa angustiante al final; los padres valoran la puntualidad y el algoritmo ICS premia la consistencia cronológica en cada fase de la lección.",
    templates: {
      cumple: "Control impecable del cronómetro: todas las etapas pedagógicas se cubrieron sin prisas ni tiempos muertos.",
      parcial: "La fase práctica se alargó de más, dejando menos de 3 minutos para las pruebas finales.",
      nocumple: "La clase se desbordó en tiempo o se terminó apresuradamente sin completar el objetivo básico programado."
    },
    quickNoteTemplates: [
      "Control impecable del cronómetro: todas las etapas pedagógicas se cubrieron sin prisas ni tiempos muertos.",
      "La fase práctica se alargó de más, dejando menos de 3 minutos para las pruebas finales.",
      "La clase se desbordó en tiempo o se terminó apresuradamente sin completar el objetivo básico programado."
    ]
  },
  {
    id: "c-norm-comprension",
    category: "Evaluación Formativa",
    title: "Verificación frecuente de comprensión",
    description: "Chequeos formativos interactivos cada 7-10 minutos para validar que ningún alumno quede rezagado en silencio.",
    sessionTypes: ["normal"],
    questions: [
      "¿Realizaste chequeos rápidos de comprensión cada 7 a 10 minutos (ej. 'Pulgar arriba', '1 en el chat')?",
      "¿Pediste a un alumno parafrasear con sus palabras qué hace el comando o bucle recién implementado?",
      "¿Verificaste activamente que todos estuvieran en la misma línea de código o bloque antes de avanzar?",
      "¿Planteaste pequeños acertijos '¿Qué pasaría si...?' para comprobar el pensamiento lógico?",
      "¿Evitaste asumir que todos entendieron con un simple '¿todo claro?' general al aire?"
    ],
    keywords: [
      "VERIFICACION_COMPRENSION",
      "CHEQUEO_FORMATIVO",
      "PENSAMIENTO_LOGICO",
      "PULGAR_ARRIBA",
      "PARAFRASEO_ALUMNO"
    ],
    tipICS: "Comprobar la comprensión de manera interactiva garantiza que ningún estudiante quede rezagado en silencio, manteniendo el índice de persistencia del alumno en verde en la plataforma.",
    templates: {
      cumple: "Comprobaciones continuas y dinámicas en cada paso. Todos demostraron comprender el porqué de cada bloque.",
      parcial: "Se avanzó asumiendo comprensión con pocos pulgares arriba sin verificar a los alumnos más lentos.",
      nocumple: "Cero verificación de conceptos; se avanzó sin comprobar si los niños entendían o sólo copiaban código."
    },
    quickNoteTemplates: [
      "Comprobaciones continuas y dinámicas en cada paso. Todos demostraron comprender el porqué de cada bloque.",
      "Se avanzó asumiendo comprensión con pocos pulgares arriba sin verificar a los alumnos más lentos.",
      "Cero verificación de conceptos; se avanzó sin comprobar si los niños entendían o sólo copiaban código."
    ]
  },
  {
    id: "c-norm-feedback",
    category: "Motivación y Clima Emocional",
    title: "Feedback constructivo y refuerzo positivo",
    description: "Reconocimiento genuino del esfuerzo y la creatividad con recompensas gamificadas y normalización del error.",
    sessionTypes: ["normal"],
    questions: [
      "¿Elogiaste el esfuerzo y la estrategia del alumno en lugar de solo felicitar el resultado final?",
      "¿Destacaste ideas creativas o soluciones alternativas propuestas por los estudiantes?",
      "¿Corregiste errores de forma sutil, positiva y privada cuando fue necesario?",
      "¿Otorgaste reconocimientos gamificados (estrellas Kodland, medallas de bug-hunter, aplausos virtuales)?",
      "¿Mantuviste un clima seguro donde equivocarse fue recibido con naturalidad y buen humor?"
    ],
    keywords: [
      "FEEDBACK_CONSTRUCTIVO",
      "REFUERZO_POSITIVO",
      "ESTRELLAS_KODLAND",
      "CULTURA_DEL_ERROR",
      "MOTIVACION_INFANTIL"
    ],
    tipICS: "El refuerzo positivo verbal activa la dopamina y la memoria asociativa de éxito; es el indicador con mayor correlación con la renovación de membresías en Kodland.",
    templates: {
      cumple: "Ambiente cálido y motivador con felicitaciones específicas por esfuerzo y creatividad. Niños felices y empoderados.",
      parcial: "Se dio feedback correcto pero genérico ('bien', 'buen trabajo') sin resaltar el logro específico de cada niño.",
      nocumple: "Comentarios secos, falta de calidez o corrección punitiva que desanimó la iniciativa de los estudiantes."
    },
    quickNoteTemplates: [
      "Ambiente cálido y motivador con felicitaciones específicas por esfuerzo y creatividad. Niños felices y empoderados.",
      "Se dio feedback correcto pero genérico ('bien', 'buen trabajo') sin resaltar el logro específico de cada niño.",
      "Comentarios secos, falta de calidez o corrección punitiva que desanimó la iniciativa de los estudiantes."
    ]
  },
  {
    id: "c-norm-cierre",
    category: "Retención y Cierre",
    title: "Cierre atractivo y cuidado de los últimos 5 minutos",
    description: "Finalización con resumen de los niños, guardado verificado de proyectos y gancho de intriga (Cliffhanger) para la próxima sesión.",
    sessionTypes: ["normal"],
    questions: [
      "¿Detuviste la escritura de código nuevo a partir del minuto 53 para iniciar el ritual de cierre?",
      "¿Aseguraste que cada alumno guardara su archivo/proyecto en la plataforma o nube?",
      "¿Pediste a los alumnos compartir qué fue lo que más disfrutaron crear en la jornada?",
      "¿Lanzaste un cliffhanger o avance emocionante de lo que construirán en la siguiente clase?",
      "¿Te despediste con entusiasmo recordando con precisión el día y la hora del próximo encuentro?"
    ],
    keywords: [
      "CIERRE_ATRACTIVO",
      "ULTIMOS_5_MIN",
      "CLIFFHANGER_FINAL",
      "GUARDADO_SEGURO",
      "PROXIMA_MISION"
    ],
    tipICS: "Los últimos 5 minutos determinan la 'memoria pico-final' de la experiencia; un cliffhanger bien ejecutado eleva la asistencia de la siguiente semana por encima del 96%.",
    templates: {
      cumple: "Cierre redondo: proyectos guardados, mini-resumen de los niños, cliffhanger emocionante y despedida enérgica.",
      parcial: "Se guardó el proyecto pero se cortó abruptamente la llamada sin resumen ni expectativa para la próxima clase.",
      nocumple: "La clase terminó tarde, sin guardar proyectos o con despedida apresurada y desordenada."
    },
    quickNoteTemplates: [
      "Cierre redondo: proyectos guardados, mini-resumen de los niños, cliffhanger emocionante y despedida enérgica.",
      "Se guardó el proyecto pero se cortó abruptamente la llamada sin resumen ni expectativa para la próxima clase.",
      "La clase terminó tarde, sin guardar proyectos o con despedida apresurada y desordenada."
    ]
  },
  {
    id: "c-norm-evidencias",
    category: "Gestión Administrativa y QA",
    title: "Evidencias, asistencia y reporte técnico",
    description: "Registro puntual de asistencia, capturas de proyectos en plataforma y reporte individualizado para feedback a familias.",
    sessionTypes: ["normal"],
    questions: [
      "¿Registraste la asistencia oficial y puntualidad de cada alumno en el portal de Kodland?",
      "¿Capturaste evidencias visuales (pantallazos de proyectos o grabaciones) según el protocolo?",
      "¿Documentaste incidencias técnicas o de comportamiento para seguimiento del Team Lead?",
      "¿Redactaste comentarios individuales claros sobre el avance del alumno para los reportes a familias?",
      "¿Cerraste las salas de breakout y la videollamada de forma ordenada y segura?"
    ],
    keywords: [
      "REPORTE_TECNICO",
      "REGISTRO_ASISTENCIA",
      "EVIDENCIAS_PROYECTO",
      "FEEDBACK_FAMILIAS",
      "PROTOCOLO_KODLAND"
    ],
    tipICS: "El registro impecable de asistencia y comentarios objetivos nutre los reportes automáticos que reciben los padres; QA audita este rubro para validar la consistencia total del ICS.",
    templates: {
      cumple: "Asistencia y reporte completados a tiempo con comentarios detallados y capturas del avance de cada alumno.",
      parcial: "Asistencia registrada pero notas de avance breves o incompletas sin detalles específicos del progreso.",
      nocumple: "Falta de reporte en el sistema o registro extemporáneo después de las 24 horas reglamentarias."
    },
    quickNoteTemplates: [
      "Asistencia y reporte completados a tiempo con comentarios detallados y capturas del avance de cada alumno.",
      "Asistencia registrada pero notas de avance breves o incompletas sin detalles específicos del progreso.",
      "Falta de reporte en el sistema o registro extemporáneo después de las 24 horas reglamentarias."
    ]
  },

  // ---------------------------------------------------------------------------
  // B. GRADUACIÓN (10 Criterios)
  // ---------------------------------------------------------------------------
  {
    id: "c-grad-bienvenida",
    category: "Apertura y Protocolo",
    title: "Bienvenida protocolar y conexión con familias",
    description: "Inicio formal y emotivo agradeciendo la presencia de padres y estableciendo el tono de celebración para los graduados.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Iniciaste puntual dando la bienvenida con calidez a los alumnos y a los padres de familia presentes?",
      "¿Agradeciste a las familias por su confianza y acompañamiento durante todo el trayecto formativo?",
      "¿Verificaste que todos los invitados tuvieran audio y video listos para disfrutar de la ceremonia?",
      "¿Presentaste el propósito de la sesión: celebrar los logros y la creatividad de los graduados?",
      "¿Generaste un ambiente festivo y solemne a la vez, destacando el esfuerzo de los niños?"
    ],
    keywords: [
      "BIENVENIDA_FAMILIAS",
      "PROTOCOLO_GRADUACION",
      "CONEXION_EMOCIONAL",
      "AGRADECIMIENTO_PADRES",
      "APERTURA_FESTIVA"
    ],
    tipICS: "La presencia y bienvenida a las familias en la graduación consolida la fidelización institucional; el NPS post-graduación impacta de forma directa la renovación en el siguiente ciclo.",
    templates: {
      cumple: "Bienvenida cordial y emotiva con asistencia familiar activa. Ambiente de fiesta y orgullo compartido desde el min 1.",
      parcial: "Bienvenida formal pero con poca interacción con los padres presentes en la sala virtual.",
      nocumple: "No se reconoció a las familias presentes o se inició la sesión como si fuera una clase común."
    },
    quickNoteTemplates: [
      "Bienvenida cordial y emotiva con asistencia familiar activa. Ambiente de fiesta y orgullo compartido desde el min 1.",
      "Bienvenida formal pero con poca interacción con los padres presentes en la sala virtual.",
      "No se reconoció a las familias presentes o se inició la sesión como si fuera una clase común."
    ]
  },
  {
    id: "c-grad-encuadre",
    category: "Estructura y Organización",
    title: "Presentación de la agenda y reglas de graduación",
    description: "Estructuración del orden del día, tiempos de exhibición individual y reglas de aplausos y respeto mutuo.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Presentaste el orden del día y el tiempo estimado para cada presentación de proyecto?",
      "¿Explicaste cómo funcionará la ronda de preguntas, felicitaciones y la entrega de diplomas?",
      "¿Fomentaste el respeto y la escucha activa pidiendo aplausos virtuales para cada compañero?",
      "¿Comprobaste el orden de los expositores asegurándote de que todos conocieran su turno?",
      "¿Infundiste tranquilidad a los alumnos recordándoles que es un espacio de celebración, no un examen?"
    ],
    keywords: [
      "AGENDA_GRADUACION",
      "ORDEN_EXPOSITORES",
      "REGLAS_DE_CONVIVENCIA",
      "CLIMA_DE_CONFIANZA",
      "PROTOCOLO_SHOWCASE"
    ],
    tipICS: "Una agenda transparente reduce la ansiedad escénica del niño y garantiza que cada alumno cuente con el mismo tiempo de protagonismo en pantalla.",
    templates: {
      cumple: "Agenda y dinámicas explicadas con claridad. Alumnos y padres atentos, tranquilos y listos para aplaudir.",
      parcial: "Se dio la agenda pero hubo dudas sobre los tiempos individuales de cada alumno.",
      nocumple: "Falta de orden estructurado, provocando confusión en el orden de las presentaciones."
    },
    quickNoteTemplates: [
      "Agenda y dinámicas explicadas con claridad. Alumnos y padres atentos, tranquilos y listos para aplaudir.",
      "Se dio la agenda pero hubo dudas sobre los tiempos individuales de cada alumno.",
      "Falta de orden estructurado, provocando confusión en el orden de las presentaciones."
    ]
  },
  {
    id: "c-grad-showcase",
    category: "Showcase y Habilidades Técnicas",
    title: "Exposición individual y defensa de proyectos",
    description: "Cada alumno comparte pantalla, demuestra la lógica de su código y responde sobre su proceso creativo con autonomía.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Cada estudiante compartió pantalla y presentó su proyecto final de manera autónoma?",
      "¿El alumno explicó el funcionamiento general, la mecánica de juego y el código detrás de su creación?",
      "¿Le diste pie al alumno para hablar sobre el desafío más complejo que logró resolver?",
      "¿Facilitaste la presentación interviniendo solo como anfitrión sin robarle la palabra?",
      "¿Se respetó el tiempo asignado para que ningún proyecto quedara sin exhibición completa?"
    ],
    keywords: [
      "DEFENSA_PROYECTO",
      "AUTONOMIA_ALUMNO",
      "LOGICA_DE_CODIGO",
      "EXPOSICION_ORAL",
      "PROTAGONISMO_INFANTIL"
    ],
    tipICS: "Ver a su hijo defender código con solvencia es el mayor detonador de valor percibido por las familias; eleva la tasa de retención por encima del 92%.",
    templates: {
      cumple: "Cada alumno expuso con fluidez su código y proyecto. Demostraron dominio técnico y orgullo por su trabajo.",
      parcial: "El alumno presentó el juego pero no profundizó en la explicación de la lógica o dependió mucho del tutor.",
      nocumple: "Presentaciones apresuradas, desordenadas o el tutor explicó el proyecto en lugar del estudiante."
    },
    quickNoteTemplates: [
      "Cada alumno expuso con fluidez su código y proyecto. Demostraron dominio técnico y orgullo por su trabajo.",
      "El alumno presentó el juego pero no profundizó en la explicación de la lógica o dependió mucho del tutor.",
      "Presentaciones apresuradas, desordenadas o el tutor explicó el proyecto en lugar del estudiante."
    ]
  },
  {
    id: "c-grad-preguntas-padres",
    category: "Interacción con Padres",
    title: "Participación y preguntas abiertas a familias",
    description: "Espacio de diálogo abierto donde los padres felicitan a sus hijos y comparten su testimonio sobre el avance visto en casa.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Invitaste activamente a los padres o tutores a comentar sobre el proyecto presentado por su hijo?",
      "¿Formulaste preguntas cálidas a las familias sobre los cambios que han visto en el niño durante el curso?",
      "¿Permitiste que otros compañeros del grupo hicieran preguntas constructivas al expositor?",
      "¿Agradeciste cada intervención familiar reforzando el impacto del apoyo en el hogar?",
      "¿Mantuviste un ritmo fluido evitando que una sola familia monopolizara el tiempo de preguntas?"
    ],
    keywords: [
      "FEEDBACK_PADRES",
      "PREGUNTAS_FAMILIARES",
      "INTERACCION_COMUNIDAD",
      "VALOR_PERCIBIDO",
      "DIALOGO_POSITIVO"
    ],
    tipICS: "Involucrar activamente la voz de los padres durante la graduación multiplica el apego emocional a Kodland y previene cancelaciones sorpresivas.",
    templates: {
      cumple: "Participación familiar emotiva y espontánea. Los padres expresaron orgullo y agradecieron el trabajo docente.",
      parcial: "Solo un padre participó o las preguntas fueron muy cerradas sin generar conversación nutritiva.",
      nocumple: "No se dio espacio de palabra a las familias o se ignoraron las muestras de interacción en el chat."
    },
    quickNoteTemplates: [
      "Participación familiar emotiva y espontánea. Los padres expresaron orgullo y agradecieron el trabajo docente.",
      "Solo un padre participó o las preguntas fueron muy cerradas sin generar conversación nutritiva.",
      "No se dio espacio de palabra a las familias o se ignoraron las muestras de interacción en el chat."
    ]
  },
  {
    id: "c-grad-evaluacion-habilidades",
    category: "Evaluación Pedagógica Integral",
    title: "Reconocimiento de competencias blandas y lógicas",
    description: "Explicitación docente del desarrollo de pensamiento computacional, resiliencia, creatividad y trabajo autónomo.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Mencionaste habilidades blandas específicas desarrolladas por el alumno (resiliencia, paciencia, creatividad)?",
      "¿Destacaste el razonamiento computacional alcanzado (bucles, eventos, condicionales, variables)?",
      "¿Señalaste cómo el alumno superó momentos de dificultad técnica a lo largo de las clases?",
      "¿Reconociste el estilo propio y la originalidad visual o narrativa de cada proyecto?",
      "¿Conectaste esas habilidades con aplicaciones para su vida académica y futura?"
    ],
    keywords: [
      "HABILIDADES_BLANDAS",
      "PENSAMIENTO_COMPUTACIONAL",
      "RESILIENCIA_TECNICA",
      "CREATIVIDAD_DIGITAL",
      "EVALUACION_INTEGRAL"
    ],
    tipICS: "Explicitar las competencias blandas adquiridas demuestra a los padres que Kodland no solo enseña código, sino mentalidad de crecimiento, pilar del ICS institucional.",
    templates: {
      cumple: "Menciones personalizadas impecables: se destacó la resiliencia y el pensamiento analítico de cada graduado.",
      parcial: "Comentarios centrados únicamente en lo visual sin reconocer la evolución del pensamiento lógico.",
      nocumple: "Reconocimientos impersonales idénticos para todos sin individualizar el esfuerzo real del alumno."
    },
    quickNoteTemplates: [
      "Menciones personalizadas impecables: se destacó la resiliencia y el pensamiento analítico de cada graduado.",
      "Comentarios centrados únicamente en lo visual sin reconocer la evolución del pensamiento lógico.",
      "Reconocimientos impersonales idénticos para todos sin individualizar el esfuerzo real del alumno."
    ]
  },
  {
    id: "c-grad-feedback-alumno",
    category: "Experiencia del Alumno",
    title: "Feedback individualizado y momentos 'Wow'",
    description: "Elogio nominal emotivo con anécdotas de crecimiento personal que marcan un hito memorable para el estudiante.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Dedicaste al menos 60 segundos exclusivos para felicitar nominalmente a cada graduado?",
      "¿Resaltaste una anécdota o hito memorable que el alumno logró durante el ciclo?",
      "¿Incentivaste que el grupo celebrara con reacciones de aplausos, música o confeti virtual?",
      "¿Lograste que el alumno se sintiera visiblemente orgulloso y motivado por lo que creó?",
      "¿Utilizaste un tono de voz celebratorio, afectuoso y memorable?"
    ],
    keywords: [
      "MOMENTO_WOW",
      "ELOGIO_NOMINAL",
      "CELEBRACION_VIRTUAL",
      "AUTOESTIMA_CREADORA",
      "MEMORIA_EMOCIONAL"
    ],
    tipICS: "El 'momento Wow' fija el ancla emocional más potente del ciclo; un estudiante conmovido y orgulloso pide continuar en el siguiente nivel sin dudar.",
    templates: {
      cumple: "Momento Wow para cada niño con anécdotas reales y festejo colectivo inolvidable.",
      parcial: "Feedback positivo pero algo apresurado por presión de tiempo en los últimos expositores.",
      nocumple: "Falta de entusiasmo o trato indiferente que no diferenció la graduación de un día regular."
    },
    quickNoteTemplates: [
      "Momento Wow para cada niño con anécdotas reales y festejo colectivo inolvidable.",
      "Feedback positivo pero algo apresurado por presión de tiempo en los últimos expositores.",
      "Falta de entusiasmo o trato indiferente que no diferenció la graduación de un día regular."
    ]
  },
  {
    id: "c-grad-diplomas",
    category: "Certificación y Reconocimiento",
    title: "Entrega solemne de diplomas y certificados Kodland",
    description: "Presentación formal en pantalla de los diplomas oficiales con lectura solemne y tiempo para fotografías familiares.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Proyectaste el certificado oficial personalizado de cada estudiante en pantalla compartida?",
      "¿Leíste el diploma con solemnidad destacando el curso y las competencias acreditadas?",
      "¿Diste tiempo a las familias para tomar fotografías o capturas de pantalla del momento?",
      "¿Explicaste cómo y cuándo recibirán el documento digital en sus correos o plataforma?",
      "¿Pediste un aplauso grupal al completar la lectura de cada diploma?"
    ],
    keywords: [
      "DIPLOMA_OFICIAL",
      "CERTIFICACION_KODLAND",
      "SOLEMNIDAD_DOCENTE",
      "FOTO_DEL_DIPLOMA",
      "RECONOCIMIENTO_FORMAL"
    ],
    tipICS: "La visualización solemne del diploma materializa el retorno de inversión para la familia, garantizando calificaciones máximas en las auditorías QA de graduaciones.",
    templates: {
      cumple: "Entrega protocolar hermosa de cada certificado con tiempo para fotos y ovación de los presentes.",
      parcial: "Se mostraron los diplomas pero de forma veloz sin permitir que las familias hicieran capturas.",
      nocumple: "No se proyectaron los diplomas oficiales o hubo errores en los nombres de los estudiantes."
    },
    quickNoteTemplates: [
      "Entrega protocolar hermosa de cada certificado con tiempo para fotos y ovación de los presentes.",
      "Se mostraron los diplomas pero de forma veloz sin permitir que las familias hicieran capturas.",
      "No se proyectaron los diplomas oficiales o hubo errores en los nombres de los estudiantes."
    ]
  },
  {
    id: "c-grad-ruta-futuro",
    category: "Continuidad y Roadmap",
    title: "Presentación del siguiente nivel del itinerario formativo",
    description: "Proyección clara del mapa de aprendizaje futuro, nuevos lenguajes/herramientas y motivación para continuar el trayecto.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Presentaste con entusiasmo las tecnologías y proyectos del siguiente módulo/curso Kodland?",
      "¿Conectaste lo aprendido hoy con lo que serán capaces de crear en la siguiente etapa?",
      "¿Mostraste ejemplos visuales atractivos o clips del nuevo nivel que despertaran curiosidad?",
      "¿Explicaste a los padres de manera clara cómo continuar la formación de su hijo?",
      "¿Resolviste dudas de las familias sobre horarios o modalidades del nuevo ciclo formativo?"
    ],
    keywords: [
      "ITINERARIO_FORMATIVO",
      "SIGUIENTE_NIVEL",
      "CONTINUIDAD_EDUCATIVA",
      "ROADMAP_KODLAND",
      "RETENCION_CICLO"
    ],
    tipICS: "Presentar el roadmap formativo con claridad eleva la tasa de reinscripción por encima del 85%; es la métrica de negocio más vigilada en conjunto con el ICS.",
    templates: {
      cumple: "Roadmap del siguiente nivel presentado con clips increíbles. Alumnos y padres entusiasmados por empezar el próximo curso.",
      parcial: "Se mencionó el siguiente nivel pero sin material visual convincente que despertara el deseo de continuar.",
      nocumple: "Omisión total de la ruta de continuidad formativa o información vaga sobre cómo seguir estudiando."
    },
    quickNoteTemplates: [
      "Roadmap del siguiente nivel presentado con clips increíbles. Alumnos y padres entusiasmados por empezar el próximo curso.",
      "Se mencionó el siguiente nivel pero sin material visual convincente que despertara el deseo de continuar.",
      "Omisión total de la ruta de continuidad formativa o información vaga sobre cómo seguir estudiando."
    ]
  },
  {
    id: "c-grad-foto-cierre",
    category: "Cierre y Comunidad",
    title: "Foto grupal, aplausos y despedida memorable",
    description: "Captura de recuerdo grupal con gestos temáticos, felicitaciones por micrófono o chat y despedida conmovedora.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Invitaste a todos los alumnos y familias a sumarse a la fotografía oficial de recuerdo y compartir felicitaciones?",
      "¿Coordinaste una pose divertida o gesto temático (ej. saludo de programadores, pulgares arriba)?",
      "¿Capturaste múltiples fotografías asegurando que los nombres y proyectos quedaran registrados?",
      "¿Despediste la sesión con palabras de inspiración y agradecimiento sincero?",
      "¿Permitiste un minuto final de micrófonos abiertos o chat festivo para felicitaciones espontáneas?"
    ],
    keywords: [
      "FOTO_GRUPAL",
      "DESPEDIDA_MEMORABLE",
      "COMUNIDAD_KODLAND",
      "APLAUSO_FINAL",
      "MOMENTO_FAMILIAR"
    ],
    tipICS: "La fotografía grupal y la despedida festiva consolidan la experiencia emocional; recuerda que el algoritmo ICS mide presencia y participación por voz o chat/reacciones, por lo que las cámaras apagadas nunca restan puntos.",
    templates: {
      cumple: "Cierre apoteósico: foto grupal emotiva, participación entusiasta en chat y voz, y aplauso unánime de familias.",
      parcial: "Se tomó la foto pero faltó invitar a las familias a unirse o no todos pudieron despedirse por voz o chat.",
      nocumple: "No se organizó fotografía grupal o la llamada se cerró de golpe tras la entrega de diplomas."
    },
    quickNoteTemplates: [
      "Cierre apoteósico: foto grupal emotiva, participación entusiasta en chat y voz, y aplauso unánime de familias.",
      "Se tomó la foto pero faltó invitar a las familias a unirse o no todos pudieron despedirse por voz o chat.",
      "No se organizó fotografía grupal o la llamada se cerró de golpe tras la entrega de diplomas."
    ]
  },
  {
    id: "c-grad-reporte-final",
    category: "Gestión Administrativa y QA",
    title: "Reporte de graduación y entrega de evidencias a QA",
    description: "Carga de fotos grupales, enlaces de proyectos finales, actualización del estado a 'Graduado' y reporte a asesores.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Subiste las fotos grupales y enlaces de proyectos al expediente de la clase en el portal de Kodland?",
      "¿Marcaste el estado de 'Graduado' a cada alumno con su registro de asistencia final?",
      "¿Enviaste las recomendaciones de continuidad personalizadas al equipo de retención/asesores?",
      "¿Reportaste cualquier incidencia o feedback especial expresado por las familias en la sesión?",
      "¿Completaste el formulario de cierre dentro del plazo reglamentario posterior a la ceremonia?"
    ],
    keywords: [
      "REPORTE_GRADUACION",
      "EXPEDIENTE_KODLAND",
      "EVIDENCIAS_QA",
      "SEGUIMIENTO_RETENCION",
      "REGISTRO_ADMINISTRATIVO"
    ],
    tipICS: "La entrega de evidencias de graduación en las primeras 12 horas asegura el flujo de renovación de matrículas y protege la calificación del tutor en la nómina QA.",
    templates: {
      cumple: "Reporte y evidencias de graduación cargados de inmediato con fotos, enlaces y notas individuales.",
      parcial: "Reporte enviado pero faltaron fotos de la sesión o notas sobre el interés de continuidad de los alumnos.",
      nocumple: "Falta de reporte de graduación en plataforma o demora mayor a 24 horas que afectó la gestión de retención."
    },
    quickNoteTemplates: [
      "Reporte y evidencias de graduación cargados de inmediato con fotos, enlaces y notas individuales.",
      "Reporte enviado pero faltaron fotos de la sesión o notas sobre el interés de continuidad de los alumnos.",
      "Falta de reporte de graduación en plataforma o demora mayor a 24 horas que afectó la gestión de retención."
    ]
  },

  // ---------------------------------------------------------------------------
  // C. CODE & GAME (10 Criterios)
  // ---------------------------------------------------------------------------
  {
    id: "c-cg-onboarding",
    category: "Onboarding y Gamificación",
    title: "Inicio electrizante y reglas de la arena de juego",
    description: "Arranque dinámico con música/ambientación temática gamer, verificación rápida de accesos y reglas de juego limpio.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Iniciaste en el minuto 0 con música o ambientación temática de videojuego?",
      "¿Presentaste las reglas de la arena de forma lúdica (juego limpio, cooperación y respeto)?",
      "¿Confirmaste que todos los estudiantes estuvieran conectados a la plataforma o servidor del juego?",
      "¿Estableciste la meta de la sesión: desbloquear niveles resolviendo desafíos de programación?",
      "¿Inyectaste entusiasmo y energía alta desde las primeras palabras de bienvenida?"
    ],
    keywords: [
      "INICIO_ELECTRIZANTE",
      "ARENA_DE_JUEGO",
      "JUEGO_LIMPIO",
      "AMBIENTACION_GAMER",
      "ENERGIA_ALTA"
    ],
    tipICS: "Un arranque electrizante capta el 100% de atención del perfil gamer; el algoritmo ICS detecta el nivel de permanencia sin fugas de atención en los primeros 5 minutos.",
    templates: {
      cumple: "Inicio lleno de energía con temática gamer. Reglas claras y todos los alumnos conectados y listos para jugar.",
      parcial: "Se explicó la dinámica pero hubo retraso de 4 minutos esperando a que un alumno abriera el juego.",
      nocumple: "Inicio desganado o sin ambientación lúdica, tratando la sesión especial como una clase teórica ordinaria."
    },
    quickNoteTemplates: [
      "Inicio lleno de energía con temática gamer. Reglas claras y todos los alumnos conectados y listos para jugar.",
      "Se explicó la dinámica pero hubo retraso de 4 minutos esperando a que un alumno abriera el juego.",
      "Inicio desganado o sin ambientación lúdica, tratando la sesión especial como una clase teórica ordinaria."
    ]
  },
  {
    id: "c-cg-narrativa",
    category: "Narrativa y Storytelling",
    title: "Narrativa inmersiva y retos gamificados",
    description: "Construcción de una trama atractiva (escape room, misión espacial, hackathon) donde el código es la llave para avanzar.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Presentaste una historia envolvente (misión espacial, rescate cibernético, escape room de código)?",
      "¿Los retos de programación estaban justificados por la trama y los personajes del juego?",
      "¿Mantuviste vivo el rol de los alumnos como 'superagentes' o 'magos del código' durante la sesión?",
      "¿Utilizaste elementos visuales, efectos sonoros o metáforas narrativas para cada desafío?",
      "¿Adaptaste la historia a los intereses contemporáneos del grupo (Minecraft, Roblox, IA, etc.)?"
    ],
    keywords: [
      "NARRATIVA_INMERSIVA",
      "STORYTELLING_GAMER",
      "MISION_TEMATICA",
      "SUPERAGENTES_CODIGO",
      "INVOLUCRAMIENTO_LUDICO"
    ],
    tipICS: "El storytelling estimula la concentración intrínseca de los niños, elevando las respuestas voluntarias en chat y micrófono, métrica principal del ICS de participación.",
    templates: {
      cumple: "Storytelling brillante: los alumnos se sintieron dentro de una aventura real programando para ganar.",
      parcial: "Hubo historia al inicio pero se olvidó a la mitad de la clase convirtiéndose en ejercicios sueltos.",
      nocumple: "Sin hilo narrativo ni elementos lúdicos; se presentaron ejercicios de código sin contexto divertido."
    },
    quickNoteTemplates: [
      "Storytelling brillante: los alumnos se sintieron dentro de una aventura real programando para ganar.",
      "Hubo historia al inicio pero se olvidó a la mitad de la clase convirtiéndose en ejercicios sueltos.",
      "Sin hilo narrativo ni elementos lúdicos; se presentaron ejercicios de código sin contexto divertido."
    ]
  },
  {
    id: "c-cg-dinamica-equipos",
    category: "Cooperación y Dinámica de Grupo",
    title: "Dinámica de equipos y cooperación activa",
    description: "Distribución de roles rotativos (estratega, tester, piloto) fomentando ayuda mutua y triunfos compartidos.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Organizaste a los alumnos en equipos equilibrados o en modo cooperativo contra el reto?",
      "¿Asignaste roles claros y rotativos (el estratega, el tester, el programador en jefe)?",
      "¿Fomentaste que los estudiantes se ayudaran entre sí compartiendo pistas y código por chat?",
      "¿Supervisaste las salas o dinámicas para evitar que un solo miembro hiciera todo el trabajo?",
      "¿Celebraste victorias colectivas más que victorias individuales egoístas?"
    ],
    keywords: [
      "DINAMICA_EQUIPOS",
      "COOPERACION_ACTIVA",
      "ROLES_GAMIFICADOS",
      "AYUDA_MUTUA",
      "ESPIRITU_COLABORATIVO"
    ],
    tipICS: "El trabajo cooperativo previene la frustración del estudiante rezagado y distribuye la participación de forma homogénea, optimizando el índice de equidad en la auditoría QA.",
    templates: {
      cumple: "Gran espíritu de equipo: los niños colaboraron compartiendo pistas y celebraron juntos cada nivel superado.",
      parcial: "Un alumno resolvió casi todo el reto antes que los demás sin esperar al resto de sus compañeros.",
      nocumple: "Competencia agresiva o desorden donde los alumnos más tímidos quedaron excluidos de la dinámica."
    },
    quickNoteTemplates: [
      "Gran espíritu de equipo: los niños colaboraron compartiendo pistas y celebraron juntos cada nivel superado.",
      "Un alumno resolvió casi todo el reto antes que los demás sin esperar al resto de sus compañeros.",
      "Competencia agresiva o desorden donde los alumnos más tímidos quedaron excluidos de la dinámica."
    ]
  },
  {
    id: "c-cg-desafios-progresivos",
    category: "Diseño Instruccional Adaptativo",
    title: "Retos de código de dificultad escalonada",
    description: "Gradación de desafíos desde una victoria temprana en 5 minutos hasta el reto 'Boss' final para mantener el flujo óptimo.",
    sessionTypes: ["codegame"],
    questions: [
      "¿El primer reto fue sencillo y rápido para generar una victoria temprana de confianza en 5 minutos?",
      "¿La dificultad aumentó de forma progresiva según los alumnos fueron dominando los conceptos?",
      "¿Tuviste preparados desafíos 'Boss / Jefe Final' para los alumnos con ritmo más avanzado?",
      "¿Ofreciste pistas escalonadas sin dar la respuesta completa ante alumnos atascados?",
      "¿Los retos exigieron aplicar pensamiento lógico real (condicionales, bucles, coordenadas)?"
    ],
    keywords: [
      "DIFICULTAD_ESCALONADA",
      "VICTORIA_TEMPRANA",
      "RETO_JEFE_FINAL",
      "SCAFFOLDING_LUDICO",
      "LOGICA_APLICADA"
    ],
    tipICS: "La dificultad progresiva mantiene al alumno en estado de 'Flow' (ni aburrido ni sobrepasado), métrica clave para evitar deserciones por frustración silenciosa.",
    templates: {
      cumple: "Retos perfectamente balanceados. Victoria temprana rápida y desafío final que exigió lo mejor de todos.",
      parcial: "Un reto intermedio resultó demasiado difícil y detuvo a varios alumnos durante más de 8 minutos.",
      nocumple: "Retos mal calibrados: o fueron excesivamente fáciles o tan difíciles que generaron frustración."
    },
    quickNoteTemplates: [
      "Retos perfectamente balanceados. Victoria temprana rápida y desafío final que exigió lo mejor de todos.",
      "Un reto intermedio resultó demasiado difícil y detuvo a varios alumnos durante más de 8 minutos.",
      "Retos mal calibrados: o fueron excesivamente fáciles o tan difíciles que generaron frustración."
    ]
  },
  {
    id: "c-cg-monitoreo-vivo",
    category: "Soporte Técnico en Vivo",
    title: "Monitoreo en vivo y asistencia rápida en batalla",
    description: "Inspección constante de la arena de juego para rescatar alumnos con fallos técnicos en menos de 60 segundos.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Monitoreaste los tableros o pantallas de todos los participantes sin perder la visión grupal?",
      "¿Interviniste en menos de 60 segundos ante caídas de conexión o bugs inesperados?",
      "¿Utilizaste un lenguaje de 'asistencia de combate' en lugar de regaño o reproche técnico?",
      "¿Mantuviste la sesión en marcha para el grupo mientras rescatabas técnicamente a un jugador?",
      "¿Comprobaste que los alumnos tuvieran sus proyectos funcionales para la prueba final?"
    ],
    keywords: [
      "MONITOREO_EN_VIVO",
      "ASISTENCIA_BATALLA",
      "RESPUESTA_60_SEG",
      "PLAN_DE_RESCATE",
      "CONTINUIDAD_OPERATIVA"
    ],
    tipICS: "En sesiones Code & Game, los tiempos muertos técnicos de más de 2 minutos reducen la percepción de calidad en un 50%; la asistencia ágil mantiene el ICS arriba de 95%.",
    templates: {
      cumple: "Monitoreo impecable en vivo. Errores y bugs técnicos solucionados en segundos sin pausar la diversión.",
      parcial: "Un fallo de pantalla de un alumno retrasó la ronda de retos durante un par de minutos para todos.",
      nocumple: "El tutor se ausentó de la moderación por resolver un problema técnico individual abandonando al grupo."
    },
    quickNoteTemplates: [
      "Monitoreo impecable en vivo. Errores y bugs técnicos solucionados en segundos sin pausar la diversión.",
      "Un fallo de pantalla de un alumno retrasó la ronda de retos durante un par de minutos para todos.",
      "El tutor se ausentó de la moderación por resolver un problema técnico individual abandonando al grupo."
    ]
  },
  {
    id: "c-cg-puntuacion-transparente",
    category: "Gamificación y Transparencia",
    title: "Sistema de puntos y ranking transparente",
    description: "Mantenimiento de un marcador visible que premia creatividad, esfuerzo y resolución de bugs sin generar frustración.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Explicaste de forma clara y transparente cómo se ganan los puntos de juego y bonificaciones?",
      "¿Otorgaste puntos tanto por resolver el código como por creatividad y trabajo en equipo?",
      "¿Actualizaste el marcador o ranking en vivo en momentos estratégicos de la sesión?",
      "¿Evitaste penalizaciones o pérdida de puntos que desmotivaran a los participantes?",
      "¿Aseguraste que todos los alumnos acumularan puntos y sintieran que estaban sumando al marcador?"
    ],
    keywords: [
      "SISTEMA_DE_PUNTOS",
      "RANKING_TRANSPARENTE",
      "PUNTOS_CREATIVIDAD",
      "BONIFICACIONES_EXTRA",
      "GAMIFICACION_JUSTA"
    ],
    tipICS: "Un sistema de puntos inclusivo que premia el esfuerzo y no solo la velocidad evita que los lentos se rindan, resguardando la métrica de participación equitativa en auditorías.",
    templates: {
      cumple: "Puntuación visible, justa y emocionante. Todos sumaron puntos y compitieron sanamente con entusiasmo.",
      parcial: "El marcador no se actualizó periódicamente, perdiendo impacto motivacional a mitad de la sesión.",
      nocumple: "Puntuaciones confusas o injustas que generaron reclamos o desmotivaron a los alumnos rezagados."
    },
    quickNoteTemplates: [
      "Puntuación visible, justa y emocionante. Todos sumaron puntos y compitieron sanamente con entusiasmo.",
      "El marcador no se actualizó periódicamente, perdiendo impacto motivacional a mitad de la sesión.",
      "Puntuaciones confusas o injustas que generaron reclamos o desmotivaron a los alumnos rezagados."
    ]
  },
  {
    id: "c-cg-festejo-logros",
    category: "Refuerzo y Celebración",
    title: "Reconocimiento de jugadas maestras y creatividad",
    description: "Narración estilo caster gamer ensalzando las mejores tácticas de código y otorgando títulos honoríficos.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Hiciste comentarios de caster/relator deportivo destacando las mejores soluciones de código?",
      "¿Reconociste jugadas creativas inesperadas que los niños implementaron en sus proyectos?",
      "¿Otorgaste títulos honoríficos divertidos (ej. 'El francotirador del bucle', 'El hacker estratega')?",
      "¿Promoviste aplausos o celebraciones virtuales cuando un equipo superó un reto difícil?",
      "¿Hiciste sentir a cada alumno como un protagonista de la arena de juego?"
    ],
    keywords: [
      "JUGADAS_MAESTRAS",
      "CASTER_GAMER",
      "TITULOS_HONORIFICOS",
      "RECONOCIMIENTO_CREATIVO",
      "OVACION_VIRTUAL"
    ],
    tipICS: "Narrar la sesión como un caster gamer eleva el nivel de engagement a cotas máximas; es el factor diferenciador que QA cataloga como excelencia docente Kodland.",
    templates: {
      cumple: "Narración electrizante de las jugadas. Títulos honoríficos que llenaron de orgullo y risas a los niños.",
      parcial: "Se reconocieron los logros pero con tono neutro sin aprovechar el potencial de narración lúdica.",
      nocumple: "Cero festejo de jugadas; la dinámica se sintió fría y monótona a pesar de ser un evento Code & Game."
    },
    quickNoteTemplates: [
      "Narración electrizante de las jugadas. Títulos honoríficos que llenaron de orgullo y risas a los niños.",
      "Se reconocieron los logros pero con tono neutro sin aprovechar el potencial de narración lúdica.",
      "Cero festejo de jugadas; la dinámica se sintió fría y monótona a pesar de ser un evento Code & Game."
    ]
  },
  {
    id: "c-cg-gestion-ritmo",
    category: "Gestión de Aula y Bienestar",
    title: "Control de energía y pausas tácticas",
    description: "Regulación de los picos de adrenalina con pausas de respiración y moderación sana de micrófonos.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Controlaste los picos de sobreexcitación manteniendo a los alumnos enfocados sin caos auditivo?",
      "¿Implementaste una pausa táctica de 60 segundos para estiramiento o respiración de concentración?",
      "¿Moderaste el uso del micrófono para que todos pudieran hablar por turnos sin gritos?",
      "¿Mantuviste la adrenalina alta sin perder el objetivo pedagógico de aprendizaje de código?",
      "¿Guiaste la transición suave del juego intenso hacia la consolidación y reflexión final?"
    ],
    keywords: [
      "CONTROL_ENERGIA",
      "PAUSA_TACTICA",
      "MODERACION_MICROFONO",
      "BIENESTAR_DIGITAL",
      "ENFOQUE_PEDAGOGICO"
    ],
    tipICS: "Saber regular la energía evita que la sesión se torne caótica, garantizando que los inspectores de calidad evalúen positivamente el dominio de grupo del tutor.",
    templates: {
      cumple: "Excelente modulación de energía: adrenalina en los retos y serenidad para escuchar las explicaciones.",
      parcial: "Momentos de exceso de ruido en micrófono que costó contener un par de veces durante los retos.",
      nocumple: "Pérdida de control del grupo: gritos en micrófono y desorden generalizado que impidió avanzar."
    },
    quickNoteTemplates: [
      "Excelente modulación de energía: adrenalina en los retos y serenidad para escuchar las explicaciones.",
      "Momentos de exceso de ruido en micrófono que costó contener un par de veces durante los retos.",
      "Pérdida de control del grupo: gritos en micrófono y desorden generalizado que impidió avanzar."
    ]
  },
  {
    id: "c-cg-podio-final",
    category: "Cierre y Retención",
    title: "Podio cooperativo, resumen y cliffhanger",
    description: "Cierre festivo donde todos celebran victorias conjuntas, resumen relámpago de lógica y gancho para el próximo evento.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Presentaste el podio o marcador final destacando las fortalezas únicas de cada equipo o jugador?",
      "¿Garantizaste que nadie se sintiera perdedor celebrando el logro colectivo de la misión?",
      "¿Hiciste un resumen relámpago donde los alumnos mencionaron qué truco de código aprendieron hoy?",
      "¿Lanzaste un adelanto o cliffhanger del próximo evento o módulo para mantener la expectativa alta?",
      "¿Aseguraste que todos guardaran sus proyectos y se despidieran con satisfacción?"
    ],
    keywords: [
      "PODIO_COOPERATIVO",
      "RESUMEN_RELAMPAGO",
      "CLIFFHANGER_GAMER",
      "CIERRE_MEMORABLE",
      "FIDELIZACION_KODLAND"
    ],
    tipICS: "Un podio donde todos ganan refuerza el vínculo emocional y deja al alumno esperando ansioso el próximo evento, blindando el ICS de continuidad.",
    templates: {
      cumple: "Podio épico con victoria compartida. Resumen de código claro y cliffhanger que dejó a todos pidiendo más.",
      parcial: "Se dio el podio pero se descuidó el resumen pedagógico de los conceptos aprendidos.",
      nocumple: "Cierre abrupto sin podio ni resumen, o dinámica competitiva que dejó a algunos niños tristes."
    },
    quickNoteTemplates: [
      "Podio épico con victoria compartida. Resumen de código claro y cliffhanger que dejó a todos pidiendo más.",
      "Se dio el podio pero se descuidó el resumen pedagógico de los conceptos aprendidos.",
      "Cierre abrupto sin podio ni resumen, o dinámica competitiva que dejó a algunos niños tristes."
    ]
  },
  {
    id: "c-cg-metricas-asistencia",
    category: "Gestión Administrativa y QA",
    title: "Registro de asistencia, puntajes y reporte QA",
    description: "Consolidación de puntajes, capturas de momentos estelares y reporte administrativo inmediato en la plataforma Kodland.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Registraste la asistencia y el puntaje alcanzado por cada alumno en el sistema de Kodland?",
      "¿Tomaste capturas del marcador final y de los momentos estelares de la sesión?",
      "¿Enviaste felicitaciones y resumen de la jornada en el chat del grupo o reporte a familias?",
      "¿Reportaste al Team Lead cualquier alumno con dificultades técnicas o de integración detectadas?",
      "¿Completaste la autoevaluación y el registro antes del cierre de tu jornada docente?"
    ],
    keywords: [
      "REPORTE_CODE_GAME",
      "REGISTRO_PUNTAJES",
      "EVIDENCIAS_BATALLA",
      "FEEDBACK_ESTELAR",
      "QA_COMPLIANCE"
    ],
    tipICS: "El reporte exhaustivo de sesiones especiales demuestra profesionalismo y asegura que el alumno sea canalizado al curso regular más afín a su desempeño.",
    templates: {
      cumple: "Reporte completo con asistencia, mejores puntajes y capturas enviado puntualmente a plataforma.",
      parcial: "Reporte enviado pero faltó registrar los puntajes individuales o las evidencias de los retos.",
      nocumple: "Falta de reporte en sistema o registro extemporáneo que impidió el seguimiento de los alumnos."
    },
    quickNoteTemplates: [
      "Reporte completo con asistencia, mejores puntajes y capturas enviado puntualmente a plataforma.",
      "Reporte enviado pero faltó registrar los puntajes individuales o las evidencias de los retos.",
      "Falta de reporte en sistema o registro extemporáneo que impidió el seguimiento de los alumnos."
    ]
  }
];

// =============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// =============================================================================

const STORAGE_KEYS = {
  CURRENT_STATE: "team4_kodland_current_checklist",
  HISTORY: "team4_tutor_ics_companion_v1"
};

const appState = {
  activeTab: "tab-checklist",
  sessionType: "normal",
  sessionGroup: "",
  criteriaStatus: {},      // { [id]: 'cumple' | 'parcial' | 'nocumple' | 'noaplica' }
  criteriaNotes: {},       // { [id]: string }
  openCriteria: {},        // { [id]: boolean } (colapsado por defecto)
  filterStatus: "all",     // 'all' | 'pending' | 'completed'
  searchQuery: "",
  rescuePanelOpen: false,
  history: []
};

// =============================================================================
// 3. INICIALIZACIÓN
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  loadHistory();
  setupEventListeners();
  renderAll();
});

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_STATE);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState.sessionType = parsed.sessionType || "normal";
      appState.sessionGroup = parsed.sessionGroup || "";
      appState.criteriaStatus = parsed.criteriaStatus || {};
      appState.criteriaNotes = parsed.criteriaNotes || {};
    }
  } catch (e) {
    console.error("Error al cargar estado previo:", e);
  }
}

function saveCurrentState() {
  try {
    const dataToSave = {
      sessionType: appState.sessionType,
      sessionGroup: appState.sessionGroup,
      criteriaStatus: appState.criteriaStatus,
      criteriaNotes: appState.criteriaNotes
    };
    localStorage.setItem(STORAGE_KEYS.CURRENT_STATE, JSON.stringify(dataToSave));
  } catch (e) {
    console.error("Error al guardar estado:", e);
  }
}

function loadHistory() {
  try {
    let raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!raw && localStorage.getItem("team4_kodland_history")) {
      raw = localStorage.getItem("team4_kodland_history");
    }
    if (raw) {
      appState.history = JSON.parse(raw);
    } else {
      appState.history = [];
    }
  } catch (e) {
    console.error("Error al cargar historial:", e);
    appState.history = [];
  }
  updateHistoryBadge();
}

function saveHistoryToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(appState.history));
  } catch (e) {
    console.error("Error guardando historial:", e);
  }
  updateHistoryBadge();
}

// =============================================================================
// 4. CONFIGURACIÓN DE EVENT LISTENERS
// =============================================================================

function setupEventListeners() {
  // Navegación de pestañas
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.tab;
      switchTab(targetId);
    });
  });

  // Selector de tipo de sesión
  const sessionTypeSelect = document.getElementById("sessionTypeSelect");
  if (sessionTypeSelect) {
    sessionTypeSelect.value = appState.sessionType;
    sessionTypeSelect.addEventListener("change", (e) => {
      appState.sessionType = e.target.value;
      saveCurrentState();
      renderCriteriaList();
      updateScoreMetrics();
      showToast(`Tipo de sesión cambiado a: ${sessionTypeSelect.options[sessionTypeSelect.selectedIndex].text}`);
    });
  }

  // Input de grupo / alumno
  const groupInput = document.getElementById("sessionGroupInput");
  if (groupInput) {
    groupInput.value = appState.sessionGroup;
    groupInput.addEventListener("input", (e) => {
      appState.sessionGroup = e.target.value;
      saveCurrentState();
    });
  }

  // Reiniciar Checklist
  const btnReset = document.getElementById("btnResetChecklist");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (confirm("¿Estás seguro de reiniciar las respuestas del checklist de la clase actual?")) {
        appState.criteriaStatus = {};
        appState.criteriaNotes = {};
        saveCurrentState();
        renderCriteriaList();
        updateScoreMetrics();
        showToast("Checklist reiniciado con éxito");
      }
    });
  }

  // Guardar en Historial
  const btnSaveSession = document.getElementById("btnSaveSession");
  if (btnSaveSession) {
    btnSaveSession.addEventListener("click", handleSaveSessionToHistory);
  }

  // Búsqueda y filtros
  const searchInput = document.getElementById("criteriaSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderCriteriaList();
    });
  }

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.filterStatus = btn.dataset.filter;
      renderCriteriaList();
    });
  });

  // Botón Expandir / Colapsar todos los criterios
  const btnToggleAll = document.getElementById("btnToggleAllCriteria");
  if (btnToggleAll) {
    btnToggleAll.addEventListener("click", () => {
      if (typeof window.toggleAllCriteria === "function") {
        window.toggleAllCriteria();
      }
    });
  }

  // Acciones Rápidas de Rescate en Vivo (Toggle sidebar)
  const btnRescueToggle = document.getElementById("btnQuickRescueToggle");
  const btnCloseRescue = document.getElementById("btnCloseRescue");
  const rescueSidebar = document.getElementById("rescueSidebar");

  if (btnRescueToggle && rescueSidebar) {
    btnRescueToggle.addEventListener("click", () => {
      rescueSidebar.scrollIntoView({ behavior: "smooth", block: "start" });
      rescueSidebar.style.outline = "3px solid var(--accent-yellow)";
      setTimeout(() => {
        rescueSidebar.style.outline = "none";
      }, 1500);
      showToast("Panel de Rescate en Vivo enfocado");
    });
  }

  if (btnCloseRescue && rescueSidebar) {
    btnCloseRescue.addEventListener("click", () => {
      rescueSidebar.classList.remove("open-mobile");
    });
  }

  // Historial: Exportar CSV, Exportar JSON, Importar JSON y Limpiar
  const btnExportCsv = document.getElementById("btnExportCsv");
  if (btnExportCsv) {
    btnExportCsv.addEventListener("click", handleExportCsv);
  }

  const btnExport = document.getElementById("btnExportHistory");
  if (btnExport) {
    btnExport.addEventListener("click", handleExportHistory);
  }

  const btnImportTrigger = document.getElementById("btnImportJsonTrigger");
  const fileInput = document.getElementById("importJsonFileInput");
  if (btnImportTrigger && fileInput) {
    btnImportTrigger.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleImportJson);
  }

  const btnClear = document.getElementById("btnClearHistory");
  if (btnClear) {
    btnClear.addEventListener("click", handleClearHistory);
  }

  // Modal Cerrar
  const btnModalClose = document.getElementById("btnModalClose");
  const modalOverlay = document.getElementById("historyModal");
  if (btnModalClose && modalOverlay) {
    btnModalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("open");
    });
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
      }
    });
  }

  // Inicializar eventos del Simulador de Rating
  setupSimulatorEvents();
}

// =============================================================================
// 5. NAVEGACIÓN Y CAMBIO DE PESTAÑAS
// =============================================================================

function switchTab(tabId) {
  appState.activeTab = tabId;

  // Actualizar botones de pestañas
  document.querySelectorAll(".nav-tab").forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Actualizar paneles
  document.querySelectorAll(".tab-pane").forEach(pane => {
    if (pane.id === tabId) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });

  if (tabId === "tab-history") {
    renderHistoryTab();
  }
}

// =============================================================================
// 6. CÁLCULO Y MEDIDOR DE ICS EN TIEMPO REAL
// =============================================================================

function calculateICS() {
  const activeCriteria = CRITERIA_DATABASE.filter(c => 
    c.sessionTypes.includes(appState.sessionType)
  );

  let cumple = 0;
  let parcial = 0;
  let nocumple = 0;
  let noaplica = 0;
  let answered = 0;

  activeCriteria.forEach(c => {
    const status = appState.criteriaStatus[c.id];
    if (status === "cumple") {
      cumple++;
      answered++;
    } else if (status === "parcial") {
      parcial++;
      answered++;
    } else if (status === "nocumple") {
      nocumple++;
      answered++;
    } else if (status === "noaplica") {
      noaplica++;
      answered++;
    }
  });

  const total = activeCriteria.length;
  const evaluable = total - noaplica;
  
  // Ponderación: Cumple = 1.0, Parcial = 0.5, No Cumple = 0
  let scorePercent = 0;
  if (evaluable > 0) {
    const rawPoints = (cumple * 1.0) + (parcial * 0.5);
    scorePercent = Math.round((rawPoints / evaluable) * 100);
  }

  return {
    scorePercent,
    cumple,
    parcial,
    nocumple,
    noaplica,
    answered,
    total,
    evaluable
  };
}

function updateScoreMetrics() {
  const metrics = calculateICS();

  // Elementos del DOM
  const scoreNumberEl = document.getElementById("icsScoreNumber");
  const scoreStatusEl = document.getElementById("icsScoreStatus");
  const progressBarEl = document.getElementById("icsProgressBar");
  const badgeEl = document.getElementById("navChecklistBadge");

  const countCumple = document.getElementById("countCumple");
  const countParcial = document.getElementById("countParcial");
  const countNoCumple = document.getElementById("countNoCumple");
  const countNoAplica = document.getElementById("countNoAplica");
  const countTotal = document.getElementById("countTotal");

  if (scoreNumberEl) scoreNumberEl.textContent = `${metrics.scorePercent}%`;
  if (badgeEl) badgeEl.textContent = `${metrics.scorePercent}%`;

  if (countCumple) countCumple.textContent = metrics.cumple;
  if (countParcial) countParcial.textContent = metrics.parcial;
  if (countNoCumple) countNoCumple.textContent = metrics.nocumple;
  if (countNoAplica) countNoAplica.textContent = metrics.noaplica;
  if (countTotal) countTotal.textContent = metrics.total;

  if (progressBarEl) {
    progressBarEl.style.width = `${metrics.scorePercent}%`;

    // Cambio de color según score
    if (metrics.scorePercent >= 85) {
      progressBarEl.style.background = "linear-gradient(90deg, #10b981 0%, #059669 100%)";
    } else if (metrics.scorePercent >= 60) {
      progressBarEl.style.background = "linear-gradient(90deg, #f59e0b 0%, #10b981 100%)";
    } else {
      progressBarEl.style.background = "linear-gradient(90deg, #ef4444 0%, #f59e0b 100%)";
    }
  }

  if (scoreStatusEl) {
    if (metrics.answered === 0) {
      scoreStatusEl.textContent = "Por iniciar";
      scoreStatusEl.style.color = "var(--text-muted)";
    } else if (metrics.scorePercent >= 90) {
      scoreStatusEl.textContent = "Excelente (Nivel QA Kodland ★★★)";
      scoreStatusEl.style.color = "var(--color-cumple)";
    } else if (metrics.scorePercent >= 75) {
      scoreStatusEl.textContent = "Aceptable (Oportunidades de mejora)";
      scoreStatusEl.style.color = "var(--color-parcial)";
    } else {
      scoreStatusEl.textContent = "En riesgo pedagógico (Atención)";
      scoreStatusEl.style.color = "var(--color-nocumple)";
    }
  }
}

// =============================================================================
// 7. RENDERIZADO DE CRITERIOS INTERACTIVOS
// =============================================================================

function renderCriteriaList() {
  const container = document.getElementById("criteriaListContainer");
  if (!container) return;

  const filteredCriteria = CRITERIA_DATABASE.filter(c => {
    // 1. Filtro por tipo de sesión
    if (!c.sessionTypes.includes(appState.sessionType)) return false;

    // 2. Filtro por estado (todos / pendientes / completados)
    const currentStatus = appState.criteriaStatus[c.id];
    if (appState.filterStatus === "pending" && currentStatus) return false;
    if (appState.filterStatus === "completed" && !currentStatus) return false;

    // 3. Filtro por búsqueda textual
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchCat = c.category.toLowerCase().includes(q);
      const matchDesc = c.description.toLowerCase().includes(q);
      const matchQuestions = c.questions.some(item => item.toLowerCase().includes(q));
      const matchKeywords = c.keywords.some(item => item.toLowerCase().includes(q));
      const matchTip = c.tipICS ? c.tipICS.toLowerCase().includes(q) : false;
      return matchTitle || matchCat || matchDesc || matchQuestions || matchKeywords || matchTip;
    }

    return true;
  });

  if (filteredCriteria.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="background:#fff; border-radius:12px; border:1px solid var(--border-light);">
        <span class="empty-icon">🔎</span>
        <h4>No se encontraron criterios</h4>
        <p>Prueba ajustando el término de búsqueda o seleccionando "Todos" en los filtros superiores.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredCriteria.map(criterion => {
    const currentStatus = appState.criteriaStatus[criterion.id] || "";
    const isCardOpen = !!appState.openCriteria[criterion.id];
    const currentNote = appState.criteriaNotes[criterion.id] || "";

    const statusCardClass = currentStatus ? `status-${currentStatus}` : "";

    return `
      <article class="criterion-card ${statusCardClass} ${isCardOpen ? 'is-expanded' : 'is-collapsed'}" id="card-${criterion.id}">
        
        <header class="criterion-header" onclick="toggleCriterionAccordion('${criterion.id}', event)" title="Clic para desplegar u ocultar detalles">
          <div class="criterion-title-area">
            <div class="criterion-header-top">
              <span class="criterion-category">${criterion.category}</span>
              <span class="accordion-chevron" aria-hidden="true">${isCardOpen ? '▲' : '▼'}</span>
            </div>
            <h4 class="criterion-title">
              <span>${criterion.title}</span>
            </h4>
          </div>

          <!-- Selector de Estado Cuádruple (stop propagation para evitar toggle del acordeón al calificar) -->
          <div class="status-pill-group" onclick="event.stopPropagation()">
            <button 
              type="button"
              class="status-btn ${currentStatus === 'cumple' ? 'selected-cumple' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'cumple')"
              title="Cumple a satisfacción">
              ✓ Cumple
            </button>
            <button 
              type="button"
              class="status-btn ${currentStatus === 'parcial' ? 'selected-parcial' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'parcial')"
              title="Cumplimiento parcial">
              ⚠ Parcial
            </button>
            <button 
              type="button"
              class="status-btn ${currentStatus === 'nocumple' ? 'selected-nocumple' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'nocumple')"
              title="No se evidenció en la sesión">
              ✗ No cumple
            </button>
            <button 
              type="button"
              class="status-btn ${currentStatus === 'noaplica' ? 'selected-noaplica' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'noaplica')"
              title="No aplica a esta sesión">
              — N/A
            </button>
          </div>
        </header>

        <!-- Contenedor Colapsable de Detalles (.criterion-details-drawer) -->
        <div class="criterion-details-drawer ${isCardOpen ? 'open' : ''}" id="drawer-${criterion.id}">
          
          <p class="criterion-desc">${criterion.description}</p>

          <!-- Palabras Clave ICS (Badges) -->
          <div class="criterion-keywords">
            <span class="keywords-label">Palabras Clave ICS:</span>
            ${criterion.keywords.map(kw => `<span class="keyword-badge">💬 ${kw}</span>`).join("")}
          </div>

          <!-- Consejo Algoritmo ICS (tipICS) -->
          ${criterion.tipICS ? `
          <div class="criterion-tip-ics">
            <strong>💡 Tip Algoritmo ICS:</strong> ${criterion.tipICS}
          </div>` : ''}

          <!-- Lista de Preguntas de Verificación -->
          <div class="questions-section">
            <span class="questions-section-title">Preguntas clave de verificación (${criterion.questions.length}):</span>
            <ul class="questions-list">
              ${criterion.questions.map(q => `<li>${q}</li>`).join("")}
            </ul>
          </div>

          <!-- Panel de Notas / Observaciones Predefinidas -->
          <div class="notes-container">
            <div class="notes-header-row">
              <span class="notes-label">Notas y Observaciones del Tutor:</span>
              <button type="button" class="btn-quick-note" onclick="insertQuickNote('${criterion.id}')">
                ⚡ Insertar plantilla predefinida
              </button>
            </div>
            <textarea 
              class="criterion-notes-input" 
              placeholder="Añade una anotación sobre este criterio o usa el botón de plantilla rápida..."
              oninput="handleNoteInput('${criterion.id}', this.value)">${escapeHtml(currentNote)}</textarea>
          </div>

        </div>

      </article>
    `;
  }).join("");

  updateToggleAllButtonLabel();
}

// Acciones sobre criterios expuestas a window
window.toggleCriterionAccordion = function(criterionId, event) {
  if (event && event.target && event.target.closest(".status-pill-group")) {
    return;
  }
  appState.openCriteria[criterionId] = !appState.openCriteria[criterionId];
  renderCriteriaList();
};

window.toggleAllCriteria = function() {
  const activeCriteria = CRITERIA_DATABASE.filter(c => c.sessionTypes.includes(appState.sessionType));
  const anyClosed = activeCriteria.some(c => !appState.openCriteria[c.id]);
  
  activeCriteria.forEach(c => {
    appState.openCriteria[c.id] = anyClosed;
  });
  
  renderCriteriaList();
  showToast(anyClosed ? "Todos los criterios expandidos" : "Todos los criterios colapsados");
};

function updateToggleAllButtonLabel() {
  const labelEl = document.getElementById("toggleAllLabel");
  if (!labelEl) return;
  const activeCriteria = CRITERIA_DATABASE.filter(c => c.sessionTypes.includes(appState.sessionType));
  const anyClosed = activeCriteria.some(c => !appState.openCriteria[c.id]);
  labelEl.textContent = anyClosed ? "Expandir todo" : "Colapsar todo";
}

window.setCriterionStatus = function(criterionId, status) {
  if (appState.criteriaStatus[criterionId] === status) {
    // Si da clic al mismo, lo deselecciona
    delete appState.criteriaStatus[criterionId];
  } else {
    appState.criteriaStatus[criterionId] = status;
  }
  saveCurrentState();
  renderCriteriaList();
  updateScoreMetrics();
};

window.handleNoteInput = function(criterionId, text) {
  appState.criteriaNotes[criterionId] = text;
  saveCurrentState();
};

window.insertQuickNote = function(criterionId) {
  const criterion = CRITERIA_DATABASE.find(c => c.id === criterionId);
  if (!criterion) return;

  const currentStatus = appState.criteriaStatus[criterionId];
  let templateText = "";

  if (criterion.templates) {
    if (currentStatus && criterion.templates[currentStatus]) {
      templateText = criterion.templates[currentStatus];
    } else {
      // Si no tiene estado marcado o es noaplica, tomar plantilla de cumple o aleatoria
      templateText = criterion.templates.cumple || Object.values(criterion.templates)[0];
    }
  } else if (criterion.quickNoteTemplates && criterion.quickNoteTemplates.length > 0) {
    templateText = criterion.quickNoteTemplates[
      Math.floor(Math.random() * criterion.quickNoteTemplates.length)
    ];
  }

  if (!templateText) return;

  const current = appState.criteriaNotes[criterionId] || "";
  const updated = current ? `${current}\n• ${templateText}` : `• ${templateText}`;
  
  appState.criteriaNotes[criterionId] = updated;
  saveCurrentState();
  renderCriteriaList();
  showToast("Plantilla rápida añadida al criterio");
};

// =============================================================================
// 8. HISTORIAL Y SEGUIMIENTO QA (KODLAND OFICIAL)
// =============================================================================

function calculateSemaforo(score) {
  const num = Number(score) || 0;
  if (num <= 10) return { label: "Crítica", key: "critica", badgeClass: "badge-semaforo-critica", icon: "🔴" };
  if (num <= 30) return { label: "Riesgo", key: "riesgo", badgeClass: "badge-semaforo-riesgo", icon: "🟠" };
  if (num <= 70) return { label: "Atención", key: "atencion", badgeClass: "badge-semaforo-atencion", icon: "🟡" };
  return { label: "Saludable", key: "saludable", badgeClass: "badge-semaforo-saludable", icon: "🟢" };
}

function handleSaveSessionToHistory() {
  const metrics = calculateICS();
  
  if (metrics.answered === 0) {
    alert("Por favor completa al menos un criterio del checklist antes de guardar en el historial.");
    return;
  }

  const now = new Date();
  const reportedIcsInput = document.getElementById("sessionIcsReportedInput");
  const reportedIcsVal = reportedIcsInput && reportedIcsInput.value.trim() !== "" 
    ? Math.max(1, Math.min(100, parseInt(reportedIcsInput.value, 10))) 
    : null;

  // El semáforo se calcula con el ICS reportado si existe, o con el score del checklist
  const baseScoreForSemaforo = reportedIcsVal !== null ? reportedIcsVal : metrics.scorePercent;
  const semaforoInfo = calculateSemaforo(baseScoreForSemaforo);

  // Fecha de seguimiento automático a +14 días
  const followUpTimestamp = now.getTime() + (14 * 24 * 60 * 60 * 1000);
  const followUpDateObj = new Date(followUpTimestamp);
  const followUpDateStr = followUpDateObj.toLocaleDateString("es-ES", { dateStyle: "short" });

  // Recopilación de observaciones y notas del tutor
  const notesEntries = Object.entries(appState.criteriaNotes || {}).filter(([_, txt]) => txt && txt.trim());
  const compiledNotes = notesEntries.map(([cId, txt]) => {
    const c = CRITERIA_DATABASE.find(item => item.id === cId);
    return `[${c ? c.title : cId}]: ${txt.trim()}`;
  }).join("\n");

  const sessionRecord = {
    id: "session_" + Date.now(),
    date: now.toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" }),
    timestamp: now.getTime(),
    group: appState.sessionGroup.trim() || "Grupo sin especificar",
    sessionType: appState.sessionType,
    scorePercent: metrics.scorePercent,
    reportedIcs: reportedIcsVal,
    semaforoLabel: semaforoInfo.label,
    semaforoKey: semaforoInfo.key,
    followUpTimestamp: followUpTimestamp,
    followUpDate: followUpDateStr,
    followUpClosed: false,
    cumple: metrics.cumple,
    parcial: metrics.parcial,
    nocumple: metrics.nocumple,
    noaplica: metrics.noaplica,
    total: metrics.total,
    observaciones: compiledNotes,
    criteriaSnapshot: { ...appState.criteriaStatus },
    notesSnapshot: { ...appState.criteriaNotes }
  };

  appState.history.unshift(sessionRecord);
  saveHistoryToStorage();
  updateHistoryBadge();

  if (reportedIcsInput) reportedIcsInput.value = "";
  showToast(`¡Sesión guardada! Semáforo: ${semaforoInfo.label} (${metrics.scorePercent}%) · Seguimiento fijado a 14 días`);
}

function updateHistoryBadge() {
  const badge = document.getElementById("navHistoryCount");
  if (badge) {
    badge.textContent = appState.history.length;
  }
}

function renderHistoryTab() {
  const tbody = document.getElementById("historyTableBody");
  const emptyState = document.getElementById("historyEmptyState");
  const statTotal = document.getElementById("statTotalClasses");
  const statAvg = document.getElementById("statAvgScore");
  const statPending = document.getElementById("statPendingFollowUps");

  if (!tbody) return;

  const totalClasses = appState.history.length;
  if (statTotal) statTotal.textContent = totalClasses;

  if (totalClasses === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (statAvg) statAvg.textContent = "0%";
    if (statPending) statPending.textContent = "0";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  // Calcular promedios y seguimientos pendientes
  const sumScores = appState.history.reduce((acc, item) => acc + (item.scorePercent || 0), 0);
  const avg = Math.round(sumScores / totalClasses);
  const pendingFollowUps = appState.history.filter(item => !item.followUpClosed).length;

  if (statAvg) statAvg.textContent = `${avg}%`;
  if (statPending) statPending.textContent = pendingFollowUps;

  const sessionTypeLabels = {
    normal: "Clase Normal",
    graduation: "Graduación",
    codegame: "Code & Game"
  };

  tbody.innerHTML = appState.history.map(item => {
    let scoreClass = "badge-score-low";
    if (item.scorePercent >= 85) scoreClass = "badge-score-high";
    else if (item.scorePercent >= 60) scoreClass = "badge-score-mid";

    // Semáforo calculado
    const semScore = item.reportedIcs !== null && item.reportedIcs !== undefined ? item.reportedIcs : item.scorePercent;
    const sem = calculateSemaforo(semScore);

    // Seguimiento a 14 días
    let followUpBadgeHtml = "";
    if (item.followUpClosed) {
      followUpBadgeHtml = `<span class="badge-followup badge-followup-closed" onclick="toggleFollowUpStatus('${item.id}')" title="Clic para alternar estado: Reabrir seguimiento">✓ Cerrado</span>`;
    } else {
      const targetTs = item.followUpTimestamp || (item.timestamp + (14 * 24 * 60 * 60 * 1000));
      const diffDays = Math.ceil((targetTs - Date.now()) / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        followUpBadgeHtml = `<span class="badge-followup badge-followup-pending" onclick="toggleFollowUpStatus('${item.id}')" title="Clic para marcar como cerrado (Fecha límite: ${item.followUpDate || '14 días'})">⏳ ${diffDays}d pendientes</span>`;
      } else {
        followUpBadgeHtml = `<span class="badge-followup badge-followup-overdue" onclick="toggleFollowUpStatus('${item.id}')" title="Caso vencido sin cierre formal. Clic para marcar como cerrado">🚨 Vencido (${Math.abs(diffDays)}d)</span>`;
      }
    }

    let scoreColHtml = `<span class="badge-score ${scoreClass}">${item.scorePercent}%</span>`;
    if (item.reportedIcs !== null && item.reportedIcs !== undefined) {
      scoreColHtml += ` <small style="display:block; font-size:0.7rem; color:var(--text-secondary); margin-top:2px;">Oficial: ${item.reportedIcs}</small>`;
    }

    return `
      <tr>
        <td><strong>${item.date}</strong></td>
        <td>${escapeHtml(item.group)}</td>
        <td><span class="badge-session-type">${sessionTypeLabels[item.sessionType] || item.sessionType}</span></td>
        <td>${scoreColHtml}</td>
        <td>
          <span class="badge-semaforo ${sem.badgeClass}">
            ${sem.icon} ${sem.label}
          </span>
        </td>
        <td>${followUpBadgeHtml}</td>
        <td>
          <button class="btn-icon-action" onclick="viewHistoryDetail('${item.id}')" title="Ver detalle completo">👁️</button>
          <button class="btn-icon-action" onclick="toggleFollowUpStatus('${item.id}')" title="Alternar cierre de seguimiento">🔄</button>
          <button class="btn-icon-action" onclick="deleteHistoryItem('${item.id}')" title="Eliminar registro" style="color:var(--color-nocumple)">🗑️</button>
        </td>
      </tr>
    `;
  }).join("");
}

window.toggleFollowUpStatus = function(recordId) {
  const item = appState.history.find(h => h.id === recordId);
  if (!item) return;
  item.followUpClosed = !item.followUpClosed;
  saveHistoryToStorage();
  renderHistoryTab();
  showToast(item.followUpClosed ? "Seguimiento a 14 días marcado como CERRADO" : "Seguimiento reabierto como PENDIENTE");
};

window.viewHistoryDetail = function(recordId) {
  const item = appState.history.find(h => h.id === recordId);
  if (!item) return;

  const modal = document.getElementById("historyModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modalBody) return;

  modalTitle.textContent = `Detalle: ${item.group} (${item.date})`;

  const semScore = item.reportedIcs !== null && item.reportedIcs !== undefined ? item.reportedIcs : item.scorePercent;
  const sem = calculateSemaforo(semScore);

  let notesHtml = "";
  const noteEntries = Object.entries(item.notesSnapshot || {});
  if (noteEntries.length > 0) {
    notesHtml = `
      <div style="margin-top:1rem; padding-top:1rem; border-top:1px solid #e2e8f0;">
        <h5 style="margin-bottom:0.5rem; font-size:0.9rem;">Observaciones registradas por criterio:</h5>
        <ul style="padding-left:1.2rem; font-size:0.82rem; color:var(--text-secondary);">
          ${noteEntries.map(([cId, text]) => {
            const criterion = CRITERIA_DATABASE.find(c => c.id === cId);
            const title = criterion ? criterion.title : cId;
            return `<li><strong>${title}:</strong> ${escapeHtml(text)}</li>`;
          }).join("")}
        </ul>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1rem; font-size:0.85rem;">
      <div><strong>Tipo de Sesión:</strong> ${item.sessionType}</div>
      <div><strong>Checklist Score:</strong> ${item.scorePercent}%</div>
      <div><strong>ICS Reportado:</strong> ${item.reportedIcs !== null && item.reportedIcs !== undefined ? item.reportedIcs : 'No registrado'}</div>
      <div><strong>Semáforo Calculado:</strong> <span class="badge-semaforo ${sem.badgeClass}">${sem.icon} ${sem.label}</span></div>
      <div><strong>Fecha Límite 14d:</strong> ${item.followUpDate || '14 días'}</div>
      <div><strong>Estado Seguimiento:</strong> ${item.followUpClosed ? '✅ Cerrado' : '⏳ Pendiente'}</div>
      <div><strong>Criterios Cumple:</strong> ${item.cumple}</div>
      <div><strong>Criterios Parcial:</strong> ${item.parcial}</div>
      <div><strong>No Cumplidos:</strong> ${item.nocumple}</div>
      <div><strong>No Aplica (N/A):</strong> ${item.noaplica}</div>
    </div>
    ${notesHtml}
  `;

  modal.classList.add("open");
};

window.deleteHistoryItem = function(recordId) {
  if (confirm("¿Deseas eliminar este registro de autoevaluación?")) {
    appState.history = appState.history.filter(h => h.id !== recordId);
    saveHistoryToStorage();
    renderHistoryTab();
    showToast("Registro eliminado");
  }
};

function handleExportCsv() {
  if (appState.history.length === 0) {
    alert("No hay registros en el historial para exportar.");
    return;
  }

  const headers = [
    "ID",
    "Fecha Registro",
    "Grupo / Curso",
    "Tipo de Sesion",
    "Puntaje Checklist (%)",
    "ICS Reportado Oficial",
    "Semaforo Calculado",
    "Fecha Limite Seguimiento (+14d)",
    "Estado Seguimiento (14d)",
    "Criterios Cumple",
    "Criterios Parcial",
    "Criterios No Cumple",
    "Criterios NA",
    "Observaciones"
  ];

  const rows = appState.history.map(item => {
    const sem = calculateSemaforo(item.reportedIcs !== null && item.reportedIcs !== undefined ? item.reportedIcs : item.scorePercent);
    const followStatus = item.followUpClosed ? "Cerrado" : "Pendiente";
    const escapeCsv = (val) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    return [
      escapeCsv(item.id),
      escapeCsv(item.date),
      escapeCsv(item.group),
      escapeCsv(item.sessionType),
      escapeCsv(item.scorePercent),
      escapeCsv(item.reportedIcs !== null && item.reportedIcs !== undefined ? item.reportedIcs : "N/D"),
      escapeCsv(sem.label),
      escapeCsv(item.followUpDate || "14 días"),
      escapeCsv(followStatus),
      escapeCsv(item.cumple),
      escapeCsv(item.parcial),
      escapeCsv(item.nocumple),
      escapeCsv(item.noaplica),
      escapeCsv(item.observaciones || "")
    ].join(",");
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ICS_Historial_Kodland_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Historial exportado en CSV (UTF-8 con BOM para Excel)");
}

function handleExportHistory() {
  if (appState.history.length === 0) {
    alert("No hay registros en el historial para exportar.");
    return;
  }
  const jsonStr = JSON.stringify(appState.history, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ICS_Backup_Kodland_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Respaldo JSON exportado");
}

function handleImportJson(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!Array.isArray(parsed)) {
        alert("El archivo JSON no tiene un formato válido de lista de sesiones.");
        return;
      }

      const replace = confirm(
        `Se encontraron ${parsed.length} registros en el archivo.\n\n` +
        `¿Deseas REEMPLAZAR el historial actual con estos datos?\n` +
        `(Presiona 'Aceptar' para reemplazar todo, o 'Cancelar' para COMBINAR con tus registros actuales).`
      );

      if (replace) {
        appState.history = parsed;
      } else {
        const existingIds = new Set(appState.history.map(h => h.id));
        const newRecords = parsed.filter(h => h && h.id && !existingIds.has(h.id));
        appState.history = [...appState.history, ...newRecords];
      }

      saveHistoryToStorage();
      renderHistoryTab();
      updateHistoryBadge();
      showToast(`Respaldo importado con éxito (${appState.history.length} sesiones totales)`);
    } catch (err) {
      alert("Error al leer el archivo JSON: " + err.message);
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function handleClearHistory() {
  if (appState.history.length === 0) return;
  if (confirm("¿Estás seguro de que deseas borrar TODO el historial de autoevaluaciones? Esta acción no se puede deshacer.")) {
    appState.history = [];
    saveHistoryToStorage();
    renderHistoryTab();
    showToast("Historial completamente limpiado");
  }
}

// =============================================================================
// 9. UTILIDADES Y TOAST NOTIFICATIONS
// =============================================================================

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>⚡</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderAll() {
  renderCriteriaList();
  updateScoreMetrics();
  updateHistoryBadge();
  updateSimulator();
}

// =============================================================================
// 10. SIMULADOR INTERACTIVO DE ESTADO DE RATING DEL TUTOR (KODLAND OFICIAL)
// =============================================================================

function setupSimulatorEvents() {
  // Sincronización entre sliders y campos numéricos
  const pairs = [
    { slider: "simSliderCritica", num: "simNumCritica" },
    { slider: "simSliderRiesgo", num: "simNumRiesgo" },
    { slider: "simSliderAtencion", num: "simNumAtencion" },
    { slider: "simSliderSaludable", num: "simNumSaludable" }
  ];

  pairs.forEach(pair => {
    const sliderEl = document.getElementById(pair.slider);
    const numEl = document.getElementById(pair.num);

    if (sliderEl && numEl) {
      sliderEl.addEventListener("input", () => {
        numEl.value = sliderEl.value;
        updateSimulator();
      });

      numEl.addEventListener("input", () => {
        let val = parseInt(numEl.value, 10);
        if (isNaN(val) || val < 0) val = 0;
        if (val > 10) val = 10;
        numEl.value = val;
        sliderEl.value = val;
        updateSimulator();
      });
    }
  });

  // Checkboxes de 4 revisiones extra
  const auditChecks = [
    "checkAuditBajada",
    "checkAuditVariosGrupos",
    "checkAuditSinGrupoDificil",
    "checkAuditDosSemanas"
  ];

  auditChecks.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        updateSimulator();
      });
    }
  });

  // Presets rápidos
  document.querySelectorAll(".btn-sim-preset").forEach(btn => {
    btn.addEventListener("click", () => {
      const presetKey = btn.dataset.preset;
      applySimulatorPreset(presetKey);
    });
  });
}

function applySimulatorPreset(presetKey) {
  const configs = {
    increible: {
      critica: 0,
      riesgo: 1,
      atencion: 3,
      saludable: 6,
      audit: [false, false, false, false],
      toast: "Cargado escenario: Tutor Increíble (≤25% riesgo, ≥50% saludable)"
    },
    bueno: {
      critica: 0,
      riesgo: 3,
      atencion: 3,
      saludable: 4,
      audit: [false, false, false, false],
      toast: "Cargado escenario: Tutor Bueno (≤30% riesgo general)"
    },
    ok: {
      critica: 1,
      riesgo: 3,
      atencion: 3,
      saludable: 3,
      audit: [false, false, false, false],
      toast: "Cargado escenario: Tutor OK (>30% riesgo en observación)"
    },
    malo: {
      critica: 4,
      riesgo: 2,
      atencion: 2,
      saludable: 2,
      audit: [true, true, true, true],
      toast: "Cargado escenario: Tutor Malo (≥30% críticas + 4 revisiones QA)"
    }
  };

  const cfg = configs[presetKey];
  if (!cfg) return;

  const setVal = (sliderId, numId, val) => {
    const s = document.getElementById(sliderId);
    const n = document.getElementById(numId);
    if (s) s.value = val;
    if (n) n.value = val;
  };

  setVal("simSliderCritica", "simNumCritica", cfg.critica);
  setVal("simSliderRiesgo", "simNumRiesgo", cfg.riesgo);
  setVal("simSliderAtencion", "simNumAtencion", cfg.atencion);
  setVal("simSliderSaludable", "simNumSaludable", cfg.saludable);

  const auditChecks = [
    "checkAuditBajada",
    "checkAuditVariosGrupos",
    "checkAuditSinGrupoDificil",
    "checkAuditDosSemanas"
  ];

  auditChecks.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) el.checked = cfg.audit[idx];
  });

  updateSimulator();
  if (cfg.toast) showToast(cfg.toast);
}

function updateSimulator() {
  const numCriticaEl = document.getElementById("simNumCritica");
  const numRiesgoEl = document.getElementById("simNumRiesgo");
  const numAtencionEl = document.getElementById("simNumAtencion");
  const numSaludableEl = document.getElementById("simNumSaludable");

  if (!numCriticaEl || !numRiesgoEl || !numAtencionEl || !numSaludableEl) return;

  const critica = parseInt(numCriticaEl.value, 10) || 0;
  const riesgo = parseInt(numRiesgoEl.value, 10) || 0;
  const atencion = parseInt(numAtencionEl.value, 10) || 0;
  const saludable = parseInt(numSaludableEl.value, 10) || 0;

  const total = critica + riesgo + atencion + saludable;

  // Actualizar indicador de total
  const totalIndicator = document.getElementById("simTotalClassesIndicator");
  if (totalIndicator) {
    totalIndicator.textContent = `Total: ${total} / 10 clases`;
    if (total === 10) {
      totalIndicator.style.backgroundColor = "#ecfdf5";
      totalIndicator.style.color = "#047857";
    } else {
      totalIndicator.style.backgroundColor = "#fffbeb";
      totalIndicator.style.color = "#b45309";
    }
  }

  // Cálculos porcentuales
  const base = total > 0 ? total : 1;
  const pctCritica = (critica / base) * 100;
  const pctRiesgo = (riesgo / base) * 100;
  const pctAtencion = (atencion / base) * 100;
  const pctSaludable = (saludable / base) * 100;
  const pctCritRiesgo = ((critica + riesgo) / base) * 100;

  // Actualizar barra apilada
  const barCritica = document.getElementById("simBarCritica");
  const barRiesgo = document.getElementById("simBarRiesgo");
  const barAtencion = document.getElementById("simBarAtencion");
  const barSaludable = document.getElementById("simBarSaludable");

  if (barCritica) barCritica.style.width = `${pctCritica}%`;
  if (barRiesgo) barRiesgo.style.width = `${pctRiesgo}%`;
  if (barAtencion) barAtencion.style.width = `${pctAtencion}%`;
  if (barSaludable) barSaludable.style.width = `${pctSaludable}%`;

  // Actualizar chips de métricas
  const chipCritRiesgo = document.getElementById("chipPctCritRiesgo");
  const chipSaludables = document.getElementById("chipPctSaludables");
  const chipCriticas = document.getElementById("chipPctCriticas");

  if (chipCritRiesgo) chipCritRiesgo.textContent = `${Math.round(pctCritRiesgo)}%`;
  if (chipSaludables) chipSaludables.textContent = `${Math.round(pctSaludable)}%`;
  if (chipCriticas) chipCriticas.textContent = `${Math.round(pctCritica)}%`;

  // 4 Revisiones extra para estado Malo
  const checkBajada = document.getElementById("checkAuditBajada")?.checked || false;
  const checkVariosGrupos = document.getElementById("checkAuditVariosGrupos")?.checked || false;
  const checkSinGrupo = document.getElementById("checkAuditSinGrupoDificil")?.checked || false;
  const checkDosSemanas = document.getElementById("checkAuditDosSemanas")?.checked || false;

  const all4AuditChecked = checkBajada && checkVariosGrupos && checkSinGrupo && checkDosSemanas;

  // Resaltar caja de auditoría si críticas >= 30%
  const extraAuditBox = document.getElementById("extraAuditBox");
  if (extraAuditBox) {
    extraAuditBox.classList.toggle("highlight-audit", pctCritica >= 30);
  }

  // ALGORITMO OFICIAL DE RATING KODLAND:
  // 1. "Increíble": <= 25% Críticas/Riesgo y >= 50% Saludables.
  // 2. "Bueno": <= 30% Críticas/Riesgo (sin llegar a Increíble).
  // 3. "Malo": >= 30% Críticas + confirmación de las 4 revisiones extra.
  // 4. "OK": > 30% Críticas/Riesgo (o >= 30% Críticas sin cumplir las 4 revisiones extra).

  let ratingWord = "OK";
  let ratingClass = "rating-ok";
  let explanation = "";
  let actionTitle = "⚡ Recomendación Pedagógica";
  let actionDesc = "";

  if (pctCritica >= 30 && all4AuditChecked) {
    ratingWord = "MALO";
    ratingClass = "rating-malo";
    explanation = "Tienes ≥ 30% de clases Críticas y se confirman las 4 revisiones extra de auditoría QA.";
    actionTitle = "🚨 Sesión de Coaching Requerida";
    actionDesc = "Según el protocolo oficial de Kodland, se coordinará una sesión 1:1 con tu Team Lead para auditar grabaciones y aplicar un plan de rescate pedagógico.";
  } else if (pctCritRiesgo <= 25 && pctSaludable >= 50) {
    ratingWord = "INCREÍBLE";
    ratingClass = "rating-increible";
    explanation = "Cumples con ≤ 25% de clases Críticas/Riesgo y al menos 50% de clases Saludables.";
    actionTitle = "🌟 Nivel de Excelencia Kodland";
    actionDesc = "¡Felicitaciones! Cumples con los estándares más altos de retención. Eres candidato para bonificaciones de ICS y prioridad en apertura de nuevos grupos.";
  } else if (pctCritRiesgo <= 30) {
    ratingWord = "BUENO";
    ratingClass = "rating-bueno";
    explanation = "Mantienes ≤ 30% de clases Críticas/Riesgo (buena estabilidad general).";
    actionTitle = "🚀 Muy cerca de Increíble";
    actionDesc = "Tu ritmo de clase es confiable. Para subir a Increíble, enfócate en elevar tus clases Saludables al 50% cuidando la regla 70/30 y el cliffhanger final.";
  } else {
    // Caso OK
    ratingWord = "OK";
    ratingClass = "rating-ok";
    if (pctCritica >= 30 && !all4AuditChecked) {
      explanation = "Tienes ≥ 30% de clases Críticas pero NO se cumplen las 4 revisiones de auditoría QA. Por principio de justicia (Fairness), tu calificación se protege y se mantiene en OK.";
      actionTitle = "⚠️ En Observación de Calidad";
      actionDesc = "No estás en estado Malo gracias a las reglas de protección al tutor, pero necesitas corregir la dinámica en el grupo crítico antes de la próxima auditoría semanal.";
    } else {
      explanation = `Superas el 30% de clases en zona Crítica/Riesgo (${Math.round(pctCritRiesgo)}%).`;
      actionTitle = "⚠️ Ajuste de Dinámicas Necesario";
      actionDesc = "Aplica con urgencia las técnicas de rescate: Micrófono Dorado con preguntas cerradas A/B y verificación de pantallas cada 5 minutos para rescatar la atención.";
    }
  }

  // Actualizar DOM
  const ratingBadgeText = document.getElementById("ratingBadgeText");
  const ratingExplanationText = document.getElementById("ratingExplanationText");
  const ratingDisplayCard = document.getElementById("ratingDisplayCard");
  const ratingActionTitle = document.getElementById("ratingActionTitle");
  const ratingActionDesc = document.getElementById("ratingActionDesc");

  if (ratingBadgeText) ratingBadgeText.textContent = ratingWord;
  if (ratingExplanationText) ratingExplanationText.textContent = explanation;
  if (ratingDisplayCard) {
    ratingDisplayCard.className = `rating-display-card ${ratingClass}`;
  }
  if (ratingActionTitle) ratingActionTitle.textContent = actionTitle;
  if (ratingActionDesc) ratingActionDesc.textContent = actionDesc;
}
