<template>
  <div class="container-about">
  <div class="seccion">
    <img class="logo" src="/images/about-imgs/goal-success.png" alt="Ícono Misión" />
    <div class="contenido">
      <h2>MISIÓN</h2>
      <p>
       Ofrecer refacciones automotrices de calidad con un servicio confiable y honesto, apoyando a nuestros clientes con la atención que se merecen y soluciones que prolonguen la vida útil de sus vehículos, respaldados por más de 40 años de experiencia en el sector.
      </p>
    </div>
  </div>

  <div class="seccion">
    <img class="logo" src="/images/about-imgs/team.png" alt="Ícono Misión" />
    <div class="contenido">
      <h2>VALORES</h2>
      <ul>
        <li><strong>Compromiso:</strong> Nos dedicamos a cumplir con cada cliente con responsabilidad y puntualidad.</li>
        <li><strong>Honestidad:</strong> Operamos con transparencia en cada venta y recomendación.</li>
        <li><strong>Calidad:</strong> Seleccionamos productos confiables que cumplen con los estándares más exigentes.</li>
        <li><strong>Servicio:</strong> Atendemos con amabilidad, respeto y enfoque en la solución.</li>
        <li><strong>Experiencia:</strong>  Nuestro conocimiento y trayectoria nos permiten brindar asesoría efectiva y profesional.</li>
        <li><strong>Adaptabilidad:</strong>  Evolucionamos con el mercado para ofrecer siempre las mejores alternativas.</li>
      </ul>
    </div>
  </div>
   </div>
</template>

<script setup>
// No se necesita JS en este caso
</script>

<style scoped>
.container-about{
  background-color: white;
   padding:0 15% 5% 15%;
}
.seccion {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.logo{
  width: 110px;
  margin-right: 1.5rem;
  margin-left:1.5rem;
  object-fit: contain;
}


.contenido h2 {
  margin-top: 0;
  font-size: 1.4rem;
  font-weight: bold;
  color: #222;
}

.contenido p,
.contenido ul {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}

.contenido ul {
  padding-left: 1rem;
  margin: 0;
}

.contenido li {
  margin-bottom: 0.6rem;
}
@media (max-width: 768px) {
  .container-about {
    flex-direction: column;
    text-align: center;
  }
  .seccion{
    display: inline;
  }
  .seccion .logo {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  }
</style>
