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
  const TEXTO_INTRO_FLYERS = "Flyers, posters, afiches, postales. Piezas graficas que hago de cosas que me gustan, de cosas que vi, de lo que me fanatice o que simplemente tenia ganas de hacer.";

  // Configuración de Instagram y segundo párrafo para Flyers:
  const URL_INSTAGRAM = "https://www.instagram.com/tabbidm02"; // Modificar con tu usuario de Instagram si es diferente
  const TEXTO_INSTAGRAM_FLYERS = "Todos estos diseños y muchos más los comparto en mi cuenta de Instagram";

  // Fecha de nacimiento para cálculo dinámico de edad (2 de julio de 2002):
  // Se actualiza automáticamente cada 2 de julio de cada año.
  const NACIMIENTO_AGUSTIN = { anio: 2002, mes: 6, dia: 2 }; // Mes 6 = Julio (0-indexed en JavaScript)

  const calcularEdad = (nacimiento = NACIMIENTO_AGUSTIN) => {
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.anio;
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();

    if (mesActual < nacimiento.mes || (mesActual === nacimiento.mes && diaActual < nacimiento.dia)) {
      edad--;
    }
    return edad;
  };

  // Velocidad de la cinta de empaque en píxeles por segundo (Ajustable a gusto):
  const VELOCIDAD_CINTA_FLYERS = 95;

  // Lista de flyers y series:
  // NOTA: PlayStation, Star Wars y Exploración Visual están agrupados en series rotatorias.
  // Todos los demás flyers se presentan individualmente y su orden se baraja
  // aleatoriamente cada vez que se ingresa a la categoría "Flyers".
  const LISTA_FLYERS = [
    {
      archivos: ["DTmF post vertical@72x-100.jpg"],
      titulo: "DTmF - Bad BUnny",
      descripcion: "Afiche que hice cuando escuché por completo el álbum. Dibujos propios, muchas texturas y pruebas de composición."
    },
    {
      archivos: ["Mesa de trabajo 2@72x-100.jpg"],
      titulo: "MDQ - Mar Del Plata",
      descripcion: "Poster de la hermosa ciudad de Mar Del Plata, con una fotografía propia de la playa Alfonsina, un bello día de Febrero."
    },
    {
      archivos: ["Cadaver exquisito_Mesa de trabajo 1.png"],
      titulo: "Cadáver Exquisito",
      descripcion: "Flyer un poco básico, de una de las mejores obras literarias que leí, probando con texturas."
    },
    {
      archivos: ["flayer 3 cato&paco.png"],
      titulo: "Cato & Paco - Ver.1",
      descripcion: "Diseño que hice cuando Catriel y Paco sacaron su disco debut como duo."
    },
    {
      archivos: ["flayer 4 cato&paco.png"],
      titulo: "Cato & Paco - Ver.2",
      descripcion: "Segundo diseño que hice cuando Catriel y Paco sacaron su disco debut como duo."
    },
    {
      archivos: ["Tunic Flayer_1.jpg"],
      titulo: "Tunic - Ver.1",
      descripcion: "Uno de los diseños que hice para este hermoso juego, me volvió loco la primera vez que lo jugué. Prueba con transparencias y texto."
    },
    {
      archivos: ["Tunic Flayer_2.jpg"],
      titulo: "Tunic - Ver.2",
      descripcion: "Diseño por lo que me enloqueció el juego de Tunic. Tratando de imitar algo más verosímil del juego."
    },
    {
      archivos: ["MISTERNA,CO-OFFLINE.png"],
      titulo: "Misternacho - Offline",
      descripcion: "Banner que hice para el streamer Misternacho para su canal de Kick, utilizado actualmente.",
      scale: 2.6
    },
    {
      archivos: ["PORSCHE_Mesa de trabajo 1.jpg"],
      titulo: "Porsche 911",
      descripcion: "En una época me fanatice con este auto, lo adoro. Jugué mucho con texturas además de contrastes de grises y rojos."
    },
    // --- SERIE AGRUPADA 1: PlayStation 30th Anniversary (Rotación de variaciones) ---
    {
      archivos: ["PS130th black.jpg", "PS130TH grey.jpg", "PS130TH withe.jpg"],
      intervalo: 3000,
      titulo: "PlayStation 30th Anniversary",
      descripcion: "Una serie de Flyers que hice para el aniversario de la PlayStation 1, unos cuantos recolors"
    },
    {
      archivos: ["Horizon Flayer IG_1.jpg"],
      titulo: "Horizon Zero Dawn - Ver.1",
      descripcion: "Uno de los primeros Flyers que hice, habia terminado de jugar este juego y necesitaba demostrar lo que me había gustado."
    },
    {
      archivos: ["Horizon Flayer IG_2.jpg"],
      titulo: "Horizon Zero Dawn - Ver.2",
      descripcion: "Otro de los primeros Flyers que hice, habia terminado de jugar este juego y necesitaba demostrar lo que me había gustado."
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
      intervalo: 3000,
      titulo: "Star Wars - Carátulas",
      descripcion: "Colección de carátulas que hice de la saga de Star Wars, jugando con minimalismo y paletas de colores específicas",
      scale: 2.15
    },
    {
      archivos: ["MAUL1.png"],
      titulo: "Darth Maul - Ver.1",
      descripcion: "Villano que amo de Star Wars, mi personaje favorito incluso. Contrastes y juego de texturas en los textos."
    },
    {
      archivos: ["MAUL2.png"],
      titulo: "Darth Maul - Ver.2",
      descripcion: "Villano que amo de Star Wars, mi personaje favorito incluso. Contrastes y juego de texturas en los textos. Ilustraciones sacadas de sus propios comics."
    },
    {
      archivos: ["neuropibada.jpg"],
      titulo: "Desde el Respeto - Neuropibes",
      descripcion: "Flyer que hice con cariño para un gran programa de streaming en Vorterix, Desde El Respeto."
    },
    {
      archivos: ["Mesa de trabajo 1.png"],
      titulo: "Senna",
      descripcion: "Flyer hecho despues de ver el documental de Senna"
    },
    {
      archivos: ["Mesa de trabajo1.png"],
      titulo: "La Virgen de la Tosquera",
      descripcion: "Flyer que hice para participar del concurso de Diseños para la película La Virgen de la Tosquera, basado en el cuento de Mariana Enriquez"
    },
    {
      archivos: ["arg (pdf.io).jpg"],
      titulo: "Argentina - Inglaterra",
      descripcion: "Homenaje al partido del Mundial 2026 de Argentina contra Inglaterra, emocionante partido. De mis flyers favoritos"
    },
    {
      archivos: ["badbunny concierto.jpg"],
      titulo: "Bad Bunny - Dtmf Tour",
      descripcion: "Flyer que hice con fotos propias tomadas en el increíble recital de Bad Bunny en el Monumental."
    },
    // --- SERIE AGRUPADA 3: Exploración Visual (Colección rotatoria de 3 piezas) ---
    {
      archivos: [
        "Mesa de trabajo 1.jpg",
        "Mesa de trabajo 1 copia 2.jpg",
        "Mesa de trabajo 1 copia 3.jpg"
      ],
      intervalo: 3000,
      titulo: "Gracias Eternas",
      descripcion: "Serie de Flyers realizada en conmemoración del subcampeonato obtenido por la Selección Argentina en el Mundial 2026.",
      fit: "contain",
      bg: "#FDFCF8"
    }
  ];
  /* ========================================================================== */

  /* --------------------------------------------------------------------------
   * 1. CONTROLADOR DE CARGA INICIAL
   * -------------------------------------------------------------------------- */
  const initLoadAnimation = () => {
    const triggerLoaded = () => {
      const userAgeEl = document.getElementById('userAge');
      if (userAgeEl) {
        userAgeEl.textContent = calcularEdad().toString();
      }

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
      this.displace   = document.getElementById('inkDisplace');
      if (!this.turbulence) return;

      // ── Parámetros ajustables ──────────────────────────────────────────────
      // Frecuencia del ruido fractal (cuánto "riza" la tinta en X e Y)
      this.FREQ_X            = 0.040;
      this.FREQ_Y            = 0.018;
      // Intensidad del displacement (cuánto "mueve" la tinta)
      this.SCALE             = 7;
      // Cada cuántos ms salta el seed (varía el patrón fractal)
      this.INTERVALO_SEED    = 85;
      // ──────────────────────────────────────────────────────────────────────

      this.seed      = 1;
      this.seedTimer = null;

      this.init();
    }

    init() {
      // Aplicar valores fijos al iniciar
      this.turbulence.setAttribute('baseFrequency', `${this.FREQ_X} ${this.FREQ_Y}`);
      if (this.displace) this.displace.setAttribute('scale', this.SCALE);

      this.start();
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) { this.stop(); } else { this.start(); }
      });
    }

    start() {
      if (this.seedTimer) return;
      // Solo el seed cambia: varía el patrón sin animar la intensidad
      this.seedTimer = setInterval(() => {
        this.seed = (this.seed % 12) + 1;
        this.turbulence.setAttribute('seed', this.seed.toString());
      }, this.INTERVALO_SEED);
    }

    stop() {
      if (this.seedTimer) { clearInterval(this.seedTimer); this.seedTimer = null; }
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

      // Emitir evento personalizado para que PolaroidsManager y otros módulos escuchen el cambio
      document.dispatchEvent(new CustomEvent('framechange', { detail: { frame: frameNumber } }));

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
      const descPanel = document.getElementById('categoryDescPanel');

      // 1. Navegación por rueda del ratón / trackpad (wheel)
      window.addEventListener('wheel', (e) => {
        if (this.isThrottled) return;

        // Zona activa de Flyers: en Frame 2 y categoría "flyers", toda la zona derecha
        // de la pantalla (feed de flyers + panel de descripción blanco) scrollea la cinta continua de flyers.
        const flyersFeed = document.getElementById('flyersScrollContainer');
        const isRightZone = (
          (flyersFeed && (flyersFeed.contains(e.target) || e.target.closest('#panel-flyers'))) ||
          (descPanel && descPanel.contains(e.target)) ||
          e.clientX >= window.innerWidth * 0.22
        );

        if (this.currentFrame === 2 && this.categoriesController?.activeCategory === 'flyers' && isRightZone) {
          // Si el scroll ocurrió fuera del contenedor nativo de flyers (ej. en el panel de texto blanco a la derecha),
          // redirigir el desplazamiento directamente al feed de flyers
          if (flyersFeed && !flyersFeed.contains(e.target)) {
            let dy = e.deltaY;
            if (e.deltaMode === 1) { // Modo líneas (Firefox / Windows)
              dy *= 32;
            } else if (e.deltaMode === 2) { // Modo páginas
              dy *= window.innerHeight;
            }
            flyersFeed.scrollTop += dy;
          }
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

      // 2. Soporte táctil en panel lateral derecho para scrollear flyers
      if (descPanel) {
        let panelTouchY = null;
        descPanel.addEventListener('touchstart', (e) => {
          if (e.touches.length > 0) {
            panelTouchY = e.touches[0].clientY;
          }
        }, { passive: true });

        descPanel.addEventListener('touchmove', (e) => {
          if (this.categoriesController?.activeCategory === 'flyers' && e.touches.length > 0 && panelTouchY !== null) {
            const currentY = e.touches[0].clientY;
            const deltaY = panelTouchY - currentY;
            panelTouchY = currentY;
            const flyersFeed = document.getElementById('flyersScrollContainer');
            if (flyersFeed) {
              flyersFeed.scrollTop += deltaY;
            }
          }
        }, { passive: true });

        descPanel.addEventListener('touchend', () => {
          panelTouchY = null;
        }, { passive: true });
        descPanel.addEventListener('touchcancel', () => {
          panelTouchY = null;
        }, { passive: true });
      }

      // 3. Navegación táctil global (swipe) para smartphones y tablets
      let touchStartX = 0;
      window.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
          this.touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      window.addEventListener('touchend', (e) => {
        if (this.isThrottled || e.changedTouches.length === 0) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = this.touchStartY - touchEndY;

        const flyersFeed = document.getElementById('flyersScrollContainer');
        const isRightZone = (
          (flyersFeed && (flyersFeed.contains(e.target) || e.target.closest('#panel-flyers'))) ||
          (descPanel && descPanel.contains(e.target)) ||
          touchStartX >= window.innerWidth * 0.22 ||
          touchEndX >= window.innerWidth * 0.22
        );

        if (this.currentFrame === 2 && this.categoriesController?.activeCategory === 'flyers' && isRightZone) {
          return;
        }

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
  let cachedSobreMiHtml = null;

  const getTextoSobreMi = () => {
    // Si el usuario editó index.html directamente, capturamos automáticamente su HTML del DOM
    if (!cachedSobreMiHtml) {
      const descEl = document.getElementById('panelCategoryDesc');
      if (descEl && descEl.innerHTML.trim().length > 0) {
        cachedSobreMiHtml = descEl.innerHTML;
      }
    }

    const edad = calcularEdad();

    if (cachedSobreMiHtml) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = cachedSobreMiHtml;
      const ageSpan = tempDiv.querySelector('#userAge');
      if (ageSpan) {
        ageSpan.textContent = edad.toString();
      }
      return tempDiv.innerHTML;
    }

    return `
      <p>Holaa, me dicen Tabbi, tengo <span id="userAge">${edad}</span> años y actualmente estudio Licenciatura en Diseño Multimedial en la Facultad de Artes UNLP.</p>
      <p>Me considero una persona muy creativa y predispuesta para cualquier tipo de proyecto. Elegí Diseño Multimedial porque me cuesta quedarme con una sola área del diseño y arte, siento que siempre hay algo innovador para hacer.</p>
      <p>Me gustan mucho los videojuegos, la musica y el cine. No me encasillo en un solo genero, siento que todo tiene algo bueno para ofrecer.</p>
      <p>Por ese mismo motivo creo que Diseño Multimedial es la carrera perfecta para mí, y es un poco lo que demuestro en este portfolio.</p>
      <div class="apps-section">
        <p class="apps-title">Aplicaciones que realmente sé usar:</p>
        <div class="apps-grid">
          <!-- Fila 1 -->
          <div class="app-item" data-app="Resolume Arena">
            <div class="app-icon-box">
              <img src="svg/image 2.svg" alt="Resolume Arena" class="app-icon" draggable="false">
            </div>
            <span class="app-name">Resolume Arena</span>
          </div>
          <div class="app-item" data-app="TouchDesigner">
            <div class="app-icon-box">
              <img src="svg/image 1.svg" alt="TouchDesigner" class="app-icon" draggable="false">
            </div>
            <span class="app-name">TouchDesigner</span>
          </div>
          <div class="app-item" data-app="Figma">
            <div class="app-icon-box">
              <img src="svg/image 3.svg" alt="Figma" class="app-icon" draggable="false">
            </div>
            <span class="app-name">Figma</span>
          </div>

          <!-- Fila 2 -->
          <div class="app-item" data-app="Illustrator">
            <div class="app-icon-box">
              <img src="svg/image 4.svg" alt="Illustrator" class="app-icon" draggable="false">
            </div>
            <span class="app-name">Illustrator</span>
          </div>
          <div class="app-item" data-app="Antigravity">
            <div class="app-icon-box">
              <img src="svg/image 5.svg" alt="Antigravity" class="app-icon" draggable="false">
            </div>
            <span class="app-name">Antigravity</span>
          </div>
        </div>
      </div>
    `;
  };

  const CATEGORY_DATA = {
    'sobre-mi': {
      title: 'Agustin Tabbita',
      desc: getTextoSobreMi
    },
    'flyers': {
      title: '', // Sin título en el estado introductorio
      desc: ''
    },
    'multimediales': {
      title: 'Multimediales',
      desc: 'Instalaciones interactivas, motion graphics y proyectos audiovisuales que exploran el espacio, el tiempo y la relación activa con el espectador.'
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
      document.body.setAttribute('data-category', 'sobre-mi');
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
     * Sin título y sin línea divisoria (solo los párrafos descriptivos y el botón de Instagram)
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
          this.panelDesc.innerHTML = `
            <p>${TEXTO_INTRO_FLYERS}</p>
            <p>${TEXTO_INSTAGRAM_FLYERS}</p>
            <a href="${URL_INSTAGRAM}" target="_blank" rel="noopener noreferrer" class="panel-btn-instagram" aria-label="Ver más en @tabbidm02">
              <span class="btn-ig-icon-box" aria-hidden="true">
                <svg class="btn-ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <span class="btn-ig-text">ver más en @tabbidm02</span>
            </a>
          `;
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
          this.panelDesc.innerHTML = `<p>${flyer.descripcion}</p>`;
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
      if (this.panelDesc) {
        const content = typeof data.desc === 'function' ? data.desc() : data.desc;
        if (typeof content === 'string' && content.includes('<')) {
          this.panelDesc.innerHTML = content;
        } else {
          this.panelDesc.textContent = content;
        }
      }
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
      document.body.setAttribute('data-category', categoryName);

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
      this.col3 = document.getElementById('flyersCol3');

      this.cards = [];
      this.intervals = [];
      this.shuffledList = [];
      this.selectedFlyerIndex = null;
      this.selectedCard = null;

      // Parámetros de la cinta de empaque (auto-scroll continuo)
      this.isAutoScrolling = false;
      this.autoScrollSpeed = (typeof VELOCIDAD_CINTA_FLYERS !== 'undefined') ? VELOCIDAD_CINTA_FLYERS : 95;
      this.accumulatedScroll = 0;
      this.lastFrameTime = 0;
      this.rafId = null;
      this.batchHeight = 0;
      this.entranceDelayTimer = null;
      this.selectionTimestamp = 0;

      this.col1Batch1 = null;
      this.col2Batch1 = null;
      this.col3Batch1 = null;
      this.col1Batch2 = null;
      this.col2Batch2 = null;
      this.col3Batch2 = null;

      this.init();
    }

    init() {
      this.shuffleAndRender();
      this.bindEvents();
    }

    /**
     * Baraja aleatoriamente los flyers y crea dos lotes idénticos en cada columna
     * para lograr un bucle infinito matemáticamente continuo ("cinta de empaque") en 3 columnas
     */
    shuffleAndRender() {
      if (!this.col1 || !this.col2 || !this.col3) return;

      this.stopAutoScroll();
      this.stopRotations();
      this.selectedFlyerIndex = null;
      this.selectedCard = null;

      this.col1.innerHTML = '';
      this.col2.innerHTML = '';
      this.col3.innerHTML = '';
      this.cards = [];

      // 1. Barajar aleatoriamente la lista de flyers (Fisher-Yates Shuffle)
      const list = [...LISTA_FLYERS];
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
      this.shuffledList = list;

      // 2. Crear contenedores de lotes (Batch 1 y Batch 2 para el loop infinito en 3 columnas)
      this.col1Batch1 = document.createElement('div');
      this.col1Batch1.className = 'flyers-batch flyers-batch-1';
      this.col1Batch2 = document.createElement('div');
      this.col1Batch2.className = 'flyers-batch flyers-batch-2';

      this.col2Batch1 = document.createElement('div');
      this.col2Batch1.className = 'flyers-batch flyers-batch-1';
      this.col2Batch2 = document.createElement('div');
      this.col2Batch2.className = 'flyers-batch flyers-batch-2';

      this.col3Batch1 = document.createElement('div');
      this.col3Batch1.className = 'flyers-batch flyers-batch-1';
      this.col3Batch2 = document.createElement('div');
      this.col3Batch2.className = 'flyers-batch flyers-batch-2';

      // 3. Distribuir de forma alternada en 3 columnas
      // Lote 1 (Principal):
      list.forEach((item, index) => {
        const colMod = index % 3;
        const cardObj = this.createCardElement(item, index, false);
        if (colMod === 0) {
          this.col1Batch1.appendChild(cardObj.card);
        } else if (colMod === 1) {
          this.col2Batch1.appendChild(cardObj.card);
        } else {
          this.col3Batch1.appendChild(cardObj.card);
        }
        this.cards.push(cardObj);
      });

      // Lote 2 (Duplicado exacto para bucle infinito sin salto visual):
      list.forEach((item, index) => {
        const colMod = index % 3;
        const cloneObj = this.createCardElement(item, index, true);
        if (colMod === 0) {
          this.col1Batch2.appendChild(cloneObj.card);
        } else if (colMod === 1) {
          this.col2Batch2.appendChild(cloneObj.card);
        } else {
          this.col3Batch2.appendChild(cloneObj.card);
        }
        this.cards.push(cloneObj);
      });

      this.col1.appendChild(this.col1Batch1);
      this.col1.appendChild(this.col1Batch2);
      this.col2.appendChild(this.col2Batch1);
      this.col2.appendChild(this.col2Batch2);
      this.col3.appendChild(this.col3Batch1);
      this.col3.appendChild(this.col3Batch2);

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

      if (item.bg) {
        mediaWrap.style.backgroundColor = item.bg;
        card.style.backgroundColor = item.bg;
      }
      if (item.fit) {
        card.classList.add(`is-fit-${item.fit}`);
      }
      if (item.scale) {
        card.style.setProperty('--card-selected-scale', item.scale);
      }

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
        card.classList.add('has-series');
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
        intervalMs: item.intervalo || 3000
      };
    }

    /**
     * Sincroniza las alturas de los lotes entre las 3 columnas para que
     * la cinta de empaque repita su ciclo en el píxel exacto sin saltos.
     */
    equalizeBatchHeights() {
      if (!this.col1Batch1 || !this.col2Batch1 || !this.col3Batch1) return;

      this.col1Batch1.style.minHeight = '0px';
      this.col2Batch1.style.minHeight = '0px';
      this.col3Batch1.style.minHeight = '0px';
      if (this.col1Batch2) this.col1Batch2.style.minHeight = '0px';
      if (this.col2Batch2) this.col2Batch2.style.minHeight = '0px';
      if (this.col3Batch2) this.col3Batch2.style.minHeight = '0px';

      const h1 = this.col1Batch1.offsetHeight;
      const h2 = this.col2Batch1.offsetHeight;
      const h3 = this.col3Batch1.offsetHeight;
      const maxH = Math.max(h1, h2, h3);

      if (maxH > 100) {
        this.batchHeight = maxH;
        this.col1Batch1.style.minHeight = `${maxH}px`;
        this.col2Batch1.style.minHeight = `${maxH}px`;
        this.col3Batch1.style.minHeight = `${maxH}px`;
        if (this.col1Batch2) this.col1Batch2.style.minHeight = `${maxH}px`;
        if (this.col2Batch2) this.col2Batch2.style.minHeight = `${maxH}px`;
        if (this.col3Batch2) this.col3Batch2.style.minHeight = `${maxH}px`;
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

      // 5. Garantizar envoltura instantánea del bucle continuo al scrollear manualmente
      if (this.scrollContainer) {
        this.scrollContainer.addEventListener('scroll', () => {
          if (this.batchHeight > 200) {
            if (this.scrollContainer.scrollTop >= this.batchHeight) {
              this.scrollContainer.scrollTop -= this.batchHeight;
            } else if (this.scrollContainer.scrollTop < 0) {
              this.scrollContainer.scrollTop += this.batchHeight;
            }
          }
        }, { passive: true });
      }
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
      const isCol2 = Boolean(cardEl.closest('.flyers-col-2'));
      const isCol3 = Boolean(cardEl.closest('.flyers-col-3'));

      if (this.grid) {
        this.grid.classList.add('has-selected');
        this.grid.classList.toggle('has-selected-col1', isCol1);
        this.grid.classList.toggle('has-selected-col2', isCol2);
        this.grid.classList.toggle('has-selected-col3', isCol3);
      }
      if (this.col1 && this.col2 && this.col3) {
        this.col1.style.zIndex = isCol1 ? '60' : '1';
        this.col2.style.zIndex = isCol2 ? '60' : '1';
        this.col3.style.zIndex = isCol3 ? '60' : '1';
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
        this.grid.classList.remove('has-selected', 'has-selected-col1', 'has-selected-col2', 'has-selected-col3');
      }
      if (this.col1 && this.col2 && this.col3) {
        this.col1.style.zIndex = '';
        this.col2.style.zIndex = '';
        this.col3.style.zIndex = '';
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
        const intervalMs = item.intervalo || 3000;
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
   * 6b. POLAROIDS MANAGER (Categoría "Sobre mí")
   * Tirada de polaroids con despeje físico sobre la mesa (sin efecto zoom)
   * -------------------------------------------------------------------------- */
  class PolaroidsManager {
    constructor() {
      this.stage = document.getElementById('polaroidsStage');
      // Archivos detectados automáticamente del directorio svg/
      this.files = [
        'svg/Group 21.svg',
        'svg/Group 22.svg',
        'svg/Group 23.svg',
        'svg/Group 24.svg',
        'svg/Group 25.svg',
        'svg/Group 26.svg',
        'svg/Group 27.svg',
        'svg/Group 28.svg',
        'svg/Group 29.svg',
        'svg/Capa 233.svg'
      ];
      this.items = [];
      this.topZIndex = 10;
      this.isAnimating = false;
      this.throwTimers = [];

      if (!this.stage) return;
      this._build();
      this._bindCategoryChange();
      this._bindResize();
    }

    /* --- Construir los elementos polaroid en el DOM --- */
    _build() {
      this.stage.innerHTML = '';
      this.items = [];

      this.files.forEach((src, i) => {
        const el = document.createElement('div');
        el.className = 'polaroid-item';
        el.setAttribute('aria-label', `Polaroid ${i + 1}`);
        el.style.zIndex = i + 1;

        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.draggable = false;
        el.appendChild(img);

        // Estado inicial arriba fuera de pantalla (sin escala ni zoom)
        el.style.left = '0px';
        el.style.top = '0px';
        el.style.transform = `translate(0px, 0px) rotate(0deg) translateY(-125vh)`;
        el.style.opacity = '0';

        this.stage.appendChild(el);
        this.items.push(el);

        this._bindDrag(el, i);
        this._bindCardHover(el, i);
      });

      this._applyLayouts();
    }

    /* --- Calcular posiciones orgánicas sobre la mesa --- */
    _calculateLayouts() {
      const stageRect = this.stage.getBoundingClientRect();
      const stageW = stageRect.width || this.stage.offsetWidth || (window.innerWidth * 0.55);
      const stageH = stageRect.height || this.stage.offsetHeight || window.innerHeight;

      const sample = this.items[0];
      const cardW = (sample && sample.offsetWidth > 40)
        ? sample.offsetWidth
        : Math.min(350, Math.max(245, stageW * 0.22));
      const cardH = cardW * 1.3913; // proporción 989:1376 de los SVGs

      // Margen de seguridad estricto para no tocar los bordes de la pantalla
      const padX = 18;
      const padY = 22;
      const minX = padX;
      const maxX = Math.max(minX, stageW - cardW - padX);
      const minY = padY;
      const maxY = Math.max(minY, stageH - cardH - padY);

      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      const spreadX = (maxX - minX) * 0.40;
      const spreadY = (maxY - minY) * 0.38;

      // 10 posiciones armónicas y variadas para que aterricen orgánicamente sobre la mesa
      const baseConfig = [
        { ox: -0.44, oy: -0.42, rot: -8.0 },  // 1. Arriba izquierda
        { ox:  0.38, oy: -0.38, rot:  9.5 },  // 2. Arriba derecha
        { ox: -0.04, oy: -0.44, rot: -3.0 },  // 3. Arriba centro
        { ox: -0.38, oy: -0.08, rot:  6.0 },  // 4. Centro izquierda
        { ox: -0.08, oy: -0.04, rot: -7.5 },  // 5. Centro ligeramente izq
        { ox:  0.28, oy: -0.06, rot:  4.5 },  // 6. Centro derecha
        { ox: -0.42, oy:  0.38, rot: -9.0 },  // 7. Abajo izquierda
        { ox: -0.08, oy:  0.36, rot:  3.5 },  // 8. Abajo centro
        { ox:  0.34, oy:  0.35, rot: -5.0 },  // 9. Abajo derecha
        { ox:  0.12, oy:  0.15, rot:  7.5 }   // 10. Centro-bajo
      ];

      const layouts = [];
      const count = this.items.length;

      for (let i = 0; i < count; i++) {
        const c = baseConfig[i % baseConfig.length];
        const rawX = cx + c.ox * spreadX;
        const rawY = cy + c.oy * spreadY;

        const x = Math.max(minX, Math.min(maxX, Math.round(rawX)));
        const y = Math.max(minY, Math.min(maxY, Math.round(rawY)));
        const rot = c.rot;

        layouts.push({ x, y, rot, minX, maxX, minY, maxY });
      }

      return layouts;
    }

    _applyLayouts() {
      const layouts = this._calculateLayouts();
      this.items.forEach((el, i) => {
        const l = layouts[i];
        el.dataset.posX = l.x;
        el.dataset.posY = l.y;
        el.dataset.rot = l.rot;
        el.dataset.minX = l.minX;
        el.dataset.maxX = l.maxX;
        el.dataset.minY = l.minY;
        el.dataset.maxY = l.maxY;
      });
    }

    /* --- Lanzar la tirada desde arriba hacia la posición de la mesa --- */
    throw() {
      if (this.isAnimating) return;
      this.isAnimating = true;

      // Medir y calcular layouts con dimensiones exactas
      this._applyLayouts();

      // Resetear arriba (sin animación, sin escala)
      this.items.forEach(el => {
        const posX = parseFloat(el.dataset.posX);
        const posY = parseFloat(el.dataset.posY);
        const rot = parseFloat(el.dataset.rot);

        el.style.transition = 'none';
        el.style.opacity = '0';
        el.style.transform = `translate(${posX}px, ${posY}px) rotate(${rot}deg) translateY(-125vh)`;
        el.classList.remove('is-landed', 'is-dragging');
      });

      // Limpiar timers anteriores
      this.throwTimers.forEach(t => clearTimeout(t));
      this.throwTimers = [];

      // Stagger de caída: caen en la mesa
      this.items.forEach((el, i) => {
        const t = setTimeout(() => {
          const posX = parseFloat(el.dataset.posX);
          const posY = parseFloat(el.dataset.posY);
          const rot = parseFloat(el.dataset.rot);

          // Transición de aterrizaje físico (sin zoom/escala)
          el.style.transition = 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.15s ease';
          el.style.opacity = '1';
          el.style.transform = `translate(${posX}px, ${posY}px) rotate(${rot}deg)`;
          el.classList.add('is-landed');

          if (i === this.items.length - 1) {
            setTimeout(() => { this.isAnimating = false; }, 900);
          }
        }, i * 95);
        this.throwTimers.push(t);
      });
    }

    /* --- Resetear al estado inicial (fuera de pantalla arriba) --- */
    reset() {
      this.throwTimers.forEach(t => clearTimeout(t));
      this.throwTimers = [];
      this.isAnimating = false;

      this.items.forEach(el => {
        const posX = parseFloat(el.dataset.posX || 0);
        const posY = parseFloat(el.dataset.posY || 0);
        const rot = parseFloat(el.dataset.rot || 0);

        el.style.transition = 'none';
        el.style.opacity = '0';
        el.style.transform = `translate(${posX}px, ${posY}px) rotate(${rot}deg) translateY(-125vh)`;
        el.classList.remove('is-landed', 'is-dragging');
      });
    }

    /* --- Hover por foto: resalta frente y despeja suavemente vecinas que se superpongan (sin zoom y sin volver a reunirse) --- */
    _bindCardHover(el, idx) {
      el.addEventListener('mouseenter', () => {
        if (el.classList.contains('is-dragging')) return;

        // Prioridad visual: traer la foto al frente
        this.topZIndex++;
        el.style.zIndex = this.topZIndex;

        const curX = parseFloat(el.dataset.posX);
        const curY = parseFloat(el.dataset.posY);

        const cardW = el.offsetWidth || 260;
        const cardH = el.offsetHeight || (cardW * 1.3913);
        const hcx = curX + cardW / 2;
        const hcy = curY + cardH / 2;

        const minX = parseFloat(el.dataset.minX);
        const maxX = parseFloat(el.dataset.maxX);
        const minY = parseFloat(el.dataset.minY);
        const maxY = parseFloat(el.dataset.maxY);

        // Despejar suavemente las fotos contiguas que se estén tapando
        this.items.forEach((other, oIdx) => {
          if (other === el || other.classList.contains('is-dragging')) return;

          const ox = parseFloat(other.dataset.posX);
          const oy = parseFloat(other.dataset.posY);
          const oRot = parseFloat(other.dataset.rot);

          const ocx = ox + cardW / 2;
          const ocy = oy + cardH / 2;

          let dx = ocx - hcx;
          let dy = ocy - hcy;
          let dist = Math.sqrt(dx * dx + dy * dy);

          // Si están próximas y se tapan (distancia menor al ancho de la tarjeta)
          if (dist < cardW * 0.90) {
            if (dist < 10) {
              const angle = (oIdx * (Math.PI * 2 / this.items.length));
              dx = Math.cos(angle);
              dy = Math.sin(angle);
              dist = 1;
            }

            // Despeje moderado (30px a 50px de apartamiento para ver lo de abajo, no se van a los bordes)
            const push = Math.max(30, Math.min(50, (cardW * 0.90 - dist) * 0.35));
            const nx = (dx / dist) * push;
            const ny = (dy / dist) * push;

            const newX = Math.max(minX, Math.min(maxX, Math.round(ox + nx)));
            const newY = Math.max(minY, Math.min(maxY, Math.round(oy + ny)));

            other.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
            other.style.transform = `translate(${newX}px, ${newY}px) rotate(${oRot}deg)`;

            // PERSISTENCIA: Se quedan despejadas donde se movieron, ¡NO SE VUELVEN A REUNIR!
            other.dataset.posX = newX;
            other.dataset.posY = newY;
          }
        });
      });
      // NO hay listener de mouseleave que las vuelva a reunir: quedan abiertas sobre la mesa.
    }

    /* --- Drag & Drop: arrastre físico sin zoom que persiste donde se suelte --- */
    _bindDrag(el, _idx) {
      let startPX = 0, startPY = 0;
      let startEX = 0, startEY = 0;
      let dragging = false;

      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.topZIndex++;
        el.style.zIndex = this.topZIndex;

        startPX = e.clientX;
        startPY = e.clientY;

        startEX = parseFloat(el.dataset.posX);
        startEY = parseFloat(el.dataset.posY);
        const curRot = parseFloat(el.dataset.rot);

        dragging = true;
        el.classList.add('is-dragging');
        el.setPointerCapture(e.pointerId);

        // Sin zoom, solo resalta la sombra en mano
        el.style.transition = 'filter 0.2s ease';
        el.style.transform = `translate(${startEX}px, ${startEY}px) rotate(${curRot}deg)`;
      });

      el.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startPX;
        const dy = e.clientY - startPY;

        const stageRect = this.stage.getBoundingClientRect();
        const cardW = el.offsetWidth || 260;
        const cardH = el.offsetHeight || (cardW * 1.3913);
        const minX = 12;
        const maxX = Math.max(minX, stageRect.width - cardW - 12);
        const minY = 16;
        const maxY = Math.max(minY, stageRect.height - cardH - 16);

        const newX = Math.max(minX, Math.min(maxX, Math.round(startEX + dx)));
        const newY = Math.max(minY, Math.min(maxY, Math.round(startEY + dy)));
        const curRot = parseFloat(el.dataset.rot);

        el.style.transition = 'none';
        el.style.transform = `translate(${newX}px, ${newY}px) rotate(${curRot}deg)`;

        el.dataset.posX = newX;
        el.dataset.posY = newY;
      });

      const endDrag = (e) => {
        if (!dragging) return;
        dragging = false;
        el.classList.remove('is-dragging');

        const finalX = parseFloat(el.dataset.posX);
        const finalY = parseFloat(el.dataset.posY);
        const curRot = parseFloat(el.dataset.rot);

        el.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), filter 0.25s ease';
        el.style.transform = `translate(${finalX}px, ${finalY}px) rotate(${curRot}deg)`;
      };

      el.addEventListener('pointerup', endDrag);
      el.addEventListener('pointercancel', endDrag);
    }

    /* --- Recalcular dinámicamente si cambia el tamaño de la ventana --- */
    _bindResize() {
      let resizeTimer = null;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (document.body.getAttribute('data-category') === 'sobre-mi' &&
              document.body.getAttribute('data-frame') === '2') {
            const layouts = this._calculateLayouts();
            this.items.forEach((el, i) => {
              const l = layouts[i];
              el.dataset.minX = l.minX;
              el.dataset.maxX = l.maxX;
              el.dataset.minY = l.minY;
              el.dataset.maxY = l.maxY;

              // Mantener la posición relativa o clampear dentro de los nuevos límites
              const curX = parseFloat(el.dataset.posX || l.x);
              const curY = parseFloat(el.dataset.posY || l.y);
              const newX = Math.max(l.minX, Math.min(l.maxX, curX));
              const newY = Math.max(l.minY, Math.min(l.maxY, curY));
              el.dataset.posX = newX;
              el.dataset.posY = newY;

              if (el.classList.contains('is-landed') && !el.classList.contains('is-dragging')) {
                el.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
                el.style.transform = `translate(${newX}px, ${newY}px) rotate(${el.dataset.rot}deg)`;
              }
            });
          }
        }, 150);
      });
    }

    /* --- Escuchar cambios de categoría para tirar/resetear --- */
    _bindCategoryChange() {
      document.addEventListener('categorychange', (e) => {
        if (e.detail.category === 'sobre-mi') {
          setTimeout(() => this.throw(), 180);
        } else {
          this.reset();
        }
      });

      // Transición de frame (Frame 1 → Frame 2 con sobre-mi activo)
      document.addEventListener('framechange', (e) => {
        if (e.detail.frame === 2) {
          const active = document.body.getAttribute('data-category');
          if (active === 'sobre-mi') {
            setTimeout(() => this.throw(), 350);
          }
        } else {
          this.reset();
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
   * 7. BOOTSTRAP DE LA APLICACIÓN
   * -------------------------------------------------------------------------- */  const init = () => {
    initLoadAnimation();
    new TechGrid('techGridCanvas');
    new ContinuousInkAnimation();

    const categoriesController = new CategoriesMenuController();
    const flyersManager = new FlyersGalleryManager(categoriesController);
    categoriesController.flyersManager = flyersManager;

    const frameController = new FrameTransitionController(categoriesController);
    const polaroidsManager = new PolaroidsManager();

    // Exponer globalmente para depuración o llamadas desde consola si se requiere
    window.portfolio = {
      frameController,
      categoriesController,
      flyersManager,
      polaroidsManager
    };
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
