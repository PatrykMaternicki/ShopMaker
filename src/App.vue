<template>
  <v-app>
    <navbar />
    <v-container
      fluid
      pa-0
    >
      <router-view />
      <Footer />
    </v-container>
  </v-app>
</template>
<script>
import { mapState } from 'vuex';
import Navbar from './components/navigation/Navbar.vue';
import Footer from './components/navigation/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },

  props: {
  },
  data() {
    return {
    };
  },
  computed: {
  },

  methods: {
    resizeAside(value) {
      this.isResize = value;
    }
  }
};
</script>
<style scss>
.application--wrap {
  min-height: calc(100vh - 330px) !important;
}
</style>