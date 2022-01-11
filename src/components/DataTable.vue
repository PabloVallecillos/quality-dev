<template>
  <v-data-table
    :headers="headers"
    :items="data"
    dense
    hide-default-footer
    fixed-header
    height="400"
    show-select
    style="border: 1px solid #e0e0e0"
  >
    <template v-slot:top>
      <v-hover v-slot="{ hover }" style="cursor: pointer">
        <v-toolbar
          :elevation="hover ? 12 : 0"
          style="border-bottom: 1px solid #e0e0e0"
          class="pt-3 rounded rounded-b-0"
          :height="$vuetify.breakpoint.xs ? 200 : 65"
        >
          <v-row>
            <v-spacer v-if="!$vuetify.breakpoint.xs"/>
            <v-col :cols="$vuetify.breakpoint.xs ? 12: 'auto'">
              <text-field icon="mdi-magnify"/>
            </v-col>
            <v-col cols="auto">
              <v-btn
                class="c-btn"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
      </v-hover>
    </template>
    <template v-slot:footer>
      <v-hover v-slot="{ hover }" style="cursor: pointer">
        <v-toolbar
          :elevation="hover ? 3 : 0"
          class="rounded rounded-t-0"
          style="border-top: 1px solid #e0e0e0"
        >
        <v-spacer/>
        <v-col
          cols="auto"
        >
          <h3>paginacion</h3>
        </v-col>
      </v-toolbar>
      </v-hover>
    </template>
    <template v-slot:item.actions>
      <icon mdi="mdi-pencil"/>
      <icon mdi="mdi-delete"/>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '@/components/Icon.vue';
import TextField from '@/components/textField.vue';

export default Vue.extend({
  name: 'data-table',
  data: () => ({
    headers: [
      {
        text: 'Código',
        align: 'start',
        sortable: false,
        value: 'cod',
      },
      { text: 'Fecha', value: 'fecha', type: 'date' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ],
    data: [
      {
        cod: 1,
        fecha: '2020-10-12',
      }
    ],
  }),
  components: {
    Icon,
    TextField,
  },
});
</script>
<style lang="scss">
.c-btn {
  height: 37.5px !important;
  width: 37.5px !important;
  min-width: 47.5px !important;
}
</style>
