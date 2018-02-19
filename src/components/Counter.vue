<template>
  <div class="counter">
    Counter: {{ count }}<br>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'count'
    ])
  },

  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style>
  .counter {
    border: 1px solid #ccc;
    max-width: 15em;
    padding: 1em;
    margin-bottom: 1em;
  }
</style>
