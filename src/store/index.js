import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedProducts: [],
  },

  actions: {
    addProduct: ({ commit }, product) => {
      commit("setProduct", product);
    },
    removeProduct: ({ commit }, product) => {
      commit("removeProduct", product);
    },
  },

  mutations: {
    setProduct: (state, product) => {
      state.selectedProducts = [...state.selectedProducts, product];
    },
    removeProduct: (state, payload) => {
      let updatedProducts = state.selectedProducts.filter((product) => {
        if (product.id !== payload.id) {
          return product;
        }
      });

      state.selectedProducts = [...updatedProducts];
    },
  },

  getters: {
    getSelectedProducts: (state) => {
      return state.selectedProducts;
    },
  },
});
