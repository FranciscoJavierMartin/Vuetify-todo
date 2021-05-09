<template>
  <v-text-field
    v-model="search"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    :disabled="isSortingTasks"
    class="expanding-search mt-1"
    :class="{ closed: searchClosed && !this.search }"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    dense
    filled
    clearable
  />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
  computed: {
    ...mapGetters(["isSortingTasks"]),
    search: {
      get() {
        return this.$store.getters.search;
      },
      set(newSearch) {
        this.$store.dispatch("setSearch", newSearch);
      },
    },
  },
};
</script>

<style lang="scss">
.expanding-search {
  transition: max-width 0.3s;
  cursor: pointer !important;
  .v-input__slot {
    &:before,
    &:after {
      border-color: transparent !important;
    }
  }
  &.closed {
    max-width: 45px;
    .v-input__slot {
      background-color: transparent !important;
    }
  }
}
</style>