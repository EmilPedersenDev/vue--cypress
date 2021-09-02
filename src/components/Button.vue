<template>
  <button @click="onHandleClick" :id="id">
    <slot>Click</slot>
  </button>
</template>

<script>
export default {
  name: "t-button",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    onHandleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  &:hover {
    cursor: pointer;
  }
}
</style>