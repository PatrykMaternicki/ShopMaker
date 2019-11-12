<template>
  <div>
    <v-btn
      v-for="(socialMedia, index) in dictionary"
      :key="index"
      :class="{'mx-5': $vuetify.breakpoint.mdAndUp}"
      fab
      dark
      color="white"
      @click="goTo(socialMedia.url)"
    >
      <v-icon
        color="#323232"
        dark
      >
        {{ socialMedia.icon }}
      </v-icon>
    </v-btn>
  </div>
</template>
<script>
import { SocialMediaDictionary } from '../../../dictionary/socialMedia.js';
import { mapGetters } from 'vuex';
export default {
  name: 'AtomNavigationProfile',
  
  data() {
    return {
      dictionary: SocialMediaDictionary,
    };
  },

  methods: {
    goTo(url) {
      window.location.href = url;
    }
  }
};
</script>