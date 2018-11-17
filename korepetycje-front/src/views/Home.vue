<template>
<<<<<<< HEAD
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Witaj w Projekcie Zespołowym!" />
=======
  <div class="page--home">
    <grid-container>
      <search-bar />
      <testimonials />
    </grid-container>
>>>>>>> ea5670e7f88a0fa90e67606baa8f2a87b33dcf1e
  </div>

</template>

<script>
import SearchBar from '@/components/Home/SearchBar'
import Testimonials from '@/components/Home/Testimonials'

export default {
<<<<<<< HEAD
=======
  name: 'Home',
>>>>>>> ea5670e7f88a0fa90e67606baa8f2a87b33dcf1e
  components: {
    SearchBar,
    Testimonials
  }
}
</script>

<style lang="scss" scoped>
  .page--home {
    padding: 200px 0;
    background: url('/img/bg.jpg');
  }
</style>
