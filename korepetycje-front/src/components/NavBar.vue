<template>
  <div class="nav">
    <grid-container class="nav__wrapper">
      <img src="" alt="Logo" class="nav__logo">
      <div class="nav-links">
        <router-link to="/" class="nav-links__link">Główna</router-link>
        <router-link to="/about" class="nav-links__link">O nas</router-link>
        <router-link to="/map" class="nav-links__link">Mapa</router-link>
      </div>
    </grid-container>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    width: 100%;

    &__wrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;

    &__link {
      padding: 20px 40px;
      font-size: 17px;
      text-decoration: none;
      color: #fff;
    }
  }
</style>
