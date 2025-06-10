<template>
  <footer class="footer">
    <div class="footer-main">
      <!-- Columna izquierda: Logo + Dirección -->
      <div class="footer-col footer-col--left">
        <div class="footer-logo">
          <img src="@/assets/logo-dark.png" alt="Refaccionaria Solis Logo" />
        </div>
        <!-- Dirección (puedes descomentarla si la quieres mostrar) -->
        <!--
        <div class="footer-address">
          <p>REFACCIONARIA SOLIS</p>
          <p>SAN FELIPE, GUANAJUATO</p>
          <p>BELISARIO DOMÍNGUEZ NO. 401</p>
          <p>COL. CENTRO</p>
          <p>C.P. 37600</p>
        </div>
        -->
      </div>

      <!-- Columna central: Íconos de contacto -->
      <div class="footer-col footer-col--center">
        <div class="footer-contact-item">
          <img class="icon" src="/images/footer/mail-icon.png" alt="Email" />
          <a href="mailto:refaccionariasolis2011@hotmail.com">refaccionariasolis2011@hotmail.com</a>
        </div>
        <div class="footer-contact-item">
          <img class="icon" src="/images/footer/call-phone-icon.png" alt="Teléfono" />
          <a href="tel:+524286877121">+52 428 687 7121</a>
        </div>
        <div class="footer-contact-item">
          <img class="i-fb" src="/images/footer/fb-icon.png" alt="Facebook" />
          <a href="https://www.facebook.com/profile.php?id=61576335903962&locale=es_LA" target="_blank" rel="noopener">
            Refaccionaria Solis
          </a>
        </div>
        <div class="footer-contact-item">
          <img class="icon" src="/images/footer/location-icon.png" alt="Ubicación" />
          <a
            href="https://www.google.com/maps/place/Belisario+Dom%C3%ADnguez+401,+Centro,+San+Felipe"
            target="_blank"
            rel="noopener"
          >
            Ver mapa
          </a>
        </div>
      </div>

      <!-- Columna derecha: Navegación + acciones -->
      <div class="footer-col footer-col--right">
        <nav class="footer-nav">
          <router-link to="/" exact>Inicio</router-link>
          <router-link to="/about">Quienes Somos</router-link>
          <router-link to="/contact">Contáctanos</router-link>
        </nav>
        <div class="footer-actions">
         
         <a class="action-link" href="#"> <img class="icon action-icon" src="/images/footer/shop-icon.png" alt="Comprar" />
            Comprar
          </a>
          <a class="action-link" href="#"><img class="icon action-icon" src="/images/footer/login-user-icon.png" alt="Ingresar" />
            Ingresar
          </a>
        </div>
      </div>
    </div>

    <hr class="footer-divider" />

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <p>© {{ new Date().getFullYear() }} COPYRIGHT</p>
        <span>·</span>
        <router-link to="/privacy">POLÍTICA DE PRIVACIDAD</router-link>
        <span>·</span>
        <router-link to="/terms">TÉRMINOS DE USO</router-link>
      </div>
      <div class="footer-bottom-right">
  <p>
    SITIO WEB DESARROLLADO POR 
    <a href="https://github.com/jmanueltorress"><img src="/images/footer/logo-dev.png" alt="Logo-Developer" class="logo-dev" /></a>
  </p>
</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.footer {
  background: var(--main-dark);
  color: var(--text-color);
  font-family: var(--global-font-family);
  padding: 3rem 2rem 1rem;
}

/* Estructura de columnas */
.footer-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-col--left {
  flex: 1 1 250px;
}

.footer-logo img {
  max-width: 160px;
  height: auto;
  margin-bottom: 0.5rem;
  object-fit: contain;
}

.footer-address p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.footer-col--center {
  flex: 1 1 260px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.footer-contact-item .icon,
.action-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  display: inline-block;
  flex-shrink: 0;
}

.footer-contact-item .i-fb {
  width: 20px;
  height: 25px;
  object-fit: contain;
  display: inline-block;
  flex-shrink: 0;
}

.footer-contact-item a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-contact-item a:hover {
  color: var(--enfasis-blue);
}

/* Navegación y acciones */
.footer-col--right {
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
}

.footer-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.footer-nav a:hover::after,
.footer-nav a.router-link-active::after,
.footer-nav a.router-link-exact-active::after {
  transform: scaleX(1);
}
.footer-nav a.router-link-active,
.footer-nav a.router-link-exact-active {
  font-weight: 700;
}

.footer-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.action-link:hover {
  color: var(--enfasis-blue);
}

/* Línea separadora */
.footer-divider {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 2rem 0 1rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Parte inferior */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 0.85rem;
}

.footer-bottom-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.footer-bottom-left p {
  margin: 0;
}
.footer-bottom-left a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-bottom-left a:hover {
  color: var(--enfasis-blue);
}
.footer-bottom-right p {
  margin: 0;
  font-weight: 500;
}
.logo-dev {
  height: 1em;      /* tamaño relativo al texto */
  vertical-align: middle;
  margin-left: 4px; /* pequeño espacio después del texto */
}

/* Responsive */
/* Responsive */
@media (max-width: 900px) {
  .footer {
    padding: 2rem 1rem 1rem;  /* Ajuste de padding */
  }

  .footer-main {
    flex-direction: column;
    align-items: center;  /* Centrar columnas */
    gap: 1rem;  /* Espaciado reducido entre columnas */
  }

  .footer-col--left,
  .footer-col--center,
  .footer-col--right {
    width: 100%;  /* Asegurar que ocupen el 100% */
   /* text-align: center;  /* Centrar texto */
  }
.footer-col--left{
  display: none;
}
  .footer-logo {
    
    margin-bottom: 0.5rem;  /* Reducir margen inferior del logo */
  }

  .footer-nav {
    flex-direction: column;  /* Cambiar a columna para mejor visualización */
    gap: 0.25rem;  /* Espaciado reducido entre enlaces del menú */
  }

  .footer-actions {
    flex-direction: column;  /* Cambiar a columna para mejor visualización */
    gap: 0.25rem;  /* Espaciado reducido entre acciones */
  }

  .action-link {
    width: 100%;  /* Asegurar que ocupen el 100% */
  }

  .footer-divider {
    margin-top: 1rem;  /* Espaciado reducido */
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;  /* Centrar contenido */
    gap: 0.5rem;  /* Espaciado reducido */
  }
}



</style>
