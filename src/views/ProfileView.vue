<template>
  <v-container fluid>
    <v-card>
      <v-flex
        xs12
        class="pa-4"
      >
        <v-tabs>
          <v-tab @change="changeView('Profile')">
            Profile
          </v-tab>
          <v-tab @change="changeView('Address')">
            Address
          </v-tab>
          <v-tab @change="changeView('CreditCard')">
            Credit card
          </v-tab>
        </v-tabs>
      </v-flex>
      <component :is="currentView" />
    </v-card>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
import Profile from '../components/forms/Profile.vue';
import Address from '../components/forms/Address.vue';
import CreditCard from '../components/forms/CreditCard.vue'
import AuthService from '../services/AuthService';
export default {
  name: 'ProfileView',
  components: {
    Profile,
    Address,
    CreditCard
  },

  props: {
  },

  data() {
    return {
      currentView: 'Profile',
    };
  },

  created() {
    (new AuthService()).isLogged() || this.$router.push('/login');
  },

  methods: {
    changeView(type) {
     this.currentView = type;
    }
  }
};
</script>