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
  ></v-text-field>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    ...mapActions(["addTaskStore"]),
    addTask() {
      this.addTaskStore(this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style>
</style>