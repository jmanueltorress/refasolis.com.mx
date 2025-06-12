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
      <img class="logo" src="/images/about-imgs/team.png" alt="Ícono Valores" />
      <div class="contenido">
        <h2>VALORES</h2>
        <ul>
          <li><strong>Compromiso:</strong> Nos dedicamos a cumplir con cada cliente con responsabilidad y puntualidad.</li>
          <li><strong>Honestidad:</strong> Operamos con transparencia en cada venta y recomendación.</li>
          <li><strong>Calidad:</strong> Seleccionamos productos confiables que cumplen con los estándares más exigentes.</li>
          <li><strong>Servicio:</strong> Atendemos con amabilidad, respeto y enfoque en la solución.</li>
          <li><strong>Experiencia:</strong> Nuestro conocimiento y trayectoria nos permiten brindar asesoría efectiva y profesional.</li>
          <li><strong>Adaptabilidad:</strong> Evolucionamos con el mercado para ofrecer siempre las mejores alternativas.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// No se necesita lógica JS en este componente
</script>

<style scoped>
.container-about {
  background-color: white;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.seccion {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  flex-wrap: wrap;
}

.logo {
  width: 100px;
  height: auto;
  flex-shrink: 0;
}

.contenido {
  flex: 1 1 300px;
  color: #333;
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

/* Tablets */
@media (max-width: 1024px) {
  .container-about {
    padding: 8% 6%;
  }

  .seccion {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo {
    width: 90px;
  }
}

/* Móviles */
@media (max-width: 600px) {
  .container-about {
    padding: 10% 4%;
  }

  .contenido p,
  .contenido ul {
    font-size: 0.95rem;
  }

  .logo {
    width: 80px;
  }
}
</style>
