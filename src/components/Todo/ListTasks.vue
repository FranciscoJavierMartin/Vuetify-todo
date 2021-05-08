<template>
  <v-list flat class="pa-0">
    <task v-for="task in tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
import Task from "@/components/Todo/Task.vue";

export default {
  components: { Task },
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