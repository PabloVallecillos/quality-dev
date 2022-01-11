<template>
  <v-btn icon>
    <v-icon>{{mdi}}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'icon',
  props: {
    mdi: String,
  },
});
</script>
