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
        { id: 2, name: 'Chat',    unitOfMeasure: 'Bots' },
        { id: 3, name: 'Voice',   unitOfMeasure: 'Lines' }
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
  border: 1px solid #ccc;
}

input {
  padding: 3px;
}

select {
  padding: 2px;
}

/* Hide HTML5 Up and Down arrows. */
input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
