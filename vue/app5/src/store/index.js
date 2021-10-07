import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    events: []
  },
  mutations: {
    signIn(state, user) {
      state.user = user;
    },
    signOut(state) {
      state.user = {};
    },
    setEvents(state, events) {
      state.events = events;
    }
  },
  actions: {},
  modules: {}
});
