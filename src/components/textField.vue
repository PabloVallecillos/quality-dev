<template>
  <v-text-field
    dense
    outlined
    filled
    single-line
    color="black"
    :append-icon="icon"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'text-field',
  props: {
    icon: String,
  },
});
</script>
