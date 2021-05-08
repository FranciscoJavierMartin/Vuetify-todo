<template>
  <div>
    <v-list-item
      @click="toggleTask(task.id)"
      :class="{ 'blue lighten-5': task.done }"
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
        <v-list-item-action>
          <task-menu />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
    <dialog-delete
      v-if="this.dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DialogDelete from "./Dialogs/DialogDelete.vue";
import TaskMenu from "./TaskMenu.vue";

export default {
  components: { DialogDelete, TaskMenu },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
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

<style>
</style>