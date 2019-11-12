<template>
  <v-toolbar-items v-if="!this.$store.getters.isLogged">
    <v-btn
      v-for="(item, index) in dictionary"
      :key="index"
      flat
      @click="goTo(item.url)"
    >
      {{ item.label }}
    </v-btn>
  </v-toolbar-items>
</template>
<script>
import { NavbarDictionary } from '../../../dictionary/navbar.js';
export default {
  name: 'AtomNavigationMenu',

  data() {
    return {
      dictionary: NavbarDictionary,
    };
  },

  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
};
</script>