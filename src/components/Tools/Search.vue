<template>
  <v-text-field
    class="expanding-search mt-1"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    dense
    filled
    clearable
  />
</template>

<script>
export default {};
</script>

<style lang="scss">
.expanding-search {
  .v-input__slot {
    &:before,
    &:after {
      border-color: transparent !important;
    }
  }
}
</style>