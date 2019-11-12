<template>
  <v-toolbar-items class="align-center">
    <span class="px-3 title grey--text">Hi 
      <router-link
        to="profile"
        class="pink--text"
      >{{ login }}</router-link>
    </span>
    <v-btn
      v-for="(item, index) in profile"
      :key="index"
      flat
      @click="goTo(item.url)"
    >
      <v-icon
        color="pink"
        class="pr-3"
      >
        {{ item.icon }}
      </v-icon>
      {{ item.label }}
    </v-btn>
  </v-toolbar-items>
</template>
<script>
import { ProfileDictionary } from '../../../dictionary/profile.js';
import { mapGetters } from 'vuex';
export default {
  name: 'AtomNavigationProfile',
  
  data() {
    return {
      profile: ProfileDictionary,
    };
  },

  computed: {
    ...mapGetters['customer'],

    login() {
      return this.$store.getters.login;
    }
  },

  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }

};
</script>