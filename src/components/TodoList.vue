<template>
  <div class="TodoList">
    <ul>
      <li v-for="(todo, id) in todos" :key="id" class="todo-item">
        {{ todo }}
        <t-button @click="removeTodo(id)" id="delete-todo">X</t-button>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "todo-list",
  components: {
    "t-button": Button,
  },
  props: {
    todos: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    removeTodo(id) {
      this.$emit("onRemoveTodo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.TodoList {
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>