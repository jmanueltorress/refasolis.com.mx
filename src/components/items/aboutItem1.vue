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
.container-about{
  background-color: white;
  padding:10% 15% 5%;
  
}
.seccion-info {
  
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

}

.logo-area {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 160px;
}

.logo {
  width: 140px;
  height: auto;
}

.desde-text {
  font-size: 0.75rem;
  color: #444;
  text-align: center;
  margin-top: 1rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  letter-spacing: 0.05em;
}

.texto-area {
  flex: 1;
  color: #333;
}

.texto-area p {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .seccion-info {
    flex-direction: column;
    text-align: center;
  }

  .logo-area {
   padding-left: 20%;
    align-items: center;
    justify-content: center;
  }

  .desde-text {
    writing-mode: horizontal-tb;
    transform: none;
    margin-left: 1rem;
  }
}
</style>
