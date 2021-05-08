<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details
    clearable
  >
    <template v-slot:append>
      <v-icon @click="addTask" color="primary" :disabled="invalidNewTaskTitle"
        >mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    invalidNewTaskTitle() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    ...mapActions(["addTaskStore"]),
    addTask() {
      if (!this.invalidNewTaskTitle) {
        this.addTaskStore(this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style>
</style>