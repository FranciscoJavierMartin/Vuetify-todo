<template>
  <div class="home">
    <v-list flat class="pa-0">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="toggleTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider />
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Wake up",
          done: false,
        },
        {
          id: 2,
          title: "Go to run",
          done: false,
        },
        {
          id: 3,
          title: "Eat breakfast",
          done: false,
        },
      ],
    };
  },
  methods: {
    toggleTask(id) {
      this.tasks.forEach((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }
      });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
