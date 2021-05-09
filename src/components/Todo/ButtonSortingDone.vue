<template>
  <v-btn @click="toggleSorting" class="button-done-sorting" color="primary">
    Done Sorting
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["toggleSorting"]),
  },
};
</script>

<style lang="scss" scoped>
.button-done-sorting {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>