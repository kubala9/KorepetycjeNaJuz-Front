<template>
  <div class="page">
    <nav-bar />
    <router-view />
    <footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer§'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'assets/sass/index';
</style>
