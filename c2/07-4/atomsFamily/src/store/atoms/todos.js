import { TODOS } from "../../todos";
import { atomFamily } from "recoil";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    const todo = TODOS.find((todo) => todo.id === id);
    return todo;
  },
});
