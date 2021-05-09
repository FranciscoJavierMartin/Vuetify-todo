<template>
  <div>
    <v-list-item
      @click="toggleTask(task.id)"
      :class="{ 'blue lighten-5': task.done }"
      class="white"
      :ripple="false"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | dateFormatted }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>
        <v-list-item-action v-if="isSortingTasks">
          <v-btn class="handle" color="primary" icon>
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { format } from "date-fns";
import TaskMenu from "./TaskMenu.vue";

export default {
  components: { TaskMenu },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isSortingTasks"]),
  },
  filters: {
    dateFormatted(value) {
      return format(new Date(value), "dd MMM yyyy");
    },
  },
  methods: {
    ...mapActions(["toggleTaskStore", "deleteTaskStore"]),
    toggleTask(id) {
      this.toggleTaskStore(id);
    },
    deleteTask(id) {
      this.deleteTaskStore({ id, title: this.task.title });
    },
  },
};
</script>

<style lang="scss">
.sortable-ghost {
  opacity: 0;
}

.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>