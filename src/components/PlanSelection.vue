<template>
  <div class="plan-selection">
    <div class="product-name">
      {{ product.name }}
    </div>

    <div class="plans">
      <select v-model="selected">
        <option v-for="plan in plans" :key="plan.id" :value="plan.id">
          {{ plan.name }}
        </option>
      </select>
    </div>

    <div class="quantity">
      <input
        class="quantity-field"
        type="number"
        v-model.number="quantity"
        v-bind:id="quantityLabel"
      >
      <label v-bind:for="quantityLabel">{{ product.unitOfMeasure }}</label>
    </div>

    <div class="cost">
      $XXX
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],

  data () {
    return {
      selected: null,
      quantity: null,

      plans: [
        { id: 1, name: 'Essential' },
        { id: 2, name: 'Team' },
        { id: 3, name: 'Professional' },
        { id: 4, name: 'Enterprise' }
      ]
    }
  },

  computed: {
    quantityLabel () {
      return this.product.name.toLowerCase() + '-quantity'
    }
  }
}
</script>

<style>
.plan-selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1.5em 2em;
  margin: 2em 1em;
  max-width: 40em;
}

.plans {
  flex: 1;
}

.plans select {
  width: 10em;
}

.product-name {
  text-align: right;
  margin-right: 1.5em;
  width: 5em;
}

.cost {
  font-size: 2em;
  font-weight: 100;
}

.quantity {
  flex: 1;
  text-align: left;
}

.quantity-field {
  width: 6em;
}
</style>
