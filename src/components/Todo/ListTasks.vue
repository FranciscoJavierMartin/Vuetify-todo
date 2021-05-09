<template>
  <v-list flat class="pa-0">
    <draggable :list="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import Task from "@/components/Todo/Task.vue";

export default {
  components: { Task, draggable },
  props: {
    tasks: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>