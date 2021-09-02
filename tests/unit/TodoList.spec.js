import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("TodoList", () => {
  it("receives todos prop and displays in unordered list", () => {
    const wrapper = shallowMount(TodoList, {
      propsData: {
        todos: ["städa"],
      },
    });

    const todoList = wrapper.find("ul");

    expect(todoList.element.children.length).toBe(1);
  });
});
