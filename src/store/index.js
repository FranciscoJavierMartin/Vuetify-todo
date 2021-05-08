import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false,
      },
      {
        id: 2,
        title: 'Go to run',
        done: false,
      },
      {
        id: 3,
        title: 'Eat breakfast',
        done: false,
      },
    ],
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
