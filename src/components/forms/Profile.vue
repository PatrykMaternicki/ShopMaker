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
          Profile
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
                v-model="formData.name"
                :rules="formRules.name"
                label="Name"
                required
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.email"
                :rules="formRules.email"
                label="Email"
                required
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.password"
                label="Password"
              />
            </v-flex>
                  
            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.day_phone"
                label="First phone"
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.eve_phone"
                label="Twice phone"
              />
            </v-flex>

            <v-flex
              xs12
              lg5
            >
              <v-text-field
                v-model="formData.mob_phone"
                label="Mobile Phone"
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
  name: 'Profile',

  data() {
    return {
      imageUrl: 'https://backendapi.turing.com/images/products/',
      formRules: {
        name: [isEmpty],
        password: [isEmpty],
        email: [isEmpty],
        address: [isEmpty],
        phone: [isEmpty]
      },
      formData: {
        name: "",
        password: "",
        email: "",
        day_phone: "",
        mob_phone: "",
        eve_phone: "",
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
      this.formData[prop] = this.$store.getters.customer[prop] === 'null' ? '' : this.$store.getters.customer[prop]; 
    }
  },

  methods: {
    send() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateCustomer', this.formData);
      } 
    },
  }
};
</script>