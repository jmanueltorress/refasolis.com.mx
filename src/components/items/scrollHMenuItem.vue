<template>
  <div style="background: black;">
    <!-- Título principal -->
    <section ref="seccion"
      style="height: 100vh; background: #f0f0f0; display:flex; justify-content:center; align-items:center;">
      <h2>Más de {{ contador }} años de trayectoria</h2>
    </section>

    <!-- Submenú + Canvas -->
    <div v-show="showMenu" class="submenu-container">
      <!-- Menú horizontal -->
      <nav class="horizontal-menu">
        <a v-for="(section, index) in sections" :key="index" href="javascript:void(0)"
          :class="{ active: currentSection === index }" @click.prevent="scrollToSection(index, $event)" tabindex="0">
          {{ section.title }}
        </a>
      </nav>

      <!-- Canvas horizontal -->
      <div ref="canvas" class="canvas" @scroll="onScrollCanvas" tabindex="0">
        <section v-for="(section, index) in sections" :key="index" class="canvas-section">
          <!-- <h2>{{ section.title }}</h2> -->
          <div class="icon-grid">
            <div class="icon-item" v-for="(item, i) in section.content" :key="i">
              <!-- <div class="icon">{{ item.icon }}</div> //para-iconos-de-txt-->
              <img :src="item.icon" alt="icono" class="icon-img" /> <!-- //para-iconos-de-imagen-->
              <div class="label">{{ item.name }}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalScrollMenuContainer',
  data() {
    return {
      showMenu: false,
      currentSection: 0,
      contador: 25,
      objetivo: 40,
      animado: false,
      sectionWidth: 0,
      scrollTimeout: null,
      sections: [
        {
          title: 'Servicios',
          content: [
            { name: 'Busqueda personalizada', icon: '/images/home-imgs/scroll-sections/servicios/search-icon.png' },
            { name: 'Pedidos Agiles', icon: '/images/home-imgs/scroll-sections/servicios/delivery-icon.png' },
            { name: 'Facturación', icon: '/images/home-imgs/scroll-sections/servicios/document-icon.png' },
            { name: 'Envios Locales', icon: '/images/home-imgs/scroll-sections/servicios/local-delivery-icon.png' },

          ],
        },
        {
          title: 'Categorías',
          content: [
            { name: 'Motor', icon: '/images/home-imgs/scroll-sections/categorias/engine-icon.png' },
            { name: 'Enfriamiento', icon: '/images/home-imgs/scroll-sections/categorias/cooling-engine-icon.png' },
            { name: 'Suspencion y Dirección', icon: '/images/home-imgs/scroll-sections/categorias/suspension-icon.png' },
            { name: 'Herramientas', icon: '/images/home-imgs/scroll-sections/categorias/tools-icon.png' },
            { name: 'Frenos', icon: '/images/home-imgs/scroll-sections/categorias/disc-stop-icon.png' },
            { name: 'Electrico', icon: '/images/home-imgs/scroll-sections/categorias/plug-circle-icon.png' },
            { name: 'Filtros', icon: '/images/home-imgs/scroll-sections/categorias/filters-icon.png' },
            { name: 'Sujeción Automotriz', icon: '/images/home-imgs/scroll-sections/categorias/screw-nail-icon.png' },
            { name: 'Transmisión', icon: '/images/home-imgs/scroll-sections/categorias/transmission-icon.png' },
            { name: 'Lubricantes y aditivos', icon: '/images/home-imgs/scroll-sections/categorias/oil-can-icon.png' },
            { name: 'Tractores', icon: '/images/home-imgs/scroll-sections/categorias/tractor-icon.png' },

          ],
        },
        {
          title: 'Nuestras Marcas',
          content: [
            { name: 'Acdelco', icon: '/images/home-imgs/scroll-sections/marcas/acdelco.png' },
            { name: 'Almorall', icon: '/images/home-imgs/scroll-sections/marcas/armorall.png' },
            { name: 'Automotive', icon: '/images/home-imgs/scroll-sections/marcas/automotive.png' },
            { name: 'Champion', icon: '/images/home-imgs/scroll-sections/marcas/champion.png' },
            { name: 'Continental', icon: '/images/home-imgs/scroll-sections/marcas/continental.png' },
            { name: 'Dai', icon: '/images/home-imgs/scroll-sections/marcas/dai.png' },
            { name: 'Fpdiesel', icon: '/images/home-imgs/scroll-sections/marcas/fpdiesel.png' },
            { name: 'Freon', icon: '/images/home-imgs/scroll-sections/marcas/freon.png' },
            { name: 'Gabriel', icon: '/images/home-imgs/scroll-sections/marcas/gabriel.png' },
            { name: 'Gates', icon: '/images/home-imgs/scroll-sections/marcas/gates.png' },
            { name: 'Hella', icon: '/images/home-imgs/scroll-sections/marcas/hella.png' },
            { name: 'Lodi', icon: '/images/home-imgs/scroll-sections/marcas/lodi.png' },
            { name: 'Lucas', icon: '/images/home-imgs/scroll-sections/marcas/lucas.png' },
            { name: 'Lusac', icon: '/images/home-imgs/scroll-sections/marcas/lusac.png' },
            { name: 'Mobil', icon: '/images/home-imgs/scroll-sections/marcas/mobil.png' },
            { name: 'Monroe', icon: '/images/home-imgs/scroll-sections/marcas/monroe.png' },
            { name: 'Moog', icon: '/images/home-imgs/scroll-sections/marcas/moog.png' },
            { name: 'Mtr', icon: '/images/home-imgs/scroll-sections/marcas/mtr.png' },
            { name: 'National', icon: '/images/home-imgs/scroll-sections/marcas/national.png' },
            { name: 'Ngk', icon: '/images/home-imgs/scroll-sections/marcas/ngk.png' },
            { name: 'Prestone', icon: '/images/home-imgs/scroll-sections/marcas/prestone.png' },
            { name: 'Qstate', icon: '/images/home-imgs/scroll-sections/marcas/qstate.png' },
            { name: 'Quezada', icon: '/images/home-imgs/scroll-sections/marcas/quezada.png' },
            { name: 'Raybayestos', icon: '/images/home-imgs/scroll-sections/marcas/raybayestos.png' },
            { name: 'Roadstar', icon: '/images/home-imgs/scroll-sections/marcas/roadstar.png' },
            { name: 'Rolpar', icon: '/images/home-imgs/scroll-sections/marcas/rolpar.png' },
            { name: 'Sachs', icon: '/images/home-imgs/scroll-sections/marcas/sachs.png' },
            { name: 'Sealedpwer', icon: '/images/home-imgs/scroll-sections/marcas/sealedpwer.png' },
            { name: 'Sellosteal', icon: '/images/home-imgs/scroll-sections/marcas/sellosteal.png' },
            { name: 'Skf', icon: '/images/home-imgs/scroll-sections/marcas/skf.png' },
            { name: 'Standard', icon: '/images/home-imgs/scroll-sections/marcas/standard.png' },
            { name: 'Str', icon: '/images/home-imgs/scroll-sections/marcas/str.png' },
            { name: 'Tf', icon: '/images/home-imgs/scroll-sections/marcas/tf.png' },
            { name: 'Timken', icon: '/images/home-imgs/scroll-sections/marcas/timken.png' },
            { name: 'Tomco', icon: '/images/home-imgs/scroll-sections/marcas/tomco.png' },
            { name: 'Ts', icon: '/images/home-imgs/scroll-sections/marcas/ts.png' },
            { name: 'Wagner', icon: '/images/home-imgs/scroll-sections/marcas/wagner.png' }
          ]

        },
      ],

    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleWindowScroll);
    window.addEventListener('resize', this.handleResize);

    if (this.$refs.canvas) {
      this.$refs.canvas.addEventListener('wheel', this.onWheel, { passive: false });
      this.sectionWidth = this.$refs.canvas.clientWidth;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !this.animado) {
          this.iniciarContador();
          this.animado = true;
        }
      },
      { threshold: 0.6 }
    );

    if (this.$refs.seccion) {
      observer.observe(this.$refs.seccion);
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
    window.removeEventListener('resize', this.handleResize);
    if (this.$refs.canvas) {
      this.$refs.canvas.removeEventListener('wheel', this.onWheel);
    }
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
  },
  methods: {
    iniciarContador() {
      const intervalo = setInterval(() => {
        if (this.contador < this.objetivo) {
          this.contador++;
        } else {
          clearInterval(intervalo);
        }
      }, 100);
    },
    handleWindowScroll() {
      this.showMenu = window.scrollY > 0;
    },
    handleResize() {
      if (this.$refs.canvas) {
        this.sectionWidth = this.$refs.canvas.clientWidth;
        this.scrollToSection(this.currentSection);
      }
    },
    scrollToSection(index, event) {
      if (!this.$refs.canvas) return;
      this.sectionWidth = this.$refs.canvas.clientWidth;
      this.currentSection = index;
      this.$refs.canvas.scrollTo({
        left: this.sectionWidth * index,
        behavior: 'smooth',
      });
      if (event && event.target) {
        event.target.blur();
      }
    },
    onScrollCanvas() {
      if (!this.$refs.canvas) return;
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        const scrollLeft = this.$refs.canvas.scrollLeft;
        const newSection = Math.round(scrollLeft / this.sectionWidth);
        if (newSection !== this.currentSection) {
          this.currentSection = newSection;
        }
      }, 500);
    },
    onWheel(event) {
      if (!this.$refs.canvas) return;

      const scrollContainer = this.$refs.canvas;

      // Si el scroll horizontal es más grande, hacer scroll horizontal y prevenir scroll vertical
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaX;
      }

    }
    ,
  },
};
</script>

