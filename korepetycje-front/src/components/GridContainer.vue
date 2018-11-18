<template>
  <div class="grid-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GridContainer'
}
</script>

<style lang="scss" scoped>
  .grid-container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 60px;

    @include tablet {
      padding: 0 40px;
    }

    @include mobile {
      padding: 0 20px;
    }
  }
</style>
