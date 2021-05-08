<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Delete task? </v-card-title>
      <v-card-text
        >Are you sure you wanna delete '{{ this.task.title }}'?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> No </v-btn>
        <v-btn
          color="red"
          text
          @click="deleteTaskStore({ id: task.id, title: task.title })"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteTaskStore"]),
    deleteTask() {
      this.deleteTaskStore({ id: this.task.id, title: this.task.title });
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>