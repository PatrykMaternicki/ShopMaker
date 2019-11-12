export const TextFieldProps = {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    model: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => []
    },
    counter: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    }
  }
};