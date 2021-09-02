<template>
  <div class="TodoForm">
    <t-input placeholder="Add todo" v-model="todo" id="add-todo-input" />
    <t-button @click="submitTodo" id="todo-submit" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Input from "./Input.vue";
export default {
  name: "todo-form",
  components: {
    "t-button": Button,
    "t-input": Input,
  },
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    submitTodo() {
      this.$emit("submitTodo", this.todo);
    },
  },
};
</script>

<style lang="scss" scoped>
.TodoForm {
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
}
</style>