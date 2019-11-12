<template>
  <v-container
    fluid
    pr-4
    pl-4
    pt-4
    pb-4
    class="topbar--black"
  >
    <v-layout wrap>
      <v-flex
        xs12
        md4
        align-self-center
        class="text-xs-center text-sm-left"
      >
        <router-link
          class="pink--text display-1"
          to="/"
        >
          ShopMaker
        </router-link>
      </v-flex>
      <v-flex
        xs12
        md8
      > 
        <v-layout
          align-center
          wrap
        >
          <v-flex
            sm6
            lg8
            xs12
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
                ripple
              >
                {{ departament.name }}
              </v-tab>
            </v-tabs>
          </v-flex>
          <search />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Search from  './Search.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Toolbar',

  components: {
    Search
  },
  data() {
    return {
      tabsColor: '#323232',
      activeCategory: '',
      activeDepartament: ''
    };
  },

  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    departaments() {
      return this.$store.getters.departaments;
    }
  },

  created() {
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getDepartaments');
  },
  
  methods: {
    findItems(val) {
      if(val.length > 0) {
        this.$store.dispatch('findItems', val);
      } else {
        this.$store.dispatch('getItems');
      }
    },

    getItemsWithCategory(val) {
      this.$store.dispatch('getItemsInCategory', val);
    },

    getItemsWithDepartament(val) {
      this.$store.dispatch('getItemsInDepartament', val);
    }
  }
};
</script>
<style scope>
  .topbar--black {
    background-color: #323232;
  }
</style>