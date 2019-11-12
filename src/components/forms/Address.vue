<template>
  <v-layout justify-content-center>
    <v-flex
      xs12
      lg12
    >
      <v-card-title
        style="width:100%"
        class="justify-content-center"
      >
        <h1 class="title">
          Address
        </h1>
      </v-card-title>
      <v-form
        ref="form"
        lazy-validation
      >
        <v-container>
          <v-layout
            wrap
            justify-content-center
          >
            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.address_1"
                :rules="formRules.address_1"
                label="Address"
                required
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.address_2"
                :rules="formRules.address_2"
                label="Address 2"
                required
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.city"
                :rules="formRules.city"
                label="City"
                required
              />
            </v-flex>
                  
            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.region"
                :rules="formRules.region"
                label="Region"
                required
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.postal_code"
                :rules="formRules.postal_code"
                label="Postal code"
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.shipping_region_id"
                label="Shipping region id"
                required
                type="number"
              />
            </v-flex>
                  
            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.country"
                :rules="formRules.country"
                required
                label="Country"
              />
            </v-flex>

            <v-flex
              xs12
            >
              <v-btn
                color="error"
                class="ma-0 text-xs-center"
                @click="send"
              >
                Update
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
    <v-snackbar
      v-model="snackbar"
      :timeout="timer"
      top
    >
      {{ setMessage }}
    </v-snackbar>
  </v-layout>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import { isEmpty, isInCorrectEmail } from '../../mixins/Validation'
export default {
  name: 'Address',
  
  data() {
    return {
      formRules: {
        address_1: [isEmpty],
        address_2: [isEmpty],
        city: [isEmpty],
        region: [isEmpty],
        country: [isEmpty],
        postal_code: [isEmpty],
        shipping_region_id: [isEmpty]

      },
      formData: {
        address_1: "",
        address_2: "",
        city: "",
        region: "",
        postal_code: "",
        country: "",
        shipping_region_id: "", 
      },
      timer: 2000,
      snackbar: false,
    }
  },

  computed: {
    ...mapState(['editFormState', 'editMessageState', 'customer']),

    setMessage() {
      return this.$store.getters.editStateMessage;
    },

    customer() {
      return this.$store.getters.customer;
    }
  },

  watch: {
    editFormState(val) {
      this.snackbar = val;
        val && window.setTimeout(() => this.$store.dispatch('toogleEditStateForm'), 2100);
    },
  },

  created() {
    for (let prop in this.$store.getters.customer) {
      this.formData[prop] = this.$store.getters.customer[prop] || '';
    }
  },

  methods: {
    send() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateAddress', this.formData);
      } 
    },
  }
};
</script>