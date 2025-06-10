<template>
  <div>
    <aboutItem1/>
    <aboutItem2/>
  </div>
</template>

<script>
import aboutItem1 from '../items/aboutItem1.vue'
import aboutItem2 from '../items/aboutItem2.vue'
export default {
 
  name: 'SiteAbout',components: {
    aboutItem1,aboutItem2
}

  
}
</script>