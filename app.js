/**
 * TEAM4 · Guía y Checklist ICS + QA (Kodland)
 * Aplicación Web Estática - Lógica y Gestión de Estado
 */

// =============================================================================
// 1. BANCO DE DATOS DE CRITERIOS PEDAGÓGICOS Y QA
// =============================================================================

const CRITERIA_DATABASE = [
  {
    id: "c-inicio-puntual",
    category: "Estructura y Apertura",
    title: "Inicio puntual y objetivo claro",
    description: "Conexión a tiempo, bienvenida cálida personalizada, comprobación técnica rápida y planteamiento de la meta lúdica antes del minuto 7.",
    sessionTypes: ["normal", "graduation", "codegame"],
    questions: [
      "¿Iniciaste la sesión en el minuto exacto programado o avisaste oportunamente si hubo un inconveniente?",
      "¿Saludaste a cada alumno por su nombre con energía positiva y tono entusiasta?",
      "¿Comprobaste audio, video y que todos los alumnos te escucharan y vieran correctamente?",
      "¿Presentaste la misión/meta de la clase de manera atractiva y comprensible (\"Hoy crearemos...\")?",
      "¿Conectaste el objetivo de hoy con la clase anterior o el proyecto final del curso?",
      "¿Estableciste las reglas de oro de forma lúdica (levantar la mano, silenciar micrófono cuando otro habla)?",
      "¿Iniciaste la primera actividad práctica o rompehielos antes del minuto 7 de la clase?"
    ],
    keywords: [
      "¡Bienvenidos a la misión!",
      "Meta de hoy",
      "Audio y video listos",
      "Reglas de oro",
      "Superhéroes del código",
      "Puntos y estrellas",
      "Encendemos motores",
      "Reto del día",
      "Paso a paso"
    ],
    quickNoteTemplates: [
      "Inicio puntual con 100% de asistencia. Meta presentada con entusiasmo y aceptada por el grupo.",
      "Demora de 3 min por actualización de Zoom de un alumno. Se recuperó el ritmo antes del min 8.",
      "Alumnos muy participativos al definir las reglas de oro y la misión del juego."
    ]
  },
  {
    id: "c-interaccion-7030",
    category: "Participación y Engagement",
    title: "Interacción continua y regla 70/30",
    description: "Los alumnos programan y conversan el 70% del tiempo. El tutor guía con preguntas socráticas, evitando monólogos teóricos de más de 3 minutos.",
    sessionTypes: ["normal", "graduation", "codegame"],
    questions: [
      "¿Mencionaste el nombre de cada alumno al menos 3 veces durante la sesión?",
      "¿Hiciste preguntas dirigidas y abiertas en lugar de preguntas genéricas al aire?",
      "¿Involucraste a los niños más tímidos dándoles opciones simples de respuesta?",
      "¿Rotaste el protagonismo para que ningún alumno acaparara toda la participación?",
      "¿Permitiste que los estudiantes explicaran con sus palabras por qué eligieron un comando?"
    ],
    keywords: [
      "¿Quién me ayuda?",
      "Pregunta detective",
      "Micrófono de oro",
      "Turno sorpresa",
      "Tu turno de brillar",
      "Explicación relámpago"
    ],
    quickNoteTemplates: [
      "Excelente dinámica de preguntas y respuestas; los alumnos guiaron la solución del código.",
      "Se necesitó incentivar más a los alumnos tímidos mediante el chat interactivo.",
      "Regla 70/30 cumplida con éxito, tutor intervino solo como guía facilitador."
    ]
  },
  {
    id: "c-monitoreo-pantallas",
    category: "Soporte Técnico y QA",
    title: "Monitoreo constante de pantallas y prevención de frustración",
    description: "Inspección continua del progreso individual para detectar bloqueos o errores de sintaxis en menos de 90 segundos.",
    sessionTypes: ["normal", "graduation", "codegame"],
    questions: [
      "¿Solicitaste a los alumnos compartir pantalla o revisaste sus proyectos en la nube en tiempo real?",
      "¿Detectaste bloqueos técnicos o errores antes de que el estudiante se desmotivara?",
      "¿Enseñaste al alumno a encontrar su propio error sin quitarle el control del mouse?",
      "¿Mantuviste al resto del grupo con un micro-reto mientras ayudabas a un alumno puntual?",
      "¿Normalizaste el error celebrando los 'bugs' como oportunidades de ser detectives?"
    ],
    keywords: [
      "Comparte pantalla",
      "Buscamos el bug",
      "Equipo de rescate",
      "Pausa estratégica",
      "Misión detective",
      "¡Encontraste el truco!"
    ],
    quickNoteTemplates: [
      "Monitoreo fluido; se resolvió un bloqueo de coordenadas en Scratch en menos de 1 minuto.",
      "Un alumno tuvo pantalla negra momentánea, se aplicó recarga y continuó sin retrasos.",
      "Se asignó mini-reto de personalización a los avanzados mientras se nivelaba a un alumno."
    ]
  },
  {
    id: "c-gamificacion-energia",
    category: "Pedagogía y Motivación",
    title: "Gamificación, energía y refuerzo positivo",
    description: "Uso activo de metáforas lúdicas, recompensas simbólicas (estrellas, puntos Kodland) y celebración genuina de cada logro individual.",
    sessionTypes: ["normal", "codegame"],
    questions: [
      "¿Mantuviste un tono de voz alegre, enérgico y modulado a lo largo de toda la clase?",
      "¿Celebraste cada avance con stickers visuales, aplausos virtuales o puntos de misión?",
      "¿Transformaste conceptos complejos de programación en analogías de videojuegos o vida real?",
      "¿Fomentaste el compañerismo y felicitaciones mutuas entre los niños?"
    ],
    keywords: [
      "¡Nivel superado!",
      "Bono de creatividad",
      "Estrellas Kodland",
      "Superpoder desbloqueado",
      "Puntos de misión",
      "Aplauso virtual"
    ],
    quickNoteTemplates: [
      "Alta energía durante los 60 minutos. Los niños compitieron de forma sana por estrellas.",
      "Se utilizaron metáforas de Minecraft/Roblox que conectaron inmediatamente con los conceptos."
    ]
  },
  {
    id: "c-cierre-cliffhanger",
    category: "Retención y Cierre",
    title: "Cierre estructurado, resumen interactivo y Cliffhanger",
    description: "Finalización con resumen hecho por los propios niños, guardado seguro de proyectos y revelación intrigante de la próxima clase.",
    sessionTypes: ["normal", "codegame"],
    questions: [
      "¿Iniciaste el proceso de cierre y guardado al menos 7 minutos antes del final?",
      "¿Cada alumno confirmó haber guardado su proyecto o enviado el link de avance?",
      "¿Preguntaste qué fue lo que más les gustó o qué nuevo concepto dominaron hoy?",
      "¿Lanzaste un gancho de intriga (Cliffhanger) para generar expectativa por la siguiente sesión?",
      "¿Te despediste con afecto recordando el día y la hora del próximo encuentro?"
    ],
    keywords: [
      "¿Qué aprendimos hoy?",
      "Guardado seguro",
      "Spoiler del próximo nivel",
      "Misterio de la semana",
      "¡Hasta la próxima misión!",
      "Desafío extra"
    ],
    quickNoteTemplates: [
      "Cierre a tiempo. Los alumnos resumieron el uso de bucles y quedaron ansiosos por el jefe final.",
      "Se aseguró el guardado de todos los proyectos en la plataforma Kodland."
    ]
  },
  {
    id: "c-graduacion-proyectos",
    category: "Graduación y Padres",
    title: "Showcase de proyectos y conexión con familias",
    description: "Presentación protocolar de proyectos finales ante padres de familia, destacando el crecimiento técnico y las habilidades blandas del alumno.",
    sessionTypes: ["graduation"],
    questions: [
      "¿Diste una bienvenida formal y cálida a las familias presentes en la videollamada?",
      "¿Cada alumno presentó su proyecto explicando lógica, diseño y dificultades superadas?",
      "¿Diste un feedback personalizado y motivador destacando el talento único de cada niño?",
      "¿Invitaste a los padres a compartir palabras de orgullo y felicitaciones a sus hijos?",
      "¿Mostraste la ruta de aprendizaje siguiente y el certificado oficial de Kodland?"
    ],
    keywords: [
      "Bienvenidos padres y familias",
      "Creadores del futuro",
      "Demostración en vivo",
      "Certificado oficial Kodland",
      "Orgullo y crecimiento",
      "Próximo nivel formativo"
    ],
    quickNoteTemplates: [
      "Graduación emocionante. Los 4 padres asistieron y quedaron asombrados con los juegos creados.",
      "Excelente desenvolvimiento de los alumnos al defender su proyecto y explicar su código."
    ]
  },
  {
    id: "c-codegame-dinamica",
    category: "Dinámica Especial",
    title: "Retos de velocidad, acertijos y ranking cooperativo",
    description: "Estructura ágil de retos de código gamificados en formato batalla amistosa o escape room digital para maximizar el factor diversión.",
    sessionTypes: ["codegame"],
    questions: [
      "¿Explicaste la mecánica del juego o reto de manera clara y en menos de 2 minutos?",
      "¿Garantizaste que el reto fuera accesible para todos los niveles de habilidad?",
      "¿Mantuviste una narración dinámica como caster/árbitro divertido durante las pruebas?",
      "¿Enfocaste el puntaje en el esfuerzo y la creatividad más que en la simple velocidad?"
    ],
    keywords: [
      "¡3, 2, 1, a programar!",
      "Acertijo desbloqueado",
      "Puntos de equipo",
      "Ronda relámpago",
      "Victoria compartida"
    ],
    quickNoteTemplates: [
      "Sesión Code & Game muy divertida. Todos los alumnos completaron al menos 3 desafíos.",
      "Gran trabajo en equipo y compañerismo en la resolución de los acertijos lógicos."
    ]
  }
];

