<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Edit task </v-card-title>
      <v-card-text>Editing '{{ task.title }}'</v-card-text>
      <v-text-field autofocus class="px-6" v-model="editedTitle" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="primary" text @click="editTask"> Save </v-btn>
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
  data() {
    return {
      editedTitle: "",
    };
  },
  mounted() {
    this.editedTitle = this.task.title;
  },
  methods: {
    ...mapActions(["saveTaskStore"]),
    editTask() {
      this.saveTaskStore({ title: this.editedTitle, id: this.task.id });
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>