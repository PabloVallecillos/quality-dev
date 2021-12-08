<template>
  <v-app-bar
      app
      color="black"
      dark
  >
    <div class="d-flex align-center">
      <h3>dev</h3>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      text
      to="/news"
    >
      <span>News</span>
    </v-btn>
    <h1>|</h1>
    <v-btn
      text
      to="/docs"
    >
      <span>docs</span>
    </v-btn>
    <h1>|</h1>
    <v-btn
      text
      to="/"
    >
      <span>home</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar',
});
</script>

