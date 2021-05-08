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
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    toggleTask(state, payload) {
      state.tasks.forEach((task) => {
        if (task.id === payload) {
          task.done = !task.done;
        }
      });
    },
  },
  actions: {
    addTaskStore({ commit }, payload) {
      commit('addTask', {
        id: Date.now(),
        title: payload,
        done: false,
      });
    },
    toggleTaskStore({ commit }, payload) {
      commit('toggleTask', payload);
    },
  },
  modules: {},
});
