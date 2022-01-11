<template>
  <v-col cols="12" sm="6" md="4" class="pa-8">
    <v-hover v-slot="{ hover }" style="cursor: pointer">
      <v-card
        height="max-content"
        min-height="350"
        :elevation="hover ? 6 : 2"
        class="transition-fast-in-fast-out"
        :to="{ name: 'ViewDoc' }"
      >
        <div
          :class="`px-${hover ? 5 : 0} transition-fast-in-fast-out`"
          :style="`transform: translateY(${hover ? -20 : 0}px)`"
        >
          <v-img
            aspect-ratio="1"
            :class="`grey lighten-2 rounded rounded-b-${hover ? 'md' : '0'}`"
            height="200"
            lazy-src="https://picsum.photos/10/6?image=15"
            src="https://picsum.photos/500/300?image=15"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <div
          :class="`px-${hover ? 1 : 0} transition-fast-in-fast-out`"
          :style="`transform: translateY(${hover ? -20 : 0}px)`"
        >
          <v-card-title>pepe</v-card-title>
          <v-card-text class="ellipsis">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </v-card-text>
          <v-card-actions class="pa-4">
            <slot name="actions"></slot>
          </v-card-actions>
        </div>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card.vue",
});
</script>
