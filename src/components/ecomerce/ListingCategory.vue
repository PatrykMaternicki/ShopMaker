<template>      
  <v-flex
    xs12
    lg2
    pl-4
    :class="`${className}`"
  >
    <h2 :class="`${className}__title`">
      Categories
    </h2>
    <ul :class="`${className}__list`">
      <li
        v-for="category in categories"
        :key="category.category_id"
      >
        <button
          :class="`${className}__button`"
          @click="getItemsWithCategory(category.category_id)"
        >
          {{ category.name }}
        </button>
      </li>
    </ul>
  </v-flex>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Toolbar',
  data() {
    return {
      tabsColor: '#D3D3D3',
      activeCategory: '',
      className: 'listingCategory'
    };
  },

  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },

  methods: {
    getItemsWithCategory(val) {
      this.$store.dispatch('getItemsInCategory', val);
    },
  }
};
</script>
<style scss scoped>


  .listingCategory {
    overflow-x: scroll;
  }

  .listingCategory__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    min-width: 500px;
  }

  .listingCategory__list li {
    font-size: 1.2rem;
  }

  .listingCategory__title {
    color: #e91e63;
    padding: 1rem 0;
    text-decoration: underline;
  }

  .listingCategory__button {
    transition: color .5s;
    color: rgba(0,0,0,.87);
    cursor: pointer;
    width: 100%;
    text-align: left;
  }

  .listingCategory__button:hover {
    color: #e91e63;
  }

  .listingCategory__button:focus {
    outline: none;
    color: #e91e63;
  }

  @media (min-width: 1264px) {
    .listingCategory {
      overflow: inherit;
    }

    .listingCategory__title {
      padding: 1rem 0.5rem;
    }
  
    .listingCategory__list {
      display: block;
      padding-left: 0.5rem;
      min-width: inherit;
    }

    .listingCategory__list li {
      font-size: 1.2rem;
      padding: 1rem 0.5rem;
    }
  }
</style> 