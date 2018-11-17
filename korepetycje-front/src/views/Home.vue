<template>
  <div class="page--home">
    <grid-container>
      <search-bar />
      <button-component pink>Przycisk</button-component>
      <testimonials />
    </grid-container>
  </div>

</template>

<script>
import SearchBar from '@/components/Home/SearchBar'
import ButtonComponent from '@/components/Button'
import Testimonials from '@/components/Home/Testimonials'

export default {
  name: 'Home',
  components: {
    SearchBar,
    ButtonComponent,
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
