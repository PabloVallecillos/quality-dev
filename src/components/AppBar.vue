<template>
  <v-app-bar app color="black" dark>
    <div class="d-flex align-center">
      <h3>dev</h3>
    </div>

    <v-spacer></v-spacer>

    <v-scroll-x-transition>
      <v-icon @click="toggleTheme" v-if="dark"> mdi-weather-night </v-icon>
    </v-scroll-x-transition>
    <v-scroll-x-transition>
      <v-icon @click="toggleTheme" v-if="!dark"> mdi-weather-sunny </v-icon>
    </v-scroll-x-transition>
    <v-btn text :to="{name: 'Shop'}">
      <span>shop</span>
    </v-btn>
    <h1>|</h1>
    <v-btn text :to="{name: 'DocsMain'}">
      <span>docs</span>
    </v-btn>
    <h1>|</h1>
    <v-btn text to="/">
      <span>home</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app-bar",
  data: () => ({
    dark: localStorage.getItem('dark') === 'true' || false,
  }),
  methods: {
    toggleTheme() {
      let { dark } = this.$vuetify.theme;
      this.dark = !dark;
      this.$vuetify.theme.dark = !dark;
      localStorage.setItem("dark", String(!dark));
    },
  },
});
</script>
