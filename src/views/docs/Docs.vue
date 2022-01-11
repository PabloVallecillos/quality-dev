<template>
  <CardsLayout>
    <template v-slot:content>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </template>
  </CardsLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import CardsLayout from '@/components/CardsLayout.vue';
import Card from '@/components/Card.vue';
import {util} from "@/util";

export default Vue.extend({
  name: 'docs',
  components: {
    CardsLayout,
    Card
  },
  methods: {
    ...util,
  }
});
</script>


