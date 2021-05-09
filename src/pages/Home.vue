<template>
  <div>
    <field-add-task />
    <list-tasks
      v-if="this.filteredTasks.length > 0"
      :tasks="this.filteredTasks"
    />
    <no-tasks v-else />
    <button-sorting-done v-if="isSortingTasks" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FieldAddTask from "@/components/Todo/FieldAddTask.vue";
import ListTasks from "@/components/Todo/ListTasks.vue";
import NoTasks from "../components/Todo/NoTasks.vue";
import ButtonSortingDone from "../components/Todo/ButtonSortingDone.vue";

export default {
  components: { FieldAddTask, ListTasks, NoTasks, ButtonSortingDone },
  computed: {
    ...mapGetters(["filteredTasks", "isSortingTasks"]),
  },
};
</script>