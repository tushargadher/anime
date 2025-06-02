<template>
  <Navbar/>
  <router-view />
</template>
<script>
import Navbar from "../src/components/Navbar.vue";
import Home from "../src/components/Home.vue";
export default {
  components:{
    Navbar,
    Home
  }
}
</script>
<style scoped>

</style>