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
        dueDate: '2020-10-16',
      },
      {
        id: 2,
        title: 'Go to run',
        done: false,
        dueDate: '2020-10-17',
      },
      {
        id: 3,
        title: 'Eat breakfast',
        done: false,
        dueDate: null,
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
    saveTask(state, payload) {
      const task = state.tasks.find((task) => task.id === payload.id);
      if (task) {
        task.title = payload.title;
      }
    },
    showSnackbar(state, payload) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = payload;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addTaskStore({ commit, dispatch }, payload) {
      commit('addTask', {
        id: Date.now(),
        title: payload,
        done: false,
        dueDate: null,
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
    saveTaskStore({ commit, dispatch }, payload) {
      commit('saveTask', payload);
      dispatch('showSnackbar', `'${payload.title}' updated`);
    },
    showSnackbar({ commit }, payload) {
      commit('showSnackbar', payload);
    },
    hideSnackbar({ commit }) {
      commit('hideSnackbar');
    },
  },
  modules: {},
});
