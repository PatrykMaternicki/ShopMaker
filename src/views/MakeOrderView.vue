<template>
  <v-app>
    <v-container
      d-flex
      align-center
      justify-content-center
    >
      <v-card>
        <v-layout
          justify-content-center
          wrap
        >
          <preview />
          <make-order />
        </v-layout>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex';
import MakeOrder from '../components/ecomerce/MakeOrder.vue';
import Preview from '../components/ecomerce/Preview.vue';
export default {
  name: 'MakeOrderView',
  components: {
    MakeOrder,
    Preview
  },
  props: {
  },
  data() {
    return {};
  },
  created() {
    this.$store.getters.cartId && this.$router.push('/');
  },
};
</script>