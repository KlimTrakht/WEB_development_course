import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes: [],
    status: "true"
  },
  getters: {
    getJokes(state) {
      return state.jokes;
    },
    getStatus(state) {
      return state.status;
    }
  },
  mutations: {
    initJokes(state, payload) {
      state.jokes.push(...payload);
    },
    addJoke(state, joke) {
      state.jokes.push(joke);
    },
    removeJoke(state, index) {
      state.jokes.splice(index, 1);
    },
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    initJokes({ commit }) {
      fetch("http://localhost:3005/jokes/ten")
        .then(response => response.json())
        .then(json => commit("initJokes", json));
    },
    addJoke({ commit }) {
      fetch("http://localhost:3005/jokes/random")
        .then(response => response.json())
        .then(json => commit("addJoke", json));
    }
  },
  modules: {}
});
