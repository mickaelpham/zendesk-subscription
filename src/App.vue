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
        { id: 1, name: 'Support', unitOfMeasure: 'Seats' },
        { id: 2, name: 'Chat', unitOfMeasure: 'Agents' },
        { id: 3, name: 'Voice', unitOfMeasure: 'Minutes' }
      ]
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 12pt;
}

input,
select {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 12pt;
}

select {
  border: 1px solid #ccc;
  padding: 2px;
}
</style>
