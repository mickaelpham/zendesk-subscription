<template>
  <div id="app">
    <PlanSelection
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:product="product"
    ></PlanSelection>
  </div>
</template>

<script>
import PlanSelection from './components/PlanSelection.vue'

export default {
  components: {
    PlanSelection
  },

  data () {
    return {
      products: [
        { id: 1, name: 'Support' },
        { id: 2, name: 'Chat' },
        { id: 3, name: 'Voice' }
      ]
    }
  }
}
</script>
