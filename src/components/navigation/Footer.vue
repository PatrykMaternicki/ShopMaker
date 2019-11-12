<template>
  <footer :class="`${className}`">
    <v-layout wrap>
      <v-flex
        xs12
        pa-4
      >
        <v-tabs
          v-model="activeDepartament"
          centered
          slider-color="white"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          dark
          :color="tabsColor"
          @change="getItemsWithDepartament($event)"
        >
          <v-tabs-slider color="white" />
          <v-tab
            v-for="departament in departaments"
            :key="departament.category_id"
            :class="{'display-1': $vuetify.breakpoint.mdAndUp}"
            ripple
          >
            {{ departament.name }}
          </v-tab>
        </v-tabs>
      </v-flex>
      <v-flex
        pb-4
        xs12
        class="text-xs-center"
      >
        <social-media />
      </v-flex>
      <v-flex
        xs12
        md6
        class="offset-md-3 pa-4"
      >
        <v-layout class="justify-space-between">
          <span
            class="white--text"
            :class="{'headline': $vuetify.breakpoint.mdAndUp}"
          >
            &copy 2019 Shopmate Ltd.
          </span>
          <a
            class="white--text"
            :class="{'headline': $vuetify.breakpoint.mdAndUp}"
            href="google.pl"
          >Contact</a>
          <a
            class="white--text"
            :class="{'headline': $vuetify.breakpoint.mdAndUp}"
            href="google.pl"
          >Privacy Policy</a>
        </v-layout>
      </v-flex>
    </v-layout>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex';
import SocialMedia from './atoms/SocialMedia.vue';
export default {
  name: 'NotFound',

  components: {
    SocialMedia
  },
  data() {
    return {
      className: 'navigationFooter',
      activeDepartament: '',
      tabsColor: '#323232',
    };
  },

  computed: {
    departaments() {
      return this.$store.getters.departaments;
    }
  },

  mounted() {
    this.$store.getters.departaments.length ===  0 && this.$store.dispatch('getDepartaments');
  },

  methods: {
    getItemsWithDepartament(val) {
      this.$store.dispatch('getItemsInDepartament', val);
    }
  }
};
</script>
<style scoped scss>
  .navigationFooter {
    background-color: #323232;
    position: absolute;
    bottom: -281px;
    height: 271px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
</style>