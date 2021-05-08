<template>
  <v-snackbar v-model="snackbar.show">
    {{ snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["snackbar"]),
  },
};
</script>

<style>
</style>