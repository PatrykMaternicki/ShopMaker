<template>
  <v-container
    align-center
    d-flex
  >
    <v-layout
      column
      justify-content-center
    >
      <v-flex
        xs12
        md6
        align-self-center
      >
        <v-card class="pa-5">
          <v-flex
            xs12
            align-self-center
            class="mb-3"
          >
            <v-icon
              color="red"
              :size="255"
            >
              error_outline
            </v-icon>
          </v-flex>
          <v-flex
            xs12
            class="text-center"
          >
            <p class="display-1">
              Nothing is here
            </p>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'NotFound',
  data() {
    return {};
  }
};
</script>
