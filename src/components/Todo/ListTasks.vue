<template>
  <v-list flat class="pa-0">
    <draggable v-model="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import Task from "@/components/Todo/Task.vue";

export default {
  components: { Task, draggable },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.filteredTasks;
      },
      set(value) {
        this.$store.dispatch("setTasks", value);
      },
    },
  },
};
</script>

<style>
</style>