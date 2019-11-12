<template>
  <v-flex
    md12
    lg6
    pa-3
  >
    <stripe-form />
  </v-flex>
</template>
<script>
import StripeForm from  '../stripe/Form.vue';
export default {
  name: 'MakeOrder',

  components: {
    StripeForm
  },
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch('generateOrder');
    this.$store.dispatch('generateStripeElement');
  }
  
};
</script>