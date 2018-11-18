<template>

  <div class="page--home">
    <grid-container>
      <search-bar />
      <testimonials />
    </grid-container>
  </div>

</template>

<script>
import SearchBar from '@/components/Home/SearchBar'
import Testimonials from '@/components/Home/Testimonials'

export default {
  name: 'Home',
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
