<template>
  <div :class="['navMenu', { scrolled, hidden: hideHeader }]">
    <img :src="logoSrc" alt="Logo" />
    <nav class="navbar">
      <div class="links-1">
        <router-link to="/">Inicio</router-link>
        <router-link to="/About">Quienes Somos</router-link>
        <a href="#">Contáctanos</a>
      </div>
      <div class="links-2">
        <a href="#"><img src="images/header/login-user-icon.png" alt="">Ingresar</a>
        <a href="#"><img src="images/header/shop-icon.png" alt="">Comprar</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  data() {
    return {
      scrolled: false,
      hideHeader: false,
      observer: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    this.$nextTick(() => {
      const footer = document.querySelector('footer');
      if (footer) {
        this.observer = new IntersectionObserver(
          ([entry]) => {
            this.hideHeader = entry.isIntersecting;
          },
          { threshold: 0.1 }
        );
        this.observer.observe(footer);
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
  computed: {
    logoSrc() {
      return this.scrolled
        ? require('@/assets/logo-light.png')
        : require('@/assets/logo-dark.png');
    }
  }
};
</script>

<style scoped>
.navMenu {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--main-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.4s ease;
  width: 100%;
  height: 100px;
  transform: translateY(0);
}

.navMenu.scrolled {
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navMenu.hidden {
  transform: translateY(-100%);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.links-1,
.links-2 {
  display: flex;
  gap: 1rem;
}

.links-2 a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.links-2 a img {
  height: auto;
  opacity: 1;
  vertical-align: middle;
}

/* Estilo base para todos los links */
.navbar a {
  padding: 0.5rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--global-font-family);
  font-size: var(--nav-bar-fontsz-desktop);
  font-weight: bold;
  white-space: nowrap;
  transition: color 0.3s;
}

/* Estilo para router-links en links-1 con subrayado suave */
.navbar .links-1 a {
  position: relative;
  font-weight: 500;
}

.navbar .links-1 a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: var(--red-brand);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.navbar .links-1 a.router-link-active::after,
.navbar .links-1 a.router-link-exact-active::after {
  font-weight: 800;
  transform: scaleX(1);
}

.navbar .links-1 a:hover::after {
  transform: scaleX(1);
}

.navMenu.scrolled .navbar a {
  color: var(--main-dark);
}

.navMenu img {
  padding-left: 20px;
  height: 150px;
  margin-top: -12px;
  transition: height 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 2rem;
  }

  .links-1,
  .links-2 {
    flex-direction: column;
    width: 100%;
  }

  .links-2 a img {
    width: 18px;
  }

  .navMenu {
    height: auto;
    padding: 1rem 0;
  }

  .navMenu img {
    height: 60px;
    margin-top: 0;
    padding-left: 0;
  }
}
</style>
