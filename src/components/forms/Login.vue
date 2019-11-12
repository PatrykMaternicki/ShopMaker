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
                Login
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
                      Login
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-flex>
        <v-snackbar
          v-model="snackbar"
          :timeout="timer"
          top
        >
          {{ setMessage }}
        </v-snackbar>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
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
      imageUrl: 'https://backendapi.turing.com/images/products/',
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
    ...mapState(['loginFormState', 'loginMessageState']),

    setMessage() {
      return this.$store.getters.loginStateMessage;
    }
  },

  watch: {
    loginFormState(val) {
      this.snackbar = val;
        val && window.setTimeout(() => this.$store.dispatch('toogleLoginStateForm'), 2100);
    },

    loginMessageState(val) {
      val && window.setTimeout(() => this.$router.push('/'), 2100);
    }
  },

  methods: {
    send() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('sendLogin', this.formData);
      } 
    }
  }
};
</script>