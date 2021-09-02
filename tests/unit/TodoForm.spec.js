import { mount, shallowMount } from "@vue/test-utils";
import TodoForm from "@/components/TodoForm.vue";

describe("TodoForm component test", () => {
  it("emits todo to parent", () => {
    const wrapper = shallowMount(TodoForm, {
      data() {
        return {
          todos: ["städa"],
        };
      },
    });

    wrapper.vm.$emit("submitTodo", "städa");

    expect(wrapper.emitted().submitTodo[0]).toStrictEqual(["städa"]);
  });
});
