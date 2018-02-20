<template>
  <div class="plan-selection">
    <div class="product-name">
      {{ product.name }}
    </div>

    <div class="plans">
      <select v-model.number="planId">
        <option
          v-for="plan in plans"
          :key="plan.id"
          :value="plan.id"
        >
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
      ${{ preview.cost }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['product'],

  data () {
    return {
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
    },
    current () {
      return this.$store.getters.currentPlanForProduct(this.product.id)
    },
    preview () {
      return this.$store.getters.previewedPlanForProduct(this.product.id)
    },
    planId: {
      get () {
        return this.preview.planId;
      },
      set (value) {
        this.$store.commit('updatePreviewPlanForProduct', {
          productId: this.product.id,
          planId: value,
          quantity: this.quantity
        })
        this.$store.dispatch('preview')
      }
    },
    quantity: {
      get () {
        return this.preview.quantity;
      },
      set (value) {
        this.$store.commit('updatePreviewPlanForProduct', {
          productId: this.product.id,
          planId: this.planId,
          quantity: value
        })
        this.$store.dispatch('preview')
      }
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
  flex: 1;
  font-size: 2em;
  font-weight: 100;
  text-align: right;
}

.quantity {
  flex: 1;
  text-align: left;
}

.quantity-field {
  width: 4em;
  text-align: right;
  padding-right: 10px;
}
</style>