// =============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// =============================================================================

const STORAGE_KEYS = {
  CURRENT_STATE: "team4_kodland_current_checklist",
  HISTORY: "team4_kodland_history"
};

const appState = {
  activeTab: "tab-checklist",
  sessionType: "normal",
  sessionGroup: "",
  criteriaStatus: {},      // { [id]: 'cumple' | 'parcial' | 'nocumple' | 'noaplica' }
  criteriaNotes: {},       // { [id]: string }
  openQuestions: {},       // { [id]: boolean }
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
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
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

  // Historial: Exportar JSON y Limpiar
  const btnExport = document.getElementById("btnExportHistory");
  if (btnExport) {
    btnExport.addEventListener("click", handleExportHistory);
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
      return matchTitle || matchCat || matchDesc || matchQuestions || matchKeywords;
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
    const isQuestionsOpen = appState.openQuestions[criterion.id] || false;
    const currentNote = appState.criteriaNotes[criterion.id] || "";

    const statusCardClass = currentStatus ? `status-${currentStatus}` : "";

    return `
      <article class="criterion-card ${statusCardClass}" id="card-${criterion.id}">
        
        <header class="criterion-header">
          <div class="criterion-title-area">
            <span class="criterion-category">${criterion.category}</span>
            <h4 class="criterion-title">
              <span>${criterion.title}</span>
            </h4>
            <p class="criterion-desc">${criterion.description}</p>
          </div>

          <!-- Selector de Estado Cuádruple -->
          <div class="status-pill-group">
            <button 
              class="status-btn ${currentStatus === 'cumple' ? 'selected-cumple' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'cumple')"
              title="Cumple a satisfacción">
              ✓ Cumple
            </button>
            <button 
              class="status-btn ${currentStatus === 'parcial' ? 'selected-parcial' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'parcial')"
              title="Cumplimiento parcial">
              ⚠ Parcial
            </button>
            <button 
              class="status-btn ${currentStatus === 'nocumple' ? 'selected-nocumple' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'nocumple')"
              title="No se evidenció en la sesión">
              ✗ No cumple
            </button>
            <button 
              class="status-btn ${currentStatus === 'noaplica' ? 'selected-noaplica' : ''}" 
              onclick="setCriterionStatus('${criterion.id}', 'noaplica')"
              title="No aplica a esta sesión">
              — N/A
            </button>
          </div>
        </header>

        <!-- Palabras Clave ICS (Badges) -->
        <div class="criterion-keywords">
          <span class="keywords-label">Palabras Clave ICS:</span>
          ${criterion.keywords.map(kw => `<span class="keyword-badge">💬 ${kw}</span>`).join("")}
        </div>

        <!-- Acordeón Desplegable de Preguntas de Verificación -->
        <button class="questions-toggle-btn" onclick="toggleQuestions('${criterion.id}')">
          <span>${isQuestionsOpen ? '▲ Ocultar' : '▼ Ver'} Preguntas clave de verificación (${criterion.questions.length})</span>
        </button>

        <div class="questions-panel ${isQuestionsOpen ? 'open' : ''}" id="questions-${criterion.id}">
          <ul class="questions-list">
            ${criterion.questions.map(q => `<li>${q}</li>`).join("")}
          </ul>
        </div>

        <!-- Panel de Notas / Observaciones Predefinidas -->
        <div class="notes-container">
          <div class="notes-header-row">
            <span class="notes-label">Notas y Observaciones del Tutor:</span>
            <button class="btn-quick-note" onclick="insertQuickNote('${criterion.id}')">
              ⚡ Insertar nota rápida predefinida
            </button>
          </div>
          <textarea 
            class="criterion-notes-input" 
            placeholder="Añade una anotación sobre este criterio (ej. Mateo no encendió audio hasta el min 10)..."
            oninput="handleNoteInput('${criterion.id}', this.value)">${escapeHtml(currentNote)}</textarea>
        </div>

      </article>
    `;
  }).join("");
}

