<template>
  <div>
    <login />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Login from '../components/forms/Login.vue';
export default {
  name: 'LoginView',
  components: {
    Login
  },
  props: {
  },
  data() {
    return {};
  },
};
</script>