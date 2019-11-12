<template>
  <div>
    <toolbar />
    <v-layout wrap>
      <listing-category />
      <template v-if="items.length > 0">
        <listing
          :items="items"
          :count="count"
        />
      </template>
      <template v-else-if="items.length === 0">
        <not-found />
      </template>
    </v-layout>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import NotFound from '../components/ecomerce/NotFound.vue';
import Listing from '../components/ecomerce/Listing.vue';
import ListingCategory from '../components/ecomerce/ListingCategory.vue';
import Toolbar from '../components/ecomerce/Toolbar.vue';
export default {
  name: 'MainSiteView',
  components: {
    NotFound,
    Listing,
    Toolbar,
    ListingCategory
  },
  props: {
  },
  data() {
    return {
      patafian: []
    };
  },
  computed: {
    items() {
        return this.$store.getters.items;
    },

    count() {
      return this.$store.getters.count;
    }
  },
  methods: {
    resizeAside(value) {
      this.isResize = value;
    }
  }
};
</script>