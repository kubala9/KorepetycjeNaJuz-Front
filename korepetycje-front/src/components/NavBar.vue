<template>
  <div class="nav">
    <img src="" alt="Logo" class="nav__logo">
    <div class="nav-links">
      <router-link to="/" class="nav-links__link">Główna</router-link>
      <router-link to="/about" class="nav-links__link">O nas</router-link>
      <router-link to="/map" class="nav-links__link">Mapa</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;

    &__link {
      padding: 20px;
      font-size: 17px;
      text-decoration: none;
    }
  }
</style>
