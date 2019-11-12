<template>
  <div>
    <Register />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Register from '../components/forms/Register.vue';
export default {
  name: 'RegisterView',
  components: {
    Register
  },
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    resizeAside(value) {
      this.isResize = value;
    }
  }
};
</script>