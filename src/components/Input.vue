<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    :id="id"
    @input="onHandleInput($event.target.value)"
  />
</template>

<script>
export default {
  name: "t-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    onHandleInput(value) {
      this.$emit("input", value);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
input {
  padding: 10px;
  border: 1px solid #000;
  background: transparent;
  border-radius: 5px;
  width: 100%;
}
</style>