<style scoped>
.submenu-container {
  margin: 2rem auto;
  max-width: 1200px;
  width: 95%;
  background: var(--main-light);
  /* border-radius: 8px; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.horizontal-menu {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1rem;
  background: var(--main-dark);
  padding: 0.5rem 1rem;
  /* border-radius: 6px; */
  text-transform: uppercase;
}

.horizontal-menu a {
  position: relative;
  color: rgb(153, 151, 151);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.3rem 0.6rem;
  transition: color 0.3s;
}

.horizontal-menu a.active {
  color: var(--main-light);
}

.horizontal-menu a.active::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -6px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid var(--red-brand);
}

.canvas {
  
  /* border-radius: 6px; */
    display: flex;
 /* overflow-y: auto;  habilita scroll horizontal */
  overflow-x: hidden; /* desactiva scroll vertical */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  height: 60vh;
  -webkit-overflow-scrolling: touch;
  outline: none;
  cursor: default;
  user-select: none;
  border: 1.5px solid var(--red-brand);
}

.canvas:active {
  cursor: grabbing;
}

.canvas-section {
  scroll-snap-align: start;
  flex: 0 0 100%;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background: var(--main-light);
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  justify-items: center;
  align-items: center;
}

.icon-item {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 120px;
}

.icon-item:hover {
  transform: scale(1.05);
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 0.9rem;
  color: #333;
}
/* Responsive */
@media (max-width: 768px) {
  .icon-grid {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 0.5rem;
  }

  .icon-item {
    max-width: 80px;
    padding: 0.5rem;
  }

  .icon-item span {
    font-size: 0.8rem;
  }
}


</style>
