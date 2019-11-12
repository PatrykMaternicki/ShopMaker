<template>
  <div class="form-row">
    <label
      class="title mb-3"
      for="card-element"
    >
      Credit or debit card
    </label>
    <v-flex xs12>
      <div id="stripeContainer" />
      <div
        id="card-errors"
        role="alert"
      />
    </v-flex>
    <v-flex
      xs12
      mt-3
    >
      <v-btn
        class="ma-0 pink white--text"
        @click="createStripeToken($event)"
      >
        Submit Payment
      </v-btn>
    </v-flex>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'MakeOrder',
  data() {
    return {};
  },

  computed: {
    ...mapState(['loginFormState', 'loginMessageState', 'htmlElement']),
  },

  watch: {
    htmlElement(val) {
      val && this.setToView(val);
    }
  },

  methods: {
    setToView(stripeHtmlElementInterface) {
      stripeHtmlElementInterface.mount('#stripeContainer');
      stripeHtmlElementInterface.addEventListener('change', (event) => this.setError(event));
    },

    setError(event) {
      let displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    },

    createStripeToken() {
      this.$store.dispatch('payOrder', this.htmlElement);
    }
  }
};
</script>
<style scss>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

#card-errors {
  color: red;
}
</style>