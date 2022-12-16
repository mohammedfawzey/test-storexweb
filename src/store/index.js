import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    S_userLoggedIn: false,
  },
  getters: {},
  mutations: {
    M_setUserAuth(state, payload) {
      state.S_userLoggedIn = payload;
    },
  },
  actions: {},
  modules: {},
});
