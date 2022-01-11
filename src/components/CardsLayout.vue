<template>
  <v-container>
    <v-row class="pa-10" align-content="center" justify="center">
        <slot name="content"></slot>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "CardsLayout"
});
</script>
