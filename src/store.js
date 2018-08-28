import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    id: 0,
  },
  mutations: {
    increment(state) {
      state.count = state.count + 5
    },
    decrement(state) {
      state.count = state.count - 3
    },
    addUsers(id) {
      state.count = id
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
  }
});
