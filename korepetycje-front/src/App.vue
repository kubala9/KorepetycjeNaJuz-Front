<template>
  <div class="page">
    <nav-bar />
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
