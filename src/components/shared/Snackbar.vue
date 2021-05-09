<template>
  <v-snackbar v-model="snackbar.show">
    {{ snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="hideSnackbar">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["snackbar"]),
  },
  methods: {
    ...mapActions(["hideSnackbar"]),
  },
};
</script>

<style lang="scss">
div.v-snack:not(.v-snack--absolute) {
  height: 100%;
}
</style>