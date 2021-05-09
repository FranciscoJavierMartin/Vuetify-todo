<template>
  <div class="subtitle-1 ml-4">{{ this.date }}</div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      date: "",
      interval: null,
    };
  },
  methods: {
    getDate() {
      this.date = format(new Date(), "MMMM d, HH:mm");
      this.interval = setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
  beforeDestroy() {
    clearTimeout(this.interval);
  },
};
</script>

<style>
</style>