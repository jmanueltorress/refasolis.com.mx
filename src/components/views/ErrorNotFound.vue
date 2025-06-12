<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-code">400</h1>
      <h2 class="error-title">Solicitud incorrecta</h2>
      <p class="error-message">
        La solicitud que realizaste no pudo ser entendida por el servidor. Verifica los datos e intenta nuevamente.
      </p>
      <router-link to="/" class="btn-home">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
// No se requiere lógica para esta página de error
</script>

<style scoped>
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem;
  text-align: center;
}

.error-content {
  max-width: 500px;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  color: #d9534f;
  margin: 0;
}

.error-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #333;
}

.error-message {
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
}

.btn-home {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #d9534f;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn-home:hover {
  background-color: #c9302c;
}

/* Responsive */
@media (max-width: 600px) {
  .error-code {
    font-size: 4rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .error-message {
    font-size: 0.95rem;
  }
}
</style>
