/**
 * ============================================================================
 * AGUSTIN TABBITA — PORTFOLIO
 * Interaction & Architecture Engine (Frame 1 & Frame 2)
 * ============================================================================
 */

(function () {
  'use strict';

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

        const alpha = isMajor ? 0.038 : 0.016;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = isMajor ? 1 : 0.8;

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

        const alpha = isMajor ? 0.038 : 0.016;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = isMajor ? 1 : 0.8;

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

          this.drawCross(crossX, crossY, 14, 0.055);

          const dotX = crossX + majorStep / 2;
          const dotY = crossY + majorStep / 2;

          if (dotX < width && dotY < height) {
            this.drawDot(dotX, dotY, 2, 0.035);
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
        }
      } else {
        if (categoriesNav) {
          categoriesNav.classList.remove('is-ready');
        }
        // Al regresar a Frame 1, reiniciar categoría activa a Sobre mi (índice 0)
        if (this.categoriesController) {
          const firstBtn = this.categoriesController.items[0];
          if (firstBtn) {
            this.categoriesController.selectCategory(firstBtn.dataset.category, firstBtn);
          }
        }
      }
    }

    bindEvents() {
      // 1. Navegación por rueda del ratón / trackpad (wheel)
      window.addEventListener('wheel', (e) => {
        if (this.isThrottled) return;

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
   * 5. CONTROLADOR DEL MENÚ DE CATEGORÍAS (Feedback interactivo y línea indicadora)
   * -------------------------------------------------------------------------- */
  class CategoriesMenuController {
    constructor() {
      this.nav = document.getElementById('categoriesNav');
      this.list = document.getElementById('categoriesList');
      this.activeLine = document.getElementById('categoryActiveLine');
      this.items = Array.from(document.querySelectorAll('.category-item'));
      this.display = document.getElementById('categoryDisplay');

      this.activeCategory = 'sobre-mi';

      if (!this.list || !this.activeLine || this.items.length === 0) return;

      this.init();
    }

    init() {
      this.bindCategoryClicks();
      this.bindResize();
      // Inicializar posición de la línea indicadora
      this.updateActiveLine(false);
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

    selectCategory(categoryName, clickedBtn) {
      if (!clickedBtn) {
        clickedBtn = this.items.find(btn => btn.dataset.category === categoryName);
      }
      if (!clickedBtn) return;

      if (this.activeCategory === categoryName && clickedBtn.classList.contains('is-active')) {
        return;
      }

      this.activeCategory = categoryName;

      // 1. Actualizar estados de los botones (aria-selected y clase is-active)
      this.items.forEach((btn) => {
        const isCurrent = (btn === clickedBtn);
        btn.classList.toggle('is-active', isCurrent);
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });

      // 2. Deslizar fluidamente la barra indicadora de 52px con cubic-bezier
      this.updateActiveLine(true);

      // 3. Notificar y alternar visibilidad de los paneles del contenedor principal
      this.updateDisplayPanel(categoryName);
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
   * 6. BOOTSTRAP DE LA APLICACIÓN
   * -------------------------------------------------------------------------- */
  const init = () => {
    initLoadAnimation();
    new TechGrid('techGridCanvas');
    new ContinuousInkAnimation();

    const categoriesController = new CategoriesMenuController();
    const frameController = new FrameTransitionController(categoriesController);

    // Exponer globalmente para depuración o llamadas desde consola si se requiere
    window.portfolio = {
      frameController,
      categoriesController
    };
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
