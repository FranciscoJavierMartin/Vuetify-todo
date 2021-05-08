<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="this.tasks.length > 0" :tasks="this.tasks" />
    <div v-else class="no-tasks">
      <v-icon size="100" color="primary"> mdi-check </v-icon>
      <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FieldAddTask from "@/components/Todo/FieldAddTask.vue";
import ListTasks from "@/components/Todo/ListTasks.vue";

export default {
  components: { FieldAddTask, ListTasks },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["toggleTaskStore", "deleteTaskStore"]),
    toggleTask(id) {
      this.toggleTaskStore(id);
    },
    deleteTask(id) {
      this.deleteTaskStore(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.no-tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>