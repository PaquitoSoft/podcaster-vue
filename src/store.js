import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavigationActive: false
  },
  mutations: {
    navigationStarted(state) {
      state.isNavigationActive = true;
    },
    navigationEnded(state) {
      state.isNavigationActive = false;
    }
  },
  actions: {}
});
