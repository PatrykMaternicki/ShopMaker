<template>
  <v-flex
    xs12
    lg10
    pr-4
  >
    <v-layout row />
    <v-layout
      row
      wrap
      justify-space-between
    >
      <v-flex
        v-for="item in items"
        :key="item.product_id"
        xs12
        sm6
        md4
        lg3
        class="pa-3"
      >
        <v-card
          class="pa-3"
          flat
          outlined="true"
          :class="`${className}__card`"
        >
          <v-layout
            xs12
            justify-content-center
          >
            <img
              :src="`${imageUrl}${item.thumbnail}`"
              width="100%"
              height="auto"
              class="flex xs6"
            >
          </v-layout>
          <v-card-title primary-title>
            <v-flex
              xs12
              wrap
            >
              <div class="headline text-xs-center font-weight-bold">
                {{ item.name }}
              </div>
              <div class="headline pink--text text-xs-center pt-3">
                <span :class="isDiscount(item.discounted_price)">{{ item.price }}$</span>
                <span
                  v-if="item.discounted_price > 0"
                  class="font-weight-bold display-1"
                >{{ item.discounted_price }}$</span>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-layout
              xs12
              justify-content-center
              column
            >
              <v-flex
                xs6
                mt-3
              >
                <v-btn
                  large
                  round
                  block
                  color="pink white--text"
                  @click="showDetail(item.product_id)"
                >
                  Show more details
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-content-center>
      <v-flex xs8>
        <div class="text-xs-center">
          <v-pagination
            v-if="setPages > 1"
            v-model="page"
            color="red"
            :length="setPages"
          />
        </div>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      max-width="1200"
    >
      <Detail 
        @closeModal="closeModal($event)"
      />
    </v-dialog>
  </v-flex>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import Detail from './Detail.vue';

export default {
  name: 'ItemListing',

  components: {
    Detail
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      imageUrl: 'https://backendapi.turing.com/images/products/',
      page: 0,
      dialog: false,
      className: 'listing'
    };
  },
              
  computed: {
    ...mapState(['showModal', 'item']),

    setPages() {
      return Number.parseInt(Math.ceil(this.count/24));
    },
  },
  watch: {
    page(val) {
      this.$store.dispatch('getItemsByPage', this.page);
    },
    
    showModal(val) {
      this.dialog = val;
    },

    dialog(val) {
      val || this.$store.dispatch('setSignalCleanProduct', true);
      val || this.$store.dispatch('hideModal', val);
    },
  },

  methods: {
    showDetail(productId) {
      this.$store.dispatch('showDetail', productId);
    },

    closeModal(event) {
      this.dialog = false;
    },

    isDiscount(discountPrice) {
      return new Number(discountPrice) > 0 ?  'line-through' : 'regular';
    },
  }
};
</script>
<style scoped>
  .line-through {
    text-decoration: line-through;
  }

  .listing__card {
    border: 1px solid lightgrey;
    border-radius: 4px;
    border-color: lightgrey !important;
  }
</style>