import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {
      products: [
        { id: 1, planId: 2, quantity: 5, cost: 125 },
        { id: 2, planId: 1, quantity: 3, cost: 3 },
        { id: 3, planId: 4, quantity: 7, cost: 7000 },
      ]
    },
    preview: {
      products: [
        { id: 1, planId: 2, quantity: 5, cost: 125 },
        { id: 2, planId: 1, quantity: 3, cost: 3 },
        { id: 3, planId: 4, quantity: 7, cost: 7000 },
      ]
    }
  },

  getters: {
    currentPlanForProduct: (state) => (id) => {
      return state.current.products.find(product => product.id === id)
    },
    previewedPlanForProduct: (state) => (id) => {
      return state.preview.products.find(product => product.id === id)
    }
  },

  actions: {
    preview ({ commit, state }) {
      api.preview(state.preview).then(response => {
        commit('updatePreviewWithCosts', response)
      })
    }
  },

  mutations: {
    updatePreviewPlanForProduct: (state, payload) => {
      let product = state.preview.products.find(product => product.id === payload.productId)
      product.planId = payload.planId
      product.quantity = payload.quantity
    },

    updatePreviewWithCosts: (state, payload) => {
      state.preview = payload
    }
  }
})
