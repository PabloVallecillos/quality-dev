<template>
  <v-stepper v-model="step" vertical>
    <step
      :complete="step > 1"
      :step="1"
      title="Componente Datatable"
      description="En este 📄 doc vamos a aprender a crear un componente reusable para mostrar datos de cualquier API"
    >
      <template v-slot:content>
        <v-card color="grey lighten-1">
          <data-table/>
        </v-card>
      </template>
    </step>
    <step :complete="step > 2" :step="2">
      <template v-slot:content>
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      </template>
    </step>
  </v-stepper>
</template>

<script lang="ts">
import Vue from "vue";
import Step from '@/components/Step.vue';
import dataTable from '@/components/DataTable.vue';

export default Vue.extend({
  name: "ViewDoc",
  data: () => ({
    step: 1,
  }),
  components: {
    Step,
    dataTable,
  },
});
</script>

<style scoped></style>
