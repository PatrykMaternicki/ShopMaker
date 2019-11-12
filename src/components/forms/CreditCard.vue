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
          Credit card
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
                v-model="formData.credit_card"
                :rules="formRules.credit_card"
                label="Credit Card"
                required
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
  name: 'CreditCard',
  
  data() {
    return {
      formRules: {
        credit_card: [isEmpty],
      },
      formData: {
        credit_card: "",
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
        this.$store.dispatch('updateCreditCard', this.formData);
      } 
    },
  }
};
</script>