// Acciones sobre criterios expuestas a window
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

window.toggleQuestions = function(criterionId) {
  appState.openQuestions[criterionId] = !appState.openQuestions[criterionId];
  const panel = document.getElementById(`questions-${criterionId}`);
  if (panel) {
    panel.classList.toggle("open", appState.openQuestions[criterionId]);
  }
  // Re-render ligero para actualizar texto del botón
  renderCriteriaList();
};

window.handleNoteInput = function(criterionId, text) {
  appState.criteriaNotes[criterionId] = text;
  saveCurrentState();
};

window.insertQuickNote = function(criterionId) {
  const criterion = CRITERIA_DATABASE.find(c => c.id === criterionId);
  if (!criterion || !criterion.quickNoteTemplates || criterion.quickNoteTemplates.length === 0) return;

  // Seleccionar aleatoriamente una plantilla o ciclar
  const randomTemplate = criterion.quickNoteTemplates[
    Math.floor(Math.random() * criterion.quickNoteTemplates.length)
  ];

  const current = appState.criteriaNotes[criterionId] || "";
  const updated = current ? `${current}\n• ${randomTemplate}` : `• ${randomTemplate}`;
  
  appState.criteriaNotes[criterionId] = updated;
  saveCurrentState();
  renderCriteriaList();
  showToast("Nota rápida añadida al criterio");
};

