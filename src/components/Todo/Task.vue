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
          <v-btn icon @click.stop="deleteTask(task.id)">
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
    <dialog-delete />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DialogDelete from "./Dialogs/DialogDelete.vue";

export default {
  components: { DialogDelete },
  props: {
    task: {
      type: Object,
      required: true,
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

<style>
</style>