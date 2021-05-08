import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      text: '',
    },
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
    snackbar(state) {
      return state.snackbar;
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
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    showSnackbar(state, payload) {
      state.snackbar.show = !state.snackbar.show;
      state.snackbar.text = payload;
    },
  },
  actions: {
    addTaskStore({ commit, dispatch }, payload) {
      commit('addTask', {
        id: Date.now(),
        title: payload,
        done: false,
      });
      dispatch('showSnackbar', `'${payload}' added`);
    },
    toggleTaskStore({ commit }, payload) {
      commit('toggleTask', payload);
    },
    deleteTaskStore({ commit, dispatch }, payload) {
      commit('deleteTask', payload.id);
      dispatch('showSnackbar', `'${payload.title}' deleted`);
    },
    showSnackbar({ commit }, payload) {
      commit('showSnackbar', payload);
    },
  },
  modules: {},
});
