<template>
  <div>
    <shipping-card />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ShippingCard from '../components/ecomerce/ShippingCard.vue';
export default {
  name: 'ShippingCardView',
  components: {
    ShippingCard
  },
  props: {
  },
  data() {
    return {};
  },
};
</script>