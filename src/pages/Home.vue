<template>
  <div>
    <field-add-task />
    <list-tasks v-if="this.tasks.length > 0" :tasks="this.tasks" />
    <no-tasks v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FieldAddTask from "@/components/Todo/FieldAddTask.vue";
import ListTasks from "@/components/Todo/ListTasks.vue";
import NoTasks from "../components/Todo/NoTasks.vue";

export default {
  components: { FieldAddTask, ListTasks, NoTasks },
  computed: {
    ...mapGetters(["tasks"]),
  },
};
</script>