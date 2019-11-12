\<template>
  <v-app>
    <v-container>
      <v-card>
        <v-layout
          justify-content-center
          column
        >
          <v-flex
            xs12
            lg6
          >
            <v-flex
              xs12
              d-flex
              align-center
              pa-3
            >
              <v-flex
                xs4
                text-xs-left
              >
                <v-btn
                  color="pink"
                  class="white--text"
                  rounded
                  @click="cleanShippingCard($event)"
                >
                  Empty Card
                </v-btn>
              </v-flex>
              <v-flex
                xs4
                text-xs-center
              >
                <h1 class="title title--inline">
                  Total: {{ cost }}$
                </h1>
              </v-flex>
              <v-flex
                xs4
                text-xs-right
              > 
                <v-btn
                  color="pink"
                  class="white--text"
                  rounded
                  @click="goTo($event)"
                >
                  Place Order
                </v-btn>
              </v-flex>
            </v-flex>
          </v-flex>
          <v-flex
            xs12
            lg6
          >
            <template>
              <div class="table">
                <table>
                  <thead class="v-data-table-header">
                    <tr>
                      <th
                        v-for="header in tableHeaders"
                        :key="header.text"
                      >
                        {{ header.text }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in cart"
                      :key="index"
                    >
                      <td>
                        <v-chip
                          outline
                          style="color: black !important"
                          color="transparent"
                          @click="removeItem(item.item_id)"
                        >
                          <v-icon
                            left
                            color="red"
                          >
                            clear
                          </v-icon>
                          Remove
                        </v-chip>
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.attributes }}</td>
                      <td>${{ item.price }}</td>
                      <td>
                        <v-btn
                          rounded
                          color="pink"
                          class="ma-2 white--text"
                          x-small
                          icon
                          @click="addInStock(item.item_id)"
                        >
                          <v-icon white>
                            add
                          </v-icon>
                        </v-btn>
                        {{ item.quantity }}
                        <v-btn
                          rounded
                          color="pink"
                          class="ma-2 white--text"
                          x-small
                          icon
                          @click="removeInStock(item.item_id)"
                        >
                          <v-icon white>
                            remove
                          </v-icon>
                        </v-btn>
                      </td>
                      <td>{{ item.subtotal }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </v-flex>
          <v-snackbar
            v-model="snackbar"
            :timeout="timer"
            top
          >
            {{ setMessage }}
          </v-snackbar>
        </v-layout>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import { TableHeaders } from '../../dictionary/shipping/table-headers';
import { isEmpty, isInCorrectEmail } from '../../mixins/Validation'
export default {
  name: 'Login',

  components:{
  },

  props: {
    className: {
      type: String,
      default: 'panelPage'
    },
  },

  data() {
    return {
      tableHeaders: TableHeaders,
      formRules: {
        name: [isEmpty],
        password: [isEmpty],
        email: [isEmpty]
      },
      formData: {
        name: "",
        password: "",
        email: ""
      },
      timer: 2000,
      snackbar: false,
    }
  },

  computed: {
    ...mapState(['cart']),

    cost() {
      return Number.parseFloat(this.$store.getters.cost).toFixed(2);
    }
  },

  methods: {
    removeItem(index) {
      this.$store.dispatch('removeItem', index);
    },

    addInStock(index) {
      this.$store.dispatch('addInStock', index);
    },
    
    removeInStock(index) {
      this.$store.dispatch('removeInStock', index);
    },
    
    cleanShippingCard() {
      this.$store.dispatch('cleanShippingCard');
    },

    goTo(event) {
      this.$router.push('/make-order');
    }
  }
};
</script>
<style scss scoped>
.title--inline {
  display: inline;
}

.table {
  width: 100%;
  padding: 16px;
}

.table table {
  width: 100%;
}

.table table td {
  line-height: 48px;
  text-align: center;
}

.table table th {
  text-align: center;
}

</style>