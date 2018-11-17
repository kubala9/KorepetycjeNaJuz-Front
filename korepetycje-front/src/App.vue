<template>
<<<<<<< HEAD
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/map">Map</router-link>
    </div>
=======
  <div class="page">
    <nav-bar />
>>>>>>> ea5670e7f88a0fa90e67606baa8f2a87b33dcf1e
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
  @import 'assets/sass/index';
</style>
