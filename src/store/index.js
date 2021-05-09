import Vue from 'vue';
import Vuex from 'vuex';
import Localbase from 'localbase';
import { TASKS_COLLECTION_NAME } from '../constants/db';
const db = new Localbase('db');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    snackbar: {
      show: false,
      text: '',
    },
    tasks: [],
    sorting: false,
    isLoadingTasks: false,
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
    isLoadingTasks(state) {
      return state.isLoadingTasks;
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
    toggleLoadingTasks(state) {
      state.isLoadingTasks = !state.isLoadingTasks;
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
      db.collection(TASKS_COLLECTION_NAME)
        .doc({ id: payload.id })
        .delete()
        .then(() => {
          commit('deleteTask', payload.id);
          dispatch('showSnackbar', `'${payload.title}' deleted`);
        });
    },
    saveTaskStore({ commit, dispatch }, payload) {
      console.log(payload);
      db.collection(TASKS_COLLECTION_NAME)
        .doc({ id: payload.id })
        .update(payload)
        .then(() => {
          commit('saveTask', payload);
          dispatch('showSnackbar', `'${payload.title}' updated`);
        });
    },
    getTasks({ dispatch, commit }) {
      commit('toggleLoadingTasks');
      db.collection(TASKS_COLLECTION_NAME)
        .get()
        .then((tasks) => {
          dispatch('setTasks', tasks);
        })
        .finally(() => {
          commit('toggleLoadingTasks');
        });
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
