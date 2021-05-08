<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="editTask"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      date: null,
    };
  },
  mounted() {
    if (this.task.dueDate) {
      this.date = this.task.dueDate;
    }
  },
  methods: {
    ...mapActions(["saveTaskStore"]),
    editTask() {
      this.saveTaskStore({ ...this.task, dueDate: this.date });
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>