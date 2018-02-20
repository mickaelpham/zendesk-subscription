import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {
      products: [
        { id: 1, planId: 2, quantity: 5, cost: 50 },
        { id: 2, planId: 1, quantity: 3, cost: 3 },
        { id: 3, planId: 4, quantity: 7, cost: 7000 },
      ]
    }
  },

  getters: {
    currentPlanForProduct: (state) => (id) => {
      return state.current.products.find(product => product.id === id)
    }
  },

  actions: {
  },

  mutations: {
  }
})
