<template>
  <v-flex 
    md12 
    lg6 
    pa-3
  >
    <v-flex xs12>
      <h1 class="title mb-3">
        Your order
      </h1>
    </v-flex>
    <v-flex
      xs12
      lg8
    >
      <div class="table text-xs-center">
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
            <tr
              v-for="(item, index) in cart"
              :key="index"
            >
              <td />
              <td>{{ item.name }}</td>
              <td>{{ item.attributes }}</td>
              <td>${{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.subtotal }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </v-flex>
  </v-flex>
</template>
<script>
import { mapGetters } from 'vuex';
import { TableHeaders } from '../../dictionary/shipping/table-headers';
export default {
  name: 'NotFound',
  data() {
    return {
			tableHeaders: TableHeaders
		};
	},
	computed: {
		cart() {
			return this.$store.getters.cart;
		}
	}
};
</script>
<style scoped scss>
.title--inline {
  display: inline;
}

.table {
  width: 100%;
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
