import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    products: []

  },
  mutations: {
    TOGGLE_SIDE_MENU(state) {
      state.isOpen = !state.isOpen
    },
    ADD_TO_CART(state, product) {
      state.products.push(product)
      console.log(state.products)
    }
  },
  actions: {
  },
  modules: {
  }
})
