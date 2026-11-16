# TEAM4 · Guía y Checklist ICS + QA (Kodland)

Aplicación web estática, interactiva y sin dependencias externas, diseñada para que los tutores de **Kodland (Team 4)** optimicen su **In-Class Score (ICS)**, superen auditorías QA y maximicen la retención y participación de sus estudiantes en cada clase.

---

## 🎯 ¿Qué es y cómo la usan los tutores?

Esta herramienta acompaña al tutor en las tres fases críticas de su sesión:

1. **Antes de la clase (Preparación y Onboarding):**
   * Selecciona el tipo de sesión (**Clase normal**, **Graduación** o **Code & Game**).
   * Consulta las **Reglas de Oro y Mitos del ICS** (baseline de 8 clases, multicanalidad de participación sin penalización por cámaras apagadas y normalización por *Fairness*).
   * Tiene a la vista el **Semáforo Oficial ICS** (Crítica: 1–10, Riesgo: 10–30, Atención: 30–70, Saludable: 70–100) y el **Simulador Interactivo de Rating** (Increíble, Bueno, OK, Malo) para proyectar su estatus en auditorías.

2. **Durante la clase (Monitoreo y Rescate en Vivo):**
   * Marca interactivamente los **10 criterios pedagógicos** específicos de cada sesión con estados (*Cumple*, *Parcial*, *No cumple*, *No aplica*).
   * Visualiza su **porcentaje de ICS en tiempo real** con la barra de progreso ponderada.
   * Consulta preguntas de verificación, palabras clave en mayúsculas y consejos prácticos del algoritmo `tipICS`.
   * Usa el panel lateral de **Acciones Rápidas de Rescate en Vivo** ante imprevistos (alumnos callados, falta de tiempo, bloqueos técnicos o cámaras apagadas).

3. **Después de la clase (Cierre, Historial y Seguimiento a 14 Días):**
   * Inserta notas rápidas predefinidas y guarda la autoevaluación en su navegador (`localStorage` bajo la clave `team4_tutor_ics_companion_v1`).
   * Da seguimiento automático a casos con la etiqueta de **revisión a 14 días** (alerta de días pendientes o vencimiento).
   * Exporta respaldos en **CSV (UTF-8 con BOM para Excel)** o en formato **JSON**, con posibilidad de restaurar datos en cualquier momento.

---

## 🚀 Despliegue en GitHub Pages (3 Pasos Exactos)

La aplicación es 100% estática (HTML5, CSS3 y JavaScript ES6+ sin frameworks ni build tools) y utiliza rutas relativas (`./styles.css`, `./app.js`), por lo que está lista para funcionar en cualquier repositorio o subcarpeta de GitHub Pages:

1. **Sube el proyecto a tu repositorio en GitHub:**
   Asegúrate de que los archivos `index.html`, `styles.css` y `app.js` estén ubicados en la raíz (`root`) de la rama `main` (o `master`).

2. **Activa GitHub Pages en la configuración:**
   * Entra a tu repositorio en GitHub y ve a la pestaña **Settings** (Configuración).
   * En el menú lateral izquierdo, selecciona la sección **Pages**.
   * En la sección **Build and deployment > Source**, selecciona **Deploy from a branch**.
   * En el selector de rama (*Branch*), elige **main** (o `master`) y la carpeta **/(root)**, y haz clic en **Save** (Guardar).

3. **Accede a tu aplicación web en vivo:**
   * En 1 a 2 minutos, GitHub generará tu enlace oficial:
     `https://<tu-usuario>.github.io/<nombre-del-repo>/`
   * ¡Listo! Ábrelo en tu navegador favorito o compártelo con tu Team Lead y tutores del equipo.

---

## 📁 Arquitectura Limpia (3 Archivos en Raíz)

```text
├── index.html   # Estructura semántica, accesibilidad y vistas de las 3 pestañas
├── styles.css   # Identidad visual Kodland (#202124 / #ffd629) y diseño responsive
├── app.js       # Base de datos de 30 criterios, simulador, medidor ICS y gestión de historial
└── README.md    # Documentación operativa y guía de despliegue
```
