<template>
  <div class="loading-panel">
    <v-progress-circular
      size="70"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div class="text-h5 primary--text">Loading ...</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading-panel {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;

  .v-progress-circular {
    margin: 1rem;
  }
}
</style>