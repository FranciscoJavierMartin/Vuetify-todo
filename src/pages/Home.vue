<template>
  <div>
    <loading v-if="isLoadingTasks" />
    <list-tasks v-else-if="this.filteredTasks.length > 0" />
    <no-tasks v-else />
    <button-sorting-done v-if="isSortingTasks" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListTasks from "@/components/Todo/ListTasks.vue";
import NoTasks from "../components/Todo/NoTasks.vue";
import ButtonSortingDone from "../components/Todo/ButtonSortingDone.vue";
import Loading from "../components/Todo/Loading.vue";

export default {
  components: { ListTasks, NoTasks, ButtonSortingDone, Loading },
  computed: {
    ...mapGetters(["filteredTasks", "isSortingTasks", "isLoadingTasks"]),
  },
};
</script>