<template>
  <section class="contact-section">
    <div class="contain-contactus">
    <div class="contact-header">
      <div class="contact-title">
        <img src="/images/contact-us/contact-banner2-1.png" alt="Contacto" class="banner-img" />
        <h2 class="banner">Contáctenos</h2>
      </div>
      <div class="social-icons">
        <img class="email-ico" src="/images/contact-us/mail.png" alt="Email" />
        
        <img class="fb-ico" src="/images/contact-us/fb.png" alt="Facebook" />
        <img src="/images/contact-us/phone.png" alt="Phone" />
        <img src="/images/contact-us/wp.png" alt="WhatsApp" />
      </div>
    </div>

    <div class="contact-content">
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.8794739049426!2d-101.21832782568072!3d21.4732452723657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b02799f0e8529%3A0xeb2cc35bf9e45ac6!2sRefaccionaria%20%22Solis%22!5e0!3m2!1ses-419!2smx!4v1748993966028!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <form class="contact-form">
        <div class="form-group">
          <label>Nombre:</label>
          <input type="text" />
        </div>
        <div class="form-group">
          <label>Negocio ó Empresa:</label>
          <input type="text" />
        </div>
        <div class="form-group">
          <label>Número de Contacto:</label>
          <input type="text" />
        </div>
        <div class="form-group">
          <label>Mensaje:</label>
          <textarea></textarea>
        </div>
        <button type="submit" class="submit-button">Enviar</button>
      </form>
    </div>
    </div>
  </section>
</template>

<script setup>
// No logic for now
</script>

<style scoped>
.contact-section {
  background-color: var(--main-light);
  
}   
.contain-contactus{
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px;
}

.contact-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.contact-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
.contact-title img{
    width:40%
}



.banner {
  background-color: var(--enfasis-blue);
  color: white;
  padding: 6px 16px;
  border-radius: 8px;
  transform: rotate(-3deg);
  font-size: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.social-icons img {
  
  height: 24px;
  cursor: pointer;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}

.map-container {
  text-align: center;
}

.map-container img {
  max-width: 100%;
  height: auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 4px;
}

.form-group input,
.form-group textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  height: 100px;
  resize: none;
}

.submit-button {
  background-color: var(--enfasis-blue);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: flex-start;
}

.submit-button:hover {
  background-color: var(--enfasis-blue-hover);
}

/* Responsive */
@media (min-width: 768px) {
  .contact-header {
    flex-direction: row;
    align-items: center;
  }

  .contact-content {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }

  .map-container,
  .contact-form {
    flex: 1;
  }
}
</style>
