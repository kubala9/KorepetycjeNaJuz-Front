<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Znajdziesz tutaj tylko</h3>
    <div class="list-wrapper">
      <ul class="list">
        <li class="list__item">płacz</li>
        <li class="list__item">smutek</li>
        <li class="list__item">cierpienie</li>
        <li class="list__item">...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  .list-wrapper {
    max-width: 160px;
    width: 100%;
    margin: 0 auto;
  }

  .list {
    text-align: left;

    &__item {
      margin: 10px 0;
    }
  }

  a {
    color: #42b983;
  }
</style>
