<template>
  <v-flex
    sm6
    lg4
    xs12
    d-flex
  >
    <div :class="`${className}__wrapper`">
      <label
        :class="`${className}__label`"
        for="ecomerceSearch"
      />
      <input
        id="ecomerceSearch"
        type="text"
        :class="`${className}__input`"
        placeholder="Search Everything"
        @input="findItems($event)"
      >
    </div>
    <v-icon
      size="30"
      :class="`${className}__icon`"
      color="white"
    >
      search
    </v-icon>
  </v-flex>
</template>
<script>
export default {
  name: 'NotFound',
  data() {
    return {
      className: 'ecomerceSearch'
    }
  },

  methods: {
    findItems(event) {
      if(event.target.value.length > 0) {
        this.$store.dispatch('findItems', event.target.value);
      } else {
        this.$store.dispatch('getItems');
      }
    }
  }
};
</script>
<style scoped>
.ecomerceSearch__input {
  font-size: 1.2rem;
  line-height: 45px;
  width: 100%;
  padding-left: 20px;
}

.ecomerceSearch__input::placeholder {
  font-size: 1.2rem;
}

.ecomerceSearch__wrapper {
  position: relative;
  background-color: white;
  height: 45px;
  width: 100%;
  border-radius: 30px;
}

.ecomerceSearch__label {
  width: 100%;
  height: 100%;
  position: absolute;
}

.ecomerceSearch__input {
  transition: color .5s;
}

.ecomerceSearch__input:focus {
  outline: none;
  color: #e91e63;
}


.ecomerceSearch__input:focus::placeholder{
  color: #e91e63;
}

.ecomerceSearch__icon {
  text-align: left;
  display: inline;
  line-height: 45px;
  padding-left: 16px;
}
</style>