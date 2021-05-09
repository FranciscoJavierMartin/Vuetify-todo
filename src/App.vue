<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Vuetify Todo </v-list-item-title>
          <v-list-item-subtitle> Best Todo Ever </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="https://picsum.photos/1920/1080?random"
      prominent
      class="pt-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4">Vuetify Todo</v-app-bar-title>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "@/components/shared/Snackbar.vue";
import Search from "./components/Tools/Search.vue";

export default {
  components: {
    Snackbar,
    Search,
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
        { title: "About", icon: "mdi-help-box", to: "/about" },
      ],
    };
  },
};
</script>