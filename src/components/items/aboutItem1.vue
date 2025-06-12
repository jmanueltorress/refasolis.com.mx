<template>
  <div class="container-about">
    <div class="seccion-info">
      <div class="logo-area">
        <img class="logo" src="/images/about-imgs/logo-bg-light-text-dark-icon-red-about.png" alt="logo" />
      </div>
      <div class="texto-area">
        <p>
          Fundada entre 1975 y 1980, nuestra refaccionaria nació con el compromiso de ofrecer productos de calidad y un servicio confiable a los profesionales y amantes del motor. 
        </p>
        <p>
          Con más de 40 años de experiencia, nos hemos consolidado como un referente en el sector, siempre con atención cercana y conocimiento necesario.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No se requiere lógica JS para este componente estático
</script>

<style scoped>
.container-about {
  background-color: white;
  padding: 5% 10%;
}

.seccion-info {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  flex-wrap: wrap;
}

.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  flex: 0 0 auto;
}

.logo {
  width: 120px;
  max-width: 100%;
  height: auto;
}

.texto-area {
  flex: 1 1 300px;
  color: #333;
}

.texto-area p {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
}

/* Responsive: tablets */
@media (max-width: 1024px) {
  .container-about {
    padding: 8% 6%;
  }

  .seccion-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo {
    width: 100px;
  }
}

/* Responsive: móviles */
@media (max-width: 600px) {
  .container-about {
    padding: 10% 4%;
  }

  .texto-area p {
    font-size: 0.95rem;
  }

  .logo {
    width: 80px;
  }
}
</style>
