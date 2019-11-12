<template>
  <v-app>
    <v-container
      d-flex
      align-center
      justify-content-center
    >
      <v-layout justify-content-center>
        <v-flex
          xs12
          lg6
        >
          <v-card>
            <v-card-title>
              <h1 class="title">
                Register
              </h1>
            </v-card-title>
            <v-form
              ref="form"
              lazy-validation
            >
              <v-container>
                <v-layout wrap>
                  <v-flex
                    xs12
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
                  >
                    <v-text-field
                      v-model="formData.password"
                      :rules="formRules.password"
                      type="password"
                      label="Password"
                      required
                    />
                  </v-flex>

                  <v-flex
                    xs12
                  >
                    <v-text-field
                      v-model="formData.email"
                      :rules="formRules.email"
                      label="E-mail"
                      required
                    />
                  </v-flex>
                  
                  <v-flex
                    xs12
                  >
                    <v-btn
                      color="error"
                      class="ma-0"
                      @click="send"
                    >
                      Register
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        :timeout="timer"
        top
      >
        {{ setMessage }}
      </v-snackbar>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters,mapState } from 'vuex';
import { isEmpty, isInCorrectEmail } from '../../mixins/Validation'
export default {
  name: 'Register',

  data() {
    return {
      imageUrl: 'https://backendapi.turing.com/images/products/',
      formRules: {
        name: [isEmpty],
        password: [isEmpty],
        email: [isEmpty, isInCorrectEmail]
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
    ...mapState(['formState', 'messageState']),

    setMessage() {
      return this.$store.getters.stateMessage;
    }
  },

  watch: {
    formState(val) {
      this.snackbar = val;
        val && window.setTimeout(() => this.$store.dispatch('toogleStateForm'), 2100);
    },

    messageState(val) {
      val && window.setTimeout(() => window.location.href= "/", 2100);
    }
  },

  methods: {
    send() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('send', this.formData);
      } 
    }
  }
};
</script>