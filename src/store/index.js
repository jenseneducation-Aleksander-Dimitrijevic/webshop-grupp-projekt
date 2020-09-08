import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    products: [],
    cartModalOpen: false,
  },
  mutations: {
    TOGGLE_SIDE_MENU(state) {
      state.isOpen = !state.isOpen;
    },
    ADD_TO_CART(state, product) {
      const itemExist = state.products.find((item) => item.id === product.id);
      if (itemExist) {
        alert(
          `Du har redan lagt till ${product.name.toUpperCase()} i kundkorgen!`
        );
        return;
      }
      state.products.push(product);
      product.count++;
    },
    TOGGLE_CART(state) {
      state.cartModalOpen = !state.cartModalOpen;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getAllProducts(state) {
      return state.products.reduce((sum, item) => {
        return (sum += item.count);
      }, 0);
    },

    displayTotalAmount(state) {
      return state.products.reduce((sum, item) => {
        return (sum += item.count * item.price);
      }, 0);
    },
  },
});
