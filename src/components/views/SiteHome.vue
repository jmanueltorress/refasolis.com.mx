<template>
  <div class="SiteHome" id="s-h-carrousel">
    <!-- <h1>{{ mensaje   }}</h1> -->
    <carouselItem />
    <menuHlItem/>
  </div>
</template>

<script>
// import CarouselSection from './components/carouselItem.vue'
import carouselItem from '../items/carouselItem.vue';
import menuHlItem from '../items/scrollHMenuItem.vue';
export default {
  // components: {
  //   CarouselSection
  // },
  name: 'SiteHome',components: {
    carouselItem,menuHlItem
}

  // props: {
  //   mensaje: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SiteHome{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
