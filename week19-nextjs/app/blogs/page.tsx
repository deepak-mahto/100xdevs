import axios from "axios";

async function getData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
}

export default async function Blog() {
  const todos = await getData();

  return (
    <div>
      {todos.map((todo: Todo) => (
        <Todo
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

interface Todo {
  title: string;
  completed: boolean;
  userId: string;
}

function Todo({ title, completed, userId }: Todo) {
  return (
    <div>
      {title}: {completed ? "done" : "not done"}
    </div>
  );
}
