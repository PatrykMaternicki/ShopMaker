<template>
  <v-card :class="{'pa-2': $vuetify.breakpoint.smAndDown, 'pa-5': $vuetify.breakpoint.mdAndUp}">
    <v-layout
      align-center
      wrap
    >
      <v-flex
        xs12
        lg6
      >
        <v-layout wrap>
          <v-flex
            xs12
            d-flex
            justify-space-between
            style="flex-wrap:wrap"
          >
            <v-flex
              xs12
              md6
              text-xs-center
            >
              <img
                :src="`${imageUrl}${item.image}`"
                width="auto"
                height="auto"
              >
            </v-flex>
            <v-flex
              xs12
              md6
              text-xs-center
              :class="{'mt-5': $vuetify.breakpoint.smAndDown}"
            >
              >
              <img
                :src="`${imageUrl}${item.image_2}`"
                width="auto"
                height="auto"
              >
            </v-flex>
          </v-flex>
          <v-flex
            xs12
            d-flex
            justify-content-center
            pt-3
            text-xs-center
            :class="{'mt-5': $vuetify.breakpoint.smAndDown}"
          >
            <img
              :src="`${imageUrl}${item.thumbnail}`"
              width="100%"
              height="auto"
              class="flex xs3"
            >
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
        lg6
      >
        <v-card-title class="headline">
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          {{ item.description }}
          <div class="headline pink--text text-xs-center pt-3">
            <span :class="isDiscount(item.discounted_price)">{{ item.price }}$</span>
            <span
              v-if="item.discounted_price > 0"
              class="font-weight-bold display-1"
            >{{ item.discounted_price }}$</span>
          </div>
          <div class="mt-4">
            <div class="headline">
              Sizes
            </div>
            <v-chip
              v-for="size in sizes"
              :key="size"
              color="pink"
              label
              outline
              x-large
              text-color="pink"
              @click="setSize(size)"
            >
              {{ size }}
            </v-chip>
          </div>

          <div class="mt-4">
            <div class="headline">
              Colors
            </div>
            <v-btn
              v-for="color in colors"
              :key="color"
              fab
              small
              :color="color"
              @click="setColor(color)"
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-flex
            d-flex
            justify-content-center
            xs12
          >
            <v-flex
              xs12
              sm6
            >
              <v-btn
                large
                round
                block
                color="pink white--text"
                :disabled="disabledButton"
                @click="addToOrder($event)"
              >
                Add to card
              </v-btn>
            </v-flex>
          </v-flex>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  import { mapGetters, mapState } from 'vuex';
  import { Sizes } from '../../dictionary/sizes';
  import { Colors } from '../../dictionary/colors';
  import { Product } from '../../models/Product';
  export default {
   data() {
    return {
      imageUrl: 'https://backendapi.turing.com/images/products/',
      sizes: Sizes,
      colors: Colors,
      product: Product,
      disabledButton: true
    };
  },
  
  computed: {
    ...mapState( ['item', 'cleanProduct']),
  },

  watch: {
    item(val) {
      this.product.price = val.discounted_price > 0 ? val.discounted_price : val.price;
      this.product.productId = val.product_id;
      this.product.name = val.name;
    },

    cleanProduct(val) {
      if(val) {
        this.product = Product;
        this.disabledButton = true;
        this.$store.dispatch('setSignalCleanProduct', false);
      }
    }
  },

  methods: {
    isDiscount(discountPrice) {
      return new Number(discountPrice) > 0 ?  'line-through' : 'regular';
    },

    addToOrder(event) {
      this.product.subtotal = this.product.price;
      this.$store.dispatch('addToOrder', this.product);
      this.$emit( 'closeModal', true);
      this.product = Product;
    },

    setColor(color) {
      this.product.color = color;
      if (this.product.size) {
        this.disabledButton = false;
      }
    },

    setSize(size) {
      this.product.size = size;
      if (this.product.color) {
        this.disabledButton = false;
      }
    }
  }
}
</script>