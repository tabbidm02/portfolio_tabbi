/**
 * ============================================================================
 * AGUSTIN TABBITA — PORTFOLIO
 * Interaction & Architecture Engine (Frame 1 & Frame 2)
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
   * === ZONA EDITABLE DE FLYERS =============================================
   * ==========================================================================
   * Modifica aquí la ruta de la carpeta, el texto introductorio y la lista
   * de flyers para agregarlos o editarlos fácilmente.
   * ========================================================================== */

  const CARPETA_FLYERS = './flyers/';

  // Texto introductorio inicial de la categoría (sin título, solo el párrafo):
  const TEXTO_INTRO_FLYERS = "Piezas gráficas para eventos, recitales y activaciones culturales. Tipografía experimental, composición de alto impacto visual y tratamiento de imagen contemporáneo.";

  // Velocidad de la cinta de empaque en píxeles por segundo (Ajustable a gusto):
  const VELOCIDAD_CINTA_FLYERS = 68;

  // Lista de flyers y series:
  // NOTA: Únicamente Star Wars y PS1 están agrupados en series rotatorias.
  // Todos los demás flyers se presentan individualmente y su orden se baraja
  // aleatoriamente cada vez que se ingresa a la categoría "Flyers".
  const LISTA_FLYERS = [
    {
      archivos: ["DTmF post vertical@72x-100.jpg"],
      titulo: "DTmF — Vito Carbonella & Ramón Zapico",
      descripcion: "Afiche tipográfico y síntesis de alto contraste bicromático para fecha en vivo. Exploración de contornos dinámicos y jerarquía tipográfica brutalista."
    },
    {
      archivos: ["Mesa de trabajo 2@72x-100.jpg"],
      titulo: "MDQ — Mar Del Plata",
      descripcion: "Composición fotográfica de playa popular intervenida con tipografía condensada de gran escala. Cruce entre gráfica turística retro y estética urbana actual."
    },
    {
      archivos: ["Cadaver exquisito_Mesa de trabajo 1.png"],
      titulo: "Cadáver Exquisito — Vuelo",
      descripcion: "Gráfica experimental basada en la técnica surrealista de ensamble. Fusión de figura escultórica y tipografía serif distorsionada en rojo profundo."
    },
    {
      archivos: ["flayer 3 cato&paco.png"],
      titulo: "Cato & Paco — Vol. 1",
      descripcion: "Afiche promocional para fecha en vivo de Cato & Paco. Tratamiento de medios tonos, saturación ácida y tipografía rítmica."
    },
    {
      archivos: ["flayer 4 cato&paco.png"],
      titulo: "Cato & Paco — Vol. 2",
      descripcion: "Segunda entrega de la serie para Cato & Paco. Composición espejada, paleta de alto impacto cromático y balance tipográfico experimental."
    },
    {
      archivos: ["Tunic Flayer_1.jpg"],
      titulo: "Tunic — Edición I",
      descripcion: "Interpretación visual inspirada en el videojuego indie. Ilustración vectorial de atmósfera mística y paleta tonal evocativa."
    },
    {
      archivos: ["Tunic Flayer_2.jpg"],
      titulo: "Tunic — Edición II",
      descripcion: "Segunda variación gráfica sobre el universo de Tunic. Tratamiento atmosférico y simbología vectorial críptica."
    },
    {
      archivos: ["MISTERNA,CO-OFFLINE.png"],
      titulo: "Misterna — Co-Offline",
      descripcion: "Pieza promocional de corte minimalista y underground. Tensión visual a través de espacios negativos y modulación tipográfica."
    },
    {
      archivos: ["PORSCHE_Mesa de trabajo 1.jpg"],
      titulo: "Porsche 911 — Serie Roja",
      descripcion: "Homenaje a la silueta clásica del 911. Gráfica en bloque con rojo bermellón sólido, textura de grabado halftone y presencia vehicular imponente."
    },
    // --- SERIE AGRUPADA 1: PlayStation 30th Anniversary (Rotación de variaciones) ---
    {
      archivos: ["PS130th black.jpg", "PS130TH grey.jpg", "PS130TH withe.jpg"],
      intervalo: 1600,
      titulo: "PlayStation 30th Anniversary — Recolors",
      descripcion: "Serie de tres variaciones tonales (Dark, Silver y Classic White) conmemorando los 30 años de la consola. Síntesis geométrica de la silueta icónica."
    },
    {
      archivos: ["Horizon Flayer IG_1.jpg"],
      titulo: "Horizon Zero Dawn — Bestiary I",
      descripcion: "Afiche técnico estilizado tipo pergamino con tipografía tribal-futurista e ilustración monocromática de las máquinas del universo Horizon."
    },
    {
      archivos: ["Horizon Flayer IG_2.jpg"],
      titulo: "Horizon Zero Dawn — Bestiary II",
      descripcion: "Segunda lámina del bestiario Horizon. Documentación visual y esquemática de fauna robótica con estética de manual de campo."
    },
    // --- SERIE AGRUPADA 2: Star Wars (Colección rotatoria de carátulas) ---
    {
      archivos: [
        "ig horizontal@72x-100.jpg",
        "ig horizontal copia@72x-100.jpg",
        "ig horizontal copia 2@72x-100.jpg",
        "ig horizontal copia 3@72x-100.jpg",
        "ig horizontal copia 4@72x-100.jpg",
        "ig horizontal copia 5@72x-100.jpg"
      ],
      intervalo: 1800,
      titulo: "Star Wars — Serie de Carátulas",
      descripcion: "Colección de 6 carátulas panorámicas para redes sociales recorriendo los episodios de la saga. Composición cinematográfica y gradaciones tonales temáticas."
    },
    {
      archivos: ["MAUL1.png"],
      titulo: "Darth Maul — Sith Edition I",
      descripcion: "Estudio de personaje en alto contraste con el sable doble y grafismo rítmico. Contraste violento entre negro puro y carmesí Sith."
    },
    {
      archivos: ["MAUL2.png"],
      titulo: "Darth Maul — Sith Edition II",
      descripcion: "Segunda variación gráfica de Darth Maul con énfasis en la tipografía gestual y textura de alto impacto."
    },
    {
      archivos: ["neuropibada.jpg"],
      titulo: "Neuropibada — Gráfica Experimental",
      descripcion: "Exploración de textura digital degradada, glitch y colisiones visuales de baja fidelidad para convocatoria cultural alternativa."
    },
    {
      archivos: ["Mesa de trabajo 1.png"],
      titulo: "Mesa de Trabajo — Edición I",
      descripcion: "Composición de afiche experimental con estructuración asimétrica y tipografía condensada contemporánea."
    },
    {
      archivos: ["Mesa de trabajo1.png"],
      titulo: "Mesa de Trabajo — Edición II",
      descripcion: "Exploración visual complementaria con balance de pesos tipográficos y texturas monocromáticas."
    },
    {
      archivos: ["arg (pdf.io).jpg"],
      titulo: "AFA — Selección Argentina",
      descripcion: "Homenaje tipográfico y afiche conmemorativo de alto impacto para la Selección Argentina. Fotografía documental intervenida con texturas analógicas y tipografía condensada."
    },
    {
      archivos: ["badbunny concierto.jpg"],
      titulo: "Bad Bunny — En Concierto",
      descripcion: "Afiche promocional de recital masivo. Composición contemporánea con contrastes cromáticos saturados, síntesis tipográfica y estética urbana underground."
    },
    {
      archivos: ["Mesa de trabajo 1.jpg"],
      titulo: "Exploración Visual — Serie Gráfica I",
      descripcion: "Composición experimental en gran escala. Exploración de diagramación asimétrica, jerarquías dinámicas y texturas visuales contemporáneas."
    },
    {
      archivos: ["Mesa de trabajo 1 copia 2.jpg"],
      titulo: "Exploración Visual — Serie Gráfica II",
      descripcion: "Variación compositiva con modulación tipográfica experimental, contraste tonal acentuado y balance de pesos visuales."
    },
    {
      archivos: ["Mesa de trabajo 1 copia 3.jpg"],
      titulo: "Exploración Visual — Serie Gráfica III",
      descripcion: "Lámina gráfica de estudio formal con interacción de figuras geométricas, paleta monocromática y contrapuntos visuales dinámicos."
    }
  ];
  /* ========================================================================== */

  /* --------------------------------------------------------------------------
   * 1. CONTROLADOR DE CARGA INICIAL
   * -------------------------------------------------------------------------- */
  const initLoadAnimation = () => {
    const triggerLoaded = () => {
      setTimeout(() => {
        document.body.classList.add('loaded');
      }, 80);
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      triggerLoaded();
    } else {
      window.addEventListener('DOMContentLoaded', triggerLoaded);
    }
  };

  /* --------------------------------------------------------------------------
   * 2. GRILLA TÉCNICA DE FONDO (Figma Reticle: sutil, balanceada y sin linterna)
   * -------------------------------------------------------------------------- */
  class TechGrid {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Dimensiones de la retícula de Figma (base 53.2px, mayores a 266px)
      this.baseStep = 53.2;
      this.majorStepCount = 5;
      this.majorStep = this.baseStep * this.majorStepCount;

      this.init();
    }

    init() {
      this.resize();
      this.bindEvents();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.canvas.width = Math.floor(this.width * this.dpr);
      this.canvas.height = Math.floor(this.height * this.dpr);
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(this.dpr, this.dpr);

      this.draw();
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
      });

      window.addEventListener('orientationchange', () => {
        setTimeout(() => this.resize(), 150);
      });
    }

    drawCross(x, y, size, alpha) {
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();

      const half = size / 2;
      this.ctx.moveTo(x - half, y);
      this.ctx.lineTo(x + half, y);
      this.ctx.moveTo(x, y - half);
      this.ctx.lineTo(x, y + half);

      this.ctx.stroke();
    }

    drawDot(x, y, size, alpha) {
      this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
    }

    draw() {
      const { ctx, width, height, baseStep, majorStep, majorStepCount } = this;
      ctx.clearRect(0, 0, width, height);

      // --- 1. Líneas verticales ---
      const totalCols = Math.ceil(width / baseStep) + 1;
      for (let i = 0; i <= totalCols; i++) {
        const x = i * baseStep;
        const isMajor = (i % majorStepCount === 0);

        const alpha = isMajor ? 0.022 : 0.009;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = isMajor ? 0.8 : 0.6;

        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }

      // --- 2. Líneas horizontales ---
      const totalRows = Math.ceil(height / baseStep) + 1;
      for (let j = 0; j <= totalRows; j++) {
        const y = j * baseStep;
        const isMajor = (j % majorStepCount === 0);

        const alpha = isMajor ? 0.022 : 0.009;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = isMajor ? 0.8 : 0.6;

        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      // --- 3. Cruces (+) en intersecciones maestras y Puntos (•) ---
      const majorCols = Math.ceil(width / majorStep) + 1;
      const majorRows = Math.ceil(height / majorStep) + 1;

      for (let i = 0; i <= majorCols; i++) {
        for (let j = 0; j <= majorRows; j++) {
          const crossX = i * majorStep;
          const crossY = j * majorStep;

          this.drawCross(crossX, crossY, 14, 0.032);

          const dotX = crossX + majorStep / 2;
          const dotY = crossY + majorStep / 2;

          if (dotX < width && dotY < height) {
            this.drawDot(dotX, dotY, 2, 0.018);
          }
        }
      }
    }
  }

  /* --------------------------------------------------------------------------
   * 3. ANIMACIÓN CONTINUA DE LETTERING A MANO (Stop-Motion / Tinta Viva)
   * Modula suavemente el trazo caligráfico a 8 cuadros por segundo
   * -------------------------------------------------------------------------- */
  class ContinuousInkAnimation {
    constructor() {
      this.turbulence = document.getElementById('inkTurbulence');
      if (!this.turbulence) return;

      this.seed = 1;
      this.intervalId = null;
      this.init();
    }

    init() {
      this.start();

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stop();
        } else {
          this.start();
        }
      });
    }

    start() {
      if (this.intervalId) return;

      this.intervalId = setInterval(() => {
        this.seed = (this.seed % 8) + 1;
        this.turbulence.setAttribute('seed', this.seed.toString());
      }, 120);
    }

    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }

  /* --------------------------------------------------------------------------
   * 4. CONTROLADOR DE TRANSICIÓN ENTRE FRAMES (Frame 1 <-> Frame 2)
   * -------------------------------------------------------------------------- */
  class FrameTransitionController {
    constructor(categoriesController) {
      this.categoriesController = categoriesController;
      this.currentFrame = 1;
      this.isThrottled = false;
      this.throttleTimer = null;
      this.touchStartY = 0;
      this.titleBtn = document.getElementById('titleHomeBtn');
      this.heroContainer = document.getElementById('frame1Elements');

      this.init();
    }

    init() {
      this.bindEvents();
    }

    setFrame(frameNumber) {
      if (this.currentFrame === frameNumber) return;

      this.currentFrame = frameNumber;
      document.body.setAttribute('data-frame', frameNumber.toString());

      const categoriesNav = document.getElementById('categoriesNav');

      if (frameNumber === 2) {
        if (categoriesNav) {
          categoriesNav.classList.remove('is-ready');
          // Luego de que terminen de emerger todas las categorías por guillotina, liberamos overflow
          setTimeout(() => {
            if (this.currentFrame === 2) {
              categoriesNav.classList.add('is-ready');
            }
          }, 1800);
        }

        // Posicionar la línea activa de inmediato y animar suavemente cuando Sobre mi termine de entrar
        if (this.categoriesController) {
          this.categoriesController.updateActiveLine(false);
          setTimeout(() => {
            this.categoriesController.updateActiveLine(true);
          }, 700);

          // Al entrar al Frame 2, abrir el panel lateral de descripción para la categoría activa
          setTimeout(() => {
            if (this.currentFrame === 2) {
              this.categoriesController.triggerPanelSequence(this.categoriesController.activeCategory, false);
            }
          }, 600);
        }
      } else {
        if (categoriesNav) {
          categoriesNav.classList.remove('is-ready');
        }
        // Al regresar a Frame 1, cerrar el panel derecho y restablecer el logo blanco
        if (this.categoriesController) {
          this.categoriesController.closeDescPanel();

          const firstBtn = this.categoriesController.items[0];
          if (firstBtn) {
            this.categoriesController.selectCategory(firstBtn.dataset.category, firstBtn, true);
          }
        }
      }
    }

    bindEvents() {
      // 1. Navegación por rueda del ratón / trackpad (wheel)
      window.addEventListener('wheel', (e) => {
        if (this.isThrottled) return;

        // Si el usuario está scrolleando dentro del feed de flyers, permitir navegación libre en la cinta infinita
        const flyersFeed = document.getElementById('flyersScrollContainer');
        if (this.currentFrame === 2 && this.categoriesController?.activeCategory === 'flyers' && flyersFeed && (flyersFeed.contains(e.target) || e.target.closest('#panel-flyers'))) {
          return; // Permitir que la cinta de flyers scrollee libremente sin interferir con el cambio de categorías
        }

        // Scroll hacia abajo: avanzar de Frame 1 a Frame 2, o navegar a la siguiente categoría
        if (e.deltaY > 25) {
          if (this.currentFrame === 1) {
            this.throttle(1300);
            this.setFrame(2);
          } else if (this.currentFrame === 2 && this.categoriesController) {
            const advanced = this.categoriesController.nextCategory();
            if (advanced) {
              this.throttle(550);
            }
          }
        }
        // Scroll hacia arriba: retroceder de categoría, o volver a Frame 1 si estamos en la primera
        else if (e.deltaY < -25) {
          if (this.currentFrame === 2 && this.categoriesController) {
            const currentIndex = this.categoriesController.getCurrentIndex();
            if (currentIndex > 0) {
              this.categoriesController.prevCategory();
              this.throttle(550);
            } else {
              // Si estamos en la primera categoría (Sobre mi), volver a Frame 1
              this.throttle(800);
              this.setFrame(1);
            }
          }
        }
      }, { passive: true });

      // 2. Navegación táctil (swipe) para smartphones y tablets
      window.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          this.touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      window.addEventListener('touchend', (e) => {
        if (this.isThrottled || e.changedTouches.length === 0) return;

        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = this.touchStartY - touchEndY;

        // Swipe arriba (desplazar hacia abajo / avanzar)
        if (deltaY > 50) {
          if (this.currentFrame === 1) {
            this.throttle(1300);
            this.setFrame(2);
          } else if (this.currentFrame === 2 && this.categoriesController) {
            const advanced = this.categoriesController.nextCategory();
            if (advanced) {
              this.throttle(550);
            }
          }
        }
        // Swipe abajo (desplazar hacia arriba / retroceder)
        else if (deltaY < -50) {
          if (this.currentFrame === 2 && this.categoriesController) {
            const currentIndex = this.categoriesController.getCurrentIndex();
            if (currentIndex > 0) {
              this.categoriesController.prevCategory();
              this.throttle(550);
            } else {
              this.throttle(800);
              this.setFrame(1);
            }
          }
        }
      }, { passive: true });

      // 3. Clic en el título "PORTFOLIO"
      if (this.titleBtn) {
        this.titleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          // Si estamos en Frame 2, actúa como botón de Home (vuelve al Frame 1)
          if (this.currentFrame === 2) {
            this.setFrame(1);
          } else {
            // Si estamos en Frame 1, un clic también permite avanzar al Frame 2
            this.setFrame(2);
          }
        });
      }

      // 4. Clic en el área de Frame 1 para avanzar
      if (this.heroContainer) {
        this.heroContainer.addEventListener('click', () => {
          if (this.currentFrame === 1) {
            this.setFrame(2);
          }
        });
      }

      // 5. Teclado accesible (Flechas, Espacio, PageUp/PageDown)
      window.addEventListener('keydown', (e) => {
        if (this.isThrottled) return;

        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
          if (this.currentFrame === 1) {
            e.preventDefault();
            this.throttle(1300);
            this.setFrame(2);
          } else if (this.currentFrame === 2 && this.categoriesController) {
            e.preventDefault();
            const advanced = this.categoriesController.nextCategory();
            if (advanced) {
              this.throttle(500);
            }
          }
        } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
          if (this.currentFrame === 2 && this.categoriesController) {
            e.preventDefault();
            const currentIndex = this.categoriesController.getCurrentIndex();
            if (currentIndex > 0) {
              this.categoriesController.prevCategory();
              this.throttle(500);
            } else {
              this.throttle(800);
              this.setFrame(1);
            }
          }
        }
      });
    }

    throttle(duration = 600) {
      this.isThrottled = true;
      clearTimeout(this.throttleTimer);
      this.throttleTimer = setTimeout(() => {
        this.isThrottled = false;
      }, duration);
    }
  }

  /* --------------------------------------------------------------------------
   * 5. DATOS Y CONTROLADOR DEL MENÚ DE CATEGORÍAS & PANEL DE DESCRIPCIÓN
   * -------------------------------------------------------------------------- */
  const CATEGORY_DATA = {
    'sobre-mi': {
      title: 'Sobre mi',
      desc: 'Diseñador multimedial enfocado en la convergencia entre diseño visual, código creativo e interacción. Exploración constante de nuevas estéticas y experiencias digitales.'
    },
    'flyers': {
      title: '', // Sin título en el estado introductorio
      desc: TEXTO_INTRO_FLYERS
    },
    'multimediales': {
      title: 'Multimediales',
      desc: 'Instalaciones interactivas, motion graphics y proyectos audiovisuales que exploran el espacio, el tiempo y la relación activa con el espectador.'
    },
    'vibecode': {
      title: 'Vibecode',
      desc: 'Sistemas generativos, algoritmos visuales, shaders y experimentos de código donde la matemática se convierte en expresión estética y movimiento vivo.'
    },
    'logofolio': {
      title: 'Logofolio',
      desc: 'Desarrollo de marcas, síntesis formal e identidades visuales pensadas para perdurar y adaptarse dinámicamente a entornos físicos y digitales.'
    },
    'etc': {
      title: 'Etc',
      desc: 'Proyectos inclasificables, bocetos, pruebas de concepto y exploraciones libres que alimentan el proceso creativo diario.'
    }
  };

  /**
   * Lee dinámicamente la variable CSS --panel-delay definida en :root
   * para mantener sincronizados el CSS y JavaScript sin duplicar configuraciones
   */
  const getPanelDelayMs = () => {
    const raw = getComputedStyle(document.documentElement).getPropertyValue('--panel-delay').trim();
    if (raw.endsWith('ms')) return parseFloat(raw);
    if (raw.endsWith('s')) return parseFloat(raw) * 1000;
    return 600; // Valor de respaldo: 0.6s
  };

  class CategoriesMenuController {
    constructor() {
      this.nav = document.getElementById('categoriesNav');
      this.list = document.getElementById('categoriesList');
      this.activeLine = document.getElementById('categoryActiveLine');
      this.items = Array.from(document.querySelectorAll('.category-item'));
      this.display = document.getElementById('categoryDisplay');

      // Elementos del panel lateral de descripción
      this.panel = document.getElementById('categoryDescPanel') || document.getElementById('descriptionPanel');
      this.panelTitle = document.getElementById('panelCategoryTitle') || document.getElementById('descTitle');
      this.panelLine = document.getElementById('panelCategoryLine') || document.getElementById('descLine');
      this.panelDesc = document.getElementById('panelCategoryDesc') || document.getElementById('descParagraph');
      this.panelTextContainer = document.getElementById('panelTextContainer') || document.getElementById('descriptionTextInner');
      this.panelTimer = null;
      this.flyersManager = null;

      this.activeCategory = 'sobre-mi';

      if (!this.list || !this.activeLine || this.items.length === 0) return;

      this.init();
    }

    init() {
      this.bindCategoryClicks();
      this.bindResize();
      // Inicializar posición de la línea indicadora
      this.updateActiveLine(false);
      // Inicializar texto de la categoría inicial
      this.updateDescContent('sobre-mi');
    }

    bindCategoryClicks() {
      this.items.forEach((btn) => {
        btn.addEventListener('click', () => {
          const category = btn.dataset.category;
          this.selectCategory(category, btn);
        });
      });
    }

    getCurrentIndex() {
      return this.items.findIndex(btn => btn.classList.contains('is-active'));
    }

    nextCategory() {
      const currentIndex = this.getCurrentIndex();
      if (currentIndex >= 0 && currentIndex < this.items.length - 1) {
        const nextBtn = this.items[currentIndex + 1];
        this.selectCategory(nextBtn.dataset.category, nextBtn);
        return true;
      }
      return false;
    }

    prevCategory() {
      const currentIndex = this.getCurrentIndex();
      if (currentIndex > 0) {
        const prevBtn = this.items[currentIndex - 1];
        this.selectCategory(prevBtn.dataset.category, prevBtn);
        return true;
      }
      return false;
    }

    /**
     * Muestra el texto introductorio de Flyers en el panel derecho:
     * Sin título y sin línea divisoria (solo el párrafo descriptivo)
     */
    showFlyersIntro() {
      if (this.panelTextContainer) {
        this.panelTextContainer.classList.add('is-changing');
      }
      setTimeout(() => {
        if (this.panelTitle) {
          this.panelTitle.textContent = '';
          this.panelTitle.classList.add('is-hidden');
        }
        if (this.panelLine) {
          this.panelLine.classList.add('is-hidden');
        }
        if (this.panelDesc) {
          this.panelDesc.textContent = TEXTO_INTRO_FLYERS;
        }
        if (this.panelTextContainer) {
          this.panelTextContainer.classList.remove('is-changing');
        }
      }, 120);
    }

    /**
     * Muestra el título y descripción del flyer específico seleccionado en el feed
     */
    showFlyerDetail(flyer) {
      if (this.panelTextContainer) {
        this.panelTextContainer.classList.add('is-changing');
      }
      setTimeout(() => {
        if (this.panelTitle) {
          this.panelTitle.textContent = flyer.titulo;
          this.panelTitle.classList.remove('is-hidden');
        }
        if (this.panelLine) {
          this.panelLine.classList.remove('is-hidden');
        }
        if (this.panelDesc) {
          this.panelDesc.textContent = flyer.descripcion;
        }
        if (this.panelTextContainer) {
          this.panelTextContainer.classList.remove('is-changing');
        }
      }, 120);
    }

    updateDescContent(categoryName) {
      if (categoryName === 'flyers') {
        this.showFlyersIntro();
        return;
      }

      // Otras categorías: mostrar título y línea normalmente
      if (this.panelTitle) {
        this.panelTitle.classList.remove('is-hidden');
      }
      if (this.panelLine) {
        this.panelLine.classList.remove('is-hidden');
      }

      const data = CATEGORY_DATA[categoryName];
      if (!data) return;

      if (this.panelTitle) this.panelTitle.textContent = data.title;
      if (this.panelDesc) this.panelDesc.textContent = data.desc;
    }

    /**
     * Coreografía del Panel Lateral Derecho:
     * 1. Si ya estaba abierto, resetea rápidamente hacia la derecha
     * 2. Espera el tiempo configurable (--panel-delay: 0.6s)
     * 3. Se desliza suavemente hacia la izquierda con cubic-bezier(0.16, 1, 0.3, 1) y 0.8s
     */
    triggerPanelSequence(categoryName, immediate = false) {
      if (!this.panel) return;

      clearTimeout(this.panelTimer);

      const delayMs = immediate ? 0 : getPanelDelayMs();
      const wasOpen = document.body.classList.contains('panel-open');

      if (wasOpen && !immediate) {
        // 1. Instante 0s: reset rápido si ya estaba abierto
        this.panel.classList.add('is-resetting');
        document.body.classList.remove('panel-open');
        if (this.panelTextContainer) {
          this.panelTextContainer.classList.add('is-changing');
        }

        // 2. Con Delay: entrada suave con el nuevo contenido
        this.panelTimer = setTimeout(() => {
          this.updateDescContent(categoryName);
          this.panel.classList.remove('is-resetting');
          document.body.classList.add('panel-open');
          if (this.panelTextContainer) {
            this.panelTextContainer.classList.remove('is-changing');
          }
        }, delayMs);
      } else {
        // Panel estaba cerrado: preparar contenido y entrar con delay
        this.updateDescContent(categoryName);
        this.panel.classList.remove('is-resetting');

        if (immediate) {
          document.body.classList.add('panel-open');
        } else {
          this.panelTimer = setTimeout(() => {
            document.body.classList.add('panel-open');
          }, delayMs);
        }
      }
    }

    closeDescPanel() {
      clearTimeout(this.panelTimer);
      if (this.panel) {
        this.panel.classList.remove('is-resetting');
      }
      document.body.classList.remove('panel-open');
      if (this.flyersManager) {
        this.flyersManager.onLeaveCategory();
      }
    }

    selectCategory(categoryName, clickedBtn, immediate = false) {
      if (!clickedBtn) {
        clickedBtn = this.items.find(btn => btn.dataset.category === categoryName);
      }
      if (!clickedBtn) return;

      const isSame = (this.activeCategory === categoryName && clickedBtn.classList.contains('is-active'));
      if (isSame && document.body.classList.contains('panel-open')) {
        if (categoryName === 'flyers' && this.flyersManager?.selectedCard) {
          this.flyersManager.deselectAll(true);
        }
        return;
      }

      this.activeCategory = categoryName;

      // 1. Instante 0s: Actualizar estados de botones inmediatamente
      this.items.forEach((btn) => {
        const isCurrent = (btn === clickedBtn);
        btn.classList.toggle('is-active', isCurrent);
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });

      // 2. Deslizar fluidamente la barra indicadora
      this.updateActiveLine(true);

      // 3. Notificar y alternar visibilidad de los paneles del stage central
      this.updateDisplayPanel(categoryName);

      // 4. Iniciar o pausar galería de flyers, aleatorización y cinta de empaque
      if (categoryName === 'flyers') {
        if (this.flyersManager) {
          this.flyersManager.onEnterCategory();
        }
      } else {
        if (this.flyersManager) {
          this.flyersManager.onLeaveCategory();
        }
      }

      // 5. Coreografía del Panel Lateral Derecho de Descripción (solo en Frame 2)
      if (document.body.getAttribute('data-frame') === '2') {
        this.triggerPanelSequence(categoryName, immediate);
      }
    }

    updateActiveLine(smooth = true) {
      const activeBtn = this.items.find(btn => btn.classList.contains('is-active'));
      if (!activeBtn || !this.activeLine || !this.list) return;

      const wrapper = activeBtn.closest('.category-wrapper');
      if (!wrapper) return;

      // Posicionamiento vertical matemáticamente estable sin saltos de escala
      const topOffset = wrapper.offsetTop + activeBtn.offsetHeight - 2;

      if (!smooth) {
        this.activeLine.style.transition = 'none';
      } else {
        this.activeLine.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      }

      this.activeLine.style.transform = `translate3d(0, ${Math.round(topOffset)}px, 0)`;

      if (!smooth) {
        requestAnimationFrame(() => {
          this.activeLine.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
      }
    }

    updateDisplayPanel(categoryName) {
      if (!this.display) return;

      // Alternar clases is-active en cada panel según la categoría activa
      const panels = this.display.querySelectorAll('.category-panel');
      panels.forEach((panel) => {
        const isActive = (panel.id === `panel-${categoryName}`);
        panel.classList.toggle('is-active', isActive);
      });

      // Evento personalizado para que futuros módulos escuchen el cambio de categoría
      const event = new CustomEvent('categorychange', {
        detail: { category: categoryName }
      });
      document.dispatchEvent(event);
    }

    bindResize() {
      window.addEventListener('resize', () => {
        this.updateActiveLine(false);
      });

      window.addEventListener('orientationchange', () => {
        setTimeout(() => this.updateActiveLine(false), 200);
      });
    }
  }

  /* --------------------------------------------------------------------------
   * 6. GESTOR DE GALERÍA, CINTA DE EMPAQUE Y ROTACIONES DE FLYERS
   * -------------------------------------------------------------------------- */
  class FlyersGalleryManager {
    constructor(categoriesController) {
      this.categoriesController = categoriesController;
      this.scrollContainer = document.getElementById('flyersScrollContainer');
      this.grid = document.getElementById('flyersColumnsGrid');
      this.col1 = document.getElementById('flyersCol1');
      this.col2 = document.getElementById('flyersCol2');

      this.cards = [];
      this.intervals = [];
      this.shuffledList = [];
      this.selectedFlyerIndex = null;
      this.selectedCard = null;

      // Parámetros de la cinta de empaque (auto-scroll más rápido y continuo)
      this.isAutoScrolling = false;
      this.autoScrollSpeed = (typeof VELOCIDAD_CINTA_FLYERS !== 'undefined') ? VELOCIDAD_CINTA_FLYERS : 68;
      this.accumulatedScroll = 0;
      this.lastFrameTime = 0;
      this.rafId = null;
      this.batchHeight = 0;
      this.entranceDelayTimer = null;
      this.selectionTimestamp = 0;

      this.col1Batch1 = null;
      this.col2Batch1 = null;
      this.col1Batch2 = null;
      this.col2Batch2 = null;

      this.init();
    }

    init() {
      this.shuffleAndRender();
      this.bindEvents();
    }

    /**
     * Baraja aleatoriamente los flyers y crea dos lotes idénticos en cada columna
     * para lograr un bucle infinito matemáticamente continuo ("cinta de empaque")
     */
    shuffleAndRender() {
      if (!this.col1 || !this.col2) return;

      this.stopAutoScroll();
      this.stopRotations();
      this.selectedFlyerIndex = null;
      this.selectedCard = null;

      this.col1.innerHTML = '';
      this.col2.innerHTML = '';
      this.cards = [];

      // 1. Barajar aleatoriamente la lista de flyers (Fisher-Yates Shuffle)
      const list = [...LISTA_FLYERS];
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
      this.shuffledList = list;

      // 2. Crear contenedores de lotes (Batch 1 y Batch 2 para el loop infinito)
      this.col1Batch1 = document.createElement('div');
      this.col1Batch1.className = 'flyers-batch flyers-batch-1';
      this.col1Batch2 = document.createElement('div');
      this.col1Batch2.className = 'flyers-batch flyers-batch-2';

      this.col2Batch1 = document.createElement('div');
      this.col2Batch1.className = 'flyers-batch flyers-batch-1';
      this.col2Batch2 = document.createElement('div');
      this.col2Batch2.className = 'flyers-batch flyers-batch-2';

      // 3. Distribuir de forma alternada (par a Columna 1, impar a Columna 2)
      // Lote 1 (Principal):
      list.forEach((item, index) => {
        const isCol2 = (index % 2 !== 0);
        const cardObj = this.createCardElement(item, index, false);
        if (isCol2) {
          this.col2Batch1.appendChild(cardObj.card);
        } else {
          this.col1Batch1.appendChild(cardObj.card);
        }
        this.cards.push(cardObj);
      });

      // Lote 2 (Duplicado exacto para bucle infinito sin salto visual):
      list.forEach((item, index) => {
        const isCol2 = (index % 2 !== 0);
        const cloneObj = this.createCardElement(item, index, true);
        if (isCol2) {
          this.col2Batch2.appendChild(cloneObj.card);
        } else {
          this.col1Batch2.appendChild(cloneObj.card);
        }
        this.cards.push(cloneObj);
      });

      this.col1.appendChild(this.col1Batch1);
      this.col1.appendChild(this.col1Batch2);
      this.col2.appendChild(this.col2Batch1);
      this.col2.appendChild(this.col2Batch2);

      this.equalizeBatchHeights();
    }

    createCardElement(item, index, isClone = false) {
      const card = document.createElement('article');
      card.className = 'flyer-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.titulo);
      card.dataset.index = index;
      if (isClone) card.dataset.clone = 'true';

      const mediaWrap = document.createElement('div');
      mediaWrap.className = 'flyer-media-wrap';

      const basePath = CARPETA_FLYERS.endsWith('/') ? CARPETA_FLYERS : `${CARPETA_FLYERS}/`;
      const firstFile = item.archivos[0];
      const baseImg = document.createElement('img');
      baseImg.className = 'flyer-img-base';
      baseImg.src = `${basePath}${encodeURI(firstFile)}`;
      baseImg.alt = item.titulo;
      baseImg.draggable = false;
      baseImg.loading = 'eager';
      mediaWrap.appendChild(baseImg);

      const rotatingLayers = [];
      if (item.archivos.length > 1) {
        item.archivos.forEach((file, fileIdx) => {
          const layerImg = document.createElement('img');
          layerImg.className = `flyer-img-layer ${fileIdx === 0 ? 'is-active' : ''}`;
          layerImg.src = `${basePath}${encodeURI(file)}`;
          layerImg.alt = `${item.titulo} - variación ${fileIdx + 1}`;
          layerImg.draggable = false;
          layerImg.loading = 'lazy';
          mediaWrap.appendChild(layerImg);
          rotatingLayers.push(layerImg);
        });

        // Badge indicador de variaciones (Star Wars y PS1)
        const badge = document.createElement('div');
        badge.className = 'flyer-series-badge';
        badge.innerHTML = `<span class="badge-curr">1</span>/<span class="badge-total">${item.archivos.length}</span>`;
        card.appendChild(badge);
      }

      card.appendChild(mediaWrap);

      // Selección al clickear
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSelect(index, card);
      });

      // Selección accesible por teclado
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleSelect(index, card);
        }
      });

      // Recalcular balance de alturas cuando las imágenes cargan
      baseImg.addEventListener('load', () => {
        this.equalizeBatchHeights();
      });

      return {
        card,
        item,
        index,
        isClone,
        rotatingLayers,
        currentFileIdx: 0,
        intervalMs: item.intervalo || 1800
      };
    }

    /**
     * Sincroniza las alturas de los lotes entre ambas columnas para que
     * la cinta de empaque repita su ciclo en el píxel exacto sin saltos.
     */
    equalizeBatchHeights() {
      if (!this.col1Batch1 || !this.col2Batch1) return;

      this.col1Batch1.style.minHeight = '0px';
      this.col2Batch1.style.minHeight = '0px';
      if (this.col1Batch2) this.col1Batch2.style.minHeight = '0px';
      if (this.col2Batch2) this.col2Batch2.style.minHeight = '0px';

      const h1 = this.col1Batch1.offsetHeight;
      const h2 = this.col2Batch1.offsetHeight;
      const maxH = Math.max(h1, h2);

      if (maxH > 100) {
        this.batchHeight = maxH;
        this.col1Batch1.style.minHeight = `${maxH}px`;
        this.col2Batch1.style.minHeight = `${maxH}px`;
        if (this.col1Batch2) this.col1Batch2.style.minHeight = `${maxH}px`;
        if (this.col2Batch2) this.col2Batch2.style.minHeight = `${maxH}px`;
      }
    }

    bindEvents() {
      // 1. Clic fuera de cualquier tarjeta deselecciona inmediatamente y reanuda la cinta
      document.addEventListener('click', (e) => {
        if (this.selectedCard && !e.target.closest('.flyer-card')) {
          this.deselectAll();
        }
      });

      // 2. Al scrollear (rueda del mouse o gesto táctil) con un flyer marcado:
      // se desmarca automáticamente y la cinta vuelve a rodar
      const handleScrollWhileSelected = () => {
        if (this.categoriesController?.activeCategory === 'flyers' && this.selectedCard) {
          if (performance.now() - this.selectionTimestamp < 180) return;
          this.deselectAll(true);
        }
      };

      window.addEventListener('wheel', handleScrollWhileSelected, { passive: true });
      window.addEventListener('touchmove', handleScrollWhileSelected, { passive: true });

      // 3. Tecla Escape para deseleccionar de forma accesible
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.selectedCard) {
          this.deselectAll();
        }
      });

      // 4. Ajuste responsivo de la altura de los lotes
      window.addEventListener('resize', () => {
        this.equalizeBatchHeights();
      });
    }

    /**
     * Bucle continuo de la Cinta de Empaque con requestAnimationFrame
     * No se detiene al scrollear manualmente; solo se pausa al clickear un flyer.
     */
    startAutoScroll() {
      this.stopAutoScroll();
      this.isAutoScrolling = true;
      this.lastFrameTime = performance.now();
      this.accumulatedScroll = 0;

      const step = () => {
        if (!this.isAutoScrolling) return;

        const now = performance.now();
        const dt = Math.min((now - this.lastFrameTime) / 1000, 0.1);
        this.lastFrameTime = now;

        // Solo se detiene si hay un flyer seleccionado
        if (this.selectedFlyerIndex === null && this.scrollContainer) {
          this.accumulatedScroll += this.autoScrollSpeed * dt;
          if (this.accumulatedScroll >= 0.75) {
            this.scrollContainer.scrollTop += this.accumulatedScroll;
            this.accumulatedScroll = 0;
          }
        }

        // Bucle continuo: cuando el scroll supera el primer lote, resta exactamente su altura
        if (this.batchHeight > 200 && this.scrollContainer) {
          if (this.scrollContainer.scrollTop >= this.batchHeight) {
            this.scrollContainer.scrollTop -= this.batchHeight;
          } else if (this.scrollContainer.scrollTop < 0) {
            this.scrollContainer.scrollTop += this.batchHeight;
          }
        }

        this.rafId = requestAnimationFrame(step);
      };

      this.rafId = requestAnimationFrame(step);
    }

    stopAutoScroll() {
      this.isAutoScrolling = false;
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    }

    /**
     * Detiene la cinta, agranda el flyer con escala, aplica borde y lo centra
     */
    toggleSelect(index, cardEl) {
      if (this.selectedCard === cardEl) {
        this.deselectAll();
      } else {
        this.selectFlyer(index, cardEl);
      }
    }

    selectFlyer(index, cardEl) {
      this.selectedFlyerIndex = index;
      this.selectedCard = cardEl;
      this.selectionTimestamp = performance.now();

      // 1. Detener inmediatamente la cinta de empaque
      this.stopAutoScroll();

      // 2. Activar clase en la grilla y jerarquía de z-index entre columnas
      const isCol1 = Boolean(cardEl.closest('.flyers-col-1'));
      if (this.grid) {
        this.grid.classList.add('has-selected');
        this.grid.classList.toggle('has-selected-col1', isCol1);
        this.grid.classList.toggle('has-selected-col2', !isCol1);
      }
      if (this.col1 && this.col2) {
        this.col1.style.zIndex = isCol1 ? '60' : '1';
        this.col2.style.zIndex = isCol1 ? '1' : '60';
      }

      // 3. Actualizar estado visual y escala en las tarjetas
      this.cards.forEach((c) => {
        const isCurrent = (c.card === cardEl);
        c.card.classList.toggle('is-selected', isCurrent);
      });

      // 4. Centrar suavemente en el flyer seleccionado
      this.centerCard(cardEl);

      // 5. Mostrar título y descripción en el panel derecho
      const flyer = this.shuffledList[index];
      if (this.categoriesController && flyer) {
        this.categoriesController.showFlyerDetail(flyer);
      }
    }

    centerCard(cardEl) {
      if (!this.scrollContainer || !cardEl) return;

      const containerRect = this.scrollContainer.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();

      const cardCenter = cardRect.top + cardRect.height / 2;
      const containerCenter = containerRect.top + containerRect.height / 2;
      const deltaY = cardCenter - containerCenter;

      let targetScrollTop = this.scrollContainer.scrollTop + deltaY;

      // Mantener targetScrollTop dentro del rango del bucle continuo sin topar en 0
      if (this.batchHeight > 200) {
        if (targetScrollTop < 0) {
          this.scrollContainer.scrollTop += this.batchHeight;
          targetScrollTop += this.batchHeight;
        } else if (targetScrollTop >= this.batchHeight * 1.5) {
          this.scrollContainer.scrollTop -= this.batchHeight;
          targetScrollTop -= this.batchHeight;
        }
      }

      this.scrollContainer.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: 'smooth'
      });
    }

    deselectAll(resumeAutoScroll = true) {
      if (this.selectedFlyerIndex === null && !this.selectedCard) return;

      this.selectedFlyerIndex = null;
      this.selectedCard = null;

      // Quitar clases de enfoque en la grilla y restablecer z-index de columnas
      if (this.grid) {
        this.grid.classList.remove('has-selected', 'has-selected-col1', 'has-selected-col2');
      }
      if (this.col1 && this.col2) {
        this.col1.style.zIndex = '';
        this.col2.style.zIndex = '';
      }

      this.cards.forEach(c => c.card.classList.remove('is-selected'));

      // Restaurar texto introductorio en el panel derecho solo si seguimos en Flyers
      if (this.categoriesController && this.categoriesController.activeCategory === 'flyers') {
        this.categoriesController.showFlyersIntro();
      }

      // Reanudar la cinta de empaque solo si se solicita y estamos en Flyers
      if (resumeAutoScroll && this.categoriesController?.activeCategory === 'flyers') {
        this.startAutoScroll();
      }
    }

    /**
     * Rotación de variaciones para Star Wars y PS1
     * Sincroniza ambas apariciones (original y duplicada en el loop)
     */
    startRotations() {
      this.stopRotations();

      const multiCards = this.cards.filter(c => c.rotatingLayers.length > 1);
      const groups = new Map();

      multiCards.forEach((cardObj) => {
        if (!groups.has(cardObj.item)) {
          groups.set(cardObj.item, []);
        }
        groups.get(cardObj.item).push(cardObj);
      });

      groups.forEach((groupCards, item) => {
        const intervalMs = item.intervalo || 1800;
        let currentIdx = 0;
        const total = item.archivos.length;

        const timer = setInterval(() => {
          const nextIdx = (currentIdx + 1) % total;
          groupCards.forEach((cardObj) => {
            cardObj.rotatingLayers[currentIdx]?.classList.remove('is-active');
            cardObj.rotatingLayers[nextIdx]?.classList.add('is-active');
            const badgeCurr = cardObj.card.querySelector('.badge-curr');
            if (badgeCurr) badgeCurr.textContent = (nextIdx + 1).toString();
          });
          currentIdx = nextIdx;
        }, intervalMs);

        this.intervals.push(timer);
      });
    }

    stopRotations() {
      this.intervals.forEach(id => clearInterval(id));
      this.intervals = [];
    }

    /**
     * Invocado al entrar a la categoría "Flyers"
     */
    onEnterCategory() {
      clearTimeout(this.entranceDelayTimer);

      // 1. Cada vez que entra, baraja aleatoriamente los flyers
      this.shuffleAndRender();

      // 2. Resetea el scroll al inicio
      if (this.scrollContainer) {
        this.scrollContainer.scrollTop = 0;
      }

      // 3. Inicia las rotaciones de Star Wars y PS1
      this.startRotations();

      // 4. Inicia la cinta de empaque una vez concluida la entrada de guillotina (~900ms)
      this.entranceDelayTimer = setTimeout(() => {
        this.equalizeBatchHeights();
        this.startAutoScroll();
      }, 920);
    }

    /**
     * Invocado al salir de la categoría "Flyers"
     */
    onLeaveCategory() {
      clearTimeout(this.entranceDelayTimer);
      this.deselectAll(false);
      this.stopAutoScroll();
      this.stopRotations();
      // Nota: no resetear scrollTop aquí para permitir que la animación de salida por guillotina sea fluida
    }
  }

  /* --------------------------------------------------------------------------
   * 7. BOOTSTRAP DE LA APLICACIÓN
   * -------------------------------------------------------------------------- */
  const init = () => {
    initLoadAnimation();
    new TechGrid('techGridCanvas');
    new ContinuousInkAnimation();

    const categoriesController = new CategoriesMenuController();
    const flyersManager = new FlyersGalleryManager(categoriesController);
    categoriesController.flyersManager = flyersManager;

    const frameController = new FrameTransitionController(categoriesController);

    // Exponer globalmente para depuración o llamadas desde consola si se requiere
    window.portfolio = {
      frameController,
      categoriesController,
      flyersManager
    };
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
