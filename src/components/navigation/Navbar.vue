<template>
  <v-toolbar color="white">
    <v-toolbar-title class="pink--text">
      <router-link
        class="pink--text"
        to="/"
      >
        ShopMaker
      </router-link>
    </v-toolbar-title>
    <component :is="setAtom" />
    <v-spacer />
    <router-link
      class="without-underline"
      to="/shipping-card"
    >
      <v-toolbar-items>
        <v-flex
          d-flex
          align-center
          title
        >
          <v-badge color="pink">
            <template v-slot:badge>
              {{ stock }}
            </template>
            <v-icon color="#BDBDBD">
              shopping_basket
            </v-icon>
          </v-badge>
          <span class="pl-4 grey--text">Your Bag: </span><span class="pink--text">{{ cost }}$</span>
        </v-flex>
      </v-toolbar-items>
    </router-link>
  </v-toolbar>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Menu from './atoms/Menu.vue';
import Profile from './atoms/Profile.vue';
export default {
  name: 'Navbar',
  components: {
    Menu,
    Profile
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(['stock']),
    setAtom() {
      return this.$store.getters.isLogged ? 'Profile' : 'Menu';
    },

    cost() {
      return Number.parseFloat(this.$store.getters.cost).toFixed(2);
    }
  },

  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style scss scoped>
.without-underline {
  text-decoration: 
}
</style>