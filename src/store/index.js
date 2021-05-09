import Vue from 'vue';
import Vuex from 'vuex';
import Localbase from 'localbase';
import {} from '../constants/db';
const db = new Localbase('db');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    snackbar: {
      show: false,
      text: '',
    },
    tasks: [
      // {
      //   id: 1,
      //   title: 'Wake up',
      //   done: false,
      //   dueDate: '2020-10-16',
      // },
      // {
      //   id: 2,
      //   title: 'Go to run',
      //   done: false,
      //   dueDate: '2020-10-17',
      // },
      // {
      //   id: 3,
      //   title: 'Eat breakfast',
      //   done: false,
      //   dueDate: null,
      // },
    ],
    sorting: false,
  },
  getters: {
    search(state) {
      return state.search;
    },
    tasks(state) {
      return state.tasks;
    },
    filteredTasks(state) {
      const searchTerm = state.search?.toLowerCase();
      return searchTerm
        ? state.tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm)
          )
        : state.tasks;
    },
    snackbar(state) {
      return state.snackbar;
    },
    isSortingTasks(state) {
      return state.sorting;
    },
  },
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
    },
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
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      if (index !== -1) {
        Object.assign(state.tasks[index], payload);
      }
    },
    setTasks(state, payload) {
      state.tasks = payload;
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
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    setSearch({ commit }, payload) {
      commit('setSearch', payload);
    },
    addTaskStore({ commit, dispatch }, payload) {
      const newTask = {
        id: Date.now(),
        title: payload,
        done: false,
        dueDate: null,
      };
      db.collection(TASKS_COLLECTION_NAME)
        .add(newTask)
        .then(() => {
          commit('addTask', newTask);
          dispatch('showSnackbar', `'${payload}' added`);
        });
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
    setTasks({ commit }, payload) {
      commit('setTasks', payload);
    },
    showSnackbar({ commit }, payload) {
      commit('showSnackbar', payload);
    },
    hideSnackbar({ commit }) {
      commit('hideSnackbar');
    },
    toggleSorting({ commit }) {
      commit('toggleSorting');
    },
  },
  modules: {},
});
