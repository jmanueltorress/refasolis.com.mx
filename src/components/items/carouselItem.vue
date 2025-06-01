<template>
  <section id="carousel-mobil">
 <v-container fluid class="pa-0">
    <v-carousel
      height="35vh"
      cycle
      interval="3500"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-img
          :src="item.src"
          cover
          class="w-100 h-100"
        >
          <div class="overlay-content-left">
            <!-- Primer carousel: título + botón -->
            <template v-if="i === 0">
              <h1 class="headline">{{ item.title }}</h1>
              <v-btn
                color="primary"
                class="mt-4"
                :href="'tel:' + item.phone"
                target="_blank"
              >
                {{ item.buttonText }}
              </v-btn>
            </template>

            <!-- Segundo carousel: título + subtítulo -->
            <template v-else-if="i === 1">
              <h2 class="headline">{{ item.title }}</h2>
              <h3 class="subtitle">{{ item.subtitle }}</h3>
            </template>

            <!-- Tercer carousel: solo texto -->
            <template v-else-if="i === 2">
              <!-- <p class="text-only">{{ item.text }}</p> -->
               <h2 class="headline">{{ item.title }}</h2>
              <h3 class="subtitle">{{ item.subtitle }}</h3>
            </template>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
  </section>
 
  <!-- carousel-desktop -->
   <section id ="carousel-desktop">
<v-container fluid class="pa-0">
    <v-carousel
      height="85vh"
      cycle
      interval="3500"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-img
          :src="item.src"
          cover
          class="w-100 h-100"
        >
          <div class="overlay-content-left">
            <!-- Primer carousel: título + botón -->
            <template v-if="i === 0">
              <h1 class="headline">{{ item.title }}</h1>
              <h3 class="subtitle">{{ item.subtitle }}</h3>
              <v-btn
                color="primary"
                class="mt-4"
                :href="'tel:' + item.phone"
                target="_blank"
              >
                {{ item.buttonText }}
              </v-btn>
            </template>

            <!-- Segundo carousel: título + subtítulo -->
            <template v-else-if="i === 1">
              <h1 class="headline">{{ item.title }}</h1>
              <h3 class="subtitle">{{ item.subtitle }}</h3>
            </template>

            <!-- Tercer carousel: solo texto -->
            <template v-else-if="i === 2">
              <!-- <p class="text-only">{{ item.text }}</p> -->
               <h1 class="headline">{{ item.title }}</h1>
              <h3 class="subtitle">{{ item.subtitle }}</h3>
            </template>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
   </section>
    
</template>

<script>
export default {
  data() {
    return {
      items: [
        { // Primer carousel
          src: '/images/home-imgs/carousel-h/2.png',
          title: 'CALIDAD Y RENDIMIENTO',
          buttonText: 'Cotiza tu refacción ☎',
          subtitle: 'Refacciones que hacen la diferencia',
          phone: '4286877121', // Número para llamada
        },
        { // Segundo carousel
          src: '/images/home-imgs/carousel-h/4.png',
          title: 'REFACCIONES AGRICOLAS Y AUTOMOTRICES',
          subtitle: 'Tractores, Sembradoras y Vehiculos.',
        },
        { // Tercer carousel
          src: '/images/home-imgs/carousel-h/6.png',
          title: 'VISITANOS',
          //  text :'Refaccionaria Solis Belisario Dominguez, No. 401 San Felipe, Guanajuato, Mexico',
          subtitle: 'Belisario Dominguez, No. 401 San Felipe, Guanajuato, Mexico'
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-container {
  padding: 0 !important;
}

.overlay-content-left {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
  max-width: 40%;
  background: rgba(0, 0, 0, 0.45);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  z-index: 2;
}

.headline {
  margin: 0;
  font-weight: 700;
}

.subtitle {
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 1.2rem;
  opacity: 0.8;
}

.text-only {
  font-size: 1.1rem;
  line-height: 1.4;
}
#carousel-mobil{display:none}

/* Responsive para pantallas pequeñas */
@media (max-width: 959px) {
  #carousel-desktop{display:none}
  #carousel-mobil{ display: block;}
  
  .v-carousel-item >>> .v-img > img {
    object-fit: cover !important;
    background-color: black;
  }
  .overlay-content-left {
    top: auto;
    bottom: 10%;
    left: 5%;
    transform: none;
    max-width: 90%;
    padding: 1rem;
  }
  .headline {
    font-size: 1rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .text-only {
    font-size: 1rem;
  }
}
</style>
