<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="field-add-task pa-3"
    outlined
    placeholder="Add Task"
    append-icon="mdi-plus"
    hide-details
    clearable
  >
    <template v-slot:append>
      <v-icon @click="addTask" :disabled="invalidNewTaskTitle">mdi-plus</v-icon>
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

<style lang="scss">
.field-add-task.v-input--is-focused {
  .v-input__slot {
    background-color: rgba(31, 94, 129, 0.5);
  }
}
</style>