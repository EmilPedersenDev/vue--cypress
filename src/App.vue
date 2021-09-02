<template>
  <div id="app">
    <todo-form @submitTodo="onHandleSubmit" />
    <todo-list :todos="todos" @onRemoveTodo="removeTodo" />
    <products :products="products" />
    <div class="outer">
      <div class="outer__wrapper" @click="bubbleOne">
        hej
        <div class="outer__item" @click.stop="bubbleTwo">nej</div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import Products from "./components/List.vue";

export default {
  name: "App",
  components: {
    "todo-form": TodoForm,
    "todo-list": TodoList,
    products: Products,
  },
  data() {
    return {
      todos: [],
      products: [
        { id: 1, name: "Hammer", selected: false },
        { id: 2, name: "Drill", selected: false },
        { id: 3, name: "Shovel", selected: false },
        { id: 4, name: "Bucket", selected: false },
      ],
    };
  },
  methods: {
    onHandleSubmit(todo) {
      this.todos = [...this.todos, todo];
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo, i) => {
        if (i !== id) {
          return todo;
        }
      });
    },
    bubbleOne() {
      console.log("Bubble 1");
    },
    bubbleTwo() {
      console.log("Bubble 2");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
</style>
