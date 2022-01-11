<template>
  <Fragment>
    <v-stepper-step :complete="complete" :step="step" editable edit-icon="mdi-eye" color="black">
      <p>{{title}}</p>
      <small>{{description}}</small>
    </v-stepper-step>

    <v-stepper-content :step="step">
      <slot name="content"></slot>
    </v-stepper-content>
  </Fragment>
</template>

<script lang="ts">
import Vue from "vue";
import { Fragment } from 'vue-fragment';

export default Vue.extend({
  name: "Step.vue",
  props: {
    complete: Boolean,
    step: Number,
    title: String,
    description: String,
  },
  components: {
    Fragment,
  },
});
</script>

<style scoped></style>