// =============================================================================
// 8. HISTORIAL Y SEGUIMIENTO QA
// =============================================================================

function handleSaveSessionToHistory() {
  const metrics = calculateICS();
  
  if (metrics.answered === 0) {
    alert("Por favor completa al menos un criterio del checklist antes de guardar en el historial.");
    return;
  }

  const now = new Date();
  const sessionRecord = {
    id: "session_" + Date.now(),
    date: now.toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" }),
    timestamp: now.getTime(),
    group: appState.sessionGroup.trim() || "Grupo sin especificar",
    sessionType: appState.sessionType,
    scorePercent: metrics.scorePercent,
    cumple: metrics.cumple,
    parcial: metrics.parcial,
    nocumple: metrics.nocumple,
    noaplica: metrics.noaplica,
    total: metrics.total,
    criteriaSnapshot: { ...appState.criteriaStatus },
    notesSnapshot: { ...appState.criteriaNotes }
  };

  appState.history.unshift(sessionRecord);
  saveHistoryToStorage();
  updateHistoryBadge();
  showToast(`¡Sesión guardada en el historial con éxito! (${metrics.scorePercent}% ICS)`);
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
  const statPerfect = document.getElementById("statPerfectSessions");

  if (!tbody) return;

  const totalClasses = appState.history.length;
  if (statTotal) statTotal.textContent = totalClasses;

  if (totalClasses === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (statAvg) statAvg.textContent = "0%";
    if (statPerfect) statPerfect.textContent = "0";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  // Calcular promedios
  const sumScores = appState.history.reduce((acc, item) => acc + (item.scorePercent || 0), 0);
  const avg = Math.round(sumScores / totalClasses);
  const perfects = appState.history.filter(item => item.scorePercent === 100).length;

  if (statAvg) statAvg.textContent = `${avg}%`;
  if (statPerfect) statPerfect.textContent = perfects;

  const sessionTypeLabels = {
    normal: "Clase Normal",
    graduation: "Graduación",
    codegame: "Code & Game"
  };

  tbody.innerHTML = appState.history.map(item => {
    let scoreClass = "badge-score-low";
    if (item.scorePercent >= 85) scoreClass = "badge-score-high";
    else if (item.scorePercent >= 60) scoreClass = "badge-score-mid";

    return `
      <tr>
        <td><strong>${item.date}</strong></td>
        <td>${escapeHtml(item.group)}</td>
        <td><span class="badge-session-type">${sessionTypeLabels[item.sessionType] || item.sessionType}</span></td>
        <td><span class="badge-score ${scoreClass}">${item.scorePercent}%</span></td>
        <td>
          <small style="color:var(--text-secondary)">
            ✓${item.cumple} | ⚠${item.parcial} | ✗${item.nocumple} | —${item.noaplica}
          </small>
        </td>
        <td>
          <button class="btn-icon-action" onclick="viewHistoryDetail('${item.id}')" title="Ver detalle">👁️</button>
          <button class="btn-icon-action" onclick="deleteHistoryItem('${item.id}')" title="Eliminar registro" style="color:var(--color-nocumple)">🗑️</button>
        </td>
      </tr>
    `;
  }).join("");
}

window.viewHistoryDetail = function(recordId) {
  const item = appState.history.find(h => h.id === recordId);
  if (!item) return;

  const modal = document.getElementById("historyModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modalBody) return;

  modalTitle.textContent = `Detalle: ${item.group} (${item.date})`;

  let notesHtml = "";
  const noteEntries = Object.entries(item.notesSnapshot || {});
  if (noteEntries.length > 0) {
    notesHtml = `
      <div style="margin-top:1rem; padding-top:1rem; border-top:1px solid #e2e8f0;">
        <h5 style="margin-bottom:0.5rem; font-size:0.9rem;">Observaciones registradas:</h5>
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
      <div><strong>ICS Calculado:</strong> ${item.scorePercent}%</div>
      <div><strong>Criterios que Cumple:</strong> ${item.cumple}</div>
      <div><strong>Cumplimiento Parcial:</strong> ${item.parcial}</div>
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
  a.download = `ICS_Historial_Kodland_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Historial exportado en JSON");
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
}
